import { notFound } from "next/navigation";
import { isLang, meta } from "@/lib/site";
import { t } from "@/lib/i18n";
import { exchangeIds } from "@/lib/exchanges";
import { Offer } from "@/components/ExchangeContent";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return isLang(lang)
    ? meta(lang, t(lang, "offers"), t(lang, "matrixNote"), "referrals")
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
        <h1>{t(lang, "offers")}</h1>
        <p className="lede">{t(lang, "matrixNote")}</p>
      </header>
      <div className="offers-list">
        {exchangeIds.map((id) => (
          <Offer lang={lang} id={id} key={id} />
        ))}
      </div>
    </main>
  );
}
