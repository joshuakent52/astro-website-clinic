/**
 * Shared, cross-cutting types for the site.
 * Keep this file minimal; add types here only once they are actually
 * shared across more than one component or page.
 */

/** Metadata used to populate <head> SEO/social tags via BaseLayout. */
export interface SeoProps {
  /** Page title. Combined with the site name in BaseLayout. */
  title: string;
  /** Short page description used for meta description and social cards. */
  description: string;
  /** Absolute canonical URL for this page. */
  canonicalUrl?: string;
  /** Absolute URL to an Open Graph / Twitter share image. */
  ogImage?: string;
  /** Open Graph content type, e.g. "website" or "article". */
  ogType?: "website" | "article";
}

/**
 * Shared variant scale used by Button and similar interactive components.
 * "inverse" is a white button for use on dark or photo backgrounds (e.g.
 * hero sections) where "primary" or "outline" wouldn't have enough contrast.
 */
export type Variant = "primary" | "secondary" | "outline" | "ghost" | "inverse";

/** A single navigation entry, used by Navbar and MobileMenu. */
export interface NavItem {
  label: string;
  href: string;
  /** Nested items, if this entry expands into a submenu. */
  children?: NavItem[];
}
