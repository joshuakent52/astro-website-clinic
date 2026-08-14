/**
 * Content for the classes page (/classes).
 * Kept separate from the section components so copy, images, and the
 * class list can be updated without touching any markup.
 */

export const hero = {
  // Placeholder path — add the real photo to public/images and update this.
  // Missing files 404 quietly in the browser rather than breaking the build,
  // same as the homepage images (see CLAUDE.md > Images).
  backgroundImage: "/images/image9.png",
  heading: "Classes at Bingham Family Clinic",
  subheading:
    "The unique system model of Bingham Family Clinic allows us to offer a variety of free classes to those searching for opportunities to armor themselves with knowledge. From the UVU Pre-Med club to Nutrition and Diabetes care, everyone can learn with the added benefits of learning from real medical professionals in a clinical setting!",
};

export interface ClassItem {
  image: string;
  title: string;
  description: string;
}

export const classes: ClassItem[] = [
  {
    image: "/images/image10.png",
    title: "Nutrition and Diabetes Care",
    description:
      "Join us for this ongoing class, held on the third Wednesday of each month at 5:00 PM—we'd love to have you there!",
  },
  {
    image: "/images/image11.png",
    title: "Exercise and Physiology Class",
    description:
      "Join us for this exciting class every Tuesday and Thursday! Sessions are one hour in duration, and begin at 11:00 AM on Thursdays, and at 1:00 PM on Tuesdays.",
  },
];
