import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, meta } from "@/lib/site";
import { t } from "@/lib/i18n";
import { pairs, exchanges } from "@/lib/exchanges";
import { ExchangeCards } from "@/components/ExchangeContent";
import FeeComparison from "@/components/FeeComparison";
import FeeTable from "@/components/FeeTable";
import { InviteCards } from "@/components/InviteCard";
export const revalidate = 300;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return isLang(lang) ? meta(lang, t(lang, "homeTitle"), t(lang, "intro")) : {};
}
export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <main id="main">
      <section className="container invite-hero">
        <span className="section-kicker">BACKPACK / BINANCE / OKX</span>
        <h1>{t(lang, "homeTitle")}</h1>
        <p className="lede">{t(lang, "intro")}</p>
        <p className="hero-author">
          {t(lang, "by")}{" "}
          <a
            href="https://x.com/mikexuusa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <bdi>Mike Xu ↗</bdi>
          </a>
        </p>
        <InviteCards lang={lang} placement="home_hero" />
        <p className="affiliate-line">
          {t(lang, "affiliateLine")}{" "}
          <Link href={`/${lang}/affiliate-disclosure`}>
            {t(lang, "disclosure")}
          </Link>
        </p>
      </section>
      <div className="container catalog-section">
        <FeeTable lang={lang} />
      </div>
      <section className="container catalog-section">
        <div className="section-intro">
          <div>
            <span className="section-kicker">FeeLens / 01</span>
            <h2>{t(lang, "exchanges")}</h2>
          </div>
          <p>{t(lang, "eligibility")}</p>
        </div>
        <ExchangeCards lang={lang} />
      </section>
      <section className="container catalog-section">
        <div className="section-intro">
          <div>
            <span className="section-kicker">FeeLens / 02</span>
            <h2>{t(lang, "compare")}</h2>
          </div>
          <p>{t(lang, "pairIntro")}</p>
        </div>
        <div className="pair-links">
          {Object.entries(pairs).map(([slug, ids]) => (
            <Link key={slug} href={`/${lang}/compare/${slug}`}>
              <span>
                {exchanges[ids[0]].name}
                <small> / </small>
                {exchanges[ids[1]].name}
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <div className="container catalog-section">
        <FeeComparison lang={lang} />
      </div>
      <section className="container editorial-note">
        <div>
          <h2>{t(lang, "sources")}</h2>
          <p>{t(lang, "method")}</p>
          <Link href={`/${lang}/updates`}>{t(lang, "updates")} ↗</Link>
        </div>
        <div>
          <h2>{t(lang, "disclosure")}</h2>
          <p>{t(lang, "footer")}</p>
          <Link href={`/${lang}/affiliate-disclosure`}>
            {t(lang, "disclosure")} ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
