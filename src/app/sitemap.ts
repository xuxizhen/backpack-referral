import type { MetadataRoute } from "next";
import { updates } from "@/lib/updates";
import { articles } from "@/lib/articles";
import { langs, siteUrl, updated } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return langs.flatMap((lang) =>
    ["", "updates", ...Object.keys(articles)].map((slug) => ({
      url: `${siteUrl}/${lang}${slug ? "/" + slug : ""}`,
      lastModified: slug === "" || slug === "updates"
        ? updates.reduce((latest, item) => item.checkedAt > latest ? item.checkedAt : latest, updated)
        : updated,
      alternates: {
        languages: {
          en: `${siteUrl}/en${slug ? "/" + slug : ""}`,
          "zh-Hans": `${siteUrl}/zh-cn${slug ? "/" + slug : ""}`,
        },
      },
    })),
  );
}
