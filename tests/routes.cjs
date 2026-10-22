// HTTP contract checks; UI interactions are verified in the in-app browser.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const https = require("node:https");
const path = require("node:path");
const messages = require("../src/content/messages.json");
const base = process.env.TEST_BASE_URL || "http://localhost:3101";
function request(host, requestPath, { body = false } = {}) {
  const target = new URL(base);
  const client = target.protocol === "https:" ? https : http;
  return new Promise((resolve, reject) => {
    const req = client.request(
      {
        hostname: target.hostname,
        port: target.port,
        path: requestPath,
        method: "GET",
        headers: { host },
      },
      (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () =>
          resolve({
            status: res.statusCode,
            location: res.headers.location,
            body: body ? Buffer.concat(chunks).toString("utf8") : "",
          }),
        );
      },
    );
    req.on("error", reject);
    req.end();
  });
}
const langs = Object.keys(messages);
const slugs = [
  "",
  "exchanges",
  "compare",
  "referrals",
  "updates",
  "about",
  "contact",
  "affiliate-disclosure",
  "editorial-policy",
  "privacy",
  "terms",
  "risk-disclosure",
  ...["backpack", "okx", "binance"].flatMap((id) => [
    `exchanges/${id}`,
    `referrals/${id}`,
  ]),
  ...["backpack-vs-okx", "backpack-vs-binance", "okx-vs-binance"].map(
    (p) => `compare/${p}`,
  ),
];
(async () => {
  let count = 0;
  for (const lang of langs) {
    for (const slug of slugs) {
      const path = `/${lang}${slug ? "/" + slug : ""}`;
      const response = await fetch(base + path, { redirect: "manual" });
      assert.equal(response.status, 200, path);
      const html = await response.text();
      assert.match(
        html,
        new RegExp(`<html[^>]*lang="${lang === "zh-cn" ? "zh-Hans" : lang}"`),
        path,
      );
      assert.match(
        html,
        new RegExp(`dir="${lang === "fa" ? "rtl" : "ltr"}"`),
        path,
      );
      assert.ok(
        html.includes(`rel="canonical" href="https://www.feelens.net${path}"`),
        path,
      );
      assert.equal(
        (html.match(/rel="alternate" hrefLang=/g) || []).length,
        9,
        path,
      );
      assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, path);
      const head = html.slice(
        html.indexOf("<head"),
        html.indexOf("</head>") + "</head>".length,
      );
      assert.match(
        head,
        /<meta[^>]*name="baidu-site-verification"[^>]*content="codeva-msybyesEtM"[^>]*>/,
        path,
      );
      assert.ok(
        !html.includes(
          "An independent guide by Mike Xu. Affiliate relationship disclosed. Not the Backpack website.",
        ),
        path,
      );
      if (slug === "referrals/okx")
        assert.ok(html.includes("https://okx.com/join/X45LZTTE"), path);
      if (slug === "referrals/binance") {
        assert.ok(
          html.includes("https://www.bsmkweb.cc/register?ref=BNBBABA"),
          path,
        );
        assert.ok(!html.includes("JH5SZIO4"), path);
        assert.ok(html.includes('href="/go/binance"'), path);
        assert.ok(
          html.includes(
            "https://www.binance.com/zh-CN/activity/referral?stopRedirectToActivity=true",
          ),
          path,
        );
      }
      if (slug === "compare") {
        for (const id of ["backpack", "binance", "okx"]) {
          assert.ok(html.includes(`href="/go/${id}"`), `${path} /go/${id}`);
        }
        assert.ok(html.includes('data-placement="compare_page"'), path);
      }
      if (slug.startsWith("compare/")) {
        assert.ok(html.includes('data-placement="compare_detail"'), path);
        const pairIds = {
          "compare/backpack-vs-okx": ["backpack", "okx"],
          "compare/backpack-vs-binance": ["backpack", "binance"],
          "compare/okx-vs-binance": ["okx", "binance"],
        }[slug];
        for (const id of pairIds) {
          assert.ok(html.includes(`href="/go/${id}"`), `${path} /go/${id}`);
        }
      }
      if (slug === "updates") {
        assert.ok(
          html.includes(
            lang === "zh-cn"
              ? "Unpack Real Stocks 美股盲盒"
              : "Unpack Real Stocks",
          ),
          path,
        );
        assert.ok(html.includes('rel="nofollow noopener"'), path);
        assert.ok(html.includes(`/${lang}/updates?exchange=binance`), path);
        assert.ok(html.includes('data-placement="updates_page"'), path);
      }
      if (slug === "" && (lang === "en" || lang === "zh-cn")) {
        for (const id of ["backpack", "binance", "okx"]) {
          assert.ok(html.includes(`href="/go/${id}"`), `${path} /go/${id}`);
          assert.ok(
            html.includes(`data-placement="home_hero"`),
            `${path} placement`,
          );
        }
        for (const code of ["meme", "BNBBABA", "X45LZTTE"])
          assert.ok(html.includes(`>${code}<`), `${path} ${code}`);
      }
      count++;
    }
    for (const [old, dest] of [
      ["review", "exchanges/backpack"],
      ["referral", "referrals/backpack"],
      ["fees", "compare"],
      ["tutorial", "exchanges/backpack"],
      ["safety", "risk-disclosure"],
      ["faq", "compare"],
      ["vs-binance", "compare/backpack-vs-binance"],
    ]) {
      const r = await fetch(`${base}/${lang}/${old}`, { redirect: "manual" });
      assert.equal(r.status, 301, `/${lang}/${old}`);
      assert.equal(
        r.headers.get("location"),
        `https://www.feelens.net/${lang}/${dest}`,
        `/${lang}/${old}`,
      );
    }
  }
  const sitemap = await (await fetch(base + "/sitemap.xml")).text();
  assert.equal((sitemap.match(/<loc>/g) || []).length, count);
  assert.ok(!sitemap.includes("backpackref.com"), "sitemap host");
  assert.ok(sitemap.includes("https://www.feelens.net/zh-cn"), "zh-cn");
  const robots = await (await fetch(base + "/robots.txt")).text();
  assert.match(robots, /^Sitemap: https:\/\/www\.feelens\.net\/sitemap\.xml$/m);
  assert.ok(!robots.includes("backpackref.com"), "robots host");
  assert.match(robots, /Disallow:\s*\/go\/?/);
  assert.ok(!sitemap.includes("/go/"), "sitemap excludes /go");
  assert.match(
    sitemap,
    /<loc>https:\/\/www\.feelens\.net\/zh-cn\/updates<\/loc>(?:(?!<loc>)[\s\S])*?<lastmod>2026-10-22<\/lastmod>/,
  );
  const filteredUpdates = await fetch(
    base + "/en/updates?exchange=binance",
    { redirect: "manual" },
  );
  assert.equal(filteredUpdates.status, 200);
  const filteredHtml = await filteredUpdates.text();
  assert.ok(
    filteredHtml.includes(
      'rel="canonical" href="https://www.feelens.net/en/updates"',
    ),
  );
  assert.ok(filteredHtml.includes("Binance stock options"));
  assert.ok(!filteredHtml.includes("No updates for this exchange yet."));
  assert.ok(!filteredHtml.includes("Unpack Real Stocks"));
  const backpackUpdates = await fetch(base + "/zh-cn/updates?exchange=backpack");
  const backpackHtml = await backpackUpdates.text();
  assert.ok(backpackHtml.includes("AI Search：用自然语言发现市场"));
  assert.ok(backpackHtml.includes('aria-current="page"'));
  for (const [id, location] of [
    ["backpack", "https://backpack.exchange/join/meme"],
    ["binance", "https://www.bsmkweb.cc/register?ref=BNBBABA"],
    ["okx", "https://okx.com/join/X45LZTTE"],
  ]) {
    const redirected = await fetch(`${base}/go/${id}`, { redirect: "manual" });
    assert.equal(redirected.status, 307, id);
    assert.equal(redirected.headers.get("location"), location, id);
    assert.match(redirected.headers.get("x-robots-tag") || "", /noindex/i, id);
  }
  assert.equal((await fetch(`${base}/go/unknown`)).status, 404);
  const keyName = fs
    .readdirSync(path.join(__dirname, "../public"))
    .find((name) => /^[a-zA-Z0-9-]{8,128}\.txt$/.test(name));
  assert.ok(keyName, "IndexNow key file");
  const keyBody = await (await fetch(`${base}/${keyName}`)).text();
  assert.equal(keyBody, keyName.slice(0, -4));
  const baiduName = "baidu_verify_codeva-msybyesEtM.html";
  const baiduCode = "a14825677f91cf1ab454adaeaabfee03";
  const baiduFile = await fetch(`${base}/${baiduName}`, { redirect: "manual" });
  assert.equal(baiduFile.status, 200, baiduName);
  assert.equal(baiduFile.headers.get("location"), null, baiduName);
  const baiduBody = await baiduFile.text();
  assert.equal(baiduBody, baiduCode);
  assert.equal(Buffer.byteLength(baiduBody), 32);
  const baiduHost = await request("www.feelens.net", `/${baiduName}`, {
    body: true,
  });
  assert.equal(baiduHost.status, 200, `www ${baiduName}`);
  assert.equal(baiduHost.location, undefined, `www ${baiduName}`);
  assert.equal(baiduHost.body, baiduCode);
  const oneHop = [
    ["www.backpackref.com", "/de/review", "/en/exchanges/backpack"],
    ["www.backpackref.com", "/ja/referral", "/ja/referrals/backpack"],
    ["www.backpackref.com", "/zh-tw/fees", "/zh-cn/compare"],
    ["www.backpackref.com", "/en", "/en"],
    ["www.backpackref.com", "/de", "/en"],
    ["www.backpackref.com", "/en/", "/en"],
    [
      "backpackref.com",
      "/de/review?utm_source=gsc",
      "/en/exchanges/backpack?utm_source=gsc",
    ],
    [
      "www.backpackref.com",
      "/zh-cn/exchanges/backpack?utm_source=seo",
      "/zh-cn/exchanges/backpack?utm_source=seo",
    ],
    ["backpack-referral.vercel.app", "/it/safety", "/en/risk-disclosure"],
    ["www.feelens.net", "/de/review", "/en/exchanges/backpack"],
    ["www.feelens.net", "/ja/referral?x=1", "/ja/referrals/backpack?x=1"],
    ["www.feelens.net", "/zh-tw/fees", "/zh-cn/compare"],
    ["www.feelens.net", "/en/review/", "/en/exchanges/backpack"],
    ["www.feelens.net", "/", "/en"],
    ["www.feelens.net", "/it/exchanges/okx", "/en/exchanges/okx"],
    ["feelens.net", "/en/compare?x=1", "/en/compare?x=1"],
  ];
  for (const [host, requestPath, finalPath] of oneHop) {
    const redirected = await request(host, requestPath);
    assert.equal(redirected.status, 301, `${host} ${requestPath}`);
    assert.equal(
      redirected.location,
      `https://www.feelens.net${finalPath}`,
      `${host} ${requestPath}`,
    );
    const finalUrl = new URL(redirected.location);
    const landed = await fetch(base + finalUrl.pathname, {
      redirect: "manual",
    });
    assert.equal(landed.status, 200, finalUrl.pathname);
  }
  for (const canonicalPath of ["/en", "/zh-cn/compare", "/ja/referrals/backpack"]) {
    const canonical = await request("www.feelens.net", canonicalPath);
    assert.equal(canonical.status, 200, canonicalPath);
    assert.equal(canonical.location, undefined, canonicalPath);
  }
  for (const missing of ["/xx", "/fa/exchanges/unknown", "/en/compare/unknown"])
    assert.equal((await fetch(base + missing)).status, 404, missing);
  console.log(
    `Verified ${count} localized pages, canonical/hreflang, referral codes, legacy redirects, sitemap and 404s.`,
  );
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
