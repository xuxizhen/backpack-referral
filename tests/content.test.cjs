const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const messages = require("../src/content/messages.json");
const exchanges = require("../src/content/exchanges.json");
const languages = ["en", "zh-cn", "fr", "pt", "ko", "ja", "ru", "fa"];
test("all eight locales have complete UI and exchange translations", () => {
  assert.deepEqual(Object.keys(messages), languages);
  const keys = Object.keys(messages.en).sort();
  for (const lang of languages) {
    assert.deepEqual(Object.keys(messages[lang]).sort(), keys);
    assert.ok(
      Object.values(messages[lang]).every(
        (v) => typeof v === "string" && v.trim(),
      ),
    );
    for (const e of Object.values(exchanges))
      for (const field of ["products", "costs", "offer"])
        assert.ok(e[field][lang]?.trim());
  }
});
test("effective fee estimate does not invent missing rates and respects zero", () => {
  const loadedModule = { exports: {} };
  const code = ts.transpileModule(
    fs.readFileSync("src/lib/fee-comparison.ts", "utf8"),
    { compilerOptions: { module: ts.ModuleKind.CommonJS } },
  ).outputText;
  vm.runInNewContext(code, { module: loadedModule, exports: loadedModule.exports, Number });
  const { estimateFee } = loadedModule.exports;
  assert.equal(estimateFee("10000", ""), null);
  assert.equal(estimateFee("10000", "0"), 0);
  assert.equal(estimateFee("10000", "0.075"), 7.5);
  assert.equal(estimateFee("10000", "0.1"), 10);
  for (const values of [
    ["-1", "1"],
    ["100", "101"],
    ["1", "-1"],
    ["Infinity", "1"],
    ["", "1"],
    ["1", "NaN"],
  ])
    assert.equal(estimateFee(...values), null);
});
test("published news retains an exchange and a calendar date", () => {
  const code = ts.transpileModule(
    fs.readFileSync("src/data/updates.ts", "utf8"),
    { compilerOptions: { module: ts.ModuleKind.CommonJS } },
  ).outputText;
  const loadedModule = { exports: {} };
  vm.runInNewContext(code, {
    module: loadedModule,
    exports: loadedModule.exports,
  });
  for (const item of loadedModule.exports.updateItems) {
    assert.ok(["backpack", "okx", "binance"].includes(item.exchange));
    assert.match(item.date, /^\d{4}-\d{2}-\d{2}$/);
  }
});
