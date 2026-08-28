/**
 * Content for the donate page (/donate).
 * Kept separate from the section components so copy, links, and the
 * quote can be updated without touching any markup.
 */

export const hero = {
  heading: "Why Donate?",
  quote: {
    text:
      "The Bingham Family Clinic is more than a clinic—it is a community of care. It is where generosity meets education, and where every act of service creates ripples of healing that extend far beyond our walls. I am proud to be part of something so life changing.\nFor our providers, it is a place to give back in the most meaningful way.\nFor students, the clinic is an incredible learning platform. They are not just studying medicine or healthcare—they are experiencing it in its truest form: serving others.",
    author: "Sherilee Woodward, Executive Director",
  },
};

export interface DonateOption {
  icon: "card" | "bank";
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  /** Open in a new tab (e.g. an outside payment processor). */
  external?: boolean;
}

export const options: DonateOption[] = [
  {
    icon: "card",
    title: "One-Time Donation",
    description: "Make a donation using Clover.",
    ctaText: "Donate Now",
    // Clover pay widget.
    ctaHref: "https://www.clover.com/pay-widgets/b118e1ee-4bf5-40bb-9c0c-bae86e361a79",
    external: true,
  },
  {
    icon: "bank",
    title: "Wire-Transfer Donation",
    description: "Make a donation through your bank.",
    ctaText: "Donate Now",
    ctaHref: "/donate/wire-transfer",
  },
];

export const venmo = {
  heading: "Donate with Venmo",
  qrImage: "/images/venmo-qr.png",
  qrAlt: "Venmo QR code — scan to donate to Bingham Family Clinic",
};
