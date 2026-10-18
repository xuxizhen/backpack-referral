export function calculateFees(volume: number, rate: number, eligible: boolean) {
  if (
    !Number.isFinite(volume) ||
    !Number.isFinite(rate) ||
    volume < 0 ||
    rate < 0 ||
    rate > 100
  )
    return null;
  const gross = (volume * rate) / 100;
  if (!Number.isFinite(gross)) return null;
  const saving = eligible ? gross * 0.2 : 0;
  return { gross, saving, net: gross - saving };
}
