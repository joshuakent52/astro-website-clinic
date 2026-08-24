/**
 * Content for the about page (/about).
 * Kept separate from the section components so copy, images, and the
 * values list can be updated without touching any markup.
 */

export const hero = {
  // TODO: swap in the real staff photo (referred to as "image6") once it's
  // available as a clean, un-cropped file — this is a placeholder from the
  // existing image library so the page renders correctly in the meantime.
  backgroundImage: "/images/hero-image.png",
  heading: "About Bingham Family Clinic",
  subheading:
    "Bingham Family Clinic was founded with the mission to create a positive impact in our community through compassionate and selfless service. Our commitment is to care for every individual and family with dedication, love, and support. We believe in building strong ties with our patients and community, working together to improve health and well-being for all. We do this by providing free healthcare for those below 300% of the Federal Poverty Level.",
  ctaText: "Schedule an Appointment",
  ctaHref: "/appointments",
};

export interface ServiceItem {
  image: string;
  title: string;
  description: string;
}

export const services = {
  heading: "Our Services",
  items: [
    {
      // TODO: swap in a real photo of the medical care area.
      image: "/images/image2.png",
      title: "Medical Care",
      description:
        "Free primary care services including family medicine, pediatric care, maternal health, preventive care, and chronic disease management.",
    },
    {
      // TODO: swap in a real photo of the pharmacy.
      image: "/images/image2.png",
      title: "Pharmacy",
      description:
        "An on-site pharmacy that fills prescriptions written at the clinic, helping patients access the medications they need at little to no cost.",
    },
    {
      // TODO: swap in a real photo of the lab.
      image: "/images/image2.png",
      title: "Lab",
      description:
        "In-house lab services for bloodwork and diagnostic testing, giving providers the information they need to diagnose and treat patients quickly.",
    },
    {
      // TODO: swap in a real photo of the dental suite.
      image: "/images/image2.png",
      title: "Dental",
      description:
        "This program is currently being developed. When open, it will offer exams, cleanings, and basic restorative care from volunteer dentists and hygienists.",
    },
  ] as ServiceItem[],
};

export const board = {
  heading: "Meet the Board of Directors",
  subheading:
    "Get to know the Board of Directors who guide Bingham Family Clinic's mission.",
  ctaText: "Meet the Board of Directors",
  ctaHref: "/about/board",
};

export const leadership = {
  heading: "Meet Clinic Leadership",
  subheading:
    "Get to know the Clinic Leadership team who guide Bingham Family Clinic's day-to-day operations.",
  ctaText: "Meet Clinic Leadership",
  ctaHref: "/about/leadership",
};

export const contributors = {
  heading: "Meet Our Key Contributors",
  subheading:
    "Get to know the Key Contributors who help make Bingham Family Clinic's mission possible.",
  ctaText: "Meet Our Key Contributors",
  ctaHref: "/about/key-contributors",
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