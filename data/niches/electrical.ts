import { DemoTemplate } from "@/types/template";

export const electricalTemplate: DemoTemplate = {
  slug: "electrical",
  niche: "Electrical",
  category: "Home Services",
  city: "San Diego, CA",
  icon: "Power",
  heroTitle: "Electrical Templates Optimized for High-Intent Local Leads",
  heroSubtitle:
    "Demonstrate safety, certifications, and rapid response with a premium conversion-first funnel.",
  primaryCta: "Speak With an Electrician",
  secondaryCta: "Request Panel Inspection",
  offerLabel: "Free safety check with panel upgrade",
  services: [
    {
      title: "Panel Upgrades",
      description: "Modernize service panels to support EVs, smart devices, and new appliance loads.",
    },
    {
      title: "Lighting Installations",
      description: "Indoor and outdoor lighting design and installation for function and curb appeal.",
    },
    {
      title: "Emergency Repairs",
      description: "Rapid troubleshooting for outages, faulty wiring, and urgent safety issues.",
    },
  ],
  trustBadges: ["Licensed Electricians", "Code-Compliant Work", "Same-Day Appointments", "Residential + Commercial"],
  testimonials: [
    {
      name: "Isaiah J.",
      role: "Homeowner",
      quote: "They solved a dangerous wiring issue quickly and explained everything clearly.",
    },
    {
      name: "Megan W.",
      role: "Retail Manager",
      quote: "Fast response and zero downtime for our storefront lighting upgrade.",
    },
  ],
  beforeAfter: [
    {
      title: "Safety Confidence",
      before: "Aging panel with frequent breaker trips",
      after: "Code-compliant panel upgrade and stable power",
    },
    {
      title: "Project Win Rate",
      before: "Limited trust indicators online",
      after: "Credential-forward layout increased estimate requests",
    },
  ],
  faq: [
    {
      question: "Can you help with EV charger installation?",
      answer: "Yes, we assess panel capacity and install code-compliant home or commercial EV charging setups.",
    },
    {
      question: "Do you provide electrical inspections for home sales?",
      answer: "We provide detailed inspection reports that support real estate transactions and safety compliance.",
    },
  ],
  contact: {
    phone: "(619) 555-0164",
    email: "service@voltcraftelectric.com",
    address: "4150 Mission Blvd, San Diego, CA",
    hours: "Mon-Sat 7:00 AM - 7:00 PM",
  },
  seo: {
    title: "Electrical Website Template | Local Electrician Demo",
    description:
      "Conversion-ready electrical business template with trust signals, FAQs, service cards, and Netlify form leads.",
    keywords: ["electrician website template", "electrical service SEO", "panel upgrade leads", "local electrical company"],
  },
};
