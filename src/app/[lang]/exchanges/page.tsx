import { notFound } from "next/navigation";
import { isLang, meta } from "@/lib/site";
import { t } from "@/lib/i18n";
import { ExchangeCards } from "@/components/ExchangeContent";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return isLang(lang)
    ? meta(lang, t(lang, "exchanges"), t(lang, "intro"), "exchanges")
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
        <h1>{t(lang, "exchanges")}</h1>
        <p className="lede">{t(lang, "intro")}</p>
      </header>
      <ExchangeCards lang={lang} />
    </main>
  );
}
