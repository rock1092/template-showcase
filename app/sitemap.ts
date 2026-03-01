import type { MetadataRoute } from "next";
import { getTemplateSlugs } from "@/data/templates";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://template-showcase.netlify.app";

  const demoPages = getTemplateSlugs().map((slug) => ({
    url: `${siteUrl}/demo/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/thank-you`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    ...demoPages,
  ];
}
