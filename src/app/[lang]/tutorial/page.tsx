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
    title: t('tutorialTitle', lang as Language),
    description: t('tutorialMetaDesc', lang as Language),
    alternates: { canonical: `https://www.backpackref.com/${lang}/tutorial` },
  };
}

export default async function TutorialPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  const steps = [
    {
      number: 1,
      title: t('tutorialStep1', lang),
      description: {
        en: 'Click the referral link below to open the Backpack Exchange registration page. Referral benefits and fee rebates depend on Backpack official terms.',
        'zh-cn': '点击下方邀请链接，打开 Backpack Exchange 注册页面。邀请权益和手续费返佣以 Backpack 官方条款为准。',
        'zh-tw': '點擊下方邀請連結，打開 Backpack Exchange 註冊頁面。邀請權益和手續費返佣以 Backpack 官方條款為準。',
        fr: 'Cliquez sur le lien de parrainage ci-dessous pour ouvrir Backpack Exchange. Les avantages dépendent des conditions officielles.',
        pt: 'Clique no link de referência abaixo para abrir a Backpack Exchange. Benefícios dependem dos termos oficiais.',
        it: 'Clicca sul link referral qui sotto per aprire Backpack Exchange. I benefici dipendono dai termini ufficiali.',
        de: 'Klicken Sie unten auf den Empfehlungslink. Referral-Vorteile hängen von offiziellen Backpack-Bedingungen ab.',
        ja: '下の紹介リンクからBackpack Exchange登録ページを開きます。紹介特典や手数料還元は公式条件に従います。',
        ko: '아래 추천 링크로 Backpack Exchange 등록 페이지를 여세요. 추천 혜택과 수수료 리베이트는 공식 약관에 따릅니다.',
      },
      icon: '🔗',
    },
    {
      number: 2,
      title: t('tutorialStep2', lang),
      description: {
        en: 'Enter your email address or phone number in the registration form. You will receive a verification code to confirm your identity.',
        'zh-cn': '在注册表单中输入您的电子邮件地址或手机号码。您将收到一个验证码来确认您的身份。',
        'zh-tw': '在註冊表單中輸入您的電子郵件地址或手機號碼。您將收到一個驗證碼來確認您的身份。',
        fr: 'Entrez votre adresse email ou numéro de téléphone dans le formulaire d\'inscription. Vous recevrez un code de vérification.',
        pt: 'Digite seu endereço de email ou número de telefone no formulário de registro. Você receberá um código de verificação.',
        it: 'Inserisci il tuo indirizzo email o numero di telefono nel modulo di registrazione. Riceverai un codice di verifica.',
        de: 'Geben Sie Ihre E-Mail-Adresse oder Telefonnummer in das Registrierungsformular ein. Sie erhalten einen Bestätigungscode.',
        ja: '登録フォームにメールアドレスまたは電話番号を入力します。確認コードが送信されます。',
        ko: '등록 양식에 이메일 주소 또는 전화번호를 입력하세요. 확인 코드를 받게 됩니다.',
      },
      icon: '📧',
    },
    {
      number: 3,
      title: t('tutorialStep3', lang),
      description: {
        en: 'Create a strong password with at least 8 characters, including uppercase, lowercase, numbers, and special characters. Enable 2FA for extra security.',
        'zh-cn': '创建一个强密码，至少8个字符，包含大写字母、小写字母、数字和特殊字符。启用双重认证以提高安全性。',
        'zh-tw': '創建一個強密碼，至少8個字符，包含大寫字母、小寫字母、數字和特殊字符。啟用雙重認證以提高安全性。',
        fr: 'Créez un mot de passe fort d\'au moins 8 caractères, incluant majuscules, minuscules, chiffres et caractères spéciaux. Activez le 2FA.',
        pt: 'Crie uma senha forte com pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e caracteres especiais. Ative o 2FA.',
        it: 'Crea una password forte di almeno 8 caratteri, inclusi maiuscole, minuscole, numeri e caratteri speciali. Attiva il 2FA.',
        de: 'Erstellen Sie ein starkes Passwort mit mindestens 8 Zeichen, einschließlich Groß-, Kleinbuchstaben, Zahlen und Sonderzeichen. Aktivieren Sie 2FA.',
        ja: '大文字、小文字、数字、特殊文字を含む8文字以上の強力なパスワードを作成します。2FAを有効にしてセキュリティを強化しましょう。',
        ko: '대문자, 소문자, 숫자, 특수 문자를 포함한 8자 이상의 강력한 비밀번호를 만드세요. 추가 보안을 위해 2FA를 활성화하세요.',
      },
      icon: '🔒',
    },
    {
      number: 4,
      title: t('tutorialStep4', lang),
      description: {
        en: 'Upload your government-issued ID (passport, driver\'s license, or national ID) and a selfie for identity verification. KYC is typically approved within minutes.',
        'zh-cn': '上传您的政府颁发的身份证件（护照、驾照或身份证）和自拍照进行身份验证。KYC通常在几分钟内通过审核。',
        'zh-tw': '上傳您的政府頒發的身份證件（護照、駕照或身份證）和自拍照進行身份驗證。KYC通常在幾分鐘內通過審核。',
        fr: 'Téléchargez votre pièce d\'identité gouvernementale et un selfie pour la vérification. Le KYC est généralement approuvé en quelques minutes.',
        pt: 'Envie seu documento de identidade governamental e uma selfie para verificação. O KYC geralmente é aprovado em minutos.',
        it: 'Carica il tuo documento d\'identità governativo e un selfie per la verifica. Il KYC viene generalmente approvato in pochi minuti.',
        de: 'Laden Sie Ihren Regierungsausweis und ein Selfie zur Identitätsverifizierung hoch. KYC wird normalerweise innerhalb von Minuten genehmigt.',
        ja: '政府発行の身分証明書（パスポート、運転免許証、またはマイナンバーカード）と自撮り写真をアップロードして本人確認を行います。KYCは通常数分で承認されます。',
        ko: '정부 발행 신분증(여권, 운전면허증 또는 주민등록증)과 셀피를 업로드하여 신원 확인을 완료하세요. KYC는 보통 몇 분 내에 승인됩니다.',
      },
      icon: '🪪',
    },
    {
      number: 5,
      title: t('tutorialStep5', lang),
      description: {
        en: 'Deposit crypto from another wallet or exchange. Backpack supports all major cryptocurrencies with zero deposit fees. You can also use fiat on-ramp options.',
        'zh-cn': '从其他钱包或交易所充值加密货币。Backpack支持所有主要加密货币，充值零手续费。您也可以使用法币入金渠道。',
        'zh-tw': '從其他錢包或交易所充值加密貨幣。Backpack支持所有主要加密貨幣，充值零手續費。您也可以使用法幣入金渠道。',
        fr: 'Déposez des cryptos depuis un autre portefeuille ou exchange. Backpack supporte toutes les cryptomonnaies majeures avec zéro frais de dépôt.',
        pt: 'Deposite crypto de outra carteira ou exchange. Backpack suporta todas as criptomoedas principais com zero taxas de depósito.',
        it: 'Deposita crypto da un altro wallet o exchange. Backpack supporta tutte le principali criptovalute con zero commissioni di deposito.',
        de: 'Zahlen Sie Krypto von einer anderen Wallet oder Exchange ein. Backpack unterstützt alle wichtigen Kryptowährungen mit null Einzahlungsgebühren.',
        ja: '他のウォレットや取引所から暗号通貨を入金します。Backpackはすべての主要な暗号通貨を入金手数料ゼロでサポートしています。',
        ko: '다른 지갑이나 거래소에서 암호화폐를 입금하세요. Backpack은 모든 주요 암호화폐를 입금 수수료 제로로 지원합니다.',
      },
      icon: '💰',
    },
    {
      number: 6,
      title: t('tutorialStep6', lang),
      description: {
        en: 'You\'re all set. Explore spot, futures, lending, BP trading, and BP staking benefits where available in your region.',
        'zh-cn': '准备完成后，可探索现货、合约、借贷、BP 交易和所在地区可用的 BP 质押权益。',
        'zh-tw': '準備完成後，可探索現貨、合約、借貸、BP 交易和所在地區可用的 BP 質押權益。',
        fr: 'Vous êtes prêt. Explorez spot, futures, lending, trading BP et staking BP selon disponibilité.',
        pt: 'Tudo pronto. Explore spot, futuros, lending, trading BP e staking BP conforme disponibilidade.',
        it: 'Tutto pronto. Esplora spot, futures, lending, trading BP e staking BP dove disponibili.',
        de: 'Sie sind bereit. Erkunden Sie Spot, Futures, Lending, BP Trading und BP Staking, soweit verfügbar.',
        ja: '準備完了です。地域で利用可能なスポット、先物、レンディング、BP取引、BPステーキング特典を確認しましょう。',
        ko: '준비가 완료되었습니다. 지역에서 이용 가능한 현물, 선물, 대출, BP 거래와 BP 스테이킹 혜택을 살펴보세요.',
      },
      icon: '🎉',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('tutorialTitle', lang)}</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">{t('tutorialMetaDesc', lang)}</p>

        {/* Steps */}
        <div className="space-y-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {lang === 'en' ? `Step ${step.number}` :
                     lang === 'zh-cn' ? `第${step.number}步` :
                     lang === 'zh-tw' ? `第${step.number}步` :
                     lang === 'ja' ? `ステップ ${step.number}` :
                     lang === 'ko' ? `${step.number}단계` :
                     `Step ${step.number}`}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <section className="mb-12">
          <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
            <h2 className="text-xl font-bold mb-4">💡 {lang === 'en' ? 'Tips for New Users' : lang === 'zh-cn' ? '新手提示' : lang === 'zh-tw' ? '新手提示' : lang === 'ja' ? '初心者へのヒント' : lang === 'ko' ? '신규 사용자 팁' : 'Tips'}</h2>
            <ul className="space-y-2">
              {[
                { en: 'Enable 2FA immediately after registration for maximum security', 'zh-cn': '注册后立即启用双重认证以获得最高安全性', 'zh-tw': '註冊後立即啟用雙重認證以獲得最高安全性', fr: 'Activez le 2FA immédiatement après l\'inscription', pt: 'Ative o 2FA imediatamente após o registro', it: 'Attiva il 2FA immediatamente dopo la registrazione', de: 'Aktivieren Sie 2FA sofort nach der Registrierung', ja: '登録後すぐに2FAを有効にしてセキュリティを最大化', ko: '등록 후 즉시 2FA를 활성화하여 최대 보안 확보' },
                { en: 'Start with small trades to familiarize yourself with the platform', 'zh-cn': '从小额交易开始，熟悉平台操作', 'zh-tw': '從小額交易開始，熟悉平台操作', fr: 'Commencez par de petites transactions', pt: 'Comece com pequenas negociações', it: 'Inizia con piccole operazioni', de: 'Beginnen Sie mit kleinen Trades', ja: '少額の取引から始めてプラットフォームに慣れましょう', ko: '소액 거래부터 시작하여 플랫폼에 익숙해지세요' },
                { en: 'Review BP staking benefits before deciding whether to stake', 'zh-cn': '决定是否质押前，先阅读 BP 质押权益和官方条款', 'zh-tw': '決定是否質押前，先閱讀 BP 質押權益和官方條款', fr: 'Consultez les avantages du staking BP avant de décider', pt: 'Revise os benefícios de staking BP antes de decidir', it: 'Valuta i benefici dello staking BP prima di decidere', de: 'Prüfen Sie BP Staking Vorteile vor einer Entscheidung', ja: 'ステーキング前にBP特典と公式条件を確認しましょう', ko: '스테이킹 결정 전 BP 혜택과 공식 약관을 확인하세요' },
              ].map((tip, i) => (
                <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                  <span className="text-yellow-500 mt-0.5">•</span>
                  {tip[lang]}
                </li>
              ))}
            </ul>
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
