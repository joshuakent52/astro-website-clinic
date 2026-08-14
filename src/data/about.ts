/**
 * Content for the about page (/about).
 * Kept separate from the section components so copy, images, and the
 * values list can be updated without touching any markup.
 */

export const hero = {
  // TODO: swap in the real staff photo (referred to as "image6") once it's
  // available as a clean, un-cropped file — this is a placeholder from the
  // existing image library so the page renders correctly in the meantime.
  backgroundImage: "/images/image2.png",
  heading: "About Bingham Family Clinic",
  subheading:
    "Bingham Family Clinic was founded with the mission to create a positive impact in our community through compassionate and selfless service. Our commitment is to care for every individual and family with dedication, love, and support. We believe in building strong ties with our patients and community, working together to improve health and well-being for all. We do this by providing free healthcare for those below 300% of the Federal Poverty Level.",
  ctaText: "Schedule an Appointment",
  ctaHref: "/appointments",
};

export const board = {
  heading: "Meet the Board",
  subheading:
    "Get to know the board members who guide Bingham Family Clinic's mission.",
  ctaText: "Meet the Board",
  ctaHref: "/about/board",
};

export interface Value {
  icon:
    | "accessible"
    | "cooperative"
    | "dignified"
    | "efficient"
    | "education"
    | "legacy"
    | "replicable"
    | "sustainable"
    | "service"
    | "visible";
  title: string;
  description: string;
}

export const values = {
  heading: "Our Core Values",
  items: [
    {
      icon: "accessible",
      title: "Accessible",
      description:
        "We believe everyone deserves quality healthcare. Our doors are open to all individuals and families, ensuring that care is available regardless of background or financial situation.",
    },
    {
      icon: "cooperative",
      title: "Cooperative",
      description:
        "We work together as a unified team, staff, volunteers, and community members, to deliver compassionate care and strengthen the bond between patients and providers.",
    },
    {
      icon: "dignified",
      title: "Dignified",
      description:
        "We treat every patient with respect, empathy, and understanding, recognizing the inherent worth and dignity of each person we serve.",
    },
    {
      icon: "efficient",
      title: "Efficient",
      description:
        "We are committed to providing timely, organized, and effective care to meet the needs of our patients without unnecessary delay.",
    },
    {
      icon: "education",
      title: "Education",
      description:
        "We empower our patients and community through education, promoting knowledge that leads to better health choices and long-term wellness.",
    },
    {
      icon: "legacy",
      title: "Legacy",
      description:
        "We strive to build a lasting impact in our community by creating a model of care that continues to inspire compassion and service for future generations.",
    },
    {
      icon: "replicable",
      title: "Replicable",
      description:
        "We aim to develop a clinic model that can be shared and adapted by other communities, expanding access to healthcare beyond our local area.",
    },
    {
      icon: "sustainable",
      title: "Sustainable",
      description:
        "We are dedicated to maintaining responsible practices that ensure long-term growth, stability, and continued service to our patients.",
    },
    {
      icon: "service",
      title: "Service",
      description:
        "We are driven by a spirit of service, offering our time, skills, and care to improve the health and well-being of those in need.",
    },
    {
      icon: "visible",
      title: "Visible",
      description:
        "We actively engage with the community to raise awareness about our mission, ensuring that those who need care can easily find and trust us.",
    },
  ] as Value[],
};
