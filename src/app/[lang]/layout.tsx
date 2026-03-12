import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Language,
  supportedLanguages,
  isValidLanguage,
  t,
  localeMap,
  hreflangMap,
  generateStaticParams as generateLangParams,
} from '@/lib/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
  return generateLangParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};

  const title = `Backpack Exchange - ${t('subtitle', lang as Language)}`;
  const description = t('heroDescription', lang as Language);
  const locale = localeMap[lang as Language];

  const alternates: Record<string, string> = {};
  for (const l of supportedLanguages) {
    alternates[hreflangMap[l]] = `https://www.backpackref.com/${l}`;
  }
  alternates['x-default'] = 'https://www.backpackref.com/en';

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.backpackref.com/${lang}`,
      languages: alternates,
    },
    openGraph: {
      title,
      description,
      url: `https://www.backpackref.com/${lang}`,
      siteName: 'Backpack Exchange Referral',
      locale,
      type: 'website',
      images: [
        {
          url: 'https://www.backpackref.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Backpack Exchange Referral',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.backpackref.com/og-image.jpg'],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) {
    notFound();
  }

  const validLang = lang as Language;

  const navLinks = [
    { href: `/${lang}`, label: t('navHome', validLang) },
    { href: `/${lang}/review`, label: t('navReview', validLang) },
    { href: `/${lang}/fees`, label: t('navFees', validLang) },
    { href: `/${lang}/tutorial`, label: t('navTutorial', validLang) },
    { href: `/${lang}/referral`, label: t('navReferral', validLang) },
    { href: `/${lang}/faq`, label: t('navFAQ', validLang) },
    { href: `/${lang}/safety`, label: t('navSafety', validLang) },
    { href: `/${lang}/vs-binance`, label: t('navVsBinance', validLang) },
  ];

  return (
    <div lang={lang}>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <Image
              src="https://cdn.prod.website-files.com/66830ad123bea7f626bcf58f/670f68cdb73b3a75c01956b9_Group%20427324273.svg"
              alt="Backpack Logo"
              width={32}
              height={32}
            />
            <span className="font-bold text-lg text-black hidden sm:inline">Backpack</span>
          </Link>
          <div className="flex items-center gap-1 overflow-x-auto">
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-black px-2 py-1 rounded-md hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <LanguageSwitcher currentLang={validLang} />
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
