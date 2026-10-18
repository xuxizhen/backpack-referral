import { notFound } from "next/navigation";
import { isLang, meta, pick } from "@/lib/site";
import Updates from "@/components/Updates";
export const revalidate = 300;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return meta(
    lang,
    pick(lang, "Backpack news & campaigns", "Backpack 官方动态与活动"),
    pick(
      lang,
      "Official Backpack campaigns and product updates, with dates, conditions and source links.",
      "整理 Backpack 官方活动与产品更新，标注时间、条件和来源。",
    ),
    "updates",
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <main id="main" className="container article-page">
      <header className="article-header">
        <span className="section-kicker">
          {pick(lang, "The update desk", "官方动态追踪")}
        </span>
        <h1>
          {pick(
            lang,
            "New features. Current campaigns. Clear conditions.",
            "新功能、新活动，\n条件说清楚。",
          )}
        </h1>
        <p className="lede">
          {pick(
            lang,
            "Official announcements, summarized by FeeLens. Publication dates and campaign windows are shown separately.",
            "FeeLens 整理官方公告，分别标明发布日期与活动时间。",
          )}
        </p>
        <p className="article-meta">
          {pick(lang, "Curated by", "整理者")}{" "}
          <a
            href="https://x.com/mikexuusa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mike Xu ↗
          </a>
        </p>
      </header>
      <Updates lang={lang} full />
    </main>
  );
}
