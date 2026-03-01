interface SectionTitleProps {
  kicker: string;
  title: string;
  description?: string;
}

export function SectionTitle({ kicker, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-strong">{kicker}</p>
      <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
