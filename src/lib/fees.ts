import { exchanges } from "./exchanges";
import { inviteOrder, type InviteId } from "./invites";

export type FeePair = { maker: string; taker: string };
export type FeeSnapshot = {
  checked: string;
  source: string;
  tier: string | null;
  spot: FeePair;
  futures: FeePair | null;
};

/**
 * Numeric public snapshots. Binance and OKX reuse the rates already recorded
 * in the exchange profiles. Futures stay empty when those profiles do not
 * publish a futures number. Backpack Tier 1 was checked on 2026-10-22.
 */
export const feeSnapshots: Record<InviteId, FeeSnapshot> = {
  backpack: {
    checked: "2026-10-22",
    source: exchanges.backpack.fee,
    tier: "Tier 1",
    spot: { maker: "0.08%", taker: "0.10%" },
    futures: { maker: "0.02%", taker: "0.05%" },
  },
  binance: {
    checked: exchanges.binance.checked,
    source: exchanges.binance.fee,
    tier: null,
    spot: { maker: "0.100%", taker: "0.100%" },
    futures: null,
  },
  okx: {
    checked: exchanges.okx.checked,
    source: exchanges.okx.fee,
    tier: null,
    spot: { maker: "0.0800%", taker: "0.1000%" },
    futures: null,
  },
};
export const feeSnapshotOrder = inviteOrder;
