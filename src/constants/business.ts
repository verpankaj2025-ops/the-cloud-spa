/**
 * Single Source of Truth Business Details
 * The Cloud Spa & Wellness Center, Lucknow
 */

import { LocalBusinessInfo, TargetLocalitySEO } from '../types/spa';

export const BUSINESS_DETAILS: LocalBusinessInfo = {
  name: 'The Cloud Spa & Wellness Center',
  legalName: 'The Cloud Spa & Wellness Center Private Limited',
  tagline: "Lucknow's Premier Luxury Wellness Sanctuary",
  description:
    'Experience world-class luxury massages and holistic therapies in Gomti Nagar, Lucknow. Certified therapists offering Thai, Balinese, Deep Tissue, Swedish, and Couple Spa experiences.',
  url: 'https://www.thecloudspa.in',
  email: 'info@thecloudspa.in',
  phone: '919455671995',
  whatsappPhone: '919455671995',
  formattedPhone: '+91 94556 71995',
  address: {
    streetAddress: '4/526 Near Brijwasi Bakery, Vivek Khand 4',
    subLocality: 'Vivek Khand 4, Gomti Nagar',
    locality: 'Gomti Nagar',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    postalCode: '226010',
    country: 'IN',
    landmark: 'Near Brijwasi Bakery',
    fullAddress:
      '4/526 Near Brijwasi Bakery, Vivek Khand 4, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
  },
  geo: {
    latitude: 26.8526,
    longitude: 80.9927,
  },
  openingHours: [
    {
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '11:00',
      closes: '20:00',
      displayHours: '11:00 AM – 8:00 PM (Open 7 Days a Week)',
    },
  ],
  priceRange: '₹₹₹ (₹2,000 - ₹6,000 per session)',
  paymentAccepted: [
    'Cash',
    'Credit Card',
    'Debit Card',
    'UPI',
    'Google Pay',
    'PhonePe',
    'Paytm',
    'Net Banking',
  ],
  currenciesAccepted: 'INR',
  areaServed: [
    'Gomti Nagar',
    'Vivek Khand',
    'Vipul Khand',
    'Vishwas Khand',
    'Vibhuti Khand',
    'Gomti Nagar Extension',
    'Hazratganj',
    'Indira Nagar',
    'Mahanagar',
    'Aliganj',
    'Sushant Golf City',
    'Charbagh',
    'Lucknow',
  ],
  social: {
    instagram: 'https://www.instagram.com/thecloudspalucknow',
    facebook: 'https://www.facebook.com/thecloudspalucknow',
    googleBusiness: 'https://maps.google.com/?q=The+Cloud+Spa+Lucknow',
    whatsapp: 'https://wa.me/919455671995',
  },
};


export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${BUSINESS_DETAILS.whatsappPhone}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

import { LUCKNOW_LOCATIONS } from './locations';

export const TARGET_LOCALITIES: TargetLocalitySEO[] = LUCKNOW_LOCATIONS.map((loc) => ({
  slug: loc.slug,
  name: loc.name,
  distanceFromSpa: loc.distanceFromSpa,
  landmarks: loc.landmarks,
  metaTitle: loc.metaTitle,
  metaDescription: loc.metaDescription,
  primaryKeywords: loc.primaryKeywords,
  introText: loc.introParagraphs[0],
}));
