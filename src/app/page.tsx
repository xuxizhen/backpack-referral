"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

type Language = 'en' | 'zh-cn' | 'zh-tw' | 'fr' | 'pt' | 'it' | 'de' | 'ja' | 'ko';

// Google Analytics type definition
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

interface Translations {
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

const translations: Translations = {
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
  }
};

// Function to detect user's preferred language
const detectUserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  const userLanguage = navigator.language || navigator.languages?.[0] || 'en';
  const langCode = userLanguage.toLowerCase();

  if (langCode.includes('zh-cn') || langCode.includes('zh-hans') || langCode === 'zh') return 'zh-cn';
  if (langCode.includes('zh-tw') || langCode.includes('zh-hant') || langCode.includes('zh-hk') || langCode.includes('zh-mo')) return 'zh-tw';
  if (langCode.includes('fr')) return 'fr';
  if (langCode.includes('pt')) return 'pt';
  if (langCode.includes('it')) return 'it';
  if (langCode.includes('de')) return 'de';
  if (langCode.includes('ja')) return 'ja';
  if (langCode.includes('ko')) return 'ko';
  if (langCode.includes('en')) return 'en';

  return 'en';
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [isLanguageDetected, setIsLanguageDetected] = useState(false);

  const t = useCallback((key: string) => {
    return translations[key]?.[language] || translations[key]?.en || key;
  }, [language]);

  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    trackEvent('language_change', { language: newLanguage, event_category: 'user_interaction' });
  };

  const handleButtonClick = (community: string, url: string) => {
    trackEvent('register_button_click', { community, url, language, event_category: 'conversion' });
  };

  useEffect(() => {
    if (!isLanguageDetected) {
      const detectedLanguage = detectUserLanguage();
      setLanguage(detectedLanguage);
      setIsLanguageDetected(true);
    }
  }, [isLanguageDetected]);

  useEffect(() => {
    document.title = `Backpack Exchange - ${t('subtitle')}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('subtitle'));
    }
    document.documentElement.setAttribute('lang', language);
  }, [language, t]);

  const activities = [
    {
      title: "Wallet: Zero-Fee Swaps & Bridges",
      content: t('activity1'),
      icon: "💸",
      gradient: "from-green-500 to-emerald-500",
      date: "Mar 10, 2026",
      url: "https://learn.backpack.exchange/blog/backpack-wallet-zero-fees-swaps-bridges"
    },
    {
      title: "IPO: Token Holders Early Access",
      content: t('activity2'),
      icon: "🏦",
      gradient: "from-blue-600 to-indigo-600",
      date: "Mar 9, 2026",
      url: "https://learn.backpack.exchange/blog/backpack-ipo-token-holders-get-early-access-before-shares-hit-the-market"
    },
    {
      title: "Mark Wetjen Joins as US President",
      content: t('activity3'),
      icon: "👔",
      gradient: "from-gray-700 to-gray-500",
      date: "Mar 5, 2026",
      url: "https://learn.backpack.exchange/blog/mark-wetjen-president-backpack-us"
    },
    {
      title: "IPOs Onchain Waitlist Open",
      content: t('activity4'),
      icon: "🚀",
      gradient: "from-purple-600 to-pink-500",
      date: "Mar 4, 2026",
      url: "https://learn.backpack.exchange/blog/ipos-onchain-waitlist"
    },
    {
      title: "New Lend Page Live",
      content: t('activity5'),
      icon: "💰",
      gradient: "from-yellow-500 to-orange-500",
      date: "Feb 18, 2026",
      url: "https://learn.backpack.exchange/blog/new-lend-page-live-defi-backpak-exchange"
    },
    {
      title: "Backpack Tokenomics Explained",
      content: t('activity6'),
      icon: "📊",
      gradient: "from-indigo-500 to-purple-500",
      date: "Feb 9, 2026",
      url: "https://learn.backpack.exchange/blog/backpack-tokenomics"
    },
    {
      title: "XMR, CC & STRK Perps Listed",
      content: t('activity7'),
      icon: "📈",
      gradient: "from-cyan-500 to-blue-500",
      date: "Feb 5, 2026",
      url: "https://learn.backpack.exchange/blog/xmr-cc-strk-perp-listing"
    },
    {
      title: "PAXG Spot Trading Live",
      content: t('activity8'),
      icon: "🥇",
      gradient: "from-yellow-600 to-amber-500",
      date: "Feb 5, 2026",
      url: "https://learn.backpack.exchange/blog/backpack-exchange-lists-paxg-spot"
    },
    {
      title: "ZAMA-PERP Listed",
      content: t('activity9'),
      icon: "⚡",
      gradient: "from-red-500 to-pink-500",
      date: "Feb 2, 2026",
      url: "https://learn.backpack.exchange/blog/zama-perp-listed"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Backpack Exchange Referral",
          "url": "https://www.backpackref.com/",
          "description": t('subtitle'),
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://backpack.exchange/join/meme",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Backpack Exchange",
            "url": "https://backpack.exchange"
          }
        })
      }} />

      <div className="container mx-auto px-4 py-12">
        {/* Language Switcher */}
        <div className="flex justify-end mb-6">
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value as Language)}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="en">🇺🇸 English</option>
            <option value="zh-cn">🇨🇳 简体中文</option>
            <option value="zh-tw">🇹🇼 繁體中文</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="pt">🇵🇹 Português</option>
            <option value="it">🇮🇹 Italiano</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="ja">🇯🇵 日本語</option>
            <option value="ko">🇰🇷 한국어</option>
          </select>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Image
              src="https://cdn.prod.website-files.com/66830ad123bea7f626bcf58f/670f68cdb73b3a75c01956b9_Group%20427324273.svg"
              alt="Backpack Logo"
              width={72}
              height={72}
              className="mr-4"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-black">
              {t('title')}
            </h1>
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-black mb-4">
            {t('subtitle')}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {t('heroDescription')}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { key: 'trustBadge1', icon: '🏛️' },
              { key: 'trustBadge2', icon: '🇪🇺' },
              { key: 'trustBadge3', icon: '🛡️' },
              { key: 'trustBadge4', icon: '👥' }
            ].map((badge) => (
              <span key={badge.key} className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full">
                {badge.icon} {t(badge.key)}
              </span>
            ))}
          </div>

          {/* Main CTA */}
          <a
            href="https://backpack.exchange/join/meme"
            onClick={() => handleButtonClick('hero_cta', 'https://backpack.exchange/join/meme')}
            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('registerButton')}
          </a>
        </div>

        {/* Why Choose Backpack - Enhanced */}
        <div className="mb-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">{t('whyTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { titleKey: 'why1Title', descKey: 'why1Desc', icon: '🏛️', gradient: 'from-blue-500 to-indigo-500' },
              { titleKey: 'why2Title', descKey: 'why2Desc', icon: '🔗', gradient: 'from-purple-500 to-pink-500' },
              { titleKey: 'why3Title', descKey: 'why3Desc', icon: '💎', gradient: 'from-green-500 to-emerald-500' },
              { titleKey: 'why4Title', descKey: 'why4Desc', icon: '🔮', gradient: 'from-orange-500 to-red-500' },
              { titleKey: 'why5Title', descKey: 'why5Desc', icon: '🔒', gradient: 'from-gray-600 to-gray-400' },
              { titleKey: 'why6Title', descKey: 'why6Desc', icon: '🚀', gradient: 'from-cyan-500 to-blue-500' }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${item.gradient} text-white text-2xl mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{t(item.titleKey)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hot Activities Section - Updated */}
        <div className="mb-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">{t('hotActivities')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${activity.gradient} text-white text-2xl`}>
                    {activity.icon}
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{activity.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{activity.content}</p>
                <a
                  href={activity.url}
                  onClick={() => handleButtonClick(`activity_${index}`, activity.url)}
                  className="inline-block text-black hover:text-gray-600 font-semibold text-sm transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('learnMore')}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Points Program */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-6">🏆 {t('pointsTitle')}</h2>
            <p className="text-gray-700 text-center mb-6">
              {t('pointsDetails')}
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center mb-6">
              {[
                { rank: 'Bronze', color: 'from-orange-600 to-orange-400', emoji: '🥉' },
                { rank: 'Silver', color: 'from-gray-400 to-gray-300', emoji: '🥈' },
                { rank: 'Gold', color: 'from-yellow-500 to-yellow-300', emoji: '🥇' },
                { rank: 'Platinum', color: 'from-blue-400 to-blue-300', emoji: '💎' },
                { rank: 'Diamond', color: 'from-purple-500 to-purple-400', emoji: '💠' },
                { rank: 'Challenger', color: 'from-red-500 to-pink-400', emoji: '👑' }
              ].map((tier, index) => (
                <div key={index} className="text-center">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center text-2xl mx-auto mb-2`}>
                    {tier.emoji}
                  </div>
                  <p className="text-sm font-semibold">{tier.rank}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="https://backpack.exchange/join/meme"
                onClick={() => handleButtonClick('points_cta', 'https://backpack.exchange/join/meme')}
                className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full text-sm transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('registerButton')}
              </a>
            </div>
          </div>
        </div>

        {/* Community Sections */}
        <div className="mb-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">{t('communityTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-black mb-4">{t('memeTitle')}</h3>
              <p className="text-gray-600 mb-6 text-sm flex-grow">{t('memeDescription')}</p>
              <p className="text-xs text-green-600 font-semibold mb-4">+20% Referral Bonus</p>
              <a
                href="https://backpack.exchange/join/meme"
                className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm mt-auto"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleButtonClick('meme', 'https://backpack.exchange/join/meme')}
              >
                {t('registerButton')}
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col">
              <div className="text-5xl mb-6">🌏</div>
              <h3 className="text-2xl font-bold text-black mb-4">{t('languageCommunityTitle')}</h3>
              <p className="text-gray-600 mb-6 text-sm flex-grow">{t('languageCommunityDescription')}</p>
              <p className="text-xs text-green-600 font-semibold mb-4">+20% Referral Bonus</p>
              <a
                href="https://backpack.exchange/join/zh-cn"
                className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm mt-auto"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleButtonClick('language_community', 'https://backpack.exchange/join/zh-cn')}
              >
                {t('registerButton')}
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col">
              <div className="text-5xl mb-6">🎮</div>
              <h3 className="text-2xl font-bold text-black mb-4">{t('gamingTitle')}</h3>
              <p className="text-gray-600 mb-6 text-sm flex-grow">{t('gamingDescription')}</p>
              <p className="text-xs text-green-600 font-semibold mb-4">+20% Referral Bonus</p>
              <a
                href="https://backpack.exchange/join/lol"
                className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm mt-auto"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleButtonClick('gaming', 'https://backpack.exchange/join/lol')}
              >
                {t('registerButton')}
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-12 mb-16 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">{t('readyTitle')}</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {t('readyDescription')}
          </p>
          <a
            href="https://backpack.exchange/join/meme"
            onClick={() => handleButtonClick('main_cta', 'https://backpack.exchange/join/meme')}
            className="inline-block bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-12 rounded-full text-lg transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('registerButton')}
          </a>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            {t('alreadyAccount')}{" "}
            <a href="https://backpack.exchange/join/meme" className="text-black hover:underline font-semibold">
              {t('signIn')}
            </a>
          </p>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-400 text-xs leading-relaxed max-w-4xl mx-auto">
              {t('disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
