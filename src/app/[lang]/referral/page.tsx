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
      desc: { en: 'Register on Backpack Exchange using our referral link to activate the 20% commission bonus for both you and the person who referred you.', 'zh-cn': '使用我们的邀请链接在Backpack交易所注册，为您和推荐人激活20%佣金奖励。', 'zh-tw': '使用我們的邀請連結在Backpack交易所註冊，為您和推薦人激活20%佣金獎勵。', fr: 'Inscrivez-vous sur Backpack Exchange via notre lien pour activer le bonus de 20% de commission.', pt: 'Registre-se na Backpack Exchange usando nosso link para ativar o bônus de 20% de comissão.', it: 'Registrati su Backpack Exchange usando il nostro link per attivare il bonus del 20% di commissione.', de: 'Registrieren Sie sich bei Backpack Exchange über unseren Link, um den 20% Provisionsbonus zu aktivieren.', ja: '紹介リンクを使ってBackpack Exchangeに登録し、20%コミッションボーナスを有効にします。', ko: '추천 링크를 사용하여 Backpack Exchange에 가입하고 20% 커미션 보너스를 활성화하세요.' },
    },
    {
      step: 2,
      icon: '💱',
      title: { en: 'Trade on the Platform', 'zh-cn': '在平台上交易', 'zh-tw': '在平台上交易', fr: 'Tradez sur la plateforme', pt: 'Negocie na plataforma', it: 'Fai trading sulla piattaforma', de: 'Handeln Sie auf der Plattform', ja: 'プラットフォームで取引', ko: '플랫폼에서 거래' },
      desc: { en: 'Every trade you make generates trading fees. With the referral program, 20% of those fees are returned to you as a commission rebate.', 'zh-cn': '您的每笔交易都会产生交易手续费。通过推荐计划，其中20%将作为佣金返还给您。', 'zh-tw': '您的每筆交易都會產生交易手續費。透過推薦計劃，其中20%將作為佣金返還給您。', fr: 'Chaque trade génère des frais. Avec le programme de parrainage, 20% de ces frais vous sont retournés.', pt: 'Cada trade gera taxas. Com o programa de referência, 20% dessas taxas são devolvidas a você.', it: 'Ogni trade genera commissioni. Con il programma referral, il 20% di queste commissioni ti viene restituito.', de: 'Jeder Trade generiert Gebühren. Mit dem Empfehlungsprogramm werden 20% dieser Gebühren an Sie zurückgegeben.', ja: '取引するたびに取引手数料が発生します。紹介プログラムでは、その20%がコミッションとして還元されます。', ko: '모든 거래에서 거래 수수료가 발생합니다. 추천 프로그램을 통해 수수료의 20%가 커미션으로 환급됩니다.' },
    },
    {
      step: 3,
      icon: '🔗',
      title: { en: 'Share Your Own Code', 'zh-cn': '分享您的邀请码', 'zh-tw': '分享您的邀請碼', fr: 'Partagez votre code', pt: 'Compartilhe seu código', it: 'Condividi il tuo codice', de: 'Teilen Sie Ihren Code', ja: '自分のコードを共有', ko: '자신의 코드 공유' },
      desc: { en: 'Once registered, get your own referral code from the dashboard. Share it with friends and earn 20% commission on all their trading fees, paid out automatically.', 'zh-cn': '注册后，从仪表板获取您自己的邀请码。与朋友分享，自动获得他们所有交易手续费的20%佣金。', 'zh-tw': '註冊後，從儀表板獲取您自己的邀請碼。與朋友分享，自動獲得他們所有交易手續費的20%佣金。', fr: 'Une fois inscrit, obtenez votre propre code de parrainage. Partagez-le et gagnez 20% sur les frais de vos filleuls.', pt: 'Após o registro, obtenha seu próprio código de referência. Compartilhe com amigos e ganhe 20% sobre todas as taxas deles.', it: 'Una volta registrato, ottieni il tuo codice referral dalla dashboard. Condividilo con gli amici e guadagna il 20% sulle loro commissioni.', de: 'Nach der Registrierung erhalten Sie Ihren eigenen Empfehlungscode. Teilen Sie ihn mit Freunden und verdienen Sie 20% an deren Handelsgebühren.', ja: '登録後、ダッシュボードから自分の紹介コードを取得します。友人と共有して、彼らの全取引手数料の20%コミッションを自動的に獲得しましょう。', ko: '가입 후 대시보드에서 자신의 추천 코드를 받으세요. 친구와 공유하고 그들의 모든 거래 수수료에서 20% 커미션을 자동으로 획득하세요.' },
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
            {lang === 'en' ? 'On every trade your referrals make — for life' :
             lang === 'zh-cn' ? '终身享受您推荐人每笔交易的佣金' :
             lang === 'zh-tw' ? '終身享受您推薦人每筆交易的佣金' :
             lang === 'ja' ? '紹介者の取引に対して永続的にコミッションを獲得' :
             lang === 'ko' ? '추천인의 모든 거래에서 평생 커미션' :
             'On every trade your referrals make — for life'}
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
              { icon: '💰', title: { en: 'Passive Income', 'zh-cn': '被动收入', 'zh-tw': '被動收入', fr: 'Revenu Passif', pt: 'Renda Passiva', it: 'Reddito Passivo', de: 'Passives Einkommen', ja: '不労所得', ko: '패시브 인컴' }, desc: { en: 'Earn while you sleep. Your referrals trade, you earn 20%.', 'zh-cn': '睡觉时也能赚钱。推荐人交易，您赚取20%。', 'zh-tw': '睡覺時也能賺錢。推薦人交易，您賺取20%。', fr: 'Gagnez en dormant. Vos filleuls tradent, vous gagnez 20%.', pt: 'Ganhe dormindo. Seus indicados negociam, você ganha 20%.', it: 'Guadagna mentre dormi. I tuoi referral operano, tu guadagni il 20%.', de: 'Verdienen Sie im Schlaf. Ihre Empfehlungen handeln, Sie verdienen 20%.', ja: '寝ている間にも稼げます。紹介者が取引すると20%獲得。', ko: '잠자는 동안에도 수익을 올리세요. 추천인이 거래하면 20%를 획득합니다.' } },
              { icon: '🔄', title: { en: 'Automatic Payouts', 'zh-cn': '自动支付', 'zh-tw': '自動支付', fr: 'Paiements Automatiques', pt: 'Pagamentos Automáticos', it: 'Pagamenti Automatici', de: 'Automatische Auszahlung', ja: '自動支払い', ko: '자동 지급' }, desc: { en: 'Commissions are credited to your account automatically.', 'zh-cn': '佣金自动计入您的账户。', 'zh-tw': '佣金自動計入您的帳戶。', fr: 'Les commissions sont créditées automatiquement.', pt: 'As comissões são creditadas automaticamente.', it: 'Le commissioni vengono accreditate automaticamente.', de: 'Provisionen werden automatisch gutgeschrieben.', ja: 'コミッションは自動的にアカウントに付与されます。', ko: '커미션은 자동으로 계정에 적립됩니다.' } },
              { icon: '♾️', title: { en: 'No Limits', 'zh-cn': '无上限', 'zh-tw': '無上限', fr: 'Sans Limites', pt: 'Sem Limites', it: 'Senza Limiti', de: 'Keine Limits', ja: '上限なし', ko: '제한 없음' }, desc: { en: 'No cap on referrals or earnings. The more you share, the more you earn.', 'zh-cn': '推荐人数和收益无上限。分享越多，赚得越多。', 'zh-tw': '推薦人數和收益無上限。分享越多，賺得越多。', fr: 'Aucune limite de filleuls ou de gains.', pt: 'Sem limite de indicações ou ganhos.', it: 'Nessun limite di referral o guadagni.', de: 'Keine Begrenzung bei Empfehlungen oder Einnahmen.', ja: '紹介人数や収益に上限はありません。', ko: '추천 인원이나 수익에 제한이 없습니다.' } },
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
