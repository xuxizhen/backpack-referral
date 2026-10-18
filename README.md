# FeeLens

Independent trading-cost guides, official Backpack updates, and a transparent affiliate offer. Created and operated by [Mike Xu](https://x.com/mikexuusa).

Current domain: https://www.backpackref.com · Repository retained for continuity.

## Run

Node.js 20.9+ (tested with 22). Install with `npm ci`.

- `npm run dev` — development
- `npm run build` — production build
- `npm start` — production server
- `npm run lint` — ESLint
- `npm test` — fee calculations, campaign expiry and content validation
- `PLAYWRIGHT_PATH=/path/to/playwright node tests/browser.cjs` — browser checks against http://localhost:3100 (start with `npm start -- --port 3100`). Uses installed Chrome; override with PLAYWRIGHT_CHANNEL. TEST_BASE_URL is optional.

## Content and architecture

- `src/lib/articles.ts`: bilingual editorial and disclosure pages.
- `src/content/updates.json`: sourced official news and timed campaigns.
- `src/lib/updates.ts`: campaign status, homepage selection and expiry.
- `src/lib/site.ts`: shared referral link, domain, author metadata and sources.
- `src/components/Calculator.tsx`: local-only illustrative fee worksheet.
- `src/components/Analytics.tsx`: GA4 opt-in, persisted consent and withdrawal.
- `docs/rebuild-plan.md`: positioning and migration plan.
- `docs/content-operations.md`: official-source monitoring and publishing process.

English and Simplified Chinese each have 16 pages. Existing article paths remain available. Legacy French, Portuguese, Italian, German, Japanese and Korean routes permanently redirect to their English equivalents; Traditional Chinese redirects to Simplified Chinese. No unsupported translated pages remain indexed.

The Next.js locale layout emits the document language. Article metadata supplies canonical and hreflang. Sitemap and robots are generated from live routes; the Open Graph image and favicon use the independent FeeLens identity. Home and news pages revalidate every five minutes for campaign expiry. This does not automatically fetch new announcements; content updates require the monitoring/editorial workflow.

## Offer

The operator reports an approved Backpack Affiliate relationship: 40% total commission, 20 percentage points shared with referred users and 20 retained. The existing link is https://backpack.exchange/join/meme. Its private dashboard configuration was not independently inspected; readers must check their official offer before registering or trading. Equity Perps are excluded from commission sharing. A campaign can have different eligible products than the affiliate offer.

## Analytics

GA4 property `G-CE9L7SLBFL` loads only after consent. `affiliate_click` records the exchange, page and language; it is not a registration or trading conversion. No calculator inputs are submitted. Compare website clicks with actual registration/KYC/trading/commission data in the affiliate dashboard. The footer permits consent withdrawal.

## Deployment and domains

Pushes to the repository default branch can deploy through the existing Vercel Git integration. Verify the deployment status before calling an update live. NEXT_PUBLIC_SITE_URL defaults to https://www.backpackref.com; set it consistently at build time if migrating. The known Vercel alias and apex domain redirect to the canonical host. Do not configure the canonical URL as one of those redirecting aliases. A new domain has not been purchased or verified.

A rebrand does not guarantee removal or prevention of browser security warnings. Search Console/Bing reviews and domain migration are separate operational tasks.
