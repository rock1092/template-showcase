"use client";

import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/demo/lead-form";
import { SectionTitle } from "@/components/ui/section-title";
import { NicheVisualTheme } from "@/data/niche-visuals";
import { WorkPhoto } from "@/lib/pixabay";
import { DemoTemplate } from "@/types/template";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useEffect, useMemo, useState } from "react";

interface DemoTemplatePageProps {
  template: DemoTemplate;
  theme: NicheVisualTheme;
  workPhotos: WorkPhoto[];
}

export function DemoTemplatePage({ template, theme, workPhotos }: DemoTemplatePageProps) {
  const [heroPhoto, altPhoto] = workPhotos;
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const themedVars = {
    "--brand": theme.brand,
    "--brand-strong": theme.brandStrong,
    "--accent": theme.accent,
    "--radius-card": theme.radiusCard,
  } as CSSProperties;

  const revealProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
      };

  const phoneHref = `tel:${template.contact.phone.replace(/[^\d+]/g, "")}`;
  const navLinks = useMemo(
    () => [
      { label: theme.navItems[0], href: "#services" },
      { label: theme.navItems[1], href: "#gallery" },
      { label: theme.navItems[2], href: "#lead-form" },
    ],
    [theme.navItems],
  );

  function renderNav() {
    const links = navLinks.map((item) => (
      <a key={item.label} href={item.href} className="text-sm transition-colors hover:text-brand-strong">
        {item.label}
      </a>
    ));

    if (theme.navStyle === "luxury") {
      return (
        <nav className={`nav-shell nav-luxury sticky top-3 z-40 mb-8 flex items-center justify-between rounded-[var(--radius-pill)] px-4 py-3 sm:px-6 ${isScrolled ? "is-scrolled" : ""}`}>
          <div className="flex items-center gap-3">
            <span className="brand-crest inline-flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold tracking-[0.14em]">
              {theme.logoMark}
            </span>
            <div>
              <Link href="/" className="brand-mark text-sm font-semibold tracking-[0.08em] text-brand-strong">
                {theme.brandName}
              </Link>
              <p className="hidden text-xs text-muted sm:block">{theme.brandTagline}</p>
            </div>
          </div>
          <div className="hidden items-center gap-5 text-muted sm:flex">
            {links}
            <Button href="#lead-form" trackingEvent="cta_click" trackingPayload={{ position: "nav", slug: template.slug }}>
              Private Consultation
            </Button>
          </div>
        </nav>
      );
    }

    if (theme.navStyle === "industrial") {
      return (
        <nav className={`nav-shell nav-industrial sticky top-3 z-40 mb-8 rounded-[var(--radius-lg)] border px-4 py-3 sm:px-6 ${isScrolled ? "is-scrolled" : ""}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-md border px-2 py-1 text-xs font-bold tracking-[0.12em]">{theme.logoMark}</span>
              <Link href="/" className="brand-mark text-sm font-semibold uppercase tracking-[0.08em]">
                {theme.brandName}
              </Link>
            </div>
            <Button href="#lead-form" trackingEvent="cta_click" trackingPayload={{ position: "nav", slug: template.slug }}>
              Request Bid
            </Button>
          </div>
          <div className="mt-3 hidden items-center gap-4 border-t border-white/20 pt-3 text-sm sm:flex">{links}</div>
        </nav>
      );
    }

    if (theme.navStyle === "technical") {
      return (
        <nav className={`nav-shell nav-technical sticky top-3 z-40 mb-8 rounded-[var(--radius-pill)] border px-4 py-3 sm:px-6 ${isScrolled ? "is-scrolled" : ""}`}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/12 text-xs font-bold">{theme.logoMark}</span>
              <Link href="/" className="brand-mark text-sm font-semibold tracking-[0.04em]">
                {theme.brandName}
              </Link>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              {navLinks.map((item) => (
                <a key={item.label} href={item.href} className="rounded-[var(--radius-pill)] border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-brand/35 hover:text-brand-strong">
                  {item.label}
                </a>
              ))}
              <Button href="#lead-form" trackingEvent="cta_click" trackingPayload={{ position: "nav", slug: template.slug }}>
                Diagnostic Quote
              </Button>
            </div>
          </div>
        </nav>
      );
    }

    if (theme.navStyle === "editorial") {
      return (
        <nav className={`nav-shell nav-editorial sticky top-3 z-40 mb-8 border-b px-2 py-4 sm:px-1 ${isScrolled ? "is-scrolled" : ""}`}>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <p className="hidden text-xs uppercase tracking-[0.16em] text-muted sm:block">{theme.brandTagline}</p>
            <Link href="/" className="brand-mark text-center text-sm font-semibold uppercase tracking-[0.18em] text-brand-strong">
              {theme.brandName}
            </Link>
            <div className="hidden items-center justify-end gap-4 text-sm text-muted sm:flex">{links}</div>
          </div>
        </nav>
      );
    }

    if (theme.navStyle === "storm") {
      return (
        <nav className={`nav-shell nav-storm sticky top-3 z-40 mb-8 rounded-[var(--radius-lg)] border px-4 py-3 sm:px-6 ${isScrolled ? "is-scrolled" : ""}`}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/35 text-xs font-bold">{theme.logoMark}</span>
              <div>
                <Link href="/" className="brand-mark text-sm font-semibold tracking-[0.06em] text-white">
                  {theme.brandName}
                </Link>
                <p className="hidden text-xs text-white/75 sm:block">{theme.brandTagline}</p>
              </div>
            </div>
            <Button href="#lead-form" trackingEvent="cta_click" trackingPayload={{ position: "nav", slug: template.slug }}>
              Emergency Estimate
            </Button>
          </div>
        </nav>
      );
    }

    return (
      <nav className={`nav-shell sticky top-3 z-40 mb-8 flex items-center justify-between rounded-[var(--radius-pill)] border border-line bg-white/80 px-4 py-3 backdrop-blur sm:px-6 ${isScrolled ? "is-scrolled" : ""}`}>
        <Link href="/" className="brand-mark text-sm font-semibold tracking-wide text-brand-strong">
          {theme.brandName}
        </Link>
        <div className="hidden items-center gap-4 text-muted sm:flex">
          {links}
          <Button href="#lead-form" trackingEvent="cta_click" trackingPayload={{ position: "nav", slug: template.slug }}>
            Request Estimate
          </Button>
        </div>
      </nav>
    );
  }

  return (
    <div style={themedVars} className="demo-page min-h-screen" data-slug={template.slug}>
      <div
        className="top-strip border-b border-white/30 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white"
        style={{ background: `linear-gradient(90deg, ${theme.brandStrong}, ${theme.brand})` }}
      >
        {theme.announcement}
      </div>

      <main className="page-shell demo-main pb-28 pt-4 md:pb-16">
        {renderNav()}

        <motion.section
          {...revealProps}
          className="hero-shell noise-overlay relative overflow-hidden rounded-[calc(var(--radius-card)+0.65rem)] border border-white/50 p-6 sm:p-10"
          style={{
            background: `radial-gradient(circle at 8% 12%, ${theme.glow}, transparent 34%), linear-gradient(140deg, ${theme.bgStart}, ${theme.bgEnd})`,
          }}
        >
          <span className="floating-shape h-28 w-28 bg-brand/25" style={{ top: "9%", right: "4%" }} />
          <span className="floating-shape h-20 w-20 bg-accent/25" style={{ top: "55%", right: "32%" }} />
          <div className="relative z-10 grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-[var(--radius-pill)] border border-white/70 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
                {template.niche} - {template.city}
              </p>
              <p className="mt-3 text-sm font-medium text-brand-strong/90">{theme.brandTagline}</p>
              <h1 className="mt-4 text-[var(--font-size-4xl)] font-semibold text-foreground">{template.heroTitle}</h1>
              <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{template.heroSubtitle}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={phoneHref} trackingEvent="cta_click" trackingPayload={{ position: "hero_call", slug: template.slug }}>
                  Call Now
                </Button>
                <Button href="#lead-form" variant="secondary" trackingEvent="cta_click" trackingPayload={{ position: "hero_estimate", slug: template.slug }}>
                  Get Estimate
                </Button>
              </div>
              <ul className="mt-5 grid gap-2 text-sm text-foreground/85 sm:grid-cols-2">
                <li>- Fast response windows with dedicated project owner</li>
                <li>- Local market positioning tuned for higher conversion</li>
                <li>- License, insurance, and trust signals above the fold</li>
                <li>- SEO-ready structure that scales across service pages</li>
              </ul>
            </div>

            <figure className="surface-card elevate-card overflow-hidden rounded-[var(--radius-card)]">
              <div className="relative h-[360px] w-full sm:h-[430px]">
                <Image src={heroPhoto.url} alt={heroPhoto.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" unoptimized priority />
              </div>
            </figure>
          </div>
        </motion.section>

        <motion.section {...revealProps} className="bar-shell mt-6 overflow-hidden rounded-[var(--radius-pill)] border border-line bg-white/90 px-3 py-2">
          <div className="bar-track flex flex-wrap items-center gap-2 sm:gap-3">
            {template.trustBadges.map((badge) => (
              <span key={badge} className="bar-pill inline-flex items-center rounded-[var(--radius-pill)] border border-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.09em] text-brand-strong">
                {badge}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section {...revealProps} id="services" className="services-shell section-space space-y-6">
          <SectionTitle
            kicker="Services"
            title={`High-Impact ${template.niche} Service Blocks`}
            description="Each block highlights deliverables and measurable outcomes so visitors understand value quickly."
          />
          <div className="services-grid grid gap-4 md:grid-cols-3">
            {template.services.map((service, index) => (
              <article key={service.title} className="service-card surface-card elevate-card rounded-[var(--radius-card)] p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/12 text-lg font-bold text-brand-strong">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                  <li>- Faster turnaround with priority scheduling</li>
                  <li>- Cleaner process and higher customer satisfaction</li>
                  <li>- Better ROI from quality-first execution</li>
                </ul>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...revealProps} className="cta-band section-space rounded-[var(--radius-card)] border border-line bg-gradient-to-r from-brand/12 via-white to-accent/12 p-7 sm:p-9">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-strong">Ready to Move Fast?</p>
              <h2 className="mt-1 text-3xl font-semibold">Speak with a specialist in the next 15 minutes.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={phoneHref} trackingEvent="cta_click" trackingPayload={{ position: "mid_call", slug: template.slug }}>
                Call Now
              </Button>
              <Button href="#lead-form" variant="secondary" trackingEvent="cta_click" trackingPayload={{ position: "mid_estimate", slug: template.slug }}>
                Request Estimate
              </Button>
            </div>
          </div>
        </motion.section>

        <motion.section {...revealProps} className="testimonial-shell section-space space-y-6">
          <SectionTitle kicker="Testimonials" title="Results Clients Actually Mention" />
          <div className="grid gap-4 md:grid-cols-2">
            {template.testimonials.map((item) => {
              const avatarSeed = encodeURIComponent(`${template.slug}-${item.name}`);

              return (
                <blockquote key={item.name} className="testimonial-card surface-card elevate-card rounded-[var(--radius-card)] p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Image
                      src={`https://api.dicebear.com/9.x/thumbs/png?seed=${avatarSeed}`}
                      alt={`${item.name} portrait`}
                      width={52}
                      height={52}
                      className="rounded-full border border-line"
                      unoptimized
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="text-xs text-muted">{item.role}</p>
                    </div>
                    <span className="ml-auto rounded-[var(--radius-pill)] bg-accent/14 px-3 py-1 text-xs font-semibold text-brand-strong">+37% lead quality</span>
                  </div>
                  <p className="text-sm text-amber-500">★★★★★</p>
                  <p className="mt-3 text-base text-foreground">&quot;{item.quote}&quot;</p>
                </blockquote>
              );
            })}
          </div>
        </motion.section>

        <motion.section {...revealProps} id="gallery" className="gallery-shell section-space space-y-6">
          <SectionTitle kicker="Before / After" title="Visual Proof of Transformation" />
          <div className="gallery-grid grid gap-4 md:grid-cols-2">
            {template.beforeAfter.map((item, index) => {
              const beforePhoto = workPhotos[(index * 2) % workPhotos.length];
              const afterPhoto = workPhotos[(index * 2 + 1) % workPhotos.length] || altPhoto;

              return (
                <article key={item.title} className="gallery-card surface-card elevate-card rounded-[var(--radius-card)] p-6">
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
        </motion.section>

        <motion.section {...revealProps} className="cta-band section-space rounded-[var(--radius-card)] border border-line bg-white p-7 sm:p-9">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-strong">Estimate in Minutes</p>
              <h2 className="mt-1 text-3xl font-semibold">Tell us your timeline and budget. We will map the best path.</h2>
            </div>
            <Button href="#lead-form" trackingEvent="cta_click" trackingPayload={{ position: "gallery_cta", slug: template.slug }}>
              Start My Estimate
            </Button>
          </div>
        </motion.section>

        <motion.section {...revealProps} id="faq" className="faq-shell section-space space-y-6">
          <SectionTitle kicker="FAQ" title="Answers to Decision-Stage Questions" />
          <div className="space-y-3">
            {template.faq.map((item) => (
              <details key={item.question} className="faq-item surface-card rounded-2xl px-5 py-4">
                <summary className="cursor-pointer list-none text-base font-semibold text-foreground">{item.question}</summary>
                <p className="mt-3 text-sm text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </motion.section>

        <motion.section {...revealProps} className="quote-shell section-space">
          <div className="quote-block rounded-[var(--radius-card)] border border-line bg-gradient-to-r from-brand/12 via-white to-accent/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-strong">Request Quote</p>
            <h2 className="mt-2 text-3xl font-semibold">Premium service design. Local lead generation performance.</h2>
          </div>
        </motion.section>

        <motion.section {...revealProps} id="lead-form" className="lead-shell mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <SectionTitle
              kicker="Get Started"
              title="Built to Convert Traffic Into Booked Calls"
              description="This premium form flow captures qualified leads with enough detail to improve close rates."
            />
            <div className="surface-card rounded-[var(--radius-card)] p-5 text-sm text-muted">
              <p className="font-semibold text-foreground">{template.contact.phone}</p>
              <p className="mt-2">{template.contact.email}</p>
              <p className="mt-2">{template.contact.address}</p>
              <p className="mt-2">{template.contact.hours}</p>
            </div>
          </div>

          <LeadForm slug={template.slug} niche={template.niche} primaryCta={template.primaryCta} />
        </motion.section>
      </main>

      <AnimatePresence>
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="fixed inset-x-4 bottom-4 z-40 md:hidden"
        >
          <div className="glass-panel rounded-[var(--radius-pill)] p-2">
            <div className="grid grid-cols-2 gap-2">
              <Button href={phoneHref} className="w-full px-0" trackingEvent="cta_click" trackingPayload={{ position: "sticky_call", slug: template.slug }}>
                Call
              </Button>
              <Button href="#lead-form" variant="secondary" className="w-full px-0" trackingEvent="cta_click" trackingPayload={{ position: "sticky_quote", slug: template.slug }}>
                Estimate
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <footer className="border-t border-line/70 py-10">
        <div className="page-shell grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-strong">{theme.brandName}</p>
            <p className="mt-3 max-w-md text-sm text-muted">
              Conversion-focused local business website framework with premium visuals, SEO structure, and rapid launch capability.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Before / After</a></li>
              <li><a href="#lead-form">Request Quote</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Trust</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>Licensed + Insured</li>
              <li>Local Market Specialists</li>
              <li>Performance-Driven Design</li>
            </ul>
          </div>
        </div>
        <div className="page-shell mt-8 flex flex-col gap-3 border-t border-line pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{theme.brandName} - {template.niche} demo powered by Template Showcase.</p>
          <Link href="/" className="font-semibold text-brand-strong hover:text-brand">
            Back to all templates
          </Link>
        </div>
      </footer>
    </div>
  );
}
