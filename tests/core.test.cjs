const { test } = require("node:test");
const assert = require("node:assert/strict");
const ts = require("typescript");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

function load(file) {
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      esModuleInterop: true,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const loadedModule = { exports: {} };
  const dirname = path.dirname(path.resolve(file));
  vm.runInNewContext(
    code,
    {
      module: loadedModule,
      exports: loadedModule.exports,
      require: (request) => {
        if (request.startsWith("@/")) {
          return load(path.join("src", request.slice(2) + ".ts"));
        }
        if (request.startsWith(".")) {
          return load(path.resolve(dirname, request + ".ts"));
        }
        return require(request);
      },
      Date,
      Number,
    },
    { filename: file },
  );
  return loadedModule.exports;
}

const { updates, selectUpdates, newestUpdateDate, updateCopy } = load(
  "src/lib/updates.ts",
);
const { updateItems, updateCategories, updateExchanges } = load(
  "src/data/updates.ts",
);

test("news entries are unique, dated and sourced from allowlisted hosts", () => {
  const ids = new Set();
  for (const item of updateItems) {
    assert.ok(!ids.has(item.id), item.id);
    ids.add(item.id);
    assert.match(item.date, /^\d{4}-\d{2}-\d{2}$/, item.id);
    assert.ok(!Number.isNaN(Date.parse(item.date)), item.id);
    assert.ok(updateExchanges.includes(item.exchange), item.id);
    assert.ok(updateCategories.includes(item.category), item.id);
    for (const field of ["title", "summary"]) {
      assert.ok(item[field].en.trim(), item.id);
      assert.ok(item[field].zh.trim(), item.id);
    }
    assert.ok(
      [
        "learn.backpack.exchange",
        "backpack.exchange",
        "support.backpack.exchange",
        "docs.backpack.exchange",
        "x.com",
        "www.okx.com",
        "www.binance.com",
      ].includes(new URL(item.sourceUrl).hostname),
      item.sourceUrl,
    );
  }
  const idsInOrder = Array.from(updates, (item) => String(item.id));
  for (const id of [
    "tokenized-uvxy",
    "backpack-ai-search",
    "stock-limit-orders",
    "unpack-real-stocks-week-3",
  ]) {
    assert.ok(idsInOrder.includes(id), id);
  }
  assert.equal(idsInOrder.length, 28);
  assert.equal(String(newestUpdateDate()), "2026-10-22");
  assert.equal(idsInOrder[0], "binance-2026-10-22-stock-options");
  const dates = Array.from(updates, (item) => String(item.date));
  for (let i = 1; i < dates.length; i++) {
    assert.ok(dates[i - 1] >= dates[i], dates[i]);
  }
  assert.equal(
    updates.filter((item) => String(item.exchange) === "binance").length,
    8,
  );
  assert.equal(
    updates.filter((item) => String(item.exchange) === "okx").length,
    8,
  );
  assert.equal(
    updates.filter((item) => String(item.id).includes("ai-search")).length,
    2,
  );
});

test("exchange filters keep newest-first order and ignore unknown values", () => {
  const fixture = [
    {
      id: "old-okx",
      exchange: "okx",
      date: "2026-09-01",
      category: "fees",
      title: { en: "OKX fees", zh: "欧易费率" },
      summary: { en: "OKX summary", zh: "欧易摘要" },
      sourceUrl: "https://www.okx.com/fees",
    },
    {
      id: "new-binance",
      exchange: "binance",
      date: "2026-10-02",
      category: "product",
      title: { en: "Binance product", zh: "币安产品" },
      summary: { en: "Binance summary", zh: "币安摘要" },
      sourceUrl: "https://www.binance.com/en/fee/trading",
    },
    {
      id: "mid-backpack",
      exchange: "backpack",
      date: "2026-10-01",
      category: "listing",
      title: { en: "Backpack listing", zh: "背包上新" },
      summary: { en: "Backpack summary", zh: "背包摘要" },
      sourceUrl: "https://learn.backpack.exchange/blog/example",
    },
  ];
  assert.equal(
    JSON.stringify(Array.from(selectUpdates(fixture, "all"), (item) => item.id)),
    JSON.stringify(["new-binance", "mid-backpack", "old-okx"]),
  );
  assert.equal(
    JSON.stringify(
      Array.from(selectUpdates(fixture, "binance"), (item) => item.exchange),
    ),
    JSON.stringify(["binance"]),
  );
  assert.equal(
    JSON.stringify(Array.from(selectUpdates(fixture, "nope"), (item) => item.id)),
    JSON.stringify(["new-binance", "mid-backpack", "old-okx"]),
  );
  assert.equal(selectUpdates(updates, "binance").length, 8);
  assert.equal(selectUpdates(updates, "okx").length, 8);
  assert.equal(selectUpdates(updates, "backpack").length, 12);
  assert.equal(String(updateCopy(fixture[1], "zh-cn").title), "币安产品");
  assert.equal(String(updateCopy(fixture[1], "fr").title), "Binance product");
  assert.equal(String(updateCopy(fixture[1], "ja").summary), "Binance summary");
});
