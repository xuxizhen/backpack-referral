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
    title: t('referralTitle', lang as Language),
    description: t('referralMetaDesc', lang as Language),
    alternates: { canonical: `https://www.backpackref.com/${lang}/referral` },
  };
}

export default async function ReferralPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  const howItWorks = [
    {
      step: 1,
      icon: '📝',
      title: { en: 'Sign Up with Referral Link', 'zh-cn': '通过邀请链接注册', 'zh-tw': '透過邀請連結註冊', fr: 'Inscrivez-vous avec le lien', pt: 'Cadastre-se com o link', it: 'Registrati con il link', de: 'Melden Sie sich an', ja: '紹介リンクで登録', ko: '추천 링크로 가입' },
      desc: { en: 'Register on Backpack Exchange using our single referral link. Any referral benefits or fee rebates are subject to Backpack official terms.', 'zh-cn': '使用我们的统一邀请链接注册 Backpack Exchange。任何邀请权益或手续费返佣均以 Backpack 官方条款为准。', 'zh-tw': '使用我們的統一邀請連結註冊 Backpack Exchange。任何邀請權益或手續費返佣均以 Backpack 官方條款為準。', fr: 'Inscrivez-vous sur Backpack Exchange via notre lien unique. Les avantages dépendent des conditions officielles.', pt: 'Registre-se na Backpack Exchange com nosso link único. Benefícios dependem dos termos oficiais.', it: 'Registrati su Backpack Exchange con il nostro link unico. I benefici dipendono dai termini ufficiali.', de: 'Registrieren Sie sich mit unserem einheitlichen Link. Vorteile hängen von offiziellen Backpack-Bedingungen ab.', ja: '統一紹介リンクでBackpack Exchangeに登録します。紹介特典や手数料還元は公式条件に従います。', ko: '단일 추천 링크로 Backpack Exchange에 가입하세요. 추천 혜택과 수수료 리베이트는 공식 약관에 따릅니다.' },
    },
    {
      step: 2,
      icon: '💱',
      title: { en: 'Trade on the Platform', 'zh-cn': '在平台上交易', 'zh-tw': '在平台上交易', fr: 'Tradez sur la plateforme', pt: 'Negocie na plataforma', it: 'Fai trading sulla piattaforma', de: 'Handeln Sie auf der Plattform', ja: 'プラットフォームで取引', ko: '플랫폼에서 거래' },
      desc: { en: 'Trade normally and review your account dashboard for any referral rebates or BP staking benefits that apply to your region and tier.', 'zh-cn': '正常交易后，可在账户面板查看适用于您所在地区和等级的邀请返佣或 BP 质押权益。', 'zh-tw': '正常交易後，可在帳戶面板查看適用於您所在地區和等級的邀請返佣或 BP 質押權益。', fr: 'Tradez normalement et consultez votre tableau de bord pour les rebates ou avantages BP applicables.', pt: 'Negocie normalmente e verifique rebates ou benefícios BP aplicáveis no painel.', it: 'Fai trading normalmente e controlla dashboard per rebate o benefici BP applicabili.', de: 'Handeln Sie normal und prüfen Sie Ihr Dashboard für geltende Rebates oder BP Vorteile.', ja: '通常通り取引し、地域や階層に適用される紹介還元やBP特典をダッシュボードで確認してください。', ko: '일반적으로 거래하고 지역 및 등급에 적용되는 추천 리베이트나 BP 혜택을 대시보드에서 확인하세요.' },
    },
    {
      step: 3,
      icon: '🔗',
      title: { en: 'Share Your Own Code', 'zh-cn': '分享您的邀请码', 'zh-tw': '分享您的邀請碼', fr: 'Partagez votre code', pt: 'Compartilhe seu código', it: 'Condividi il tuo codice', de: 'Teilen Sie Ihren Code', ja: '自分のコードを共有', ko: '자신의 코드 공유' },
      desc: { en: 'After registering, you can check whether your account has its own referral code, BP dashboard access, or eligible product benefits.', 'zh-cn': '注册后，您可以查看账户是否有自己的邀请码、BP 面板入口或符合资格的产品权益。', 'zh-tw': '註冊後，您可以查看帳戶是否有自己的邀請碼、BP 面板入口或符合資格的產品權益。', fr: 'Après inscription, vérifiez si votre compte dispose d’un code, d’un dashboard BP ou d’avantages éligibles.', pt: 'Após registrar, verifique se há código próprio, dashboard BP ou benefícios elegíveis.', it: 'Dopo la registrazione, verifica codice referral, dashboard BP o benefici idonei.', de: 'Nach Registrierung prüfen Sie eigenen Code, BP Dashboard oder berechtigte Produktvorteile.', ja: '登録後、自分の紹介コード、BPダッシュボード、対象製品特典があるか確認できます。', ko: '가입 후 자신의 추천 코드, BP 대시보드 또는 자격이 있는 제품 혜택을 확인할 수 있습니다.' },
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('referralTitle', lang)}</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">{t('referralMetaDesc', lang)}</p>

        {/* Commission Highlight */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center mb-12 border border-green-200">
          <p className="text-6xl font-bold text-green-600 mb-2">20%</p>
          <p className="text-xl font-semibold text-gray-800">{t('referralEarn', lang)}</p>
          <p className="text-gray-600 mt-2">
            {lang === 'en' ? 'Referral benefits depend on official terms and account status' :
             lang === 'zh-cn' ? '邀请权益以官方条款和账户面板显示为准' :
             lang === 'zh-tw' ? '邀請權益以官方條款和帳戶面板顯示為準' :
             lang === 'ja' ? '紹介特典は公式条件とアカウント表示に従います' :
             lang === 'ko' ? '추천 혜택은 공식 약관과 계정 표시를 따릅니다' :
             'Referral benefits depend on official terms and account status'}
          </p>
        </div>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">{t('referralHowItWorks', lang)}</h2>
          <div className="space-y-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {lang === 'en' ? `Step ${item.step}` :
                     lang === 'zh-cn' ? `第${item.step}步` :
                     lang === 'zh-tw' ? `第${item.step}步` :
                     lang === 'ja' ? `ステップ ${item.step}` :
                     lang === 'ko' ? `${item.step}단계` :
                     `Step ${item.step}`}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{item.title[lang]}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: { en: 'Referral Rebates', 'zh-cn': '邀请返佣', 'zh-tw': '邀請返佣', fr: 'Rebates referral', pt: 'Rebates de indicação', it: 'Rebate referral', de: 'Referral Rebates', ja: '紹介リベート', ko: '추천 리베이트' }, desc: { en: 'Referral rebates, if available, are shown in your Backpack account and governed by official terms.', 'zh-cn': '如有邀请返佣，会在 Backpack 账户中显示，并以官方条款为准。', 'zh-tw': '如有邀請返佣，會在 Backpack 帳戶中顯示，並以官方條款為準。', fr: 'Les rebates disponibles sont affichés dans le compte et soumis aux conditions.', pt: 'Rebates disponíveis aparecem na conta e seguem os termos oficiais.', it: 'I rebate disponibili appaiono nell’account e seguono i termini ufficiali.', de: 'Verfügbare Rebates erscheinen im Konto und folgen offiziellen Bedingungen.', ja: '利用可能な紹介リベートはアカウントに表示され、公式条件に従います。', ko: '이용 가능한 추천 리베이트는 계정에 표시되며 공식 약관을 따릅니다.' } },
              { icon: '🪙', title: { en: 'BP Dashboard', 'zh-cn': 'BP 面板', 'zh-tw': 'BP 面板', fr: 'Dashboard BP', pt: 'Dashboard BP', it: 'Dashboard BP', de: 'BP Dashboard', ja: 'BPダッシュボード', ko: 'BP 대시보드' }, desc: { en: 'After buying or claiming BP, use the BP dashboard to review staking, tiers, and eligibility.', 'zh-cn': '购买或领取 BP 后，可在 BP 面板查看质押、等级和资格。', 'zh-tw': '購買或領取 BP 後，可在 BP 面板查看質押、等級和資格。', fr: 'Après achat ou claim BP, consultez staking, niveaux et éligibilité.', pt: 'Após comprar ou reivindicar BP, veja staking, níveis e elegibilidade.', it: 'Dopo acquisto o claim BP, controlla staking, livelli e idoneità.', de: 'Nach Kauf oder Claim von BP prüfen Sie Staking, Tiers und Berechtigung.', ja: 'BP購入または請求後、ダッシュボードでステーキング、階層、資格を確認できます。', ko: 'BP 구매 또는 클레임 후 대시보드에서 스테이킹, 등급, 자격을 확인하세요.' } },
              { icon: '🏦', title: { en: 'Stock Beta Contact', 'zh-cn': '股票内测联系', 'zh-tw': '股票內測聯繫', fr: 'Contact bêta actions', pt: 'Contato beta ações', it: 'Contatto beta azioni', de: 'Aktien-Beta Kontakt', ja: '株式ベータ連絡', ko: '주식 베타 문의' }, desc: { en: 'For Backpack Securities beta invite information, contact @mikexuusa on X.', 'zh-cn': '如需 Backpack Securities 股票内测邀请码信息，可在 X 联系 @mikexuusa。', 'zh-tw': '如需 Backpack Securities 股票內測邀請碼資訊，可在 X 聯繫 @mikexuusa。', fr: 'Pour l’invitation bêta Backpack Securities, contactez @mikexuusa sur X.', pt: 'Para convite beta Backpack Securities, fale com @mikexuusa no X.', it: 'Per invito beta Backpack Securities, contatta @mikexuusa su X.', de: 'Für Backpack Securities Beta-Infos kontaktieren Sie @mikexuusa auf X.', ja: 'Backpack Securitiesベータ招待はXで@mikexuusaへ。', ko: 'Backpack Securities 베타 초대 정보는 X에서 @mikexuusa에게 문의하세요.' } },
            ].map((benefit, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2">{benefit.title[lang]}</h3>
                <p className="text-sm text-gray-600">{benefit.desc[lang]}</p>
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
