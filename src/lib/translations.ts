export interface TranslationSet {
  [key: string]: {
    en: string;
    'zh-cn': string;
    'zh-tw': string;
    fr: string;
    pt: string;
    it: string;
    de: string;
    ja: string;
    ko: string;
  };
}

export const translations: TranslationSet = {
  // ─── Homepage translations (from original page.tsx) ───
  title: {
    en: 'Backpack',
    'zh-cn': 'Backpack',
    'zh-tw': 'Backpack',
    fr: 'Backpack',
    pt: 'Backpack',
    it: 'Backpack',
    de: 'Backpack',
    ja: 'Backpack',
    ko: 'Backpack'
  },
  subtitle: {
    en: 'Regulated Crypto, BP Token, and Stocks in One Platform',
    'zh-cn': '合规加密交易、BP平台币与股票入口',
    'zh-tw': '合規加密交易、BP平台幣與股票入口',
    fr: 'Crypto réglementée, token BP et actions sur une plateforme',
    pt: 'Cripto regulada, token BP e ações em uma plataforma',
    it: 'Crypto regolamentate, token BP e azioni in una piattaforma',
    de: 'Regulierte Krypto, BP Token und Aktien auf einer Plattform',
    ja: '規制対応の暗号資産、BPトークン、株式を一つのプラットフォームで',
    ko: '규제 기반 크립토, BP 토큰, 주식을 하나의 플랫폼에서'
  },
  heroDescription: {
    en: 'Backpack is building regulated market infrastructure across crypto and securities: Dubai VARA licensing, MiFID II status through FTX EU, BP token utilities, and Backpack Securities beta access subject to eligibility.',
    'zh-cn': 'Backpack 正在构建连接加密资产与证券的合规交易基础设施：迪拜 VARA 牌照、通过 FTX EU 获得 MiFID II 资质、BP 平台币权益，以及需符合资格的 Backpack Securities 股票内测入口。',
    'zh-tw': 'Backpack 正在構建連接加密資產與證券的合規交易基礎設施：迪拜 VARA 牌照、透過 FTX EU 取得 MiFID II 資質、BP 平台幣權益，以及需符合資格的 Backpack Securities 股票內測入口。',
    fr: 'Backpack construit une infrastructure de marché réglementée entre crypto et titres : licence Dubai VARA, statut MiFID II via FTX EU, utilités du token BP et accès bêta Backpack Securities soumis à éligibilité.',
    pt: 'A Backpack constrói infraestrutura regulada entre cripto e valores mobiliários: licença Dubai VARA, status MiFID II via FTX EU, utilidades do token BP e acesso beta à Backpack Securities sujeito à elegibilidade.',
    it: 'Backpack costruisce infrastruttura regolamentata tra crypto e titoli: licenza Dubai VARA, status MiFID II tramite FTX EU, utilità del token BP e accesso beta a Backpack Securities soggetto a idoneità.',
    de: 'Backpack baut regulierte Marktinfrastruktur für Krypto und Wertpapiere: Dubai VARA Lizenz, MiFID II Status über FTX EU, BP Token Nutzen und Backpack Securities Beta-Zugang nach Berechtigung.',
    ja: 'Backpackは暗号資産と証券をつなぐ規制対応の市場インフラを構築しています。Dubai VARAライセンス、FTX EU経由のMiFID IIステータス、BPトークンのユーティリティ、対象者向けBackpack Securitiesベータアクセスを備えます。',
    ko: 'Backpack은 크립토와 증권을 연결하는 규제 기반 시장 인프라를 구축하고 있습니다. 두바이 VARA 라이선스, FTX EU를 통한 MiFID II 지위, BP 토큰 유틸리티, 자격 요건이 있는 Backpack Securities 베타 접근을 포함합니다.'
  },
  registerButton: {
    en: 'Register with Referral Link →',
    'zh-cn': '通过邀请链接注册 →',
    'zh-tw': '透過邀請連結註冊 →',
    fr: "S'inscrire avec le lien →",
    pt: 'Registrar com o link →',
    it: 'Registrati con il link →',
    de: 'Mit Empfehlungslink registrieren →',
    ja: '紹介リンクで登録 →',
    ko: '추천 링크로 가입 →'
  },
  trustBadge1: {
    en: 'Dubai VARA Licensed',
    'zh-cn': '迪拜VARA持牌',
    'zh-tw': '迪拜VARA持牌',
    fr: 'Licence Dubai VARA',
    pt: 'Licença Dubai VARA',
    it: 'Licenza Dubai VARA',
    de: 'Dubai VARA Lizenz',
    ja: 'ドバイVARAライセンス',
    ko: '두바이 VARA 라이선스'
  },
  trustBadge2: {
    en: 'EU MiFID II Regulated',
    'zh-cn': '欧盟MiFID II监管',
    'zh-tw': '歐盟MiFID II監管',
    fr: 'Réglementé UE MiFID II',
    pt: 'Regulado UE MiFID II',
    it: 'Regolamentato UE MiFID II',
    de: 'EU MiFID II Reguliert',
    ja: 'EU MiFID II規制準拠',
    ko: 'EU MiFID II 규제'
  },
  trustBadge3: {
    en: 'Zero Security Breaches',
    'zh-cn': '零安全事故',
    'zh-tw': '零安全事故',
    fr: 'Zéro Faille de Sécurité',
    pt: 'Zero Violações de Segurança',
    it: 'Zero Violazioni di Sicurezza',
    de: 'Keine Sicherheitsverstöße',
    ja: 'セキュリティ侵害ゼロ',
    ko: '보안 침해 제로'
  },
  trustBadge4: {
    en: '5M+ Global Traders',
    'zh-cn': '500万+全球交易者',
    'zh-tw': '500萬+全球交易者',
    fr: '5M+ Traders Mondiaux',
    pt: '5M+ Traders Globais',
    it: '5M+ Trader Globali',
    de: '5M+ Globale Trader',
    ja: '500万+グローバルトレーダー',
    ko: '500만+ 글로벌 트레이더'
  },
  hotActivities: {
    en: 'Official Backpack Updates',
    'zh-cn': 'Backpack 官方最新动态',
    'zh-tw': 'Backpack 官方最新動態',
    fr: 'Actualités officielles Backpack',
    pt: 'Atualizações oficiais da Backpack',
    it: 'Aggiornamenti ufficiali Backpack',
    de: 'Offizielle Backpack Updates',
    ja: 'Backpack公式アップデート',
    ko: 'Backpack 공식 업데이트'
  },
  activity1Title: {
    en: 'Path to Liftoff: SpaceX Shares',
    'zh-cn': 'Path to Liftoff：SpaceX 股票活动',
    'zh-tw': 'Path to Liftoff：SpaceX 股票活動',
    fr: 'Path to Liftoff : actions SpaceX',
    pt: 'Path to Liftoff: ações SpaceX',
    it: 'Path to Liftoff: azioni SpaceX',
    de: 'Path to Liftoff: SpaceX Aktien',
    ja: 'Path to Liftoff：SpaceX株式',
    ko: 'Path to Liftoff: SpaceX 주식'
  },
  activity1: {
    en: 'Official campaign from June 4 to June 10, 2026 UTC. Eligible users can opt in, trade, and compete for SpaceX share rewards; availability and rules depend on jurisdiction and campaign terms.',
    'zh-cn': '官方活动时间为 2026 年 6 月 4 日至 6 月 10 日 UTC。符合资格的用户可报名参与、交易并竞争 SpaceX 股票奖励；可用性与规则以地区和活动条款为准。',
    'zh-tw': '官方活動時間為 2026 年 6 月 4 日至 6 月 10 日 UTC。符合資格的用戶可報名參與、交易並競爭 SpaceX 股票獎勵；可用性與規則以地區和活動條款為準。',
    fr: 'Campagne officielle du 4 au 10 juin 2026 UTC. Les utilisateurs éligibles peuvent opt in, trader et concourir pour des actions SpaceX; disponibilité selon juridiction et conditions.',
    pt: 'Campanha oficial de 4 a 10 de junho de 2026 UTC. Usuários elegíveis podem optar, negociar e concorrer a ações SpaceX; disponibilidade e regras dependem da jurisdição e termos.',
    it: 'Campagna ufficiale dal 4 al 10 giugno 2026 UTC. Gli utenti idonei possono aderire, fare trading e competere per azioni SpaceX; disponibilità e regole dipendono da giurisdizione e termini.',
    de: 'Offizielle Kampagne vom 4. bis 10. Juni 2026 UTC. Berechtigte Nutzer können opt in, handeln und um SpaceX Aktien konkurrieren; Verfügbarkeit und Regeln hängen von Land und Bedingungen ab.',
    ja: '2026年6月4日から6月10日UTCまでの公式キャンペーン。対象ユーザーはオプトインし、取引してSpaceX株式報酬を競えます。利用可否とルールは地域と条件に従います。',
    ko: '2026년 6월 4일부터 6월 10일 UTC까지 진행되는 공식 캠페인입니다. 자격 요건을 충족한 사용자는 옵트인 후 거래하고 SpaceX 주식 보상을 경쟁할 수 있으며, 이용 가능 여부와 규칙은 지역 및 약관에 따릅니다.'
  },
  activity2Title: {
    en: 'Introducing Backpack Securities',
    'zh-cn': 'Backpack Securities 股票平台内测',
    'zh-tw': 'Backpack Securities 股票平台內測',
    fr: 'Présentation de Backpack Securities',
    pt: 'Apresentando Backpack Securities',
    it: 'Introduzione a Backpack Securities',
    de: 'Backpack Securities vorgestellt',
    ja: 'Backpack Securitiesの紹介',
    ko: 'Backpack Securities 소개'
  },
  activity2: {
    en: 'Backpack is expanding from crypto into stocks and ETFs through regulated securities infrastructure, with real ownership and tokenized transferability planned for eligible users.',
    'zh-cn': 'Backpack 正从加密交易扩展到股票和 ETF，通过合规证券基础设施，为符合资格的用户提供真实证券持有与代币化流转能力。',
    'zh-tw': 'Backpack 正從加密交易擴展到股票和 ETF，透過合規證券基礎設施，為符合資格的用戶提供真實證券持有與代幣化流轉能力。',
    fr: 'Backpack passe de la crypto aux actions et ETF via une infrastructure réglementée, avec propriété réelle et transférabilité tokenisée prévues pour les utilisateurs éligibles.',
    pt: 'A Backpack expande de cripto para ações e ETFs via infraestrutura regulada, com propriedade real e transferibilidade tokenizada planejadas para usuários elegíveis.',
    it: 'Backpack si espande da crypto ad azioni ed ETF tramite infrastruttura regolamentata, con proprietà reale e trasferibilità tokenizzata per utenti idonei.',
    de: 'Backpack erweitert sich von Krypto zu Aktien und ETFs über regulierte Wertpapierinfrastruktur, mit echter Eigentümerschaft und tokenisierter Übertragbarkeit für berechtigte Nutzer.',
    ja: 'Backpackは規制対応の証券インフラを通じて、暗号資産から株式とETFへ拡張しています。対象ユーザーには実保有とトークン化された移転性が計画されています。',
    ko: 'Backpack은 규제 기반 증권 인프라를 통해 크립토에서 주식과 ETF로 확장하고 있으며, 자격 요건을 충족한 사용자에게 실제 소유권과 토큰화된 이전 가능성을 제공할 계획입니다.'
  },
  activity3Title: {
    en: 'BP/USD Spot Trading Is Live',
    'zh-cn': 'BP/USD 现货交易已上线',
    'zh-tw': 'BP/USD 現貨交易已上線',
    fr: 'Trading spot BP/USD en ligne',
    pt: 'Trading spot BP/USD ativo',
    it: 'Trading spot BP/USD attivo',
    de: 'BP/USD Spot-Trading live',
    ja: 'BP/USDスポット取引開始',
    ko: 'BP/USD 현물 거래 시작'
  },
  activity3: {
    en: 'BP, the Backpack ecosystem token, is live for BP/USD spot trading on Solana. Always verify official token details and contract information before trading.',
    'zh-cn': 'Backpack 生态平台币 BP 已上线 BP/USD 现货交易，并运行在 Solana 上。交易前请始终核对官方代币信息和合约地址。',
    'zh-tw': 'Backpack 生態平台幣 BP 已上線 BP/USD 現貨交易，並運行在 Solana 上。交易前請始終核對官方代幣資訊和合約地址。',
    fr: 'BP, le token de l’écosystème Backpack, est disponible en spot BP/USD sur Solana. Vérifiez toujours les informations officielles du token avant de trader.',
    pt: 'BP, o token do ecossistema Backpack, está ativo para spot BP/USD na Solana. Sempre verifique os detalhes oficiais do token antes de negociar.',
    it: 'BP, il token dell’ecosistema Backpack, è live per il trading spot BP/USD su Solana. Verifica sempre i dettagli ufficiali del token prima di fare trading.',
    de: 'BP, der Backpack Ökosystem-Token, ist für BP/USD Spot-Trading auf Solana live. Prüfen Sie vor dem Handel immer die offiziellen Token-Details.',
    ja: 'BackpackエコシステムトークンのBPは、Solana上でBP/USDスポット取引に対応しました。取引前に必ず公式トークン情報を確認してください。',
    ko: 'Backpack 생태계 토큰 BP는 Solana에서 BP/USD 현물 거래가 시작되었습니다. 거래 전 항상 공식 토큰 정보와 계약 정보를 확인하세요.'
  },
  activity4Title: {
    en: 'BP Tokenomics: 1B Supply, No Presale',
    'zh-cn': 'BP 代币经济：10 亿供应、无预售',
    'zh-tw': 'BP 代幣經濟：10 億供應、無預售',
    fr: 'Tokenomics BP : 1 Md, sans prévente',
    pt: 'Tokenomics BP: 1B, sem pré-venda',
    it: 'Tokenomics BP: 1B, nessuna prevendita',
    de: 'BP Tokenomics: 1 Mrd, kein Presale',
    ja: 'BPトークノミクス：10億供給、プレセールなし',
    ko: 'BP 토크노믹스: 10억 공급, 프리세일 없음'
  },
  activity4: {
    en: 'Official BP documentation describes a 1 billion supply, no presale, and user-first distribution. Staking and equity access benefits remain subject to eligibility and terms.',
    'zh-cn': '官方 BP 文档说明总供应量为 10 亿枚、无预售，并强调用户优先分配。质押和股票入口等权益仍需符合资格与条款。',
    'zh-tw': '官方 BP 文件說明總供應量為 10 億枚、無預售，並強調用戶優先分配。質押和股票入口等權益仍需符合資格與條款。',
    fr: 'La documentation officielle BP indique 1 milliard de supply, aucune prévente et une distribution orientée utilisateurs. Staking et equity access restent soumis aux conditions.',
    pt: 'A documentação oficial do BP descreve supply de 1 bilhão, sem pré-venda e distribuição focada em usuários. Staking e acesso a equity dependem de elegibilidade.',
    it: 'La documentazione ufficiale BP indica 1 miliardo di supply, nessuna prevendita e distribuzione user-first. Staking ed equity access restano soggetti a idoneità.',
    de: 'Die offizielle BP Dokumentation nennt 1 Milliarde Supply, keinen Presale und nutzerorientierte Verteilung. Staking und Equity Access bleiben an Bedingungen gebunden.',
    ja: '公式BPドキュメントでは、供給量10億、プレセールなし、ユーザー優先の配布が説明されています。ステーキングや株式アクセス特典は資格と条件の対象です。',
    ko: '공식 BP 문서는 10억 개 공급, 프리세일 없음, 사용자 우선 분배를 설명합니다. 스테이킹 및 주식 접근 혜택은 자격 요건과 약관의 적용을 받습니다.'
  },
  activity5Title: {
    en: 'How to Stake BP',
    'zh-cn': '如何质押 BP',
    'zh-tw': '如何質押 BP',
    fr: 'Comment staker BP',
    pt: 'Como fazer stake de BP',
    it: 'Come mettere in stake BP',
    de: 'BP staken',
    ja: 'BPのステーキング方法',
    ko: 'BP 스테이킹 방법'
  },
  activity5: {
    en: 'BP staking is designed to unlock platform benefits such as fee perks, wire features, equity access opportunities, and other utilities where available.',
    'zh-cn': 'BP 质押可用于解锁平台权益，例如手续费权益、wire 功能、股票入口机会及其它可用工具权益。',
    'zh-tw': 'BP 質押可用於解鎖平台權益，例如手續費權益、wire 功能、股票入口機會及其它可用工具權益。',
    fr: 'Le staking BP vise à débloquer des avantages comme frais, wire, opportunités equity access et autres utilités selon disponibilité.',
    pt: 'O staking de BP busca desbloquear benefícios como taxas, wire, oportunidades de equity access e outras utilidades onde disponíveis.',
    it: 'Lo staking BP mira a sbloccare benefici come fee perks, wire, opportunità di equity access e altre utilità dove disponibili.',
    de: 'BP Staking soll Plattformvorteile wie Gebührenvorteile, Wire-Funktionen, Equity-Access-Möglichkeiten und weitere Utilities freischalten.',
    ja: 'BPステーキングは、手数料特典、wire機能、株式アクセス機会、その他利用可能なユーティリティを解放する設計です。',
    ko: 'BP 스테이킹은 수수료 혜택, wire 기능, 주식 접근 기회 및 기타 유틸리티를 잠금 해제하도록 설계되었습니다.'
  },
  activity6Title: {
    en: 'Grid Bot V2 Automated Trading',
    'zh-cn': 'Grid Bot V2 自动化交易',
    'zh-tw': 'Grid Bot V2 自動化交易',
    fr: 'Grid Bot V2 automatisé',
    pt: 'Grid Bot V2 automatizado',
    it: 'Grid Bot V2 automatizzato',
    de: 'Grid Bot V2 Automatisierung',
    ja: 'Grid Bot V2自動取引',
    ko: 'Grid Bot V2 자동 거래'
  },
  activity6: {
    en: 'Backpack continues shipping trading tools, including a major Grid Bot V2 upgrade for automated strategies on supported markets.',
    'zh-cn': 'Backpack 持续上线交易工具，包括 Grid Bot V2 重大升级，用于支持市场的自动化策略。',
    'zh-tw': 'Backpack 持續上線交易工具，包括 Grid Bot V2 重大升級，用於支援市場的自動化策略。',
    fr: 'Backpack continue de livrer des outils de trading, dont une mise à jour Grid Bot V2 pour stratégies automatisées.',
    pt: 'A Backpack continua lançando ferramentas de trading, incluindo grande atualização do Grid Bot V2 para estratégias automatizadas.',
    it: 'Backpack continua a rilasciare strumenti di trading, incluso un grande upgrade Grid Bot V2 per strategie automatizzate.',
    de: 'Backpack liefert weiter Trading-Tools, darunter ein großes Grid Bot V2 Upgrade für automatisierte Strategien.',
    ja: 'Backpackは、対応市場での自動戦略向けGrid Bot V2の大型アップグレードなど、取引ツールを継続的に提供しています。',
    ko: 'Backpack은 지원 시장의 자동화 전략을 위한 Grid Bot V2 주요 업그레이드를 포함해 거래 도구를 계속 출시하고 있습니다.'
  },
  activity7Title: {
    en: 'Zero-Fee Wallet Swaps and Bridges',
    'zh-cn': '钱包兑换与跨链桥零手续费',
    'zh-tw': '錢包兌換與跨鏈橋零手續費',
    fr: 'Swaps et bridges wallet sans frais',
    pt: 'Swaps e bridges sem taxa',
    it: 'Swap e bridge wallet zero fee',
    de: 'Gebührenfreie Wallet Swaps und Bridges',
    ja: 'ウォレットスワップとブリッジ手数料ゼロ',
    ko: '지갑 스왑 및 브리지 수수료 제로'
  },
  activity7: {
    en: 'Backpack Wallet supports zero-fee swaps and bridges across supported networks, helping users move between assets with clearer cost control.',
    'zh-cn': 'Backpack 钱包支持在可用网络上进行零手续费兑换和跨链桥接，帮助用户更清楚地控制资产转换成本。',
    'zh-tw': 'Backpack 錢包支援在可用網路上進行零手續費兌換和跨鏈橋接，幫助用戶更清楚地控制資產轉換成本。',
    fr: 'Backpack Wallet prend en charge les swaps et bridges sans frais sur les réseaux supportés, pour mieux contrôler les coûts.',
    pt: 'A Backpack Wallet suporta swaps e bridges sem taxa nas redes suportadas, ajudando a controlar custos.',
    it: 'Backpack Wallet supporta swap e bridge senza fee sulle reti supportate, aiutando a controllare meglio i costi.',
    de: 'Backpack Wallet unterstützt gebührenfreie Swaps und Bridges auf unterstützten Netzwerken, mit klarerer Kostenkontrolle.',
    ja: 'Backpack Walletは対応ネットワークで手数料ゼロのスワップとブリッジをサポートし、資産移動コストを把握しやすくします。',
    ko: 'Backpack Wallet은 지원 네트워크에서 수수료 없는 스왑과 브리지를 지원하여 자산 이동 비용을 더 명확히 관리할 수 있게 합니다.'
  },
  activity8Title: {
    en: 'BTC Yield Boost',
    'zh-cn': 'BTC 收益提升活动',
    'zh-tw': 'BTC 收益提升活動',
    fr: 'Boost de rendement BTC',
    pt: 'Impulso de rendimento BTC',
    it: 'Boost rendimento BTC',
    de: 'BTC Yield Boost',
    ja: 'BTC利回りブースト',
    ko: 'BTC 수익률 부스트'
  },
  activity8: {
    en: 'Backpack highlights yield products and campaign boosts such as BTC yield promotions; rates, eligibility, and availability can change by product terms.',
    'zh-cn': 'Backpack 持续推出收益产品和活动加成，例如 BTC 收益提升；利率、资格与可用性以产品条款为准。',
    'zh-tw': 'Backpack 持續推出收益產品和活動加成，例如 BTC 收益提升；利率、資格與可用性以產品條款為準。',
    fr: 'Backpack met en avant des produits de rendement et boosts comme BTC yield; taux et éligibilité varient selon les conditions.',
    pt: 'A Backpack destaca produtos de rendimento e boosts como BTC yield; taxas e elegibilidade variam conforme os termos.',
    it: 'Backpack evidenzia prodotti di rendimento e boost come BTC yield; tassi e idoneità variano secondo i termini.',
    de: 'Backpack hebt Yield-Produkte und Boosts wie BTC Yield hervor; Raten, Berechtigung und Verfügbarkeit hängen von Bedingungen ab.',
    ja: 'BackpackはBTC利回りプロモーションなどの利回り商品とキャンペーンを展開しています。利率、資格、利用可否は商品条件により変わります。',
    ko: 'Backpack은 BTC 수익률 프로모션 같은 수익 상품과 캠페인 부스트를 강조합니다. 금리, 자격, 이용 가능 여부는 상품 약관에 따라 달라질 수 있습니다.'
  },
  activity9Title: {
    en: 'Trading Trail Campaigns',
    'zh-cn': 'Trading Trail 交易活动',
    'zh-tw': 'Trading Trail 交易活動',
    fr: 'Campagnes Trading Trail',
    pt: 'Campanhas Trading Trail',
    it: 'Campagne Trading Trail',
    de: 'Trading Trail Kampagnen',
    ja: 'Trading Trailキャンペーン',
    ko: 'Trading Trail 캠페인'
  },
  activity9: {
    en: 'Trading Trail events keep the exchange active with time-limited tasks and rewards. Check the official campaign page before participating.',
    'zh-cn': 'Trading Trail 活动通过限时任务与奖励保持交易活跃。参与前请先查看官方活动页面。',
    'zh-tw': 'Trading Trail 活動透過限時任務與獎勵保持交易活躍。參與前請先查看官方活動頁面。',
    fr: 'Les événements Trading Trail proposent tâches et récompenses limitées dans le temps. Consultez toujours la page officielle avant participation.',
    pt: 'Eventos Trading Trail trazem tarefas e recompensas por tempo limitado. Confira a página oficial antes de participar.',
    it: 'Gli eventi Trading Trail offrono task e reward a tempo limitato. Controlla la pagina ufficiale prima di partecipare.',
    de: 'Trading Trail Events bieten zeitlich begrenzte Aufgaben und Rewards. Prüfen Sie vor Teilnahme die offizielle Kampagnenseite.',
    ja: 'Trading Trailイベントでは期間限定タスクと報酬が用意されています。参加前に必ず公式キャンペーンページを確認してください。',
    ko: 'Trading Trail 이벤트는 기간 한정 과제와 보상을 제공합니다. 참여 전 공식 캠페인 페이지를 확인하세요.'
  },
  learnMore: {
    en: 'Learn More →',
    'zh-cn': '了解更多 →',
    'zh-tw': '了解更多 →',
    fr: 'En Savoir Plus →',
    pt: 'Saiba Mais →',
    it: 'Scopri di Più →',
    de: 'Mehr Erfahren →',
    ja: '詳しく見る →',
    ko: '자세히 보기 →'
  },
  bpProgramEyebrow: {
    en: 'Backpack Participant Program',
    'zh-cn': 'Backpack 参与者计划',
    'zh-tw': 'Backpack 參與者計劃',
    fr: 'Programme Participant Backpack',
    pt: 'Programa de Participantes Backpack',
    it: 'Programma Partecipanti Backpack',
    de: 'Backpack Participant Program',
    ja: 'Backpack Participant Program',
    ko: 'Backpack Participant Program'
  },
  bpProgramTitle: {
    en: 'Stake BP to Unlock Platform Benefits',
    'zh-cn': '质押 BP，解锁平台权益',
    'zh-tw': '質押 BP，解鎖平台權益',
    fr: 'Stakez BP pour débloquer des avantages',
    pt: 'Faça stake de BP para desbloquear benefícios',
    it: 'Metti BP in stake per sbloccare vantaggi',
    de: 'BP staken und Plattformvorteile freischalten',
    ja: 'BPをステーキングして特典を解放',
    ko: 'BP 스테이킹으로 플랫폼 혜택 잠금 해제'
  },
  bpProgramDetails: {
    en: 'Official Backpack docs describe BP staking as the primary way to unlock tiered benefits: lower trading fees, fiat wire perks, equity access, and early product access. Benefits scale by staking tier and duration.',
    'zh-cn': '官方文档将 BP 质押描述为解锁分层权益的主要方式：更低交易费、法币 wire 入出金优惠、股权兑换入口和新产品优先访问。权益会随质押等级和时长提升。',
    'zh-tw': '官方文件將 BP 質押描述為解鎖分層權益的主要方式：更低交易費、法幣 wire 入出金優惠、股權兌換入口和新產品優先訪問。權益會隨質押等級和時長提升。',
    fr: 'La documentation officielle présente le staking BP comme la voie principale vers des avantages par niveaux : frais réduits, virements fiat, equity access et accès anticipé aux produits.',
    pt: 'A documentação oficial apresenta o staking de BP como a principal forma de desbloquear benefícios por níveis: taxas menores, wire fiat, equity access e acesso antecipado a produtos.',
    it: 'La documentazione ufficiale descrive lo staking BP come il modo principale per sbloccare benefici a livelli: fee ridotte, wire fiat, equity access e accesso anticipato ai prodotti.',
    de: 'Offizielle Backpack-Dokumente beschreiben BP Staking als wichtigsten Weg zu gestaffelten Vorteilen: niedrigere Gebühren, Fiat-Wire-Vorteile, Equity Access und früher Produktzugang.',
    ja: '公式ドキュメントでは、BPステーキングが段階的特典を解放する主な方法と説明されています。取引手数料の引き下げ、法定通貨wire特典、株式アクセス、新製品の早期アクセスが含まれます。',
    ko: '공식 문서는 BP 스테이킹을 등급별 혜택을 여는 주요 방법으로 설명합니다. 낮은 거래 수수료, 법정화폐 wire 혜택, equity access, 신제품 조기 접근이 포함됩니다.'
  },
  bpBenefit1: {
    en: 'Reduced maker and taker fees on spot and derivatives, with better rates as your staking tier increases.',
    'zh-cn': '现货和衍生品 maker/taker 交易费降低，质押等级越高，费率权益越好。',
    'zh-tw': '現貨和衍生品 maker/taker 交易費降低，質押等級越高，費率權益越好。',
    fr: 'Frais maker et taker réduits sur spot et dérivés, avec de meilleurs taux selon le niveau.',
    pt: 'Taxas maker e taker reduzidas em spot e derivativos, com melhores níveis conforme o stake.',
    it: 'Fee maker e taker ridotte su spot e derivati, con tariffe migliori al salire del tier.',
    de: 'Reduzierte Maker- und Taker-Gebühren für Spot und Derivate, mit besseren Raten je höher der Staking-Tier.',
    ja: 'スポットとデリバティブのmaker/taker手数料が低下し、ステーキング階層が上がるほど優遇されます。',
    ko: '현물 및 파생상품 maker/taker 수수료가 낮아지며, 스테이킹 등급이 올라갈수록 더 좋은 요율이 적용됩니다.'
  },
  bpBenefit2: {
    en: 'Discounted or waived fiat wire deposit and withdrawal fees, depending on your Backpack Participant Program tier.',
    'zh-cn': '根据参与者计划等级，法币 wire 入金和出金费用可享折扣或减免。',
    'zh-tw': '根據參與者計劃等級，法幣 wire 入金和出金費用可享折扣或減免。',
    fr: 'Frais de dépôts et retraits fiat par virement réduits ou supprimés selon votre niveau.',
    pt: 'Taxas de depósitos e saques fiat por wire reduzidas ou isentas conforme seu nível.',
    it: 'Commissioni fiat wire su depositi e prelievi scontate o azzerate in base al livello.',
    de: 'Reduzierte oder erlassene Fiat-Wire-Ein- und Auszahlungsgebühren je nach Tier.',
    ja: '参加プログラムの階層に応じて、法定通貨wire入出金手数料の割引または免除があります。',
    ko: '참여자 프로그램 등급에 따라 법정화폐 wire 입출금 수수료 할인 또는 면제가 제공됩니다.'
  },
  bpBenefit3: {
    en: 'Equity Exchange access: eligible stakers may use BP toward purchasing Backpack equity after meeting minimum staking requirements.',
    'zh-cn': '股权兑换入口：符合资格的质押用户在满足最低质押要求后，可使用 BP 参与购买 Backpack 股权。',
    'zh-tw': '股權兌換入口：符合資格的質押用戶在滿足最低質押要求後，可使用 BP 參與購買 Backpack 股權。',
    fr: 'Equity Exchange : les stakers éligibles peuvent utiliser BP pour acheter de l’equity Backpack après les exigences de staking.',
    pt: 'Equity Exchange: stakers elegíveis podem usar BP para comprar equity da Backpack após cumprir requisitos mínimos.',
    it: 'Equity Exchange: gli staker idonei possono usare BP per acquistare equity Backpack dopo i requisiti minimi.',
    de: 'Equity Exchange: Berechtigte Staker können BP nach Mindest-Staking-Anforderungen zum Kauf von Backpack Equity nutzen.',
    ja: 'Equity Exchange：対象ステーカーは最低ステーキング要件を満たした後、BPをBackpack株式購入に利用できる場合があります。',
    ko: 'Equity Exchange: 자격 요건을 충족한 스테이커는 최소 스테이킹 조건 충족 후 BP로 Backpack equity 구매에 참여할 수 있습니다.'
  },
  bpBenefit4: {
    en: 'Priority access windows and higher allocation caps for token launches, IPOs, and other primary platform distributions.',
    'zh-cn': '代币发行、IPO 和其它平台一级分发中，可获得更早参与窗口和更高额度上限。',
    'zh-tw': '代幣發行、IPO 和其它平台一級分發中，可獲得更早參與窗口和更高額度上限。',
    fr: 'Fenêtres prioritaires et plafonds plus élevés pour lancements de tokens, IPOs et distributions primaires.',
    pt: 'Janelas prioritárias e limites maiores para lançamentos de tokens, IPOs e distribuições primárias.',
    it: 'Finestre prioritarie e cap più alti per token launch, IPO e distribuzioni primarie.',
    de: 'Priorisierte Teilnahmefenster und höhere Zuteilungsgrenzen für Token-Launches, IPOs und primäre Distributionen.',
    ja: 'トークンローンチ、IPO、その他一次配布で、優先参加枠と高い割当上限を得られる場合があります。',
    ko: '토큰 출시, IPO 및 기타 1차 배포에서 우선 참여 창과 더 높은 할당 한도를 받을 수 있습니다.'
  },
  bpBenefit5: {
    en: 'Early or exclusive access to new products, including Backpack Card and other platform features as they roll out.',
    'zh-cn': '可获得新产品早期或独家访问机会，包括 Backpack Card 及后续上线的平台功能。',
    'zh-tw': '可獲得新產品早期或獨家訪問機會，包括 Backpack Card 及後續上線的平台功能。',
    fr: 'Accès anticipé ou exclusif aux nouveaux produits, dont Backpack Card et autres fonctions.',
    pt: 'Acesso antecipado ou exclusivo a novos produtos, incluindo Backpack Card e outros recursos.',
    it: 'Accesso anticipato o esclusivo a nuovi prodotti, inclusa Backpack Card e altre funzioni.',
    de: 'Früher oder exklusiver Zugang zu neuen Produkten, einschließlich Backpack Card und weiteren Funktionen.',
    ja: 'Backpack Cardを含む新製品や新機能への早期または限定アクセスが得られる場合があります。',
    ko: 'Backpack Card를 포함한 신규 제품과 플랫폼 기능에 대한 조기 또는 독점 접근이 제공될 수 있습니다.'
  },
  bpBenefit6: {
    en: 'Coming-soon perks include extra USD collateral yield, lower prediction-market fees, and enhanced wallet benefits.',
    'zh-cn': '未来权益包括额外 USD 抵押品收益提升、预测市场更低费用，以及增强版钱包权益。',
    'zh-tw': '未來權益包括額外 USD 抵押品收益提升、預測市場更低費用，以及增強版錢包權益。',
    fr: 'Avantages à venir : boost de rendement USD, frais réduits sur marchés de prédiction et bénéfices wallet.',
    pt: 'Benefícios futuros incluem boost de rendimento USD, taxas menores em prediction markets e vantagens de wallet.',
    it: 'Benefici futuri includono boost di rendimento USD, fee minori sui prediction market e vantaggi wallet.',
    de: 'Kommende Vorteile umfassen zusätzlichen USD-Collateral-Yield, niedrigere Prediction-Market-Gebühren und Wallet-Vorteile.',
    ja: '今後の特典には、USD担保利回りブースト、予測市場手数料の低下、ウォレット特典の強化が含まれます。',
    ko: '향후 혜택에는 추가 USD 담보 수익률, 낮은 예측시장 수수료, 강화된 지갑 혜택이 포함됩니다.'
  },
  bpProgramDisclaimer: {
    en: 'BP staking benefits, tiers, eligibility, equity access, and regional availability are governed by official Backpack terms and may change.',
    'zh-cn': 'BP 质押权益、等级、资格、股权兑换入口和地区可用性均以 Backpack 官方条款为准，并可能发生变化。',
    'zh-tw': 'BP 質押權益、等級、資格、股權兌換入口和地區可用性均以 Backpack 官方條款為準，並可能發生變化。',
    fr: 'Avantages BP, niveaux, éligibilité, equity access et disponibilité régionale dépendent des conditions officielles Backpack.',
    pt: 'Benefícios BP, níveis, elegibilidade, equity access e disponibilidade regional seguem os termos oficiais da Backpack.',
    it: 'Benefici BP, livelli, idoneità, equity access e disponibilità regionale seguono i termini ufficiali Backpack.',
    de: 'BP Vorteile, Tiers, Berechtigung, Equity Access und regionale Verfügbarkeit richten sich nach offiziellen Backpack-Bedingungen.',
    ja: 'BPステーキング特典、階層、資格、株式アクセス、地域別利用可否はBackpack公式条件に従い、変更される場合があります。',
    ko: 'BP 스테이킹 혜택, 등급, 자격, equity access, 지역별 이용 가능 여부는 Backpack 공식 약관에 따르며 변경될 수 있습니다.'
  },
  bpLearnMore: {
    en: 'Read Official BP Staking Guide →',
    'zh-cn': '查看官方 BP 质押指南 →',
    'zh-tw': '查看官方 BP 質押指南 →',
    fr: 'Lire le guide officiel BP →',
    pt: 'Ler guia oficial de staking BP →',
    it: 'Leggi la guida ufficiale BP →',
    de: 'Offiziellen BP Staking Guide lesen →',
    ja: '公式BPステーキングガイドを見る →',
    ko: '공식 BP 스테이킹 가이드 보기 →'
  },
  whyTitle: {
    en: 'Why Choose Backpack Exchange',
    'zh-cn': '为什么选择Backpack交易所',
    'zh-tw': '為什麼選擇Backpack交易所',
    fr: 'Pourquoi Choisir Backpack Exchange',
    pt: 'Por que Escolher a Backpack Exchange',
    it: 'Perché Scegliere Backpack Exchange',
    de: 'Warum Backpack Exchange Wählen',
    ja: 'なぜBackpack Exchangeを選ぶのか',
    ko: 'Backpack Exchange를 선택하는 이유'
  },
  why1Title: {
    en: 'Globally Regulated',
    'zh-cn': '全球合规监管',
    'zh-tw': '全球合規監管',
    fr: 'Réglementé Mondialement',
    pt: 'Regulamentado Globalmente',
    it: 'Regolamentato Globalmente',
    de: 'Global Reguliert',
    ja: 'グローバル規制準拠',
    ko: '글로벌 규제 준수'
  },
  why1Desc: {
    en: 'VARA licensed in Dubai, MiFID II regulated via FTX EU acquisition. One of the most compliant crypto exchanges worldwide.',
    'zh-cn': '持有迪拜VARA牌照，通过收购FTX EU获得MiFID II监管资质。全球最合规的加密交易所之一。',
    'zh-tw': '持有迪拜VARA牌照，通過收購FTX EU獲得MiFID II監管資質。全球最合規的加密交易所之一。',
    fr: 'Licence VARA à Dubaï, réglementé MiFID II via acquisition de FTX EU. Un des exchanges crypto les plus conformes.',
    pt: 'Licenciado VARA em Dubai, regulamentado MiFID II via aquisição da FTX EU. Um dos exchanges mais conformes.',
    it: 'Licenza VARA a Dubai, regolamentato MiFID II tramite acquisizione FTX EU. Uno degli exchange più conformi.',
    de: 'VARA-lizenziert in Dubai, MiFID II reguliert durch FTX EU Übernahme. Einer der konformsten Krypto-Exchanges.',
    ja: 'ドバイVARAライセンス、FTX EU買収によるMiFID II規制。世界で最もコンプライアンスの高い取引所の一つ。',
    ko: '두바이 VARA 라이선스, FTX EU 인수를 통한 MiFID II 규제. 세계에서 가장 규제를 준수하는 거래소 중 하나.'
  },
  why2Title: {
    en: 'Crypto and Securities Roadmap',
    'zh-cn': '加密与证券一体化路线',
    'zh-tw': '加密與證券一體化路線',
    fr: 'Feuille de route crypto et titres',
    pt: 'Roteiro de cripto e valores mobiliários',
    it: 'Roadmap crypto e titoli',
    de: 'Krypto- und Wertpapier-Roadmap',
    ja: '暗号資産と証券のロードマップ',
    ko: '크립토와 증권 로드맵'
  },
  why2Desc: {
    en: 'Backpack Securities is bringing stocks and ETFs into the Backpack ecosystem through regulated infrastructure. Early or beta access may require eligibility.',
    'zh-cn': 'Backpack Securities 正通过合规基础设施把股票和 ETF 带入 Backpack 生态。早期或内测访问可能需要满足资格要求。',
    'zh-tw': 'Backpack Securities 正透過合規基礎設施把股票和 ETF 帶入 Backpack 生態。早期或內測訪問可能需要滿足資格要求。',
    fr: 'Backpack Securities apporte actions et ETF dans l’écosystème Backpack via une infrastructure réglementée. L’accès bêta peut exiger une éligibilité.',
    pt: 'A Backpack Securities leva ações e ETFs ao ecossistema Backpack via infraestrutura regulada. Acesso beta pode exigir elegibilidade.',
    it: 'Backpack Securities porta azioni ed ETF nell’ecosistema Backpack tramite infrastruttura regolamentata. L’accesso beta può richiedere idoneità.',
    de: 'Backpack Securities bringt Aktien und ETFs über regulierte Infrastruktur ins Backpack Ökosystem. Früher oder Beta-Zugang kann Berechtigung erfordern.',
    ja: 'Backpack Securitiesは、規制対応インフラを通じて株式とETFをBackpackエコシステムへ取り込もうとしています。早期またはベータアクセスには資格要件があります。',
    ko: 'Backpack Securities는 규제 기반 인프라를 통해 주식과 ETF를 Backpack 생태계로 가져오고 있습니다. 초기 또는 베타 접근에는 자격 요건이 필요할 수 있습니다.'
  },
  why3Title: {
    en: 'Industry-Low Fees',
    'zh-cn': '业界最低费率',
    'zh-tw': '業界最低費率',
    fr: 'Frais les Plus Bas',
    pt: 'Taxas Mais Baixas',
    it: 'Commissioni Più Basse',
    de: 'Niedrigste Gebühren',
    ja: '業界最低手数料',
    ko: '업계 최저 수수료'
  },
  why3Desc: {
    en: '0.02% maker / 0.06% taker fees. Rated 8.75/10 for fees by independent reviewers. Keep more of your profits on every trade.',
    'zh-cn': '0.02%挂单/0.06%吃单费用。独立评测机构费用评分8.75/10。每笔交易保留更多利润。',
    'zh-tw': '0.02%掛單/0.06%吃單費用。獨立評測機構費用評分8.75/10。每筆交易保留更多利潤。',
    fr: '0.02% maker / 0.06% taker. Noté 8.75/10 pour les frais. Gardez plus de profits sur chaque trade.',
    pt: '0.02% maker / 0.06% taker. Avaliado 8.75/10 em taxas. Mantenha mais lucros em cada trade.',
    it: '0.02% maker / 0.06% taker. Valutato 8.75/10 per le commissioni. Mantieni più profitti su ogni trade.',
    de: '0.02% Maker / 0.06% Taker Gebühren. 8.75/10 Bewertung für Gebühren. Behalten Sie mehr Gewinn bei jedem Trade.',
    ja: '0.02%メイカー/0.06%テイカー手数料。独立レビュー8.75/10の評価。毎回の取引でより多くの利益を維持。',
    ko: '0.02% 메이커 / 0.06% 테이커 수수료. 독립 리뷰어로부터 수수료 8.75/10 평가. 매 거래에서 더 많은 수익 유지.'
  },
  why4Title: {
    en: 'BP Platform Token',
    'zh-cn': 'BP 平台币',
    'zh-tw': 'BP 平台幣',
    fr: 'Token plateforme BP',
    pt: 'Token de plataforma BP',
    it: 'Token piattaforma BP',
    de: 'BP Plattform-Token',
    ja: 'BPプラットフォームトークン',
    ko: 'BP 플랫폼 토큰'
  },
  why4Desc: {
    en: 'BP/USD spot trading is live, with official tokenomics describing 1B supply, no presale, and user-first distribution. Verify official token details before trading.',
    'zh-cn': 'BP/USD 现货交易已上线，官方代币经济说明总供应 10 亿、无预售、用户优先分配。交易前请核对官方代币信息。',
    'zh-tw': 'BP/USD 現貨交易已上線，官方代幣經濟說明總供應 10 億、無預售、用戶優先分配。交易前請核對官方代幣資訊。',
    fr: 'Le spot BP/USD est en ligne; la tokenomics officielle indique 1 Md de supply, aucune prévente et une distribution user-first. Vérifiez les détails officiels.',
    pt: 'O spot BP/USD está ativo; a tokenomics oficial descreve 1B de supply, sem pré-venda e distribuição user-first. Verifique os detalhes oficiais.',
    it: 'Il trading spot BP/USD è live; la tokenomics ufficiale indica 1B supply, nessuna prevendita e distribuzione user-first. Verifica i dettagli ufficiali.',
    de: 'BP/USD Spot-Trading ist live; offizielle Tokenomics nennen 1 Mrd Supply, keinen Presale und nutzerorientierte Verteilung. Prüfen Sie offizielle Details.',
    ja: 'BP/USDスポット取引が開始され、公式トークノミクスでは10億供給、プレセールなし、ユーザー優先配布が説明されています。取引前に公式情報を確認してください。',
    ko: 'BP/USD 현물 거래가 시작되었으며, 공식 토크노믹스는 10억 공급, 프리세일 없음, 사용자 우선 분배를 설명합니다. 거래 전 공식 정보를 확인하세요.'
  },
  why5Title: {
    en: 'Fort Knox Security',
    'zh-cn': '银行级安全',
    'zh-tw': '銀行級安全',
    fr: 'Sécurité Fort Knox',
    pt: 'Segurança Fort Knox',
    it: 'Sicurezza Fort Knox',
    de: 'Fort Knox Sicherheit',
    ja: '最高水準のセキュリティ',
    ko: 'Fort Knox 보안'
  },
  why5Desc: {
    en: 'Cold storage, 2FA, hardware wallet integration. Zero hacks since 2022 launch. Your assets are protected with institutional-grade security infrastructure.',
    'zh-cn': '冷存储、双重认证、硬件钱包集成。自2022年上线以来零黑客攻击。机构级安全基础设施保护您的资产。',
    'zh-tw': '冷儲存、雙重認證、硬體錢包整合。自2022年上線以來零駭客攻擊。機構級安全基礎設施保護您的資產。',
    fr: "Stockage à froid, 2FA, intégration wallet hardware. Zéro hack depuis 2022. Sécurité de niveau institutionnel.",
    pt: 'Armazenamento a frio, 2FA, integração com carteira hardware. Zero hacks desde 2022. Segurança institucional.',
    it: 'Cold storage, 2FA, integrazione hardware wallet. Zero hack dal 2022. Sicurezza di livello istituzionale.',
    de: 'Cold Storage, 2FA, Hardware-Wallet-Integration. Null Hacks seit 2022. Institutionelle Sicherheitsinfrastruktur.',
    ja: 'コールドストレージ、2FA、ハードウェアウォレット統合。2022年のローンチ以来ハッキングゼロ。機関投資家レベルのセキュリティ。',
    ko: '콜드 스토리지, 2FA, 하드웨어 지갑 통합. 2022년 출시 이후 해킹 제로. 기관급 보안 인프라로 자산 보호.'
  },
  why6Title: {
    en: 'Unified Trading Tools',
    'zh-cn': '统一交易工具',
    'zh-tw': '統一交易工具',
    fr: 'Outils de trading unifiés',
    pt: 'Ferramentas unificadas',
    it: 'Strumenti di trading unificati',
    de: 'Einheitliche Trading-Tools',
    ja: '統合取引ツール',
    ko: '통합 거래 도구'
  },
  why6Desc: {
    en: 'Use one ecosystem for spot, perps, lending, wallet swaps, bridges, automated strategies, and official campaigns as products become available in your region.',
    'zh-cn': '在同一生态中使用现货、合约、借贷、钱包兑换、跨链桥、自动化策略和官方活动；具体产品以所在地区可用性为准。',
    'zh-tw': '在同一生態中使用現貨、合約、借貸、錢包兌換、跨鏈橋、自動化策略和官方活動；具體產品以所在地區可用性為準。',
    fr: 'Utilisez un même écosystème pour spot, perps, lending, swaps, bridges, stratégies automatisées et campagnes officielles selon disponibilité locale.',
    pt: 'Use um ecossistema para spot, perps, lending, swaps, bridges, estratégias automatizadas e campanhas oficiais conforme disponibilidade local.',
    it: 'Usa un unico ecosistema per spot, perps, lending, swap, bridge, strategie automatizzate e campagne ufficiali secondo disponibilità locale.',
    de: 'Nutzen Sie ein Ökosystem für Spot, Perps, Lending, Swaps, Bridges, automatisierte Strategien und offizielle Kampagnen je nach regionaler Verfügbarkeit.',
    ja: '地域で利用可能な範囲で、スポット、先物、レンディング、ウォレットスワップ、ブリッジ、自動戦略、公式キャンペーンを一つのエコシステムで利用できます。',
    ko: '지역별 이용 가능 여부에 따라 현물, 무기한 선물, 대출, 지갑 스왑, 브리지, 자동화 전략, 공식 캠페인을 하나의 생태계에서 사용할 수 있습니다.'
  },
  pointsTitle: {
    en: 'BP Staking Benefits',
    'zh-cn': 'BP 质押权益',
    'zh-tw': 'BP 質押權益',
    fr: 'Avantages du staking BP',
    pt: 'Benefícios do staking BP',
    it: 'Vantaggi dello staking BP',
    de: 'BP Staking Vorteile',
    ja: 'BPステーキング特典',
    ko: 'BP 스테이킹 혜택'
  },
  pointsDetails: {
    en: 'Stake BP through the Backpack Participant Program to unlock trading fee tiers, wire perks, equity access, and product access subject to official terms.',
    'zh-cn': '通过 Backpack 参与者计划质押 BP，可按官方条款解锁交易费等级、wire 优惠、股权兑换入口和产品访问权益。',
    'zh-tw': '透過 Backpack 參與者計劃質押 BP，可按官方條款解鎖交易費等級、wire 優惠、股權兌換入口和產品訪問權益。',
    fr: 'Stakez BP via le programme Backpack pour débloquer frais, virements, equity access et accès produit selon les conditions.',
    pt: 'Faça stake de BP no programa Backpack para desbloquear taxas, wires, equity access e produtos conforme os termos.',
    it: 'Metti BP in stake nel programma Backpack per sbloccare fee, wire, equity access e prodotti secondo i termini.',
    de: 'Staken Sie BP im Backpack Programm, um Gebühren-Tiers, Wire-Vorteile, Equity Access und Produktzugang gemäß Bedingungen freizuschalten.',
    ja: 'Backpack Participant ProgramでBPをステーキングすると、公式条件に基づき手数料階層、wire特典、株式アクセス、製品アクセスを解放できます。',
    ko: 'Backpack Participant Program에서 BP를 스테이킹하면 공식 약관에 따라 수수료 등급, wire 혜택, equity access, 제품 접근을 잠금 해제할 수 있습니다.'
  },
  communityTitle: {
    en: 'Join Your Community',
    'zh-cn': '加入你的社区',
    'zh-tw': '加入你的社群',
    fr: 'Rejoignez Votre Communauté',
    pt: 'Junte-se à Sua Comunidade',
    it: 'Unisciti alla Tua Comunità',
    de: 'Tritt Deiner Community Bei',
    ja: 'あなたのコミュニティに参加',
    ko: '커뮤니티에 참여하세요'
  },
  memeTitle: {
    en: 'Meme Coin Masters',
    'zh-cn': 'Meme币大师',
    'zh-tw': 'Meme幣大師',
    fr: 'Maîtres des Meme Coins',
    pt: 'Mestres das Meme Coins',
    it: 'Maestri delle Meme Coin',
    de: 'Meme-Coin-Meister',
    ja: 'ミームコインマスター',
    ko: '밈 코인 마스터'
  },
  memeDescription: {
    en: 'Trade $PEPE, $DOGE, $SHIB and discover the next 100x gem. Lightning-fast execution and exclusive meme coin launches.',
    'zh-cn': '交易$PEPE、$DOGE、$SHIB，发现下一个100倍宝石。闪电般的执行和独家meme币发行。',
    'zh-tw': '交易$PEPE、$DOGE、$SHIB，發現下一個100倍寶石。閃電般的執行和獨家meme幣發行。',
    fr: 'Tradez $PEPE, $DOGE, $SHIB et découvrez le prochain joyau 100x.',
    pt: 'Negocie $PEPE, $DOGE, $SHIB e descubra a próxima joia 100x.',
    it: 'Fai trading di $PEPE, $DOGE, $SHIB e scopri la prossima gemma 100x.',
    de: 'Handle $PEPE, $DOGE, $SHIB und entdecke den nächsten 100x-Edelstein.',
    ja: '$PEPE、$DOGE、$SHIBを取引し、次の100倍の宝石を発見。',
    ko: '$PEPE, $DOGE, $SHIB을 거래하고 다음 100배 보석을 발견하세요.'
  },
  languageCommunityTitle: {
    en: 'English Community',
    'zh-cn': '中文社区',
    'zh-tw': '中文社群',
    fr: 'Communauté Française',
    pt: 'Comunidade Portuguesa',
    it: 'Comunità Italiana',
    de: 'Deutsche Gemeinschaft',
    ja: '日本コミュニティ',
    ko: '한국 커뮤니티'
  },
  languageCommunityDescription: {
    en: 'Full English support with USD deposits, intuitive interface, and 24/7 customer service.',
    'zh-cn': '中文客服、美元法币出入金、简体界面，合规安全，支持大陆KYC。',
    'zh-tw': '中文客服、美元法幣出入金、繁體介面，合規安全，支援台灣KYC。',
    fr: 'Support français complet, dépôts EUR, interface intuitive, service 24/7.',
    pt: 'Suporte completo em português, depósitos BRL, interface intuitiva, serviço 24/7.',
    it: 'Supporto italiano completo, depositi EUR, interfaccia intuitiva, servizio 24/7.',
    de: 'Voller deutscher Support, EUR-Einzahlungen, intuitive Oberfläche, 24/7 Service.',
    ja: '日本語フルサポート、JPY入金、直感的なインターフェース、24/7カスタマーサービス。',
    ko: '한국어 지원, KRW 입금, 직관적인 인터페이스, 24/7 고객 서비스.'
  },
  gamingTitle: {
    en: 'Gaming Community',
    'zh-cn': '游戏社区',
    'zh-tw': '遊戲社群',
    fr: 'Communauté Gaming',
    pt: 'Comunidade Gaming',
    it: 'Comunità Gaming',
    de: 'Gaming-Gemeinschaft',
    ja: 'ゲーミングコミュニティ',
    ko: '게이밍 커뮤니티'
  },
  gamingDescription: {
    en: 'Trade gaming tokens, NFTs, and metaverse assets. From $AXS to $SAND, all in one place with pro tools.',
    'zh-cn': '交易游戏代币、NFT和元宇宙资产。从$AXS到$SAND，专业工具一站式服务。',
    'zh-tw': '交易遊戲代幣、NFT和元宇宙資產。從$AXS到$SAND，專業工具一站式服務。',
    fr: 'Tradez des tokens gaming, NFTs et actifs métavers avec des outils professionnels.',
    pt: 'Negocie tokens de jogos, NFTs e ativos do metaverso com ferramentas profissionais.',
    it: 'Fai trading di token gaming, NFT e asset del metaverso con strumenti professionali.',
    de: 'Handle Gaming-Token, NFTs und Metaverse-Assets mit professionellen Tools.',
    ja: 'ゲーミングトークン、NFT、メタバースアセットをプロツールで取引。',
    ko: '게이밍 토큰, NFT, 메타버스 자산을 프로 도구로 거래하세요.'
  },
  readyTitle: {
    en: 'Start Trading on Backpack Today',
    'zh-cn': '立即开始在Backpack交易',
    'zh-tw': '立即開始在Backpack交易',
    fr: 'Commencez à Trader sur Backpack',
    pt: 'Comece a Negociar no Backpack Hoje',
    it: 'Inizia a Fare Trading su Backpack Oggi',
    de: 'Beginne Heute auf Backpack zu Handeln',
    ja: '今日からBackpackで取引を始めよう',
    ko: '오늘 Backpack에서 거래를 시작하세요'
  },
  readyDescription: {
    en: 'Register through the referral link to start with Backpack Exchange, explore BP, and follow Backpack Securities updates. Eligibility, rewards, and product access depend on official terms.',
    'zh-cn': '通过邀请链接注册 Backpack Exchange，开始体验交易、BP 与 Backpack Securities 最新动态。资格、奖励和产品访问均以官方条款为准。',
    'zh-tw': '透過邀請連結註冊 Backpack Exchange，開始體驗交易、BP 與 Backpack Securities 最新動態。資格、獎勵和產品訪問均以官方條款為準。',
    fr: 'Inscrivez-vous via le lien de parrainage pour découvrir Backpack Exchange, BP et Backpack Securities. Éligibilité et accès dépendent des conditions officielles.',
    pt: 'Registre-se pelo link para começar no Backpack Exchange, explorar BP e acompanhar Backpack Securities. Elegibilidade e acesso dependem dos termos oficiais.',
    it: 'Registrati con il link referral per iniziare su Backpack Exchange, esplorare BP e seguire Backpack Securities. Idoneità e accesso dipendono dai termini ufficiali.',
    de: 'Registrieren Sie sich per Empfehlungslink, um Backpack Exchange, BP und Backpack Securities Updates zu verfolgen. Berechtigung und Zugang hängen von offiziellen Bedingungen ab.',
    ja: '紹介リンクから登録して、Backpack Exchange、BP、Backpack Securitiesの最新情報を確認しましょう。資格、報酬、製品アクセスは公式条件に従います。',
    ko: '추천 링크로 가입하여 Backpack Exchange, BP, Backpack Securities 업데이트를 시작하세요. 자격, 보상, 제품 접근은 공식 약관에 따릅니다.'
  },
  inviteHint: {
    en: 'Need a stock beta invite code?',
    'zh-cn': '需要股票内测邀请码？',
    'zh-tw': '需要股票內測邀請碼？',
    fr: 'Besoin d’un code bêta actions ?',
    pt: 'Precisa de convite beta de ações?',
    it: 'Ti serve un invito beta azioni?',
    de: 'Brauchen Sie einen Aktien-Beta-Einladungscode?',
    ja: '株式ベータ招待コードが必要ですか？',
    ko: '주식 베타 초대 코드가 필요하신가요?'
  },
  footerContactTitle: {
    en: 'Stock Beta Invite',
    'zh-cn': '股票内测邀请',
    'zh-tw': '股票內測邀請',
    fr: 'Invitation bêta actions',
    pt: 'Convite beta de ações',
    it: 'Invito beta azioni',
    de: 'Aktien-Beta Einladung',
    ja: '株式ベータ招待',
    ko: '주식 베타 초대'
  },
  footerContactText: {
    en: 'Contact me on X for Backpack Securities beta invite information:',
    'zh-cn': '如需 Backpack Securities 股票内测邀请码信息，可在 X 联系我：',
    'zh-tw': '如需 Backpack Securities 股票內測邀請碼資訊，可在 X 聯繫我：',
    fr: 'Contactez-moi sur X pour les infos d’invitation bêta Backpack Securities :',
    pt: 'Fale comigo no X sobre convite beta da Backpack Securities:',
    it: 'Contattami su X per informazioni sull’invito beta Backpack Securities:',
    de: 'Kontaktieren Sie mich auf X für Backpack Securities Beta-Invite-Infos:',
    ja: 'Backpack Securitiesベータ招待についてはXでご連絡ください：',
    ko: 'Backpack Securities 베타 초대 정보는 X에서 문의하세요:'
  },
  footerXLinkText: {
    en: '@mikexuusa',
    'zh-cn': '@mikexuusa',
    'zh-tw': '@mikexuusa',
    fr: '@mikexuusa',
    pt: '@mikexuusa',
    it: '@mikexuusa',
    de: '@mikexuusa',
    ja: '@mikexuusa',
    ko: '@mikexuusa'
  },
  referralBenefitLabel: {
    en: 'Single official referral link',
    'zh-cn': '统一官方邀请链接',
    'zh-tw': '統一官方邀請連結',
    fr: 'Lien de parrainage unique',
    pt: 'Link de referência único',
    it: 'Link referral unico',
    de: 'Einheitlicher Empfehlungslink',
    ja: '統一紹介リンク',
    ko: '단일 공식 추천 링크'
  },
  alreadyAccount: {
    en: 'Already have an account?',
    'zh-cn': '已经有账户？',
    'zh-tw': '已經有帳戶？',
    fr: 'Vous avez déjà un compte ?',
    pt: 'Já tem uma conta?',
    it: 'Hai già un account?',
    de: 'Haben Sie bereits ein Konto?',
    ja: '既にアカウントをお持ちですか？',
    ko: '이미 계정이 있으신가요?'
  },
  signIn: {
    en: 'Sign in to Backpack',
    'zh-cn': '登录Backpack',
    'zh-tw': '登錄Backpack',
    fr: 'Se connecter à Backpack',
    pt: 'Entrar no Backpack',
    it: 'Accedi a Backpack',
    de: 'Bei Backpack anmelden',
    ja: 'Backpackにサインイン',
    ko: 'Backpack에 로그인'
  },
  disclaimer: {
    en: 'All website content is AI-generated. Backpack promotions mentioned are not guaranteed to be real or effective, and do not constitute investment advice. Virtual currency investment requires caution - please do your own research.',
    'zh-cn': '所有网站内容由AI生成，页面提及的Backpack优惠不保证真实有效，不构成投资建议，虚拟货币投资需谨慎，请自己做好研究。',
    'zh-tw': '所有網站內容由AI生成，頁面提及的Backpack優惠不保證真實有效，不構成投資建議，虛擬貨幣投資需謹慎，請自己做好研究。',
    fr: "Tout le contenu du site est généré par l'IA. Les promotions Backpack mentionnées ne sont pas garanties et ne constituent pas des conseils d'investissement.",
    pt: 'Todo o conteúdo do site é gerado por IA. As promoções Backpack mencionadas não são garantidas e não constituem conselho de investimento.',
    it: "Tutto il contenuto del sito è generato dall'IA. Le promozioni Backpack menzionate non sono garantite e non costituiscono consigli di investimento.",
    de: 'Alle Website-Inhalte sind KI-generiert. Die erwähnten Backpack-Promotionen sind nicht garantiert und stellen keine Anlageberatung dar.',
    ja: 'すべてのウェブサイトコンテンツはAI生成です。記載されているBackpackのプロモーションは保証されておらず、投資アドバイスを構成するものではありません。',
    ko: '모든 웹사이트 콘텐츠는 AI에 의해 생성되었습니다. 언급된 Backpack 프로모션은 보장되지 않으며 투자 조언을 구성하지 않습니다.'
  },

  // ─── Review page translations ───
  reviewTitle: {
    en: 'Backpack Exchange Review 2026',
    'zh-cn': 'Backpack交易所评测 2026',
    'zh-tw': 'Backpack交易所評測 2026',
    fr: 'Avis Backpack Exchange 2026',
    pt: 'Avaliação Backpack Exchange 2026',
    it: 'Recensione Backpack Exchange 2026',
    de: 'Backpack Exchange Bewertung 2026',
    ja: 'Backpack Exchange レビュー 2026',
    ko: 'Backpack Exchange 리뷰 2026'
  },
  reviewMetaDesc: {
    en: 'Backpack Exchange 2026 review: VARA licensing, MiFID II status, BP token staking benefits, Backpack Securities, low fees, and security record.',
    'zh-cn': 'Backpack交易所 2026 评测：VARA 牌照、MiFID II 资质、BP 质押权益、Backpack Securities、低费率与安全记录。',
    'zh-tw': 'Backpack交易所 2026 評測：VARA 牌照、MiFID II 資質、BP 質押權益、Backpack Securities、低費率與安全記錄。',
    fr: 'Avis Backpack Exchange 2026 : licence VARA, statut MiFID II, staking BP, Backpack Securities, frais bas et sécurité.',
    pt: 'Avaliação Backpack Exchange 2026: licença VARA, status MiFID II, staking BP, Backpack Securities, taxas baixas e segurança.',
    it: 'Recensione Backpack Exchange 2026: licenza VARA, status MiFID II, staking BP, Backpack Securities, fee basse e sicurezza.',
    de: 'Backpack Exchange Bewertung 2026: VARA Lizenz, MiFID II Status, BP Staking, Backpack Securities, niedrige Gebühren und Sicherheit.',
    ja: 'Backpack Exchange 2026レビュー：VARAライセンス、MiFID IIステータス、BPステーキング特典、Backpack Securities、低手数料、安全記録。',
    ko: 'Backpack Exchange 2026 리뷰: VARA 라이선스, MiFID II 지위, BP 스테이킹 혜택, Backpack Securities, 낮은 수수료와 보안 기록.'
  },
  reviewIntro: {
    en: 'Backpack Exchange launched in 2022 and now positions itself as regulated financial infrastructure spanning crypto trading, BP token utility, and Backpack Securities beta access for eligible users.',
    'zh-cn': 'Backpack Exchange 于 2022 年上线，如今定位为覆盖加密交易、BP 平台币权益，以及面向符合资格用户的 Backpack Securities 股票内测入口的合规金融基础设施。',
    'zh-tw': 'Backpack Exchange 於 2022 年上線，如今定位為覆蓋加密交易、BP 平台幣權益，以及面向符合資格用戶的 Backpack Securities 股票內測入口的合規金融基礎設施。',
    fr: 'Backpack Exchange, lancé en 2022, se positionne comme infrastructure financière réglementée entre trading crypto, utilité BP et Backpack Securities pour utilisateurs éligibles.',
    pt: 'Lançada em 2022, a Backpack Exchange se posiciona como infraestrutura financeira regulada entre trading cripto, utilidade BP e Backpack Securities para usuários elegíveis.',
    it: 'Lanciata nel 2022, Backpack Exchange si posiziona come infrastruttura finanziaria regolamentata tra trading crypto, utilità BP e Backpack Securities per utenti idonei.',
    de: 'Backpack Exchange startete 2022 und positioniert sich als regulierte Finanzinfrastruktur für Krypto-Trading, BP Nutzen und Backpack Securities für berechtigte Nutzer.',
    ja: 'Backpack Exchangeは2022年に開始され、暗号資産取引、BPトークンのユーティリティ、対象ユーザー向けBackpack Securitiesベータアクセスを含む規制対応金融インフラとして位置づけられています。',
    ko: 'Backpack Exchange는 2022년에 출시되어 크립토 거래, BP 토큰 유틸리티, 자격 요건이 있는 사용자를 위한 Backpack Securities 베타 접근을 아우르는 규제 금융 인프라로 자리 잡고 있습니다.'
  },
  reviewRegulation: {
    en: 'Regulation & Licensing',
    'zh-cn': '监管与牌照',
    'zh-tw': '監管與牌照',
    fr: 'Réglementation et Licences',
    pt: 'Regulamentação e Licenças',
    it: 'Regolamentazione e Licenze',
    de: 'Regulierung und Lizenzen',
    ja: '規制とライセンス',
    ko: '규제 및 라이선스'
  },
  reviewRegulationDesc: {
    en: 'Backpack holds a Dubai VARA license and acquired FTX EU to gain MiFID II regulatory status in Europe. Mark Wetjen, former CFTC Commissioner, serves as President of Backpack US, demonstrating a strong commitment to regulatory compliance.',
    'zh-cn': 'Backpack持有迪拜VARA牌照，并收购FTX EU获得欧洲MiFID II监管资质。前CFTC委员Mark Wetjen担任Backpack US总裁，展示了对合规的强烈承诺。',
    'zh-tw': 'Backpack持有迪拜VARA牌照，並收購FTX EU獲得歐洲MiFID II監管資質。前CFTC委員Mark Wetjen擔任Backpack US總裁，展示了對合規的強烈承諾。',
    fr: 'Backpack détient une licence Dubai VARA et a acquis FTX EU pour obtenir le statut MiFID II en Europe. Mark Wetjen, ancien commissaire CFTC, est président de Backpack US.',
    pt: 'A Backpack possui licença Dubai VARA e adquiriu a FTX EU para obter status regulatório MiFID II na Europa. Mark Wetjen, ex-comissário da CFTC, é presidente da Backpack US.',
    it: 'Backpack possiede una licenza Dubai VARA e ha acquisito FTX EU per ottenere lo status MiFID II in Europa. Mark Wetjen, ex commissario CFTC, è presidente di Backpack US.',
    de: 'Backpack besitzt eine Dubai VARA Lizenz und hat FTX EU übernommen, um den MiFID II Status in Europa zu erlangen. Mark Wetjen, ehemaliger CFTC-Kommissar, ist Präsident von Backpack US.',
    ja: 'BackpackはドバイVARAライセンスを保有し、FTX EUを買収してヨーロッパでMiFID II規制ステータスを取得しました。元CFTC委員のMark WetjenがBackpack US社長を務めています。',
    ko: 'Backpack은 두바이 VARA 라이선스를 보유하고 FTX EU를 인수하여 유럽에서 MiFID II 규제 자격을 획득했습니다. 전 CFTC 위원 Mark Wetjen이 Backpack US 사장을 맡고 있습니다.'
  },
  reviewFeatures: {
    en: 'Key Features',
    'zh-cn': '核心功能',
    'zh-tw': '核心功能',
    fr: 'Fonctionnalités Clés',
    pt: 'Recursos Principais',
    it: 'Funzionalità Principali',
    de: 'Hauptfunktionen',
    ja: '主な機能',
    ko: '주요 기능'
  },
  reviewFeaturesDesc: {
    en: 'Backpack offers spot, perpetual futures, lending, BP/USD trading, BP staking benefits, wallet swaps and bridges, automated grid tools, and a regulated securities roadmap.',
    'zh-cn': 'Backpack 提供现货、永续合约、借贷、BP/USD 交易、BP 质押权益、钱包兑换与跨链桥、自动化网格工具，以及合规证券产品路线。',
    'zh-tw': 'Backpack 提供現貨、永續合約、借貸、BP/USD 交易、BP 質押權益、錢包兌換與跨鏈橋、自動化網格工具，以及合規證券產品路線。',
    fr: 'Backpack propose spot, futures perpétuels, lending, BP/USD, staking BP, swaps wallet, bridges, grid tools et une roadmap titres réglementée.',
    pt: 'A Backpack oferece spot, futuros perpétuos, lending, BP/USD, staking BP, swaps, bridges, grid tools e roadmap regulada de valores mobiliários.',
    it: 'Backpack offre spot, futures perpetui, lending, BP/USD, staking BP, swap wallet, bridge, grid tools e roadmap titoli regolamentata.',
    de: 'Backpack bietet Spot, Perpetual Futures, Lending, BP/USD, BP Staking, Wallet Swaps, Bridges, Grid Tools und eine regulierte Securities-Roadmap.',
    ja: 'Backpackはスポット、永続先物、レンディング、BP/USD取引、BPステーキング特典、ウォレットスワップ、ブリッジ、自動グリッドツール、規制対応証券ロードマップを提供します。',
    ko: 'Backpack은 현물, 무기한 선물, 대출, BP/USD 거래, BP 스테이킹 혜택, 지갑 스왑과 브리지, 자동 그리드 도구, 규제 증권 로드맵을 제공합니다.'
  },
  reviewPros: {
    en: 'Pros',
    'zh-cn': '优点',
    'zh-tw': '優點',
    fr: 'Avantages',
    pt: 'Vantagens',
    it: 'Vantaggi',
    de: 'Vorteile',
    ja: 'メリット',
    ko: '장점'
  },
  reviewCons: {
    en: 'Cons',
    'zh-cn': '缺点',
    'zh-tw': '缺點',
    fr: 'Inconvénients',
    pt: 'Desvantagens',
    it: 'Svantaggi',
    de: 'Nachteile',
    ja: 'デメリット',
    ko: '단점'
  },
  reviewVerdict: {
    en: 'Verdict',
    'zh-cn': '总结',
    'zh-tw': '總結',
    fr: 'Verdict',
    pt: 'Veredicto',
    it: 'Verdetto',
    de: 'Fazit',
    ja: '総評',
    ko: '결론'
  },
  reviewVerdictDesc: {
    en: 'Backpack Exchange is an excellent choice for traders who prioritize regulation, low fees, and innovative features. With VARA and MiFID II licenses, zero security breaches, and a growing ecosystem, it is well-positioned as a top-tier exchange.',
    'zh-cn': 'Backpack交易所是重视监管合规、低费用和创新功能的交易者的绝佳选择。凭借VARA和MiFID II牌照、零安全事故和不断壮大的生态系统，它已成为顶级交易所。',
    'zh-tw': 'Backpack交易所是重視監管合規、低費用和創新功能的交易者的絕佳選擇。憑藉VARA和MiFID II牌照、零安全事故和不斷壯大的生態系統，它已成為頂級交易所。',
    fr: 'Backpack Exchange est un excellent choix pour les traders qui privilégient la réglementation, les frais bas et les fonctionnalités innovantes.',
    pt: 'A Backpack Exchange é uma excelente escolha para traders que priorizam regulamentação, taxas baixas e recursos inovadores.',
    it: 'Backpack Exchange è un\'eccellente scelta per i trader che danno priorità alla regolamentazione, alle commissioni basse e alle funzionalità innovative.',
    de: 'Backpack Exchange ist eine ausgezeichnete Wahl für Trader, die Regulierung, niedrige Gebühren und innovative Funktionen priorisieren.',
    ja: 'Backpack Exchangeは、規制、低手数料、革新的な機能を重視するトレーダーにとって優れた選択肢です。',
    ko: 'Backpack Exchange는 규제, 낮은 수수료, 혁신적인 기능을 우선시하는 트레이더에게 훌륭한 선택입니다.'
  },

  // ─── Fees page translations ───
  feesTitle: {
    en: 'Backpack Exchange Fees Guide',
    'zh-cn': 'Backpack交易所费用指南',
    'zh-tw': 'Backpack交易所費用指南',
    fr: 'Guide des Frais Backpack Exchange',
    pt: 'Guia de Taxas Backpack Exchange',
    it: 'Guida Commissioni Backpack Exchange',
    de: 'Backpack Exchange Gebührenführer',
    ja: 'Backpack Exchange 手数料ガイド',
    ko: 'Backpack Exchange 수수료 가이드'
  },
  feesMetaDesc: {
    en: 'Complete Backpack Exchange fee breakdown: 0.02% maker, 0.06% taker, zero deposit fees, competitive withdrawal rates. Compare with industry average.',
    'zh-cn': 'Backpack交易所完整费用明细：0.02%挂单，0.06%吃单，零充值费用，有竞争力的提现费率。与行业平均水平对比。',
    'zh-tw': 'Backpack交易所完整費用明細：0.02%掛單，0.06%吃單，零充值費用，有競爭力的提現費率。與行業平均水平對比。',
    fr: 'Détail complet des frais Backpack Exchange : 0.02% maker, 0.06% taker, zéro frais de dépôt, taux de retrait compétitifs.',
    pt: 'Detalhamento completo de taxas Backpack Exchange: 0.02% maker, 0.06% taker, zero taxas de depósito, taxas de saque competitivas.',
    it: 'Dettaglio completo commissioni Backpack Exchange: 0.02% maker, 0.06% taker, zero commissioni deposito, tassi prelievo competitivi.',
    de: 'Vollständige Backpack Exchange Gebührenübersicht: 0.02% Maker, 0.06% Taker, keine Einzahlungsgebühren, wettbewerbsfähige Auszahlungsraten.',
    ja: 'Backpack Exchange 手数料の完全ガイド：0.02%メイカー、0.06%テイカー、入金手数料ゼロ、競争力のある出金手数料。',
    ko: 'Backpack Exchange 수수료 완전 가이드: 0.02% 메이커, 0.06% 테이커, 입금 수수료 제로, 경쟁력 있는 출금 수수료.'
  },
  feesSpotTitle: {
    en: 'Spot Trading Fees',
    'zh-cn': '现货交易费用',
    'zh-tw': '現貨交易費用',
    fr: 'Frais de Trading Spot',
    pt: 'Taxas de Trading Spot',
    it: 'Commissioni Trading Spot',
    de: 'Spot-Trading-Gebühren',
    ja: 'スポット取引手数料',
    ko: '현물 거래 수수료'
  },
  feesFuturesTitle: {
    en: 'Futures Trading Fees',
    'zh-cn': '合约交易费用',
    'zh-tw': '合約交易費用',
    fr: 'Frais de Trading Futures',
    pt: 'Taxas de Trading Futuros',
    it: 'Commissioni Trading Futures',
    de: 'Futures-Trading-Gebühren',
    ja: '先物取引手数料',
    ko: '선물 거래 수수료'
  },
  feesDepositTitle: {
    en: 'Deposit & Withdrawal Fees',
    'zh-cn': '充值与提现费用',
    'zh-tw': '充值與提現費用',
    fr: 'Frais de Dépôt et Retrait',
    pt: 'Taxas de Depósito e Saque',
    it: 'Commissioni Deposito e Prelievo',
    de: 'Einzahlungs- und Auszahlungsgebühren',
    ja: '入出金手数料',
    ko: '입출금 수수료'
  },
  feesComparison: {
    en: 'How Backpack Compares',
    'zh-cn': 'Backpack费用对比',
    'zh-tw': 'Backpack費用對比',
    fr: 'Comparaison de Backpack',
    pt: 'Como a Backpack se Compara',
    it: 'Confronto di Backpack',
    de: 'Backpack im Vergleich',
    ja: 'Backpackの比較',
    ko: 'Backpack 비교'
  },
  maker: {
    en: 'Maker',
    'zh-cn': '挂单',
    'zh-tw': '掛單',
    fr: 'Maker',
    pt: 'Maker',
    it: 'Maker',
    de: 'Maker',
    ja: 'メイカー',
    ko: '메이커'
  },
  taker: {
    en: 'Taker',
    'zh-cn': '吃单',
    'zh-tw': '吃單',
    fr: 'Taker',
    pt: 'Taker',
    it: 'Taker',
    de: 'Taker',
    ja: 'テイカー',
    ko: '테이커'
  },

  // ─── Tutorial page translations ───
  tutorialTitle: {
    en: 'How to Register on Backpack Exchange',
    'zh-cn': '如何注册Backpack交易所',
    'zh-tw': '如何註冊Backpack交易所',
    fr: 'Comment s\'inscrire sur Backpack Exchange',
    pt: 'Como se Registrar na Backpack Exchange',
    it: 'Come Registrarsi su Backpack Exchange',
    de: 'So registrieren Sie sich bei Backpack Exchange',
    ja: 'Backpack Exchangeの登録方法',
    ko: 'Backpack Exchange 가입 방법'
  },
  tutorialMetaDesc: {
    en: 'Step-by-step guide to register on Backpack Exchange with our referral link. Get 20% trading fee bonus. Complete KYC and start trading in minutes.',
    'zh-cn': '使用我们的邀请链接注册Backpack交易所的详细教程。获得20%交易手续费奖励。完成KYC验证，几分钟内开始交易。',
    'zh-tw': '使用我們的邀請連結註冊Backpack交易所的詳細教程。獲得20%交易手續費獎勵。完成KYC驗證，幾分鐘內開始交易。',
    fr: 'Guide étape par étape pour s\'inscrire sur Backpack Exchange avec notre lien de parrainage. Obtenez 20% de bonus.',
    pt: 'Guia passo a passo para se registrar na Backpack Exchange com nosso link de referência. Ganhe 20% de bônus.',
    it: 'Guida passo passo per registrarsi su Backpack Exchange con il nostro link referral. Ottieni il 20% di bonus.',
    de: 'Schritt-für-Schritt-Anleitung zur Registrierung bei Backpack Exchange mit unserem Empfehlungslink. 20% Bonus erhalten.',
    ja: '紹介リンクを使ったBackpack Exchange登録のステップバイステップガイド。20%取引手数料ボーナスを獲得。',
    ko: '추천 링크로 Backpack Exchange 가입하는 단계별 가이드. 20% 거래 수수료 보너스를 받으세요.'
  },
  tutorialStep1: {
    en: 'Click the Referral Link',
    'zh-cn': '点击邀请链接',
    'zh-tw': '點擊邀請連結',
    fr: 'Cliquez sur le Lien de Parrainage',
    pt: 'Clique no Link de Referência',
    it: 'Clicca sul Link Referral',
    de: 'Klicken Sie auf den Empfehlungslink',
    ja: '紹介リンクをクリック',
    ko: '추천 링크 클릭'
  },
  tutorialStep2: {
    en: 'Enter Your Email or Phone Number',
    'zh-cn': '输入您的邮箱或手机号',
    'zh-tw': '輸入您的電子郵件或手機號碼',
    fr: 'Entrez Votre Email ou Téléphone',
    pt: 'Digite Seu Email ou Telefone',
    it: 'Inserisci Email o Telefono',
    de: 'Geben Sie Ihre E-Mail oder Telefonnummer ein',
    ja: 'メールアドレスまたは電話番号を入力',
    ko: '이메일 또는 전화번호 입력'
  },
  tutorialStep3: {
    en: 'Set a Secure Password',
    'zh-cn': '设置安全密码',
    'zh-tw': '設置安全密碼',
    fr: 'Définissez un Mot de Passe Sécurisé',
    pt: 'Defina uma Senha Segura',
    it: 'Imposta una Password Sicura',
    de: 'Legen Sie ein sicheres Passwort fest',
    ja: '安全なパスワードを設定',
    ko: '보안 비밀번호 설정'
  },
  tutorialStep4: {
    en: 'Complete KYC Verification',
    'zh-cn': '完成KYC身份验证',
    'zh-tw': '完成KYC身份驗證',
    fr: 'Complétez la Vérification KYC',
    pt: 'Complete a Verificação KYC',
    it: 'Completa la Verifica KYC',
    de: 'Schließen Sie die KYC-Verifizierung ab',
    ja: 'KYC認証を完了',
    ko: 'KYC 인증 완료'
  },
  tutorialStep5: {
    en: 'Make Your First Deposit',
    'zh-cn': '进行首次充值',
    'zh-tw': '進行首次充值',
    fr: 'Effectuez Votre Premier Dépôt',
    pt: 'Faça Seu Primeiro Depósito',
    it: 'Effettua il Tuo Primo Deposito',
    de: 'Tätigen Sie Ihre erste Einzahlung',
    ja: '初回入金',
    ko: '첫 입금하기'
  },
  tutorialStep6: {
    en: 'Start Trading',
    'zh-cn': '开始交易',
    'zh-tw': '開始交易',
    fr: 'Commencez à Trader',
    pt: 'Comece a Negociar',
    it: 'Inizia a Fare Trading',
    de: 'Beginnen Sie mit dem Handel',
    ja: '取引開始',
    ko: '거래 시작'
  },

  // ─── Referral page translations ───
  referralTitle: {
    en: 'Backpack Referral Link, BP Benefits & Stock Beta',
    'zh-cn': 'Backpack 邀请链接、BP 权益与股票内测',
    'zh-tw': 'Backpack 邀請連結、BP 權益與股票內測',
    fr: 'Lien Backpack, avantages BP et bêta actions',
    pt: 'Link Backpack, benefícios BP e beta ações',
    it: 'Link Backpack, benefici BP e beta azioni',
    de: 'Backpack Link, BP Vorteile und Aktien-Beta',
    ja: 'Backpack紹介リンク、BP特典、株式ベータ',
    ko: 'Backpack 추천 링크, BP 혜택 및 주식 베타'
  },
  referralMetaDesc: {
    en: 'Use the Backpack referral link to register, review BP staking benefits, and contact @mikexuusa on X for Backpack Securities beta invite information.',
    'zh-cn': '使用 Backpack 邀请链接注册，了解 BP 质押权益，并可在 X 联系 @mikexuusa 获取 Backpack Securities 股票内测邀请码信息。',
    'zh-tw': '使用 Backpack 邀請連結註冊，了解 BP 質押權益，並可在 X 聯繫 @mikexuusa 獲取 Backpack Securities 股票內測邀請碼資訊。',
    fr: 'Utilisez le lien Backpack, consultez les avantages du staking BP et contactez @mikexuusa sur X pour la bêta Backpack Securities.',
    pt: 'Use o link Backpack, revise benefícios de staking BP e fale com @mikexuusa no X sobre beta Backpack Securities.',
    it: 'Usa il link Backpack, consulta i benefici staking BP e contatta @mikexuusa su X per la beta Backpack Securities.',
    de: 'Nutzen Sie den Backpack Link, prüfen Sie BP Staking Vorteile und kontaktieren Sie @mikexuusa auf X zur Backpack Securities Beta.',
    ja: 'Backpack紹介リンクで登録し、BPステーキング特典を確認し、Backpack Securitiesベータ招待はXで@mikexuusaへ。',
    ko: 'Backpack 추천 링크로 가입하고 BP 스테이킹 혜택을 확인하며 Backpack Securities 베타 초대 정보는 X에서 @mikexuusa에게 문의하세요.'
  },
  referralHowItWorks: {
    en: 'How It Works',
    'zh-cn': '如何运作',
    'zh-tw': '如何運作',
    fr: 'Comment Ça Marche',
    pt: 'Como Funciona',
    it: 'Come Funziona',
    de: 'So Funktioniert Es',
    ja: '仕組み',
    ko: '작동 방식'
  },
  referralEarn: {
    en: 'Referral Benefits',
    'zh-cn': '邀请权益',
    'zh-tw': '邀請權益',
    fr: 'Avantages referral',
    pt: 'Benefícios de indicação',
    it: 'Benefici referral',
    de: 'Referral Vorteile',
    ja: '紹介特典',
    ko: '추천 혜택'
  },

  // ─── FAQ page translations ───
  faqTitle: {
    en: 'Backpack Exchange FAQ',
    'zh-cn': 'Backpack交易所常见问题',
    'zh-tw': 'Backpack交易所常見問題',
    fr: 'FAQ Backpack Exchange',
    pt: 'FAQ Backpack Exchange',
    it: 'FAQ Backpack Exchange',
    de: 'Backpack Exchange FAQ',
    ja: 'Backpack Exchange よくある質問',
    ko: 'Backpack Exchange 자주 묻는 질문'
  },
  faqMetaDesc: {
    en: 'Frequently asked questions about Backpack Exchange: safety, fees, supported countries, KYC, deposit methods, referral program, and more.',
    'zh-cn': 'Backpack交易所常见问题：安全性、费用、支持国家、KYC验证、充值方式、推荐计划等。',
    'zh-tw': 'Backpack交易所常見問題：安全性、費用、支援國家、KYC驗證、充值方式、推薦計劃等。',
    fr: 'Questions fréquemment posées sur Backpack Exchange : sécurité, frais, pays supportés, KYC, méthodes de dépôt, programme de parrainage.',
    pt: 'Perguntas frequentes sobre Backpack Exchange: segurança, taxas, países suportados, KYC, métodos de depósito, programa de referência.',
    it: 'Domande frequenti su Backpack Exchange: sicurezza, commissioni, paesi supportati, KYC, metodi di deposito, programma referral.',
    de: 'Häufig gestellte Fragen zu Backpack Exchange: Sicherheit, Gebühren, unterstützte Länder, KYC, Einzahlungsmethoden, Empfehlungsprogramm.',
    ja: 'Backpack Exchangeよくある質問：安全性、手数料、対応国、KYC、入金方法、紹介プログラムなど。',
    ko: 'Backpack Exchange 자주 묻는 질문: 안전성, 수수료, 지원 국가, KYC, 입금 방법, 추천 프로그램 등.'
  },

  // ─── VS Binance page translations ───
  vsBinanceTitle: {
    en: 'Backpack vs Binance: Complete Comparison',
    'zh-cn': 'Backpack对比币安：全面比较',
    'zh-tw': 'Backpack對比幣安：全面比較',
    fr: 'Backpack vs Binance : Comparaison Complète',
    pt: 'Backpack vs Binance: Comparação Completa',
    it: 'Backpack vs Binance: Confronto Completo',
    de: 'Backpack vs Binance: Vollständiger Vergleich',
    ja: 'Backpack vs Binance：完全比較',
    ko: 'Backpack vs Binance: 완전 비교'
  },
  vsBinanceMetaDesc: {
    en: 'Compare Backpack Exchange vs Binance: fees, regulation, features, security. See why traders are switching to Backpack for lower fees and better compliance.',
    'zh-cn': 'Backpack交易所 vs 币安对比：费用、监管、功能、安全性。了解交易者为何转向费用更低、合规更好的Backpack。',
    'zh-tw': 'Backpack交易所 vs 幣安對比：費用、監管、功能、安全性。了解交易者為何轉向費用更低、合規更好的Backpack。',
    fr: 'Comparez Backpack Exchange vs Binance : frais, réglementation, fonctionnalités, sécurité.',
    pt: 'Compare Backpack Exchange vs Binance: taxas, regulamentação, recursos, segurança.',
    it: 'Confronto Backpack Exchange vs Binance: commissioni, regolamentazione, funzionalità, sicurezza.',
    de: 'Vergleich Backpack Exchange vs Binance: Gebühren, Regulierung, Funktionen, Sicherheit.',
    ja: 'Backpack Exchange vs Binance比較：手数料、規制、機能、セキュリティ。',
    ko: 'Backpack Exchange vs Binance 비교: 수수료, 규제, 기능, 보안.'
  },

  // ─── Safety page translations ───
  safetyTitle: {
    en: 'Is Backpack Exchange Safe?',
    'zh-cn': 'Backpack交易所安全吗？',
    'zh-tw': 'Backpack交易所安全嗎？',
    fr: 'Backpack Exchange Est-il Sûr ?',
    pt: 'A Backpack Exchange é Segura?',
    it: 'Backpack Exchange è Sicuro?',
    de: 'Ist Backpack Exchange Sicher?',
    ja: 'Backpack Exchangeは安全ですか？',
    ko: 'Backpack Exchange는 안전한가요?'
  },
  safetyMetaDesc: {
    en: 'Is Backpack Exchange safe? VARA licensed, MiFID II regulated, zero security breaches since 2022, cold storage, 2FA, Mark Wetjen (ex-CFTC) as US president.',
    'zh-cn': 'Backpack交易所安全吗？VARA持牌，MiFID II监管，自2022年起零安全事故，冷存储，双重认证，前CFTC委员担任美国总裁。',
    'zh-tw': 'Backpack交易所安全嗎？VARA持牌，MiFID II監管，自2022年起零安全事故，冷儲存，雙重認證，前CFTC委員擔任美國總裁。',
    fr: 'Backpack Exchange est-il sûr ? Licence VARA, réglementé MiFID II, zéro faille depuis 2022, stockage à froid, 2FA.',
    pt: 'A Backpack Exchange é segura? Licença VARA, regulamentada MiFID II, zero violações desde 2022, armazenamento a frio, 2FA.',
    it: 'Backpack Exchange è sicuro? Licenza VARA, regolamentato MiFID II, zero violazioni dal 2022, cold storage, 2FA.',
    de: 'Ist Backpack Exchange sicher? VARA-Lizenz, MiFID II reguliert, null Sicherheitsverletzungen seit 2022, Cold Storage, 2FA.',
    ja: 'Backpack Exchangeは安全ですか？VARAライセンス、MiFID II規制、2022年以降セキュリティ侵害ゼロ、コールドストレージ、2FA。',
    ko: 'Backpack Exchange는 안전한가요? VARA 라이선스, MiFID II 규제, 2022년 이후 보안 침해 제로, 콜드 스토리지, 2FA.'
  },
  safetyRegulation: {
    en: 'Regulatory Compliance',
    'zh-cn': '合规监管',
    'zh-tw': '合規監管',
    fr: 'Conformité Réglementaire',
    pt: 'Conformidade Regulatória',
    it: 'Conformità Normativa',
    de: 'Regulatorische Compliance',
    ja: '規制コンプライアンス',
    ko: '규제 준수'
  },
  safetySecurity: {
    en: 'Security Measures',
    'zh-cn': '安全措施',
    'zh-tw': '安全措施',
    fr: 'Mesures de Sécurité',
    pt: 'Medidas de Segurança',
    it: 'Misure di Sicurezza',
    de: 'Sicherheitsmaßnahmen',
    ja: 'セキュリティ対策',
    ko: '보안 조치'
  },
  safetyLeadership: {
    en: 'Leadership',
    'zh-cn': '领导团队',
    'zh-tw': '領導團隊',
    fr: 'Direction',
    pt: 'Liderança',
    it: 'Leadership',
    de: 'Führung',
    ja: 'リーダーシップ',
    ko: '리더십'
  },
  safetyFTX: {
    en: 'FTX EU Acquisition',
    'zh-cn': 'FTX EU收购',
    'zh-tw': 'FTX EU收購',
    fr: 'Acquisition de FTX EU',
    pt: 'Aquisição da FTX EU',
    it: 'Acquisizione di FTX EU',
    de: 'FTX EU Übernahme',
    ja: 'FTX EU買収',
    ko: 'FTX EU 인수'
  },

  // ─── Shared navigation / layout translations ───
  navHome: {
    en: 'Home',
    'zh-cn': '首页',
    'zh-tw': '首頁',
    fr: 'Accueil',
    pt: 'Início',
    it: 'Home',
    de: 'Startseite',
    ja: 'ホーム',
    ko: '홈'
  },
  navReview: {
    en: 'Review',
    'zh-cn': '评测',
    'zh-tw': '評測',
    fr: 'Avis',
    pt: 'Avaliação',
    it: 'Recensione',
    de: 'Bewertung',
    ja: 'レビュー',
    ko: '리뷰'
  },
  navFees: {
    en: 'Fees',
    'zh-cn': '费用',
    'zh-tw': '費用',
    fr: 'Frais',
    pt: 'Taxas',
    it: 'Commissioni',
    de: 'Gebühren',
    ja: '手数料',
    ko: '수수료'
  },
  navTutorial: {
    en: 'Tutorial',
    'zh-cn': '教程',
    'zh-tw': '教程',
    fr: 'Tutoriel',
    pt: 'Tutorial',
    it: 'Tutorial',
    de: 'Anleitung',
    ja: 'チュートリアル',
    ko: '튜토리얼'
  },
  navReferral: {
    en: 'Referral',
    'zh-cn': '推荐',
    'zh-tw': '推薦',
    fr: 'Parrainage',
    pt: 'Referência',
    it: 'Referral',
    de: 'Empfehlung',
    ja: '紹介',
    ko: '추천'
  },
  navFAQ: {
    en: 'FAQ',
    'zh-cn': '常见问题',
    'zh-tw': '常見問題',
    fr: 'FAQ',
    pt: 'FAQ',
    it: 'FAQ',
    de: 'FAQ',
    ja: 'FAQ',
    ko: 'FAQ'
  },
  navSafety: {
    en: 'Safety',
    'zh-cn': '安全',
    'zh-tw': '安全',
    fr: 'Sécurité',
    pt: 'Segurança',
    it: 'Sicurezza',
    de: 'Sicherheit',
    ja: '安全性',
    ko: '안전'
  },
  navVsBinance: {
    en: 'vs Binance',
    'zh-cn': '对比币安',
    'zh-tw': '對比幣安',
    fr: 'vs Binance',
    pt: 'vs Binance',
    it: 'vs Binance',
    de: 'vs Binance',
    ja: 'vs Binance',
    ko: 'vs Binance'
  },
};
