/**
 * Content for the homepage donor recognition section.
 * Kept separate from the section component so the donor list can be
 * updated without touching any markup.
 *
 * To add a donor, add another string to the `names` array below.
 * There is no cap on how many names this list can hold — the section
 * component lays them out in a wrapping, static list, so it will
 * simply grow (and re-flow into more columns) as names are added.
 * Names are displayed in the order listed here.
 */

export const donorRecognition = {
  heading: "With Gratitude to Our Donors",
  subheading:
    "The Bingham Family Clinic is made possible by the generosity of the following individuals and organizations.",
  // Add or remove names here — any number is supported.
  names: [
    "Michael & Gina Bingham",
    "Marc & Debbie Bingham",
    "Bruce Woolley",
    "Kirk & Sherilee Woodward",
    "Rocky Wood Foundation",
    "Rimrock Construction",
    "Randy & Linda Dearth",
    "Naum Vucak Plumbing",
  ],
};
