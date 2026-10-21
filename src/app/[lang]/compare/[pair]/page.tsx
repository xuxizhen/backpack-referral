import { notFound } from "next/navigation";
import { isLang, meta } from "@/lib/site";
import { t } from "@/lib/i18n";
import { pairs, exchanges, type PairId } from "@/lib/exchanges";
import { FeeMatrix, Sources } from "@/components/ExchangeContent";
import FeeComparison from "@/components/FeeComparison";
export function generateStaticParams() {
  return Object.keys(pairs).map((pair) => ({ pair }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; pair: string }>;
}) {
  const { lang, pair } = await params;
  const ids = Object.hasOwn(pairs, pair) ? pairs[pair as PairId] : undefined;
  return isLang(lang) && ids
    ? meta(
        lang,
        `${exchanges[ids[0]].name} / ${exchanges[ids[1]].name} · ${t(lang, "compare")}`,
        t(lang, "pairIntro"),
        `compare/${pair}`,
      )
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; pair: string }>;
}) {
  const { lang, pair } = await params;
  const ids = Object.hasOwn(pairs, pair) ? pairs[pair as PairId] : undefined;
  if (!isLang(lang) || !ids) notFound();
  return (
    <main id="main" className="container catalog-page">
      <header className="article-header">
        <span className="section-kicker">{t(lang, "compare")}</span>
        <h1>
          {exchanges[ids[0]].name} / {exchanges[ids[1]].name}
        </h1>
        <p className="lede">{t(lang, "pairIntro")}</p>
      </header>
      <div className="comparison-profiles">
        {ids.map((id) => (
          <section key={id}>
            <h2>{exchanges[id].name}</h2>
            <p>{exchanges[id].products[lang]}</p>
          </section>
        ))}
      </div>
      <FeeMatrix lang={lang} ids={ids} />
      <p>{t(lang, "method")}</p>
      <p>{t(lang, "matrixNote")}</p>
      <FeeComparison lang={lang} />
      <Sources lang={lang} ids={ids} />
    </main>
  );
}
