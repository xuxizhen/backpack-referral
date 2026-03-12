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
    title: t('reviewTitle', lang as Language),
    description: t('reviewMetaDesc', lang as Language),
    alternates: { canonical: `https://www.backpackref.com/${lang}/review` },
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('reviewTitle', lang)}</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">{t('reviewMetaDesc', lang)}</p>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed text-lg">{t('reviewIntro', lang)}</p>
        </section>

        {/* Regulation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🏛️ {t('reviewRegulation', lang)}</h2>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">{t('reviewRegulationDesc', lang)}</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="font-bold text-black">Dubai VARA</p>
                <p className="text-sm text-gray-500">{t('trustBadge1', lang)}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="font-bold text-black">MiFID II</p>
                <p className="text-sm text-gray-500">{t('trustBadge2', lang)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">⚡ {t('reviewFeatures', lang)}</h2>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed mb-4">{t('reviewFeaturesDesc', lang)}</p>
            <div className="grid md:grid-cols-2 gap-3">
              {['Spot Trading', 'Perpetual Futures', 'DeFi Lending', 'Prediction Markets', 'Unified Cross-Margin', 'Zero-Fee Wallet Swaps'].map((feature) => (
                <div key={feature} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-200">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-700">✅ {t('reviewPros', lang)}</h3>
              <ul className="space-y-2">
                {[
                  { en: 'Dubai VARA + MiFID II licensed', 'zh-cn': '迪拜VARA + MiFID II持牌', 'zh-tw': '迪拜VARA + MiFID II持牌', fr: 'Licence Dubai VARA + MiFID II', pt: 'Licença Dubai VARA + MiFID II', it: 'Licenza Dubai VARA + MiFID II', de: 'Dubai VARA + MiFID II Lizenz', ja: 'ドバイVARA + MiFID IIライセンス', ko: '두바이 VARA + MiFID II 라이선스' },
                  { en: 'Ultra-low fees (0.02% maker)', 'zh-cn': '超低费用（0.02%挂单）', 'zh-tw': '超低費用（0.02%掛單）', fr: 'Frais ultra-bas (0.02% maker)', pt: 'Taxas ultra-baixas (0.02% maker)', it: 'Commissioni ultra-basse (0.02% maker)', de: 'Ultra-niedrige Gebühren (0.02% Maker)', ja: '超低手数料（0.02%メイカー）', ko: '초저수수료 (0.02% 메이커)' },
                  { en: 'Zero security breaches since 2022', 'zh-cn': '自2022年以来零安全事故', 'zh-tw': '自2022年以來零安全事故', fr: 'Zéro faille de sécurité depuis 2022', pt: 'Zero violações de segurança desde 2022', it: 'Zero violazioni dal 2022', de: 'Keine Sicherheitsverstöße seit 2022', ja: '2022年以降セキュリティ侵害ゼロ', ko: '2022년 이후 보안 침해 제로' },
                  { en: 'Unified cross-margin system', 'zh-cn': '统一跨保证金系统', 'zh-tw': '統一跨保證金系統', fr: 'Système de marge croisée unifiée', pt: 'Sistema de margem cruzada unificada', it: 'Sistema di margine incrociato unificato', de: 'Einheitliches Cross-Margin-System', ja: '統合クロスマージンシステム', ko: '통합 교차 마진 시스템' },
                  { en: 'Prediction markets + IPOs Onchain', 'zh-cn': '预测市场 + 链上IPO', 'zh-tw': '預測市場 + 鏈上IPO', fr: 'Marchés de prédiction + IPO Onchain', pt: 'Mercados de previsão + IPOs Onchain', it: 'Mercati predittivi + IPO Onchain', de: 'Prognosemärkte + IPOs Onchain', ja: '予測市場 + IPOs Onchain', ko: '예측 시장 + IPOs Onchain' },
                ].map((item, i) => (
                  <li key={i} className="text-sm text-gray-700">• {item[lang]}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-red-700">⚠️ {t('reviewCons', lang)}</h3>
              <ul className="space-y-2">
                {[
                  { en: 'Newer exchange (est. 2022)', 'zh-cn': '较新的交易所（2022年成立）', 'zh-tw': '較新的交易所（2022年成立）', fr: 'Exchange plus récent (est. 2022)', pt: 'Exchange mais novo (est. 2022)', it: 'Exchange più recente (est. 2022)', de: 'Neuere Börse (gegr. 2022)', ja: '新しい取引所（2022年設立）', ko: '비교적 새로운 거래소 (2022년 설립)' },
                  { en: 'Smaller token selection than top-3 exchanges', 'zh-cn': '代币种类少于前三大交易所', 'zh-tw': '代幣種類少於前三大交易所', fr: 'Moins de tokens que le top 3', pt: 'Menos tokens que as top 3', it: 'Meno token rispetto al top 3', de: 'Weniger Tokens als Top-3-Börsen', ja: 'トップ3取引所より少ないトークン選択', ko: '상위 3개 거래소보다 적은 토큰 선택' },
                  { en: 'Still growing fiat on-ramp options', 'zh-cn': '法币入金渠道仍在增长中', 'zh-tw': '法幣入金渠道仍在增長中', fr: 'Options fiat en développement', pt: 'Opções fiat em crescimento', it: 'Opzioni fiat in crescita', de: 'Fiat-Optionen wachsen noch', ja: '法定通貨オプションはまだ成長中', ko: '법정화폐 온램프 옵션 성장 중' },
                ].map((item, i) => (
                  <li key={i} className="text-sm text-gray-700">• {item[lang]}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">🏆 {t('reviewVerdict', lang)}</h2>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed text-lg">{t('reviewVerdictDesc', lang)}</p>
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
