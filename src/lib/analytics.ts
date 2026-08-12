/**
 * Google Analytics 4 (GA4) & Enterprise Marketing Infrastructure Interface
 * Centralizes re-exports and backwards compatibility for event tracking across the app.
 */

import { sendGA4Event } from './ga';

export type { BookingEventPayload } from './event-tracker';

export {
  getConsentState,
  hasAnalyticsConsent,
  hasAdConsent,
  initConsentMode,
  updateConsentState,
  grantAllConsent,
  denyAllConsent,
} from './consent';

export { getGA4Id, sendGA4PageView, sendGA4Event } from './ga';

export { getGTMId, sendGTMEvent, sendGTMPageView } from './gtm';

export {
  getMetaPixelId,
  trackMetaPageView,
  trackMetaEvent,
  trackMetaCustomEvent,
} from './meta-pixel';

export {
  getVerificationTokens,
  getVerificationMetadata,
  getCanonicalUrl,
  validateCanonicalUrl,
  getHreflangTags,
} from './verification';

export {
  trackPageView,
  trackSessionStart,
  trackBookAppointmentClick,
  trackWhatsAppClick,
  trackPhoneClick,
  trackBookingSubmitted,
  trackServiceSelected,
  trackLocationSelected,
  trackMembershipClick,
  trackPackageClick,
  trackBlogRead,
  trackBlogScrollDepth,
  trackGalleryOpen,
  trackFAQExpand,
  trackNavigationClick,
  trackSearchUsed,
  trackNewsletterSubscribe,
  trackOutboundLinkClick,
  trackFileDownload,
} from './event-tracker';

/**
 * Backward-compatible helper to push events directly to GA4 dataLayer
 */
export function trackGAEvent(eventName: string, params: Record<string, unknown> = {}): void {
  sendGA4Event(eventName, params);
}

/**
 * Event: User progresses to a specific step in the booking flow
 */
export function trackBookingStepView(stepNumber: number, stepName: string): void {
  sendGA4Event('booking_step_view', {
    event_category: 'Booking_Funnel',
    step_number: stepNumber,
    step_name: stepName,
  });
}
