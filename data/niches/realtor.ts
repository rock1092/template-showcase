import { DemoTemplate } from "@/types/template";

export const realtorTemplate: DemoTemplate = {
  slug: "realtor",
  niche: "Real Estate",
  category: "Property",
  city: "Austin, TX",
  icon: "Property",
  heroTitle: "Sell Faster With a Premium Real Estate Experience",
  heroSubtitle:
    "Capture qualified buyers and motivated sellers with polished listings, social proof, and strategic call-to-actions.",
  primaryCta: "Book a Listing Strategy Call",
  secondaryCta: "View Featured Properties",
  offerLabel: "Free home value assessment this week",
  services: [
    {
      title: "Seller Representation",
      description: "Pricing strategy, staging guidance, and listing campaigns that maximize market response.",
    },
    {
      title: "Buyer Advisory",
      description: "Neighborhood intelligence and offer strategy for confident buying decisions.",
    },
    {
      title: "Relocation Support",
      description: "End-to-end moving support for executives and families relocating into the area.",
    },
  ],
  trustBadges: ["Top 1% Local Team", "500+ Closed Homes", "4.9 Average Client Rating", "Licensed & Insured"],
  testimonials: [
    {
      name: "Samantha V.",
      role: "Home Seller",
      quote: "Our home sold in six days above asking. Every step felt proactive and premium.",
    },
    {
      name: "Brandon K.",
      role: "First-Time Buyer",
      quote: "They made the process simple, competitive, and stress-free in a tough market.",
    },
  ],
  beforeAfter: [
    {
      title: "Listing Performance",
      before: "27 days on market, low inquiry volume",
      after: "6 days on market, 18 qualified showings",
    },
    {
      title: "Offer Quality",
      before: "Single low offer below target",
      after: "Multiple offers with waived contingencies",
    },
  ],
  faq: [
    {
      question: "How soon should I prepare my home before listing?",
      answer:
        "Ideal prep starts 3 to 4 weeks in advance to handle light staging, photo planning, and pricing strategy.",
    },
    {
      question: "Do you help with mortgage partner recommendations?",
      answer:
        "Yes. We connect buyers with trusted lenders and align financing milestones with your purchase timeline.",
    },
  ],
  contact: {
    phone: "(512) 555-0142",
    email: "hello@urbanpeakrealty.com",
    address: "820 Congress Ave, Austin, TX",
    hours: "Mon-Sat 8:00 AM - 7:00 PM",
  },
  seo: {
    title: "Real Estate Website Template | High-Converting Agent Demo",
    description:
      "Conversion-focused real estate website template with listing CTAs, testimonials, FAQ, and Netlify lead forms.",
    keywords: ["real estate template", "realtor website", "listing leads", "local SEO realtor"],
  },
};
