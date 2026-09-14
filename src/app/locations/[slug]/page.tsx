import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BUSINESS_DETAILS } from '../../../constants/business';
import {
  LUCKNOW_LOCATIONS,
  getLocationBySlug,
} from '../../../constants/locations';
import { buildPageMetadata } from '../../../lib/metadata-builder';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '../../../lib/schema-generator';
import { LocationDetailClientPage } from '../../../components/locations/LocationDetailClientPage';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const LOCATION_IMAGE =
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80';

export async function generateStaticParams() {
  return LUCKNOW_LOCATIONS.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const canonicalUrl = `${BUSINESS_DETAILS.url}/locations/${location.slug}`;

  const meta = buildPageMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  path: `/locations/${location.slug}`,
  keywords: location.primaryKeywords,
  imageUrl: LOCATION_IMAGE,
  type: 'website',
  geoPlacename: `${location.name}, Lucknow`,
});

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },

    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: canonicalUrl,
      siteName: BUSINESS_DETAILS.name,
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      images: [
        {
          url: LOCATION_IMAGE,
          width: 1200,
          height: 630,
          alt: `The Cloud Spa in ${location.name}, Lucknow`,
        },
      ],
    },

    twitter: {
      card: meta.twitter.card,
      title: meta.twitter.title,
      description: meta.twitter.description,
      images: [LOCATION_IMAGE],
    },

    other: {
      'geo.region': meta.geoTags.region,
      'geo.placename': `${location.name}, Lucknow`,
      'geo.position': meta.geoTags.position,
      ICBM: meta.geoTags.ICBM,
    },
  };
}

export default async function LocationSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const canonicalUrl = `${BUSINESS_DETAILS.url}/locations/${location.slug}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: 'Home',
      url: '/',
      position: 1,
    },
    {
      name: 'Locations',
      url: '/locations',
      position: 2,
    },
    {
      name: location.name,
      url: canonicalUrl,
      position: 3,
    },
  ]);

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${canonicalUrl}/#place`,
    name: `Spa in ${location.name}, Lucknow`,
    description: location.metaDescription,
    url: canonicalUrl,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_DETAILS.geo.latitude,
      longitude: BUSINESS_DETAILS.geo.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    containedInPlace: {
      '@type': 'City',
      name: 'Lucknow',
    },
  };

  const faqSchema = generateFAQSchema(location.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(placeSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <LocationDetailClientPage location={location} />
    </>
  );
}
