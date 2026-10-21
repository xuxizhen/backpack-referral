import { notFound, permanentRedirect } from "next/navigation";
import { isLang, meta } from "@/lib/site";
import { t, type MessageKey } from "@/lib/i18n";
import { Sources } from "@/components/ExchangeContent";
import { exchangeIds } from "@/lib/exchanges";
const redirects: Record<string, string> = {
  review: "exchanges/backpack",
  referral: "referrals/backpack",
  fees: "compare",
  tutorial: "exchanges/backpack",
  safety: "risk-disclosure",
  faq: "compare",
  "vs-binance": "compare/backpack-vs-binance",
};
const pages: Record<string, { title: MessageKey; body: MessageKey }> = {
  about: { title: "about", body: "aboutBody" },
  contact: { title: "contact", body: "aboutBody" },
  "affiliate-disclosure": { title: "disclosure", body: "disclosureBody" },
  "editorial-policy": { title: "sources", body: "aboutBody" },
  privacy: { title: "privacy", body: "privacyBody" },
  terms: { title: "risks", body: "riskBody" },
  "risk-disclosure": { title: "risks", body: "riskBody" },
};
export function generateStaticParams() {
  return [...Object.keys(pages), ...Object.keys(redirects)].map((slug) => ({
    slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const p = Object.hasOwn(pages, slug) ? pages[slug] : undefined;
  return isLang(lang) && p
    ? meta(lang, t(lang, p.title), t(lang, p.body), slug)
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  if (Object.hasOwn(redirects, slug)) permanentRedirect(`/${lang}/${redirects[slug]}`);
  const p = Object.hasOwn(pages, slug) ? pages[slug] : undefined;
  if (!p) notFound();
  return (
    <main id="main" className="container catalog-page policy-page">
      <header className="article-header">
        <span className="section-kicker">FeeLens</span>
        <h1>{t(lang, p.title)}</h1>
      </header>
      <article className="article-body">
        <p>{t(lang, p.body)}</p>
        {slug === "affiliate-disclosure" && <p>{t(lang, "matrixNote")}</p>}
        {slug === "about" || slug === "contact" ? (
          <p>
            {t(lang, "by")}{" "}
            <a
              href="https://x.com/mikexuusa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mike Xu · @mikexuusa ↗
            </a>
          </p>
        ) : null}
        {slug === "editorial-policy" && (
          <>
            <p>{t(lang, "method")}</p>
            <Sources lang={lang} ids={exchangeIds} />
          </>
        )}
      </article>
    </main>
  );
}
