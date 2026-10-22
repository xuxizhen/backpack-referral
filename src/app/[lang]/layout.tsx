import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, siteUrl } from "@/lib/site";
import { langs, locale, t, type MessageKey } from "@/lib/i18n";
import Analytics from "@/components/Analytics";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ReferralTracker from "@/components/ReferralTracker";
import StickyInvites from "@/components/StickyInvites";
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
  const nav: [string, MessageKey][] = [
    ["exchanges", "exchanges"],
    ["compare", "compare"],
    ["referrals", "offers"],
    ["updates", "updates"],
  ];
  const footer: [string, MessageKey][] = [
    ["about", "about"],
    ["affiliate-disclosure", "disclosure"],
    ["privacy", "privacy"],
    ["risk-disclosure", "risks"],
    ["contact", "contact"],
  ];
  return (
    <html lang={locale[lang].html} dir={lang === "fa" ? "rtl" : "ltr"}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "FeeLens",
              url: siteUrl,
              inLanguage: locale[lang].html,
              publisher: {
                "@type": "Person",
                name: "Mike Xu",
                url: "https://x.com/mikexuusa",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
        <a className="skip" href="#main">
          {t(lang, "skip")}
        </a>
        <header className="header">
          <div className="container nav">
            <Link className="brand" href={`/${lang}`}>
              <span className="brand-mark" aria-hidden="true">
                f<span>l</span>
              </span>
              FeeLens
            </Link>
            <nav>
              {nav.map(([path, key]) => (
                <Link key={path} href={`/${lang}/${path}`}>
                  {t(lang, key)}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher lang={lang} />
          </div>
        </header>
        {children}
        <StickyInvites lang={lang} />
        <ReferralTracker />
        <footer className="footer">
          <div className="container">
            <div className="footer-top">
              <div>
                <Link className="brand" href={`/${lang}`}>
                  FeeLens
                  <span className="dot" />
                </Link>
                <p>
                  {t(lang, "by")}{" "}
                  <a
                    href="https://x.com/mikexuusa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <bdi>Mike Xu ↗</bdi>
                  </a>
                </p>
              </div>
              <div className="footer-links">
                {footer.map(([path, key]) => (
                  <Link key={path} href={`/${lang}/${path}`}>
                    {t(lang, key)}
                  </Link>
                ))}
              </div>
            </div>
            <div className="footer-bottom">
              <p>{t(lang, "footer")}</p>
              <Analytics lang={lang} />
              <span>© {new Date().getFullYear()} FeeLens</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
