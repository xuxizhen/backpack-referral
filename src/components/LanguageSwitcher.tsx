"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/site";
export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const path = usePathname();
  return (
    <Link
      className="language"
      href={path.replace(
        /^\/(en|zh-cn)(?=\/|$)/,
        lang === "en" ? "/zh-cn" : "/en",
      )}
      hrefLang={lang === "en" ? "zh-Hans" : "en"}
    >
      {lang === "en" ? "简体中文" : "English"}
    </Link>
  );
}
