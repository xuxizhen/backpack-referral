import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, meta } from "@/lib/site";
import { t } from "@/lib/i18n";
import { pairs, exchanges } from "@/lib/exchanges";
import { ExchangeCards } from "@/components/ExchangeContent";
import FeeComparison from "@/components/FeeComparison";
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
      <section className="container multi-hero">
        <div>
          <span className="section-kicker">BACKPACK / OKX / BINANCE</span>
          <h1>{t(lang, "homeTitle")}</h1>
          <p className="lede">{t(lang, "intro")}</p>
          <div className="hero-actions">
            <Link className="button" href={`/${lang}/compare`}>
              {t(lang, "compare")} <span aria-hidden="true">↗</span>
            </Link>
            <Link className="plain-link" href={`/${lang}/referrals`}>
              {t(lang, "offers")}
            </Link>
          </div>
          <p className="hero-author">
            {t(lang, "by")}{" "}
            <a
              href="https://x.com/mikexuusa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mike Xu ↗
            </a>
          </p>
        </div>
        <div className="hero-ledger" aria-hidden="true">
          <span>FEELENS / 001</span>
          <div className="ledger-title">
            COST
            <br />
            IN FOCUS
            <span className="ledger-dot" />
          </div>
          {["Backpack", "OKX", "Binance"].map((name, i) => (
            <div className="ledger-line" key={name}>
              <span>0{i + 1}</span>
              <strong>{name}</strong>
              <span>↗</span>
            </div>
          ))}
          <div className="ledger-footer">FEES · PRODUCTS · REFERRALS</div>
        </div>
      </section>
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
