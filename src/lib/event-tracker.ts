/**
 * Enterprise Unified Event Tracking Engine
 * Consolidates dispatches across GA4, Google Tag Manager, and Meta Pixel.
 * Type-safe, modular, and consent-aware with zero hardcoded tracking IDs.
 */

import { sendGA4Event, sendGA4PageView } from './ga';
import { sendGTMEvent, sendGTMPageView } from './gtm';
import { trackMetaEvent, trackMetaCustomEvent, trackMetaPageView } from './meta-pixel';

export interface BookingEventPayload {
  serviceId?: string;
  serviceName?: string;
  category?: string;
  durationMinutes?: number;
  priceINR?: number;
  preferredDate?: string;
  preferredTime?: string;
  locationName?: string;
  clientName?: string;
  clientPhone?: string;
  source?: string;
  step?: number;
}

/**
 * Track Page View across GA4, GTM, and Meta Pixel
 */
export function trackPageView(url: string, title?: string): void {
  sendGA4PageView(url, title);
  sendGTMPageView(url, title);
  trackMetaPageView();
}

/**
 * Track Session Start
 */
export function trackSessionStart(referrer?: string): void {
  sendGA4Event('session_start', {
    referrer: referrer || (typeof document !== 'undefined' ? document.referrer : ''),
  });
  sendGTMEvent('session_start', {
    referrer: referrer || (typeof document !== 'undefined' ? document.referrer : ''),
  });
}

/**
 * Track Book Appointment Click CTA
 */
export function trackBookAppointmentClick(source = 'cta_button', details?: Record<string, unknown>): void {
  const payload = {
    event_category: 'Conversion',
    event_label: source,
    cta_source: source,
    ...details,
  };

  sendGA4Event('book_appointment_click', payload);
  sendGTMEvent('book_appointment_click', payload);
  trackMetaEvent('Schedule', { content_category: 'Spa_Booking', content_name: source });
}

/**
 * Track WhatsApp CTA Click
 */
export function trackWhatsAppClick(source = 'whatsapp_button', details?: Record<string, unknown>): void {
  const payload = {
    event_category: 'Lead_Conversion',
    event_label: source,
    contact_method: 'WhatsApp',
    cta_source: source,
    ...details,
  };

  sendGA4Event('whatsapp_click', payload);
  sendGTMEvent('whatsapp_click', payload);
  trackMetaEvent('Contact', { content_category: 'WhatsApp', content_name: source });
}

/**
 * Track Phone Call Click
 */
export function trackPhoneClick(source = 'phone_button', details?: Record<string, unknown>): void {
  const payload = {
    event_category: 'Lead_Conversion',
    event_label: source,
    contact_method: 'Phone_Call',
    cta_source: source,
    ...details,
  };

  sendGA4Event('phone_click', payload);
  sendGTMEvent('phone_click', payload);
  trackMetaEvent('Contact', { content_category: 'Phone', content_name: source });
}

/**
 * Track Completed Booking Reservation
 */
export function trackBookingSubmitted(details: BookingEventPayload): void {
  const payload = {
    event_category: 'E-Commerce_Lead',
    event_label: details.serviceName || 'General Spa Booking',
    value: details.priceINR || 0,
    currency: 'INR',
    service_id: details.serviceId,
    service_name: details.serviceName,
    duration_minutes: details.durationMinutes,
    preferred_date: details.preferredDate,
    preferred_time: details.preferredTime,
    booking_source: details.source || 'booking_engine',
  };

  sendGA4Event('booking_submitted', payload);
  sendGA4Event('generate_lead', payload);
  sendGTMEvent('booking_submitted', payload);
  sendGTMEvent('generate_lead', payload);

  trackMetaEvent('Lead', {
    content_name: details.serviceName || 'Spa Service',
    value: details.priceINR || 0,
    currency: 'INR',
  });
}

/**
 * Track Service Selection in Wizard or Service Cards
 */
export function trackServiceSelected(
  serviceId: string,
  serviceName: string,
  category?: string,
  priceINR?: number
): void {
  const payload = {
    event_category: 'Booking_Funnel',
    event_label: serviceName,
    service_id: serviceId,
    service_name: serviceName,
    service_category: category,
    price_inr: priceINR,
  };

  sendGA4Event('service_selected', payload);
  sendGTMEvent('service_selected', payload);
  trackMetaEvent('ViewContent', {
    content_ids: [serviceId],
    content_name: serviceName,
    content_category: category,
    value: priceINR || 0,
    currency: 'INR',
  });
}

/**
 * Track Location Selection or Location Page Views
 */
export function trackLocationSelected(locationName: string, locationSlug?: string): void {
  const payload = {
    event_category: 'Booking_Funnel',
    event_label: locationName,
    location_name: locationName,
    location_slug: locationSlug,
  };

  sendGA4Event('location_selected', payload);
  sendGTMEvent('location_selected', payload);
}

