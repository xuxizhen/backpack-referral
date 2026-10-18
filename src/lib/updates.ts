import data from "@/content/updates.json";
export type Update = (typeof data)[number];
export const updates = [...data].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);
export function status(item: Update, now = Date.now()) {
  if (item.kind !== "campaign") return "news";
  if (!item.startsAt || !item.endsAt) return "unconfirmed";
  if (now < Date.parse(item.startsAt)) return "upcoming";
  if (now >= Date.parse(item.endsAt)) return "ended";
  return "active";
}
export function featuredUpdates(now = Date.now()) {
  const visible = updates.filter(
    (i) => !["ended", "unconfirmed"].includes(status(i, now)),
  );
  return [
    ...visible.filter((i) => status(i, now) === "active"),
    ...visible.filter((i) => status(i, now) !== "active"),
  ].slice(0, 3);
}
