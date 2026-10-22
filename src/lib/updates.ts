import {
  updateExchanges,
  updateItems,
  type UpdateExchange,
  type UpdateItem,
} from "@/data/updates";
import type { Lang } from "@/lib/i18n";

export type { UpdateExchange, UpdateItem };
export const updateFilters = ["all", ...updateExchanges] as const;
export type UpdateFilter = (typeof updateFilters)[number];

export function compareUpdates(a: UpdateItem, b: UpdateItem) {
  const byDate = b.date.localeCompare(a.date);
  return byDate === 0 ? a.id.localeCompare(b.id) : byDate;
}

export function sortUpdates(items: readonly UpdateItem[]) {
  return [...items].sort(compareUpdates);
}

export const updates = sortUpdates(updateItems);

export function isUpdateFilter(value: string): value is UpdateFilter {
  return updateFilters.includes(value as UpdateFilter);
}

/** Missing or unknown filters show every item. */
export function selectUpdates(
  items: readonly UpdateItem[],
  exchange?: string,
) {
  const sorted = sortUpdates(items);
  if (!exchange || exchange === "all" || !isUpdateFilter(exchange))
    return sorted;
  return sorted.filter((item) => item.exchange === exchange);
}

export function updateCopy(item: UpdateItem, lang: Lang) {
  const key = lang === "zh-cn" ? "zh" : "en";
  return { title: item.title[key], summary: item.summary[key] };
}

export function newestUpdateDate(items: readonly UpdateItem[] = updates) {
  return sortUpdates(items)[0]?.date ?? "";
}
