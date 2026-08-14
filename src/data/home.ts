/**
 * Content for the homepage.
 * Kept separate from the section components so copy, images, and the
 * eligibility figures can be updated without touching any markup.
 */

export const hero = {
  backgroundImage: "/images/image2.png",
  heading: "Caring for the Families of Utah County",
  subheading: "Every Family Deserves Compassionate Care - Everyone Welcome",
  ctaText: "Request an Appointment",
  // Placeholder until the Appointments page exists.
  ctaHref: "/appointments",
};

export interface Stat {
  value: string;
  label?: string;
}

export const stats: Stat[] = [
  { value: "Open" },
  { value: "Free", label: "Healthcare" },
  { value: "100%", label: "Community Focused" },
];

export const mission = {
  backgroundImage: "/images/image1.png",
  heading: "Our Mission",
  statement:
    "Providing health and wellness for everyday people through quality, compassionate medical care. We are committed to fostering a healthy community through accessible services, preventive care and patient-centered support.",
  tagline:
    "Powered by Volunteer Care, Community Connection, and Medical Support",
};

export interface EligibilityRow {
  size: number;
  annual: string;
  monthly: string;
}

export const eligibility = {
  heading: "Who Is Eligible For Care?",
  subheading: "Clients must meet the following two pieces of criteria.",
  criteria: [
    "Clients must be uninsured.",
    "Total household income must be below 300% of the federal poverty level.",
  ],
  // Update this table each year when the federal poverty guidelines change.
  tableCaption: "300% of the 2026 Federal Poverty Level for the 48 Contiguous States",
  tableColumns: ["Household/Family Size", "Annual Income", "Monthly Income"],
  tableRows: [
    { size: 1, annual: "$47,880", monthly: "$3,990" },
    { size: 2, annual: "$64,920", monthly: "$5,410" },
    { size: 3, annual: "$81,960", monthly: "$6,830" },
    { size: 4, annual: "$99,000", monthly: "$8,250" },
    { size: 5, annual: "$116,040", monthly: "$9,670" },
    { size: 6, annual: "$133,080", monthly: "$11,090" },
    { size: 7, annual: "$150,120", monthly: "$12,510" },
    { size: 8, annual: "$167,160", monthly: "$13,930" },
    { size: 9, annual: "$184,200", monthly: "$15,350" },
    { size: 10, annual: "$201,240", monthly: "$16,770" },
  ] as EligibilityRow[],
  noteText:
    "At this time, we are unable to provide pharmaceutical support/outsourced testing to those who cannot provide the necessary documentation. Patients are encouraged to bring proof of residency and income, when available, to support timely access to eligible healthcare services. To qualify for outsourced testing, total household income must be below 250% of the Federal Poverty Limit."
};
