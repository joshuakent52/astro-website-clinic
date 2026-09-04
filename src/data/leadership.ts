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
    image: "/images/kirk.webp",
    bio: "WHY: I believe at the center of every primary care provider is the desire to care for people. Having the opportunity to provide a free clinic where our friends and neighbors can access care is really at the heart of primary cares values.",
    roleExplanation: "Provides both the strategic and clinical leadership of the free clinic, overseeing its mission, operations, finances, partnerships, and medical quality",
    // isAlumni: true,
  },
  {
    name: "Sherilee Woodward",
    title: "Executive Director",
    image: "/images/sherilee.webp",
    bio: "WHY: I am passionate about people and volunteering. The Bingham Family Clinic provides me with the privilege of serving others in a way that connects with my soul. I believe strong families are the foundation of strong communities.",
    roleExplanation: "Leads the free clinic's strategy, operations, and growth to ensure sustainable, high-quality patient care.",
    // isAlumni: true,
  },
  {
    name: "Darrell Stacey",
    title: "Medical Director",
    image: "/images/stacey.webp",
    bio: "WHY: Feeling like he’s greatly blessed in his life, Doctor Stacey is overjoyed to be able to give back and try to bless the lives of other people by serving at the Bingham Family Clinic. Loretta is the first to say that having this opportunity to serve has added meaning and joy to his life.",
    roleExplanation: "Oversees the clinic's medical operations, ensuring safe, high-quality patient care and supporting providers in clinical decision-making.",
    // isAlumni: true,
  },
  {
    name: "Bryant Marchant",
    title: "Medical Director",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "Oversees the clinic's medical operations, ensuring safe, high-quality patient care and supporting providers in clinical decision-making.",
    // isAlumni: true,
  },
  {
    name: "Aubrey Monk",
    title: "Clinic Director",
    image: "/images/aubrey_monk.webp",
    bio: "Aubrey is a Physician Assistant who practices family medicine and serves as the Clinic Director at Bingham Family Clinic. She earned her Master of Physician Assistant Studies from Utah Valley University and enjoys caring for patients of all ages and backgrounds. She has special interest and experience in dermatology and women’s health. Aubrey is especially grateful to practice at Bingham Family Clinic, where she is passionate about providing accessible, compassionate healthcare to members of the community who may otherwise face barriers to care. She believes every patient deserves to be treated with dignity, respect, and compassion. Outside of medicine, Aubrey enjoys trying new things, spending time with her family, hiking with her dog, and traveling with her husband. She enjoys learning, meeting new people, and finding new ways to grow both personally and professionally. She is excited to be part of the Bingham Family Clinic team and looks forward to serving the community. ",
    roleExplanation: "Leads the clinic's day-to-day operations and clinical programs, ensuring effective, high-quality patient care.",
    // isAlumni: true,
  },
  {
    name: "Pharamacist 1",
    title: "Pharmacist",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "Oversees the clinic's pharmacy operations, ensuring the safe, effective, and compliant dispensing of medications while leading pharmacy services and staff.",
    // isAlumni: true,
  },
  {
    name: "Dix Densley",
    title: "Dental Director",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "Oversees the clinic's dental operations, ensuring high-quality patient care while leading dental services, providers, and clinical standards.",
    // isAlumni: true,
  },
  {
    name: "Kristen Skinner",
    title: "Lab Director",
    image: "/images/kristen_skinner.webp",
    bio: "WHY: I strongly believe that quality, reliable healthcare should be available to anyone who needs it. Having worked as a medical laboratory scientist in hospital, educational, and clinic settings I’ve seen firsthand how important lab values are in making healthcare decisions. Because of this two of my passions are medical laboratory science and healthcare education. At the Bingham Family Clinic I can extend that passion into something that brings value to the community around me.",
    roleExplanation: "Oversees the clinic's laboratory operations, ensuring accurate, timely, and compliant testing while maintaining high standards of quality and patient safety.",
    // isAlumni: true,
  },
  {
    name: "Kayla Crapo",
    title: "Administrative Assistant",
    image: "/images/kayla_crapo.webp",
    bio: "WHY: I began here as a service missionary, painting walls and building shelves, but along the way, I fell in love with the mission of the clinic. I’ve had the opportunity to grow alongside the clinic, learning new skills, taking on new challenges, and seeing firsthand the difference this work makes. Being part of something that continues to grow and provide such meaningful care and support to our community has been incredibly rewarding. I’m grateful to keep learning, growing, and contributing to a mission that truly makes a difference in the lives of others.",
    roleExplanation: "Supports the Executive Director by coordinating administrative operations, communications, scheduling, and organizational priorities to keep the clinic running efficiently.",
    // isAlumni: true,
  },
  {
    name: "Clark Rowley",
    title: "Communications Coordinator",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "Oversees the clinic's communications, marketing, and public outreach to promote its mission and engage volunteers, donors, and the community.",
    // isAlumni: true,
  },
  {
    name: "Elise Dowdle",
    title: "Volunteer Coordinator",
    image: "/images/elise_dowdle.jpeg",
    bio: "I have always loved the healthcare field because of its ability to lift people up and change lives. Small acts of service can make someone feel cared for, supported, and valued. Every small thing we do in the clinic makes a real impact on both our patients and our volunteers. Through serving here, I have seen the growth of others as well as my own. I feel so grateful to be a part of the good work being done here at the clinic and to experience the joy that comes from it.",
    roleExplanation: "Oversees volunteer recruitment, onboarding, records, and personnel processes to support an effective and engaged workforce.",
    // isAlumni: true,
  },
  {
    name: "Abigail Hartle",
    title: "Credentialing Coordinator",
    image: "/images/placeholder.png",
    bio: "TODO: add bio paragraph(s) for this leadership team member.",
    roleExplanation: "Oversees the credentialing and compliance of clinical volunteers, ensuring required licenses, certifications, and documentation remain current and complete.",
    // isAlumni: true,
  },
  {
    name: "Elder Joseph Tremblay",
    title: "Facilities Coordinator",
    image: "/images/joseph_tremblay.webp",
    bio: "WHY: I am passionate about serving and helping people in the community. I enjoy using my skills and talents to help and serve others.",
    roleExplanation: "Oversees the clinic's facilities, equipment, and maintenance to ensure a safe, functional, and welcoming environment.",
    // isAlumni: true,
  },
];
