"use client";
import { useState } from "react";
import { calculateFees } from "@/lib/calculator";
import { pick, type Lang } from "@/lib/site";
export default function Calculator({ lang }: { lang: Lang }) {
  const [volume, setVolume] = useState("10000");
  const [rate, setRate] = useState("0.05");
  const [eligible, setEligible] = useState(true);
  const result =
    volume.trim() && rate.trim()
      ? calculateFees(Number(volume), Number(rate), eligible)
      : null;
  const money = (n: number) =>
    new Intl.NumberFormat(lang === "en" ? "en-US" : "zh-CN", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);
  return (
    <section className="calculator" aria-labelledby="calculator-title">
      <div className="calc-top">
        <span className="calc-icon" aria-hidden="true">
          ≋
        </span>
        <span>{pick(lang, "The fee worksheet", "交易费用计算单")}</span>
        <span className="tag">{pick(lang, "Interactive", "可交互")}</span>
      </div>
      <h2 id="calculator-title">
        {pick(lang, "Make the math visible.", "把每一笔费用算清楚。")}
      </h2>
      <div className="input-grid">
        <label>
          {pick(lang, "Total traded volume (USD)", "累计成交额（美元）")}
          <input
            type="number"
            min="0"
            step="any"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            inputMode="decimal"
          />
        </label>
        <label>
          {pick(lang, "Trading fee rate (%)", "交易费率（%）")}
          <input
            type="number"
            min="0"
            max="100"
            step="any"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            inputMode="decimal"
          />
        </label>
      </div>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={eligible}
          onChange={(e) => setEligible(e.target.checked)}
        />
        {pick(
          lang,
          "Apply eligible 20% fee sharing",
          "按符合资格的 20% 手续费分享计算",
        )}
      </label>
      <div className="calc-results" aria-live="polite" aria-atomic="true">
        {result ? (
          <>
            <div>
              <span>{pick(lang, "Before fee sharing", "分享前手续费")}</span>
              <strong>{money(result.gross)}</strong>
            </div>
            <div className="saving">
              <span>
                {pick(lang, "Your fee saving · 20%", "预计节省 · 20%")}
                {!eligible && pick(lang, " (not applied)", "（未应用）")}
              </span>
              <strong>−{money(result.saving)}</strong>
            </div>
            <div className="total">
              <span>{pick(lang, "Estimated net fee", "预计净手续费")}</span>
              <strong>{money(result.net)}</strong>
            </div>
            <div className="fee-bar" aria-hidden="true">
              <span style={{ width: eligible ? "80%" : "100%" }} />
              <i />
            </div>
            <small>
              {pick(lang, "Net fee", "净手续费")} {eligible ? "80%" : "100%"}{" "}
              <span>
                {pick(lang, "Fee sharing", "手续费分享")}{" "}
                {eligible ? "20%" : "0%"}
              </span>
            </small>
          </>
        ) : (
          <p role="status">
            {pick(
              lang,
              "Enter a non-negative volume and a fee rate between 0 and 100%.",
              "请输入非负成交额及 0–100% 的费率。",
            )}
          </p>
        )}
      </div>
      <p className="calc-note">
        {pick(
          lang,
          "Illustration, not a live quote. Replace 0.05% with your account rate. Include both opening and closing volume. Excludes spread, funding and withdrawals. Equity Perps are not eligible for sharing.",
          "仅为示例，非实时报价。请用账户费率替换 0.05%。开仓和平仓成交额均需计入。不含价差、资金费与提现费用；Equity Perps 不适用分享。",
        )}
      </p>
    </section>
  );
}
