import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, text } from "@/lib/articles";
import { isLang, meta, pick, sources, updated } from "@/lib/site";
import Calculator from "@/components/Calculator";
import AffiliateLink from "@/components/AffiliateLink";
export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang) || !articles[slug]) return {};
  const a = articles[slug];
  return meta(lang, text(a.title, lang), text(a.intro, lang), slug);
}
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang) || !articles[slug]) notFound();
  const a = articles[slug];
  return (
    <main id="main" className="container article-page">
      <div className="breadcrumbs">
        <Link href={`/${lang}`}>FeeLens</Link>
        <span>/</span>
        {text(a.category, lang)}
      </div>
      <header className="article-header">
        <span className="section-kicker">{text(a.category, lang)}</span>
        <h1>{text(a.title, lang)}</h1>
        <p className="lede">{text(a.intro, lang)}</p>
        <div className="article-meta">
          <span className="avatar">MX</span>
          <span>
            {pick(lang, "Created by", "创建者")}{" "}
            <a
              href="https://x.com/mikexuusa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mike Xu ↗
            </a>
          </span>
          <span>
            {pick(lang, "Updated", "更新于")} {updated}
          </span>
        </div>
      </header>
      <div className="article-layout">
        <article className="article-body">
          {a.calculator && <Calculator lang={lang} />}
          {a.sections.map((s, i) => (
            <section key={i} id={`section-${i}`}>
              <h2>{text(s.title, lang)}</h2>
              <p>{text(s.body, lang)}</p>
            </section>
          ))}
          {slug === "contact" && (
            <a
              className="button"
              href="https://x.com/mikexuusa"
              target="_blank"
              rel="noopener noreferrer"
            >
              {pick(lang, "Contact Mike Xu on X ↗", "在 X 联系 Mike Xu ↗")}
            </a>
          )}
          {a.source && (
            <div className="source-box">
              <h2>{pick(lang, "Check the official source", "核对官方来源")}</h2>
              <a
                href={sources[a.source]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {a.source === "sharing"
                  ? "Backpack · Flexible Commission Sharing"
                  : a.source === "fees"
                    ? "Backpack · Trading Fees"
                    : "Backpack · Help Center"}{" "}
                ↗
              </a>
              <p>
                {pick(
                  lang,
                  "Official references checked for this edition on October 18, 2026. Account-specific settings and availability must be verified on Backpack.",
                  "本版官方参考核对日期：2026 年 10 月 18 日。具体账户设置和服务可用性仍需在 Backpack 核实。",
                )}
              </p>
            </div>
          )}
          {a.cta && (
            <div className="affiliate-box">
              <span className="tag">
                {pick(lang, "Affiliate link", "推广链接")}
              </span>
              <h2>
                {pick(
                  lang,
                  "Check your offer on the official site.",
                  "前往官网，核对你的权益。",
                )}
              </h2>
              <p>
                {pick(
                  lang,
                  "The operator offers 20% sharing of eligible trading fees. Verify the displayed rate before proceeding. Equity Perps are excluded.",
                  "运营者提供符合条件交易手续费的 20% 分享。继续前请核对官方显示的比例。Equity Perps 不适用。",
                )}
              </p>
              <AffiliateLink lang={lang} />
              <small>
                {pick(
                  lang,
                  "Destination: backpack.exchange/join/meme · Opens a new tab",
                  "目标：backpack.exchange/join/meme · 在新标签页打开",
                )}
              </small>
              <Link href={`/${lang}/affiliate-disclosure`}>
                {pick(
                  lang,
                  "How the publisher earns commission",
                  "了解运营者的佣金收益",
                )}
              </Link>
            </div>
          )}
        </article>
        <aside className="article-sidebar">
          <h2>{pick(lang, "On this page", "本页内容")}</h2>
          {a.sections.map((s, i) => (
            <a key={i} href={`#section-${i}`}>
              {text(s.title, lang)}
            </a>
          ))}
          <hr />
          <h2>{pick(lang, "Keep exploring", "继续阅读")}</h2>
          {["review", "fees", "referral", "tutorial", "faq"]
            .filter((s) => s !== slug)
            .map((s) => (
              <Link key={s} href={`/${lang}/${s}`}>
                {text(articles[s].category, lang)} ↗
              </Link>
            ))}
          <p>
            {pick(
              lang,
              "An independent guide by Mike Xu. We may earn affiliate commission.",
              "Mike Xu 的独立指南。本站可能获得推广佣金。",
            )}
          </p>
        </aside>
      </div>
    </main>
  );
}