/**
 * Track VIP Membership Card or Option Click
 */
export function trackMembershipClick(planName?: string, price?: number): void {
  const payload = {
    event_category: 'Membership',
    event_label: planName || 'VIP Membership',
    plan_name: planName,
    price: price || 0,
    currency: 'INR',
  };

  sendGA4Event('membership_click', payload);
  sendGTMEvent('membership_click', payload);
  trackMetaCustomEvent('MembershipInterest', payload);
}

/**
 * Track Special Package or Offer Click
 */
export function trackPackageClick(packageName?: string, price?: number): void {
  const payload = {
    event_category: 'Promotional_Package',
    event_label: packageName || 'Special Offer',
    package_name: packageName,
    price: price || 0,
    currency: 'INR',
  };

  sendGA4Event('package_click', payload);
  sendGTMEvent('package_click', payload);
  trackMetaEvent('ViewContent', {
    content_name: packageName || 'Special Package',
    value: price || 0,
    currency: 'INR',
  });
}

/**
 * Track Blog Article View / Read Start
 */
export function trackBlogRead(postSlug: string, postTitle: string, category?: string): void {
  const payload = {
    event_category: 'Content_Engagement',
    event_label: postTitle,
    post_slug: postSlug,
    post_title: postTitle,
    category: category || 'Wellness',
  };

  sendGA4Event('blog_read', payload);
  sendGTMEvent('blog_read', payload);
}

/**
 * Track Blog Reading Scroll Depth Percentage
 */
export function trackBlogScrollDepth(postSlug: string, depthPercent: number): void {
  const payload = {
    event_category: 'Content_Engagement',
    event_label: `${depthPercent}%`,
    post_slug: postSlug,
    scroll_depth: depthPercent,
  };

  sendGA4Event('blog_scroll_depth', payload);
  sendGTMEvent('blog_scroll_depth', payload);
}

/**
 * Track Lightbox or Photo Gallery Interaction
 */
export function trackGalleryOpen(imageIndex?: number, imageAlt?: string): void {
  const payload = {
    event_category: 'Visual_Engagement',
    event_label: imageAlt || `Image #${imageIndex}`,
    image_index: imageIndex,
    image_alt: imageAlt,
  };

  sendGA4Event('gallery_open', payload);
  sendGTMEvent('gallery_open', payload);
}

/**
 * Track FAQ Accordion Expand
 */
export function trackFAQExpand(question: string, section = 'General'): void {
  const payload = {
    event_category: 'FAQ_Engagement',
    event_label: question,
    question,
    faq_section: section,
  };

  sendGA4Event('faq_expand', payload);
  sendGTMEvent('faq_expand', payload);
}

/**
 * Track Header/Footer Navigation Clicks
 */
export function trackNavigationClick(destination: string, navItemText: string): void {
  const payload = {
    event_category: 'Navigation',
    event_label: navItemText,
    destination_url: destination,
    link_text: navItemText,
  };

  sendGA4Event('navigation_click', payload);
  sendGTMEvent('navigation_click', payload);
}

/**
 * Track Search Input Usage
 */
export function trackSearchUsed(searchQuery: string, resultCount?: number): void {
  const payload = {
    event_category: 'Search',
    event_label: searchQuery,
    search_term: searchQuery,
    result_count: resultCount ?? 0,
  };

  sendGA4Event('search', payload);
  sendGTMEvent('search', payload);
}

/**
 * Track Newsletter / Special Offer Subscription
 */
export function trackNewsletterSubscribe(email?: string, location = 'footer'): void {
  const payload = {
    event_category: 'Lead_Conversion',
    event_label: location,
    subscription_source: location,
  };

  sendGA4Event('newsletter_subscribe', payload);
  sendGTMEvent('newsletter_subscribe', payload);
  trackMetaEvent('Lead', { content_category: 'Newsletter', content_name: location });
}

/**
 * Track Outbound Link Clicks (Google Maps, Social Media, Partner Links)
 */
export function trackOutboundLinkClick(url: string, linkText?: string): void {
  const payload = {
    event_category: 'Outbound_Navigation',
    event_label: url,
    destination_url: url,
    link_text: linkText || url,
  };

  sendGA4Event('outbound_click', payload);
  sendGTMEvent('outbound_click', payload);
}

/**
 * Track PDF or Brochure Downloads
 */
export function trackFileDownload(fileName: string, fileUrl?: string): void {
  const payload = {
    event_category: 'Resource_Download',
    event_label: fileName,
    file_name: fileName,
    file_url: fileUrl,
  };

  sendGA4Event('file_download', payload);
  sendGTMEvent('file_download', payload);
}
