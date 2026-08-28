/**
 * Content for the "Key Contributors" page (/about/key-contributors).
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
 * TODO: replace the placeholder entry below with the real Key
 * Contributors roster, photos, and bios.
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

export const heading = "Bingham Family Clinic Key Contributors";
export const alumniHeading = "Alumni";

export const members: TeamMember[] = [
  {
    name: "Joshua Kent",
    title: "Systems Coordinator",
    image: "/images/joshua_kent.png",
    bio: "WHY: This is a valuable opportunity to give back to my hometown. I've seen first hand the difference the clinic has made in many lives—patients, volunteers, and mine. I'm invested in the mission, because I want to expand these opportunities for others.",
    roleExplanation: "Oversees the clinic's technology, information systems, data, and other operational support functions to improve efficiency and organizational effectiveness.",
    // isAlumni: true,
  },
  {
    name: "HR Personnel 2",
    title: "Human Resources",
    image: "/images/placeholder.png",
    bio: "WHY",
    // isAlumni: true,
  },
  {
    name: "Daniel Gordon",
    title: "Office Manager",
    image: "/images/placeholder.png",
    bio: "WHY",
    // isAlumni: true,
  },
  {
    name: "Trey Jones",
    title: "Patient Navigator Trainer",
    image: "/images/trey_jones.png",
    bio: "WHY: I believe the center of equitable healthcare begins with equal access to language services regardless of English proficiency. Leading the Patient Navigator Program allows volunteers to bridge the linguistic, cultural, and familiarity gaps in a professional and compassionate manner.",
    roleExplanation: "Supports medical interpretation through volunteer onboarding, competency assessments, interviews, and quality standards to ensure ethical and effective interpretation."    
    // isAlumni: true,
  },
  {
    name: "Josiah Lee",
    title: "Patient Navigator Trainer",
    image: "/images/josiah_lee.png",
    bio: "WHY: I love seeing peoples faces light up once they find out they can finally get the care they need or when you speak to them in their native language. Connecting with patients through their unique cultures is something I’m grateful I can do at the Bingham Family Clinic. While our time may not be much, it really makes a difference in our patients lives. Our mission is to serve our fellow man, and I’m here for it.",
    roleExplanation: "Supports medical interpretation through volunteer onboarding, competency assessments, interviews, and quality standards to ensure ethical and effective interpretation."    
    // isAlumni: true,
  },
  {
    name: "Elise Anderson",
    title: "Credentialing Committee",
    image: "/images/placeholder.png",
    bio: "WHY",
    // isAlumni: true,
  },
  {
    name: "Annette Adams",
    title: "Credentialing Committee",
    image: "/images/placeholder.png",
    bio: "WHY",
    // isAlumni: true,
  },
  {
    name: "Miranda Mann",
    title: "Community Outreach Lead",
    image: "/images/miranda.png",
    bio: "WHY: Healthcare is deeply personal, and navigating it should never be a journey taken alone. I believe that true wellness begins with connection, empathy, and access. My focus is to serve our community with humility and care, ensuring every patient feels seen, supported, and empowered to receive the quality resources and dignified care that they deserve.",
    roleExplanation: "Promotes the clinic through community events, outreach activities, and public engagement."
    // isAlumni: true,
  },
];
