/**
 * Footer-specific content: contact details, map embed, social links,
 * and upcoming closures.
 *
 * Everything here is read by Footer.astro — update values in this file
 * to change what the footer shows; no component changes needed.
 */

export const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d246.74595384263097!2d-111.72958176568403!3d40.280561513194094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a1803af3334cfbb%3A0xe41a44917725e13!2sBingham%20Family%20Clinic!5e1!3m2!1sen!2sus!4v1776098881820!5m2!1sen!2sus";

export const contact = {
  addressLines: ["987 South Geneva Road Suite 141", "Orem, UT 84058"],
  hours: [
    { days: "Monday - Friday", time: "10:00 - 6:00" },
    { days: "Saturday-Sunday", time: "Closed" },
  ],
  phone: "801.854.5168",
  phoneHref: "tel:+18018545168",
  email: "info@binghamfamilyclinic.org",
};

export type SocialIcon = "instagram" | "linkedin" | "facebook";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/binghamfamilyclinic/", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bingham-family-clinic/", icon: "linkedin" },
  { label: "Facebook", href: "https://www.facebook.com/people/Bingham-Family-Clinic/61580847037678/#", icon: "facebook" },
];


export const tagline = "Made with love for our community";

/**
 * Upcoming closures.
 *
 * Each entry is a single date, or a range if `endDate` is set:
 *
 *   { date: "2026-07-24" }                              → "July 24th"
 *   { date: "2026-07-24", endDate: "2026-07-26" }        → "July 24th - 26th"
 *   { date: "2026-11-27", endDate: "2026-11-28" }        → "November 27th - 28th"
 *   { date: "2026-12-30", endDate: "2027-01-02" }        → "December 30th - January 2nd"
 *
 * Both dates use "YYYY-MM-DD" format, and `endDate` must be on or after
 * `date`. Order doesn't matter — the footer sorts entries automatically
 * by start date. It's safe (and expected) to paste in a full year's
 * worth of closures at once: Footer.astro only ever displays the next 5
 * whose closure hasn't fully passed yet (a range stays visible through
 * its `endDate`), and a small client-side script re-checks against the
 * visitor's clock on every page load, so the list quietly advances to
 * the next closures on its own as each one passes — no code changes or
 * redeploys required as the year goes on. Once every entry here is in
 * the past, just append next year's dates.
 */
export interface ClosureEntry {
  /** Start date (or the only date, for a single-day closure). */
  date: string;
  /** Optional end date, for a multi-day closure. Omit for a single day. */
  endDate?: string;
}

export const closures: ClosureEntry[] = [
  { date: "2026-07-24" },
  { date: "2026-09-07", endDate: "2026-09-08" },
  { date: "2026-10-12" },
];