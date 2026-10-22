"use client";
import { useEffect, useState } from "react";

export default function CopyCode({
  code,
  copyLabel,
  copiedLabel,
  name,
}: {
  code: string;
  copyLabel: string;
  copiedLabel: string;
  name: string;
}) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);
  async function onCopy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(code);
      ok = true;
    } catch {
      try {
        const area = document.createElement("textarea");
        area.value = code;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.append(area);
        area.select();
        ok = document.execCommand("copy");
        area.remove();
      } catch {
        ok = false;
      }
    }
    if (ok) setCopied(true);
  }
  const label = copied ? copiedLabel : copyLabel;
  return (
    <button type="button" className="copy-button" onClick={onCopy}>
      {label}
      <span className="sr-only"> {name}</span>
    </button>
  );
}
