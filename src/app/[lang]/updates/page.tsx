import { notFound } from "next/navigation";
import { isLang, meta } from "@/lib/site";
import { t } from "@/lib/i18n";
import Updates from "@/components/Updates";
export const revalidate = 300;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return isLang(lang)
    ? meta(lang, t(lang, "updates"), t(lang, "newsNote"), "updates")
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
        <span className="section-kicker">FeeLens</span>
        <h1>{t(lang, "updates")}</h1>
        <p className="lede">{t(lang, "newsNote")}</p>
      </header>
      <Updates lang={lang} full />
    </main>
  );
}
