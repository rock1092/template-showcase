import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/demo/lead-form";
import { SectionTitle } from "@/components/ui/section-title";
import { NicheVisualTheme } from "@/data/niche-visuals";
import { WorkPhoto } from "@/lib/pixabay";
import { DemoTemplate } from "@/types/template";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

interface DemoTemplatePageProps {
  template: DemoTemplate;
  theme: NicheVisualTheme;
  workPhotos: WorkPhoto[];
}

export function DemoTemplatePage({ template, theme, workPhotos }: DemoTemplatePageProps) {
  const [heroPhoto, altPhoto] = workPhotos;

  const themedVars = {
    "--brand": theme.brand,
    "--brand-strong": theme.brandStrong,
    "--accent": theme.accent,
    "--radius-card": theme.radiusCard,
  } as CSSProperties;

  return (
    <div style={themedVars} className="demo-page min-h-screen" data-variant={theme.heroMode} data-slug={template.slug}>
      <div
        className="top-strip border-b border-white/30 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white"
        style={{ background: `linear-gradient(90deg, ${theme.brandStrong}, ${theme.brand})` }}
      >
        {theme.announcement}
      </div>

      <main className="page-shell demo-main pb-28 pt-6 md:pb-16">
        <nav
          className={`nav-shell mb-8 flex items-center justify-between px-4 py-3 sm:px-6 ${
            theme.headerMode === "floating"
              ? "glass-panel sticky top-4 z-30 rounded-[var(--radius-pill)]"
              : theme.headerMode === "solid"
                ? "rounded-[var(--radius-pill)] border border-line bg-white shadow-[var(--shadow-soft)]"
                : "border-b border-line bg-transparent"
          }`}
        >
          <Link href="/" className="text-sm font-semibold tracking-wide text-brand-strong">
            {theme.brandName}
          </Link>
          <div className="hidden items-center gap-4 sm:flex">
            {theme.navItems.map((item) => (
              <a key={item} href="#services" className="text-sm text-muted hover:text-brand-strong">
                {item}
              </a>
            ))}
            <Button href="#lead-form" trackingEvent="cta_click" trackingPayload={{ position: "nav", slug: template.slug }}>
              Get Quote
            </Button>
          </div>
        </nav>

        {theme.heroMode === "immersive" ? (
          <section className="hero-shell relative overflow-hidden rounded-[calc(var(--radius-card)+0.6rem)] border border-white/50 bg-white/70">
            <div className="relative h-[460px] w-full">
              <Image src={heroPhoto.url} alt={heroPhoto.alt} fill className="object-cover" sizes="100vw" unoptimized priority />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <p className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  {template.niche} - {template.city}
                </p>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">{template.heroTitle}</h1>
                <p className="mt-3 max-w-2xl text-base text-white/85 sm:text-lg">{template.heroSubtitle}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="#lead-form" trackingEvent="cta_click" trackingPayload={{ position: "hero_primary", slug: template.slug }}>
                    {template.primaryCta}
                  </Button>
                  <Button href="#gallery" variant="secondary" trackingEvent="cta_click" trackingPayload={{ position: "hero_secondary", slug: template.slug }}>
                    {template.secondaryCta}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ) : theme.heroMode === "magazine" ? (
          <section className="hero-shell grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface-card rounded-[var(--radius-card)] p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-strong">{template.city}</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.02] sm:text-6xl">{template.heroTitle}</h1>
              <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{template.heroSubtitle}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="#lead-form" trackingEvent="cta_click" trackingPayload={{ position: "hero_primary", slug: template.slug }}>
                  {template.primaryCta}
                </Button>
                <Button href="#gallery" variant="secondary" trackingEvent="cta_click" trackingPayload={{ position: "hero_secondary", slug: template.slug }}>
                  Explore gallery
                </Button>
              </div>
            </div>
            <div className="grid gap-5">
              <figure className="surface-card overflow-hidden rounded-[var(--radius-card)]">
                <div className="relative h-56 w-full">
                  <Image src={heroPhoto.url} alt={heroPhoto.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 30vw" unoptimized />
                </div>
              </figure>
              <aside className="rounded-[var(--radius-card)] border border-brand/25 bg-gradient-to-r from-brand/12 to-accent/12 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-strong">Featured Offer</p>
                <p className="mt-2 text-2xl font-semibold">{template.offerLabel}</p>
              </aside>
            </div>
          </section>
        ) : theme.heroMode === "stacked" ? (
          <section className="hero-shell space-y-5 rounded-[calc(var(--radius-card)+0.3rem)] border border-line bg-white p-6 sm:p-9">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-strong">{template.niche} conversion system</p>
                <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">{template.heroTitle}</h1>
                <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">{template.heroSubtitle}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="#lead-form" trackingEvent="cta_click" trackingPayload={{ position: "hero_primary", slug: template.slug }}>
                    {template.primaryCta}
                  </Button>
                  <Button href="#services" variant="secondary" trackingEvent="cta_click" trackingPayload={{ position: "hero_secondary", slug: template.slug }}>
                    View services
                  </Button>
                </div>
              </div>
              <div className="surface-card rounded-[var(--radius-card)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-strong">Offer</p>
                <p className="mt-2 text-2xl font-semibold">{template.offerLabel}</p>
                <p className="mt-2 text-sm text-muted">Built for mobile call urgency and form conversion.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {workPhotos.slice(0, 3).map((photo, idx) => (
                <figure key={`${photo.url}-${idx}`} className="overflow-hidden rounded-[var(--radius-card)] border border-line">
                  <div className="relative h-44 w-full">
                    <Image src={photo.url} alt={photo.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" unoptimized />
                  </div>
                </figure>
              ))}
            </div>
          </section>
        ) : (
          <section className="hero-shell grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="rounded-[var(--radius-card)] border border-brand/25 bg-gradient-to-br from-white to-brand/10 p-7 sm:p-10">
              <p className="inline-flex rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-strong">
                {template.niche} - {template.city}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">{template.heroTitle}</h1>
              <p className="mt-4 text-base text-muted sm:text-lg">{template.heroSubtitle}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="#lead-form" trackingEvent="cta_click" trackingPayload={{ position: "hero_primary", slug: template.slug }}>
                  {template.primaryCta}
                </Button>
                <Button href="#gallery" variant="secondary" trackingEvent="cta_click" trackingPayload={{ position: "hero_secondary", slug: template.slug }}>
                  {template.secondaryCta}
                </Button>
              </div>
            </div>
            <figure className="surface-card overflow-hidden rounded-[var(--radius-card)]">
              <div className="relative h-[430px] w-full">
                <Image src={heroPhoto.url} alt={heroPhoto.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" unoptimized />
              </div>
            </figure>
          </section>
        )}

        <section id="services" className="services-shell mt-14 space-y-6">
          <SectionTitle kicker="Services" title={`Signature ${template.niche} Offer Stack`} description="Same conversion logic. Distinct look, mood, and layout behavior." />
          <div className="services-grid grid gap-4 md:grid-cols-3">
            {template.services.map((service, index) => (
              <article
                key={service.title}
                className={`surface-card p-6 ${
                  theme.heroMode === "magazine"
                    ? "rounded-none border-l-4 border-brand"
                    : index % 2 === 0
                      ? "rounded-[var(--radius-card)]"
                      : "rounded-[calc(var(--radius-card)-0.2rem)] border-2 border-brand/20"
                }`}
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="trust-shell mt-14 space-y-6">
          <SectionTitle kicker="Trust" title="Credibility Layer" />
          <div className="trust-grid grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {template.trustBadges.map((badge, index) => (
              <div
                key={badge}
                className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium"
                style={{
                  background: index % 2 === 0 ? "#ffffff" : `color-mix(in srgb, ${theme.brand} 10%, #ffffff 90%)`,
                  borderColor: `color-mix(in srgb, ${theme.brand} 26%, #d3e2f1 74%)`,
                }}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/14 text-brand-strong">
                  {template.icon.slice(0, 1)}
                </span>
                {badge}
              </div>
            ))}
          </div>
        </section>

        <section className="testimonial-shell mt-14 space-y-6">
          <SectionTitle kicker="Testimonials" title="Client-Led Credibility" />
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

        <section id="gallery" className="gallery-shell mt-14 space-y-6">
          <SectionTitle kicker="Before & After" title="Project Outcome Gallery" />
          <div className="gallery-grid grid gap-4 md:grid-cols-2">
            {template.beforeAfter.map((item, index) => {
              const beforePhoto = workPhotos[(index * 2) % workPhotos.length];
              const afterPhoto = workPhotos[(index * 2 + 1) % workPhotos.length] || altPhoto;

              return (
                <article key={item.title} className="surface-card rounded-[var(--radius-card)] p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="overflow-hidden rounded-xl border border-dashed border-line bg-slate-50">
                      <div className="relative h-36 w-full">
                        <Image src={beforePhoto.url} alt={beforePhoto.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" unoptimized />
                      </div>
                      <div className="p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Before</p>
                        <p className="mt-2 text-sm text-foreground">{item.before}</p>
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-brand/30 bg-brand/10">
                      <div className="relative h-36 w-full">
                        <Image src={afterPhoto.url} alt={afterPhoto.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" unoptimized />
                      </div>
                      <div className="p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-strong">After</p>
                        <p className="mt-2 text-sm text-foreground">{item.after}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="faq" className="faq-shell mt-14 space-y-6">
          <SectionTitle kicker="FAQ" title="Final Buying Questions" />
          <div className="space-y-3">
            {template.faq.map((item) => (
              <details key={item.question} className="surface-card rounded-2xl px-5 py-4">
                <summary className="cursor-pointer list-none text-base font-semibold text-foreground">{item.question}</summary>
                <p className="mt-3 text-sm text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="quote-shell mt-14">
          {theme.quoteMode === "contrast" ? (
            <div className="rounded-[var(--radius-card)] p-8 text-white" style={{ background: `linear-gradient(120deg, ${theme.brandStrong}, ${theme.brand})` }}>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/80">Request Quote Fast</p>
              <h2 className="mt-2 text-3xl font-semibold">Send details now, get a strategic response quickly.</h2>
            </div>
          ) : theme.quoteMode === "stripe" ? (
            <div className="rounded-[var(--radius-card)] border border-line bg-white p-8" style={{ backgroundImage: `repeating-linear-gradient(120deg, ${theme.bgStart} 0 18px, #ffffff 18px 36px)` }}>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-strong">Request Quote</p>
              <h2 className="mt-2 text-3xl font-semibold">A design-forward inquiry flow built for conversion.</h2>
            </div>
          ) : (
            <div className="glass-panel rounded-[var(--radius-card)] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-strong">Request Quote</p>
              <h2 className="mt-2 text-3xl font-semibold">Tell us your project and timeline in 60 seconds.</h2>
            </div>
          )}
        </section>

        <section id="lead-form" className="lead-shell mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <SectionTitle kicker="Get Started" title="Capture Qualified Leads" description="This quote section is deliberately unique per niche while reusing one conversion data model." />
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
        <Button href="#lead-form" className="glass-panel flex w-full" trackingEvent="cta_click" trackingPayload={{ position: "sticky_mobile", slug: template.slug }}>
          {template.primaryCta}
        </Button>
      </div>

      <footer className="border-t border-line/60 py-8">
        <div className="page-shell flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {theme.brandName} - {template.niche} demo powered by Template Showcase.
          </p>
          <Link href="/" className="font-semibold text-brand-strong hover:text-brand">
            Back to all templates
          </Link>
        </div>
      </footer>
    </div>
  );
}
