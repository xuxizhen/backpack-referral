/**
 * Weekly news feed. Append one object (newest items at the top is easiest to
 * review; the page sorts by `date` descending, then `id`). Other locales use
 * the English title and summary. zh-cn uses `zh`.
 *
 * {
 *   id: "unique-slug",                 // stable, never reused
 *   exchange: "backpack" | "binance" | "okx",
 *   date: "YYYY-MM-DD",                // publication date from the source
 *   category: "listing" | "fees" | "product" | "promotion" | "regulatory" | "other",
 *   title: { en: "...", zh: "..." },
 *   summary: { en: "...", zh: "..." },
 *   sourceUrl: "https://...",          // official page or official X post
 * }
 *
 * Do not invent items. Leave an exchange out until a checked source exists.
 */
export const updateExchanges = ["backpack", "binance", "okx"] as const;
export type UpdateExchange = (typeof updateExchanges)[number];
export const updateCategories = [
  "listing",
  "fees",
  "product",
  "promotion",
  "regulatory",
  "other",
] as const;
export type UpdateCategory = (typeof updateCategories)[number];
export type UpdateCopy = { en: string; zh: string };
export type UpdateItem = {
  id: string;
  exchange: UpdateExchange;
  date: string;
  category: UpdateCategory;
  title: UpdateCopy;
  summary: UpdateCopy;
  sourceUrl: string;
};

export const updateItems: readonly UpdateItem[] = [
  {
    id: "tokenized-uvxy",
    exchange: "backpack",
    date: "2026-10-17",
    category: "listing",
    title: {
      en: "Backpack announces tokenized UVXY on Solana",
      zh: "Backpack 公布 Solana 上的代币化 UVXY",
    },
    summary: {
      en: "The October 17 announcement adds a tokenized volatility-linked product. It is a leveraged ETF exposure, not a cash-like holding.",
      zh: "10 月 17 日官方公布新增波动率相关代币化产品。这是杠杆 ETF 敞口，不是现金类资产。",
    },
    sourceUrl:
      "https://learn.backpack.exchange/blog/tokenized-proshares-ultra-vix-short-term-futures-etf-uvxy",
  },
  {
    id: "backpack-ai-search",
    exchange: "backpack",
    date: "2026-10-16",
    category: "product",
    title: {
      en: "AI Search: find markets in your own words",
      zh: "AI Search：用自然语言发现市场",
    },
    summary: {
      en: "Backpack’s new guide explains natural-language search across stocks, crypto, perpetuals and Earn, with follow-up filters and saved watchlists.",
      zh: "官方新指南介绍如何用自然语言搜索股票、加密资产、永续与 Earn，并通过追问筛选和保存自选列表。",
    },
    sourceUrl: "https://learn.backpack.exchange/articles/backpack-ai-search",
  },
  {
    id: "stock-limit-orders",
    exchange: "backpack",
    date: "2026-10-16",
    category: "product",
    title: {
      en: "Stock API limit orders now support 24-hour expiry",
      zh: "股票 API 限价单有效期延长至 24 小时",
    },
    summary: {
      en: "The October 16 API changelog extends stock limit order expiry from ten minutes to 24 hours.",
      zh: "10 月 16 日 API 更新日志将股票限价单最长有效期从十分钟延长至 24 小时。",
    },
    sourceUrl: "https://docs.backpack.exchange/#changelog",
  },
  {
    id: "unpack-real-stocks-week-3",
    exchange: "backpack",
    date: "2026-10-14",
    category: "promotion",
    title: {
      en: "Unpack Real Stocks · Week 3",
      zh: "Unpack Real Stocks 美股盲盒 · 第三周",
    },
    summary: {
      en: "Opt in before trading. The first mystery box requires $10,000 of eligible volume. Rewards vary; $1,000 is the rare maximum, not a guaranteed payout.",
      zh: "交易前需先报名，首个盲盒门槛为 10,000 美元有效成交额。奖励随机，1,000 美元是罕见最高奖励，不是保底。",
    },
    sourceUrl: "https://learn.backpack.exchange/blog/unpack-real-stocks-week-3",
  },
];
