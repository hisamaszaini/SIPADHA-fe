/**
 * Format tanggal ke bentuk string (contoh: 14 September 2025)
 */
export function formatTanggal(date?: Date | string, locale = "id-ID"): string {
  if (!date) return "-";

  const d = typeof date === "string" ? new Date(date) : date;
  if (isNaN(d.getTime())) return "-";

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(d);
}

/**
 * Format tanggal singkat (contoh: 14/09/2025)
 */
export function formatTanggalSingkat(date?: Date | string, locale = "id-ID"): string {
  if (!date) return "-";

  const d = typeof date === "string" ? new Date(date) : date;
  if (isNaN(d.getTime())) return "-";

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}
