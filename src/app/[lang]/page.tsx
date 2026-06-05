"use client";

import { use } from 'react';
import Image from 'next/image';
import { Language, t as translate, isValidLanguage } from '@/lib/i18n';
import CTA from '@/components/CTA';

// Google Analytics type definition
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = use(params);
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  const t = (key: string) => translate(key, lang);

  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const handleButtonClick = (community: string, url: string) => {
    trackEvent('register_button_click', { community, url, language: lang, event_category: 'conversion' });
  };

  const activities = [
    {
      titleKey: "activity1Title",
      content: t('activity1'),
      icon: "🚀",
      gradient: "from-indigo-600 to-blue-500",
      date: "Jun 4-10, 2026 UTC",
      url: "https://learn.backpack.exchange/blog/path-to-liftoff-spacex-shares"
    },
    {
      titleKey: "activity2Title",
      content: t('activity2'),
      icon: "🏛️",
      gradient: "from-gray-800 to-slate-600",
      date: "Jun 2, 2026",
      url: "https://learn.backpack.exchange/blog/introducing-backpack-securities"
    },
    {
      titleKey: "activity3Title",
      content: t('activity3'),
      icon: "🪙",
      gradient: "from-emerald-600 to-teal-500",
      date: "Mar 23, 2026",
      url: "https://learn.backpack.exchange/blog/backpack-token-bp-launch"
    },
    {
      titleKey: "activity4Title",
      content: t('activity4'),
      icon: "📊",
      gradient: "from-purple-600 to-pink-500",
      date: "May 22, 2026",
      url: "https://learn.backpack.exchange/articles/backpack-tokenomics"
    },
    {
      titleKey: "activity5Title",
      content: t('activity5'),
      icon: "🔒",
      gradient: "from-yellow-500 to-orange-500",
      date: "Mar 23, 2026",
      url: "https://learn.backpack.exchange/articles/how-to-stake-bp"
    },
    {
      titleKey: "activity6Title",
      content: t('activity6'),
      icon: "🤖",
      gradient: "from-cyan-600 to-blue-500",
      date: "Apr 14, 2026",
      url: "https://learn.backpack.exchange/blog/grid-bot-v2-major-upgrade-to-automated-trading-on-backpack"
    },
    {
      titleKey: "activity7Title",
      content: t('activity7'),
      icon: "💸",
      gradient: "from-green-500 to-emerald-500",
      date: "Mar 10, 2026",
      url: "https://learn.backpack.exchange/blog/backpack-wallet-zero-fees-swaps-bridges"
    },
    {
      titleKey: "activity8Title",
      content: t('activity8'),
      icon: "💰",
      gradient: "from-amber-600 to-yellow-500",
      date: "Apr 30, 2026",
      url: "https://learn.backpack.exchange/blog/btc-yield-boost"
    },
    {
      titleKey: "activity9Title",
      content: t('activity9'),
      icon: "📈",
      gradient: "from-red-500 to-pink-500",
      date: "May 28, 2026",
      url: "https://learn.backpack.exchange/blog/trading-trail-week-3"
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
          <CTA lang={lang} />
          <p className="text-sm text-gray-500 mt-4">
            {t('inviteHint')}{' '}
            <a
              href="https://x.com/mikexuusa"
              className="text-black font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('footerXLinkText')}
            </a>
          </p>
        </div>

        {/* Why Choose Backpack */}
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

        {/* Hot Activities Section */}
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
                <h3 className="text-lg font-bold mb-3">{t(activity.titleKey)}</h3>
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

        {/* BP Staking Benefits */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-slate-950 to-black text-white rounded-2xl p-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-sm font-semibold text-emerald-300 mb-2">{t('bpProgramEyebrow')}</p>
              <h2 className="text-3xl font-bold mb-4">{t('bpProgramTitle')}</h2>
              <p className="text-gray-300">{t('bpProgramDetails')}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { key: 'bpBenefit1', icon: '💸' },
                { key: 'bpBenefit2', icon: '🏦' },
                { key: 'bpBenefit3', icon: '📈' },
                { key: 'bpBenefit4', icon: '⚡' },
                { key: 'bpBenefit5', icon: '💳' },
                { key: 'bpBenefit6', icon: '🛡️' }
              ].map((benefit) => (
                <div key={benefit.key} className="bg-white/10 border border-white/10 rounded-xl p-5">
                  <div className="text-2xl mb-3">{benefit.icon}</div>
                  <p className="text-sm leading-relaxed text-gray-200">{t(benefit.key)}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center max-w-3xl mx-auto mb-6">
              {t('bpProgramDisclaimer')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://backpack.exchange/join/meme"
                onClick={() => handleButtonClick('bp_program_referral', 'https://backpack.exchange/join/meme')}
                className="inline-block bg-white hover:bg-gray-100 text-black font-bold py-3 px-8 rounded-full text-sm transition-colors duration-200 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('registerButton')}
              </a>
              <a
                href="https://learn.backpack.exchange/articles/how-to-stake-bp"
                onClick={() => handleButtonClick('bp_staking_learn', 'https://learn.backpack.exchange/articles/how-to-stake-bp')}
                className="inline-block bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold py-3 px-8 rounded-full text-sm transition-colors duration-200 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('bpLearnMore')}
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
              <p className="text-xs text-green-600 font-semibold mb-4">{t('referralBenefitLabel')}</p>
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
              <p className="text-xs text-green-600 font-semibold mb-4">{t('referralBenefitLabel')}</p>
              <a
                href="https://backpack.exchange/join/meme"
                className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm mt-auto"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleButtonClick('language_community', 'https://backpack.exchange/join/meme')}
              >
                {t('registerButton')}
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col">
              <div className="text-5xl mb-6">🎮</div>
              <h3 className="text-2xl font-bold text-black mb-4">{t('gamingTitle')}</h3>
              <p className="text-gray-600 mb-6 text-sm flex-grow">{t('gamingDescription')}</p>
              <p className="text-xs text-green-600 font-semibold mb-4">{t('referralBenefitLabel')}</p>
              <a
                href="https://backpack.exchange/join/meme"
                className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm mt-auto"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleButtonClick('gaming', 'https://backpack.exchange/join/meme')}
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
          <CTA lang={lang} variant="secondary" />
          <p className="text-sm mt-5 opacity-90">
            {t('inviteHint')}{' '}
            <a
              href="https://x.com/mikexuusa"
              className="font-semibold underline decoration-white/60 underline-offset-4 hover:decoration-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('footerXLinkText')}
            </a>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="mb-6">
            <p className="font-semibold text-black">{t('footerContactTitle')}</p>
            <p className="text-gray-500 text-sm mt-1">
              {t('footerContactText')}{' '}
              <a
                href="https://x.com/mikexuusa"
                className="text-black hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footerXLinkText')}
              </a>
            </p>
          </div>
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
