import Link from "next/link";
import { exchanges } from "@/lib/exchanges";
import { t, type Lang } from "@/lib/i18n";
import { inviteOrder } from "@/lib/invites";
import {
  updateFilters,
  updateCopy,
  type UpdateFilter,
  type UpdateItem,
} from "@/lib/updates";
import ExchangeLink from "./ExchangeLink";

const categoryKey = {
  listing: "categoryListing",
  fees: "categoryFees",
  product: "categoryProduct",
  promotion: "categoryPromotion",
  regulatory: "categoryRegulatory",
  other: "categoryOther",
} as const;

export default function Updates({
  lang,
  exchange = "all",
  items,
}: {
  lang: Lang;
  exchange?: UpdateFilter;
  items: readonly UpdateItem[];
}) {
  return (
    <div className="updates-layout">
      <div>
        <nav className="update-filters" aria-label={t(lang, "filterByExchange")}>
          {updateFilters.map((id) => {
            const href =
              id === "all"
                ? `/${lang}/updates`
                : `/${lang}/updates?exchange=${id}`;
            return (
              <Link
                key={id}
                href={href}
                aria-current={exchange === id ? "page" : undefined}
              >
                {id === "all" ? t(lang, "filterAll") : exchanges[id].name}
              </Link>
            );
          })}
        </nav>
        {items.length === 0 ? (
          <p className="updates-empty">{t(lang, "noUpdates")}</p>
        ) : (
          <div className="updates-list">
            {items.map((item) => {
              const copy = updateCopy(item, lang);
              return (
                <article className="update-item" key={item.id}>
                  <div className="update-date">
                    <strong>{exchanges[item.exchange].name}</strong>
                    <time dateTime={item.date}>{item.date}</time>
                    <span className="category-badge">
                      {t(lang, categoryKey[item.category])}
                    </span>
                  </div>
                  <div>
                    <h2>{copy.title}</h2>
                    <p>{copy.summary}</p>
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      {t(lang, "source")} <span aria-hidden="true">↗</span>
                      <span className="sr-only"> {copy.title}</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
      <aside className="updates-invites">
        <h2>{t(lang, "offers")}</h2>
        <ul>
          {inviteOrder.map((id) => (
            <li key={id}>
              <strong>{exchanges[id].name}</strong>
              <ExchangeLink lang={lang} id={id} placement="updates_page" />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
