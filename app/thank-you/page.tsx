import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Thank You",
  description: "Your lead has been submitted.",
};

export default function ThankYouPage() {
  return (
    <main className="page-shell flex min-h-[70vh] items-center py-10">
      <section className="glass-panel w-full rounded-[calc(var(--radius-card)+0.5rem)] p-8 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-strong">Success</p>
        <h1 className="mt-3 text-4xl font-semibold">Thanks, your request is in.</h1>
        <p className="mt-4 max-w-2xl text-base text-muted">
          We received your details and a team member will reach out shortly. You can continue browsing other niche demos in
          the meantime.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" trackingEvent="cta_click" trackingPayload={{ position: "thank_you_primary" }}>
            Back to showcase
          </Button>
          <Button
            href="/demo/construction"
            variant="secondary"
            trackingEvent="cta_click"
            trackingPayload={{ position: "thank_you_secondary" }}
          >
            View another demo
          </Button>
        </div>
      </section>
    </main>
  );
}
