/** "Jun 12" — used in compact lists. */
export function shortDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** "Jun 12, 2026" — used on the blog index and post pages. */
export function longDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** "2026-06-12", for <time datetime="..."> */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
