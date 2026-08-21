/**
 * Content for the "Clinic Leadership" page (/about/leadership).
 * Structured the same way as data/board.ts: one roster array, rendered
 * as full profile cards (photo, title, collapsible bio).
 *
 * Everyone lives in the same `members` array. Set `isAlumni: true` on
 * a person to move them from the current roster (BoardGrid, at the
 * top of the page) into the Alumni section (AlumniGrid, at the
 * bottom) — that single flag is the only change needed. The Alumni
 * section disappears automatically on the page if nobody currently
 * has `isAlumni: true`.
 *
 * Each bio is written as separate paragraphs, separated by newlines
 * (same convention as data/board.ts).
 *
 * TODO: replace the placeholder entry below with the real Clinic
 * Leadership roster, photos, and bios.
 */

export interface TeamMember {
  name: string;
  title: string;
  /** Path under /images, e.g. "/images/bio1.png". */
  image: string;
  bio: string;
  /** Set true to list this person under "Alumni" instead of the current roster. */
  isAlumni?: boolean;
}

export const heading = "Bingham Family Clinic Leadership";
export const alumniHeading = "Alumni";

export const members: TeamMember[] = [
  {
    name: "Full Name",
    title: "Title / Role",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    // isAlumni: true,
  },
];
