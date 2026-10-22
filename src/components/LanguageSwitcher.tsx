"use client";
import { usePathname, useRouter } from "next/navigation";
import { langs, locale, t, type Lang } from "@/lib/i18n";
export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const path = usePathname();
  const router = useRouter();
  return (
    <label className="language-select">
      <select
        aria-label={`${t(lang, "language")}: ${locale[lang].label}`}
        value={lang}
        onChange={(e) =>
          router.push(path.replace(/^\/[^/]+/, `/${e.target.value}`))
        }
      >
        {langs.map((l) => (
          <option key={l} value={l} lang={locale[l].html}>
            {locale[l].label}
          </option>
        ))}
      </select>
    </label>
  );
}
