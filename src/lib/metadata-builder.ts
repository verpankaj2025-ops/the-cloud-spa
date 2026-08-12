/**
 * Metadata Builder Utility for Next.js 16 App Router
 * Generates SEO-compliant head metadata, Open Graph, Geo tags & Twitter Cards
 */

import { BUSINESS_DETAILS } from '../constants/business';
import { SEOPageMetadata } from '../types/spa';

interface BuildMetadataParams {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  imageUrl?: string;
  type?: 'website' | 'article';
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  imageUrl = `${BUSINESS_DETAILS.url}/assets/images/og-cloud-spa.jpg`,
  type = 'website',
}: BuildMetadataParams): SEOPageMetadata {
  const canonicalUrl = `${BUSINESS_DETAILS.url}${path}`;
  const fullTitle = title.includes('The Cloud Spa')
    ? title
    : `${title} | The Cloud Spa & Wellness Center Lucknow`;

  const defaultKeywords = [
    'Spa in Gomti Nagar',
    'Best Spa in Gomti Nagar',
    'Spa in Lucknow',
    'Massage Center Gomti Nagar',
    'Luxury Spa Lucknow',
    'Thai Massage Lucknow',
    'Deep Tissue Massage Lucknow',
    'Couple Spa Lucknow',
  ];

  return {
    title: fullTitle,
    description,
    canonicalUrl,
    keywords: Array.from(new Set([...keywords, ...defaultKeywords])),
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${BUSINESS_DETAILS.name} - Luxury Spa Gomti Nagar Lucknow`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    geoTags: {
      region: 'IN-UP',
      placename: 'Gomti Nagar, Lucknow',
      position: `${BUSINESS_DETAILS.geo.latitude};${BUSINESS_DETAILS.geo.longitude}`,
      ICBM: `${BUSINESS_DETAILS.geo.latitude}, ${BUSINESS_DETAILS.geo.longitude}`,
    },
  };
}
