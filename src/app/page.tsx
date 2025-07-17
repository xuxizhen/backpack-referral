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
          <div className="flex flex-wrap gap-2">
            {[
              { code: 'en', name: 'English' },
              { code: 'zh-cn', name: '简体中文' },
              { code: 'zh-tw', name: '繁體中文' },
              { code: 'fr', name: 'Français' },
              { code: 'pt', name: 'Português' },
              { code: 'it', name: 'Italiano' },
              { code: 'de', name: 'Deutsch' },
              { code: 'ja', name: '日本語' },
              { code: 'ko', name: '한국어' }
            ].map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code as Language)}
                className={`px-2 py-1 rounded text-xs ${
                  language === lang.code ? 'bg-black text-white' : 'bg-gray-200 text-black'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
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
        </div>

        {/* Hot Activities Section */}
        <div className="mb-16">
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

        {/* Trading Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">{t('tradingFeatures')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-4">{t('lowFees')}</h3>
              <p className="text-gray-600">
                Trade with the lowest fees in the industry. More profit for you!
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">{t('fastExecution')}</h3>
              <p className="text-gray-600">
                Lightning-fast order execution for competitive trading.
              </p>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of traders and start your crypto journey today!
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