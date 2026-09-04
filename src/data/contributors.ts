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
    name: "Ethan Callaway",
    title: "Human Resources",
    image: "/images/ethan_callaway.jpg",
    bio: "WHY: I enjoy serving at the Bingham Family Clinic to help forward the organization's operation as it blesses the lives of so many people in our community. ",
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
    image: "/images/trey_jones.webp",
    bio: "WHY: I believe the center of equitable healthcare begins with equal access to language services regardless of English proficiency. Leading the Patient Navigator Program allows volunteers to bridge the linguistic, cultural, and familiarity gaps in a professional and compassionate manner.",
    roleExplanation: "Supports medical interpretation through volunteer onboarding, competency assessments, interviews, and quality standards to ensure ethical and effective interpretation."    
    // isAlumni: true,
  },
  {
    name: "Josiah Lee",
    title: "Patient Navigator Trainer",
    image: "/images/josiah_lee.webp",
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
    image: "/images/miranda.webp",
    bio: "WHY: Healthcare is deeply personal, and navigating it should never be a journey taken alone. I believe that true wellness begins with connection, empathy, and access. My focus is to serve our community with humility and care, ensuring every patient feels seen, supported, and empowered to receive the quality resources and dignified care that they deserve.",
    roleExplanation: "Promotes the clinic through community events, outreach activities, and public engagement."
    // isAlumni: true,
  },
  {
    name: "Elle Crawford",
    title: "Community Outreach Lead",
    image: "/images/elle_crawford.jpg",
    bio: "WHY: To start, I love both the clinical and outreach aspects of the Clinic. I’ve learned through my various experiences that connecting people to resources is just as important as the care they receive inside a clinic. I volunteer at the Bingham Family Clinic because I genuinely care about helping people access the healthcare they need, and I want to make a difference for those in need in my community. A lot of people out there need help but don’t know who or where to turn to. That’s why outreach matters so much to me! Because it’s not just about the care inside the clinic; it’s about making sure families know the clinic exists, feel welcome walking in, and understand that there are resources available for them. By volunteering, I get to bridge that gap, connect people to the support they deserve, and remind them they’re not alone. Every time I help someone find the right resource or feel more confident about their care plan, it reinforces my commitment to becoming a nurse who serves with compassion and advocates for those who need it most.",
    roleExplanation: "Promotes the clinic through community events, outreach activities, and public engagement."
    // isAlumni: true,
  },
  {
    name: "Loretta Stacey",
    title: "Volunteer Appreciation Team Member",
    image: "/images/stacey.webp",
    bio: "",
    roleExplanation: "Aids in appreciation efforts for volunteers.",
    // isAlumni: true,
  },
];
