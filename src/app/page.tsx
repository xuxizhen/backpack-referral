"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

type Language = 'en' | 'zh-cn' | 'zh-tw';

interface Translations {
  [key: string]: {
    en: string;
    'zh-cn': string;
    'zh-tw': string;
  };
}

const translations: Translations = {
  title: {
    en: 'Backpack',
    'zh-cn': 'Backpack',
    'zh-tw': 'Backpack'
  },
  subtitle: {
    en: 'The crypto trading platform built for the community',
    'zh-cn': '为社区打造的加密货币交易平台',
    'zh-tw': '為社群打造的加密貨幣交易平台'
  },
  description: {
    en: 'Experience the future of crypto trading with Backpack - the fastest, most intuitive exchange platform. Join millions of traders worldwide and discover why we\'re the #1 choice for crypto enthusiasts.',
    'zh-cn': '体验Backpack加密货币交易的未来 - 最快速、最直观的交易平台。加入全球数百万交易者，发现为什么我们是加密货币爱好者的首选。',
    'zh-tw': '體驗Backpack加密貨幣交易的未來 - 最快速、最直觀的交易平台。加入全球數百萬交易者，發現為什麼我們是加密貨幣愛好者的首選。'
  },
  limitedOffer: {
    en: '🎉 Limited Time Offer - Get Started Today!',
    'zh-cn': '🎉 限时优惠 - 立即开始！',
    'zh-tw': '🎉 限時優惠 - 立即開始！'
  },
  offerDetails: {
    en: '• Zero trading fees for your first 30 days\n• Instant deposits and withdrawals\n• Access to exclusive token launches\n• 24/7 premium customer support',
    'zh-cn': '• 前30天零交易费用\n• 即时存取款\n• 独家代币发行\n• 24/7高级客户支持',
    'zh-tw': '• 前30天零交易費用\n• 即時存取款\n• 獨家代幣發行\n• 24/7高級客戶支援'
  },
  trustText: {
    en: 'Join over 5 million traders who trust Backpack for their crypto journey',
    'zh-cn': '加入超过500万信任Backpack的交易者',
    'zh-tw': '加入超過500萬信任Backpack的交易者'
  },
  memeTitle: {
    en: 'Meme Coin Masters',
    'zh-cn': 'Meme币大师',
    'zh-tw': 'Meme幣大師'
  },
  memeDescription: {
    en: 'Join the meme coin revolution! Trade $PEPE, $DOGE, $SHIB and discover the next 100x gem. Lightning-fast execution, real-time alerts, and exclusive meme coin launches.',
    'zh-cn': '加入meme币革命！交易$PEPE、$DOGE、$SHIB，发现下一个100倍宝石。闪电般的执行、实时提醒和独家meme币发行。',
    'zh-tw': '加入meme幣革命！交易$PEPE、$DOGE、$SHIB，發現下一個100倍寶石。閃電般的執行、即時提醒和獨家meme幣發行。'
  },
  memeButton: {
    en: 'Register & Trade Now →',
    'zh-cn': '立即注册交易 →',
    'zh-tw': '立即註冊交易 →'
  },
  chineseTitle: {
    en: 'Chinese Community',
    'zh-cn': '中文社区',
    'zh-tw': '中文社群'
  },
  chineseDescription: {
    en: 'Crypto trading platform built for Chinese users! Chinese customer service, RMB deposits, simplified interface. Safe and compliant, bank-level security for worry-free digital asset trading.',
    'zh-cn': '专为华人用户打造的加密货币交易平台！中文客服、人民币入金、简体界面。安全合规，银行级别保障，让您的数字资产交易更安心。',
    'zh-tw': '專為華人用戶打造的加密貨幣交易平台！中文客服、人民幣入金、簡體界面。安全合規，銀行級別保障，讓您的數字資產交易更安心。'
  },
  chineseButton: {
    en: 'Register & Trade Now →',
    'zh-cn': '立即注册交易 →',
    'zh-tw': '立即註冊交易 →'
  },
  gamingTitle: {
    en: 'Gaming Community',
    'zh-cn': '游戏社区',
    'zh-tw': '遊戲社群'
  },
  gamingDescription: {
    en: 'Level up your crypto game! Trade gaming tokens, NFTs, and metaverse assets. From $AXS to $SAND, find all gaming tokens in one place with pro-level tools.',
    'zh-cn': '提升你的加密游戏！交易游戏代币、NFT和元宇宙资产。从$AXS到$SAND，在一个地方找到所有游戏代币，配备专业级工具。',
    'zh-tw': '提升你的加密遊戲！交易遊戲代幣、NFT和元宇宙資產。從$AXS到$SAND，在一個地方找到所有遊戲代幣，配備專業級工具。'
  },
  gamingButton: {
    en: 'Register & Trade Now →',
    'zh-cn': '立即注册交易 →',
    'zh-tw': '立即註冊交易 →'
  },
  whyTitle: {
    en: 'Why 5M+ Traders Choose Backpack',
    'zh-cn': '为什么500万+交易者选择Backpack',
    'zh-tw': '為什麼500萬+交易者選擇Backpack'
  },
  readyTitle: {
    en: 'Ready to Start Your Crypto Journey?',
    'zh-cn': '准备好开始您的加密之旅了吗？',
    'zh-tw': '準備好開始您的加密之旅了嗎？'
  },
  readyDescription: {
    en: 'Join millions of traders who\'ve already discovered the Backpack advantage. Don\'t miss out on the next big opportunity!',
    'zh-cn': '加入已经发现Backpack优势的数百万交易者。不要错过下一个大机会！',
    'zh-tw': '加入已經發現Backpack優勢的數百萬交易者。不要錯過下一個大機會！'
  },
  getStartedButton: {
    en: 'Register & Trade Now →',
    'zh-cn': '立即注册交易 →',
    'zh-tw': '立即註冊交易 →'
  },
  alreadyAccount: {
    en: 'Already have an account?',
    'zh-cn': '已经有账户？',
    'zh-tw': '已經有賬戶？'
  },
  signIn: {
    en: 'Sign in to Backpack',
    'zh-cn': '登录Backpack',
    'zh-tw': '登錄Backpack'
  },
  // SEO Meta Tags
  seoTitle: {
    en: 'Backpack Exchange - Register & Trade Crypto with 10% Referral Bonus',
    'zh-cn': 'Backpack交易所 - 注册交易加密货币，获得10%推荐返佣',
    'zh-tw': 'Backpack交易所 - 註冊交易加密貨幣，獲得10%推薦返佣'
  },
  seoDescription: {
    en: 'Join Backpack crypto exchange and get exclusive newbie rewards plus up to 10% referral commission. Trade meme coins, access Chinese support, and join gaming communities. Register now for zero fees!',
    'zh-cn': '加入Backpack加密货币交易所，获得独家新手奖励和高达10%推荐返佣。交易meme币，享受中文支持，加入游戏社区。立即注册享受零手续费！',
    'zh-tw': '加入Backpack加密貨幣交易所，獲得獨家新手獎勵和高達10%推薦返佣。交易meme幣，享受中文支援，加入遊戲社群。立即註冊享受零手續費！'
  },
  seoKeywords: {
    en: 'Backpack exchange, crypto trading, meme coins, referral bonus, cryptocurrency, Bitcoin, Ethereum, trading platform, crypto exchange, blockchain',
    'zh-cn': 'Backpack交易所, 加密货币交易, meme币, 推荐返佣, 数字货币, 比特币, 以太坊, 交易平台, 加密交易所, 区块链',
    'zh-tw': 'Backpack交易所, 加密貨幣交易, meme幣, 推薦返佣, 數位貨幣, 比特幣, 以太坊, 交易平台, 加密交易所, 區塊鏈'
  },
  exclusiveBonus: {
    en: '🎁 Exclusive Bonus: Up to 10% Referral Commission',
    'zh-cn': '🎁 专属福利：最高10%返佣奖励',
    'zh-tw': '🎁 專屬福利：最高10%返佣獎勵'
  },
  bonusDetails: {
    en: '• Register through this page to get exclusive newbie rewards\n• Earn up to 10% commission on referrals\n• Additional trading bonuses for active users\n• VIP customer support access',
    'zh-cn': '• 通过此页面注册获得独家新手奖励\n• 推荐返佣最高可达10%\n• 活跃用户额外交易奖励\n• VIP客户支持通道',
    'zh-tw': '• 透過此頁面註冊獲得獨家新手獎勵\n• 推薦返佣最高可達10%\n• 活躍用戶額外交易獎勵\n• VIP客戶支援通道'
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => translations[key]?.[language] || translations[key]?.en || key;

  // Update document title and meta tags when language changes
  useEffect(() => {
    document.title = t('seoTitle');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seoDescription'));
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', t('seoKeywords'));
    
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
          "url": "https://backpack-referral.vercel.app/",
          "description": t('seoDescription'),
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
          <div className="flex space-x-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded text-sm ${
                language === 'en' ? 'bg-black text-white' : 'bg-gray-200 text-black'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('zh-cn')}
              className={`px-3 py-1 rounded text-sm ${
                language === 'zh-cn' ? 'bg-black text-white' : 'bg-gray-200 text-black'
              }`}
            >
              简体中文
            </button>
            <button
              onClick={() => setLanguage('zh-tw')}
              className={`px-3 py-1 rounded text-sm ${
                language === 'zh-tw' ? 'bg-black text-white' : 'bg-gray-200 text-black'
              }`}
            >
              繁體中文
            </button>
          </div>
        </div>

        <div className="text-center mb-20">
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
            <h2 className="text-2xl font-bold mb-6 text-center text-orange-800">{t('exclusiveBonus')}</h2>
            <p className="text-gray-700 mb-4 whitespace-pre-line text-center">
              {t('bonusDetails')}
            </p>
            <div className="text-center">
              <p className="text-lg font-bold text-orange-700 mb-2">
                {language === 'en' ? '🚀 Register Now to Unlock All Benefits!' : language === 'zh-cn' ? '🚀 立即注册解锁所有福利！' : '🚀 立即註冊解鎖所有福利！'}
              </p>
              <p className="text-sm text-gray-600">
                {language === 'en' ? 'Limited time offer - Don\'t miss out!' : language === 'zh-cn' ? '限时优惠 - 不要错过！' : '限時優惠 - 不要錯過！'}
              </p>
            </div>
          </div>
        </div>

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
                {language === 'en' ? '💰 +10% Referral Bonus' : language === 'zh-cn' ? '💰 +10%推荐返佣' : '💰 +10%推薦返佣'}
              </p>
            </div>
            <a
              href="https://backpack.exchange/join/meme"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-sm mt-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('memeButton')}
            </a>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col">
            <div className="text-5xl mb-6">🌏</div>
            <h3 className="text-2xl font-bold text-black mb-4">{t('chineseTitle')}</h3>
            <p className="text-gray-600 mb-6 text-sm flex-grow">
              {t('chineseDescription')}
            </p>
            <div className="mb-6">
              <p className="text-xs text-gray-500 mb-2">🎯 {language === 'en' ? 'Exclusive Benefits:' : '专属优势:'}</p>
              <p className="text-sm font-semibold">{language === 'en' ? 'Chinese Support • Fast Deposits • Low Fees • 24/7 Service' : '中文支持 • 快速入金 • 低手续费 • 7x24客服'}</p>
              <p className="text-xs text-green-600 font-semibold mt-2">
                {language === 'en' ? '💰 +10% Referral Bonus' : language === 'zh-cn' ? '💰 +10%推荐返佣' : '💰 +10%推薦返佣'}
              </p>
            </div>
            <a
              href="https://backpack.exchange/join/zh-cn"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-sm mt-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('chineseButton')}
            </a>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col">
            <div className="text-5xl mb-6">🎮</div>
            <h3 className="text-2xl font-bold text-black mb-4">{t('gamingTitle')}</h3>
            <p className="text-gray-600 mb-6 text-sm flex-grow">
              {t('gamingDescription')}
            </p>
            <div className="mb-6">
              <p className="text-xs text-gray-500 mb-2">🎯 {language === 'en' ? 'Gaming Tokens:' : '游戏代币:'}</p>
              <p className="text-sm font-semibold">$RONIN • $IMX • $GALA • $ENJ • $MANA</p>
              <p className="text-xs text-green-600 font-semibold mt-2">
                {language === 'en' ? '💰 +10% Referral Bonus' : language === 'zh-cn' ? '💰 +10%推荐返佣' : '💰 +10%推薦返佣'}
              </p>
            </div>
            <a
              href="https://backpack.exchange/join/lol"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-sm mt-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('gamingButton')}
            </a>
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl p-12 mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t('whyTitle')}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-semibold mb-2">{language === 'en' ? 'Lightning Speed' : language === 'zh-cn' ? '闪电速度' : '閃電速度'}</h4>
              <p className="text-gray-300 text-sm">{language === 'en' ? 'Sub-millisecond execution' : language === 'zh-cn' ? '亚毫秒执行' : '亞毫秒執行'}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="text-lg font-semibold mb-2">{language === 'en' ? 'Fort Knox Security' : language === 'zh-cn' ? '银行级安全' : '銀行級安全'}</h4>
              <p className="text-gray-300 text-sm">{language === 'en' ? '$2B+ assets protected' : language === 'zh-cn' ? '20亿美元+资产保护' : '20億美元+資產保護'}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💎</div>
              <h4 className="text-lg font-semibold mb-2">{language === 'en' ? 'Lowest Fees' : language === 'zh-cn' ? '最低费率' : '最低費率'}</h4>
              <p className="text-gray-300 text-sm">{language === 'en' ? '0.02% maker fee' : language === 'zh-cn' ? '0.02%挂单费' : '0.02%掛單費'}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="text-lg font-semibold mb-2">{language === 'en' ? '24/7 Support' : language === 'zh-cn' ? '24/7支持' : '24/7支援'}</h4>
              <p className="text-gray-300 text-sm">{language === 'en' ? 'Always here for you' : language === 'zh-cn' ? '随时为您服务' : '隨時為您服務'}</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">{t('readyTitle')}</h3>
          <p className="text-gray-600 mb-6">
            {t('readyDescription')}
          </p>
          <a
            href="https://backpack.exchange/join/meme"
            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-12 rounded-full transition-colors duration-200 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('getStartedButton')}
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            {t('alreadyAccount')}{" "}
            <a href="https://backpack.exchange/join/meme" className="text-black hover:underline font-semibold">
              {t('signIn')}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
