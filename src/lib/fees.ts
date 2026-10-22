import { exchanges } from "./exchanges";
import { inviteOrder, type InviteId } from "./invites";

export type FeePair = { maker: string; taker: string };
export type FeeSnapshot = {
  checked: string;
  source: string;
  futuresSource: string;
  tier: string;
  spot: FeePair;
  futures: FeePair;
};

/**
 * Public base-tier snapshots checked 2026-10-22. Rates exclude BNB or token
 * discounts and promotions. Backpack is Tier 1. Binance and OKX are the
 * regular-user tier; Binance futures are USDⓈ-M and USDT-margined.
 */
export const feeSnapshots: Record<InviteId, FeeSnapshot> = {
  backpack: {
    checked: exchanges.backpack.checked,
    source: exchanges.backpack.fee,
    futuresSource: exchanges.backpack.futuresFee,
    tier: "Tier 1",
    spot: { maker: "0.08%", taker: "0.10%" },
    futures: { maker: "0.02%", taker: "0.05%" },
  },
  binance: {
    checked: exchanges.binance.checked,
    source: exchanges.binance.fee,
    futuresSource: exchanges.binance.futuresFee,
    tier: "Regular",
    spot: { maker: "0.100%", taker: "0.100%" },
    futures: { maker: "0.0200%", taker: "0.0500%" },
  },
  okx: {
    checked: exchanges.okx.checked,
    source: exchanges.okx.fee,
    futuresSource: exchanges.okx.futuresFee,
    tier: "Regular",
    spot: { maker: "0.0800%", taker: "0.1000%" },
    futures: { maker: "0.0200%", taker: "0.0500%" },
  },
};
export const feeSnapshotOrder = inviteOrder;
