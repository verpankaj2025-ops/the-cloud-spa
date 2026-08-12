/**
 * Google Tag Manager (GTM) DataLayer Engine
 * Reads GTM Container ID strictly from NEXT_PUBLIC_GTM_ID environment variable.
 */

import { getConsentState } from './consent';

export function getGTMId(): string | undefined {
  return process.env.NEXT_PUBLIC_GTM_ID;
}

/**
 * Push arbitrary custom event or payload into GTM dataLayer
 */
export function sendGTMEvent(eventName: string, data: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  const consent = getConsentState();

  window.dataLayer.push({
    event: eventName,
    timestamp: new Date().toISOString(),
    consent_status: {
      analytics: consent.analytics_storage,
      ads: consent.ad_storage,
    },
    ...data,
  });

  if (process.env.NODE_ENV === 'development') {
    console.log(`[GTM DataLayer Push]: ${eventName}`, data);
  }
}

/**
 * Dispatch Virtual Pageview to Tag Manager
 */
export function sendGTMPageView(url: string, title?: string): void {
  sendGTMEvent('page_view', {
    page_path: url,
    page_title: title || (typeof document !== 'undefined' ? document.title : ''),
    page_location: typeof window !== 'undefined' ? window.location.href : url,
  });
}
