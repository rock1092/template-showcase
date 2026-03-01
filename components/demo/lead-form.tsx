"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { NicheSlug } from "@/types/template";
import { trackEvent } from "@/lib/analytics";

interface LeadFormProps {
  slug: NicheSlug;
  niche: string;
  primaryCta: string;
}

export function LeadForm({ slug, niche, primaryCta }: LeadFormProps) {
  const router = useRouter();
  const formName = `lead-${slug}`;
  const [step, setStep] = useState<1 | 2>(1);

  const progressLabel = useMemo(() => (step === 1 ? "Step 1 of 2" : "Step 2 of 2"), [step]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

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

    const netlifyPayload = new URLSearchParams();
    netlifyPayload.set("form-name", formName);
    netlifyPayload.set("template", niche);
    netlifyPayload.set("name", payload.name);
    netlifyPayload.set("phone", payload.phone);
    netlifyPayload.set("email", payload.email);
    netlifyPayload.set("message", payload.message);

    await fetch("/__forms.html", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: netlifyPayload.toString(),
    });

    void fetch("/api/crm-webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });

    router.push("/thank-you");
  }

  return (
    <form name={formName} className="surface-card rounded-[var(--radius-card)] p-6 sm:p-7" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="template" value={niche} />
      <p className="hidden">
        <label>
          Do not fill this out if you are human: <input name="bot-field" />
        </label>
      </p>
      <div className="mb-5 flex items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-line bg-brand/5 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-strong">{progressLabel}</p>
        <div className="h-1.5 w-32 overflow-hidden rounded-[var(--radius-pill)] bg-white/80">
          <div className={`h-full bg-gradient-to-r from-brand to-brand-strong transition-all duration-300 ${step === 1 ? "w-1/2" : "w-full"}`} />
        </div>
      </div>

      {step === 1 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-foreground">
            Full Name
            <input
              type="text"
              name="name"
              required
              className="mt-1.5 w-full rounded-[var(--radius-md)] border border-line bg-white px-3 py-2.5 text-sm outline-none ring-brand/40 focus:ring-2"
            />
          </label>
          <label className="text-sm font-medium text-foreground">
            Phone
            <input
              type="tel"
              name="phone"
              required
              className="mt-1.5 w-full rounded-[var(--radius-md)] border border-line bg-white px-3 py-2.5 text-sm outline-none ring-brand/40 focus:ring-2"
            />
          </label>
          <label className="text-sm font-medium text-foreground sm:col-span-2">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-1.5 w-full rounded-[var(--radius-md)] border border-line bg-white px-3 py-2.5 text-sm outline-none ring-brand/40 focus:ring-2"
            />
          </label>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="mt-2 w-full rounded-[var(--radius-pill)] bg-gradient-to-r from-brand to-brand-strong px-5 py-3 text-sm font-semibold text-white sm:col-span-2"
          >
            Continue to project details
          </button>
        </div>
      ) : (
        <div className="grid gap-4">
          <label className="text-sm font-medium text-foreground">
            Project Details
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1.5 w-full rounded-[var(--radius-md)] border border-line bg-white px-3 py-2.5 text-sm outline-none ring-brand/40 focus:ring-2"
              placeholder="Describe your scope, urgency, and preferred appointment times"
            />
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-[var(--radius-pill)] border border-line bg-white px-5 py-3 text-sm font-semibold text-foreground"
            >
              Back
            </button>
            <button
              type="submit"
              className="rounded-[var(--radius-pill)] bg-gradient-to-r from-brand to-brand-strong px-5 py-3 text-sm font-semibold text-white"
            >
              {primaryCta}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
