// HTTP contract checks; UI interactions are verified in the in-app browser.
const assert = require("node:assert/strict");
const messages = require("../src/content/messages.json");
const base = process.env.TEST_BASE_URL || "http://localhost:3101";
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
  for (const path of ["/xx", "/fa/exchanges/unknown", "/en/compare/unknown"])
    assert.equal((await fetch(base + path)).status, 404, path);
  console.log(
    `Verified ${count} localized pages, canonical/hreflang, referral codes, legacy redirects, sitemap and 404s.`,
  );
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
