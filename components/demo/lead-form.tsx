"use client";

import { FormEvent } from "react";
import { NicheSlug } from "@/types/template";
import { trackEvent } from "@/lib/analytics";

interface LeadFormProps {
  slug: NicheSlug;
  niche: string;
  primaryCta: string;
}

export function LeadForm({ slug, niche, primaryCta }: LeadFormProps) {
  const formName = `lead-${slug}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const payload = {
      formName,
      slug,
      niche,
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      sourcePath: window.location.pathname,
      submittedAt: new Date().toISOString(),
    };

    trackEvent("lead_form_submit", {
      niche,
      slug,
      sourcePath: payload.sourcePath,
    });

    void fetch("/api/crm-webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  }

  return (
    <form
      name={formName}
      method="POST"
      action="/thank-you"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="surface-card rounded-[var(--radius-card)] p-6"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="template" value={niche} />
      <p className="hidden">
        <label>
          Do not fill this out if you are human: <input name="bot-field" />
        </label>
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-foreground">
          Full Name
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-2 text-sm outline-none ring-brand/40 focus:ring-2"
          />
        </label>
        <label className="text-sm font-medium text-foreground">
          Phone
          <input
            type="tel"
            name="phone"
            required
            className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-2 text-sm outline-none ring-brand/40 focus:ring-2"
          />
        </label>
        <label className="text-sm font-medium text-foreground sm:col-span-2">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-2 text-sm outline-none ring-brand/40 focus:ring-2"
          />
        </label>
        <label className="text-sm font-medium text-foreground sm:col-span-2">
          Project Details
          <textarea
            name="message"
            rows={4}
            required
            className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-2 text-sm outline-none ring-brand/40 focus:ring-2"
            placeholder="Tell us what you need and your preferred timeline"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 w-full rounded-[var(--radius-pill)] bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
      >
        {primaryCta}
      </button>
    </form>
  );
}
