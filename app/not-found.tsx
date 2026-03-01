import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-[65vh] items-center py-10">
      <section className="surface-card w-full rounded-[var(--radius-card)] p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-strong">404</p>
        <h1 className="mt-2 text-4xl font-semibold">Template not found</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted">That demo route does not exist. Browse the available local business templates instead.</p>
        <div className="mt-6">
          <Button href="/">Go to showcase</Button>
        </div>
      </section>
    </main>
  );
}
