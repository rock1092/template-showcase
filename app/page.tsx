import { FilterableTemplateGrid } from "@/components/showcase/filterable-template-grid";
import { Button } from "@/components/ui/button";
import { nicheFilters, templateDemos } from "@/data/templates";

export default function Home() {
  return (
    <main className="page-shell py-8 sm:py-12">
      <section className="glass-panel reveal-up rounded-[calc(var(--radius-card)+0.5rem)] px-6 py-12 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-strong">Template Showcase Platform</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
          High-Converting Local Business Templates
        </h1>
        <p className="mt-5 max-w-3xl text-base text-muted sm:text-lg">
          One elite design system. Nine local business vertical demos. Every template shares the same premium framework,
          conversion structure, and SEO architecture.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/demo/realtor" trackingEvent="cta_click" trackingPayload={{ position: "home_hero_primary" }}>
            View Featured Demo
          </Button>
          <Button
            href="#all-templates"
            variant="secondary"
            trackingEvent="cta_click"
            trackingPayload={{ position: "home_hero_secondary" }}
          >
            Explore all niches
          </Button>
        </div>
      </section>

      <section id="all-templates" className="mt-14">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-strong">Template Library</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Filter by niche and launch faster</h2>
          </div>
          <p className="max-w-lg text-sm text-muted">
            Real Estate, Construction, HVAC, Painting, Plumbing, Landscaping, Cleaning, Electrical, and Roofing.
          </p>
        </div>
        <FilterableTemplateGrid templates={templateDemos} filters={nicheFilters} />
      </section>

      <section className="mt-16 rounded-[var(--radius-card)] border border-line bg-white px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Ready to deploy your own local business template?</h3>
            <p className="mt-2 text-sm text-muted">Use this framework and customize niche data in under 10 minutes.</p>
          </div>
          <Button href="/demo/hvac" trackingEvent="cta_click" trackingPayload={{ position: "home_footer_primary" }}>
            Use this template
          </Button>
        </div>
      </section>
    </main>
  );
}
