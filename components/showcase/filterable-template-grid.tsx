"use client";

import { useMemo, useState } from "react";
import { DemoTemplate } from "@/types/template";
import { Button } from "@/components/ui/button";
import { getNicheVisual } from "@/data/niche-visuals";

interface FilterableTemplateGridProps {
  templates: DemoTemplate[];
  filters: string[];
}

export function FilterableTemplateGrid({ templates, filters }: FilterableTemplateGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleTemplates = useMemo(() => {
    if (activeFilter === "All") {
      return templates;
    }

    return templates.filter((template) => template.niche === activeFilter);
  }, [activeFilter, templates]);

  return (
    <section className="space-y-8">
      <div className="flex flex-wrap gap-3 rounded-[var(--radius-card)] border border-line bg-white/80 p-3">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-[var(--radius-pill)] border px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "border-brand bg-gradient-to-r from-brand to-brand-strong text-white shadow-[var(--shadow-sm)]"
                  : "border-line bg-white text-foreground hover:border-brand/35 hover:text-brand-strong"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleTemplates.map((template, index) => (
          <article
            key={template.slug}
            className="surface-card reveal-up elevate-card flex rounded-[var(--radius-card)] p-6"
            style={{
              animationDelay: `${index * 70}ms`,
              borderTop: `4px solid ${getNicheVisual(template.slug).brand}`,
              backgroundImage: `linear-gradient(180deg, ${getNicheVisual(template.slug).bgStart} 0%, #ffffff 34%)`,
            }}
          >
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-strong">{template.niche}</p>
                <span className="rounded-[var(--radius-pill)] bg-brand/10 px-3 py-1 text-xs font-medium text-brand-strong">
                  {template.city}
                </span>
              </div>
              <h3 className="text-2xl font-semibold leading-tight">{template.heroTitle}</h3>
              <p className="text-sm text-muted">{template.heroSubtitle}</p>
              <p className="rounded-xl border border-line bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-strong">
                Includes hero, trust strip, testimonials, gallery, and lead form.
              </p>
              <div className="mt-auto">
                <Button
                  href={`/demo/${template.slug}`}
                  trackingEvent="cta_click"
                  trackingPayload={{ position: "template_grid_card", slug: template.slug }}
                >
                  Use this template
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
