import type { Metadata } from "next";
export type Lang = "en" | "zh-cn";
export const langs: Lang[] = ["en", "zh-cn"];
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.backpackref.com"
).replace(/\/$/, "");
export const affiliateUrl = "https://backpack.exchange/join/meme";
export const updated = "2026-10-18";
export const sources = {
  sharing:
    "https://support.backpack.exchange/exchange/programs/affiliate-program/flexible-commission-sharing",
  fees: "https://backpack.exchange/fees",
  help: "https://support.backpack.exchange",
};
export function pick(lang: string, en: string, zh: string) {
  return lang === "zh-cn" ? zh : en;
}
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
        en: `${siteUrl}/en${slug ? "/" + slug : ""}`,
        "zh-Hans": `${siteUrl}/zh-cn${slug ? "/" + slug : ""}`,
        "x-default": `${siteUrl}/en${slug ? "/" + slug : ""}`,
      },
    },
    openGraph: {
      title: `${title} | FeeLens`,
      description,
      url: `${siteUrl}${path}`,
      siteName: "FeeLens",
      locale: lang === "en" ? "en_US" : "zh_CN",
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
