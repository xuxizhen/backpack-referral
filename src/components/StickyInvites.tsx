"use client";
import { useEffect, useSyncExternalStore } from "react";
import { exchanges } from "@/lib/exchanges";
import { goPath, inviteOrder } from "@/lib/invites";
import { t, type Lang } from "@/lib/i18n";

const storageKey = "feelens-sticky";
let memoryDismissed = false;

function readDismissed() {
  if (memoryDismissed) return true;
  try {
    return sessionStorage.getItem(storageKey) === "1";
  } catch {
    return false;
  }
}
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("feelens-sticky", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("feelens-sticky", callback);
  };
}

export default function StickyInvites({ lang }: { lang: Lang }) {
  const dismissed = useSyncExternalStore(subscribe, readDismissed, () => false);
  useEffect(() => {
    document.body.classList.toggle("sticky-dismissed", dismissed);
    return () => document.body.classList.remove("sticky-dismissed");
  }, [dismissed]);
  if (dismissed) return null;
  return (
    <div className="sticky-invites">
      <p className="sr-only">{t(lang, "stickyLabel")}</p>
      {inviteOrder.map((id) => (
        <a
          key={id}
          className="sticky-invite"
          href={goPath(id)}
          target="_blank"
          rel="sponsored nofollow noopener"
          data-exchange={id}
          data-placement="mobile_sticky"
          data-language={lang}
        >
          {exchanges[id].name}
          <span className="sr-only"> {t(lang, "register")}</span>
        </a>
      ))}
      <button
        type="button"
        className="sticky-dismiss"
        onClick={() => {
          memoryDismissed = true;
          try {
            sessionStorage.setItem(storageKey, "1");
          } catch {
            /* dismissing still hides the bar for this view */
          }
          document.body.classList.add("sticky-dismissed");
          window.dispatchEvent(new Event("feelens-sticky"));
        }}
      >
        <span aria-hidden="true">×</span>
        <span className="sr-only">{t(lang, "dismiss")}</span>
      </button>
    </div>
  );
}
