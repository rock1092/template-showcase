import { NicheSlug } from "@/types/template";

export interface NicheVisualTheme {
  brandName: string;
  announcement: string;
  navItems: [string, string, string];
  headerMode: "solid" | "floating" | "minimal";
  heroMode: "immersive" | "split" | "stacked" | "magazine";
  quoteMode: "contrast" | "glass" | "stripe";
  brand: string;
  brandStrong: string;
  accent: string;
  bgStart: string;
  bgEnd: string;
  glow: string;
  radiusCard: string;
  pixabayQuery: string;
}

export const nicheVisuals: Record<NicheSlug, NicheVisualTheme> = {
  realtor: {
    brandName: "Urban Peak Realty",
    announcement: "New luxury inventory released this week",
    navItems: ["Listings", "Neighborhoods", "Sell Faster"],
    headerMode: "floating",
    heroMode: "immersive",
    quoteMode: "glass",
    brand: "#3366CC",
    brandStrong: "#1E3A8A",
    accent: "#F59E0B",
    bgStart: "#eef3ff",
    bgEnd: "#dbe7ff",
    glow: "rgba(51, 102, 204, 0.35)",
    radiusCard: "1.35rem",
    pixabayQuery: "luxury home exterior real estate sold house",
  },
  construction: {
    brandName: "North Forge Build",
    announcement: "Preconstruction planning slots open for Q2",
    navItems: ["Build Process", "Portfolio", "Bid Request"],
    headerMode: "solid",
    heroMode: "split",
    quoteMode: "contrast",
    brand: "#D97706",
    brandStrong: "#92400E",
    accent: "#0EA5E9",
    bgStart: "#fff5e9",
    bgEnd: "#ffe8cc",
    glow: "rgba(217, 119, 6, 0.28)",
    radiusCard: "1.1rem",
    pixabayQuery: "construction site contractor renovation project",
  },
  hvac: {
    brandName: "Desert Air Pro",
    announcement: "24/7 emergency dispatch active tonight",
    navItems: ["Emergency Repair", "Maintenance", "Financing"],
    headerMode: "solid",
    heroMode: "split",
    quoteMode: "contrast",
    brand: "#0EA5E9",
    brandStrong: "#075985",
    accent: "#F97316",
    bgStart: "#ebf8ff",
    bgEnd: "#d5f0ff",
    glow: "rgba(14, 165, 233, 0.3)",
    radiusCard: "1.2rem",
    pixabayQuery: "hvac technician air conditioning repair home service",
  },
  painting: {
    brandName: "Brightline Painting",
    announcement: "Color strategy sessions available this month",
    navItems: ["Color Studio", "Case Studies", "Book Estimate"],
    headerMode: "minimal",
    heroMode: "magazine",
    quoteMode: "stripe",
    brand: "#DB2777",
    brandStrong: "#9D174D",
    accent: "#14B8A6",
    bgStart: "#fff0f7",
    bgEnd: "#ffe1f0",
    glow: "rgba(219, 39, 119, 0.28)",
    radiusCard: "1.45rem",
    pixabayQuery: "house painting interior wall painter renovation",
  },
  plumbing: {
    brandName: "ClearFlow Plumbing",
    announcement: "No dispatch fee for urgent leaks this week",
    navItems: ["Emergency", "Drain + Sewer", "Water Heater"],
    headerMode: "floating",
    heroMode: "stacked",
    quoteMode: "glass",
    brand: "#2563EB",
    brandStrong: "#1E40AF",
    accent: "#06B6D4",
    bgStart: "#eff6ff",
    bgEnd: "#dbeafe",
    glow: "rgba(37, 99, 235, 0.32)",
    radiusCard: "1.2rem",
    pixabayQuery: "plumber pipe repair sink leak service",
  },
  landscaping: {
    brandName: "Verdant Edge Co",
    announcement: "Spring backyard transformations now booking",
    navItems: ["Design Build", "Maintenance", "Outdoor Living"],
    headerMode: "minimal",
    heroMode: "magazine",
    quoteMode: "stripe",
    brand: "#16A34A",
    brandStrong: "#166534",
    accent: "#F59E0B",
    bgStart: "#ecfdf3",
    bgEnd: "#d7f8e3",
    glow: "rgba(22, 163, 74, 0.3)",
    radiusCard: "1.5rem",
    pixabayQuery: "landscaping garden design backyard lawn makeover",
  },
  cleaning: {
    brandName: "Luminous Cleaning",
    announcement: "Recurring plans now include free deep reset",
    navItems: ["Home", "Commercial", "Recurring Plans"],
    headerMode: "floating",
    heroMode: "stacked",
    quoteMode: "glass",
    brand: "#0EA5A4",
    brandStrong: "#115E59",
    accent: "#F43F5E",
    bgStart: "#ecfeff",
    bgEnd: "#d9fbff",
    glow: "rgba(14, 165, 164, 0.28)",
    radiusCard: "1.35rem",
    pixabayQuery: "professional cleaning service home office cleaning",
  },
  electrical: {
    brandName: "VoltCraft Electric",
    announcement: "Panel upgrade crew ready for same-week installs",
    navItems: ["Panel Upgrades", "EV Charging", "Safety Checks"],
    headerMode: "solid",
    heroMode: "split",
    quoteMode: "contrast",
    brand: "#7C3AED",
    brandStrong: "#4C1D95",
    accent: "#F59E0B",
    bgStart: "#f3edff",
    bgEnd: "#e6dbff",
    glow: "rgba(124, 58, 237, 0.3)",
    radiusCard: "1.05rem",
    pixabayQuery: "electrician wiring electrical panel installation",
  },
  roofing: {
    brandName: "Elevation Roofing",
    announcement: "Storm response line open now",
    navItems: ["Storm Damage", "Inspections", "Insurance Help"],
    headerMode: "solid",
    heroMode: "immersive",
    quoteMode: "contrast",
    brand: "#DC2626",
    brandStrong: "#991B1B",
    accent: "#0EA5E9",
    bgStart: "#fff1f1",
    bgEnd: "#ffe2e2",
    glow: "rgba(220, 38, 38, 0.28)",
    radiusCard: "1.1rem",
    pixabayQuery: "roofing contractor roof replacement house exterior",
  },
};

export function getNicheVisual(slug: NicheSlug) {
  return nicheVisuals[slug];
}
