/**
 * Core Type Definitions for The Cloud Spa & Wellness Center
 * Enterprise Next.js 16 App Router Architecture
 */

export interface BusinessAddress {
  streetAddress: string;
  subLocality: string;
  locality: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  landmark: string;
  fullAddress: string;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface BusinessHours {
  dayOfWeek: string[];
  opens: string; // e.g. "11:00"
  closes: string; // e.g. "20:00"
  displayHours: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  googleBusiness?: string;
  whatsapp: string;
  youtube?: string;
}

export interface LocalBusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  whatsappPhone: string;
  formattedPhone: string;
  address: BusinessAddress;
  geo: GeoCoordinates;
  openingHours: BusinessHours[];
  priceRange: string;
  paymentAccepted: string[];
  currenciesAccepted: string;
  areaServed: string[];
  social: SocialLinks;
  rating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
}

export interface SpaTreatment {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  aiOverview: {
    summary: string;
    keyPoints: string[];
    idealDuration: string;
    expectedOutcome: string;
  };
  category: 'massage' | 'couple' | 'facial' | 'body-care' | 'therapy' | 'hydrotherapy';
  durationMinutes: number[];
  priceINR: Record<number, number>; // e.g. { 60: 2499, 90: 3499 }
  benefits: string[];
  popularFor: string[];
  contraindications: string[];
  preparation: string[];
  aftercare: string[];
  targetKeywords: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  faqs: Array<{ question: string; answer: string }>;
}

export interface SEOPageMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: 'website' | 'article';
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
    images: string[];
  };
  geoTags: {
    region: string;
    placename: string;
    position: string;
    ICBM: string;
  };
}

export interface CustomerReview {
  id: string;
  author: string;
  locality: string;
  serviceName: string;
  rating: number;
  datePublished: string;
  comment: string;
  verifiedBooking: boolean;
}

export interface TargetLocalitySEO {
  slug: string;
  name: string;
  distanceFromSpa: string;
  landmarks: string[];
  metaTitle: string;
  metaDescription: string;
  primaryKeywords: string[];
  introText: string;
}

export interface SchemaBreadcrumbItem {
  name: string;
  url: string;
  position: number;
}
