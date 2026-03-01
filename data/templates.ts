import { cleaningTemplate } from "@/data/niches/cleaning";
import { constructionTemplate } from "@/data/niches/construction";
import { electricalTemplate } from "@/data/niches/electrical";
import { hvacTemplate } from "@/data/niches/hvac";
import { landscapingTemplate } from "@/data/niches/landscaping";
import { paintingTemplate } from "@/data/niches/painting";
import { plumbingTemplate } from "@/data/niches/plumbing";
import { realtorTemplate } from "@/data/niches/realtor";
import { roofingTemplate } from "@/data/niches/roofing";
import { DemoTemplate, NicheSlug } from "@/types/template";

export const templateDemos: DemoTemplate[] = [
  realtorTemplate,
  constructionTemplate,
  hvacTemplate,
  paintingTemplate,
  plumbingTemplate,
  landscapingTemplate,
  cleaningTemplate,
  electricalTemplate,
  roofingTemplate,
];

export const nicheFilters = ["All", ...templateDemos.map((item) => item.niche)];

export function getTemplateBySlug(slug: string): DemoTemplate | undefined {
  return templateDemos.find((item) => item.slug === slug);
}

export function getTemplateSlugs(): NicheSlug[] {
  return templateDemos.map((item) => item.slug);
}
