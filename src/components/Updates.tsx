import Link from "next/link";
import { pick, type Lang } from "@/lib/site";
import { updates, featuredUpdates, status } from "@/lib/updates";
export default function Updates({
  lang,
  full = false,
}: {
  lang: Lang;
  full?: boolean;
}) {
  const index = lang === "en" ? 0 : 1;
  return (
    <section className={full ? "updates-full" : "container updates-section"}>
      <div className="section-intro">
        <div>
          <span className="section-kicker">
            {pick(lang, "From official sources", "来自官方来源")}
          </span>
          <h2>
            {pick(
              lang,
              "What’s happening at Backpack.",
              "Backpack 最近在发生什么。",
            )}
          </h2>
        </div>
        {!full && (
          <Link className="plain-link" href={`/${lang}/updates`}>
            {pick(lang, "All updates & campaigns", "全部动态与活动")} ↗
          </Link>
        )}
      </div>
      <div className="updates-list">
        {(full ? updates : featuredUpdates()).map((item) => (
          <article className="update-item" key={item.id}>
            <div className="update-date">
              <time dateTime={item.publishedAt}>{item.publishedAt}</time>
              <span className={`tag status-${status(item)}`}>
                {pick(
                  lang,
                  {
                    active: "Campaign window",
                    ended: "Ended",
                    upcoming: "Upcoming",
                    news: "Product news",
                    unconfirmed: "Unconfirmed",
                  }[status(item)],
                  {
                    active: "活动时间内",
                    ended: "已结束",
                    upcoming: "即将开始",
                    news: "产品动态",
                    unconfirmed: "待核实",
                  }[status(item)],
                )}
              </span>
            </div>
            <div>
              <h3>
                <a href={item.source} target="_blank" rel="noopener noreferrer">
                  {item.title[index]} ↗
                </a>
              </h3>
              <p>{item.summary[index]}</p>
              {full && <p>{item.details[index]}</p>}
              {item.endsAt && (
                <small>
                  {pick(lang, "Campaign closes", "活动截止")}:{" "}
                  {item.endsAt.replace("T", " ").replace("Z", " UTC")}
                </small>
              )}
              <small>
                {pick(lang, "Source", "来源")}:{" "}
                <a href={item.source} target="_blank" rel="noopener noreferrer">
                  {new URL(item.source).hostname}
                </a>{" "}
                · {pick(lang, "Checked", "核对")} {item.checkedAt}
              </small>
            </div>
          </article>
        ))}
      </div>
      {full && (
        <div className="source-box">
          <h2>{pick(lang, "Follow the primary sources", "查看一手来源")}</h2>
          <p>
            {pick(
              lang,
              "We summarize official announcements and keep campaign eligibility separate from the affiliate offer. Always inspect current terms before participating. X was unavailable to our public reader in this edition; these entries are verified against official web pages.",
              "我们整理官方公告，并区分活动资格与 Affiliate 权益。参与前请查看当前条款。本版公开读取工具无法访问 X，以上内容通过官方网页核对。",
            )}
          </p>
          <div className="source-links">
            <a
              href="https://learn.backpack.exchange/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backpack News ↗
            </a>
            <a
              href="https://x.com/Backpack"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Backpack ↗
            </a>
            <a
              href="https://backpack.exchange"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backpack ↗
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
