const assert = require("node:assert/strict");
const test = require("node:test");

test("IndexNow key file matches the publisher and sitemap locs parse", async () => {
  const { INDEXNOW_KEY, assertKeyFile, keyLocation, parseSitemapLocs } =
    await import("../scripts/indexnow.mjs");
  assert.match(INDEXNOW_KEY, /^[a-zA-Z0-9-]{8,128}$/);
  assertKeyFile();
  assert.equal(
    keyLocation(),
    `https://www.feelens.net/${INDEXNOW_KEY}.txt`,
  );
  const xml =
    '<urlset><url><loc>https://www.feelens.net/en</loc></url><url><loc>https://www.feelens.net/zh-cn/compare?x=1&amp;y=2</loc></url></urlset>';
  assert.deepEqual(parseSitemapLocs(xml), [
    "https://www.feelens.net/en",
    "https://www.feelens.net/zh-cn/compare?x=1&y=2",
  ]);
});
