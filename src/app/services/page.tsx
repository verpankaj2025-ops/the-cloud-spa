import { Metadata } from 'next';
import { SPA_TREATMENTS } from '../../constants/services';
import { TARGET_LOCALITIES, BUSINESS_DETAILS } from '../../constants/business';
import { buildPageMetadata } from '../../lib/metadata-builder';
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
} from '../../lib/schema-generator';
import { ServicesDirectoryClient } from '../../components/services/ServicesDirectoryClient';

export async function generateMetadata(): Promise<Metadata> {
  const meta = buildPageMetadata({
    title: 'Luxury Spa Treatments & Therapies Catalog in Gomti Nagar, Lucknow',
    description:
      'Explore all luxury spa treatments at The Cloud Spa Lucknow. Thai, Balinese, Deep Tissue, Swedish Massages, Couple Spa Packages, Jacuzzi & Steam Baths in Gomti Nagar. Call 8303720883.',
    path: '/services',
    keywords: [
      'Spa Treatments Lucknow',
      'Spa Services Gomti Nagar',
      'Thai Massage Lucknow',
      'Deep Tissue Massage Lucknow',
      'Balinese Massage Lucknow',
      'Couple Spa Lucknow',
      'Jacuzzi Spa Lucknow',
      'Steam Bath Lucknow',
    ],
  });

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: meta.canonicalUrl,
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: meta.openGraph.url,
      type: meta.openGraph.type,
      images: meta.openGraph.images,
    },
    twitter: {
      card: meta.twitter.card,
      title: meta.twitter.title,
      description: meta.twitter.description,
      images: meta.twitter.images,
    },
    other: {
      'geo.region': meta.geoTags.region,
      'geo.placename': meta.geoTags.placename,
      'geo.position': meta.geoTags.position,
      ICBM: meta.geoTags.ICBM,
    },
  };
}

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/', position: 1 },
    { name: 'Services', url: '/services', position: 2 },
  ]);

  const localBusinessSchema = generateLocalBusinessSchema();

  const serviceCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Spa & Wellness Treatments Catalog',
    description: 'Comprehensive directory of luxury spa treatments at The Cloud Spa Lucknow',
    itemListElement: SPA_TREATMENTS.map((treatment, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Service',
        name: treatment.name,
        url: `${BUSINESS_DETAILS.url}/services/${treatment.slug}`,
        description: treatment.shortDescription,
        provider: {
          '@type': 'DaySpa',
          name: BUSINESS_DETAILS.name,
          address: BUSINESS_DETAILS.address.fullAddress,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />

      <ServicesDirectoryClient
        treatments={SPA_TREATMENTS}
        localities={TARGET_LOCALITIES}
      />
    </>
  );
}
