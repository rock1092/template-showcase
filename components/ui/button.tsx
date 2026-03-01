"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type AnalyticsPayload } from "@/lib/analytics";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  trackingEvent?: string;
  trackingPayload?: AnalyticsPayload;
}

const baseStyle =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand to-brand-strong text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]",
  secondary: "bg-white text-foreground border border-line hover:border-brand/40 hover:bg-brand/5",
  ghost: "text-brand hover:bg-brand/10 hover:text-brand-strong",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  trackingEvent,
  trackingPayload,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={() => {
        if (trackingEvent) {
          trackEvent(trackingEvent, trackingPayload);
        }
      }}
    >
      {children}
    </Link>
  );
}
