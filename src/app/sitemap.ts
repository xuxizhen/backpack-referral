import type { MetadataRoute } from "next";
import { langs, locale } from "@/lib/i18n";
import { siteUrl, updated } from "@/lib/site";
import { exchangeIds, pairs } from "@/lib/exchanges";
export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = [
    "",
    "exchanges",
    "compare",
    "referrals",
    "updates",
    "about",
    "contact",
    "affiliate-disclosure",
    "editorial-policy",
    "privacy",
    "terms",
    "risk-disclosure",
    ...exchangeIds.map((id) => `exchanges/${id}`),
    ...exchangeIds.map((id) => `referrals/${id}`),
    ...Object.keys(pairs).map((id) => `compare/${id}`),
  ];
  return langs.flatMap((lang) =>
    slugs.map((slug) => ({
      url: `${siteUrl}/${lang}${slug ? "/" + slug : ""}`,
      lastModified: updated,
      alternates: {
        languages: Object.fromEntries([
          ...langs.map((l) => [
            locale[l].html,
            `${siteUrl}/${l}${slug ? "/" + slug : ""}`,
          ]),
          ["x-default", `${siteUrl}/en${slug ? "/" + slug : ""}`],
        ]),
      },
    })),
  );
}
