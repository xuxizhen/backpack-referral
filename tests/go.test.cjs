const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const cache = new Map();
function resolveFile(spec) {
  const candidates = [spec, spec + ".ts", spec + ".tsx", spec + ".json"];
  return candidates.find(
    (file) => fs.existsSync(file) && fs.statSync(file).isFile(),
  );
}
function load(spec) {
  if (spec === "next/link") {
    return {
      __esModule: true,
      default: function Link({ href, children, ...rest }) {
        return React.createElement("a", { href, ...rest }, children);
      },
    };
  }
  if (spec === "next/navigation") {
    return {
      notFound() {
        throw new Error("notFound");
      },
    };
  }
  const file = spec.startsWith("@/")
    ? resolveFile(path.join("src", spec.slice(2)))
    : spec.endsWith(".ts") || spec.endsWith(".tsx")
      ? spec
      : resolveFile(spec);
  if (!file) return require(spec);
  if (file.endsWith(".json")) return require(path.resolve(file));
  if (cache.has(file)) return cache.get(file);
  const output = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: file,
  }).outputText;
  const loaded = { exports: {} };
  cache.set(file, loaded.exports);
  const localRequire = (request) => {
    if (request.startsWith(".")) {
      return load(path.resolve(path.dirname(file), request));
    }
    return load(request);
  };
  const runner = new Function(
    "exports",
    "require",
    "module",
    "__filename",
    "__dirname",
    output,
  );
  const loadedModule = { exports: loaded.exports };
  runner(
    loadedModule.exports,
    localRequire,
    loadedModule,
    file,
    path.dirname(file),
  );
  cache.set(file, loadedModule.exports);
  return loadedModule.exports;
}

test("short invite redirects carry status, location and noindex", async () => {
  const { goRedirect, invites } = load("src/lib/invites.ts");
  const { GET } = load("src/app/go/[exchange]/route.ts");
  for (const [id, invite] of Object.entries(invites)) {
    const decision = goRedirect(id);
    assert.equal(decision.status, 307, id);
    assert.equal(decision.location, invite.url, id);
    assert.match(decision.robots, /noindex/);
    const response = await GET(new Request("https://www.feelens.net/go/" + id), {
      params: Promise.resolve({ exchange: id }),
    });
    assert.equal(response.status, 307, id);
    assert.equal(response.headers.get("location"), invite.url, id);
    assert.match(response.headers.get("x-robots-tag") || "", /noindex/i, id);
  }
  assert.equal(goRedirect("unknown"), null);
  const missing = await GET(new Request("https://www.feelens.net/go/nope"), {
    params: Promise.resolve({ exchange: "nope" }),
  });
  assert.equal(missing.status, 404);
  assert.match(missing.headers.get("x-robots-tag") || "", /noindex/i);
});

test("robots disallow /go and the sitemap omits those redirects", () => {
  const robots = load("src/app/robots.ts").default();
  const rules = Array.isArray(robots.rules) ? robots.rules : [robots.rules];
  assert.ok(rules.some((rule) => rule.disallow.includes("/go")));
  const urls = load("src/app/sitemap.ts")
    .default()
    .map((entry) => entry.url);
  assert.ok(urls.length > 0);
  assert.ok(urls.every((url) => !url.includes("/go")));
});

test("english and simplified chinese homepages show the three invite CTAs", async () => {
  const page = load("src/app/[lang]/page.tsx").default;
  for (const lang of ["en", "zh-cn"]) {
    const element = await page({ params: Promise.resolve({ lang }) });
    const html = renderToStaticMarkup(element);
    for (const id of ["backpack", "binance", "okx"]) {
      assert.match(html, new RegExp(`href="/go/${id}"`), lang);
      assert.match(
        html,
        new RegExp(`data-placement="home_hero"[^>]*data-exchange="${id}"|data-exchange="${id}"[^>]*data-placement="home_hero"`),
        lang,
      );
      assert.match(html, /rel="sponsored nofollow noopener"/, lang);
      assert.match(html, /target="_blank"/, lang);
    }
    for (const code of ["meme", "BNBBABA", "X45LZTTE"])
      assert.match(html, new RegExp(`>${code}<`), `${lang} ${code}`);
    assert.match(html, /affiliate-disclosure/);
  }
});

test("published fee rows reuse checked Binance and OKX rates and add Backpack Tier 1", () => {
  const { feeSnapshots } = load("src/lib/fees.ts");
  const exchanges = require("../src/content/exchanges.json");
  assert.deepEqual(feeSnapshots.backpack.spot, { maker: "0.08%", taker: "0.10%" });
  assert.deepEqual(feeSnapshots.backpack.futures, { maker: "0.02%", taker: "0.05%" });
  assert.equal(feeSnapshots.backpack.checked, "2026-10-22");
  assert.equal(feeSnapshots.backpack.tier, "Tier 1");
  assert.match(exchanges.okx.costs.en, /0\.0800%/);
  assert.match(exchanges.okx.costs.en, /0\.1000%/);
  assert.deepEqual(feeSnapshots.okx.spot, { maker: "0.0800%", taker: "0.1000%" });
  assert.equal(feeSnapshots.okx.futures, null);
  assert.match(exchanges.binance.costs.en, /0\.100%/);
  assert.match(exchanges.binance.costs.en, /0\.075%/);
  assert.deepEqual(feeSnapshots.binance.spot, { maker: "0.100%", taker: "0.100%" });
  assert.equal(feeSnapshots.binance.futures, null);
});

test("the retired Binance backup code is gone and invite URLs live in one file", () => {
  const files = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else files.push(full);
    }
  }
  walk("src");
  walk("docs");
  files.push("README.md");
  const urls = [
    "https://backpack.exchange/join/meme",
    "https://www.bsmkweb.cc/register?ref=BNBBABA",
    "https://okx.com/join/X45LZTTE",
  ];
  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    assert.equal(text.includes("JH5SZIO4"), false, file);
    if (path.normalize(file) === path.normalize("src/lib/invites.ts")) continue;
    if (path.normalize(file) === path.normalize("tests/go.test.cjs")) continue;
    if (path.normalize(file) === path.normalize("tests/routes.cjs")) continue;
    for (const url of urls) assert.equal(text.includes(url), false, `${file} ${url}`);
  }
});

test("referral clicks are not sent before consent or without gtag", () => {
  const store = new Map();
  const events = [];
  global.localStorage = {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
  };
  global.window = {};
  const { trackReferral } = load("src/components/ReferralTracker.tsx");
  trackReferral("backpack", "home_hero", "zh-cn");
  assert.equal(events.length, 0);
  window.gtag = (...args) => events.push(args);
  trackReferral("backpack", "home_hero", "zh-cn");
  assert.equal(events.length, 0);
  store.set("feelens-analytics", "granted");
  trackReferral("binance", "mobile_sticky", "en");
  assert.deepEqual(events, [
    [
      "event",
      "referral_click",
      { exchange: "binance", placement: "mobile_sticky", language: "en" },
    ],
  ]);
  delete window.gtag;
  assert.doesNotThrow(() => trackReferral("okx", "referral_page", "en"));
  delete global.localStorage;
  delete global.window;
});
