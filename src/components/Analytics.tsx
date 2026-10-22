"use client";
import Script from "next/script";
import { useSyncExternalStore, useState } from "react";
import { t, type Lang } from "@/lib/i18n";
export const GA_ID = "G-CE9L7SLBFL";
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
function readConsent() {
  try {
    return localStorage.getItem("feelens-analytics");
  } catch {
    return null;
  }
}
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("feelens-consent", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("feelens-consent", callback);
  };
}
export default function Analytics({ lang }: { lang: Lang }) {
  const choice = useSyncExternalStore(subscribe, readConsent, () => "loading");
  const [open, setOpen] = useState(false);
  function choose(value: string) {
    try {
      localStorage.setItem("feelens-analytics", value);
    } catch {}
    if (value === "denied") {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      Object.defineProperty(window, `ga-disable-${GA_ID}`, {
        value: true,
        writable: true,
        configurable: true,
      });
      document.cookie.split(";").forEach((c) => {
        const name = c.trim().split("=")[0];
        if (name.startsWith("_ga")) {
          for (const domain of [
            "",
            location.hostname,
            "." + location.hostname.split(".").slice(-2).join("."),
          ])
            document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? " Domain=" + domain + ";" : ""}`;
        }
      });
    } else {
      Object.defineProperty(window, `ga-disable-${GA_ID}`, {
        value: false,
        writable: true,
        configurable: true,
      });
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
    }
    window.dispatchEvent(new Event("feelens-consent"));
    setOpen(false);
  }
  return (
    <>
      {choice === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init">{`window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>
        </>
      )}
      <button className="text-button" onClick={() => setOpen(true)}>
        {t(lang, "analytics")}
      </button>
      {(choice === null || open) && (
        <aside className="consent">
          <p>{t(lang, "consent")}</p>
          <div>
            <button onClick={() => choose("denied")}>{t(lang, "deny")}</button>
            <button className="button" onClick={() => choose("granted")}>
              {t(lang, "allow")}
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
