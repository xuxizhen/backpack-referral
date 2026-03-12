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
    title: t('faqTitle', lang as Language),
    description: t('faqMetaDesc', lang as Language),
    alternates: { canonical: `https://www.backpackref.com/${lang}/faq` },
  };
}

interface FAQItem {
  q: Record<Language, string>;
  a: Record<Language, string>;
}

const faqs: FAQItem[] = [
  {
    q: { en: 'Is Backpack Exchange safe?', 'zh-cn': 'Backpack交易所安全吗？', 'zh-tw': 'Backpack交易所安全嗎？', fr: 'Backpack Exchange est-il sûr ?', pt: 'A Backpack Exchange é segura?', it: 'Backpack Exchange è sicuro?', de: 'Ist Backpack Exchange sicher?', ja: 'Backpack Exchangeは安全ですか？', ko: 'Backpack Exchange는 안전한가요?' },
    a: { en: 'Yes. Backpack Exchange holds a Dubai VARA license and is MiFID II regulated through its FTX EU acquisition. It has maintained zero security breaches since its 2022 launch, uses cold storage, and supports 2FA.', 'zh-cn': '是的。Backpack交易所持有迪拜VARA牌照，并通过收购FTX EU获得MiFID II监管。自2022年上线以来保持零安全事故，使用冷存储，支持双重认证。', 'zh-tw': '是的。Backpack交易所持有迪拜VARA牌照，並通過收購FTX EU獲得MiFID II監管。自2022年上線以來保持零安全事故，使用冷儲存，支持雙重認證。', fr: 'Oui. Backpack Exchange détient une licence Dubai VARA et est réglementé MiFID II. Zéro faille de sécurité depuis 2022, stockage à froid et 2FA.', pt: 'Sim. A Backpack Exchange possui licença Dubai VARA e é regulamentada MiFID II. Zero violações de segurança desde 2022, armazenamento a frio e 2FA.', it: 'Sì. Backpack Exchange possiede una licenza Dubai VARA ed è regolamentato MiFID II. Zero violazioni dal 2022, cold storage e 2FA.', de: 'Ja. Backpack Exchange besitzt eine Dubai VARA Lizenz und ist MiFID II reguliert. Null Sicherheitsverstöße seit 2022, Cold Storage und 2FA.', ja: 'はい。Backpack ExchangeはドバイVARAライセンスを保有し、MiFID II規制に準拠しています。2022年のローンチ以降セキュリティ侵害ゼロ、コールドストレージと2FAをサポート。', ko: '네. Backpack Exchange는 두바이 VARA 라이선스를 보유하고 MiFID II 규제를 받습니다. 2022년 출시 이후 보안 침해 제로, 콜드 스토리지 및 2FA 지원.' },
  },
  {
    q: { en: 'What are the trading fees?', 'zh-cn': '交易费用是多少？', 'zh-tw': '交易費用是多少？', fr: 'Quels sont les frais de trading ?', pt: 'Quais são as taxas de trading?', it: 'Quali sono le commissioni di trading?', de: 'Was sind die Handelsgebühren?', ja: '取引手数料はいくらですか？', ko: '거래 수수료는 얼마인가요?' },
    a: { en: 'Backpack offers industry-low fees: 0.02% maker and 0.06% taker for both spot and futures trading. Crypto deposits are free, and the Backpack Wallet offers zero-fee swaps and bridges.', 'zh-cn': 'Backpack提供业界最低费用：现货和合约交易均为0.02%挂单和0.06%吃单。加密货币充值免费，Backpack钱包提供零手续费兑换和跨链桥接。', 'zh-tw': 'Backpack提供業界最低費用：現貨和合約交易均為0.02%掛單和0.06%吃單。加密貨幣充值免費，Backpack錢包提供零手續費兌換和跨鏈橋接。', fr: 'Backpack offre des frais parmi les plus bas : 0.02% maker et 0.06% taker pour le spot et les futures. Dépôts crypto gratuits.', pt: 'Backpack oferece taxas entre as mais baixas: 0.02% maker e 0.06% taker para spot e futuros. Depósitos crypto gratuitos.', it: 'Backpack offre commissioni tra le più basse: 0.02% maker e 0.06% taker per spot e futures. Depositi crypto gratuiti.', de: 'Backpack bietet branchenniedrige Gebühren: 0.02% Maker und 0.06% Taker für Spot und Futures. Krypto-Einzahlungen sind kostenlos.', ja: 'Backpackは業界最低水準の手数料を提供：スポットと先物取引ともに0.02%メイカー、0.06%テイカー。暗号通貨の入金は無料です。', ko: 'Backpack은 업계 최저 수수료를 제공합니다: 현물 및 선물 거래 모두 0.02% 메이커, 0.06% 테이커. 암호화폐 입금은 무료입니다.' },
  },
  {
    q: { en: 'Which countries are supported?', 'zh-cn': '支持哪些国家？', 'zh-tw': '支援哪些國家？', fr: 'Quels pays sont supportés ?', pt: 'Quais países são suportados?', it: 'Quali paesi sono supportati?', de: 'Welche Länder werden unterstützt?', ja: 'どの国がサポートされていますか？', ko: '어떤 국가가 지원되나요?' },
    a: { en: 'Backpack Exchange is available in most countries worldwide. With VARA licensing in Dubai and MiFID II status in Europe, it serves users across Asia, Europe, Middle East, and more. Some restrictions may apply based on local regulations.', 'zh-cn': 'Backpack交易所在全球大多数国家可用。凭借迪拜VARA牌照和欧洲MiFID II资质，为亚洲、欧洲、中东等地区的用户提供服务。某些地区可能因当地法规而有限制。', 'zh-tw': 'Backpack交易所在全球大多數國家可用。憑藉迪拜VARA牌照和歐洲MiFID II資質，為亞洲、歐洲、中東等地區的用戶提供服務。某些地區可能因當地法規而有限制。', fr: 'Backpack Exchange est disponible dans la plupart des pays. Avec la licence VARA à Dubaï et le statut MiFID II en Europe.', pt: 'A Backpack Exchange está disponível na maioria dos países. Com licença VARA em Dubai e status MiFID II na Europa.', it: 'Backpack Exchange è disponibile nella maggior parte dei paesi. Con licenza VARA a Dubai e status MiFID II in Europa.', de: 'Backpack Exchange ist in den meisten Ländern verfügbar. Mit VARA-Lizenz in Dubai und MiFID II Status in Europa.', ja: 'Backpack Exchangeは世界のほとんどの国で利用可能です。ドバイのVARAライセンスとヨーロッパのMiFID IIステータスを持ち、アジア、ヨーロッパ、中東などのユーザーにサービスを提供しています。', ko: 'Backpack Exchange는 전 세계 대부분의 국가에서 이용 가능합니다. 두바이 VARA 라이선스와 유럽 MiFID II 자격을 보유하고 있습니다.' },
  },
  {
    q: { en: 'Is KYC required?', 'zh-cn': '需要KYC认证吗？', 'zh-tw': '需要KYC認證嗎？', fr: 'Le KYC est-il requis ?', pt: 'O KYC é obrigatório?', it: 'Il KYC è obbligatorio?', de: 'Ist KYC erforderlich?', ja: 'KYCは必要ですか？', ko: 'KYC가 필요한가요?' },
    a: { en: 'Yes, KYC (Know Your Customer) verification is required as Backpack is a fully regulated exchange. The process is quick and typically approved within minutes. You need a government-issued ID and a selfie.', 'zh-cn': '是的，由于Backpack是完全合规的交易所，需要KYC（了解你的客户）验证。流程快速，通常几分钟内通过审核。您需要政府颁发的身份证件和自拍照。', 'zh-tw': '是的，由於Backpack是完全合規的交易所，需要KYC（了解你的客戶）驗證。流程快速，通常幾分鐘內通過審核。您需要政府頒發的身份證件和自拍照。', fr: 'Oui, le KYC est requis car Backpack est un exchange entièrement réglementé. Le processus est rapide, généralement approuvé en quelques minutes.', pt: 'Sim, o KYC é obrigatório pois a Backpack é uma exchange totalmente regulamentada. O processo é rápido, geralmente aprovado em minutos.', it: 'Sì, il KYC è obbligatorio poiché Backpack è un exchange completamente regolamentato. Il processo è rapido, generalmente approvato in pochi minuti.', de: 'Ja, KYC ist erforderlich, da Backpack eine vollständig regulierte Börse ist. Der Prozess ist schnell und wird normalerweise innerhalb von Minuten genehmigt.', ja: 'はい、Backpackは完全に規制された取引所であるため、KYC認証が必要です。プロセスは迅速で、通常数分で承認されます。', ko: '네, Backpack은 완전히 규제되는 거래소이므로 KYC 인증이 필요합니다. 과정은 빠르며 보통 몇 분 내에 승인됩니다.' },
  },
  {
    q: { en: 'What deposit methods are available?', 'zh-cn': '有哪些充值方式？', 'zh-tw': '有哪些充值方式？', fr: 'Quelles méthodes de dépôt sont disponibles ?', pt: 'Quais métodos de depósito estão disponíveis?', it: 'Quali metodi di deposito sono disponibili?', de: 'Welche Einzahlungsmethoden gibt es?', ja: 'どのような入金方法がありますか？', ko: '어떤 입금 방법이 있나요?' },
    a: { en: 'Backpack supports crypto deposits from all major blockchains with zero fees. Fiat on-ramp options are available for select currencies. The Backpack Wallet also supports zero-fee swaps and bridges across supported networks.', 'zh-cn': 'Backpack支持所有主要区块链的加密货币充值，零手续费。部分法币入金渠道可用。Backpack钱包还支持跨支持网络的零手续费兑换和跨链桥接。', 'zh-tw': 'Backpack支持所有主要區塊鏈的加密貨幣充值，零手續費。部分法幣入金渠道可用。Backpack錢包還支持跨支援網路的零手續費兌換和跨鏈橋接。', fr: 'Backpack supporte les dépôts crypto de toutes les blockchains majeures sans frais. Des options fiat sont disponibles pour certaines devises.', pt: 'Backpack suporta depósitos crypto de todas as blockchains principais sem taxas. Opções fiat disponíveis para moedas selecionadas.', it: 'Backpack supporta depositi crypto da tutte le blockchain principali senza commissioni. Opzioni fiat disponibili per valute selezionate.', de: 'Backpack unterstützt Krypto-Einzahlungen von allen großen Blockchains ohne Gebühren. Fiat-Optionen sind für ausgewählte Währungen verfügbar.', ja: 'Backpackは主要なブロックチェーンからの暗号通貨入金を手数料ゼロでサポートしています。一部の法定通貨のオンランプオプションも利用可能です。', ko: 'Backpack은 모든 주요 블록체인에서 수수료 없이 암호화폐 입금을 지원합니다. 일부 통화에 대한 법정화폐 온램프 옵션도 이용 가능합니다.' },
  },
  {
    q: { en: 'How does the referral program work?', 'zh-cn': '推荐计划如何运作？', 'zh-tw': '推薦計劃如何運作？', fr: 'Comment fonctionne le programme de parrainage ?', pt: 'Como funciona o programa de referência?', it: 'Come funziona il programma referral?', de: 'Wie funktioniert das Empfehlungsprogramm?', ja: '紹介プログラムはどのように機能しますか？', ko: '추천 프로그램은 어떻게 작동하나요?' },
    a: { en: 'When you register through a referral link, you receive a 20% trading fee commission rebate. You also get your own referral code to share with friends, earning 20% of their trading fees automatically.', 'zh-cn': '通过邀请链接注册后，您将获得20%交易手续费佣金返还。您还会获得自己的邀请码，与朋友分享后自动获得他们交易手续费的20%。', 'zh-tw': '通過邀請連結註冊後，您將獲得20%交易手續費佣金返還。您還會獲得自己的邀請碼，與朋友分享後自動獲得他們交易手續費的20%。', fr: 'En vous inscrivant via un lien de parrainage, vous recevez 20% de commission sur les frais de trading. Vous pouvez aussi partager votre propre code.', pt: 'Ao se registrar por um link de referência, você recebe 20% de comissão sobre as taxas de trading. Você também pode compartilhar seu próprio código.', it: 'Registrandoti tramite un link referral, ricevi il 20% di commissione sulle commissioni di trading. Puoi anche condividere il tuo codice.', de: 'Bei der Registrierung über einen Empfehlungslink erhalten Sie 20% Provision auf die Handelsgebühren. Sie erhalten auch Ihren eigenen Empfehlungscode.', ja: '紹介リンクで登録すると、取引手数料の20%コミッションリベートを受け取ります。友人と共有できる自分の紹介コードも取得できます。', ko: '추천 링크로 가입하면 거래 수수료 20% 커미션 리베이트를 받습니다. 친구와 공유할 수 있는 자신의 추천 코드도 받게 됩니다.' },
  },
  {
    q: { en: 'What tokens are supported?', 'zh-cn': '支持哪些代币？', 'zh-tw': '支援哪些代幣？', fr: 'Quels tokens sont supportés ?', pt: 'Quais tokens são suportados?', it: 'Quali token sono supportati?', de: 'Welche Tokens werden unterstützt?', ja: 'どのトークンがサポートされていますか？', ko: '어떤 토큰이 지원되나요?' },
    a: { en: 'Backpack supports major cryptocurrencies including BTC, ETH, SOL, USDC, USDT, and many altcoins. New tokens are regularly listed, including meme coins and gaming tokens. Perpetual futures are available for top assets.', 'zh-cn': 'Backpack支持BTC、ETH、SOL、USDC、USDT等主要加密货币及众多山寨币。定期上线新代币，包括meme币和游戏代币。顶级资产可用永续合约。', 'zh-tw': 'Backpack支持BTC、ETH、SOL、USDC、USDT等主要加密貨幣及眾多山寨幣。定期上線新代幣，包括meme幣和遊戲代幣。頂級資產可用永續合約。', fr: 'Backpack supporte les principales cryptomonnaies dont BTC, ETH, SOL, USDC, USDT, et de nombreux altcoins.', pt: 'Backpack suporta as principais criptomoedas incluindo BTC, ETH, SOL, USDC, USDT, e muitas altcoins.', it: 'Backpack supporta le principali criptovalute tra cui BTC, ETH, SOL, USDC, USDT, e molte altcoin.', de: 'Backpack unterstützt wichtige Kryptowährungen wie BTC, ETH, SOL, USDC, USDT und viele Altcoins.', ja: 'BackpackはBTC、ETH、SOL、USDC、USDTなどの主要な暗号通貨と多くのアルトコインをサポートしています。ミームコインやゲームトークンを含む新しいトークンが定期的に上場されます。', ko: 'Backpack은 BTC, ETH, SOL, USDC, USDT를 포함한 주요 암호화폐와 다양한 알트코인을 지원합니다. 밈 코인과 게이밍 토큰을 포함한 새로운 토큰이 정기적으로 상장됩니다.' },
  },
  {
    q: { en: 'How can I contact customer support?', 'zh-cn': '如何联系客服？', 'zh-tw': '如何聯繫客服？', fr: 'Comment contacter le support ?', pt: 'Como posso contatar o suporte?', it: 'Come posso contattare il supporto?', de: 'Wie kann ich den Support kontaktieren?', ja: 'カスタマーサポートに連絡するには？', ko: '고객 지원팀에 어떻게 연락하나요?' },
    a: { en: 'Backpack offers 24/7 customer support via in-app chat and email. Support is available in multiple languages including English, Chinese, Japanese, and Korean. The help center also provides comprehensive guides and FAQs.', 'zh-cn': 'Backpack通过应用内聊天和电子邮件提供24/7客户支持。支持多种语言，包括英语、中文、日语和韩语。帮助中心还提供全面的指南和常见问题解答。', 'zh-tw': 'Backpack透過應用內聊天和電子郵件提供24/7客戶支援。支援多種語言，包括英語、中文、日語和韓語。幫助中心還提供全面的指南和常見問題解答。', fr: 'Backpack offre un support 24/7 via chat in-app et email. Le support est disponible en plusieurs langues.', pt: 'Backpack oferece suporte 24/7 via chat in-app e email. Suporte disponível em vários idiomas.', it: 'Backpack offre supporto 24/7 via chat in-app e email. Supporto disponibile in più lingue.', de: 'Backpack bietet 24/7 Kundensupport per In-App-Chat und E-Mail. Support in mehreren Sprachen verfügbar.', ja: 'Backpackはアプリ内チャットとメールで24時間365日のカスタマーサポートを提供しています。英語、中国語、日本語、韓国語など複数の言語でサポートを受けられます。', ko: 'Backpack은 인앱 채팅과 이메일을 통해 24/7 고객 지원을 제공합니다. 영어, 중국어, 일본어, 한국어 등 다국어 지원이 가능합니다.' },
  },
];

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang: Language = isValidLanguage(langParam) ? langParam : 'en';

  // FAQPage schema for Google rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q[lang],
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a[lang],
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t('faqTitle', lang)}</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">{t('faqMetaDesc', lang)}</p>

        {/* FAQ Items */}
        <div className="space-y-6 mb-12">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-3 flex items-start gap-2">
                <span className="text-purple-600 flex-shrink-0">Q{i + 1}.</span>
                {faq.q[lang]}
              </h2>
              <p className="text-gray-700 leading-relaxed pl-8">{faq.a[lang]}</p>
            </div>
          ))}
        </div>

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
