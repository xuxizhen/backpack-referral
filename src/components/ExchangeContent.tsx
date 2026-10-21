import Link from "next/link";
import { exchanges, exchangeIds, type ExchangeId } from "@/lib/exchanges";
import { t, type Lang } from "@/lib/i18n";
import ExchangeLink from "./ExchangeLink";
export function ExchangeCards({ lang }: { lang: Lang }) {
  return (
    <div className="exchange-cards">
      {exchangeIds.map((id, i) => {
        const e = exchanges[id];
        return (
          <article className="exchange-card" key={id}>
            <div className="exchange-card-top">
              <span
                className="exchange-monogram"
                style={{ color: e.color }}
                aria-hidden="true"
              >
                {e.mark}
              </span>
              <span className="section-kicker">0{i + 1}</span>
            </div>
            <h2>{e.name}</h2>
            <p>{e.products[lang]}</p>
            <div className="exchange-card-links">
              <Link href={`/${lang}/exchanges/${id}`} className="plain-link">
                {t(lang, "guide")} ↗
              </Link>
              <Link href={`/${lang}/referrals/${id}`}>{t(lang, "offers")}</Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
export function FeeMatrix({
  lang,
  ids = exchangeIds,
}: {
  lang: Lang;
  ids: readonly ExchangeId[];
}) {
  return (
    <div className="matrix-scroll">
      <table className="fee-matrix">
        <caption>{t(lang, "compare")}</caption>
        <thead>
          <tr>
            <th scope="col">{t(lang, "exchanges")}</th>
            <th scope="col">{t(lang, "costs")}</th>
            <th scope="col">{t(lang, "offers")}</th>
          </tr>
        </thead>
        <tbody>
          {ids.map((id) => (
            <tr key={id}>
              <th scope="row">
                <Link href={`/${lang}/exchanges/${id}`}>
                  {exchanges[id].name}
                </Link>
              </th>
              <td>
                <p>{exchanges[id].costs[lang]}</p>
                <a
                  href={exchanges[id].fee}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(lang, "official")} ↗
                </a>
              </td>
              <td>
                <p>{exchanges[id].offer[lang]}</p>
                <Link href={`/${lang}/referrals/${id}`}>
                  {t(lang, "offers")} ↗
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function Offer({ lang, id }: { lang: Lang; id: ExchangeId }) {
  return (
    <section className="offer-detail">
      <span className="section-kicker">{exchanges[id].name}</span>
      <h2>{t(lang, "offers")}</h2>
      <p>{exchanges[id].offer[lang]}</p>
      <p>{t(lang, "eligibility")}</p>
      <div className="offer-actions">
        <ExchangeLink lang={lang} id={id} />
        {id === "binance" && <ExchangeLink lang={lang} id={id} alternate />}
      </div>
      <small dir="ltr" className="destination">
        {exchanges[id].url}
      </small>
    </section>
  );
}
export function Sources({
  lang,
  ids,
}: {
  lang: Lang;
  ids: readonly ExchangeId[];
}) {
  return (
    <section className="source-box">
      <h2>{t(lang, "sources")}</h2>
      <p>
        {t(lang, "checked")}:{" "}
        <time
          dateTime={ids
            .map((id) => exchanges[id].checked)
            .sort()
            .at(-1)}
        >
          {ids
            .map((id) => exchanges[id].checked)
            .sort()
            .at(-1)}
        </time>
      </p>
      <ul>
        {ids.flatMap((id) =>
          exchanges[id].sources.map((url, i) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <bdi>
                  {exchanges[id].name} · {new URL(url).hostname}
                  {i > 0
                    ? ` / ${decodeURIComponent(new URL(url).pathname.split("/").filter(Boolean).pop() || "")}`
                    : ""}
                </bdi>{" "}
                ↗
              </a>
            </li>
          )),
        )}
      </ul>
    </section>
  );
}
