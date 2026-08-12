import type { NavItem } from "../types";

/**
 * Site-wide configuration.
 * Single source of truth for the site name, logo, and primary navigation.
 * Header, Footer, and BaseLayout all read from here so a nav or branding
 * change only has to happen in one place.
 */

export const siteName = "Bingham Family Clinic";

export const siteDescription =
  "Free, community-focused healthcare for families in Utah County.";

export const logo = {
  src: "/images/image3.png",
  alt: "Bingham Family Clinic",
};

/**
 * Primary navigation, shared by the header (desktop + mobile) and footer.
 *
 * NOTE: This is currently the only page built, so every entry points to
 * "/" as a placeholder. Update each `href` to its real route as that page
 * is built — nothing else needs to change when you do.
 */
export const navItems: NavItem[] = [
  { label: "About", href: "/" },
  { label: "Classes", href: "/" },
  { label: "Donate", href: "/" },
  { label: "Volunteer", href: "/" },
  { label: "Appointments", href: "/" },
];
