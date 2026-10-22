// HTTP contract checks; UI interactions are verified in the in-app browser.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const https = require("node:https");
const path = require("node:path");
const messages = require("../src/content/messages.json");
const base = process.env.TEST_BASE_URL || "http://localhost:3101";
function request(host, requestPath) {
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
        res.resume();
        resolve({ status: res.statusCode, location: res.headers.location });
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
      assert.ok(
        !html.includes(
          "An independent guide by Mike Xu. Affiliate relationship disclosed. Not the Backpack website.",
        ),
        path,
      );
      if (slug === "referrals/okx")
        assert.ok(html.includes("https://okx.com/join/X45LZTTE"), path);
      if (slug === "referrals/binance")
        for (const code of ["BNBBABA", "JH5SZIO4"])
          assert.ok(
            html.includes(`https://www.bsmkweb.cc/register?ref=${code}`),
            path,
          );
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
  const keyName = fs
    .readdirSync(path.join(__dirname, "../public"))
    .find((name) => /^[a-zA-Z0-9-]{8,128}\.txt$/.test(name));
  assert.ok(keyName, "IndexNow key file");
  const keyBody = await (await fetch(`${base}/${keyName}`)).text();
  assert.equal(keyBody, keyName.slice(0, -4));
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
