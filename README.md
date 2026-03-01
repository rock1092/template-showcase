# Template Showcase Platform

Premium local business demo platform built with one unified design system and niche-specific content data.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Component-driven architecture with shared UI and data configs
- SEO-ready metadata + schema + sitemap + robots
- Netlify deploy ready with form handling

## Included Demo Routes

- `/demo/realtor`
- `/demo/construction`
- `/demo/hvac`
- `/demo/painting`
- `/demo/plumbing`
- `/demo/landscaping`
- `/demo/cleaning`
- `/demo/electrical`
- `/demo/roofing`

## Architecture

- `data/templates.ts`: demo registry + filters + helper functions
- `data/niches/*.ts`: one config per niche
- `types/template.ts`: schema for all niche config objects
- `components/showcase/*`: homepage template grid and filters
- `components/demo/*`: shared conversion sections rendered from niche data
- `app/demo/[slug]/page.tsx`: dynamic route generation + metadata + JSON-LD
- `app/demo/[slug]/opengraph-image.tsx`: niche OG image generation
- `app/demo/[slug]/twitter-image.tsx`: niche Twitter image generation
- `app/api/crm-webhook/route.ts`: webhook forwarder for CRM lead intake
- `lib/analytics.ts`: reusable CTA and form event tracking helper
- `data/niche-visuals.ts`: per-niche color systems + visual style tokens
- `lib/pixabay.ts`: server-side Pixabay photo fetching with fallback images

This setup keeps every niche aligned to one style system while allowing content-only customization.

## Local Setup

1. Install dependencies

```bash
npm install
```

2. Configure environment variables

```bash
cp .env.example .env.local
```

Required/optional keys:

- `NEXT_PUBLIC_SITE_URL` (required for canonical/sitemap)
- `NEXT_PUBLIC_GA_ID` (optional, enables Google Analytics)
- `CRM_WEBHOOK_URL` (optional, forwards lead payloads to your CRM)
- `CRM_WEBHOOK_SECRET` (optional, sent as `x-webhook-secret` header)
- `PIXABAY_API_KEY` (optional, enables real niche work photos from Pixabay)

3. Run development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## Netlify Deployment

- `netlify.toml` is included with Next.js plugin and build command.
- Netlify forms are enabled on each demo route lead form (`data-netlify="true"`).
- Form submissions redirect to `/thank-you`.
- The lead form also posts in parallel to `/api/crm-webhook` for CRM ingestion.

## Analytics and Conversion Tracking

- CTA clicks emit `cta_click` events.
- Lead submissions emit `lead_form_submit` events.
- When `NEXT_PUBLIC_GA_ID` is set, events are forwarded to `gtag` automatically.

## Premium UI Refactor Changelog

- Added centralized design tokens in `app/globals.css` for spacing, radius, shadows, and typography scale.
- Upgraded global typography pairing to `Plus Jakarta Sans + Manrope` in `app/layout.tsx`.
- Rebuilt demo pages with luxury hero composition, trust strip, repeated CTA bands, richer section rhythm, and animated reveals using Framer Motion.
- Implemented transparent-to-solid sticky navbar behavior on scroll.
- Elevated service/testimonial/gallery/FAQ/form cards with depth, hover polish, and stronger conversion hierarchy.
- Upgraded lead form into a two-step premium flow while preserving existing Netlify + CRM submission logic.
- Added template personality layers by niche slug (elegant realtor, industrial construction, technical HVAC, vibrant painting, etc.) without changing routing/data architecture.
- Improved accessibility with stronger focus-visible states and reduced-motion-safe behavior.

## Before/After Screenshots

- Before screenshots: `screenshots/before/*.png`
- After screenshots: `screenshots/after/*.png`

Captured templates:

- `realtor`
- `construction`
- `hvac`
- `painting`
- `plumbing`
- `landscaping`
- `cleaning`
- `electrical`
- `roofing`

## Add a New Niche (under 10 minutes)

1. Create `data/niches/new-niche.ts` and export a `DemoTemplate` object.
2. Import and register it in `data/templates.ts`.
3. Ensure `slug`, `seo`, `services`, `faq`, and `contact` fields are complete.
4. Run `npm run build` to verify static params and metadata generation.

The route will auto-generate at `/demo/<slug>`.
