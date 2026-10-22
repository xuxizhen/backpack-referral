import type { Metadata } from "next";
import { langs, locale, type Lang } from "./i18n";
import { siteUrl } from "./redirects";
export { langs, type Lang } from "./i18n";
export { siteUrl };
export const updated = "2026-10-22";
export function isLang(lang: string): lang is Lang {
  return langs.includes(lang as Lang);
}
export function meta(
  lang: Lang,
  title: string,
  description: string,
  slug = "",
): Metadata {
  const path = `/${lang}${slug ? "/" + slug : ""}`;
  return {
    title: `${title} | FeeLens`,
    description,
    authors: [{ name: "Mike Xu", url: "https://x.com/mikexuusa" }],
    alternates: {
      canonical: `${siteUrl}${path}`,
      languages: {
        ...Object.fromEntries(
          langs.map((l) => [
            locale[l].html,
            `${siteUrl}/${l}${slug ? "/" + slug : ""}`,
          ]),
        ),
        "x-default": `${siteUrl}/en${slug ? "/" + slug : ""}`,
      },
    },
    openGraph: {
      title: `${title} | FeeLens`,
      description,
      url: `${siteUrl}${path}`,
      siteName: "FeeLens",
      locale: locale[lang].intl.replace("-", "_"),
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | FeeLens`,
      description,
      images: ["/opengraph-image"],
    },
  };
}
