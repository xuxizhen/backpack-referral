import content from "@/content/exchanges.json";
import { invites } from "@/lib/invites";
export const exchangeIds = ["backpack", "okx", "binance"] as const;
export type ExchangeId = (typeof exchangeIds)[number];
export const exchanges = {
  backpack: {
    name: "Backpack",
    checked: "2026-10-20",
    mark: "B",
    color: "#e85247",
    url: invites.backpack.url,
    fee: "https://backpack.exchange/fees",
    sources: [
      "https://backpack.exchange",
      "https://backpack.exchange/fees",
      "https://support.backpack.exchange/exchange/programs/affiliate-program/flexible-commission-sharing",
    ],
    ...content.backpack,
  },
  okx: {
    name: "OKX",
    checked: "2026-10-21",
    mark: "OK",
    color: "#172c48",
    url: invites.okx.url,
    fee: "https://www.okx.com/fees",
    sources: [
      "https://www.okx.com/zh-hans/fees",
      "https://www.okx.com/help/trading-fee-rules-faq",
      "https://www.okx.com/en-us/help/what-is-okx-referral-program",
    ],
    ...content.okx,
  },
  binance: {
    name: "Binance",
    checked: "2026-10-20",
    mark: "◇",
    color: "#9a7000",
    url: invites.binance.url,
    fee: "https://www.binance.com/en/fee/trading",
    sources: [
      "https://www.binance.com/en/fee/trading",
      "https://www.binance.com/en/support/faq/detail/115000583311",
      "https://www.binance.com/zh-CN/activity/referral?stopRedirectToActivity=true",
    ],
    ...content.binance,
  },
};
export const pairs = {
  "backpack-vs-okx": ["backpack", "okx"],
  "backpack-vs-binance": ["backpack", "binance"],
  "okx-vs-binance": ["okx", "binance"],
} as const;
export type PairId = keyof typeof pairs;
export function isExchange(value: string): value is ExchangeId {
  return exchangeIds.includes(value as ExchangeId);
}
