import { exchanges, type ExchangeId } from "@/lib/exchanges";
import { goPath, type Placement } from "@/lib/invites";
import { t, type Lang } from "@/lib/i18n";

export default function ExchangeLink({
  lang,
  id,
  placement,
}: {
  lang: Lang;
  id: ExchangeId;
  placement: Placement;
}) {
  return (
    <a
      className="button"
      href={goPath(id)}
      target="_blank"
      rel="sponsored nofollow noopener"
      data-exchange={id}
      data-placement={placement}
      data-language={lang}
    >
      {t(lang, "register")} <span aria-hidden="true">↗</span>
      <span className="sr-only"> {exchanges[id].name}</span>
    </a>
  );
}
