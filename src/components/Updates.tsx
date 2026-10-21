import { exchanges, isExchange } from "@/lib/exchanges";
import { t, type Lang } from "@/lib/i18n";
import { updates, featuredUpdates, status } from "@/lib/updates";
export default function Updates({
  lang,
  full = false,
}: {
  lang: Lang;
  full?: boolean;
}) {
  return (
    <section className="updates-full">
      <div className="updates-list">
        {(full ? updates : featuredUpdates())
          .filter((i) => status(i) !== "unconfirmed")
          .map((item) => {
            const copy =
              lang === "en" || lang === "zh-cn"
                ? {
                    title: item.title[lang === "en" ? 0 : 1],
                    summary: item.summary[lang === "en" ? 0 : 1],
                    details: item.details[lang === "en" ? 0 : 1],
                  }
                : item.translations[lang];
            const state = status(item);
            return (
              <article className="update-item" key={item.id}>
                <div className="update-date">
                  <strong>
                    {isExchange(item.exchange)
                      ? exchanges[item.exchange].name
                      : item.exchange}
                  </strong>
                  <span>{t(lang, "publication")}</span>
                  <time dateTime={item.publishedAt}>{item.publishedAt}</time>
                  <span className={`tag status-${state}`}>
                    {state === "unconfirmed" ? "" : t(lang, state)}
                  </span>
                </div>
                <div>
                  <h2>
                    <a
                      href={item.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {copy.title} ↗
                    </a>
                  </h2>
                  <p>{copy.summary}</p>
                  {full && <p>{copy.details}</p>}
                  {item.endsAt && (
                    <small>
                      {t(lang, "window")}:{" "}
                      <bdi>
                        {item.startsAt} — {item.endsAt}
                      </bdi>
                    </small>
                  )}
                  <small>
                    {t(lang, "checked")}: {item.checkedAt} ·{" "}
                    <a
                      href={item.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <bdi>{new URL(item.source).hostname}</bdi>
                    </a>
                  </small>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
}
