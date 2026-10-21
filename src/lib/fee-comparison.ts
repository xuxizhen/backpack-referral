/** Null means missing/invalid input; zero remains a valid confirmed fee. */
export function estimateFee(volume: string, rate: string): number | null {
  if (!volume.trim() || !rate.trim()) return null;
  const v = Number(volume),
    r = Number(rate);
  if (!Number.isFinite(v) || !Number.isFinite(r) || v < 0 || r < 0 || r > 100)
    return null;
  const fee = v * (r / 100);
  return Number.isFinite(fee) ? fee : null;
}
