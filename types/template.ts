export type NicheSlug =
  | "realtor"
  | "construction"
  | "hvac"
  | "painting"
  | "plumbing"
  | "landscaping"
  | "cleaning"
  | "electrical"
  | "roofing";

export interface ServiceItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export interface BeforeAfterItem {
  title: string;
  before: string;
  after: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DemoTemplate {
  slug: NicheSlug;
  niche: string;
  category: string;
  city: string;
  icon: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCta: string;
  secondaryCta: string;
  offerLabel: string;
  services: ServiceItem[];
  trustBadges: string[];
  testimonials: TestimonialItem[];
  beforeAfter: BeforeAfterItem[];
  faq: FaqItem[];
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
