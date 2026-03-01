import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoTemplatePage } from "@/components/demo/demo-template-page";
import { getTemplateBySlug, getTemplateSlugs } from "@/data/templates";
import { getNicheVisual } from "@/data/niche-visuals";
import { getWorkPhotos } from "@/lib/pixabay";

interface DemoPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getTemplateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    return {
      title: "Template Not Found",
    };
  }

  return {
    title: template.seo.title,
    description: template.seo.description,
    keywords: template.seo.keywords,
    alternates: {
      canonical: `/demo/${template.slug}`,
    },
    openGraph: {
      title: template.seo.title,
      description: template.seo.description,
      type: "website",
      url: `/demo/${template.slug}`,
      images: [
        {
          url: `/demo/${template.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${template.niche} demo template preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: template.seo.title,
      description: template.seo.description,
      images: [`/demo/${template.slug}/twitter-image`],
    },
  };
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const visual = getNicheVisual(template.slug);
  const workPhotos = await getWorkPhotos(template.slug);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://template-showcase.netlify.app";
  const canonicalUrl = `${siteUrl}/demo/${template.slug}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${template.niche} Demo Business`,
    description: template.seo.description,
    telephone: template.contact.phone,
    email: template.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: template.contact.address,
      addressLocality: template.city,
    },
    url: canonicalUrl,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${template.niche} Services`,
    areaServed: template.city,
    provider: {
      "@type": "LocalBusiness",
      name: `${template.niche} Demo Business`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${template.niche} Service Catalog`,
      itemListElement: template.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: template.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DemoTemplatePage template={template} theme={visual} workPhotos={workPhotos} />
    </>
  );
}
