import { notFound } from "next/navigation";
import { isLang, meta } from "@/lib/site";
import { t } from "@/lib/i18n";
import { exchangeIds, exchanges, isExchange } from "@/lib/exchanges";
import { Offer, Sources } from "@/components/ExchangeContent";
import { InviteCard } from "@/components/InviteCard";
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
        `${exchanges[exchange].name} · ${t(lang, "offers")}`,
        exchanges[exchange].offer[lang],
        `referrals/${exchange}`,
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
  return (
    <main id="main" className="container catalog-page">
      <header className="article-header">
        <h1>
          {exchanges[exchange].name} · {t(lang, "offers")}
        </h1>
        <p className="lede">{t(lang, "matrixNote")}</p>
      </header>
      <InviteCard
        lang={lang}
        id={exchange}
        placement="referral_page"
        detailHref={`/${lang}/exchanges/${exchange}`}
        detailLabel={t(lang, "guide")}
        single
      />
      <Offer lang={lang} id={exchange} placement="referral_page" />
      <Sources lang={lang} ids={[exchange]} />
    </main>
  );
}
