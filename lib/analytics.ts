"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  window.dispatchEvent(new CustomEvent("template-showcase:event", { detail: { eventName, payload } }));
}
