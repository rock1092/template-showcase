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
  "inline-flex items-center justify-center rounded-[var(--radius-pill)] px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white shadow-[var(--shadow-soft)] hover:bg-brand-strong",
  secondary: "bg-white text-foreground border border-line hover:border-brand/40",
  ghost: "text-brand hover:text-brand-strong",
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
