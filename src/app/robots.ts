import type { MetadataRoute } from "next";
import { goDisallow } from "@/lib/invites";
import { siteUrl } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: goDisallow },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
