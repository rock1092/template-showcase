import { DemoTemplate } from "@/types/template";

export const paintingTemplate: DemoTemplate = {
  slug: "painting",
  niche: "Painting",
  category: "Home Services",
  city: "Nashville, TN",
  icon: "Finish",
  heroTitle: "Painting Websites Designed to Fill Your Calendar",
  heroSubtitle:
    "Highlight craftsmanship, color consultation, and trusted crews with a streamlined conversion journey.",
  primaryCta: "Get a Free Paint Quote",
  secondaryCta: "View Color Gallery",
  offerLabel: "Interior room refresh starting at $399",
  services: [
    {
      title: "Interior Painting",
      description: "Clean, detail-focused interior finishes with low-VOC options and precise prep.",
    },
    {
      title: "Exterior Painting",
      description: "Weather-resistant systems and durable coatings for long-lasting curb appeal.",
    },
    {
      title: "Cabinet Refinishing",
      description: "Factory-smooth cabinet transformations without full replacement costs.",
    },
  ],
  trustBadges: ["Background-Checked Crews", "2-Year Workmanship Guarantee", "Color Consultation Included", "Fully Insured"],
  testimonials: [
    {
      name: "Alyssa R.",
      role: "Homeowner",
      quote: "They transformed our home and left everything spotless. The finish quality is unreal.",
    },
    {
      name: "Cameron D.",
      role: "Retail Owner",
      quote: "The team worked around business hours and delivered exactly on schedule.",
    },
  ],
  beforeAfter: [
    {
      title: "Curb Appeal",
      before: "Faded exterior with peeling trim",
      after: "Crisp modern palette that elevated resale value",
    },
    {
      title: "Interior Finish",
      before: "Uneven color and visible roller marks",
      after: "Uniform premium finish with clean edge work",
    },
  ],
  faq: [
    {
      question: "How quickly can you start a project?",
      answer: "Most projects are scheduled within 7 to 10 days after final quote approval.",
    },
    {
      question: "Do you provide color recommendations?",
      answer: "Yes, color strategy is included to ensure lighting and architecture work with your palette.",
    },
  ],
  contact: {
    phone: "(615) 555-0109",
    email: "hello@brightlinepainting.com",
    address: "1108 8th Ave S, Nashville, TN",
    hours: "Mon-Sat 8:00 AM - 6:00 PM",
  },
  seo: {
    title: "Painting Website Template | Interior & Exterior Lead Gen",
    description:
      "Premium painting company demo template with service blocks, testimonials, before/after gallery, and Netlify forms.",
    keywords: ["painting template", "house painter website", "local painting leads", "painting contractor SEO"],
  },
};
