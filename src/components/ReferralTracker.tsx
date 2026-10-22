"use client";
import { useEffect } from "react";

/** Records a referral click only after analytics consent, and only if gtag exists. */
export function trackReferral(
  exchange: string,
  placement: string,
  language: string,
) {
  try {
    if (localStorage.getItem("feelens-analytics") !== "granted") return;
    window.gtag?.("event", "referral_click", {
      exchange,
      placement,
      language,
    });
  } catch {
    /* private mode or a missing storage API should not block the link */
  }
}

export default function ReferralTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.(
        "a[data-exchange][data-placement]",
      );
      if (!link) return;
      trackReferral(
        link.getAttribute("data-exchange") || "",
        link.getAttribute("data-placement") || "",
        link.getAttribute("data-language") || "",
      );
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
