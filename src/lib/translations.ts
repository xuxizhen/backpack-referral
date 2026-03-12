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
    en: 'The Regulated Crypto Exchange Built for the Future',
    'zh-cn': '面向未来的合规加密货币交易所',
    'zh-tw': '面向未來的合規加密貨幣交易所',
    fr: "L'exchange crypto réglementé conçu pour l'avenir",
    pt: 'A exchange de criptomoedas regulamentada construída para o futuro',
    it: "L'exchange crypto regolamentato costruito per il futuro",
    de: 'Die regulierte Krypto-Börse für die Zukunft',
    ja: '未来のために構築された規制準拠の暗号通貨取引所',
    ko: '미래를 위해 구축된 규제 준수 암호화폐 거래소'
  },
  heroDescription: {
    en: 'Licensed by Dubai VARA, acquired FTX EU (MiFID II), zero security breaches. Trade spot, futures, lending, and prediction markets — all with unified cross-margin.',
    'zh-cn': '持有迪拜VARA牌照，收购FTX EU（MiFID II合规），零安全事故。现货、合约、借贷、预测市场一站式交易，统一跨保证金账户。',
    'zh-tw': '持有迪拜VARA牌照，收購FTX EU（MiFID II合規），零安全事故。現貨、合約、借貸、預測市場一站式交易，統一跨保證金帳戶。',
    fr: 'Licencié par Dubai VARA, acquisition de FTX EU (MiFID II), zéro faille de sécurité. Trading spot, futures, prêt et marchés de prédiction — le tout avec marge croisée unifiée.',
    pt: 'Licenciado pela VARA de Dubai, adquiriu FTX EU (MiFID II), zero violações de segurança. Negocie spot, futuros, empréstimos e mercados de previsão — tudo com margem cruzada unificada.',
    it: 'Licenziato da Dubai VARA, acquisita FTX EU (MiFID II), zero violazioni di sicurezza. Trading spot, futures, prestiti e mercati predittivi — tutto con margine incrociato unificato.',
    de: 'Von Dubai VARA lizenziert, FTX EU übernommen (MiFID II), keine Sicherheitsverstöße. Handel mit Spot, Futures, Lending und Prognosemärkten — alles mit einheitlicher Cross-Margin.',
    ja: 'ドバイVARAライセンス取得、FTX EU買収（MiFID II）、セキュリティ侵害ゼロ。スポット、先物、レンディング、予測市場を統合クロスマージンで取引。',
    ko: '두바이 VARA 라이선스, FTX EU 인수(MiFID II), 보안 침해 제로. 현물, 선물, 대출, 예측 시장을 통합 교차 마진으로 거래.'
  },
  registerButton: {
    en: 'Register & Get 20% Bonus →',
    'zh-cn': '立即注册 享20%返佣 →',
    'zh-tw': '立即註冊 享20%返佣 →',
    fr: "S'inscrire & Obtenir 20% de Bonus →",
    pt: 'Registrar & Ganhar 20% de Bônus →',
    it: 'Registrati & Ottieni il 20% di Bonus →',
    de: 'Registrieren & 20% Bonus erhalten →',
    ja: '今すぐ登録して20%ボーナス →',
    ko: '가입하고 20% 보너스 받기 →'
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
    en: 'Latest Activities & Campaigns',
    'zh-cn': '最新活动与动态',
    'zh-tw': '最新活動與動態',
    fr: 'Dernières Activités et Campagnes',
    pt: 'Últimas Atividades e Campanhas',
    it: 'Ultime Attività e Campagne',
    de: 'Neueste Aktivitäten und Kampagnen',
    ja: '最新のアクティビティとキャンペーン',
    ko: '최신 활동 및 캠페인'
  },
  activity1: {
    en: 'Backpack Wallet now offers zero fees on all swaps and bridges across every supported network. Trade freely without hidden costs.',
    'zh-cn': 'Backpack钱包现已支持所有网络的零手续费兑换和跨链桥接。自由交易，无隐藏费用。',
    'zh-tw': 'Backpack錢包現已支持所有網路的零手續費兌換和跨鏈橋接。自由交易，無隱藏費用。',
    fr: 'Le portefeuille Backpack offre désormais zéro frais sur tous les échanges et ponts sur chaque réseau supporté.',
    pt: 'A carteira Backpack agora oferece zero taxas em todas as trocas e pontes em todas as redes suportadas.',
    it: 'Il wallet Backpack ora offre zero commissioni su tutti gli swap e bridge su ogni rete supportata.',
    de: 'Die Backpack Wallet bietet jetzt keine Gebühren für alle Swaps und Bridges über alle unterstützten Netzwerke.',
    ja: 'Backpackウォレットは全サポートネットワークでスワップとブリッジの手数料がゼロになりました。',
    ko: 'Backpack 지갑은 이제 모든 지원 네트워크에서 스왑 및 브리지 수수료가 무료입니다.'
  },
  activity2: {
    en: 'Backpack IPO: Token holders get early access before shares hit the public market. A groundbreaking opportunity for the community.',
    'zh-cn': 'Backpack IPO：代币持有者可在股票公开上市前优先认购。社区的突破性机遇。',
    'zh-tw': 'Backpack IPO：代幣持有者可在股票公開上市前優先認購。社群的突破性機遇。',
    fr: "IPO Backpack : Les détenteurs de tokens obtiennent un accès anticipé avant la mise sur le marché public.",
    pt: 'IPO Backpack: Detentores de tokens têm acesso antecipado antes das ações chegarem ao mercado público.',
    it: 'IPO Backpack: I possessori di token ottengono accesso anticipato prima che le azioni entrino nel mercato pubblico.',
    de: 'Backpack IPO: Token-Inhaber erhalten Frühzugang bevor Aktien den öffentlichen Markt erreichen.',
    ja: 'Backpack IPO：トークン保有者は株式が公開市場に出る前に早期アクセスが可能。',
    ko: 'Backpack IPO: 토큰 보유자는 주식이 공개 시장에 출시되기 전에 우선 접근할 수 있습니다.'
  },
  activity3: {
    en: 'Backpack welcomes Mark Wetjen, former CFTC Commissioner, as President of Backpack US, strengthening regulatory leadership.',
    'zh-cn': 'Backpack任命前CFTC委员Mark Wetjen为Backpack US总裁，加强合规领导力。',
    'zh-tw': 'Backpack任命前CFTC委員Mark Wetjen為Backpack US總裁，加強合規領導力。',
    fr: 'Backpack accueille Mark Wetjen, ancien commissaire CFTC, comme président de Backpack US.',
    pt: 'Backpack dá as boas-vindas a Mark Wetjen, ex-comissário da CFTC, como Presidente da Backpack US.',
    it: 'Backpack dà il benvenuto a Mark Wetjen, ex commissario CFTC, come Presidente di Backpack US.',
    de: 'Backpack begrüßt Mark Wetjen, ehemaliger CFTC-Kommissar, als Präsident von Backpack US.',
    ja: 'Backpackは元CFTC委員のMark WetjenをBackpack US社長に迎え、規制リーダーシップを強化。',
    ko: 'Backpack은 전 CFTC 위원 Mark Wetjen을 Backpack US 사장으로 영입하여 규제 리더십을 강화합니다.'
  },
  activity4: {
    en: 'IPOs Onchain waitlist is now open. Be among the first to access tokenized IPO opportunities directly on the blockchain.',
    'zh-cn': '链上IPO等候名单已开放。成为首批直接在区块链上参与代币化IPO机会的用户。',
    'zh-tw': '鏈上IPO等候名單已開放。成為首批直接在區塊鏈上參與代幣化IPO機會的用戶。',
    fr: "La liste d'attente IPO Onchain est ouverte. Soyez parmi les premiers à accéder aux IPO tokenisées sur la blockchain.",
    pt: 'A lista de espera de IPOs Onchain está aberta. Seja um dos primeiros a acessar oportunidades de IPO tokenizadas na blockchain.',
    it: "La lista d'attesa IPO Onchain è aperta. Sii tra i primi ad accedere alle IPO tokenizzate direttamente sulla blockchain.",
    de: 'Die Warteliste für IPOs Onchain ist jetzt geöffnet. Seien Sie unter den Ersten, die tokenisierte IPO-Möglichkeiten auf der Blockchain nutzen.',
    ja: 'IPOs Onchainウェイトリストが開始。ブロックチェーン上のトークン化IPO機会にいち早くアクセス。',
    ko: 'IPO Onchain 대기자 명단이 열렸습니다. 블록체인에서 토큰화된 IPO 기회에 가장 먼저 접근하세요.'
  },
  activity5: {
    en: 'The new Lend page is live! Enhanced DeFi lending interface with better rates, easier management, and more supported assets.',
    'zh-cn': '全新借贷页面已上线！升级版DeFi借贷界面，更优利率、更便捷管理、更多支持资产。',
    'zh-tw': '全新借貸頁面已上線！升級版DeFi借貸介面，更優利率、更便捷管理、更多支援資產。',
    fr: 'La nouvelle page Lend est en ligne ! Interface DeFi améliorée avec de meilleurs taux et plus de actifs supportés.',
    pt: 'A nova página Lend está no ar! Interface DeFi aprimorada com melhores taxas e mais ativos suportados.',
    it: 'La nuova pagina Lend è live! Interfaccia DeFi migliorata con tassi migliori e più asset supportati.',
    de: 'Die neue Lend-Seite ist live! Verbesserte DeFi-Lending-Oberfläche mit besseren Raten und mehr unterstützten Assets.',
    ja: '新しいLendページが公開！改良されたDeFiレンディングインターフェース、より良いレート、より簡単な管理。',
    ko: '새로운 Lend 페이지가 오픈했습니다! 더 나은 이율, 쉬운 관리, 더 많은 지원 자산을 갖춘 DeFi 대출 인터페이스.'
  },
  activity6: {
    en: 'Backpack Tokenomics explained: Deep dive into token distribution, utility, staking rewards, and the economic model driving the ecosystem.',
    'zh-cn': 'Backpack代币经济学详解：深入了解代币分配、实用性、质押奖励及驱动生态系统的经济模型。',
    'zh-tw': 'Backpack代幣經濟學詳解：深入了解代幣分配、實用性、質押獎勵及驅動生態系統的經濟模型。',
    fr: 'Tokenomics Backpack expliquée : Distribution de tokens, utilité, récompenses de staking et modèle économique.',
    pt: 'Tokenomics da Backpack explicada: Distribuição de tokens, utilidade, recompensas de staking e modelo econômico.',
    it: 'Tokenomics di Backpack spiegata: Distribuzione token, utilità, ricompense staking e modello economico.',
    de: 'Backpack Tokenomics erklärt: Token-Verteilung, Nutzen, Staking-Belohnungen und das Wirtschaftsmodell.',
    ja: 'Backpackトケノミクス解説：トークン配布、ユーティリティ、ステーキング報酬、エコシステムの経済モデル。',
    ko: 'Backpack 토크노믹스 설명: 토큰 분배, 유틸리티, 스테이킹 보상 및 생태계를 이끄는 경제 모델.'
  },
  activity7: {
    en: 'New perpetual futures listed: XMR-PERP, CC-PERP, and STRK-PERP. Expand your trading strategies with more derivatives options.',
    'zh-cn': '新永续合约上线：XMR-PERP、CC-PERP和STRK-PERP。更多衍生品选择，扩展你的交易策略。',
    'zh-tw': '新永續合約上線：XMR-PERP、CC-PERP和STRK-PERP。更多衍生品選擇，擴展你的交易策略。',
    fr: 'Nouveaux contrats perpétuels : XMR-PERP, CC-PERP et STRK-PERP. Élargissez vos stratégies de trading.',
    pt: 'Novos futuros perpétuos listados: XMR-PERP, CC-PERP e STRK-PERP. Expanda suas estratégias de negociação.',
    it: 'Nuovi futures perpetui: XMR-PERP, CC-PERP e STRK-PERP. Espandi le tue strategie di trading con più derivati.',
    de: 'Neue Perpetual Futures gelistet: XMR-PERP, CC-PERP und STRK-PERP. Erweitern Sie Ihre Trading-Strategien.',
    ja: '新しい永続先物上場：XMR-PERP、CC-PERP、STRK-PERP。より多くのデリバティブでトレーディング戦略を拡大。',
    ko: '새로운 무기한 선물 상장: XMR-PERP, CC-PERP, STRK-PERP. 더 많은 파생상품 옵션으로 거래 전략을 확장하세요.'
  },
  activity8: {
    en: 'PAXG Spot trading is live! Trade tokenized gold on Backpack Exchange — a regulated digital gold exposure with instant settlement.',
    'zh-cn': 'PAXG现货交易已开放！在Backpack交易所交易代币化黄金——合规的数字黄金敞口，即时结算。',
    'zh-tw': 'PAXG現貨交易已開放！在Backpack交易所交易代幣化黃金——合規的數字黃金敞口，即時結算。',
    fr: 'PAXG Spot est en direct ! Tradez de l\'or tokenisé sur Backpack Exchange avec règlement instantané.',
    pt: 'PAXG Spot está ao vivo! Negocie ouro tokenizado na Backpack Exchange com liquidação instantânea.',
    it: 'PAXG Spot è live! Fai trading di oro tokenizzato su Backpack Exchange con regolamento istantaneo.',
    de: 'PAXG Spot-Trading ist live! Handeln Sie tokenisiertes Gold auf Backpack Exchange mit sofortiger Abwicklung.',
    ja: 'PAXGスポット取引開始！Backpack Exchangeでトークン化ゴールドを即時決済で取引。',
    ko: 'PAXG 현물 거래가 시작되었습니다! Backpack Exchange에서 토큰화된 금을 즉시 결제로 거래하세요.'
  },
  activity9: {
    en: 'ZAMA-PERP is now listed on Backpack Exchange. Trade the latest perpetual futures contract with competitive fees and deep liquidity.',
    'zh-cn': 'ZAMA-PERP已在Backpack交易所上线。以有竞争力的费率和深度流动性交易最新永续合约。',
    'zh-tw': 'ZAMA-PERP已在Backpack交易所上線。以有競爭力的費率和深度流動性交易最新永續合約。',
    fr: 'ZAMA-PERP est maintenant listé sur Backpack Exchange. Tradez avec des frais compétitifs et une liquidité profonde.',
    pt: 'ZAMA-PERP agora está listado na Backpack Exchange. Negocie com taxas competitivas e liquidez profunda.',
    it: 'ZAMA-PERP è ora listato su Backpack Exchange. Fai trading con commissioni competitive e liquidità profonda.',
    de: 'ZAMA-PERP ist jetzt auf Backpack Exchange gelistet. Handeln Sie mit wettbewerbsfähigen Gebühren und tiefer Liquidität.',
    ja: 'ZAMA-PERPがBackpack Exchangeに上場。競争力のある手数料と深い流動性で最新の永続先物を取引。',
    ko: 'ZAMA-PERP가 Backpack Exchange에 상장되었습니다. 경쟁력 있는 수수료와 깊은 유동성으로 거래하세요.'
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
    en: 'Unified Cross-Margin',
    'zh-cn': '统一跨保证金',
    'zh-tw': '統一跨保證金',
    fr: 'Marge Croisée Unifiée',
    pt: 'Margem Cruzada Unificada',
    it: 'Margine Incrociato Unificato',
    de: 'Einheitliche Cross-Margin',
    ja: '統合クロスマージン',
    ko: '통합 교차 마진'
  },
  why2Desc: {
    en: 'One account for spot, futures, lending, borrowing, and prediction markets. No need to transfer funds between wallets — maximize capital efficiency.',
    'zh-cn': '一个账户即可交易现货、合约、借贷和预测市场。无需在钱包间转移资金，最大化资金效率。',
    'zh-tw': '一個帳戶即可交易現貨、合約、借貸和預測市場。無需在錢包間轉移資金，最大化資金效率。',
    fr: "Un seul compte pour spot, futures, prêt, emprunt et marchés de prédiction. Maximisez l'efficacité du capital.",
    pt: 'Uma conta para spot, futuros, empréstimos e mercados de previsão. Maximize a eficiência do capital.',
    it: 'Un account per spot, futures, prestiti e mercati predittivi. Massimizza l\'efficienza del capitale.',
    de: 'Ein Konto für Spot, Futures, Lending, Borrowing und Prognosemärkte. Maximale Kapitaleffizienz.',
    ja: 'スポット、先物、レンディング、予測市場を一つのアカウントで。資金移動不要、資本効率を最大化。',
    ko: '현물, 선물, 대출, 예측 시장을 하나의 계정으로. 지갑 간 자금 이동 없이 자본 효율성 극대화.'
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
    en: 'Prediction Markets',
    'zh-cn': '预测市场',
    'zh-tw': '預測市場',
    fr: 'Marchés de Prédiction',
    pt: 'Mercados de Previsão',
    it: 'Mercati Predittivi',
    de: 'Prognosemärkte',
    ja: '予測市場',
    ko: '예측 시장'
  },
  why4Desc: {
    en: 'First exchange to offer cross-margined prediction markets. Bet on crypto & financial outcomes while hedging with futures — all in one portfolio.',
    'zh-cn': '首家提供跨保证金预测市场的交易所。在一个投资组合中对加密和金融结果下注，同时用合约对冲。',
    'zh-tw': '首家提供跨保證金預測市場的交易所。在一個投資組合中對加密和金融結果下注，同時用合約對沖。',
    fr: "Premier exchange à offrir des marchés de prédiction en marge croisée. Pariez et couvrez-vous dans un même portefeuille.",
    pt: 'Primeira exchange a oferecer mercados de previsão com margem cruzada. Aposte e proteja-se em um só portfólio.',
    it: 'Primo exchange a offrire mercati predittivi con margine incrociato. Scommetti e copri il rischio in un unico portafoglio.',
    de: 'Erster Exchange mit Cross-Margin-Prognosemärkten. Wetten und Hedging in einem Portfolio.',
    ja: '初のクロスマージン予測市場を提供する取引所。先物でヘッジしながら暗号・金融の結果に賭ける。',
    ko: '최초로 교차 마진 예측 시장을 제공하는 거래소. 하나의 포트폴리오에서 암호화폐 및 금융 결과에 베팅하고 선물로 헤지.'
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
    en: 'IPOs Onchain',
    'zh-cn': '链上IPO',
    'zh-tw': '鏈上IPO',
    fr: 'IPO Onchain',
    pt: 'IPOs Onchain',
    it: 'IPO Onchain',
    de: 'IPOs Onchain',
    ja: 'IPOs Onchain',
    ko: 'IPOs Onchain'
  },
  why6Desc: {
    en: 'Access tokenized IPO opportunities directly on the blockchain. A world-first innovation bringing traditional finance milestones to crypto-native users.',
    'zh-cn': '直接在区块链上参与代币化IPO机会。将传统金融里程碑带给加密原生用户的全球首创。',
    'zh-tw': '直接在區塊鏈上參與代幣化IPO機會。將傳統金融里程碑帶給加密原生用戶的全球首創。',
    fr: "Accédez aux IPO tokenisées directement sur la blockchain. Une innovation mondiale reliant finance traditionnelle et crypto.",
    pt: 'Acesse IPOs tokenizadas diretamente na blockchain. Uma inovação mundial trazendo marcos financeiros tradicionais para usuários crypto.',
    it: "Accedi alle IPO tokenizzate direttamente sulla blockchain. Un'innovazione mondiale che porta la finanza tradizionale agli utenti crypto.",
    de: 'Zugang zu tokenisierten IPOs direkt auf der Blockchain. Eine weltweite Innovation für Krypto-Native.',
    ja: 'ブロックチェーン上で直接トークン化IPO機会にアクセス。伝統的金融をクリプトネイティブユーザーに届ける世界初のイノベーション。',
    ko: '블록체인에서 직접 토큰화된 IPO 기회에 접근. 전통 금융의 마일스톤을 크립토 네이티브 사용자에게 제공하는 세계 최초 혁신.'
  },
  pointsTitle: {
    en: 'Backpack Points Program',
    'zh-cn': 'Backpack积分计划',
    'zh-tw': 'Backpack積分計劃',
    fr: 'Programme de Points Backpack',
    pt: 'Programa de Pontos Backpack',
    it: 'Programma Punti Backpack',
    de: 'Backpack Punkteprogramm',
    ja: 'Backpackポイントプログラム',
    ko: 'Backpack 포인트 프로그램'
  },
  pointsDetails: {
    en: 'Earn points weekly every Friday at 02:00 UTC based on trading activity. Progress through Bronze, Silver, Gold, Platinum, Diamond, and Challenger ranks. Register now to start earning from Season 3!',
    'zh-cn': '根据交易活动每周五02:00 UTC获得积分。从青铜、白银、黄金、铂金、钻石到挑战者逐级晋升。立即注册，开始第三季积分之旅！',
    'zh-tw': '根據交易活動每週五02:00 UTC獲得積分。從青銅、白銀、黃金、鉑金、鑽石到挑戰者逐級晉升。立即註冊，開始第三季積分之旅！',
    fr: 'Gagnez des points chaque vendredi à 02:00 UTC. Progressez de Bronze à Challenger. Inscrivez-vous pour la Saison 3 !',
    pt: 'Ganhe pontos toda sexta às 02:00 UTC. Progrida de Bronze a Challenger. Registre-se para a Temporada 3!',
    it: 'Guadagna punti ogni venerdì alle 02:00 UTC. Progredisci da Bronzo a Challenger. Registrati per la Stagione 3!',
    de: 'Verdiene Punkte jeden Freitag um 02:00 UTC. Steige von Bronze bis Challenger auf. Registriere dich für Season 3!',
    ja: '毎週金曜02:00 UTCにポイント獲得。ブロンズからチャレンジャーまで昇格。シーズン3に今すぐ登録！',
    ko: '매주 금요일 02:00 UTC에 포인트 획득. 브론즈에서 챌린저까지 승급. 시즌 3에 지금 등록하세요!'
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
    en: 'Register through our referral link to receive an exclusive 20% trading fee commission. Join 5M+ traders on one of the most regulated crypto exchanges in the world.',
    'zh-cn': '通过我们的邀请链接注册，享受独家20%交易手续费返佣。加入500万+交易者，体验全球最合规的加密交易所之一。',
    'zh-tw': '透過我們的邀請連結註冊，享受獨家20%交易手續費返佣。加入500萬+交易者，體驗全球最合規的加密交易所之一。',
    fr: "Inscrivez-vous via notre lien de parrainage pour recevoir 20% de commission exclusive. Rejoignez 5M+ traders.",
    pt: 'Registre-se pelo nosso link de referência para receber 20% de comissão exclusiva. Junte-se a 5M+ traders.',
    it: 'Registrati tramite il nostro link referral per ricevere il 20% di commissione esclusiva. Unisciti a 5M+ trader.',
    de: 'Registriere dich über unseren Empfehlungslink für exklusive 20% Provision. Schließe dich 5M+ Tradern an.',
    ja: '紹介リンクから登録して20%の独占取引手数料コミッションを受け取ろう。500万+トレーダーと共に取引。',
    ko: '추천 링크로 가입하여 독점 20% 거래 수수료 커미션을 받으세요. 500만+ 트레이더와 함께하세요.'
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
    en: 'Honest Backpack Exchange review: Dubai VARA licensed, 0.02% maker fees, unified margin, prediction markets, zero hacks. Is it right for you?',
    'zh-cn': 'Backpack交易所诚实评测：迪拜VARA持牌，0.02%挂单费，统一保证金，预测市场，零安全事故。适合你吗？',
    'zh-tw': 'Backpack交易所誠實評測：迪拜VARA持牌，0.02%掛單費，統一保證金，預測市場，零安全事故。適合你嗎？',
    fr: 'Avis honnête Backpack Exchange : licence Dubai VARA, frais maker 0.02%, marge unifiée, marchés de prédiction, zéro hack.',
    pt: 'Avaliação honesta Backpack Exchange: licença Dubai VARA, taxa maker 0.02%, margem unificada, mercados de previsão, zero hacks.',
    it: 'Recensione onesta Backpack Exchange: licenza Dubai VARA, commissioni maker 0.02%, margine unificato, mercati predittivi, zero hack.',
    de: 'Ehrliche Backpack Exchange Bewertung: Dubai VARA Lizenz, 0.02% Maker-Gebühren, einheitliche Margin, Prognosemärkte, null Hacks.',
    ja: 'Backpack Exchange 正直レビュー：ドバイVARAライセンス、0.02%メイカー手数料、統合マージン、予測市場、ハッキングゼロ。',
    ko: 'Backpack Exchange 솔직 리뷰: 두바이 VARA 라이선스, 0.02% 메이커 수수료, 통합 마진, 예측 시장, 해킹 제로.'
  },
  reviewIntro: {
    en: 'Backpack Exchange launched in 2022 and has quickly grown to over 5 million users. It stands out for its strong regulatory compliance, low trading fees, and innovative features like unified cross-margin and prediction markets.',
    'zh-cn': 'Backpack交易所于2022年上线，迅速发展至500万+用户。凭借强大的合规监管、低交易费用以及统一跨保证金和预测市场等创新功能脱颖而出。',
    'zh-tw': 'Backpack交易所於2022年上線，迅速發展至500萬+用戶。憑藉強大的合規監管、低交易費用以及統一跨保證金和預測市場等創新功能脫穎而出。',
    fr: 'Backpack Exchange a été lancé en 2022 et compte désormais plus de 5 millions d\'utilisateurs. Il se distingue par sa conformité réglementaire, ses frais bas et ses fonctionnalités innovantes.',
    pt: 'A Backpack Exchange foi lançada em 2022 e cresceu rapidamente para mais de 5 milhões de usuários. Destaca-se pela conformidade regulatória, taxas baixas e recursos inovadores.',
    it: 'Backpack Exchange è stato lanciato nel 2022 e ha rapidamente raggiunto oltre 5 milioni di utenti. Si distingue per la conformità normativa, le commissioni basse e le funzionalità innovative.',
    de: 'Backpack Exchange wurde 2022 gestartet und hat schnell über 5 Millionen Nutzer gewonnen. Es zeichnet sich durch starke regulatorische Compliance, niedrige Gebühren und innovative Funktionen aus.',
    ja: 'Backpack Exchangeは2022年にローンチし、500万人以上のユーザーに急成長しました。強力な規制コンプライアンス、低い取引手数料、統合クロスマージンや予測市場などの革新的な機能が特徴です。',
    ko: 'Backpack Exchange는 2022년에 출시되어 빠르게 500만 명 이상의 사용자로 성장했습니다. 강력한 규제 준수, 낮은 거래 수수료, 통합 교차 마진 및 예측 시장과 같은 혁신적인 기능으로 돋보입니다.'
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
    en: 'Backpack offers spot trading, perpetual futures, DeFi lending, and prediction markets — all under one unified cross-margin account. The Backpack Wallet provides zero-fee swaps and bridges across all supported networks.',
    'zh-cn': 'Backpack提供现货交易、永续合约、DeFi借贷和预测市场——全部在一个统一的跨保证金账户下。Backpack钱包在所有支持的网络上提供零手续费兑换和跨链桥接。',
    'zh-tw': 'Backpack提供現貨交易、永續合約、DeFi借貸和預測市場——全部在一個統一的跨保證金帳戶下。Backpack錢包在所有支援的網路上提供零手續費兌換和跨鏈橋接。',
    fr: 'Backpack offre le trading spot, les futures perpétuels, le prêt DeFi et les marchés de prédiction — le tout sous un compte unifié à marge croisée.',
    pt: 'A Backpack oferece trading spot, futuros perpétuos, empréstimos DeFi e mercados de previsão — tudo em uma conta unificada de margem cruzada.',
    it: 'Backpack offre trading spot, futures perpetui, prestiti DeFi e mercati predittivi — tutto in un unico account a margine incrociato unificato.',
    de: 'Backpack bietet Spot-Trading, Perpetual Futures, DeFi-Lending und Prognosemärkte — alles unter einem einheitlichen Cross-Margin-Konto.',
    ja: 'Backpackはスポット取引、永続先物、DeFiレンディング、予測市場を提供しており、すべて統合クロスマージンアカウントで利用できます。',
    ko: 'Backpack은 현물 거래, 무기한 선물, DeFi 대출, 예측 시장을 제공하며, 모두 하나의 통합 교차 마진 계정으로 이용할 수 있습니다.'
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
    en: 'Backpack Exchange Referral Program',
    'zh-cn': 'Backpack交易所推荐计划',
    'zh-tw': 'Backpack交易所推薦計劃',
    fr: 'Programme de Parrainage Backpack Exchange',
    pt: 'Programa de Referência Backpack Exchange',
    it: 'Programma Referral Backpack Exchange',
    de: 'Backpack Exchange Empfehlungsprogramm',
    ja: 'Backpack Exchange 紹介プログラム',
    ko: 'Backpack Exchange 추천 프로그램'
  },
  referralMetaDesc: {
    en: 'Earn 20% commission on trading fees with Backpack Exchange referral program. Share your referral code and earn passive income from every trade your friends make.',
    'zh-cn': '通过Backpack交易所推荐计划赚取20%交易手续费佣金。分享您的邀请码，从朋友的每笔交易中获得被动收入。',
    'zh-tw': '透過Backpack交易所推薦計劃賺取20%交易手續費佣金。分享您的邀請碼，從朋友的每筆交易中獲得被動收入。',
    fr: 'Gagnez 20% de commission sur les frais de trading avec le programme de parrainage Backpack Exchange.',
    pt: 'Ganhe 20% de comissão em taxas de trading com o programa de referência Backpack Exchange.',
    it: 'Guadagna il 20% di commissione sulle commissioni di trading con il programma referral Backpack Exchange.',
    de: 'Verdienen Sie 20% Provision auf Handelsgebühren mit dem Backpack Exchange Empfehlungsprogramm.',
    ja: 'Backpack Exchange紹介プログラムで取引手数料の20%コミッションを獲得。',
    ko: 'Backpack Exchange 추천 프로그램으로 거래 수수료 20% 커미션을 획득하세요.'
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
    en: 'Earn 20% Commission',
    'zh-cn': '赚取20%佣金',
    'zh-tw': '賺取20%佣金',
    fr: 'Gagnez 20% de Commission',
    pt: 'Ganhe 20% de Comissão',
    it: 'Guadagna il 20% di Commissione',
    de: '20% Provision Verdienen',
    ja: '20%コミッションを獲得',
    ko: '20% 커미션 획득'
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
