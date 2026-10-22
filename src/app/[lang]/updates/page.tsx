import { notFound } from "next/navigation";
import { isLang, meta, siteUrl } from "@/lib/site";
import { locale, t } from "@/lib/i18n";
import Updates from "@/components/Updates";
import {
  isUpdateFilter,
  selectUpdates,
  updateCopy,
  updates,
  type UpdateFilter,
} from "@/lib/updates";

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return isLang(lang)
    ? meta(lang, t(lang, "updates"), t(lang, "newsNote"), "updates")
    : {};
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ exchange?: string | string[] }>;
}) {
  const [{ lang }, query] = await Promise.all([params, searchParams]);
  if (!isLang(lang)) notFound();
  const raw = Array.isArray(query.exchange) ? query.exchange[0] : query.exchange;
  const exchange: UpdateFilter = raw && isUpdateFilter(raw) ? raw : "all";
  const items = selectUpdates(updates, exchange);
  const jsonLd =
    exchange === "all"
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: items.map((item, index) => {
            const copy = updateCopy(item, lang);
            return {
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "NewsArticle",
                headline: copy.title,
                datePublished: item.date,
                description: copy.summary,
                url: item.sourceUrl,
                inLanguage: lang === "zh-cn" ? locale[lang].html : "en",
                publisher: {
                  "@type": "Person",
                  name: "Mike Xu",
                  url: "https://x.com/mikexuusa",
                },
                mainEntityOfPage: `${siteUrl}/${lang}/updates`,
              },
            };
          }),
        }
      : null;
  return (
    <main id="main" className="container catalog-page">
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
      <header className="article-header">
        <span className="section-kicker">FeeLens</span>
        <h1>{t(lang, "updates")}</h1>
        <p className="lede">{t(lang, "newsNote")}</p>
      </header>
      <Updates lang={lang} exchange={exchange} items={items} />
    </main>
  );
}
