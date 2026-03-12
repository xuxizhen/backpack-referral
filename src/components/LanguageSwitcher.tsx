'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Language, supportedLanguages, languageNames, languageFlags } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLang: Language;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as Language;
    // Replace the current language segment in the path
    const segments = pathname.split('/');
    segments[1] = newLang;
    router.push(segments.join('/'));
  };

  return (
    <select
      value={currentLang}
      onChange={handleChange}
      className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-black text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
    >
      {supportedLanguages.map((lang) => (
        <option key={lang} value={lang}>
          {languageFlags[lang]} {languageNames[lang]}
        </option>
      ))}
    </select>
  );
}
