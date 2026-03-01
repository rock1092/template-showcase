import { DemoTemplate } from "@/types/template";

export const plumbingTemplate: DemoTemplate = {
  slug: "plumbing",
  niche: "Plumbing",
  category: "Home Services",
  city: "Charlotte, NC",
  icon: "Flow",
  heroTitle: "Plumbing Templates Engineered for Urgent Conversions",
  heroSubtitle:
    "From leak emergencies to remodel installs, this framework captures high-intent calls and quote requests fast.",
  primaryCta: "Call a Licensed Plumber",
  secondaryCta: "Request an Inspection",
  offerLabel: "No after-hours dispatch fee this month",
  services: [
    {
      title: "Emergency Leak Repair",
      description: "Fast response for burst pipes, fixture leaks, and water damage prevention.",
    },
    {
      title: "Water Heater Service",
      description: "Repair, replacement, and maintenance for tank and tankless systems.",
    },
    {
      title: "Drain Cleaning",
      description: "Camera inspections and rooter solutions that solve recurring clogs.",
    },
  ],
  trustBadges: ["Licensed Master Plumbers", "1,200+ 5-Star Reviews", "Upfront Flat-Rate Pricing", "24/7 Dispatch"],
  testimonials: [
    {
      name: "Terry P.",
      role: "Restaurant Owner",
      quote: "Their response time saved us from a shutdown during dinner service.",
    },
    {
      name: "Rachel S.",
      role: "Homeowner",
      quote: "The technician explained every option and fixed everything in one visit.",
    },
  ],
  beforeAfter: [
    {
      title: "Emergency Response",
      before: "2-hour callback delays",
      after: "Instant mobile CTA and same-hour dispatch",
    },
    {
      title: "Lead Quality",
      before: "Low-intent website inquiries",
      after: "Higher-intent forms with service type and urgency",
    },
  ],
  faq: [
    {
      question: "Are your plumbers licensed and insured?",
      answer: "Yes, every technician is licensed, insured, and background-checked for residential and commercial work.",
    },
    {
      question: "Can you provide same-day plumbing service?",
      answer: "In most service zones yes, with emergency dispatch available 24/7.",
    },
  ],
  contact: {
    phone: "(704) 555-0158",
    email: "service@clearflowplumbingco.com",
    address: "928 South Blvd, Charlotte, NC",
    hours: "24/7 Emergency Service",
  },
  seo: {
    title: "Plumbing Website Template | Emergency Service Lead Funnel",
    description:
      "Local plumbing website template with urgent CTAs, trust badges, service highlights, and SEO-friendly structure.",
    keywords: ["plumbing website template", "emergency plumber SEO", "local plumber leads", "home service website"],
  },
};
