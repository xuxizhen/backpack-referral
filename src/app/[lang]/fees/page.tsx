import type { Metadata } from 'next';
import { Language, t, isValidLanguage, generateStaticParams as generateLangParams } from '@/lib/i18n';
import CTA from '@/components/CTA';

export function generateStaticParams() {
  return generateLangParams();
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};
  return {
    title: t('feesTitle', lang as Language),
    description: t('feesMetaDesc', lang as Language),
    alternates: { canonical: `https://www.backpackref.com/${lang}/fees` },
  };
}

export default async function FeesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  const spotFees = [
    { tier: 'Base', maker: '0.02%', taker: '0.06%' },
    { tier: 'VIP 1', maker: '0.016%', taker: '0.048%' },
    { tier: 'VIP 2', maker: '0.012%', taker: '0.036%' },
    { tier: 'VIP 3', maker: '0.008%', taker: '0.024%' },
  ];

  const comparison = [
    { exchange: 'Backpack', maker: '0.02%', taker: '0.06%', highlight: true },
    { exchange: 'Binance', maker: '0.10%', taker: '0.10%', highlight: false },
    { exchange: 'Coinbase', maker: '0.40%', taker: '0.60%', highlight: false },
    { exchange: 'Kraken', maker: '0.16%', taker: '0.26%', highlight: false },
    { exchange: 'OKX', maker: '0.08%', taker: '0.10%', highlight: false },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('feesTitle', lang)}</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">{t('feesMetaDesc', lang)}</p>

        {/* Spot Fees */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">📊 {t('feesSpotTitle', lang)}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-semibold">Tier</th>
                  <th className="text-left p-4 font-semibold">{t('maker', lang)}</th>
                  <th className="text-left p-4 font-semibold">{t('taker', lang)}</th>
                </tr>
              </thead>
              <tbody>
                {spotFees.map((fee, i) => (
                  <tr key={i} className={i === 0 ? 'bg-green-50 font-semibold' : 'border-b border-gray-100'}>
                    <td className="p-4">{fee.tier}</td>
                    <td className="p-4 text-green-600">{fee.maker}</td>
                    <td className="p-4">{fee.taker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            {lang === 'en' ? 'Rated 8.75/10 for fees by independent reviewers.' :
             lang === 'zh-cn' ? '独立评测机构费用评分8.75/10。' :
             lang === 'zh-tw' ? '獨立評測機構費用評分8.75/10。' :
             lang === 'ja' ? '独立レビュー8.75/10の評価。' :
             lang === 'ko' ? '독립 리뷰어로부터 수수료 8.75/10 평가.' :
             'Rated 8.75/10 for fees by independent reviewers.'}
          </p>
        </section>

        {/* Futures Fees */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">📈 {t('feesFuturesTitle', lang)}</h2>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">{t('maker', lang)}</p>
                <p className="text-3xl font-bold text-green-600">0.02%</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">{t('taker', lang)}</p>
                <p className="text-3xl font-bold text-black">0.06%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deposit & Withdrawal */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">💰 {t('feesDepositTitle', lang)}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3">
                {lang === 'en' ? 'Deposits' : lang === 'zh-cn' ? '充值' : lang === 'zh-tw' ? '充值' : lang === 'ja' ? '入金' : lang === 'ko' ? '입금' : 'Deposits'}
              </h3>
              <p className="text-3xl font-bold text-green-600 mb-2">
                {lang === 'en' ? 'FREE' : lang === 'zh-cn' ? '免费' : lang === 'zh-tw' ? '免費' : lang === 'ja' ? '無料' : lang === 'ko' ? '무료' : 'FREE'}
              </p>
              <p className="text-sm text-gray-600">
                {lang === 'en' ? 'Zero fees for all crypto deposits' : lang === 'zh-cn' ? '所有加密货币充值零手续费' : lang === 'zh-tw' ? '所有加密貨幣充值零手續費' : lang === 'ja' ? 'すべての暗号通貨入金手数料ゼロ' : lang === 'ko' ? '모든 암호화폐 입금 수수료 제로' : 'Zero fees for all crypto deposits'}
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3">
                {lang === 'en' ? 'Wallet Swaps & Bridges' : lang === 'zh-cn' ? '钱包兑换与跨链' : lang === 'zh-tw' ? '錢包兌換與跨鏈' : lang === 'ja' ? 'ウォレットスワップ&ブリッジ' : lang === 'ko' ? '지갑 스왑 & 브리지' : 'Wallet Swaps & Bridges'}
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">
                {lang === 'en' ? 'ZERO FEE' : lang === 'zh-cn' ? '零手续费' : lang === 'zh-tw' ? '零手續費' : lang === 'ja' ? '手数料ゼロ' : lang === 'ko' ? '수수료 제로' : 'ZERO FEE'}
              </p>
              <p className="text-sm text-gray-600">
                {lang === 'en' ? 'All swaps and bridges across all supported networks' : lang === 'zh-cn' ? '所有支持网络的兑换和跨链桥接' : lang === 'zh-tw' ? '所有支援網路的兌換和跨鏈橋接' : lang === 'ja' ? '全サポートネットワークのスワップとブリッジ' : lang === 'ko' ? '모든 지원 네트워크의 스왑 및 브리지' : 'All swaps and bridges across all supported networks'}
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">⚖️ {t('feesComparison', lang)}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-semibold">Exchange</th>
                  <th className="text-left p-4 font-semibold">{t('maker', lang)}</th>
                  <th className="text-left p-4 font-semibold">{t('taker', lang)}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={row.highlight ? 'bg-green-50 font-bold' : 'border-b border-gray-100'}>
                    <td className="p-4">{row.exchange} {row.highlight && '⭐'}</td>
                    <td className="p-4">{row.maker}</td>
                    <td className="p-4">{row.taker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">{t('readyTitle', lang)}</h2>
          <p className="text-lg mb-8 opacity-90">{t('readyDescription', lang)}</p>
          <CTA lang={lang} variant="secondary" />
        </div>
      </div>
    </div>
  );
}
