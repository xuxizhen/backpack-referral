import Link from "next/link";
import CopyCode from "./CopyCode";
import { exchanges } from "@/lib/exchanges";
import {
  goPath,
  inviteOrder,
  invites,
  type InviteId,
  type Placement,
} from "@/lib/invites";
import { t, type Lang } from "@/lib/i18n";

const benefitKey = {
  backpack: "benefitBackpack",
  binance: "benefitBinance",
  okx: "benefitOkx",
} as const;

export function InviteCard({
  lang,
  id,
  placement,
  detailHref,
  detailLabel,
  single = false,
}: {
  lang: Lang;
  id: InviteId;
  placement: Placement;
  detailHref: string;
  detailLabel: string;
  single?: boolean;
}) {
  const invite = invites[id];
  const exchange = exchanges[id];
  return (
    <article
      className={single ? "invite-card invite-card-single" : "invite-card"}
    >
      <div className="invite-card-top">
        <span
          className="exchange-monogram"
          style={{ color: exchange.color }}
          aria-hidden="true"
        >
          {exchange.mark}
        </span>
        <h2>{exchange.name}</h2>
      </div>
      <p className="invite-benefit">{t(lang, benefitKey[id])}</p>
      <div className="invite-code-row">
        <span className="invite-code-label">{t(lang, "inviteCode")}</span>
        <code dir="ltr" translate="no">{invite.code}</code>
        <CopyCode
          code={invite.code}
          copyLabel={t(lang, "copy")}
          copiedLabel={t(lang, "copied")}
          name={exchange.name}
        />
      </div>
      <div className="invite-actions">
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
          <span className="sr-only"> {exchange.name}</span>
        </a>
        <Link className="plain-link" href={detailHref}>
          {detailLabel}
        </Link>
      </div>
    </article>
  );
}

export function InviteCards({
  lang,
  placement,
  ids = inviteOrder,
}: {
  lang: Lang;
  placement: Placement;
  ids?: readonly InviteId[];
}) {
  return (
    <div
      className={
        ids.length === 2 ? "invite-grid invite-grid-pair" : "invite-grid"
      }
    >
      {ids.map((id) => (
        <InviteCard
          key={id}
          lang={lang}
          id={id}
          placement={placement}
          detailHref={`/${lang}/exchanges/${id}`}
          detailLabel={t(lang, "details")}
        />
      ))}
    </div>
  );
}
