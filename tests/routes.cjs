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
      ["vs-binance", "compare/backpack-vs-binance"],
    ]) {
      const r = await fetch(`${base}/${lang}/${old}`, { redirect: "manual" });
      assert.equal(r.status, 308);
      assert.equal(r.headers.get("location"), `/${lang}/${dest}`);
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
  for (const host of [
    "www.backpackref.com",
    "backpackref.com",
    "backpack-referral.vercel.app",
  ]) {
    const redirected = await request(
      host,
      "/zh-cn/exchanges/backpack?utm_source=seo",
    );
    assert.equal(redirected.status, 301, host);
    assert.equal(
      redirected.location,
      "https://www.feelens.net/zh-cn/exchanges/backpack?utm_source=seo",
      host,
    );
  }
  const apex = await request("feelens.net", "/en/compare?x=1");
  assert.equal(apex.status, 308, "feelens.net");
  assert.equal(
    apex.location,
    "https://www.feelens.net/en/compare?x=1",
    "feelens.net",
  );
  for (const missing of ["/xx", "/fa/exchanges/unknown", "/en/compare/unknown"])
    assert.equal((await fetch(base + missing)).status, 404, missing);
  console.log(
    `Verified ${count} localized pages, canonical/hreflang, referral codes, legacy redirects, sitemap and 404s.`,
  );
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
