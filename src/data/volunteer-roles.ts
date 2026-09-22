/**
 * Content for the volunteer roles page (/volunteer/roles).
 * Kept separate from the section components so role descriptions
 * can be updated without touching any markup.
 */

export interface RoleItem {
  title: string;
  description: string;
}

export const volunteerRoles: RoleItem[] = [
  {
    title: "Clinical Staff",
    description:
      "Room patients, and take initial complaints. Work as a clinical team to deliver safe, compassionate, and high-quality healthcare.",
  },
  {
    title: "Patient Navigator",
    description:
      "Serve as interpreters and advocates by helping patients communicate with providers throughout their visit. Support patients by reducing language barriers and ensuring they understand their care and next steps.",
  },
  {
    title: "Support Center",
    description:
      "Manage check-out, assist with patient scheduling, documentation, and resource support. Help ensure every patient has a smooth and positive experience at departure.",
  },
  {
    title: "Scribe",
    description:
      "Document patient encounters in real time to support accurate medical records and provider efficiency. Maintain confidentiality while ensuring documentation is complete and organized.",
  },
  {
    title: "Lab",
    description:
      "Collect, process, and document laboratory specimens and results in accordance with clinic procedures. Help maintain quality standards and support timely patient care. Phlebotomy certification is required.",
  },
  {
    title: "Administration",
    description:
      "Support clinic operations through scheduling, credentialing, coordination, documentation, and organizational tasks. Work with leadership to improve efficiency and ensure smooth day-to-day operations.",
  },
  {
    title: "Information Systems",
    description:
      "Develop, maintain, and support the clinic's software, technology, and data systems. Improve operational efficiency by creating reliable tools, reports, and technical solutions.",
  },
  {
    title: "Communications",
    description:
      "Create and manage internal and external communications, including marketing, social media, and volunteer outreach. Promote the clinic's mission through clear, consistent, and engaging messaging.",
  },
  {
    title: "Receptionist",
    description:
      "Greet patients and visitors, assist with check-in and scheduling, and answer incoming calls. Provide friendly, professional service while maintaining accurate patient information.",
  },
  {
    title: "Pharmacy",
    description:
      "Assist with medication preparation, inventory, and dispensing under appropriate supervision. Support safe medication practices and help patients understand their prescriptions.",
  },
  {
    title: "Facilities",
    description:
      "Maintain a clean, safe, and welcoming clinic environment through routine maintenance and facility support. Help ensure clinic spaces are ready for patients, volunteers, and staff.",
  },
  {
    title: "Supply Chain",
    description:
      "Manage inventory, procurement, and distribution of medical and office supplies. Ensure essential resources are available while minimizing waste and controlling costs.",
  },
];