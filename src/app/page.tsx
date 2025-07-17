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
    en: 'The crypto trading platform built for the community',
    'zh-cn': '为社区打造的加密货币交易平台',
    'zh-tw': '為社群打造的加密貨幣交易平台',
    fr: 'La plateforme de trading crypto conçue pour la communauté',
    pt: 'A plataforma de negociação de criptomoedas construída para a comunidade',
    it: 'La piattaforma di trading crypto costruita per la comunità',
    de: 'Die Krypto-Handelsplattform für die Community',
    ja: 'コミュニティのために構築された暗号通貨取引プラットフォーム',
    ko: '커뮤니티를 위해 구축된 암호화폐 거래 플랫폼'
  },
  hotActivities: {
    en: '🔥 Hot Activities & Campaigns',
    'zh-cn': '🔥 热门活动与奖励',
    'zh-tw': '🔥 熱門活動與獎勵',
    fr: '🔥 Activités et Campagnes Populaires',
    pt: '🔥 Atividades e Campanhas Populares',
    it: '🔥 Attività e Campagne Popolari',
    de: '🔥 Beliebte Aktivitäten & Kampagnen',
    ja: '🔥 人気のアクティビティ＆キャンペーン',
    ko: '🔥 인기 활동 및 캠페인'
  },
  tradingFeatures: {
    en: '⚡ Trading Features',
    'zh-cn': '⚡ 交易功能',
    'zh-tw': '⚡ 交易功能',
    fr: '⚡ Fonctionnalités de Trading',
    pt: '⚡ Recursos de Negociação',
    it: '⚡ Funzionalità di Trading',
    de: '⚡ Trading-Funktionen',
    ja: '⚡ トレーディング機能',
    ko: '⚡ 거래 기능'
  },
  pointsProgram: {
    en: 'Backpack Points Season 2 is LIVE! Earn points for every trade and unlock exclusive rewards.',
    'zh-cn': 'Backpack积分第二季正式上线！每笔交易都能获得积分，解锁独家奖励。',
    'zh-tw': 'Backpack積分第二季正式上線！每筆交易都能獲得積分，解鎖獨家獎勵。',
    fr: 'La Saison 2 des Points Backpack est EN DIRECT ! Gagnez des points pour chaque trade et débloquez des récompenses exclusives.',
    pt: 'A Temporada 2 dos Pontos Backpack está AO VIVO! Ganhe pontos para cada negociação e desbloqueie recompensas exclusivas.',
    it: 'La Stagione 2 dei Punti Backpack è LIVE! Guadagna punti per ogni trade e sblocca ricompense esclusive.',
    de: 'Backpack Points Season 2 ist LIVE! Verdiene Punkte für jeden Trade und schalte exklusive Belohnungen frei.',
    ja: 'Backpackポイントシーズン2が開始！取引ごとにポイントを獲得し、限定報酬をアンロック。',
    ko: 'Backpack 포인트 시즌 2가 시작됐습니다! 모든 거래에서 포인트를 획득하고 독점 보상을 잠금해제하세요.'
  },
  eclipseAirdrop: {
    en: 'Eclipse ES Airdrop LIVE on Backpack - Trade Eclipse tokens and earn exclusive rewards!',
    'zh-cn': 'Eclipse ES空投在Backpack上线 - 交易Eclipse代币并获得独家奖励！',
    'zh-tw': 'Eclipse ES空投在Backpack上線 - 交易Eclipse代幣並獲得獨家獎勵！',
    fr: 'Eclipse ES Airdrop EN DIRECT sur Backpack - Tradez les tokens Eclipse et gagnez des récompenses exclusives !',
    pt: 'Eclipse ES Airdrop AO VIVO no Backpack - Negocie tokens Eclipse e ganhe recompensas exclusivas!',
    it: 'Eclipse ES Airdrop LIVE su Backpack - Fai trading di token Eclipse e guadagna ricompense esclusive!',
    de: 'Eclipse ES Airdrop LIVE auf Backpack - Handle Eclipse-Token und verdiene exklusive Belohnungen!',
    ja: 'Eclipse ES エアドロップがBackpackで開始 - Eclipseトークンを取引して限定報酬を獲得！',
    ko: 'Eclipse ES 에어드롭이 Backpack에서 진행 중 - Eclipse 토큰을 거래하고 독점 보상을 획득하세요!'
  },
  pumpTrading: {
    en: 'Pump.fun tokens are now LIVE for trading on Backpack! Discover the next viral meme coin.',
    'zh-cn': 'Pump.fun代币现已在Backpack上线交易！发现下一个病毒式meme币。',
    'zh-tw': 'Pump.fun代幣現已在Backpack上線交易！發現下一個病毒式meme幣。',
    fr: 'Les tokens Pump.fun sont maintenant EN DIRECT pour le trading sur Backpack ! Découvrez la prochaine meme coin virale.',
    pt: 'Os tokens Pump.fun estão agora AO VIVO para negociação no Backpack! Descubra a próxima meme coin viral.',
    it: 'I token Pump.fun sono ora LIVE per il trading su Backpack! Scopri la prossima meme coin virale.',
    de: 'Pump.fun-Token sind jetzt LIVE für den Handel auf Backpack! Entdecke die nächste virale Meme-Münze.',
    ja: 'Pump.funトークンがBackpackで取引開始！次のバイラルミームコインを発見しよう。',
    ko: 'Pump.fun 토큰이 이제 Backpack에서 거래 가능합니다! 다음 바이럴 밈 코인을 발견하세요.'
  },
  fragmetricCampaign: {
    en: 'Fragmetric Frenzy Airdrop Campaign - Participate in trading campaigns and win big!',
    'zh-cn': 'Fragmetric Frenzy空投活动 - 参与交易活动，赢取大奖！',
    'zh-tw': 'Fragmetric Frenzy空投活動 - 參與交易活動，贏取大獎！',
    fr: 'Campagne Airdrop Fragmetric Frenzy - Participez aux campagnes de trading et gagnez gros !',
    pt: 'Campanha Airdrop Fragmetric Frenzy - Participe das campanhas de negociação e ganhe muito!',
    it: 'Campagna Airdrop Fragmetric Frenzy - Partecipa alle campagne di trading e vinci alla grande!',
    de: 'Fragmetric Frenzy Airdrop-Kampagne - Nimm an Trading-Kampagnen teil und gewinne groß!',
    ja: 'Fragmetric Frenzy エアドロップキャンペーン - トレーディングキャンペーンに参加して大きく勝利しよう！',
    ko: 'Fragmetric Frenzy 에어드롭 캠페인 - 거래 캠페인에 참여하고 큰 상금을 획득하세요!'
  },
  newUserCampaign: {
    en: 'New User Campaign - Get up to $200 in trading rewards for new signups!',
    'zh-cn': '新用户活动 - 新注册用户可获得高达200美元的交易奖励！',
    'zh-tw': '新用戶活動 - 新註冊用戶可獲得高達200美元的交易獎勵！',
    fr: 'Campagne Nouveaux Utilisateurs - Obtenez jusqu\'à 200$ en récompenses de trading pour les nouvelles inscriptions !',
    pt: 'Campanha de Novos Usuários - Ganhe até $200 em recompensas de negociação para novas inscrições!',
    it: 'Campagna Nuovi Utenti - Ottieni fino a $200 in ricompense di trading per le nuove iscrizioni!',
    de: 'Neue Benutzer-Kampagne - Erhalte bis zu $200 in Trading-Belohnungen für neue Anmeldungen!',
    ja: '新規ユーザーキャンペーン - 新規登録で最大200ドルのトレーディング報酬を獲得！',
    ko: '신규 사용자 캠페인 - 신규 가입자에게 최대 $200의 거래 보상을 제공합니다!'
  },
  lowFees: {
    en: '0.02% Maker Fees - Industry-leading low trading fees',
    'zh-cn': '0.02%挂单费用 - 行业领先的低交易费用',
    'zh-tw': '0.02%掛單費用 - 行業領先的低交易費用',
    fr: '0.02% de Frais Maker - Frais de trading bas leaders de l\'industrie',
    pt: '0.02% de Taxas Maker - Taxas de negociação baixas líderes da indústria',
    it: '0.02% di Commissioni Maker - Commissioni di trading basse leader del settore',
    de: '0.02% Maker-Gebühren - Branchenführende niedrige Handelsgebühren',
    ja: '0.02%メイカー手数料 - 業界トップクラスの低取引手数料',
    ko: '0.02% 메이커 수수료 - 업계 최고 수준의 낮은 거래 수수료'
  },
  fastExecution: {
    en: 'Sub-millisecond execution speed for professional traders',
    'zh-cn': '专业交易者的亚毫秒执行速度',
    'zh-tw': '專業交易者的亞毫秒執行速度',
    fr: 'Vitesse d\'exécution inférieure à la milliseconde pour les traders professionnels',
    pt: 'Velocidade de execução sub-milissegundo para traders profissionais',
    it: 'Velocità di esecuzione sub-millisecondi per trader professionali',
    de: 'Sub-Millisekunden-Ausführungsgeschwindigkeit für professionelle Trader',
    ja: 'プロトレーダー向けのミリ秒未満の実行速度',
    ko: '프로 트레이더를 위한 밀리초 미만의 실행 속도'
  },
  legacyDrop: {
    en: 'Legacy Drop - Rewarding historical users since late 2023 with exclusive points allocation',
    'zh-cn': 'Legacy空投 - 为2023年底以来的历史用户提供独家积分分配奖励',
    'zh-tw': 'Legacy空投 - 為2023年底以來的歷史用戶提供獨家積分分配獎勵',
    fr: 'Legacy Drop - Récompenser les utilisateurs historiques depuis fin 2023 avec une allocation de points exclusive',
    pt: 'Legacy Drop - Recompensando usuários históricos desde o final de 2023 com alocação exclusiva de pontos',
    it: 'Legacy Drop - Ricompensare gli utenti storici dalla fine del 2023 con allocazione esclusiva di punti',
    de: 'Legacy Drop - Belohnung historischer Nutzer seit Ende 2023 mit exklusiver Punkteverteilung',
    ja: 'Legacy Drop - 2023年末からの歴史的ユーザーに独占的なポイント配分で報酬',
    ko: 'Legacy Drop - 2023년 말부터의 역사적 사용자에게 독점적인 포인트 할당으로 보상'
  },
  description: {
    en: 'Experience the future of crypto trading with Backpack - the fastest, most intuitive exchange platform. Join millions of traders worldwide and discover why we\'re the #1 choice for crypto enthusiasts.',
    'zh-cn': '体验Backpack加密货币交易的未来 - 最快速、最直观的交易平台。加入全球数百万交易者，发现为什么我们是加密货币爱好者的首选。',
    'zh-tw': '體驗Backpack加密貨幣交易的未來 - 最快速、最直觀的交易平台。加入全球數百萬交易者，發現為什麼我們是加密貨幣愛好者的首選。',
    fr: 'Découvrez l\'avenir du trading crypto avec Backpack - la plateforme d\'échange la plus rapide et intuitive. Rejoignez des millions de traders dans le monde et découvrez pourquoi nous sommes le choix n°1 des passionnés de crypto.',
    pt: 'Experimente o futuro do trading de criptomoedas com Backpack - a plataforma de câmbio mais rápida e intuitiva. Junte-se a milhões de traders mundialmente e descubra por que somos a escolha nº1 dos entusiastas de cripto.',
    it: 'Sperimenta il futuro del trading crypto con Backpack - la piattaforma di scambio più veloce e intuitiva. Unisciti a milioni di trader in tutto il mondo e scopri perché siamo la scelta n°1 degli appassionati di crypto.',
    de: 'Erlebe die Zukunft des Krypto-Handels mit Backpack - der schnellsten, intuitivsten Handelsplattform. Schließe dich Millionen von Tradern weltweit an und entdecke, warum wir die Nr. 1 Wahl für Krypto-Enthusiasten sind.',
    ja: 'Backpackで暗号通貨取引の未来を体験 - 最速で最も直感的な取引プラットフォーム。世界中の何百万ものトレーダーに参加し、なぜ私たちが暗号通貨愛好家の第一選択なのかを発見してください。',
    ko: 'Backpack으로 암호화폐 거래의 미래를 경험하세요 - 가장 빠르고 직관적인 거래 플랫폼. 전 세계 수백만 명의 트레이더와 함께하고 우리가 암호화폐 애호가들의 1위 선택인 이유를 발견하세요.'
  },
  pointsDetails: {
    en: 'Points are distributed weekly every Friday at 02:00 UTC based on your trading activity. Earn your way through Bronze, Silver, Gold, Platinum, Diamond, and Challenger ranks each season.',
    'zh-cn': '积分根据您的交易活动每周五02:00 UTC分发。在每个赛季中通过青铜、白银、黄金、铂金、钻石和挑战者等级获得积分。',
    'zh-tw': '積分根據您的交易活動每週五02:00 UTC分發。在每個賽季中通過青銅、白銀、黃金、鉑金、鑽石和挑戰者等級獲得積分。',
    fr: 'Les points sont distribués chaque vendredi à 02:00 UTC en fonction de votre activité de trading. Progressez à travers les rangs Bronze, Argent, Or, Platine, Diamant et Challenger chaque saison.',
    pt: 'Os pontos são distribuídos semanalmente toda sexta-feira às 02:00 UTC com base na sua atividade de negociação. Avance através dos ranks Bronze, Prata, Ouro, Platina, Diamante e Challenger a cada temporada.',
    it: 'I punti vengono distribuiti settimanalmente ogni venerdì alle 02:00 UTC in base alla tua attività di trading. Avanza attraverso i ranghi Bronzo, Argento, Oro, Platino, Diamante e Challenger ogni stagione.',
    de: 'Punkte werden wöchentlich jeden Freitag um 02:00 UTC basierend auf deiner Trading-Aktivität verteilt. Arbeite dich durch Bronze-, Silber-, Gold-, Platin-, Diamant- und Challenger-Ränge in jeder Saison.',
    ja: 'ポイントは取引活動に基づいて毎週金曜日02:00 UTCに配布されます。各シーズンでブロンズ、シルバー、ゴールド、プラチナ、ダイヤモンド、チャレンジャーのランクを進んでください。',
    ko: '포인트는 거래 활동을 기반으로 매주 금요일 02:00 UTC에 배포됩니다. 각 시즌에서 브론즈, 실버, 골드, 플래티넘, 다이아몬드, 챌린저 랭크를 통해 진행하세요.'
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
    en: 'Join the meme coin revolution! Trade $PEPE, $DOGE, $SHIB and discover the next 100x gem. Lightning-fast execution, real-time alerts, and exclusive meme coin launches.',
    'zh-cn': '加入meme币革命！交易$PEPE、$DOGE、$SHIB，发现下一个100倍宝石。闪电般的执行、实时提醒和独家meme币发行。',
    'zh-tw': '加入meme幣革命！交易$PEPE、$DOGE、$SHIB，發現下一個100倍寶石。閃電般的執行、即時提醒和獨家meme幣發行。',
    fr: 'Rejoignez la révolution des meme coins ! Tradez $PEPE, $DOGE, $SHIB et découvrez le prochain joyau 100x. Exécution ultra-rapide, alertes en temps réel et lancements exclusifs de meme coins.',
    pt: 'Junte-se à revolução das meme coins! Negocie $PEPE, $DOGE, $SHIB e descubra a próxima joia 100x. Execução ultra-rápida, alertas em tempo real e lançamentos exclusivos de meme coins.',
    it: 'Unisciti alla rivoluzione delle meme coin! Fai trading di $PEPE, $DOGE, $SHIB e scopri la prossima gemma 100x. Esecuzione ultra-veloce, avvisi in tempo reale e lanci esclusivi di meme coin.',
    de: 'Schließe dich der Meme-Coin-Revolution an! Handle $PEPE, $DOGE, $SHIB und entdecke den nächsten 100x-Edelstein. Blitzschnelle Ausführung, Echtzeit-Benachrichtigungen und exklusive Meme-Coin-Launches.',
    ja: 'ミームコイン革命に参加しよう！$PEPE、$DOGE、$SHIBを取引し、次の100倍の宝石を発見。超高速実行、リアルタイムアラート、独占ミームコインローンチ。',
    ko: '밈 코인 혁명에 참여하세요! $PEPE, $DOGE, $SHIB을 거래하고 다음 100배 보석을 발견하세요. 초고속 실행, 실시간 알림, 독점 밈 코인 출시.'
  },
  chineseTitle: {
    en: 'Chinese Community',
    'zh-cn': '中文社区',
    'zh-tw': '中文社群',
    fr: 'Communauté Chinoise',
    pt: 'Comunidade Chinesa',
    it: 'Comunità Cinese',
    de: 'Chinesische Gemeinschaft',
    ja: '中国コミュニティ',
    ko: '중국 커뮤니티'
  },
  chineseDescription: {
    en: 'Crypto trading platform built for Chinese users! Chinese customer service, USD/fiat deposits, simplified interface. Compliant and secure, mainland China KYC support, Hong Kong bank card USD deposits.',
    'zh-cn': '专为华人用户打造的加密货币交易平台！中文客服、美元法币出入金、简体界面。合规安全，大陆KYC合法通过，香港地区银行卡美金法币出入金。',
    'zh-tw': '專為華人用戶打造的加密貨幣交易平台！中文客服、美元法幣出入金、簡體界面。合規安全，大陸KYC合法通過，香港地區銀行卡美金法幣出入金。',
    fr: 'Plateforme de trading crypto conçue pour les utilisateurs chinois ! Service client chinois, dépôts USD/fiat, interface simplifiée. Conforme et sécurisé, support KYC Chine continentale, dépôts USD par carte bancaire Hong Kong.',
    pt: 'Plataforma de trading crypto construída para usuários chineses! Atendimento ao cliente chinês, depósitos USD/fiat, interface simplificada. Conforme e seguro, suporte KYC China continental, depósitos USD com cartão bancário Hong Kong.',
    it: 'Piattaforma di trading crypto costruita per utenti cinesi! Assistenza clienti cinese, depositi USD/fiat, interfaccia semplificata. Conforme e sicuro, supporto KYC Cina continentale, depositi USD con carta bancaria Hong Kong.',
    de: 'Krypto-Trading-Plattform für chinesische Nutzer! Chinesischer Kundensupport, USD/Fiat-Einzahlungen, vereinfachte Oberfläche. Konform und sicher, Festland-China-KYC-Unterstützung, Hong Kong Bankkarten-USD-Einzahlungen.',
    ja: '中国ユーザー向けに構築された暗号通貨取引プラットフォーム！中国語カスタマーサービス、USD/法定通貨入金、簡素化されたインターフェース。準拠でセキュア、中国本土KYCサポート、香港銀行カードUSD入金。',
    ko: '중국 사용자를 위해 구축된 암호화폐 거래 플랫폼! 중국어 고객 서비스, USD/법정화폐 입금, 간소화된 인터페이스. 규정 준수 및 보안, 중국 본토 KYC 지원, 홍콩 은행 카드 USD 입금.'
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
    en: 'Level up your crypto game! Trade gaming tokens, NFTs, and metaverse assets. From $AXS to $SAND, find all gaming tokens in one place with pro-level tools.',
    'zh-cn': '提升你的加密游戏！交易游戏代币、NFT和元宇宙资产。从$AXS到$SAND，在一个地方找到所有游戏代币，配备专业级工具。',
    'zh-tw': '提升你的加密遊戲！交易遊戲代幣、NFT和元宇宙資產。從$AXS到$SAND，在一個地方找到所有遊戲代幣，配備專業級工具。',
    fr: 'Améliorez votre jeu crypto ! Tradez des tokens gaming, NFT et actifs métavers. De $AXS à $SAND, trouvez tous les tokens gaming en un endroit avec des outils de niveau professionnel.',
    pt: 'Suba de nível no seu jogo crypto! Negocie tokens de jogos, NFTs e ativos do metaverso. De $AXS a $SAND, encontre todos os tokens de jogos em um lugar com ferramentas de nível profissional.',
    it: 'Migliora il tuo gioco crypto! Fai trading di token gaming, NFT e asset del metaverso. Da $AXS a $SAND, trova tutti i token gaming in un posto con strumenti di livello professionale.',
    de: 'Verbessere dein Krypto-Spiel! Handle Gaming-Token, NFTs und Metaverse-Assets. Von $AXS bis $SAND, finde alle Gaming-Token an einem Ort mit professionellen Tools.',
    ja: 'あなたの暗号ゲームをレベルアップ！ゲーミングトークン、NFT、メタバースアセットを取引。$AXSから$SANDまで、プロレベルのツールで全てのゲーミングトークンを一箇所で見つけよう。',
    ko: '암호화폐 게임을 레벨업하세요! 게이밍 토큰, NFT, 메타버스 자산을 거래하세요. $AXS부터 $SAND까지, 프로 수준의 도구로 모든 게이밍 토큰을 한 곳에서 찾으세요.'
  },
  registerButton: {
    en: 'Register & Trade Now →',
    'zh-cn': '立即注册交易 →',
    'zh-tw': '立即註冊交易 →',
    fr: 'S\'inscrire et Trader Maintenant →',
    pt: 'Registrar e Negociar Agora →',
    it: 'Registrati e Fai Trading Ora →',
    de: 'Jetzt Registrieren & Handeln →',
    ja: '今すぐ登録して取引 →',
    ko: '지금 등록하고 거래하기 →'
  },
  limitedOffer: {
    en: '🎉 Limited Time Offer - Get Started Today!',
    'zh-cn': '🎉 限时优惠 - 立即开始！',
    'zh-tw': '🎉 限時優惠 - 立即開始！',
    fr: '🎉 Offre à Durée Limitée - Commencez Aujourd\'hui !',
    pt: '🎉 Oferta por Tempo Limitado - Comece Hoje!',
    it: '🎉 Offerta a Tempo Limitato - Inizia Oggi!',
    de: '🎉 Zeitlich Begrenztes Angebot - Beginne Heute!',
    ja: '🎉 期間限定オファー - 今日から始めよう！',
    ko: '🎉 기간 한정 제안 - 오늘 시작하세요!'
  },
  offerDetails: {
    en: '• Zero trading fees for your first 30 days\n• Instant deposits and withdrawals\n• Access to exclusive token launches\n• 24/7 premium customer support',
    'zh-cn': '• 前30天零交易费用\n• 即时存取款\n• 独家代币发行\n• 24/7高级客户支持',
    'zh-tw': '• 前30天零交易費用\n• 即時存取款\n• 獨家代幣發行\n• 24/7高級客戶支援',
    fr: '• Frais de trading zéro pour vos 30 premiers jours\n• Dépôts et retraits instantanés\n• Accès aux lancements de tokens exclusifs\n• Support client premium 24/7',
    pt: '• Taxas de negociação zero para seus primeiros 30 dias\n• Depósitos e saques instantâneos\n• Acesso a lançamentos exclusivos de tokens\n• Suporte ao cliente premium 24/7',
    it: '• Commissioni di trading zero per i tuoi primi 30 giorni\n• Depositi e prelievi istantanei\n• Accesso a lanci di token esclusivi\n• Supporto clienti premium 24/7',
    de: '• Null Handelsgebühren für deine ersten 30 Tage\n• Sofortige Ein- und Auszahlungen\n• Zugang zu exklusiven Token-Launches\n• 24/7 Premium-Kundensupport',
    ja: '• 最初の30日間取引手数料ゼロ\n• 即座の入出金\n• 独占トークンローンチへのアクセス\n• 24/7プレミアムカスタマーサポート',
    ko: '• 첫 30일간 거래 수수료 제로\n• 즉시 입출금\n• 독점 토큰 출시 액세스\n• 24/7 프리미엄 고객 지원'
  },
  trustText: {
    en: 'Join over 5 million traders who trust Backpack for their crypto journey',
    'zh-cn': '加入超过500万信任Backpack的交易者',
    'zh-tw': '加入超過500萬信任Backpack的交易者',
    fr: 'Rejoignez plus de 5 millions de traders qui font confiance à Backpack pour leur parcours crypto',
    pt: 'Junte-se a mais de 5 milhões de traders que confiam no Backpack para sua jornada cripto',
    it: 'Unisciti a oltre 5 milioni di trader che si fidano di Backpack per il loro viaggio crypto',
    de: 'Schließe dich über 5 Millionen Tradern an, die Backpack für ihre Krypto-Reise vertrauen',
    ja: 'Backpackを信頼する500万人以上のトレーダーに参加しよう',
    ko: 'Backpack을 신뢰하는 500만 명 이상의 트레이더와 함께하세요'
  },
  whyTitle: {
    en: 'Why 5M+ Traders Choose Backpack',
    'zh-cn': '为什么500万+交易者选择Backpack',
    'zh-tw': '為什麼500萬+交易者選擇Backpack',
    fr: 'Pourquoi 5M+ Traders Choisissent Backpack',
    pt: 'Por que 5M+ Traders Escolhem Backpack',
    it: 'Perché 5M+ Trader Scelgono Backpack',
    de: 'Warum 5M+ Trader Backpack Wählen',
    ja: 'なぜ500万+のトレーダーがBackpackを選ぶのか',
    ko: '왜 500만+ 트레이더가 Backpack을 선택하는가'
  },
  readyTitle: {
    en: 'Ready to Start Your Crypto Journey?',
    'zh-cn': '准备好开始您的加密之旅了吗？',
    'zh-tw': '準備好開始您的加密之旅了嗎？',
    fr: 'Prêt à Commencer Votre Voyage Crypto ?',
    pt: 'Pronto para Começar Sua Jornada Cripto?',
    it: 'Pronto per Iniziare il Tuo Viaggio Crypto?',
    de: 'Bereit, Deine Krypto-Reise zu Beginnen?',
    ja: '暗号通貨の旅を始める準備はできていますか？',
    ko: '암호화폐 여정을 시작할 준비가 되셨나요?'
  },
  readyDescription: {
    en: 'Join millions of traders who\'ve already discovered the Backpack advantage. Don\'t miss out on the next big opportunity!',
    'zh-cn': '加入已经发现Backpack优势的数百万交易者。不要错过下一个大机会！',
    'zh-tw': '加入已經發現Backpack優勢的數百萬交易者。不要錯過下一個大機會！',
    fr: 'Rejoignez des millions de traders qui ont déjà découvert l\'avantage Backpack. Ne manquez pas la prochaine grande opportunité !',
    pt: 'Junte-se a milhões de traders que já descobriram a vantagem Backpack. Não perca a próxima grande oportunidade!',
    it: 'Unisciti a milioni di trader che hanno già scoperto il vantaggio Backpack. Non perdere la prossima grande opportunità!',
    de: 'Schließe dich Millionen von Tradern an, die bereits den Backpack-Vorteil entdeckt haben. Verpasse nicht die nächste große Gelegenheit!',
    ja: 'すでにBackpackの利点を発見した何百万ものトレーダーに参加しよう。次の大きな機会を逃すな！',
    ko: '이미 Backpack의 장점을 발견한 수백만 명의 트레이더와 함께하세요. 다음 큰 기회를 놓치지 마세요!'
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
    fr: 'Tout le contenu du site Web est généré par l\'IA. Les promotions Backpack mentionnées ne sont pas garanties d\'être réelles ou efficaces, et ne constituent pas des conseils d\'investissement. L\'investissement en crypto-monnaies nécessite de la prudence - veuillez faire vos propres recherches.',
    pt: 'Todo o conteúdo do site é gerado por IA. As promoções Backpack mencionadas não têm garantia de serem reais ou eficazes, e não constituem conselho de investimento. O investimento em criptomoedas requer cautela - faça sua própria pesquisa.',
    it: 'Tutto il contenuto del sito web è generato dall\'IA. Le promozioni Backpack menzionate non sono garantite per essere reali o efficaci, e non costituiscono consigli di investimento. L\'investimento in criptovalute richiede cautela - fai le tue ricerche.',
    de: 'Alle Website-Inhalte sind KI-generiert. Die erwähnten Backpack-Promotionen sind nicht garantiert real oder wirksam und stellen keine Anlageberatung dar. Kryptowährungs-Investitionen erfordern Vorsicht - bitte recherchieren Sie selbst.',
    ja: 'すべてのウェブサイトコンテンツはAI生成です。記載されているBackpackのプロモーションは真実性や有効性が保証されておらず、投資アドバイスを構成するものではありません。暗号通貨投資には注意が必要です - 自分で調査してください。',
    ko: '모든 웹사이트 콘텐츠는 AI에 의해 생성되었습니다. 언급된 Backpack 프로모션은 실제이거나 효과적임이 보장되지 않으며 투자 조언을 구성하지 않습니다. 암호화폐 투자에는 주의가 필요합니다 - 스스로 조사하십시오.'
  }
};

