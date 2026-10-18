import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, langs, pick, siteUrl } from "@/lib/site";
import Analytics from "@/components/Analytics";
import LanguageSwitcher from "@/components/LanguageSwitcher";
export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const footer = [
    ["about", "About", "关于本站"],
    ["contact", "Contact", "联系"],
    ["affiliate-disclosure", "Affiliate disclosure", "推广披露"],
    ["editorial-policy", "Editorial policy", "编辑政策"],
    ["privacy", "Privacy", "隐私"],
    ["terms", "Terms", "条款"],
    ["risk-disclosure", "Risks", "风险说明"],
  ];
  return (
    <html lang={lang === "en" ? "en" : "zh-Hans"}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"WebSite",name:"FeeLens",url:siteUrl,inLanguage:lang === "en" ? "en" : "zh-Hans",publisher:{"@type":"Person",name:"Mike Xu",url:"https://x.com/mikexuusa",sameAs:["https://x.com/mikexuusa"]}}).replace(/</g,"\\u003c")}} />
        <a className="skip" href="#main">
          {pick(lang, "Skip to content", "跳至正文")}
        </a>
        <div className="independent">
          {pick(
            lang,
            "An independent guide by Mike Xu. Affiliate relationship disclosed. Not the Backpack website.",
            "Mike Xu 创建并运营的独立指南 · 含 Affiliate 推广合作 · 非 Backpack 官方网站",
          )}
        </div>
        <header className="header">
          <div className="container nav">
            <Link className="brand" href={`/${lang}`} aria-label="FeeLens home">
              <span className="brand-mark" aria-hidden="true">
                f<span>l</span>
              </span>
              FeeLens
              <span className="brand-caption">
                {pick(lang, "Clarity before trading", "交易之前，先看清楚")}
              </span>
            </Link>
            <nav aria-label={pick(lang, "Main navigation", "主导航")}>
              <Link href={`/${lang}/updates`}>
                {pick(lang, "Updates", "官方动态")}
              </Link>
              <Link href={`/${lang}/review`}>
                {pick(lang, "Exchange guide", "交易所指南")}
              </Link>
              <Link href={`/${lang}/fees`}>
                {pick(lang, "Fee calculator", "费用计算")}
              </Link>
              <Link href={`/${lang}/referral`}>
                {pick(lang, "20% fee sharing", "20% 手续费分享")}
              </Link>
            </nav>
            <LanguageSwitcher lang={lang} />
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container">
            <div className="footer-top">
              <div>
                <Link className="brand" href={`/${lang}`}>
                  FeeLens
                  <span className="dot" />
                </Link>
                <p>
                  {pick(
                    lang,
                    "Know the cost. Understand the trade-off.",
                    "算清成本，理解取舍。",
                  )}
                </p>
                <p>
                  {pick(lang, "Created and operated by ", "由 ")}
                  <a
                    href="https://x.com/mikexuusa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mike Xu ↗
                  </a>
                  {pick(lang, ".", " 创建并运营。")}
                </p>
              </div>
              <div className="footer-links">
                {footer.map(([slug, en, zh]) => (
                  <Link key={slug} href={`/${lang}/${slug}`}>
                    {pick(lang, en, zh)}
                  </Link>
                ))}
              </div>
            </div>
            <div className="footer-bottom">
              <p>
                {pick(
                  lang,
                  "Independent publication with a Backpack affiliate relationship. Not an exchange or investment adviser. Trading involves risk.",
                  "独立内容网站，与 Backpack 存在 Affiliate 推广关系。本站不是交易所或投资顾问，交易涉及风险。",
                )}
              </p>
              <Analytics lang={lang} />
              <span>© {new Date().getFullYear()} FeeLens</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
