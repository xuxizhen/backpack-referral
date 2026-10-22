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
 * Ids for posts from official X use `${exchange}-${date}-${slug}`.
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
    "id": "binance-2026-10-22-stock-options",
    "exchange": "binance",
    "date": "2026-10-22",
    "category": "product",
    "title": {
      "en": "Binance stock options: sell covered calls and cash-secured puts",
      "zh": "币安股票期权支持卖出备兑看涨与现金担保看跌"
    },
    "summary": {
      "en": "Binance now lets users sell covered calls and cash-secured puts on stock options, with low fees and physical settlement, covering 7,000+ US stocks and ETFs.",
      "zh": "币安股票期权现支持卖出备兑看涨期权和现金担保看跌期权，费用低、实物交割，覆盖 7,000 多只美股和 ETF。"
    },
    "sourceUrl": "https://x.com/binance/status/2112989799867162899"
  },
  {
    "id": "backpack-2026-10-21-referral-mystery-box",
    "exchange": "backpack",
    "date": "2026-10-21",
    "category": "promotion",
    "title": {
      "en": "Backpack launches referral Mystery Box rewards",
      "zh": "Backpack 推出邀请好友赢神秘盒活动"
    },
    "summary": {
      "en": "Invite friends to Backpack and both you and your friend earn a Mystery Box when the friend completes their quest; up to 5 boxes come from referrals and up to 15 from trading in Week 4. Invitations run until Nov 3.",
      "zh": "邀请好友加入 Backpack，好友完成任务后双方各得一个神秘盒；邀请最多可得 5 个，第 4 周交易最多可得 15 个。邀请截止 11 月 3 日。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2112778955426291864"
  },
  {
    "id": "binance-2026-10-21-five-bstocks",
    "exchange": "binance",
    "date": "2026-10-21",
    "category": "listing",
    "title": {
      "en": "Binance lists five new bStocks",
      "zh": "币安上线 5 个新 bStock"
    },
    "summary": {
      "en": "Binance listed BOTB/USDT, BRKBB/USDT, KSTRB/USDT, TMFB/USDT and VSTB/USDT bStock pairs, tradable 24/7 with 1:1 free and instant exchange for the actual stocks.",
      "zh": "币安上线 BOTB/USDT、BRKBB/USDT、KSTRB/USDT、TMFB/USDT 和 VSTB/USDT bStock 交易对，支持 24/7 交易，并可与对应真实股票 1:1 免费即时兑换。"
    },
    "sourceUrl": "https://x.com/binance/status/2112877130862174252"
  },
  {
    "id": "okx-2026-10-21-axis-perpetual",
    "exchange": "okx",
    "date": "2026-10-21",
    "category": "listing",
    "title": {
      "en": "OKX lists AXISUSDT perpetual futures",
      "zh": "OKX 上线 AXISUSDT 永续合约"
    },
    "summary": {
      "en": "AXISUSDT global perpetual futures trading is now available on OKX. AXIS (@axisrobotics) builds a self-improving data engine for Physical AI.",
      "zh": "OKX 现已上线 AXISUSDT 全球永续合约交易。AXIS（@axisrobotics）致力于打造面向物理 AI 的自我改进数据引擎。"
    },
    "sourceUrl": "https://x.com/okx/status/2112929402787135747"
  },
  {
    "id": "okx-2026-10-21-eurc-order-book",
    "exchange": "okx",
    "date": "2026-10-21",
    "category": "product",
    "title": {
      "en": "OKX integrates Circle's EURC into its unified EUR order book",
      "zh": "OKX 将 Circle 的 EURC 整合进统一欧元订单簿"
    },
    "summary": {
      "en": "OKX integrated EURC by Circle into its unified EUR order book, so EEA traders can access fiat and stablecoin liquidity through one market.",
      "zh": "OKX 将 Circle 发行的 EURC 整合进统一的欧元订单簿，欧洲经济区（EEA）用户可在同一市场获取法币与稳定币流动性。"
    },
    "sourceUrl": "https://x.com/okx/status/2112902698722816275"
  },
  {
    "id": "okx-2026-10-21-shield-us",
    "exchange": "okx",
    "date": "2026-10-21",
    "category": "product",
    "title": {
      "en": "OKX Shield launches in the US with up to $500K protection",
      "zh": "OKX Shield 在美国上线，最高提供 50 万美元保障"
    },
    "summary": {
      "en": "OKX announced the US launch of OKX Shield, an account-protection program that backs eligible customers with up to $500K against qualifying unauthorized account takeovers, at no extra cost.",
      "zh": "OKX 宣布在美国推出 OKX Shield 账户保护计划，为符合条件的用户针对合格的未授权账户盗用提供最高 50 万美元保障，不额外收费。"
    },
    "sourceUrl": "https://x.com/okx/status/2112703160380711365"
  },
  {
    "id": "binance-2026-10-20-auto-order-routing",
    "exchange": "binance",
    "date": "2026-10-20",
    "category": "product",
    "title": {
      "en": "Auto Order Routing goes live on Binance Spot",
      "zh": "币安现货上线自动订单路由"
    },
    "summary": {
      "en": "Binance Spot orders are now routed via whichever path gives the better price at routing time, with no extra Binance fee for the currency conversion. It is live on eligible U, USD, USD1 and USDC-quoted pairs, with more to follow.",
      "zh": "币安现货订单现会自动选择路由时价格更优的路径成交，币安不对其中的币种转换额外收费。目前支持符合条件的 U、USD、USD1 和 USDC 计价交易对，后续将扩展。"
    },
    "sourceUrl": "https://x.com/binance/status/2112378280242258058"
  },
  {
    "id": "tokenized-uvxy",
    "exchange": "backpack",
    "date": "2026-10-17",
    "category": "listing",
    "title": {
      "en": "Backpack announces tokenized UVXY on Solana",
      "zh": "Backpack 公布 Solana 上的代币化 UVXY"
    },
    "summary": {
      "en": "The October 17 announcement adds a tokenized volatility-linked product. It is a leveraged ETF exposure, not a cash-like holding.",
      "zh": "10 月 17 日官方公布新增波动率相关代币化产品。这是杠杆 ETF 敞口，不是现金类资产。"
    },
    "sourceUrl": "https://learn.backpack.exchange/blog/tokenized-proshares-ultra-vix-short-term-futures-etf-uvxy"
  },
  {
    "id": "backpack-ai-search",
    "exchange": "backpack",
    "date": "2026-10-16",
    "category": "product",
    "title": {
      "en": "AI Search: find markets in your own words",
      "zh": "AI Search：用自然语言发现市场"
    },
    "summary": {
      "en": "Backpack’s new guide explains natural-language search across stocks, crypto, perpetuals and Earn, with follow-up filters and saved watchlists.",
      "zh": "官方新指南介绍如何用自然语言搜索股票、加密资产、永续与 Earn，并通过追问筛选和保存自选列表。"
    },
    "sourceUrl": "https://learn.backpack.exchange/articles/backpack-ai-search"
  },
  {
    "id": "okx-2026-10-16-flexible-loans",
    "exchange": "okx",
    "date": "2026-10-16",
    "category": "product",
    "title": {
      "en": "OKX introduces Flexible Loans in USDC",
      "zh": "OKX 推出 USDC 灵活借贷"
    },
    "summary": {
      "en": "OKX Flexible Loans let users borrow up to 500,000 USDC against their crypto at about 3% a year, with VIP limits up to 4.5M USDC.",
      "zh": "OKX 灵活借贷支持以加密资产抵押借入最多 50 万 USDC，年利率约 3%，VIP 额度最高 450 万 USDC。"
    },
    "sourceUrl": "https://x.com/okx/status/2111117464721371318"
  },
  {
    "id": "stock-limit-orders",
    "exchange": "backpack",
    "date": "2026-10-16",
    "category": "product",
    "title": {
      "en": "Stock API limit orders now support 24-hour expiry",
      "zh": "股票 API 限价单有效期延长至 24 小时"
    },
    "summary": {
      "en": "The October 16 API changelog extends stock limit order expiry from ten minutes to 24 hours.",
      "zh": "10 月 16 日 API 更新日志将股票限价单最长有效期从十分钟延长至 24 小时。"
    },
    "sourceUrl": "https://docs.backpack.exchange/#changelog"
  },
  {
    "id": "binance-2026-10-15-flexible-products-apr",
    "exchange": "binance",
    "date": "2026-10-15",
    "category": "promotion",
    "title": {
      "en": "Binance brings back U Flexible Products bonus APR with VIP tiers",
      "zh": "币安 U 活期产品额外年化奖励回归，VIP 分档"
    },
    "summary": {
      "en": "Binance's U Flexible Products bonus APR is back: 5% for regular users (8K U tier), 5% for VIP 1-3 (300K U tier) and 6% for VIP 4-9 (500K U tier).",
      "zh": "币安 U 活期产品额外年化奖励回归：普通用户 5%（8K U 档），VIP 1-3 为 5%（300K U 档），VIP 4-9 为 6%（500K U 档）。"
    },
    "sourceUrl": "https://x.com/binance/status/2110566347528671301"
  },
  {
    "id": "binance-2026-10-14-delist-epic-quick",
    "exchange": "binance",
    "date": "2026-10-14",
    "category": "listing",
    "title": {
      "en": "Binance to delist EPIC and QUICK on Oct 28",
      "zh": "币安将于 10 月 28 日下架 EPIC 和 QUICK"
    },
    "summary": {
      "en": "Binance announced it will delist EPIC and QUICK on 2026-10-28.",
      "zh": "币安宣布将于 2026 年 10 月 28 日下架 EPIC 和 QUICK。"
    },
    "sourceUrl": "https://x.com/binance/status/2110250033874690086"
  },
  {
    "id": "unpack-real-stocks-week-3",
    "exchange": "backpack",
    "date": "2026-10-14",
    "category": "promotion",
    "title": {
      "en": "Unpack Real Stocks · Week 3",
      "zh": "Unpack Real Stocks 美股盲盒 · 第三周"
    },
    "summary": {
      "en": "Opt in before trading. The first mystery box requires $10,000 of eligible volume. Rewards vary; $1,000 is the rare maximum, not a guaranteed payout.",
      "zh": "交易前需先报名，首个盲盒门槛为 10,000 美元有效成交额。奖励随机，1,000 美元是罕见最高奖励，不是保底。"
    },
    "sourceUrl": "https://learn.backpack.exchange/blog/unpack-real-stocks-week-3"
  },
  {
    "id": "binance-2026-10-13-x402",
    "exchange": "binance",
    "date": "2026-10-13",
    "category": "product",
    "title": {
      "en": "Binance x402 links AI agents to on-chain payments",
      "zh": "币安推出 x402，连接 AI 代理与链上支付"
    },
    "summary": {
      "en": "Binance x402 offers programmable payments for AI agents on BNB Chain, settled through Binance Pay, using self-custodied USDT with no cards and no gas.",
      "zh": "Binance x402 为 AI 代理提供基于 BNB Chain 的可编程支付，通过 Binance Pay 结算，使用自托管 USDT，无需银行卡、无需 Gas。"
    },
    "sourceUrl": "https://x.com/binance/status/2110012238295629893"
  },
  {
    "id": "backpack-2026-10-12-nakagawa-head-of-strategy",
    "exchange": "backpack",
    "date": "2026-10-12",
    "category": "other",
    "title": {
      "en": "Daisuke Nakagawa joins Backpack Japan as Head of Strategy",
      "zh": "中川大辅加入 Backpack Japan 任战略主管"
    },
    "summary": {
      "en": "Backpack appointed Daisuke Nakagawa as Head of Strategy and Corporate Development at Backpack Japan. He previously served as COO of Kraken Japan and Binance Japan, where he led licensing efforts and exchange operations.",
      "zh": "Backpack 任命中川大辅（Daisuke Nakagawa）为 Backpack Japan 战略与企业发展主管。他曾任 Kraken Japan 和 Binance Japan 的 COO，负责牌照申请与交易所运营。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2109617491760803938"
  },
  {
    "id": "backpack-2026-10-11-google-apple-sign-in",
    "exchange": "backpack",
    "date": "2026-10-11",
    "category": "product",
    "title": {
      "en": "Backpack adds Google and Apple sign-in",
      "zh": "Backpack 支持 Google 和 Apple 账户登录"
    },
    "summary": {
      "en": "Users can now sign up for or log in to Backpack with their Google or Apple account.",
      "zh": "用户现在可以使用 Google 或 Apple 账户注册或登录 Backpack。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2109154524065886401"
  },
  {
    "id": "backpack-2026-10-07-mystery-box-10k",
    "exchange": "backpack",
    "date": "2026-10-07",
    "category": "promotion",
    "title": {
      "en": "Unpack Real Stocks: first Mystery Box now unlocks at $10K volume",
      "zh": "「开箱真股票」活动：首个神秘盒现以 1 万美元交易量解锁"
    },
    "summary": {
      "en": "In Backpack's Unpack Real Stocks campaign, the first Mystery Box now unlocks at $10K trading volume. Every box holds a real US stock reward worth up to $1,000.",
      "zh": "在 Backpack「开箱真股票」活动中，首个神秘盒现在交易量达到 1 万美元即可解锁。每个盒子内含价值最高 1,000 美元的真实美股奖励。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2107670148408922385"
  },
  {
    "id": "okx-2026-10-07-strategic-investment",
    "exchange": "okx",
    "date": "2026-10-07",
    "category": "other",
    "title": {
      "en": "OKX announces strategic investment at $25B pre-money valuation",
      "zh": "OKX 宣布获战略投资，投前估值 250 亿美元"
    },
    "summary": {
      "en": "OKX announced a strategic investment from Circle, QRT, Ripple and SC Ventures by Standard Chartered at a $25 billion pre-money valuation.",
      "zh": "OKX 宣布获得 Circle、QRT、Ripple 及渣打银行旗下 SC Ventures 的战略投资，投前估值 250 亿美元。"
    },
    "sourceUrl": "https://x.com/okx/status/2107512457447272675"
  },
  {
    "id": "okx-2026-10-07-tokenized-securities-venue",
    "exchange": "okx",
    "date": "2026-10-07",
    "category": "regulatory",
    "title": {
      "en": "OKXICE submits Tokenized Securities Venue application",
      "zh": "OKXICE 已提交代币化证券交易场所申请"
    },
    "summary": {
      "en": "OKX said the OKXICE joint venture had submitted its TSV (Tokenized Securities Venue) application, and OKXICE Co-Chair and former New York Governor Andrew Cuomo spoke at OKX Now about the venture.",
      "zh": "OKX 表示，OKXICE 合资公司已提交 TSV（代币化证券交易场所）申请；OKXICE 联席主席、前纽约州州长 Andrew Cuomo 在 OKX Now 上谈及该合资项目。"
    },
    "sourceUrl": "https://x.com/okx/status/2107848700944896154"
  },
  {
    "id": "backpack-2026-10-06-near-spot-perps",
    "exchange": "backpack",
    "date": "2026-10-06",
    "category": "listing",
    "title": {
      "en": "Backpack expands NEAR support: spot, native USDC and perps",
      "zh": "Backpack 扩展 NEAR 支持：现货、原生 USDC 及永续合约"
    },
    "summary": {
      "en": "Backpack added NEAR spot trading with native USDC support, plus NEAR perpetuals.",
      "zh": "Backpack 上线 NEAR 现货交易并支持原生 USDC，同时上线 NEAR 永续合约。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2107441617955373372"
  },
  {
    "id": "backpack-2026-10-06-vip-maker-fees",
    "exchange": "backpack",
    "date": "2026-10-06",
    "category": "fees",
    "title": {
      "en": "Backpack VIP program upgraded: maker fees as low as 0%",
      "zh": "Backpack VIP 计划升级：Maker 费率低至 0%"
    },
    "summary": {
      "en": "Backpack VIP can now be qualified through asset balance, BP staking or trading activity. Benefits include up to 6.5% APY on USD collateral, maker fees as low as 0% and zero fees on global wire transfers.",
      "zh": "Backpack VIP 现可通过资产余额、BP 质押或交易量获得资格。权益包括 USD 抵押品最高 6.5% 年化收益、Maker 费率低至 0%、全球电汇零手续费。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2107396627241775399"
  },
  {
    "id": "okx-2026-10-06-okx-money",
    "exchange": "okx",
    "date": "2026-10-06",
    "category": "product",
    "title": {
      "en": "OKX unveils OKX Money digital dollar wallet",
      "zh": "OKX 发布数字美元钱包 OKX Money"
    },
    "summary": {
      "en": "Unveiled at OKX Now, OKX Money is a digital dollar wallet to save, earn, send and spend with no conversion fees.",
      "zh": "OKX 在 OKX Now 大会上发布 OKX Money，这是一款数字美元钱包，可储蓄、赚取收益、转账和消费，且无兑换费用。"
    },
    "sourceUrl": "https://x.com/okx/status/2107335039264415876"
  },
  {
    "id": "binance-2026-10-03-lite-loan-fee",
    "exchange": "binance",
    "date": "2026-10-03",
    "category": "fees",
    "title": {
      "en": "Binance Lite Loan service fee cut 50% to 0.5%",
      "zh": "币安 Lite Loan 服务费减半至 0.5%"
    },
    "summary": {
      "en": "For a limited time, Binance Lite Loan lets users borrow up to 1,000 USDT against BTC at a 0.5% service fee (down from 1%), with no price-triggered liquidation for 30 days while the BTC keeps earning Simple Earn rewards.",
      "zh": "限时期间，币安 Lite Loan 支持以 BTC 抵押借入最多 1,000 USDT，服务费由 1% 降至 0.5%，30 天内不会因价格触发清算，抵押的 BTC 仍可获得简单赚币收益。"
    },
    "sourceUrl": "https://x.com/binance/status/2106353878174167204"
  },
  {
    "id": "backpack-2026-10-02-ai-search",
    "exchange": "backpack",
    "date": "2026-10-02",
    "category": "product",
    "title": {
      "en": "Backpack introduces AI Search",
      "zh": "Backpack 推出 AI 搜索"
    },
    "summary": {
      "en": "Backpack AI Search lets users find stocks, strategies or market conditions in plain words, with one search bar across stocks, crypto, perps and Earn.",
      "zh": "Backpack AI 搜索支持用自然语言查找股票、策略或市场状况，一个搜索栏覆盖股票、加密货币、永续合约和理财。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2105833764933029966"
  },
  {
    "id": "backpack-2026-09-29-rates-dashboard",
    "exchange": "backpack",
    "date": "2026-09-29",
    "category": "product",
    "title": {
      "en": "Backpack launches Rates dashboard and US Treasury ETF trading",
      "zh": "Backpack 推出利率看板并支持美国国债 ETF 交易"
    },
    "summary": {
      "en": "Backpack introduced a Rates dashboard to monitor live yields, inflation, the debasement trade and market-moving events, alongside trading of US Treasury ETFs.",
      "zh": "Backpack 推出利率（Rates）看板，可追踪实时收益率、通胀、货币贬值交易及影响市场的事件，并可交易美国国债 ETF。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2104872721863815637"
  },
  {
    "id": "okx-2026-09-29-ai-builder-program",
    "exchange": "okx",
    "date": "2026-09-29",
    "category": "promotion",
    "title": {
      "en": "OKX AI Builder Program: earn 35% of net trading fees",
      "zh": "OKX AI Builder 计划：可获 35% 净交易手续费分成"
    },
    "summary": {
      "en": "Builders using Agent Trade Kit or their own stack can attach a Builder Code to orders and, once approved, earn 35% of net trading fees, or up to 50% for invited builders.",
      "zh": "开发者可使用 Agent Trade Kit 或自有技术栈，在订单中附加 Builder Code，审核通过后可获得 35% 的净交易手续费分成，受邀开发者最高 50%。"
    },
    "sourceUrl": "https://x.com/okx/status/2104775676331204953"
  },
  {
    "id": "binance-2026-09-24-list-hype",
    "exchange": "binance",
    "date": "2026-09-24",
    "category": "listing",
    "title": {
      "en": "Binance to list Hyperliquid (HYPE) with Seed Tag",
      "zh": "币安将上线 Hyperliquid (HYPE)，并加注种子标签"
    },
    "summary": {
      "en": "Binance announced it will list Hyperliquid (HYPE) with the Seed Tag applied.",
      "zh": "币安宣布将上线 Hyperliquid（HYPE），并为其加注种子标签（Seed Tag）。"
    },
    "sourceUrl": "https://x.com/binance/status/2103026710585438412"
  }
];
