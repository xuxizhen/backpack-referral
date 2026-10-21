"use client";
import { usePathname, useRouter } from "next/navigation";
import { langs, locale, t, type Lang } from "@/lib/i18n";
export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const path = usePathname();
  const router = useRouter();
  return (
    <label className="language-select">
      <span className="sr-only">{t(lang, "language")}</span>
      <select
        aria-label={t(lang, "language")}
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
