/**
 * Content for the "Clinic Leadership" page (/about/leadership).
 * Structured the same way as data/board.ts: current roster (rendered
 * with BoardGrid/BoardCard) plus a simpler alumni list (rendered with
 * AlumniGrid) for past leadership members.
 *
 * Each bio is written as separate paragraphs, separated by newlines
 * (same convention as data/board.ts).
 *
 * TODO: replace the placeholder entries below with the real Clinic
 * Leadership roster, photos, and bios.
 */

export interface TeamMember {
  name: string;
  title: string;
  /** Path under /images, e.g. "/images/bio1.png". */
  image: string;
  bio: string;
}

export interface AlumniMember {
  name: string;
  title: string;
}

export const heading = "Bingham Family Clinic Leadership";

export const members: TeamMember[] = [
  {
    name: "Full Name",
    title: "Title / Role",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
  },
];

export const alumniHeading = "Alumni";

export const alumni: AlumniMember[] = [
  {
    name: "Full Name",
    title: "Former Title / Role",
  },
];
