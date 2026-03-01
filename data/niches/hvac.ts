import { DemoTemplate } from "@/types/template";

export const hvacTemplate: DemoTemplate = {
  slug: "hvac",
  niche: "HVAC",
  category: "Home Services",
  city: "Phoenix, AZ",
  icon: "Climate",
  heroTitle: "HVAC Templates That Turn Emergency Searches Into Booked Jobs",
  heroSubtitle:
    "Built for speed, trust, and mobile-first conversion so homeowners call now instead of comparing five competitors.",
  primaryCta: "Book Same-Day Service",
  secondaryCta: "Get Seasonal Tune-Up",
  offerLabel: "$79 tune-up offer for new customers",
  services: [
    {
      title: "AC Repair",
      description: "Rapid diagnostics and repair for all major systems with transparent pricing.",
    },
    {
      title: "Heating Installation",
      description: "High-efficiency furnace and heat pump installs sized for long-term savings.",
    },
    {
      title: "Maintenance Plans",
      description: "Preventive care programs that reduce breakdown risk and extend equipment life.",
    },
  ],
  trustBadges: ["NATE Certified Techs", "24/7 Emergency Service", "Upfront Pricing", "5-Year Parts Warranty"],
  testimonials: [
    {
      name: "Denise L.",
      role: "Homeowner",
      quote: "They arrived fast, fixed our AC in one visit, and explained every option clearly.",
    },
    {
      name: "Marcus F.",
      role: "Property Investor",
      quote: "Their maintenance plan keeps our rentals dependable year-round.",
    },
  ],
  beforeAfter: [
    {
      title: "Lead Response",
      before: "Missed calls after hours and low booking rate",
      after: "Mobile CTA drives immediate calls and form captures",
    },
    {
      title: "Average Ticket",
      before: "One-off repair jobs only",
      after: "Maintenance memberships plus repair upsells",
    },
  ],
  faq: [
    {
      question: "Do you offer emergency HVAC service?",
      answer: "Yes, emergency technicians are available 24/7 with priority dispatch windows.",
    },
    {
      question: "How often should HVAC systems be serviced?",
      answer: "Twice per year is ideal, once before cooling season and once before heating season.",
    },
  ],
  contact: {
    phone: "(602) 555-0185",
    email: "service@desertairpro.com",
    address: "2190 E Camelback Rd, Phoenix, AZ",
    hours: "24/7 Emergency | Office Mon-Fri 8:00 AM - 6:00 PM",
  },
  seo: {
    title: "HVAC Website Template | Local Heating & Cooling Demo",
    description:
      "High-converting HVAC website template with emergency CTA, service cards, social proof, and local SEO schema.",
    keywords: ["hvac website template", "ac repair leads", "heating cooling SEO", "home service template"],
  },
};
