"use client";
import { exchanges, alternateBinance, type ExchangeId } from "@/lib/exchanges";
import { t, type Lang } from "@/lib/i18n";
export default function ExchangeLink({
  lang,
  id,
  alternate = false,
}: {
  lang: Lang;
  id: ExchangeId;
  alternate?: boolean;
}) {
  const href =
    alternate && id === "binance" ? alternateBinance : exchanges[id].url;
  return (
    <a
      className={alternate ? "plain-link" : "button"}
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={() => {
        try {
          if (localStorage.getItem("feelens-analytics") === "granted")
            window.gtag?.("event", "affiliate_click", {
              exchange: id,
              placement: location.pathname,
              language: lang,
            });
        } catch {}
      }}
    >
      {t(lang, alternate ? "alternate" : "visit")} ↗{" "}
      <span className="sr-only">{exchanges[id].name}</span>
    </a>
  );
}
