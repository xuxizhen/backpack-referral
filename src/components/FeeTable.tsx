import { exchanges } from "@/lib/exchanges";
import { feeSnapshotOrder, feeSnapshots, type FeePair } from "@/lib/fees";
import { t, type Lang } from "@/lib/i18n";

function Cell({ pair, side }: { pair: FeePair; side: keyof FeePair }) {
  return (
    <td>
      <bdi dir="ltr">{pair[side]}</bdi>
    </td>
  );
}

export default function FeeTable({ lang }: { lang: Lang }) {
  return (
    <section className="fee-snapshot-section" id="fees">
      <h2>{t(lang, "feeTable")}</h2>
      <div className="matrix-scroll">
        <table className="fee-snapshot">
          <caption>{t(lang, "feeTableNote")}</caption>
          <thead>
            <tr>
              <th scope="col" rowSpan={2}>
                {t(lang, "exchange")}
              </th>
              <th scope="colgroup" colSpan={2}>
                {t(lang, "spot")}
              </th>
              <th scope="colgroup" colSpan={2}>
                {t(lang, "futures")}
              </th>
              <th scope="col" rowSpan={2}>
                {t(lang, "checked")}
              </th>
            </tr>
            <tr>
              <th scope="col">{t(lang, "maker")}</th>
              <th scope="col">{t(lang, "taker")}</th>
              <th scope="col">{t(lang, "maker")}</th>
              <th scope="col">{t(lang, "taker")}</th>
            </tr>
          </thead>
          <tbody>
            {feeSnapshotOrder.map((id) => {
              const row = feeSnapshots[id];
              return (
                <tr key={id}>
                  <th scope="row">
                    {exchanges[id].name}
                    {row.tier ? (
                      <span className="fee-tier">
                        {" "}
                        <bdi dir="ltr">{row.tier}</bdi>
                      </span>
                    ) : null}
                  </th>
                  <Cell pair={row.spot} side="maker" />
                  <Cell pair={row.spot} side="taker" />
                  <Cell pair={row.futures} side="maker" />
                  <Cell pair={row.futures} side="taker" />
                  <td>
                    <time dateTime={row.checked}>{row.checked}</time>
                    {row.futuresSource === row.source ? (
                      <a
                        href={row.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t(lang, "official")} ↗
                      </a>
                    ) : (
                      <>
                        <a
                          href={row.source}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t(lang, "spot")} ↗
                        </a>
                        <a
                          href={row.futuresSource}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t(lang, "futures")} ↗
                        </a>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
