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
  const entries = load("src/app/sitemap.ts").default();
  const urls = entries.map((entry) => entry.url);
  assert.ok(urls.length > 0);
  assert.ok(urls.every((url) => !url.includes("/go")));
  const news = entries.filter((entry) => entry.url.endsWith("/updates"));
  assert.equal(news.length, 8);
  assert.ok(news.every((entry) => entry.lastModified === "2026-10-22"));
  assert.ok(
    entries
      .filter((entry) => !entry.url.endsWith("/updates"))
      .every((entry) => entry.lastModified === "2026-10-22"),
  );
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
    assert.match(html, /0\.0200%/);
    assert.match(html, /0\.0500%/);
    assert.match(html, /https:\/\/www\.binance\.com\/en\/fee\/futureFee/);
    assert.equal((html.match(/2026-10-22/g) || []).length >= 3, true, lang);
    assert.doesNotMatch(html, /notListed|已核来源未列出/);
  }
});

test("published fee rows use the 2026-10-22 base tier for spot and futures", () => {
  const { feeSnapshots } = load("src/lib/fees.ts");
  const exchanges = require("../src/content/exchanges.json");
  const messages = require("../src/content/messages.json");
  assert.deepEqual(feeSnapshots.backpack.spot, { maker: "0.08%", taker: "0.10%" });
  assert.deepEqual(feeSnapshots.backpack.futures, { maker: "0.02%", taker: "0.05%" });
  assert.equal(feeSnapshots.backpack.checked, "2026-10-22");
  assert.equal(feeSnapshots.backpack.tier, "Tier 1");
  assert.equal(feeSnapshots.backpack.source, feeSnapshots.backpack.futuresSource);
  assert.match(exchanges.okx.costs.en, /0\.0800%/);
  assert.match(exchanges.okx.costs.en, /0\.0200%/);
  assert.match(exchanges.okx.costs["zh-cn"], /0\.0200%/);
  assert.deepEqual(feeSnapshots.okx.spot, { maker: "0.0800%", taker: "0.1000%" });
  assert.deepEqual(feeSnapshots.okx.futures, { maker: "0.0200%", taker: "0.0500%" });
  assert.equal(feeSnapshots.okx.checked, "2026-10-22");
  assert.equal(feeSnapshots.okx.source, "https://www.okx.com/fees");
  assert.match(exchanges.binance.costs.en, /0\.100%/);
  assert.match(exchanges.binance.costs.en, /0\.0200%/);
  assert.match(exchanges.binance.costs.en, /0\.075%/);
  assert.match(exchanges.binance.costs["zh-cn"], /0\.0200%/);
  assert.deepEqual(feeSnapshots.binance.spot, { maker: "0.100%", taker: "0.100%" });
  assert.deepEqual(feeSnapshots.binance.futures, { maker: "0.0200%", taker: "0.0500%" });
  assert.equal(feeSnapshots.binance.checked, "2026-10-22");
  assert.equal(feeSnapshots.binance.source, "https://www.binance.com/en/fee/trading");
  assert.equal(
    feeSnapshots.binance.futuresSource,
    "https://www.binance.com/en/fee/futureFee",
  );
  for (const lang of Object.keys(messages)) {
    assert.match(messages[lang].feeTableNote, /BNB|토큰|トークン|токен|توکن|jeton|token/i);
    assert.doesNotMatch(messages[lang].feeTableNote, /blank|空栏|空欄|branco|비어|Пустая|خالی/);
  }
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

test("compare pages expose /go register links for the exchanges on the page", async () => {
  const index = load("src/app/[lang]/compare/page.tsx").default;
  const indexHtml = renderToStaticMarkup(
    await index({ params: Promise.resolve({ lang: "zh-cn" }) }),
  );
  for (const id of ["backpack", "binance", "okx"]) {
    const links = indexHtml.match(new RegExp(`href="/go/${id}"`, "g")) || [];
    assert.ok(links.length >= 2, `compare index ${id}`);
    assert.match(indexHtml, /data-placement="compare_page"/);
    assert.match(indexHtml, /rel="sponsored nofollow noopener"/);
  }
  assert.match(indexHtml, /0\.0200%/);
  assert.match(indexHtml, /0\.0500%/);
  assert.match(indexHtml, /https:\/\/www\.binance\.com\/en\/fee\/futureFee/);
  const pairPage = load("src/app/[lang]/compare/[pair]/page.tsx").default;
  const cases = {
    "backpack-vs-binance": ["backpack", "binance"],
    "backpack-vs-okx": ["backpack", "okx"],
    "okx-vs-binance": ["okx", "binance"],
  };
  for (const [pair, ids] of Object.entries(cases)) {
    const html = renderToStaticMarkup(
      await pairPage({ params: Promise.resolve({ lang: "en", pair }) }),
    );
    for (const id of ids) {
      const links = html.match(new RegExp(`href="/go/${id}"`, "g")) || [];
      assert.equal(links.length, 2, `${pair} ${id}`);
    }
    const absent = ["backpack", "binance", "okx"].filter((id) => !ids.includes(id));
    for (const id of absent) assert.equal(html.includes(`/go/${id}`), false, pair);
    assert.equal((html.match(/data-placement="compare_detail"/g) || []).length, 4);
  }
});

test("updates renders every exchange once items exist and filters on the server", async () => {
  const { selectUpdates } = load("src/lib/updates.ts");
  const Updates = load("src/components/Updates.tsx").default;
  const fixture = [
    {
      id: "binance-fees",
      exchange: "binance",
      date: "2026-10-01",
      category: "fees",
      title: { en: "Binance fee note", zh: "币安费率说明" },
      summary: { en: "Binance summary", zh: "币安摘要" },
      sourceUrl: "https://www.binance.com/en/fee/trading",
    },
    {
      id: "okx-product",
      exchange: "okx",
      date: "2026-10-02",
      category: "product",
      title: { en: "OKX product note", zh: "欧易产品说明" },
      summary: { en: "OKX summary", zh: "欧易摘要" },
      sourceUrl: "https://www.okx.com/fees",
    },
    {
      id: "backpack-listing",
      exchange: "backpack",
      date: "2026-10-03",
      category: "listing",
      title: { en: "Backpack listing note", zh: "背包上新说明" },
      summary: { en: "Backpack summary", zh: "背包摘要" },
      sourceUrl: "https://learn.backpack.exchange/blog/example",
    },
  ];
  const allHtml = renderToStaticMarkup(
    Updates({
      lang: "zh-cn",
      exchange: "all",
      items: selectUpdates(fixture, "all"),
    }),
  );
  assert.match(allHtml, /背包上新说明/);
  assert.match(allHtml, /欧易产品说明/);
  assert.match(allHtml, /币安费率说明/);
  assert.match(allHtml, /2026-10-03/);
  assert.ok(allHtml.indexOf("2026-10-03") < allHtml.indexOf("2026-10-01"));
  assert.match(allHtml, /rel="nofollow noopener"/);
  assert.match(allHtml, /target="_blank"/);
  assert.match(allHtml, /href="\/zh-cn\/updates\?exchange=binance"/);
  const binanceHtml = renderToStaticMarkup(
    Updates({
      lang: "en",
      exchange: "binance",
      items: selectUpdates(fixture, "binance"),
    }),
  );
  assert.match(binanceHtml, /Binance fee note/);
  assert.doesNotMatch(binanceHtml, /OKX product note/);
  assert.doesNotMatch(binanceHtml, /Backpack listing note/);
  assert.match(binanceHtml, /aria-current="page"/);
  const french = renderToStaticMarkup(
    Updates({
      lang: "fr",
      exchange: "all",
      items: selectUpdates(fixture, "all"),
    }),
  );
  assert.match(french, /Binance fee note/);
  assert.doesNotMatch(french, /币安费率说明/);

  const page = load("src/app/[lang]/updates/page.tsx").default;
  const live = renderToStaticMarkup(
    await page({
      params: Promise.resolve({ lang: "zh-cn" }),
      searchParams: Promise.resolve({}),
    }),
  );
  assert.match(live, /Unpack Real Stocks 美股盲盒/);
  assert.match(live, /AI Search：用自然语言发现市场/);
  assert.match(live, /href="\/go\/backpack"/);
  assert.match(live, /data-placement="updates_page"/);
  assert.match(live, /"@type":"ItemList"/);
  assert.match(live, /"@type":"NewsArticle"/);
  const filtered = renderToStaticMarkup(
    await page({
      params: Promise.resolve({ lang: "en" }),
      searchParams: Promise.resolve({ exchange: "okx" }),
    }),
  );
  assert.match(filtered, /OKX lists AXISUSDT perpetual futures/);
  assert.doesNotMatch(filtered, /No updates for this exchange yet/);
  assert.doesNotMatch(filtered, /Unpack Real Stocks/);
  assert.doesNotMatch(filtered, /ItemList/);
  assert.match(filtered, /href="\/go\/okx"/);
});
