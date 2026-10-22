#!/usr/bin/env node
// Submit canonical sitemap URLs to IndexNow. Participating engines include
// Bing, Yandex, Seznam and Naver via https://api.indexnow.org/indexnow.
// Run only after public/<key>.txt is deployed to https://www.feelens.net.
//
//   npm run indexnow
//   npm run indexnow -- --dry-run
//   node scripts/indexnow.mjs --sitemap https://www.feelens.net/sitemap.xml
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

export const SITE_HOST = "www.feelens.net";
export const SITE_ORIGIN = `https://${SITE_HOST}`;
export const INDEXNOW_KEY =
  "629b13376a90e4b5dcd4b872ce779ac92c2f998098cbd247929fd6d5f395a737";
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export function keyFileName() {
  return `${INDEXNOW_KEY}.txt`;
}

export function keyLocation(origin = SITE_ORIGIN) {
  return `${origin}/${keyFileName()}`;
}

export function parseSitemapLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((match) =>
    match[1].replaceAll("&amp;", "&"),
  );
}

export function assertKeyFile(publicDir = join(process.cwd(), "public")) {
  const file = join(publicDir, keyFileName());
  const body = readFileSync(file, "utf8");
  if (body !== INDEXNOW_KEY) {
    throw new Error(
      `${file} must contain exactly the IndexNow key and nothing else`,
    );
  }
  return file;
}

function parseArgs(argv) {
  const options = { dryRun: false, sitemap: `${SITE_ORIGIN}/sitemap.xml` };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--dry-run") options.dryRun = true;
    else if (arg === "--sitemap") {
      const sitemap = argv[++i];
      if (!sitemap) throw new Error("--sitemap requires a URL");
      options.sitemap = sitemap;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return options;
}

export async function submitIndexNow({
  urls,
  origin = SITE_ORIGIN,
  fetchImpl = fetch,
}) {
  const response = await fetchImpl(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(origin).host,
      key: INDEXNOW_KEY,
      keyLocation: keyLocation(origin),
      urlList: urls,
    }),
  });
  return { status: response.status, body: await response.text() };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  assertKeyFile();
  const sitemapResponse = await fetch(options.sitemap);
  if (!sitemapResponse.ok) {
    throw new Error(
      `Failed to fetch sitemap ${options.sitemap}: ${sitemapResponse.status}`,
    );
  }
  const urls = parseSitemapLocs(await sitemapResponse.text());
  if (!urls.length) throw new Error("Sitemap has no <loc> entries");
  const foreign = urls.filter((url) => {
    try {
      return new URL(url).host !== SITE_HOST;
    } catch {
      return true;
    }
  });
  if (foreign.length) {
    throw new Error(
      `Sitemap contains URLs outside ${SITE_HOST}: ${foreign.slice(0, 3).join(", ")}`,
    );
  }
  console.log(`IndexNow key: ${keyLocation()}`);
  console.log(`${urls.length} URLs from ${options.sitemap}`);
  if (options.dryRun) {
    for (const url of urls) console.log(url);
    return;
  }
  for (let i = 0; i < urls.length; i += 10000) {
    const chunk = urls.slice(i, i + 10000);
    const result = await submitIndexNow({ urls: chunk });
    console.log(
      `POST ${INDEXNOW_ENDPOINT} ${i + 1}-${i + chunk.length}: ${result.status} ${result.body}`,
    );
    if (result.status !== 200 && result.status !== 202) process.exitCode = 1;
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
