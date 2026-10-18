"use client";
import { affiliateUrl, pick, type Lang } from "@/lib/site";
export default function AffiliateLink({ lang }: { lang: Lang }) {
  return (
    <a
      className="button"
      href={affiliateUrl}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={() => {
        try {
          if (localStorage.getItem("feelens-analytics") === "granted")
            window.gtag?.("event", "affiliate_click", {
              exchange: "backpack",
              placement: location.pathname,
              language: lang,
            });
        } catch {}
      }}
    >
      {pick(
        lang,
        "Continue to backpack.exchange ↗",
        "前往 backpack.exchange ↗",
      )}
    </a>
  );
}
