import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, meta } from "@/lib/site";
import { t } from "@/lib/i18n";
import { exchangeIds, exchanges, pairs } from "@/lib/exchanges";
import { FeeMatrix, Sources } from "@/components/ExchangeContent";
import FeeComparison from "@/components/FeeComparison";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return isLang(lang)
    ? meta(lang, t(lang, "compare"), t(lang, "intro"), "compare")
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <main id="main" className="container catalog-page">
      <header className="article-header">
        <span className="section-kicker">BACKPACK / OKX / BINANCE</span>
        <h1>{t(lang, "compare")}</h1>
        <p className="lede">{t(lang, "method")}</p>
      </header>
      <div className="pair-links">
        {Object.entries(pairs).map(([slug, ids]) => (
          <Link key={slug} href={`/${lang}/compare/${slug}`}>
            {exchanges[ids[0]].name} / {exchanges[ids[1]].name} ↗
          </Link>
        ))}
      </div>
      <FeeMatrix lang={lang} ids={exchangeIds} />
      <p>{t(lang, "matrixNote")}</p>
      <FeeComparison lang={lang} />
      <Sources lang={lang} ids={exchangeIds} />
    </main>
  );
}
