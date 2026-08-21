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
 * `roleExplanation` is optional — a short sentence or two on how this
 * person's role contributes to the clinic's mission. It renders inside
 * the card's collapsible bio, so it's only visible once expanded, not
 * on the closed card.
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
  /** Short sentence or two on how this role contributes to the mission. Shown only when the card is expanded. */
  roleExplanation?: string;
  /** Set true to list this person under "Alumni" instead of the current roster. */
  isAlumni?: boolean;
}

export const heading = "Bingham Family Clinic Leadership";
export const alumniHeading = "Alumni";

export const members: TeamMember[] = [
  {
    name: "Kirk Woodward",
    title: "CEO / CMO",
    image: "/images/kirk.png",
    bio: "WHY: I believe at the center of every primary care provider is the desire to care for people. Having the opportunity to provide a free clinic where our friends and neighbors can access care is really at the heart of primary cares values.",
    roleExplanation: "TODO: add a sentence or two on how this role contributes to the clinic's mission.",
    // isAlumni: true,
  },
  {
    name: "Sherilee Woodward",
    title: "Executive Director",
    image: "/images/sherilee.png",
    bio: "WHY: I am passionate about people and volunteering. The Bingham Family Clinic provides me with the privilege of serving others in a way that connects with my soul. I believe strong families are the foundation of strong communities.",
    roleExplanation: "TODO: add a sentence or two on how this role contributes to the clinic's mission.",
    // isAlumni: true,
  },
  {
    name: "Darrell Stacey",
    title: "Medical Director",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "TODO: add a sentence or two on how this role contributes to the clinic's mission.",
    // isAlumni: true,
  },
  {
    name: "Bryant Marchant",
    title: "Medical Director",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "TODO: add a sentence or two on how this role contributes to the clinic's mission.",
    // isAlumni: true,
  },
  {
    name: "Aubrey Monk",
    title: "Clinic Director",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "TODO: add a sentence or two on how this role contributes to the clinic's mission.",
    // isAlumni: true,
  },
  {
    name: "Pharamacist 1",
    title: "Pharmacist",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "TODO: add a sentence or two on how this role contributes to the clinic's mission.",
    // isAlumni: true,
  },
  {
    name: "Dix Densley",
    title: "Dental Director",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "TODO: add a sentence or two on how this role contributes to the clinic's mission.",
    // isAlumni: true,
  },
  {
    name: "Kristen Skinner",
    title: "Lab Director",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "TODO: add a sentence or two on how this role contributes to the clinic's mission.",
    // isAlumni: true,
  },
  {
    name: "Kayla Crapo",
    title: "Administrative Assistant",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "TODO: add a sentence or two on how this role contributes to the clinic's mission.",
    // isAlumni: true,
  },
  {
    name: "Clark Rowley",
    title: "Communications Coordinator",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "TODO: add a sentence or two on how this role contributes to the clinic's mission.",
    // isAlumni: true,
  },
  {
    name: "HR Personnel",
    title: "Volunteer Coordinator",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "TODO: add a sentence or two on how this role contributes to the clinic's mission.",
    // isAlumni: true,
  },
  {
    name: "Abigail Hartle",
    title: "Credentialing Coordinator",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "TODO: add a sentence or two on how this role contributes to the clinic's mission.",
    // isAlumni: true,
  },
];
