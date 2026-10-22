/** Invite codes and destination URLs. Change them only here. */
export const inviteOrder = ["backpack", "binance", "okx"] as const;
export type InviteId = (typeof inviteOrder)[number];
export const placements = [
  "home_hero",
  "mobile_sticky",
  "referral_page",
  "exchange_page",
] as const;
export type Placement = (typeof placements)[number];
export const invites: Record<InviteId, { code: string; url: string }> = {
  backpack: {
    code: "meme",
    url: "https://backpack.exchange/join/meme",
  },
  binance: {
    code: "BNBBABA",
    url: "https://www.bsmkweb.cc/register?ref=BNBBABA",
  },
  okx: {
    code: "X45LZTTE",
    url: "https://okx.com/join/X45LZTTE",
  },
};
export const goRobotsTag = "noindex, nofollow";
export const goDisallow = ["/go", "/go/"];
export function isInvite(value: string): value is InviteId {
  return inviteOrder.includes(value as InviteId);
}
export function goPath(id: InviteId) {
  return `/go/${id}`;
}
/** Temporary redirect contract for /go/:exchange. */
export function goRedirect(exchange: string) {
  if (!isInvite(exchange)) return null;
  return {
    status: 307 as const,
    location: invites[exchange].url,
    robots: goRobotsTag,
  };
}
