const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const messages = require("../src/content/messages.json");

function loadRedirects() {
  const loaded = { exports: {} };
  const code = ts.transpileModule(
    fs.readFileSync("src/lib/redirects.ts", "utf8"),
    { compilerOptions: { module: ts.ModuleKind.CommonJS } },
  ).outputText;
  vm.runInNewContext(code, {
    module: loaded,
    exports: loaded.exports,
  });
  return loaded.exports;
}

test("legacy urls resolve to the final feelens path in one decision", () => {
  const { canonicalLocation, finalPathname, liveLangs } = loadRedirects();
  assert.deepEqual([...liveLangs], Object.keys(messages));
  const cases = [
    ["/de/review", "/en/exchanges/backpack"],
    ["/ja/referral", "/ja/referrals/backpack"],
    ["/zh-tw/fees", "/zh-cn/compare"],
    ["/de", "/en"],
    ["/de/", "/en"],
    ["/en", "/en"],
    ["/en/", "/en"],
    ["/", "/en"],
    ["/it/exchanges/okx", "/en/exchanges/okx"],
    ["/fr/vs-binance", "/fr/compare/backpack-vs-binance"],
    ["/zh-cn/exchanges/backpack", "/zh-cn/exchanges/backpack"],
    ["/en/review/", "/en/exchanges/backpack"],
  ];
  for (const [input, output] of cases)
    assert.equal(finalPathname(input), output, input);
  assert.equal(
    canonicalLocation("www.backpackref.com", "/de/review", "?utm_source=gsc"),
    "https://www.feelens.net/en/exchanges/backpack?utm_source=gsc",
  );
  assert.equal(
    canonicalLocation("backpackref.com", "/en", ""),
    "https://www.feelens.net/en",
  );
  assert.equal(
    canonicalLocation(
      "www.backpackref.com",
      "/zh-cn/exchanges/backpack",
      "?utm_source=seo",
    ),
    "https://www.feelens.net/zh-cn/exchanges/backpack?utm_source=seo",
  );
  assert.equal(canonicalLocation("www.feelens.net", "/en", ""), null);
  assert.equal(finalPathname("/go/backpack"), "/go/backpack");
  assert.equal(canonicalLocation("www.feelens.net", "/go/binance", ""), null);
  assert.equal(
    canonicalLocation("feelens.net", "/go/okx", "?x=1"),
    "https://www.feelens.net/go/okx?x=1",
  );
  assert.equal(
    canonicalLocation("www.feelens.net", "/zh-cn/exchanges/backpack", "?a=1"),
    null,
  );
  assert.equal(
    canonicalLocation("www.feelens.net", "/ja/referral", ""),
    "https://www.feelens.net/ja/referrals/backpack",
  );
  assert.equal(
    canonicalLocation("WWW.Backpackref.com:443", "/de", ""),
    "https://www.feelens.net/en",
  );
});
