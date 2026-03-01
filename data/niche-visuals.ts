import { NicheSlug } from "@/types/template";

export interface NicheVisualTheme {
  layoutVariant: "executive" | "bold" | "editorial";
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
    layoutVariant: "executive",
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
    layoutVariant: "bold",
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
    layoutVariant: "bold",
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
    layoutVariant: "editorial",
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
    layoutVariant: "executive",
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
    layoutVariant: "editorial",
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
    layoutVariant: "executive",
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
    layoutVariant: "bold",
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
    layoutVariant: "bold",
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
