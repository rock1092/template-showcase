import { FilterableTemplateGrid } from "@/components/showcase/filterable-template-grid";
import { Button } from "@/components/ui/button";
import { nicheFilters, templateDemos } from "@/data/templates";

export default function Home() {
  return (
    <main className="page-shell py-8 sm:py-12">
      <section className="glass-panel noise-overlay reveal-up relative overflow-hidden rounded-[calc(var(--radius-card)+0.7rem)] px-6 py-12 sm:px-10">
        <span className="floating-shape h-36 w-36 bg-brand/20" style={{ top: "-2%", right: "3%" }} />
        <span className="floating-shape h-24 w-24 bg-accent/25" style={{ bottom: "8%", right: "30%" }} />
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-strong">Template Showcase Platform</p>
        <h1 className="mt-4 max-w-5xl text-[var(--font-size-4xl)] font-semibold text-foreground">
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
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <p className="rounded-[var(--radius-md)] border border-line bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-strong">
            9 vertical demos
          </p>
          <p className="rounded-[var(--radius-md)] border border-line bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-strong">
            Netlify lead capture ready
          </p>
          <p className="rounded-[var(--radius-md)] border border-line bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-strong">
            SEO + schema baked in
          </p>
        </div>
      </section>

      <section id="all-templates" className="section-space">
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

      <section className="section-space rounded-[var(--radius-card)] border border-line bg-white px-6 py-8 sm:px-10">
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
