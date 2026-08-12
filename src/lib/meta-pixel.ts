/**
 * Meta (Facebook) Pixel Enterprise Tracking
 * Reads Pixel ID strictly from NEXT_PUBLIC_META_PIXEL_ID environment variable.
 */

import { hasAdConsent } from './consent';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export function getMetaPixelId(): string | undefined {
  return process.env.NEXT_PUBLIC_META_PIXEL_ID;
}

/**
 * Track standard Meta PageView
 */
export function trackMetaPageView(): void {
  if (typeof window === 'undefined') return;
  const pixelId = getMetaPixelId();
  if (!pixelId) return;

  if (!hasAdConsent()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Meta Pixel] PageView suppressed (ad_storage not granted)');
    }
    return;
  }

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
}

/**
 * Track standard Meta Pixel events (e.g. Lead, Contact, Schedule, ViewContent)
 */
export function trackMetaEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  const pixelId = getMetaPixelId();
  if (!pixelId) return;

  if (!hasAdConsent()) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Meta Pixel] Event "${eventName}" suppressed (ad_storage not granted)`);
    }
    return;
  }

  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName, params);
  }
}

/**
 * Track custom Meta Pixel events
 */
export function trackMetaCustomEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  const pixelId = getMetaPixelId();
  if (!pixelId) return;

  if (!hasAdConsent()) return;

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params);
  }
}
