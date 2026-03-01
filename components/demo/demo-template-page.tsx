import { SectionTitle } from "@/components/ui/section-title";
import { DemoTemplate } from "@/types/template";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LeadForm } from "@/components/demo/lead-form";

interface DemoTemplatePageProps {
  template: DemoTemplate;
}

export function DemoTemplatePage({ template }: DemoTemplatePageProps) {
  return (
    <>
      <main className="page-shell pb-28 pt-6 md:pb-16">
        <nav className="glass-panel sticky top-4 z-30 mb-8 flex items-center justify-between rounded-[var(--radius-pill)] px-4 py-3 sm:px-6">
          <Link href="/" className="text-sm font-semibold tracking-wide text-brand-strong">
            Template Showcase
          </Link>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="#services" className="text-sm text-muted hover:text-brand-strong">
              Services
            </a>
            <a href="#faq" className="text-sm text-muted hover:text-brand-strong">
              FAQ
            </a>
            <Button href="#lead-form" trackingEvent="cta_click" trackingPayload={{ position: "nav", slug: template.slug }}>
              Get Leads
            </Button>
          </div>
        </nav>

        <section className="glass-panel reveal-up overflow-hidden rounded-[calc(var(--radius-card)+0.5rem)] p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-[var(--radius-pill)] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-brand-strong">
                {template.niche} - {template.city}
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{template.heroTitle}</h1>
              <p className="max-w-2xl text-base text-muted sm:text-lg">{template.heroSubtitle}</p>
              <div className="flex flex-wrap gap-3">
                <Button
                  href="#lead-form"
                  trackingEvent="cta_click"
                  trackingPayload={{ position: "hero_primary", slug: template.slug }}
                >
                  {template.primaryCta}
                </Button>
                <Button
                  href="#gallery"
                  variant="secondary"
                  trackingEvent="cta_click"
                  trackingPayload={{ position: "hero_secondary", slug: template.slug }}
                >
                  {template.secondaryCta}
                </Button>
              </div>
            </div>
            <aside className="surface-card rounded-[var(--radius-card)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-strong">Limited Offer</p>
              <h2 className="mt-3 text-2xl font-semibold">{template.offerLabel}</h2>
              <p className="mt-3 text-sm text-muted">
                This section is shared across every niche template to keep conversion hierarchy consistent while the content
                stays vertical-specific.
              </p>
            </aside>
          </div>
        </section>

        <section id="services" className="mt-14 space-y-6">
          <SectionTitle
            kicker="Services"
            title={`Signature ${template.niche} Offer Stack`}
            description="Same premium visual framework, niche-specific messaging and service priorities."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {template.services.map((service) => (
              <article key={service.title} className="surface-card rounded-[var(--radius-card)] p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <SectionTitle kicker="Trust" title="Proof Elements That Reduce Decision Friction" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {template.trustBadges.map((badge) => (
              <div key={badge} className="surface-card flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/12 text-brand-strong">
                  {template.icon.slice(0, 1)}
                </span>
                {badge}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <SectionTitle kicker="Testimonials" title="Client-Led Credibility Built Into the Framework" />
          <div className="grid gap-4 md:grid-cols-2">
            {template.testimonials.map((item) => (
              <blockquote key={item.name} className="surface-card rounded-[var(--radius-card)] p-6">
                <p className="text-base text-foreground">&quot;{item.quote}&quot;</p>
                <footer className="mt-4 text-sm text-muted">
                  <span className="font-semibold text-foreground">{item.name}</span> - {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="gallery" className="mt-14 space-y-6">
          <SectionTitle
            kicker="Before & After"
            title="Outcome-Focused Visual Storytelling"
            description="Each card keeps identical spacing and styling while content shifts per niche."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {template.beforeAfter.map((item) => (
              <article key={item.title} className="surface-card rounded-[var(--radius-card)] p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-dashed border-line bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Before</p>
                    <p className="mt-2 text-sm text-foreground">{item.before}</p>
                  </div>
                  <div className="rounded-xl border border-brand/30 bg-brand/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-strong">After</p>
                    <p className="mt-2 text-sm text-foreground">{item.after}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mt-14 space-y-6">
          <SectionTitle kicker="FAQ" title="Answers for the Final Objections" />
          <div className="space-y-3">
            {template.faq.map((item) => (
              <details key={item.question} className="surface-card rounded-2xl px-5 py-4">
                <summary className="cursor-pointer list-none text-base font-semibold text-foreground">{item.question}</summary>
                <p className="mt-3 text-sm text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="lead-form" className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <SectionTitle
              kicker="Get Started"
              title="Capture Qualified Leads With Netlify Forms"
              description="Every niche page submits to a dedicated Netlify form and routes users to a clear thank-you flow."
            />
            <div className="surface-card rounded-[var(--radius-card)] p-5 text-sm text-muted">
              <p className="font-semibold text-foreground">{template.contact.phone}</p>
              <p className="mt-2">{template.contact.email}</p>
              <p className="mt-2">{template.contact.address}</p>
              <p className="mt-2">{template.contact.hours}</p>
            </div>
          </div>

          <LeadForm slug={template.slug} niche={template.niche} primaryCta={template.primaryCta} />
        </section>
      </main>

      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <Button
          href="#lead-form"
          className="glass-panel flex w-full"
          trackingEvent="cta_click"
          trackingPayload={{ position: "sticky_mobile", slug: template.slug }}
        >
          {template.primaryCta}
        </Button>
      </div>

      <footer className="border-t border-line/60 py-8">
        <div className="page-shell flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {template.niche} Demo - Built on the Template Showcase premium framework.
          </p>
          <Link href="/" className="font-semibold text-brand-strong hover:text-brand">
            Back to all templates
          </Link>
        </div>
      </footer>
    </>
  );
}
