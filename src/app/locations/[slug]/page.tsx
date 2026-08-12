import { Metadata } from 'next';
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
  generateLocalBusinessSchema,
} from '../../../lib/schema-generator';
import { LocationDetailClientPage } from '../../../components/locations/LocationDetailClientPage';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return LUCKNOW_LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.slug);

  if (!location) {
    return {
      title: 'Location Not Found | The Cloud Spa Lucknow',
    };
  }

  const meta = buildPageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
    keywords: location.primaryKeywords,
    imageUrl:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    type: 'article',
  });

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${BUSINESS_DETAILS.url}/locations/${location.slug}`,
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: `${BUSINESS_DETAILS.url}/locations/${location.slug}`,
      type: 'article',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
          width: 1200,
          height: 630,
          alt: `Luxury Spa Services near ${location.name} Lucknow - The Cloud Spa`,
        },
      ],
    },
    twitter: {
      card: meta.twitter.card,
      title: meta.twitter.title,
      description: meta.twitter.description,
      images: [
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
      ],
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
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.slug);

  if (!location) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/', position: 1 },
    { name: 'Locations', url: '/locations', position: 2 },
    {
      name: location.name,
      url: `/locations/${location.slug}`,
      position: 3,
    },
  ]);

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${BUSINESS_DETAILS.url}/locations/${location.slug}/#place`,
    name: `Luxury Spa Services near ${location.name}, Lucknow`,
    description: location.metaDescription,
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
      '@type': 'AdministrativeArea',
      name: 'Lucknow, Uttar Pradesh',
    },
  };

  const faqSchema = generateFAQSchema(location.faqs);
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <LocationDetailClientPage location={location} />
    </>
  );
}
