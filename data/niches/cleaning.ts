import { DemoTemplate } from "@/types/template";

export const cleaningTemplate: DemoTemplate = {
  slug: "cleaning",
  niche: "Cleaning",
  category: "Home Services",
  city: "Seattle, WA",
  icon: "Spark",
  heroTitle: "Cleaning Service Templates That Build Trust in Seconds",
  heroSubtitle:
    "Show reliability, transparent pricing, and quality standards so visitors convert with confidence.",
  primaryCta: "Book a Cleaning Slot",
  secondaryCta: "Get a Custom Quote",
  offerLabel: "10% off first recurring service",
  services: [
    {
      title: "Recurring Home Cleaning",
      description: "Weekly, bi-weekly, and monthly plans tailored around your routine.",
    },
    {
      title: "Move-In / Move-Out",
      description: "Deep cleaning checklists designed for renters, owners, and property managers.",
    },
    {
      title: "Commercial Cleaning",
      description: "After-hours office and retail cleaning with strict quality standards.",
    },
  ],
  trustBadges: ["Bonded & Insured", "100% Satisfaction Guarantee", "Eco-Friendly Supplies", "Same Team Scheduling"],
  testimonials: [
    {
      name: "Naomi C.",
      role: "Working Parent",
      quote: "Their recurring team is always on time and the quality is incredibly consistent.",
    },
    {
      name: "Victor G.",
      role: "Office Manager",
      quote: "Our workspace has never looked better. Professional and reliable every week.",
    },
  ],
  beforeAfter: [
    {
      title: "Booking Friction",
      before: "Manual quote requests and slow callbacks",
      after: "Simple lead form with service preferences and timing",
    },
    {
      title: "Retention",
      before: "Mostly one-time cleanings",
      after: "Higher recurring-plan adoption from clear offers",
    },
  ],
  faq: [
    {
      question: "Do I need to provide cleaning supplies?",
      answer: "No. Our team brings all supplies and equipment unless you request otherwise.",
    },
    {
      question: "Can I request the same cleaner each visit?",
      answer: "Yes. We prioritize assigning the same team for consistency and trust.",
    },
  ],
  contact: {
    phone: "(206) 555-0173",
    email: "bookings@luminouscleaningco.com",
    address: "1801 1st Ave, Seattle, WA",
    hours: "Mon-Sat 8:00 AM - 7:00 PM",
  },
  seo: {
    title: "Cleaning Website Template | Recurring Service Conversions",
    description:
      "Modern cleaning service template with testimonials, trust badges, FAQ, and Netlify lead capture for local SEO growth.",
    keywords: ["cleaning website template", "maid service website", "house cleaning leads", "local cleaning SEO"],
  },
};
