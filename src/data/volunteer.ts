/**
 * Content for the volunteer page (/volunteer).
 * Kept separate from the section components so copy, images, and the
 * testimonial quotes can be updated without touching any markup.
 */

export const hero = {
  // Placeholder path — add the real photo to public/images and update this.
  // Missing files 404 quietly in the browser rather than breaking the build,
  // same as the homepage images (see CLAUDE.md > Images).
  backgroundImage: "/images/volunteer-hero.jpg",
  heading: "Interested in Giving Back to the Community?",
  subheading:
    "Look no further. We offer meaningful roles and a welcoming community for all.",
};

export interface Benefit {
  icon: "impact" | "growth" | "team";
  title: string;
  description: string;
}

export const why = {
  // Placeholder path — add the real photo to public/images and update this.
  image: "/images/volunteer-why.jpg",
  heading: "Why Volunteer With Us?",
  benefits: [
    {
      icon: "impact",
      title: "Make an Impact:",
      description: "Help families receive essential healthcare.",
    },
    {
      icon: "growth",
      title: "Gain Experience:",
      description: "Learn and grow in a real clinical environment.",
    },
    {
      icon: "team",
      title: "Be Part of a Team:",
      description: "Join a caring group of professionals and volunteers.",
    },
  ] as Benefit[],
  ctaText: "Volunteer Openings",
  // Scrolls down to the apply section on this same page.
  ctaHref: "#apply",
};

export const apply = {
  heading: "Ready to Apply?",
  subheading: "Choose the path that fits you.",
  options: [
    {
      title: "Volunteer",
      description:
        "At this time we are not accepting clinical volunteers. Please check back later. \n We are looking for support in HR, Administration, Credentialing, IT, Digital Media, Communications, and similar non-clinical roles.",
      ctaText: "Volunteer Application",
      ctaHref: "/volunteer/apply",
    },
    {
      title: "Provider",
      description:
        "For licensed physicians, nurse practitioners, PAs, nurses, and other clinical providers who want to volunteer their expertise.",
      ctaText: "Provider Application",
      ctaHref: "/volunteer/provider-apply",
    },
  ],
};

export interface Testimonial {
  quote: string;
  author: string;
}

/**
 * Testimonial quotes, rotated in the Testimonials section on the
 * volunteer page. Add or remove entries freely — the layout and the
 * rotation timing both adjust automatically to however many are here
 * (built for up to a dozen or so).
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I have had an amazing experience volunteering at the Bingham Family Clinic. They truly care about both the people they serve and are serving with. I feel I've made a meaningful impact in the community and am excited to keep giving back.",
    author: "Joshua Kent",
  },
  {
    quote:
      "What I love about the clinic, is the opportunity it gives to those who can't afford medical care. I love serving here as Christ would: through compassion, helping those in need, and meeting others where they're at.",
    author: "Lily Savage",
  },
  {
    quote:
      "I'm truly impressed with the mission of the Bingham Family Clinic and the efforts made to achieve it. I've loved the opportunity to volunteer and be part of something so influential in our community.",
    author: "Abbie Hartle",
  },
  {
    quote:
      "I have loved every minute serving at the Bingham Family Clinic! I have learned many new skills that have helped me grow. Those skills will continue to help me in the future.",
    author: "Elijah VanCott",
  },
  {
    quote:
      "I serve with the Bingham Family Clinic because it is dedicated to helping individuals and families in need of quality medical care. I can't think of a better way to support our community's health and well-being.",
    author: "Michael McKay",
  },
  {
    quote:
      "The Bingham Family Clinic is designed to help those in need and provide instruction on how to take care of themselves. I love that it helps people learn to be healthy long-term!",
    author: "Abigail Dodge",
  },
  {
    quote:
      "I care deeply about ensuring that families in our community have access to healthcare when they need it most. I serve with the Bingham Family Clinic because I believe in its mission of providing free, compassionate medical care to those who might otherwise go without.",
    author: "Bonnie Jensen",
  },
];