/**
 * Google Analytics 4 (GA4) Tracking Engine
 * Reads Measurement ID strictly from NEXT_PUBLIC_GA4_ID environment variable.
 */

import { hasAnalyticsConsent } from './consent';

export function getGA4Id(): string | undefined {
  return process.env.NEXT_PUBLIC_GA4_ID;
}

/**
 * Send standard or custom page_view event to GA4
 */
export function sendGA4PageView(url: string, title?: string): void {
  if (typeof window === 'undefined') return;
  const gaId = getGA4Id();
  if (!gaId) return;

  if (!hasAnalyticsConsent()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[GA4] Pageview suppressed (analytics_storage not granted):', url);
    }
    return;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('config', gaId, {
      page_path: url,
      page_title: title || (typeof document !== 'undefined' ? document.title : ''),
    });
  }
}

/**
 * Send custom event to Google Analytics 4
 */
export function sendGA4Event(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  const gaId = getGA4Id();
  if (!gaId) return;

  if (!hasAnalyticsConsent()) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[GA4] Event "${eventName}" suppressed (analytics_storage not granted)`);
    }
    return;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      send_to: gaId,
      ...params,
    });
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
}
