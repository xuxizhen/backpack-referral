"use client";
import { useState } from "react";
import { estimateFee } from "@/lib/fee-comparison";
import { exchangeIds, exchanges } from "@/lib/exchanges";
import { t, locale, type Lang } from "@/lib/i18n";
export default function FeeComparison({ lang }: { lang: Lang }) {
  const [volume, setVolume] = useState("10000");
  const [rates, setRates] = useState({ backpack: "", okx: "", binance: "" });
  const money = (v: number) =>
    new Intl.NumberFormat(locale[lang].intl, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(v);
  return (
    <section className="comparison-calculator" id="calculator">
      <div>
        <span className="section-kicker">FeeLens / 03</span>
        <h2>{t(lang, "calc")}</h2>
        <p>{t(lang, "calcNote")}</p>
        <label htmlFor="compare-volume">{t(lang, "volume")}</label>
        <input
          id="compare-volume"
          type="number"
          min="0"
          step="any"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          dir="ltr"
        />
      </div>
      <div className="calculator-rows">
        {exchangeIds.map((id) => {
          const fee = estimateFee(volume, rates[id]);
          return (
            <div className="calculator-row" key={id}>
              <strong>{exchanges[id].name}</strong>
              <label htmlFor={`rate-${id}`}>{t(lang, "rate")}</label>
              <input
                id={`rate-${id}`}
                type="number"
                min="0"
                max="100"
                step="any"
                placeholder="—"
                value={rates[id]}
                onChange={(e) => setRates({ ...rates, [id]: e.target.value })}
                dir="ltr"
              />
              <div aria-live="polite">
                <small>{t(lang, "estimate")}</small>
                <output>
                  {rates[id] === ""
                    ? t(lang, "enter")
                    : fee !== null
                      ? money(fee)
                      : t(lang, "invalid")}
                </output>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
