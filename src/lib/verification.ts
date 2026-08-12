/**
 * Search Console & Domain Verification Infrastructure
 * Google Search Console, Bing Webmaster Tools, Meta Domain Verification & Canonical URL utilities.
 */

import { Metadata } from 'next';
import { BUSINESS_DETAILS } from '../constants/business';

export interface VerificationTokens {
  google?: string;
  bing?: string;
  meta?: string;
}

/**
 * Retrieve verification tokens from environment variables
 */
export function getVerificationTokens(): VerificationTokens {
  return {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
    meta: process.env.NEXT_PUBLIC_META_DOMAIN_VERIFICATION,
  };
}

/**
 * Construct Next.js Metadata verification object for RootLayout or Metadata API
 */
export function getVerificationMetadata(): Metadata['verification'] {
  const tokens = getVerificationTokens();

  const otherRecord: Record<string, string | number | (string | number)[]> = {};

  if (tokens.bing) {
    otherRecord['msvalidate.01'] = tokens.bing;
  }

  if (tokens.meta) {
    otherRecord['facebook-domain-verification'] = tokens.meta;
  }

  return {
    ...(tokens.google ? { google: tokens.google } : {}),
    ...(Object.keys(otherRecord).length > 0 ? { other: otherRecord } : {}),
  };
}

/**
 * Normalize and validate canonical URL
 */
export function getCanonicalUrl(path = '/'): string {
  const baseUrl = BUSINESS_DETAILS.url.replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (cleanPath === '/') {
    return baseUrl;
  }

  return `${baseUrl}${cleanPath.replace(/\/+$/, '')}`;
}

/**
 * Validate whether a string is a properly formatted canonical HTTPS URL
 */
export function validateCanonicalUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && parsed.hostname.length > 0;
  } catch {
    return false;
  }
}

/**
 * Generate hreflang tags preparation for internationalization & localized SEO
 */
export function getHreflangTags(path = '/'): Record<string, string> {
  const canonical = getCanonicalUrl(path);
  return {
    'en-IN': canonical,
    'hi-IN': canonical,
    'x-default': canonical,
  };
}
