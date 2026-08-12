/**
 * Global Site Configuration
 * The Cloud Spa & Wellness Center
 */

import { BUSINESS_DETAILS } from '../constants/business';

export const SITE_CONFIG = {
  domain: 'thecloudspa.com',
  siteUrl: BUSINESS_DETAILS.url,
  siteName: BUSINESS_DETAILS.name,
  businessHours: '11:00 AM - 8:00 PM',
  whatsappNumber: '918303720883',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.390!2d80.9927!3d26.8526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzA5LjQiTiA4MMKwNTknMzMuNyJF!5e0!3m2!1sen!2sin!4v1700000000000',
  analytics: {
    googleAnalyticsId: 'G-CLOUDSPA123',
    googleTagManagerId: 'GTM-CLOUDSPA',
  },
  coreWebVitalsTargets: {
    LCP: 2200, // Largest Contentful Paint < 2.2s
    FID: 80, // First Input Delay < 80ms
    CLS: 0.05, // Cumulative Layout Shift < 0.05
    INP: 150, // Interaction to Next Paint < 150ms
  },
  revalidation: {
    homepage: 3600, // 1 hour ISR
    services: 86400, // 24 hours ISR
    locations: 86400, // 24 hours ISR
  },
};
