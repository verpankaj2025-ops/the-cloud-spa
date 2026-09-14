/**
 * Metadata Builder Utility for Next.js App Router
 * Generates consistent SEO metadata, Open Graph, Geo tags & Twitter Cards.
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
  geoPlacename?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  imageUrl = `${BUSINESS_DETAILS.url}/images/spa-placeholder.svg`,
  type = 'website',
  geoPlacename = 'Gomti Nagar, Lucknow',
}: BuildMetadataParams): SEOPageMetadata {
  const canonicalUrl = new URL(
    path.startsWith('/') ? path : `/${path}`,
    BUSINESS_DETAILS.url
  ).toString();

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

  const mergedKeywords = Array.from(
    new Set([...keywords, ...defaultKeywords])
  );

  return {
    title: fullTitle,
    description,
    canonicalUrl,

    keywords: mergedKeywords,

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
          alt: `${BUSINESS_DETAILS.name} - ${geoPlacename}`,
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
      placename: geoPlacename,
      position: `${BUSINESS_DETAILS.geo.latitude};${BUSINESS_DETAILS.geo.longitude}`,
      ICBM: `${BUSINESS_DETAILS.geo.latitude}, ${BUSINESS_DETAILS.geo.longitude}`,
    },
  };
}
