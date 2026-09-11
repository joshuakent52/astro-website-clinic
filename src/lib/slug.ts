/**
 * Slugify a person's name for stable deep-link anchors
 * (e.g. "Joshua Kent" -> "joshua-kent").
 * Shared by BoardCard (card `id`) and the about pages (JSON-LD URLs)
 * so anchors and structured data always agree.
 */
export function slugifyName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
