import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, meta, pick } from "@/lib/site";
import Updates from "@/components/Updates";
export const revalidate = 300;
import Calculator from "@/components/Calculator";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return meta(
    lang,
    pick(lang, "Understand your trading costs", "把交易成本看清楚"),
    pick(
      lang,
      "Independent Backpack guides, a transparent 20% fee-sharing offer and an interactive fee calculator. Created by Mike Xu.",
      "Mike Xu 创建的独立 Backpack 指南、透明的 20% 手续费分享说明与交互费用计算器。",
    ),
  );
}
export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const guide = [
    [
      "fees",
      "Fee breakdown",
      "费用拆解",
      "What you pay beyond the headline rate.",
      "除了标价，你还支付哪些费用？",
      "A practical guide to maker, taker, funding and withdrawals.",
      "理解 Maker、Taker、资金费和提现费用。",
    ],
    [
      "referral",
      "Offer explained",
      "权益说明",
      "Where the 20% actually comes from.",
      "20% 手续费分享，究竟从哪来？",
      "Understand your share, our commission and the limits.",
      "看懂用户所得、本站佣金和适用边界。",
    ],
    [
      "safety",
      "Before you register",
      "注册之前",
      "A few checks worth slowing down for.",
      "有些检查，值得慢下来做。",
      "Verify the destination, account eligibility and custody risks.",
      "核对访问去向、账户资格与托管风险。",
    ],
  ];
  return (
    <main id="main">
      <section className="container hero">
        <div className="hero-copy">
          <div className="byline">
            <span className="avatar">MX</span>
            <span>
              {pick(lang, "Independent research by", "独立指南，来自")}{" "}
              <a
                href="https://x.com/mikexuusa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mike Xu ↗
              </a>
            </span>
          </div>
          <h1>
            {pick(
              lang,
              "Every trade has a cost. Know yours.",
              "每一笔交易，\n都值得算清楚。",
            )}
          </h1>
          <p className="lede">
            {pick(
              lang,
              "Clear fee guides. Transparent referral offers. Tools to understand what you pay before you trade.",
              "读懂交易费用，了解推荐权益。用清晰的指南与工具，在交易之前看清真实成本。",
            )}
          </p>
          <div className="hero-actions">
            <Link className="button" href={`/${lang}/review`}>
              {pick(lang, "Explore the Backpack guide", "阅读 Backpack 指南")}
            </Link>
            <Link className="plain-link" href={`/${lang}/about`}>
              {pick(lang, "Meet the publisher", "了解运营者")}{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="hero-note">
            {pick(
              lang,
              "No wallet connection. No account required.",
              "无需连接钱包，无需创建账户。",
            )}
          </p>
        </div>
        <Calculator lang={lang} />
      </section>
      <section className="container focus-section">
        <div className="section-intro">
          <div>
            <span className="section-kicker">
              {pick(lang, "In focus", "本期关注")}
            </span>
            <h2>
              {pick(
                lang,
                "Backpack, with the details in view.",
                "把 Backpack 的细节摊开看。",
              )}
            </h2>
          </div>
          <p>
            {pick(
              lang,
              "Our first exchange guide. Built around the questions you actually need answered.",
              "从 Backpack 开始，回答那些真正影响你决策的问题。",
            )}
          </p>
        </div>
        <div className="feature-panel">
          <div className="exchange-symbol" aria-hidden="true">
            B<span>↗</span>
          </div>
          <div className="feature-copy">
            <span className="tag">
              {pick(lang, "Independent exchange guide", "独立交易所指南")}
            </span>
            <h3>Backpack</h3>
            <p>
              {pick(
                lang,
                "Fees, onboarding and an openly disclosed affiliate offer. Start with the full picture.",
                "费用、入门流程，以及公开披露的 Affiliate 权益。先了解全貌，再做决定。",
              )}
            </p>
            <Link className="plain-link" href={`/${lang}/review`}>
              {pick(lang, "Read the guide", "阅读完整指南")} ↗
            </Link>
          </div>
          <div className="offer-summary">
            <span>
              {pick(lang, "The affiliate offer", "Affiliate 推荐权益")}
            </span>
            <strong>
              20<span>%</span>
            </strong>
            <p>
              {pick(
                lang,
                "of eligible trading fees shared with you",
                "符合条件的交易手续费分享给你",
              )}
            </p>
            <Link href={`/${lang}/affiliate-disclosure`}>
              {pick(lang, "See the split & conditions", "查看分成与条件")}
            </Link>
            <small>
              {pick(
                lang,
                "Not a deposit bonus. Equity Perps excluded.",
                "不是入金奖励。Equity Perps 不适用。",
              )}
            </small>
          </div>
        </div>
      </section>
      <Updates lang={lang} />
      <section className="container guide-section">
        <div className="section-intro">
          <div>
            <span className="section-kicker">
              {pick(lang, "The reading list", "实用阅读")}
            </span>
            <h2>
              {pick(
                lang,
                "A little clarity goes a long way.",
                "先把关键问题弄明白。",
              )}
            </h2>
          </div>
          <Link className="plain-link" href={`/${lang}/faq`}>
            {pick(lang, "All common questions", "查看常见问题")} ↗
          </Link>
        </div>
        <div className="guide-grid">
          {guide.map(
            ([slug, enLabel, zhLabel, enTitle, zhTitle, enText, zhText], i) => (
              <Link className="guide-card" key={slug} href={`/${lang}/${slug}`}>
                <div className={`guide-art art-${i}`} aria-hidden="true">
                  {i === 0 ? (
                    <>
                      <span className="art-bar" />
                      <span className="art-bar" />
                      <span className="art-bar" />
                      <b>Σ</b>
                    </>
                  ) : i === 1 ? (
                    <>
                      <span className="share-ring" />
                      <b>80 / 20</b>
                    </>
                  ) : (
                    <>
                      <span className="check-shape">✓</span>
                      <b>backpack.exchange</b>
                    </>
                  )}
                </div>
                <div className="guide-card-copy">
                  <span>{pick(lang, enLabel, zhLabel)}</span>
                  <h3>{pick(lang, enTitle, zhTitle)}</h3>
                  <p>{pick(lang, enText, zhText)}</p>
                  <span className="card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </Link>
            ),
          )}
        </div>
      </section>
      <section className="container trust-section">
        <div>
          <span className="section-kicker">
            {pick(lang, "The FeeLens approach", "FeeLens 的原则")}
          </span>
          <h2>
            {pick(
              lang,
              "Useful information. Visible incentives.",
              "信息有用，利益透明。",
            )}
          </h2>
        </div>
        <div className="trust-items">
          <div>
            <h3>{pick(lang, "Sources you can inspect", "可追溯的来源")}</h3>
            <p>
              {pick(
                lang,
                "Official references and explicit assumptions, so you can check the details yourself.",
                "提供官方参考与明确假设，方便你自行核对细节。",
              )}
            </p>
          </div>
          <div>
            <h3>{pick(lang, "A publisher you can reach", "找得到的运营者")}</h3>
            <p>
              {pick(
                lang,
                "Created and operated by Mike Xu. Questions and corrections are welcome.",
                "由 Mike Xu 创建并运营，欢迎提出疑问和内容纠错。",
              )}{" "}
              <a
                href="https://x.com/mikexuusa"
                target="_blank"
                rel="noopener noreferrer"
              >
                @mikexuusa ↗
              </a>
            </p>
          </div>
          <div>
            <h3>
              {pick(lang, "The full commercial picture", "完整的商业关系")}
            </h3>
            <p>
              {pick(
                lang,
                "We may earn commission when you trade through our affiliate link.",
                "通过本站推荐链接交易，运营者可能获得佣金。",
              )}{" "}
              <Link href={`/${lang}/affiliate-disclosure`}>
                {pick(lang, "Read our disclosure.", "阅读推广披露。")}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
