import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, meta, siteUrl } from "@/lib/site";
import { t, locale } from "@/lib/i18n";
import { exchangeIds, exchanges, isExchange } from "@/lib/exchanges";
import { Offer, Sources } from "@/components/ExchangeContent";
export function generateStaticParams() {
  return exchangeIds.map((exchange) => ({ exchange }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; exchange: string }>;
}) {
  const { lang, exchange } = await params;
  return isLang(lang) && isExchange(exchange)
    ? meta(
        lang,
        `${exchanges[exchange].name} · ${t(lang, "exchanges")}`,
        exchanges[exchange].products[lang],
        `exchanges/${exchange}`,
      )
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; exchange: string }>;
}) {
  const { lang, exchange } = await params;
  if (!isLang(lang) || !isExchange(exchange)) notFound();
  const e = exchanges[exchange];
  return (
    <main id="main" className="container catalog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${e.name} · ${t(lang, "exchanges")}`,
            inLanguage: locale[lang].html,
            dateModified: e.checked,
            author: {
              "@type": "Person",
              name: "Mike Xu",
              url: "https://x.com/mikexuusa",
            },
            mainEntityOfPage: `${siteUrl}/${lang}/exchanges/${exchange}`,
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="breadcrumbs">
        <Link href={`/${lang}/exchanges`}>{t(lang, "exchanges")}</Link> /{" "}
        {e.name}
      </div>
      <header className="article-header">
        <span className="section-kicker">{t(lang, "exchanges")}</span>
        <h1>{e.name}</h1>
        <p className="lede">{e.products[lang]}</p>
      </header>
      <div className="profile-grid">
        <article>
          <h2>{t(lang, "costs")}</h2>
          <p>{e.costs[lang]}</p>
          <p>{t(lang, "method")}</p>
          <a href={e.fee} target="_blank" rel="noopener noreferrer">
            {t(lang, "official")} ↗
          </a>
          <h2>{t(lang, "risks")}</h2>
          <p>{t(lang, "eligibility")}</p>
          <Link href={`/${lang}/compare`}>{t(lang, "compare")} ↗</Link>
        </article>
        <Offer lang={lang} id={exchange} />
      </div>
      <Sources lang={lang} ids={[exchange]} />
    </main>
  );
}
