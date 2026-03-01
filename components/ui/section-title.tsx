interface SectionTitleProps {
  kicker: string;
  title: string;
  description?: string;
}

export function SectionTitle({ kicker, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-brand/25 bg-brand/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
        {kicker}
      </p>
      <h2 className="text-[var(--font-size-3xl)] font-semibold text-foreground">{title}</h2>
      {description ? <p className="max-w-2xl text-base text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
