const { test } = require("node:test");
const assert = require("node:assert/strict");
const ts = require("typescript");
const fs = require("node:fs");
const vm = require("node:vm");
function load(file) {
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  }).outputText;
  const loadedModule = { exports: {} };
  vm.runInNewContext(code, {
    module: loadedModule,
    exports: loadedModule.exports,
    require: (path) =>
      require(
        path === "@/content/updates.json"
          ? "../src/content/updates.json"
          : path,
      ),
    Date,
    Number,
  });
  return loadedModule.exports;
}
const { status, featuredUpdates } = load("src/lib/updates.ts");
test("campaign windows have deterministic UTC boundaries", () => {
  const campaign = {
    kind: "campaign",
    startsAt: "2026-10-14T00:00:00Z",
    endsAt: "2026-10-20T23:59:00Z",
  };
  assert.equal(
    status(campaign, Date.parse("2026-10-13T23:59:59Z")),
    "upcoming",
  );
  assert.equal(status(campaign, Date.parse(campaign.startsAt)), "active");
  assert.equal(status(campaign, Date.parse(campaign.endsAt)), "ended");
  assert.equal(status({ kind: "campaign" }), "unconfirmed");
});
test("expired campaigns disappear from featured slots", () => {
  assert.equal(
    featuredUpdates(Date.parse("2026-10-21T00:00:00Z")).some(
      (x) => x.id === "unpack-real-stocks-week-3",
    ),
    false,
  );
});
test("news entries have bilingual copy and allowlisted original sources", () => {
  const data = require("../src/content/updates.json");
  const ids = new Set();
  for (const item of data) {
    assert.ok(!ids.has(item.id));
    ids.add(item.id);
    assert.ok(
      [
        "learn.backpack.exchange",
        "backpack.exchange",
        "support.backpack.exchange",
        "docs.backpack.exchange",
        "x.com",
        "www.okx.com",
        "www.binance.com",
      ].includes(new URL(item.source).hostname),
    );
    for (const field of ["title", "summary", "details"]) {
      assert.equal(item[field].length, 2);
      assert.ok(item[field].every(Boolean));
    }
    if (item.kind === "campaign") {
      assert.ok(Date.parse(item.endsAt) > Date.parse(item.startsAt));
    }
  }
});
