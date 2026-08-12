/**
 * Google Consent Mode v2 Architecture & Privacy Consent Management
 * Manages user preferences for tracking cookies and ad personalization.
 */

export type ConsentStatus = 'granted' | 'denied';

export interface ConsentState {
  analytics_storage: ConsentStatus;
  ad_storage: ConsentStatus;
  ad_user_data: ConsentStatus;
  ad_personalization: ConsentStatus;
  functionality_storage: ConsentStatus;
  security_storage: ConsentStatus;
}

export const DEFAULT_CONSENT_STATE: ConsentState = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
};

const CONSENT_STORAGE_KEY = 'the_cloud_spa_consent_v2';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Retrieve saved consent state from localStorage if available, or default
 */
export function getConsentState(): ConsentState {
  if (typeof window === 'undefined') return DEFAULT_CONSENT_STATE;

  try {
    const saved = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...DEFAULT_CONSENT_STATE,
        ...parsed,
      };
    }
  } catch (e) {
    console.error('Failed to read consent state from storage:', e);
  }

  return DEFAULT_CONSENT_STATE;
}

/**
 * Helper to check if analytics storage is explicitly granted
 */
export function hasAnalyticsConsent(): boolean {
  return getConsentState().analytics_storage === 'granted';
}

/**
 * Helper to check if ad storage is explicitly granted
 */
export function hasAdConsent(): boolean {
  return getConsentState().ad_storage === 'granted';
}

/**
 * Initialize Consent Mode v2 default configuration BEFORE tags fire
 */
export function initConsentMode(): void {
  if (typeof window === 'undefined') return;

  const currentConsent = getConsentState();

  window.dataLayer = window.dataLayer || [];

  function gtag(...args: unknown[]) {
    if (window.dataLayer) {
      window.dataLayer.push(args);
    }
  }

  window.gtag = window.gtag || gtag;

  // Set default consent mode v2
  window.gtag('consent', 'default', {
    analytics_storage: currentConsent.analytics_storage,
    ad_storage: currentConsent.ad_storage,
    ad_user_data: currentConsent.ad_user_data,
    ad_personalization: currentConsent.ad_personalization,
    functionality_storage: currentConsent.functionality_storage,
    security_storage: currentConsent.security_storage,
    wait_for_update: 500,
  });
}

/**
 * Update consent preferences dynamically and notify GTM/GA4
 */
export function updateConsentState(updated: Partial<ConsentState>): ConsentState {
  if (typeof window === 'undefined') return DEFAULT_CONSENT_STATE;

  const current = getConsentState();
  const nextConsent: ConsentState = {
    ...current,
    ...updated,
  };

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(nextConsent));
  } catch (e) {
    console.error('Failed to save consent state:', e);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: nextConsent.analytics_storage,
      ad_storage: nextConsent.ad_storage,
      ad_user_data: nextConsent.ad_user_data,
      ad_personalization: nextConsent.ad_personalization,
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'consent_updated',
      consent_state: nextConsent,
    });
  }

  return nextConsent;
}

/**
 * Grant all consent categories
 */
export function grantAllConsent(): ConsentState {
  return updateConsentState({
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  });
}

/**
 * Deny all non-essential consent categories
 */
export function denyAllConsent(): ConsentState {
  return updateConsentState({
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}