// Function to detect user's preferred language
const detectUserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  
  const userLanguage = navigator.language || navigator.languages?.[0] || 'en';
  const langCode = userLanguage.toLowerCase();
  
  // Match specific languages
  if (langCode.includes('zh-cn') || langCode.includes('zh-hans') || langCode === 'zh') {
    return 'zh-cn';
  }
  if (langCode.includes('zh-tw') || langCode.includes('zh-hant') || 
      langCode.includes('zh-hk') || langCode.includes('zh-mo')) {
    return 'zh-tw';
  }
  if (langCode.includes('fr')) return 'fr';
  if (langCode.includes('pt')) return 'pt';
  if (langCode.includes('it')) return 'it';
  if (langCode.includes('de')) return 'de';
  if (langCode.includes('ja')) return 'ja';
  if (langCode.includes('ko')) return 'ko';
  if (langCode.includes('en')) return 'en';
  
  // Default to English for all other languages
  return 'en';
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [isLanguageDetected, setIsLanguageDetected] = useState(false);

  const t = useCallback((key: string) => {
    return translations[key]?.[language] || translations[key]?.en || key;
  }, [language]);

  // Google Analytics event tracking
  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  // Track language changes
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    trackEvent('language_change', {
      language: newLanguage,
      event_category: 'user_interaction'
    });
  };

  // Track button clicks
  const handleButtonClick = (community: string, url: string) => {
    trackEvent('register_button_click', {
      community: community,
      url: url,
      language: language,
      event_category: 'conversion'
    });
  };

  // Detect user language on initial load
  useEffect(() => {
    if (!isLanguageDetected) {
      const detectedLanguage = detectUserLanguage();
      setLanguage(detectedLanguage);
      setIsLanguageDetected(true);
    }
  }, [isLanguageDetected]);

  // Update document title and meta tags when language changes
  useEffect(() => {
    document.title = `Backpack Exchange - ${t('subtitle')}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('subtitle'));
    }
    
    // Update language attribute
    document.documentElement.setAttribute('lang', language);
  }, [language, t]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Structured Data for AI/Search Engines */}
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
      
      <div className="container mx-auto px-4 py-16">
        {/* Language Switcher */}
        <div className="flex justify-end mb-8">
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

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-8">
            <Image
              src="https://cdn.prod.website-files.com/66830ad123bea7f626bcf58f/670f68cdb73b3a75c01956b9_Group%20427324273.svg"
              alt="Backpack Logo"
              width={80}
              height={80}
              className="mr-4"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-black">
              {t('title')}
            </h1>
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-black mb-8">
            {t('subtitle')}
          </p>
          
          {/* Header CTA Button */}
          <div className="text-center mb-8">
            <a
              href="https://backpack.exchange/join/meme"
              onClick={() => handleButtonClick('header_cta', 'https://backpack.exchange/join/meme')}
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-12 rounded-full text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('registerButton')}
            </a>
          </div>
        </div>

        {/* Hero Description */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            {t('description')}
          </p>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{t('limitedOffer')}</h2>
            <p className="text-gray-700 mb-4 whitespace-pre-line">
              {t('offerDetails')}
            </p>
            <p className="text-sm text-gray-500">
              {t('trustText')}
            </p>
          </div>
          
          {/* Exclusive Bonus Section */}
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-orange-800">🎁 Exclusive Bonus: Up to 10% Referral Commission</h2>
            <p className="text-gray-700 mb-4 whitespace-pre-line text-center">
              • Register through this page to get exclusive newbie rewards\n• Earn up to 10% commission on referrals\n• Additional trading bonuses for active users\n• VIP customer support access
            </p>
            <div className="text-center">
              <p className="text-lg font-bold text-orange-700 mb-2">
                🚀 Register Now to Unlock All Benefits!
              </p>
              <p className="text-sm text-gray-600">
                Limited time offer - Don&apos;t miss out!
              </p>
            </div>
          </div>
        </div>

        {/* Hot Activities Section */}
        <div className="mb-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">{t('hotActivities')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Backpack Points Season 2",
                content: t('pointsProgram'),
                icon: "🎯",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Eclipse ES Airdrop",
                content: t('eclipseAirdrop'),
                icon: "🌟",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Pump.fun Trading",
                content: t('pumpTrading'),
                icon: "🚀",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Fragmetric Frenzy",
                content: t('fragmetricCampaign'),
                icon: "💎",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                title: "New User Campaign",
                content: t('newUserCampaign'),
                icon: "🎁",
                gradient: "from-red-500 to-pink-500"
              },
              {
                title: "Legacy Drop",
                content: t('legacyDrop'),
                icon: "👑",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${activity.gradient} text-white text-2xl mb-4`}>
                  {activity.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{activity.content}</p>
                <a
                  href="https://backpack.exchange/join/meme"
                  onClick={() => handleButtonClick(`activity_${index}`, 'https://backpack.exchange/join/meme')}
                  className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-full text-sm transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('registerButton')}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Points Program Details */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-6">🏆 Backpack Points Program</h2>
            <p className="text-gray-700 text-center mb-6">
              {t('pointsDetails')}
            </p>
            <div className="grid md:grid-cols-6 gap-4 text-center">
              {[
                { rank: 'Bronze', color: 'from-orange-600 to-orange-400', emoji: '🥉' },
                { rank: 'Silver', color: 'from-gray-400 to-gray-300', emoji: '🥈' },
                { rank: 'Gold', color: 'from-yellow-500 to-yellow-300', emoji: '🥇' },
                { rank: 'Platinum', color: 'from-blue-400 to-blue-300', emoji: '💎' },
                { rank: 'Diamond', color: 'from-purple-500 to-purple-400', emoji: '💠' },
                { rank: 'Challenger', color: 'from-red-500 to-pink-400', emoji: '👑' }
              ].map((tier, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center text-2xl mx-auto mb-2`}>
                    {tier.emoji}
                  </div>
                  <p className="text-sm font-semibold">{tier.rank}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Sections */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold text-black mb-4">{t('memeTitle')}</h3>
            <p className="text-gray-600 mb-6 text-sm flex-grow">
              {t('memeDescription')}
            </p>
            <div className="mb-6">
              <p className="text-xs text-gray-500 mb-2">🔥 Hot Right Now:</p>
              <p className="text-sm font-semibold">$BONK +127% • $WIF +89% • $POPCAT +156%</p>
              <p className="text-xs text-green-600 font-semibold mt-2">
                💰 +10% Referral Bonus
              </p>
            </div>
            <a
              href="https://backpack.exchange/join/meme"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-sm mt-auto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleButtonClick('meme', 'https://backpack.exchange/join/meme')}
            >
              {t('registerButton')}
            </a>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col">
            <div className="text-5xl mb-6">🌏</div>
            <h3 className="text-2xl font-bold text-black mb-4">{t('chineseTitle')}</h3>
            <p className="text-gray-600 mb-6 text-sm flex-grow">
              {t('chineseDescription')}
            </p>
            <div className="mb-6">
              <p className="text-xs text-gray-500 mb-2">🎯 Exclusive Benefits:</p>
              <p className="text-sm font-semibold">Chinese Support • USD Deposits • Mainland KYC • HK Bank Cards</p>
              <p className="text-xs text-green-600 font-semibold mt-2">
                💰 +10% Referral Bonus
              </p>
            </div>
            <a
              href="https://backpack.exchange/join/zh-cn"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-sm mt-auto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleButtonClick('chinese', 'https://backpack.exchange/join/zh-cn')}
            >
              {t('registerButton')}
            </a>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col">
            <div className="text-5xl mb-6">🎮</div>
            <h3 className="text-2xl font-bold text-black mb-4">{t('gamingTitle')}</h3>
            <p className="text-gray-600 mb-6 text-sm flex-grow">
              {t('gamingDescription')}
            </p>
            <div className="mb-6">
              <p className="text-xs text-gray-500 mb-2">🎯 Gaming Tokens:</p>
              <p className="text-sm font-semibold">$RONIN • $IMX • $GALA • $ENJ • $MANA</p>
              <p className="text-xs text-green-600 font-semibold mt-2">
                💰 +10% Referral Bonus
              </p>
            </div>
            <a
              href="https://backpack.exchange/join/lol"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-sm mt-auto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleButtonClick('gaming', 'https://backpack.exchange/join/lol')}
            >
              {t('registerButton')}
            </a>
          </div>
        </div>


        {/* Why Choose Backpack */}
        <div className="bg-black text-white rounded-2xl p-12 mb-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('whyTitle')}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-semibold mb-2">Lightning Speed</h4>
              <p className="text-gray-300 text-sm">Sub-millisecond execution</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="text-lg font-semibold mb-2">Fort Knox Security</h4>
              <p className="text-gray-300 text-sm">$2B+ assets protected</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💎</div>
              <h4 className="text-lg font-semibold mb-2">Lowest Fees</h4>
              <p className="text-gray-300 text-sm">0.02% maker fee</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-300 text-sm">Always here for you</p>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-12 mb-16 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">{t('readyTitle')}</h2>
          <p className="text-xl mb-8 opacity-90">
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
          
          {/* Disclaimer */}
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