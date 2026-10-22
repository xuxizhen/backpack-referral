import { exchanges } from "@/lib/exchanges";
import { feeSnapshotOrder, feeSnapshots, type FeePair } from "@/lib/fees";
import { t, type Lang } from "@/lib/i18n";

function Cell({
  pair,
  side,
  empty,
}: {
  pair: FeePair | null;
  side: keyof FeePair;
  empty: string;
}) {
  if (!pair) {
    return (
      <td>
        <span aria-hidden="true">—</span>
        <span className="sr-only">{empty}</span>
      </td>
    );
  }
  return (
    <td>
      <bdi dir="ltr">{pair[side]}</bdi>
    </td>
  );
}

export default function FeeTable({ lang }: { lang: Lang }) {
  const empty = t(lang, "notListed");
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
                  <Cell pair={row.spot} side="maker" empty={empty} />
                  <Cell pair={row.spot} side="taker" empty={empty} />
                  <Cell pair={row.futures} side="maker" empty={empty} />
                  <Cell pair={row.futures} side="taker" empty={empty} />
                  <td>
                    <time dateTime={row.checked}>{row.checked}</time>
                    <a
                      href={row.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(lang, "official")} ↗
                    </a>
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
