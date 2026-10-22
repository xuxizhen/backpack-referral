export const siteUrl = "https://www.feelens.net";
export const liveLangs = [
  "en",
  "zh-cn",
  "fr",
  "pt",
  "ko",
  "ja",
  "ru",
  "fa",
] as const;
const liveLangSet = new Set<string>(liveLangs);
const legacyHosts = new Set([
  "backpackref.com",
  "www.backpackref.com",
  "backpack-referral.vercel.app",
  "feelens.net",
]);
const legacyLocales: Record<string, string> = {
  "zh-tw": "zh-cn",
  it: "en",
  de: "en",
};
const legacySlugs: Record<string, string> = {
  review: "exchanges/backpack",
  referral: "referrals/backpack",
  fees: "compare",
  tutorial: "exchanges/backpack",
  safety: "risk-disclosure",
  faq: "compare",
  "vs-binance": "compare/backpack-vs-binance",
};
function isLiveLang(lang: string) {
  return liveLangSet.has(lang);
}
export function finalPathname(pathname: string) {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname || "/";
  if (normalized === "/") return "/en";
  const [head, ...rest] = normalized.split("/").filter(Boolean);
  const lang = legacyLocales[head] ?? (isLiveLang(head) ? head : null);
  if (!lang) return normalized;
  if (rest.length === 1 && legacySlugs[rest[0]])
    return `/${lang}/${legacySlugs[rest[0]]}`;
  return `/${lang}${rest.length ? `/${rest.join("/")}` : ""}`;
}
export function canonicalLocation(
  hostHeader: string | null,
  pathname: string,
  search = "",
) {
  const host = (hostHeader ?? "")
    .split(",")[0]
    .trim()
    .replace(/:\d+$/, "")
    .replace(/\.$/, "")
    .toLowerCase();
  const destinationPath = finalPathname(pathname);
  if (pathname === destinationPath && !legacyHosts.has(host)) return null;
  return `${siteUrl}${destinationPath}${search}`;
}
