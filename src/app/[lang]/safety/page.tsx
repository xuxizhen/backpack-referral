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
    title: t('safetyTitle', lang as Language),
    description: t('safetyMetaDesc', lang as Language),
    alternates: { canonical: `https://www.backpackref.com/${lang}/safety` },
  };
}

export default async function SafetyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('safetyTitle', lang)}</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">{t('safetyMetaDesc', lang)}</p>

        {/* Safety Score */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center mb-12 border border-green-200">
          <p className="text-6xl font-bold text-green-600 mb-2">✅</p>
          <p className="text-2xl font-bold text-gray-800">
            {lang === 'en' ? 'Yes, Backpack Exchange is safe.' :
             lang === 'zh-cn' ? '是的，Backpack交易所是安全的。' :
             lang === 'zh-tw' ? '是的，Backpack交易所是安全的。' :
             lang === 'ja' ? 'はい、Backpack Exchangeは安全です。' :
             lang === 'ko' ? '네, Backpack Exchange는 안전합니다.' :
             lang === 'fr' ? 'Oui, Backpack Exchange est sûr.' :
             lang === 'pt' ? 'Sim, a Backpack Exchange é segura.' :
             lang === 'it' ? 'Sì, Backpack Exchange è sicuro.' :
             'Ja, Backpack Exchange ist sicher.'}
          </p>
          <p className="text-gray-600 mt-2">
            {lang === 'en' ? 'Dual-licensed, zero breaches, institutional-grade security' :
             lang === 'zh-cn' ? '双牌照、零事故、机构级安全' :
             lang === 'zh-tw' ? '雙牌照、零事故、機構級安全' :
             lang === 'ja' ? 'デュアルライセンス、侵害ゼロ、機関投資家レベルのセキュリティ' :
             lang === 'ko' ? '이중 라이선스, 침해 제로, 기관급 보안' :
             'Dual-licensed, zero breaches, institutional-grade security'}
          </p>
        </div>

        {/* Regulation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">🏛️ {t('safetyRegulation', lang)}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="font-bold text-lg mb-2">Dubai VARA</h3>
              <p className="text-sm text-gray-700">
                {lang === 'en' ? 'Backpack holds a full Virtual Asset Service Provider license from the Dubai Virtual Assets Regulatory Authority (VARA), one of the world\'s most comprehensive crypto regulatory frameworks.' :
                 lang === 'zh-cn' ? 'Backpack持有迪拜虚拟资产监管局（VARA）颁发的完整虚拟资产服务提供商牌照，这是全球最全面的加密监管框架之一。' :
                 lang === 'zh-tw' ? 'Backpack持有迪拜虛擬資產監管局（VARA）頒發的完整虛擬資產服務提供商牌照，這是全球最全面的加密監管框架之一。' :
                 lang === 'ja' ? 'Backpackはドバイ仮想資産規制局（VARA）から完全な仮想資産サービスプロバイダーライセンスを取得しています。' :
                 lang === 'ko' ? 'Backpack은 두바이 가상자산 규제 당국(VARA)으로부터 완전한 가상자산 서비스 제공자 라이선스를 보유하고 있습니다.' :
                 'Backpack holds a full VASP license from Dubai VARA.'}
              </p>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
              <h3 className="font-bold text-lg mb-2">EU MiFID II</h3>
              <p className="text-sm text-gray-700">
                {lang === 'en' ? 'Through the acquisition of FTX EU, Backpack gained MiFID II regulatory status in the European Union, providing the highest level of financial regulation for European users.' :
                 lang === 'zh-cn' ? '通过收购FTX EU，Backpack获得了欧盟MiFID II监管资质，为欧洲用户提供最高级别的金融监管保护。' :
                 lang === 'zh-tw' ? '通過收購FTX EU，Backpack獲得了歐盟MiFID II監管資質，為歐洲用戶提供最高級別的金融監管保護。' :
                 lang === 'ja' ? 'FTX EUの買収を通じて、BackpackはEUでMiFID II規制ステータスを取得し、ヨーロッパのユーザーに最高レベルの金融規制を提供しています。' :
                 lang === 'ko' ? 'FTX EU 인수를 통해 Backpack은 EU에서 MiFID II 규제 자격을 획득하여 유럽 사용자에게 최고 수준의 금융 규제를 제공합니다.' :
                 'Through FTX EU acquisition, Backpack gained MiFID II regulatory status.'}
              </p>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">🔒 {t('safetySecurity', lang)}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🧊', title: { en: 'Cold Storage', 'zh-cn': '冷存储', 'zh-tw': '冷儲存', fr: 'Stockage à Froid', pt: 'Armazenamento a Frio', it: 'Cold Storage', de: 'Cold Storage', ja: 'コールドストレージ', ko: '콜드 스토리지' }, desc: { en: 'Majority of user assets stored in air-gapped cold wallets, protected from online threats.', 'zh-cn': '大部分用户资产存储在隔离的冷钱包中，免受在线威胁。', 'zh-tw': '大部分用戶資產存儲在隔離的冷錢包中，免受線上威脅。', fr: 'La majorité des actifs stockés dans des portefeuilles froids hors ligne.', pt: 'A maioria dos ativos armazenados em carteiras frias offline.', it: 'La maggior parte degli asset in cold wallet offline.', de: 'Großteil der Vermögenswerte in Cold Wallets gespeichert.', ja: 'ユーザー資産の大部分をエアギャップのコールドウォレットに保管。', ko: '사용자 자산의 대부분을 에어갭 콜드 월렛에 보관.' } },
              { icon: '🔐', title: { en: '2FA Authentication', 'zh-cn': '双重认证', 'zh-tw': '雙重認證', fr: 'Authentification 2FA', pt: 'Autenticação 2FA', it: 'Autenticazione 2FA', de: '2FA-Authentifizierung', ja: '2FA認証', ko: '2FA 인증' }, desc: { en: 'Two-factor authentication supported via authenticator apps and hardware security keys.', 'zh-cn': '支持通过认证器应用和硬件安全密钥进行双重认证。', 'zh-tw': '支持通過認證器應用和硬體安全密鑰進行雙重認證。', fr: 'Authentification à deux facteurs via applications et clés de sécurité.', pt: 'Autenticação de dois fatores via apps e chaves de segurança.', it: 'Autenticazione a due fattori via app e chiavi di sicurezza.', de: 'Zwei-Faktor-Authentifizierung über Apps und Sicherheitsschlüssel.', ja: '認証アプリとハードウェアセキュリティキーによる二要素認証。', ko: '인증 앱과 하드웨어 보안 키를 통한 이중 인증.' } },
              { icon: '🛡️', title: { en: 'Zero Breaches', 'zh-cn': '零事故', 'zh-tw': '零事故', fr: 'Zéro Faille', pt: 'Zero Violações', it: 'Zero Violazioni', de: 'Null Verstöße', ja: '侵害ゼロ', ko: '침해 제로' }, desc: { en: 'Since launching in 2022, Backpack Exchange has maintained a perfect security record with zero hacks or breaches.', 'zh-cn': '自2022年上线以来，Backpack交易所保持着完美的安全记录，零黑客攻击或安全事故。', 'zh-tw': '自2022年上線以來，Backpack交易所保持著完美的安全記錄，零駭客攻擊或安全事故。', fr: 'Depuis son lancement en 2022, Backpack maintient un dossier de sécurité parfait.', pt: 'Desde o lançamento em 2022, a Backpack mantém um histórico de segurança perfeito.', it: 'Dal lancio nel 2022, Backpack ha mantenuto un record di sicurezza perfetto.', de: 'Seit dem Start 2022 hat Backpack eine perfekte Sicherheitsbilanz.', ja: '2022年のローンチ以来、Backpack Exchangeはハッキングや侵害ゼロの完璧なセキュリティ実績を維持しています。', ko: '2022년 출시 이후 Backpack Exchange는 해킹이나 침해 제로의 완벽한 보안 기록을 유지하고 있습니다.' } },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title[lang]}</h3>
                <p className="text-sm text-gray-600">{item.desc[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">👔 {t('safetyLeadership', lang)}</h2>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">Mark Wetjen</h3>
            <p className="text-sm text-purple-600 mb-3">
              {lang === 'en' ? 'President of Backpack US | Former CFTC Commissioner' :
               lang === 'zh-cn' ? 'Backpack US总裁 | 前CFTC委员' :
               lang === 'zh-tw' ? 'Backpack US總裁 | 前CFTC委員' :
               lang === 'ja' ? 'Backpack US社長 | 元CFTC委員' :
               lang === 'ko' ? 'Backpack US 사장 | 전 CFTC 위원' :
               'President of Backpack US | Former CFTC Commissioner'}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {lang === 'en' ? 'The appointment of Mark Wetjen, a former Commissioner of the U.S. Commodity Futures Trading Commission (CFTC), as President of Backpack US demonstrates the company\'s commitment to regulatory excellence and building trust with institutional and retail users alike.' :
               lang === 'zh-cn' ? '任命前美国商品期货交易委员会（CFTC）委员Mark Wetjen为Backpack US总裁，展示了公司对合规卓越的承诺，以及建立机构和零售用户信任的决心。' :
               lang === 'zh-tw' ? '任命前美國商品期貨交易委員會（CFTC）委員Mark Wetjen為Backpack US總裁，展示了公司對合規卓越的承諾，以及建立機構和零售用戶信任的決心。' :
               lang === 'ja' ? '元CFTC委員のMark WetjenをBackpack US社長に任命したことは、規制の卓越性と機関投資家・個人投資家双方の信頼構築への強い姿勢を示しています。' :
               lang === 'ko' ? '전 CFTC 위원 Mark Wetjen을 Backpack US 사장으로 임명한 것은 규제 우수성에 대한 헌신과 기관 및 개인 사용자의 신뢰 구축을 보여줍니다.' :
               'The appointment of Mark Wetjen demonstrates commitment to regulatory excellence.'}
            </p>
          </div>
        </section>

        {/* FTX EU Acquisition */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">🤝 {t('safetyFTX', lang)}</h2>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">
              {lang === 'en' ? 'Backpack acquired FTX EU, the European arm of the former FTX exchange, specifically to help recover funds for affected users and to gain its MiFID II regulatory license. This acquisition demonstrates Backpack\'s commitment to doing right by the crypto community and operating within the strictest regulatory frameworks available.' :
               lang === 'zh-cn' ? 'Backpack收购了前FTX交易所的欧洲分支FTX EU，旨在帮助受影响用户追回资金并获得其MiFID II监管牌照。此次收购展示了Backpack对加密社区负责的态度以及在最严格的监管框架内运营的承诺。' :
               lang === 'zh-tw' ? 'Backpack收購了前FTX交易所的歐洲分支FTX EU，旨在幫助受影響用戶追回資金並獲得其MiFID II監管牌照。此次收購展示了Backpack對加密社群負責的態度以及在最嚴格的監管框架內運營的承諾。' :
               lang === 'ja' ? 'Backpackは旧FTX取引所のヨーロッパ部門であるFTX EUを買収しました。これは影響を受けたユーザーの資金回収を支援し、MiFID II規制ライセンスを取得するためです。' :
               lang === 'ko' ? 'Backpack은 영향을 받은 사용자의 자금 회수를 돕고 MiFID II 규제 라이선스를 획득하기 위해 전 FTX 거래소의 유럽 지사인 FTX EU를 인수했습니다.' :
               'Backpack acquired FTX EU to help recover user funds and gain MiFID II regulatory status.'}
            </p>
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
