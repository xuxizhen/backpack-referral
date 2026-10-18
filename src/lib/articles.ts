import { type Lang } from "./site";
type Pair = [string, string];
type Section = { title: Pair; body: Pair };
export type Article = {
  title: Pair;
  intro: Pair;
  category: Pair;
  sections: Section[];
  source?: "sharing" | "fees" | "help";
  cta?: boolean;
  calculator?: boolean;
};
export const articles: Record<string, Article> = {
  review: {
    title: ["Backpack, before you sign up.", "注册 Backpack 前，先了解这些。"],
    intro: [
      "A practical look at costs, account requirements and the affiliate relationship behind this guide.",
      "从交易成本、账户要求到推荐利益关系，一份帮助你做决定的实用指南。",
    ],
    category: ["Exchange guide", "交易所指南"],
    source: "help",
    cta: true,
    sections: [
      {
        title: ["Start with your use case", "先确认你的使用需求"],
        body: [
          "Check whether the exact product and trading pair you want are available to your country and account. An exchange account and a self-custodial wallet are different products. Depositing with an exchange introduces custody and counterparty risk.",
          "先确认所在地区和账户能否使用目标产品及交易对。交易所账户与自托管钱包属于不同产品；把资金存入交易所意味着承担托管及交易对手风险。",
        ],
      },
      {
        title: ["What is useful about this offer", "这项权益的价值"],
        body: [
          "Mike Xu participates in Backpack’s Affiliate Program and offers referred users 20% sharing of eligible trading fees. This can lower the effective fee for an eligible account. It does not improve trading returns or offset market losses.",
          "Mike Xu 参与 Backpack Affiliate Program，将符合条件的交易手续费的 20% 分享给推荐用户。这可以降低符合资格账户的有效费率，但不能提高交易收益或抵消行情损失。",
        ],
      },
      {
        title: ["Where the offer stops", "权益的边界"],
        body: [
          "Equity Perps are excluded from commission sharing. Account eligibility, product availability and current exchange settings matter. A low headline fee also leaves out spread, slippage, funding and withdrawal costs.",
          "Equity Perps 不参与手续费分享。账户资格、产品可用性和平台当前设置都会影响权益；较低的名义手续费也不包含价差、滑点、资金费和提现成本。",
        ],
      },
      {
        title: ["Our decision checklist", "决策清单"],
        body: [
          "Before registering, confirm country eligibility, read the applicable entity’s terms, compare your account fee tier, and verify the referral offer on the official interface. If anything differs from this guide, pause and ask official support. We do not award a safety score or a “best exchange” ranking.",
          "注册前依次确认地区资格、阅读服务主体条款、比较账户费率档位，并在官方界面核对推荐权益。若与本站不同，暂停操作并询问官方客服。本站不提供安全评分或“最佳交易所”排名。",
        ],
      },
    ],
  },
  fees: {
    title: ["Know what a trade really costs.", "一笔交易，到底要花多少钱？"],
    intro: [
      "Separate the trading fee from the other costs, then calculate using your own rate.",
      "把手续费与其他成本分开，再用你的实际费率计算。",
    ],
    category: ["Fee tools", "费用工具"],
    source: "fees",
    calculator: true,
    sections: [
      {
        title: ["The calculation", "计算方法"],
        body: [
          "Trading fee = executed notional × fee rate. For eligible fee sharing, estimated net fee = trading fee × 80%. A $10,000 trade at an illustrative 0.05% costs $5 before sharing and $4 after sharing. This is a worked example, not a published current fee tier.",
          "交易手续费 = 成交额 × 费率。符合分享资格时，预计净手续费 = 手续费 × 80%。以 10,000 美元成交额、示例费率 0.05% 计算，分享前费用 5 美元，分享后 4 美元。这是计算示例，不代表当前官方费率档位。",
        ],
      },
      {
        title: ["Maker, taker and volume", "Maker、Taker 与成交量"],
        body: [
          "An order that adds liquidity can receive a maker rate; an immediately matching order can receive a taker rate. A limit order is not automatically a maker order. Use the rate actually shown for your product and account tier, and add the volume from both legs of a round trip.",
          "提供流动性的订单可适用 Maker 费率；立即撮合的订单可适用 Taker 费率。限价单并不必然是 Maker。请使用对应产品及账户档位的实际费率，往返交易须计入两次成交额。",
        ],
      },
      {
        title: ["Costs outside this calculator", "计算器未包含的成本"],
        body: [
          "Spread and slippage affect execution prices. Perpetual positions may pay or receive funding. Deposits and withdrawals can involve network or provider charges. Fee sharing is not a discount on these costs and does not apply to Equity Perps.",
          "价差和滑点影响成交价格；永续仓位可能支付或收取资金费；出入金可能涉及网络或服务商收费。手续费分享不是这些费用的折扣，也不适用于 Equity Perps。",
        ],
      },
    ],
  },
  referral: {
    title: ["20% of the fee. Clearly explained.", "20% 手续费分享，说明白。"],
    intro: [
      "An affiliate offer from Mike Xu, with the benefit and the commercial relationship in the open.",
      "由 Mike Xu 提供的 Affiliate 权益，公开说明用户所得和本站收益。",
    ],
    category: ["Affiliate offer", "推荐权益"],
    source: "sharing",
    cta: true,
    sections: [
      {
        title: ["What you receive", "你获得什么"],
        body: [
          "The operator offers 20% of eligible trading fees to users who register through the linked affiliate offer and meet Backpack’s requirements. It is not 20% of a deposit, trade value or trading profit. Backpack’s official account interface determines the actual fee treatment.",
          "运营者向通过本页 Affiliate 链接注册且满足 Backpack 要求的用户，分享符合条件交易手续费的 20%。这不是入金额、成交额或交易利润的 20%；实际费用处理以官方账户界面为准。",
        ],
      },
      {
        title: ["How the split works", "分成如何计算"],
        body: [
          "The operator reports a 40% affiliate commission rate: 20 percentage points are shared with the user and 20 are retained by the operator. On $100 of eligible fees, that means $20 for the user and $20 for the operator. This is 20 percentage points of the original fee, not 20% of the 40% commission.",
          "运营者提供的 Affiliate 总返佣比例为 40%：将其中 20 个百分点分享给用户，保留 20 个百分点。若符合条件手续费为 100 美元，用户分享 20 美元，运营者保留 20 美元。这里是原手续费的 20 个百分点，不是 40% 佣金再乘 20%。",
        ],
      },
      {
        title: ["Verify before registering", "注册前先核对"],
        body: [
          "The link opens backpack.exchange/join/meme. Confirm the official hostname and the sharing rate displayed during registration or in your account. This site has not independently audited the private affiliate dashboard. If the rate is missing or different, stop and ask Backpack support before trading.",
          "链接打开 backpack.exchange/join/meme。请确认官方域名，以及注册流程或账户显示的分享比例。本站未独立审计私人 Affiliate 后台；若比例缺失或不符，先停止操作并向 Backpack 客服确认，再决定是否交易。",
        ],
      },
      {
        title: ["Eligibility and exclusions", "资格与不适用情形"],
        body: [
          "Commission sharing excludes Equity Perps. Availability depends on the applicable entity, jurisdiction, account and current terms. Do not assume an existing account can be linked retrospectively. Settlement timing and the way the fee benefit appears must be checked with Backpack; we promise no fixed payout schedule.",
          "Commission Sharing 不适用于 Equity Perps。权益取决于服务主体、所在地区、账户及当前条款。不要假定已有账户可补绑推荐关系；结算时间和权益呈现方式需向 Backpack 核实，本站不承诺固定到账周期。",
        ],
      },
    ],
  },
  tutorial: {
    title: ["A careful start on Backpack.", "开始使用 Backpack 的核对指南。"],
    intro: [
      "Check eligibility first. Register and verify only on the exchange’s own website.",
      "先核对资格。注册与身份验证只在交易所官方网站进行。",
    ],
    category: ["Getting started", "入门指南"],
    source: "help",
    sections: [
      {
        title: ["1. Confirm availability", "1. 确认可用性"],
        body: [
          "Read the official terms for your country and the product you want. Do not use location workarounds to bypass restrictions. A translated page does not mean the service is available in that region.",
          "阅读适用于所在地区与目标产品的官方条款。不要通过更改位置绕过限制。网站提供某种语言，不代表该语言对应地区可使用服务。",
        ],
      },
      {
        title: [
          "2. Check the referral before creating an account",
          "2. 创建账户前核对推荐权益",
        ],
        body: [
          "Open the link from our referral guide, check backpack.exchange in the address bar and inspect the offer. Ask official support if the fee-sharing rate is not visible. You do not need to submit personal documents to FeeLens.",
          "从本站推荐说明页打开链接，检查地址栏是否为 backpack.exchange，并核对权益。如未显示分享比例，先询问官方客服。你无需向 FeeLens 提交任何个人证件。",
        ],
      },
      {
        title: [
          "3. Complete verification and protect access",
          "3. 验证身份并保护账户",
        ],
        body: [
          "Follow the document requirements shown in the official verification flow; requirements can vary. Use a unique password and the available strong authentication options. Never share one-time codes, private keys or seed phrases with someone offering help.",
          "按官方验证流程显示的要求提交材料，具体要求可能不同。使用独立密码及平台提供的强身份验证方式。不要向任何声称协助你的人提供验证码、私钥或助记词。",
        ],
      },
      {
        title: ["4. Check the deposit route", "4. 核对入金路径"],
        body: [
          "Match the asset, network, address and any required memo on both sides. Review minimum amounts and fees, then consider a small test transfer. A successful transfer does not establish that trading or custody is risk-free.",
          "核对转出与转入两端的币种、网络、地址及必要备注。查看最低金额和费用，再考虑小额测试。转账成功不代表交易或托管没有风险。",
        ],
      },
    ],
  },
  safety: {
    title: [
      "Verify the destination. Protect the account.",
      "确认访问去向，保护账户。",
    ],
    intro: [
      "A checklist for avoiding impersonation, with clear limits on what this guide can verify.",
      "一份防止误入仿冒网站的检查清单，也明确本站能核实的范围。",
    ],
    category: ["Account safety", "账户安全"],
    source: "help",
    sections: [
      {
        title: [
          "FeeLens is an independent publisher",
          "FeeLens 是独立内容网站",
        ],
        body: [
          "This is not Backpack’s website, exchange interface or customer support. Mike Xu has an affiliate relationship with Backpack; this does not make FeeLens an official Backpack service. We never request account passwords, seed phrases, API secrets or deposits.",
          "本站不是 Backpack 官网、交易界面或客服。Mike Xu 与 Backpack 存在 Affiliate 推广关系，但 FeeLens 并非 Backpack 官方服务。本站不会索要账户密码、助记词、API 密钥或入金。",
        ],
      },
      {
        title: ["Inspect the full hostname", "检查完整域名"],
        body: [
          "For the referral link on this site, the destination is backpack.exchange. Read the hostname, not just a logo or page title. A padlock only indicates an encrypted connection; it is not an endorsement of a business. Bookmark the verified destination.",
          "本站推荐链接的目标域名是 backpack.exchange。请看完整域名，不要只看 Logo 或网页标题。锁形图标仅代表连接加密，并非商业可信度背书。确认后可保存书签。",
        ],
      },
      {
        title: [
          "Regulation is specific to entity and activity",
          "监管适用于具体主体与业务",
        ],
        body: [
          "Verify any license in the relevant regulator’s register and match its legal entity and permitted activity with your agreement. A license in one jurisdiction is not worldwide authorization or deposit insurance. This guide makes no blanket claim about solvency or security.",
          "如需核查牌照，应到对应监管机构登记册，匹配协议中的法律主体与获准业务。某地区牌照不等于全球经营许可或存款保险。本站不对偿付能力或安全性作全面保证。",
        ],
      },
    ],
  },
  faq: {
    title: ["The questions worth asking first.", "注册前，值得先问的问题。"],
    intro: [
      "Direct answers about fees, referral eligibility and this website.",
      "关于费用、推荐资格与本站身份的直接回答。",
    ],
    category: ["Common questions", "常见问题"],
    source: "sharing",
    sections: [
      {
        title: ["Is the 20% a deposit bonus?", "20% 是入金奖励吗？"],
        body: [
          "No. It is the operator’s offered share of eligible trading fees. A $1,000 deposit does not earn a $200 bonus. Equity Perps are excluded.",
          "不是。它是运营者提供的符合条件交易手续费的分享比例。入金 1,000 美元不会获得 200 美元奖励。Equity Perps 不适用。",
        ],
      },
      {
        title: [
          "Can I add a referral to an existing account?",
          "已有账户可以补绑推荐吗？",
        ],
        body: [
          "Do not assume retrospective linking is supported. Ask Backpack support about your account before making a new account or trading for the offer. FeeLens cannot change referral attribution.",
          "不要假定平台支持补绑。为获取权益重新开户或交易前，先向 Backpack 客服确认账户情况。FeeLens 无法更改推荐归属。",
        ],
      },
      {
        title: [
          "Why does my calculated fee differ?",
          "实际手续费为什么与计算器不同？",
        ],
        body: [
          "Check the product, maker/taker execution, account tier, actual filled volume and whether sharing applies. The example rate is editable and is not a live fee feed. Funding and network costs are separate.",
          "请检查产品、Maker/Taker 成交方式、账户档位、实际成交额及是否适用分享。示例费率可修改，并非实时费率。资金费和网络费用另计。",
        ],
      },
      {
        title: ["Is FeeLens official support?", "FeeLens 是官方客服吗？"],
        body: [
          "No. Mike Xu operates this independent publication and may earn affiliate commission. Contact Backpack for identity verification, account restrictions, transfers or fee disputes. Contact Mike for corrections to the guide.",
          "不是。Mike Xu 运营这份独立指南，并可能获得推广佣金。身份验证、账户限制、转账或费用争议请联系 Backpack；指南内容纠错可联系 Mike。",
        ],
      },
    ],
  },
  "vs-binance": {
    title: [
      "Compare the total cost, not the headline.",
      "比较总成本，而不只看标价。",
    ],
    intro: [
      "A Backpack vs Binance decision framework without an invented winner or stale fee table.",
      "一份 Backpack 与 Binance 的比较方法，不预设胜者，也不使用过期费率表。",
    ],
    category: ["Comparison guide", "比较指南"],
    source: "fees",
    sections: [
      {
        title: ["Compare the same trade", "比较同一笔交易"],
        body: [
          "Use the same product, order size, maker/taker assumption and account tier. Enter each platform’s current rate into the fee calculator. An affiliate saving only belongs in the calculation when the account and product qualify.",
          "使用相同产品、订单规模、Maker/Taker 假设和账户档位，把各平台当前费率代入计算器。只有账户和产品满足条件，才计入推广优惠。",
        ],
      },
      {
        title: ["Execution can outweigh fees", "成交质量可能比手续费更重要"],
        body: [
          "Compare quoted spreads and available order-book depth at your intended trade size. Include funding for derivatives and withdrawal costs for your chosen asset and network. A smaller fee does not ensure a better fill.",
          "按计划交易规模比较报价价差和订单簿深度。衍生品应计入资金费；提现应按目标资产和网络计算。手续费更低并不保证成交价格更好。",
        ],
      },
      {
        title: ["Eligibility comes before price", "资格比价格更优先"],
        body: [
          "Read each platform’s current regional terms and confirm access to the product you need. FeeLens currently has an affiliate relationship for Backpack, which creates a commercial incentive. We have not independently benchmarked the two platforms’ execution quality.",
          "先阅读各平台当前地区条款，确认目标产品可用。FeeLens 当前与 Backpack 存在 Affiliate 推广关系，这构成商业利益。本站未独立测试两家平台的成交质量。",
        ],
      },
    ],
  },
  about: {
    title: ["A clearer lens on trading costs.", "让交易成本更清楚。"],
    intro: [
      "FeeLens is an independent guide published by Mike Xu.",
      "FeeLens 是 Mike Xu 运营的独立交易费用指南。",
    ],
    category: ["About FeeLens", "关于 FeeLens"],
    sections: [
      {
        title: ["Why this exists", "为什么做这个网站"],
        body: [
          "Fee schedules and referral offers are easier to judge when the assumptions and incentives are visible. FeeLens brings the arithmetic, limitations and source links together. Our initial coverage focuses on Backpack.",
          "当计算假设和利益关系公开，费率表与推荐权益才更容易理解。FeeLens 把计算方法、适用限制和官方来源放在一起。目前首先关注 Backpack。",
        ],
      },
      {
        title: ["Who publishes it", "谁在运营"],
        body: [
          "Mike Xu publishes FeeLens and operates the Backpack affiliate link used here. The site was previously presented as Backpackref. The new identity separates the independent publisher from the exchange being discussed.",
          "Mike Xu 运营 FeeLens 及本站使用的 Backpack Affiliate 链接。网站此前名为 Backpackref；新品牌明确区分独立内容运营者与被介绍的交易所。",
        ],
      },
      {
        title: ["What independence means here", "这里的独立意味着什么"],
        body: [
          "FeeLens is not owned or operated by Backpack. We do have a commercial affiliate relationship, so our coverage is not free of financial incentives. Read the affiliate disclosure alongside any offer.",
          "FeeLens 不由 Backpack 所有或运营。但本站存在推广商业关系，因此内容并非没有财务激励。查看权益时，请同时阅读推广披露。",
        ],
      },
    ],
  },
  contact: {
    title: ["Contact the publisher.", "联系运营者。"],
    intro: [
      "Corrections and questions about FeeLens go to Mike Xu. Account issues go to Backpack.",
      "FeeLens 内容纠错请联系 Mike Xu；账户问题请联系 Backpack。",
    ],
    category: ["Contact", "联系"],
    source: "help",
    sections: [
      {
        title: ["Report a correction", "报告内容错误"],
        body: [
          "Send the page URL, the specific statement and a current official source to @mikexuusa on X. Do not include account identifiers, identity documents or financial records in public posts. A response time is not guaranteed.",
          "请通过 X 上的 @mikexuusa 提供页面链接、具体问题及当前官方来源。不要在公开内容中附带账户标识、身份证件或财务记录。本站不保证固定回复时间。",
        ],
      },
      {
        title: ["For account or referral disputes", "账户或推荐争议"],
        body: [
          "Use the support channel reached from Backpack’s official website. FeeLens cannot access your account, recover funds, approve verification or alter commission settings for your account.",
          "请从 Backpack 官网进入支持渠道。FeeLens 无法访问你的账户、追回资金、批准身份验证或修改你账户的佣金设置。",
        ],
      },
    ],
  },
  "affiliate-disclosure": {
    title: ["How FeeLens earns commission.", "FeeLens 如何获得佣金。"],
    intro: [
      "The commercial relationship behind our Backpack links.",
      "公开本站 Backpack 推荐链接背后的商业关系。",
    ],
    category: ["Transparency", "透明披露"],
    source: "sharing",
    sections: [
      {
        title: ["The operator’s stated arrangement", "运营者说明的安排"],
        body: [
          "Mike Xu reports approval in Backpack’s Affiliate Program with a 40% commission rate, sharing 20 percentage points with referred users and retaining 20. These figures come from the operator, not a public audit of the private dashboard.",
          "Mike Xu 确认已获 Backpack Affiliate Program 批准，总返佣比例 40%，向推荐用户分享 20 个百分点，自留 20 个百分点。这些数字由运营者提供，并非对私人后台的公开审计结果。",
        ],
      },
      {
        title: ["The incentive", "商业激励"],
        body: [
          "If you follow the affiliate link and generate qualifying trading fees, the operator may receive commission. That gives us a financial incentive to refer users to Backpack. A recommendation or calculator result is not personalized investment advice.",
          "如果你使用推荐链接并产生符合条件的交易手续费，运营者可能获得佣金。因此本站有向 Backpack 推荐用户的财务激励。指南和计算结果不是个性化投资建议。",
        ],
      },
      {
        title: ["Official settings control the offer", "以官方设置为准"],
        body: [
          "Check the displayed sharing rate and account eligibility before registering or trading. Equity Perps are excluded. Links are labeled as affiliate links and point directly to the official exchange without a hidden redirect service.",
          "注册或交易前核对官方显示的分享比例和账户资格。Equity Perps 不适用。推广链接会注明身份，并直接指向官方交易所，不通过隐藏跳转服务。",
        ],
      },
    ],
  },
  "editorial-policy": {
    title: ["Sources, assumptions and corrections.", "来源、假设与纠错。"],
    intro: [
      "How to read and evaluate the information on FeeLens.",
      "如何阅读与判断 FeeLens 的信息。",
    ],
    category: ["Editorial policy", "编辑政策"],
    sections: [
      {
        title: ["Source hierarchy", "来源优先级"],
        body: [
          "We prioritize the exchange’s own fee schedules, product documentation and applicable terms. Operator-provided offer details are identified separately. Publication dates do not imply a continuous audit or real-time verification of account settings.",
          "优先使用交易所官方费率、产品文档及适用条款。运营者提供的权益信息单独标识。发布日期不代表持续审计或实时验证账户设置。",
        ],
      },
      {
        title: ["Tools and assisted writing", "工具与辅助写作"],
        body: [
          "Software and AI tools may assist drafting and implementation. They are not sources of evidence. Calculations disclose their inputs and exclusions. We avoid unsupported ratings, return promises and claims of universal regulatory coverage.",
          "软件和 AI 工具可能参与草稿及实现，但它们不作为事实依据。计算工具公开输入项和排除项。本站避免无依据评分、回报承诺和全球监管覆盖的说法。",
        ],
      },
      {
        title: ["When information changes", "信息变化时"],
        body: [
          "Official terms can change after publication. Where an account screen differs, rely on that official screen and contact the exchange. Send corrections with supporting sources to the publisher; material corrections should update the page date.",
          "官方条款可能在发布后变化。如账户界面存在差异，请以官方界面为准并联系平台。可附来源向运营者提交纠错；重大修正应更新页面日期。",
        ],
      },
    ],
  },
  privacy: {
    title: ["Your data on FeeLens.", "你在 FeeLens 的数据。"],
    intro: [
      "No accounts, wallet connection or identity uploads on this site.",
      "本站不提供开户、连接钱包或身份材料上传。",
    ],
    category: ["Privacy", "隐私说明"],
    sections: [
      {
        title: ["Local calculations", "本地计算"],
        body: [
          "Calculator values stay in browser memory and are not submitted to a FeeLens server or included in analytics events. The hosting provider may process standard request data, such as IP addresses and browser information, to serve and protect the site.",
          "计算器数值保存在浏览器内存，不发送到 FeeLens 服务器，也不包含在统计事件中。托管服务商可能处理 IP 地址、浏览器信息等标准请求数据，以提供及保护网站。",
        ],
      },
      {
        title: ["Optional analytics", "可选统计"],
        body: [
          "Google Analytics loads only after you choose Allow analytics. It may process page views, device information and affiliate-link clicks using cookies. A click is not evidence of registration or trading. Your preference is stored locally; change it with Analytics preferences in the footer. Declining keeps analytics disabled.",
          "仅在你选择允许统计后加载 Google Analytics。它可能使用 Cookie 处理页面访问、设备信息和推广链接点击。点击不代表完成注册或交易。偏好保存在本地，可通过页脚“统计偏好”修改；拒绝则保持统计关闭。",
        ],
      },
      {
        title: ["Third parties and contact", "第三方与联系"],
        body: [
          "Following a Backpack or X link takes you to a separate service with its own privacy practices. For questions about this site’s data practices, contact @mikexuusa on X. Do not send sensitive account information through public channels.",
          "点击 Backpack 或 X 链接将进入适用独立隐私规则的第三方服务。如对本站数据处理有疑问，请通过 X 联系 @mikexuusa。不要经公开渠道发送敏感账户信息。",
        ],
      },
    ],
  },
  terms: {
    title: ["Terms of using this guide.", "指南使用条款。"],
    intro: [
      "FeeLens provides general information and illustrative tools.",
      "FeeLens 提供一般信息与示例计算工具。",
    ],
    category: ["Terms", "使用条款"],
    sections: [
      {
        title: ["Scope of service", "服务范围"],
        body: [
          "FeeLens is a publication, not an exchange, broker, custodian or financial adviser. We do not execute orders, hold user funds or provide account support. Use of a third-party exchange is governed by its own terms.",
          "FeeLens 是内容网站，不是交易所、经纪商、托管方或财务顾问。本站不执行订单、不保管用户资金，也不提供账户客服。使用第三方交易所须遵守其条款。",
        ],
      },
      {
        title: ["Accuracy and decisions", "准确性与决策"],
        body: [
          "Information may become outdated and calculators simplify real-world costs. Verify the current official terms before acting. No guide guarantees eligibility, savings, profitability or access. Nothing here excludes rights that cannot be excluded under applicable law.",
          "信息可能过时，计算工具简化了实际成本。操作前请核对当前官方条款。本站不保证资格、节省金额、收益或服务可用性。本说明不排除适用法律下不得排除的权利。",
        ],
      },
    ],
  },
  "risk-disclosure": {
    title: ["Lower fees do not remove risk.", "较低费用，不代表较低交易风险。"],
    intro: [
      "Understand what a fee comparison cannot tell you.",
      "了解费用比较无法告诉你的事情。",
    ],
    category: ["Risk disclosure", "风险说明"],
    sections: [
      {
        title: ["Market and leverage risk", "市场与杠杆风险"],
        body: [
          "Crypto prices can move sharply. Leverage can cause rapid liquidation and loss of posted collateral. A fee rebate cannot prevent a trading loss. Do not increase trading solely to earn a rebate.",
          "加密资产价格可能剧烈波动。杠杆可能导致迅速强平及抵押资金损失。手续费优惠不能阻止交易亏损。不要仅为获得返佣增加交易。",
        ],
      },
      {
        title: ["Custody and operational risk", "托管及操作风险"],
        body: [
          "An exchange can suspend withdrawals, experience outages or face financial distress. Transfers on an incorrect network or to an incorrect address can be irreversible. Licenses and account security measures do not eliminate these risks.",
          "交易所可能暂停提现、发生故障或面临财务困难。使用错误网络或地址的转账可能无法撤销。牌照及账户安全措施不能消除这些风险。",
        ],
      },
      {
        title: ["Eligibility and personal circumstances", "资格与个人情况"],
        body: [
          "Availability and obligations vary by jurisdiction and product. Review your own circumstances and seek qualified advice where needed. This guide does not assess whether trading is appropriate for you.",
          "服务可用性与义务因地区和产品而异。请结合自身情况，必要时寻求专业意见。本指南不判断交易是否适合你。",
        ],
      },
    ],
  },
};
export function text(pair: Pair, lang: Lang) {
  return pair[lang === "en" ? 0 : 1];
}
