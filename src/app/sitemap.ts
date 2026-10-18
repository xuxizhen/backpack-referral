import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { langs, siteUrl, updated } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return langs.flatMap((lang) =>
    ["", "updates", ...Object.keys(articles)].map((slug) => ({
      url: `${siteUrl}/${lang}${slug ? "/" + slug : ""}`,
      lastModified: updated,
      alternates: {
        languages: {
          en: `${siteUrl}/en${slug ? "/" + slug : ""}`,
          "zh-Hans": `${siteUrl}/zh-cn${slug ? "/" + slug : ""}`,
        },
      },
    })),
  );
}
