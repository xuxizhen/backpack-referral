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
    title: t('vsBinanceTitle', lang as Language),
    description: t('vsBinanceMetaDesc', lang as Language),
    alternates: { canonical: `https://www.backpackref.com/${lang}/vs-binance` },
  };
}

export default async function VsBinancePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  const categories: Array<{
    category: Record<Language, string>;
    backpack: string;
    binance: string;
    winner: 'backpack' | 'binance' | 'tie';
  }> = [
    {
      category: { en: 'Maker Fee', 'zh-cn': '挂单费', 'zh-tw': '掛單費', fr: 'Frais Maker', pt: 'Taxa Maker', it: 'Commissione Maker', de: 'Maker-Gebühr', ja: 'メイカー手数料', ko: '메이커 수수료' },
      backpack: '0.02%',
      binance: '0.10%',
      winner: 'backpack',
    },
    {
      category: { en: 'Taker Fee', 'zh-cn': '吃单费', 'zh-tw': '吃單費', fr: 'Frais Taker', pt: 'Taxa Taker', it: 'Commissione Taker', de: 'Taker-Gebühr', ja: 'テイカー手数料', ko: '테이커 수수료' },
      backpack: '0.06%',
      binance: '0.10%',
      winner: 'backpack',
    },
    {
      category: { en: 'Regulation', 'zh-cn': '监管', 'zh-tw': '監管', fr: 'Réglementation', pt: 'Regulamentação', it: 'Regolamentazione', de: 'Regulierung', ja: '規制', ko: '규제' },
      backpack: 'VARA + MiFID II',
      binance: 'VASP (limited)',
      winner: 'backpack',
    },
    {
      category: { en: 'Security Record', 'zh-cn': '安全记录', 'zh-tw': '安全記錄', fr: 'Historique Sécurité', pt: 'Histórico de Segurança', it: 'Record Sicurezza', de: 'Sicherheitsbilanz', ja: 'セキュリティ実績', ko: '보안 기록' },
      backpack: lang === 'en' ? 'Zero breaches' : lang === 'zh-cn' ? '零事故' : lang === 'zh-tw' ? '零事故' : lang === 'ja' ? '侵害ゼロ' : lang === 'ko' ? '침해 제로' : 'Zero breaches',
      binance: lang === 'en' ? '$570M hack (2022)' : lang === 'zh-cn' ? '5.7亿美元被黑(2022)' : lang === 'zh-tw' ? '5.7億美元被駭(2022)' : lang === 'ja' ? '5.7億ドルハック(2022)' : lang === 'ko' ? '5.7억 달러 해킹(2022)' : '$570M hack (2022)',
      winner: 'backpack',
    },
    {
      category: { en: 'Unified Margin', 'zh-cn': '统一保证金', 'zh-tw': '統一保證金', fr: 'Marge Unifiée', pt: 'Margem Unificada', it: 'Margine Unificato', de: 'Einheitliche Margin', ja: '統合マージン', ko: '통합 마진' },
      backpack: '✅',
      binance: '✅',
      winner: 'tie',
    },
    {
      category: { en: 'Prediction Markets', 'zh-cn': '预测市场', 'zh-tw': '預測市場', fr: 'Marchés de Prédiction', pt: 'Mercados de Previsão', it: 'Mercati Predittivi', de: 'Prognosemärkte', ja: '予測市場', ko: '예측 시장' },
      backpack: '✅',
      binance: '❌',
      winner: 'backpack',
    },
    {
      category: { en: 'IPOs Onchain', 'zh-cn': '链上IPO', 'zh-tw': '鏈上IPO', fr: 'IPO Onchain', pt: 'IPOs Onchain', it: 'IPO Onchain', de: 'IPOs Onchain', ja: 'IPOs Onchain', ko: 'IPOs Onchain' },
      backpack: '✅',
      binance: '❌',
      winner: 'backpack',
    },
    {
      category: { en: 'Zero-Fee Wallet', 'zh-cn': '零手续费钱包', 'zh-tw': '零手續費錢包', fr: 'Wallet Sans Frais', pt: 'Carteira Sem Taxas', it: 'Wallet Zero Commissioni', de: 'Gebührenfreies Wallet', ja: '手数料ゼロウォレット', ko: '수수료 제로 지갑' },
      backpack: '✅',
      binance: '❌',
      winner: 'backpack',
    },
    {
      category: { en: 'Number of Tokens', 'zh-cn': '代币数量', 'zh-tw': '代幣數量', fr: 'Nombre de Tokens', pt: 'Número de Tokens', it: 'Numero di Token', de: 'Anzahl Tokens', ja: 'トークン数', ko: '토큰 수' },
      backpack: '100+',
      binance: '400+',
      winner: 'binance',
    },
    {
      category: { en: 'Users', 'zh-cn': '用户数', 'zh-tw': '用戶數', fr: 'Utilisateurs', pt: 'Usuários', it: 'Utenti', de: 'Nutzer', ja: 'ユーザー数', ko: '사용자 수' },
      backpack: '5M+',
      binance: '150M+',
      winner: 'binance',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('vsBinanceTitle', lang)}</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">{t('vsBinanceMetaDesc', lang)}</p>

        {/* Comparison Table */}
        <section className="mb-12">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-semibold"></th>
                  <th className="text-center p-4 font-semibold text-purple-600">Backpack</th>
                  <th className="text-center p-4 font-semibold text-yellow-600">Binance</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="p-4 font-medium">{row.category[lang]}</td>
                    <td className={`p-4 text-center ${row.winner === 'backpack' ? 'text-green-600 font-bold' : ''}`}>
                      {row.backpack} {row.winner === 'backpack' && '✨'}
                    </td>
                    <td className={`p-4 text-center ${row.winner === 'binance' ? 'text-green-600 font-bold' : ''}`}>
                      {row.binance} {row.winner === 'binance' && '✨'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {lang === 'en' ? 'Why Traders Choose Backpack Over Binance' :
             lang === 'zh-cn' ? '交易者选择Backpack而非币安的原因' :
             lang === 'zh-tw' ? '交易者選擇Backpack而非幣安的原因' :
             lang === 'ja' ? 'トレーダーがBinanceよりBackpackを選ぶ理由' :
             lang === 'ko' ? '트레이더가 Binance 대신 Backpack을 선택하는 이유' :
             'Why Traders Choose Backpack Over Binance'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '💰', title: { en: '5x Lower Fees', 'zh-cn': '费用低5倍', 'zh-tw': '費用低5倍', fr: 'Frais 5x moins chers', pt: 'Taxas 5x menores', it: 'Commissioni 5x inferiori', de: '5x niedrigere Gebühren', ja: '5倍低い手数料', ko: '5배 저렴한 수수료' }, desc: { en: '0.02% vs 0.10% maker fees means significant savings for active traders.', 'zh-cn': '0.02%对比0.10%的挂单费，为活跃交易者节省大量成本。', 'zh-tw': '0.02%對比0.10%的掛單費，為活躍交易者節省大量成本。', fr: '0.02% vs 0.10% de frais maker signifie des économies importantes.', pt: '0.02% vs 0.10% de taxa maker significa economia significativa.', it: '0.02% vs 0.10% di commissione maker significa risparmi significativi.', de: '0.02% vs 0.10% Maker-Gebühren bedeuten erhebliche Einsparungen.', ja: '0.02%対0.10%のメイカー手数料はアクティブトレーダーにとって大きな節約。', ko: '0.02% vs 0.10% 메이커 수수료는 활발한 트레이더에게 상당한 절감을 의미합니다.' } },
              { icon: '🏛️', title: { en: 'Stronger Regulation', 'zh-cn': '更强的监管', 'zh-tw': '更強的監管', fr: 'Réglementation plus forte', pt: 'Regulamentação mais forte', it: 'Regolamentazione più forte', de: 'Stärkere Regulierung', ja: 'より強力な規制', ko: '더 강력한 규제' }, desc: { en: 'VARA + MiFID II dual licensing vs limited VASP registrations. Better protection for your assets.', 'zh-cn': 'VARA + MiFID II双牌照 vs 有限的VASP注册。更好地保护您的资产。', 'zh-tw': 'VARA + MiFID II雙牌照 vs 有限的VASP註冊。更好地保護您的資產。', fr: 'Double licence VARA + MiFID II vs enregistrements VASP limités.', pt: 'Dupla licença VARA + MiFID II vs registros VASP limitados.', it: 'Doppia licenza VARA + MiFID II vs registrazioni VASP limitate.', de: 'VARA + MiFID II Doppellizenz vs begrenzte VASP-Registrierungen.', ja: 'VARA + MiFID IIデュアルライセンス vs 限定的なVASP登録。', ko: 'VARA + MiFID II 이중 라이선스 vs 제한된 VASP 등록.' } },
              { icon: '🔮', title: { en: 'Unique Features', 'zh-cn': '独特功能', 'zh-tw': '獨特功能', fr: 'Fonctionnalités uniques', pt: 'Recursos únicos', it: 'Funzionalità uniche', de: 'Einzigartige Funktionen', ja: 'ユニークな機能', ko: '고유한 기능' }, desc: { en: 'Cross-margined prediction markets and IPOs Onchain are exclusive to Backpack. Trade and invest in ways not possible elsewhere.', 'zh-cn': '跨保证金预测市场和链上IPO是Backpack独有的。以其他平台无法实现的方式交易和投资。', 'zh-tw': '跨保證金預測市場和鏈上IPO是Backpack獨有的。以其他平台無法實現的方式交易和投資。', fr: 'Les marchés de prédiction et les IPO Onchain sont exclusifs à Backpack.', pt: 'Mercados de previsão e IPOs Onchain são exclusivos da Backpack.', it: 'Mercati predittivi e IPO Onchain sono esclusivi di Backpack.', de: 'Prognosemärkte und IPOs Onchain sind exklusiv bei Backpack.', ja: 'クロスマージン予測市場とIPOs OnchainはBackpack独自の機能です。', ko: '교차 마진 예측 시장과 IPOs Onchain은 Backpack만의 독점 기능입니다.' } },
              { icon: '🛡️', title: { en: 'Clean Security Record', 'zh-cn': '清白的安全记录', 'zh-tw': '清白的安全記錄', fr: 'Historique de sécurité propre', pt: 'Histórico de segurança limpo', it: 'Record di sicurezza pulito', de: 'Saubere Sicherheitsbilanz', ja: 'クリーンなセキュリティ実績', ko: '깨끗한 보안 기록' }, desc: { en: 'Zero security breaches since launch, while Binance suffered a $570M bridge hack in 2022.', 'zh-cn': '自上线以来零安全事故，而币安在2022年遭受了5.7亿美元的跨链桥攻击。', 'zh-tw': '自上線以來零安全事故，而幣安在2022年遭受了5.7億美元的跨鏈橋攻擊。', fr: 'Zéro faille depuis le lancement, tandis que Binance a subi un hack de 570M$ en 2022.', pt: 'Zero violações desde o lançamento, enquanto a Binance sofreu um hack de $570M em 2022.', it: 'Zero violazioni dal lancio, mentre Binance ha subito un hack da $570M nel 2022.', de: 'Null Sicherheitsverstöße seit dem Start, während Binance 2022 einen $570M Hack erlitt.', ja: 'ローンチ以来セキュリティ侵害ゼロ。一方Binanceは2022年に5.7億ドルのブリッジハックを受けました。', ko: '출시 이후 보안 침해 제로, 반면 Binance는 2022년 5.7억 달러 브리지 해킹을 당했습니다.' } },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title[lang]}</h3>
                <p className="text-sm text-gray-600">{item.desc[lang]}</p>
              </div>
            ))}
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
