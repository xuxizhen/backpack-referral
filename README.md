# FeeLens

Exchange products, trading fees and referral comparisons for **Backpack, OKX and Binance**. Created and operated by [Mike Xu](https://x.com/mikexuusa).

Production: https://www.feelens.net · Repository: xuxizhen/backpack-referral.

## Development and verification

Node.js 20.9+; tested with Node 22. Install with `npm ci`.

- `npm run dev` — development server
- `npm run build` — production build and TypeScript checks
- `npm start -- --port 3101` — preview production build
- `npm test` — calculations, campaign boundaries and eight-language content validation
- `npm run lint` — ESLint
- `node tests/routes.cjs` — HTTP/SEO checks of all 168 indexable routes against localhost:3101; override TEST_BASE_URL when needed

Use the Codex in-app browser to verify responsive layouts, native language selection, calculator interactions and analytics preferences. Persian requires both a right-to-left document and correct visual order; URLs, exchange codes and numeric inputs retain LTR isolation.

## Content

- `src/content/messages.json`: complete UI and policy copy for en, zh-cn, fr, pt, ko, ja, ru and fa.
- `src/content/exchanges.json`: localized product, fee and referral descriptions.
- `src/lib/exchanges.ts`: exchange identifiers, exact referral destinations and official sources.
- `src/content/updates.json`: official news, source dates, UTC campaign windows, exchange identity and eight-language copy. The original English/Chinese arrays remain compatible with archived data.
- `src/lib/updates.ts`: deterministic campaign status and expiry.
- `src/components/FeeComparison.tsx`: client-side cost worksheet. No presumed exchange rate or unverified rebate is prefilled.
- `docs/content-operations.md`: source verification, weekly monitoring and publishing rules.

Each locale includes the homepage, exchange directory, three exchange profiles, referral directory, three referral pages, comparison overview, three pair comparisons, news and policy pages. Legacy Backpack article URLs permanently redirect to the relevant profiles or comparisons. Traditional Chinese redirects to Simplified Chinese; discontinued Italian/German paths redirect to English. The other requested language routes render actual translations.

## Commercial terms

Backpack: the operator states a 40% affiliate commission split into 20 percentage points for the user and 20 for the operator. The private dashboard was not independently inspected; the site says to verify displayed settings. Equity Perps are excluded.

OKX: invitation X45LZTTE. No fixed reward or cashback percentage verified.

Binance: user-supplied links on bsmkweb.cc, primary BNBBABA and alternative JH5SZIO4. Official ownership and final destination remain unverified; this is disclosed next to the links. Do not label these as verified official links or promise a “super rebate” percentage. BNB fee discounts are distinct from referral cashback.

## Publishing and SEO

Canonical domain is explicitly https://www.feelens.net. `src/lib/redirects.ts` resolves the final URL, and `src/proxy.ts` returns one 301 to that URL. Old hosts (`backpackref.com`, `www.backpackref.com`, `backpack-referral.vercel.app`, and apex `feelens.net`) and retired paths (`/review`, `/fees`, `/referral`, `/zh-tw`, `/it`, `/de`, and the other legacy slugs) land on the page that returns 200, with the query string preserved. Canonical paths such as `/en` and `/zh-cn/exchanges/backpack` stay in place. Canonical/hreflang, sitemap, robots, social previews and article structured data follow the eight-language route map.

The Vercel project can answer for a hostname before Next.js. If `https://backpackref.com` returns 307 to `www.backpackref.com` instead of reaching this proxy, that hop is the Domains setting. Point the apex at this project, or 301 it straight to `https://www.feelens.net` with the path intact.

After a production deploy, submit the canonical sitemap to IndexNow (one request reaches Bing, Yandex, Seznam, Naver and the other participants):

```bash
npm run indexnow
npm run indexnow -- --dry-run
```

The ownership key file is `public/<key>.txt`, served at `https://www.feelens.net/<key>.txt`. The file contents are the key and nothing else. `--dry-run` prints the sitemap URLs without submitting them.

Main-branch pushes deploy via the existing Vercel integration. Check GitHub deployment status and the live canonical site after pushing. Search Console change-of-address and sitemap submission require the verified webmaster account and remain separate from publishing code and from IndexNow.

Weekly automation: Monday 10:00 Asia/Shanghai, all three exchanges, official sources only, eight-language updates, automatic validated GitHub push, quiet when unchanged.

## Analytics

GA4 `G-CE9L7SLBFL` loads only after opt-in. Affiliate events record exchange, page and language, never calculator inputs. Consent can be withdrawn in the footer. Website clicks are not evidence of registrations or trading conversions.
