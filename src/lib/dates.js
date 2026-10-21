// True once the day of an event (written "2026-05-16") has fully passed.
export function isPast(isoDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(`${isoDate}T23:59:59`) < today;
}
