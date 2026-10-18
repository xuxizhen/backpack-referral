// Run against npm start with PLAYWRIGHT_PATH pointing to an installed Playwright module.
const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const base = process.env.TEST_BASE_URL || "http://localhost:3100";
(async () => {
  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PLAYWRIGHT_CHANNEL || "chrome",
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1100 },
  });
  const page = await context.newPage();
  const errors = [];
  const analytics = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("request", (r) => {
    if (r.url().includes("googletagmanager")) analytics.push(r.url());
  });
  await page.goto(base + "/en");
  await page.getByRole("button", { name: "No thanks" }).waitFor();
  assert.equal(analytics.length, 0);
  await page.getByRole("button", { name: "No thanks" }).click();
  assert.equal(await page.locator("html").getAttribute("lang"), "en");
  const inputs = page.locator(".calculator input[type=number]");
  await inputs.nth(0).fill("20000");
  await inputs.nth(1).fill("0.1");
  await page.locator(".total strong").filter({ hasText: "$16.00" }).waitFor();
  await page.locator(".checkbox input").uncheck();
  await page.locator(".total strong").filter({ hasText: "$20.00" }).waitFor();
  await inputs.nth(0).fill("-1");
  await page.getByRole("status").waitFor();
  await inputs.nth(0).fill("10000");
  await inputs.nth(1).fill("0.05");
  await page.locator(".checkbox input").check();
  fs.mkdirSync("/tmp/feelens-review", { recursive: true });
  await page.screenshot({
    path: "/tmp/feelens-review/desktop.png",
    fullPage: true,
  });
  await page.goto(base + "/en/referral");
  assert.equal(
    await page.locator("a[rel*=sponsored]").getAttribute("href"),
    "https://backpack.exchange/join/meme",
  );
  await page.getByRole("link", { name: "简体中文", exact: true }).click();
  await page.waitForURL("**/zh-cn/referral");
  assert.equal(await page.locator("html").getAttribute("lang"), "zh-Hans");
  const xml = await (await context.request.get(base + "/sitemap.xml")).text();
  const paths = [
    ...xml.matchAll(/<loc>https:\/\/www.backpackref.com([^<]+)<\/loc>/g),
  ].map((m) => m[1]);
  assert.equal(paths.length, 32);
  for (const path of paths) {
    const response = await context.request.get(base + path);
    assert.equal(response.status(), 200, path);
    const html = await response.text();
    assert.ok(
      html.includes(
        `rel="canonical" href="https://www.backpackref.com${path}"`,
      ),
      path + " canonical",
    );
    assert.equal((html.match(/<html /g) || []).length, 1, path + " html");
    assert.ok(html.includes("Mike Xu"), path + " author");
    assert.ok(
      !html.includes("Register &amp; Get 20% Bonus"),
      path + " old copy",
    );
  }
  for (const [old, dest] of [
    ["/ja/fees", "/en/fees"],
    ["/zh-tw/referral", "/zh-cn/referral"],
    ["/de", "/en"],
  ]) {
    const r = await context.request.get(base + old, { maxRedirects: 0 });
    assert.equal(r.status(), 308);
    assert.equal(r.headers().location, dest);
  }
  assert.equal(
    (await context.request.get(base + "/en/does-not-exist")).status(),
    404,
  );
  assert.equal((await context.request.get(base + "/nonsense")).status(), 404);
  const r = await context.request.get(base + "/en");
  assert.equal(r.headers()["x-content-type-options"], "nosniff");
  assert.ok(r.headers()["content-security-policy"]);
  for (const width of [390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    for (const path of ["/en", "/zh-cn", "/zh-cn/fees", "/zh-cn/updates"]) {
      await page.goto(base + path);
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        path + " overflow at " + width,
      );
    }
    if (width === 390) {
      await page.goto(base + "/zh-cn");
      await page.screenshot({
        path: "/tmp/feelens-review/mobile.png",
        fullPage: true,
      });
    }
  }
  await page.getByRole("button", { name: "统计偏好", exact: true }).click();
  await page.getByRole("button", { name: "允许统计", exact: true }).click();
  await page.waitForFunction(
    () => localStorage.getItem("feelens-analytics") === "granted",
  );
  await page.waitForFunction(() => typeof window.gtag === "function");
  await page.getByRole("button", { name: "统计偏好", exact: true }).click();
  await page.getByRole("button", { name: "不允许", exact: true }).click();
  assert.equal(
    await page.evaluate(() => window["ga-disable-G-CE9L7SLBFL"]),
    true,
  );
  assert.deepEqual(errors, []);
  console.log(
    JSON.stringify({
      routes: paths.length,
      checks:
        "calculator, affiliate, language, canonical, redirects, 404, headers, consent, mobile 320/390, no runtime errors",
      screenshots: "/tmp/feelens-review",
    }),
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
