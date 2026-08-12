import { Metadata } from 'next';
import { BUSINESS_DETAILS } from '../../constants/business';
import { buildPageMetadata } from '../../lib/metadata-builder';
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
} from '../../lib/schema-generator';
import { BookNowClientPage } from '../../components/booking/BookNowClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const meta = buildPageMetadata({
    title: 'Book Appointment Online | The Cloud Spa Gomti Nagar Lucknow',
    description:
      'Reserve your Thai massage, deep tissue therapy, or couple spa session online at The Cloud Spa Gomti Nagar, Lucknow. Instant WhatsApp confirmation with zero advance fee.',
    path: '/book-now',
    keywords: [
      'Book Spa Appointment Lucknow',
      'Spa Booking Gomti Nagar',
      'Reserve Thai Massage Lucknow',
      'Couple Spa Booking Lucknow',
      'Deep Tissue Massage Reservation',
      'The Cloud Spa Booking',
    ],
    imageUrl: `${BUSINESS_DETAILS.url}/images/spa-placeholder.svg`,
    type: 'website',
  });

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${BUSINESS_DETAILS.url}/book-now`,
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: `${BUSINESS_DETAILS.url}/book-now`,
      type: 'website',
      images: [
        {
          url: `${BUSINESS_DETAILS.url}/images/spa-placeholder.svg`,
          width: 1200,
          height: 630,
          alt: 'The Cloud Spa Online Booking & Reservation',
        },
      ],
    },
    twitter: {
      card: meta.twitter.card,
      title: meta.twitter.title,
      description: meta.twitter.description,
      images: [
        `${BUSINESS_DETAILS.url}/images/spa-placeholder.svg`,
      ],
    },
  };
}

export default function BookNowPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/', position: 1 },
    { name: 'Book Appointment', url: '/book-now', position: 2 },
  ]);

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${BUSINESS_DETAILS.url}/book-now/#webpage`,
    url: `${BUSINESS_DETAILS.url}/book-now`,
    name: 'Book Spa & Massage Therapy Appointment Online | The Cloud Spa',
    description:
      'Online appointment scheduler for Thai massage, deep tissue therapy, and couple spa packages in Gomti Nagar, Lucknow.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${BUSINESS_DETAILS.url}/#website`,
      name: BUSINESS_DETAILS.name,
      url: BUSINESS_DETAILS.url,
    },
    provider: {
      '@type': 'HealthAndBeautyBusiness',
      name: BUSINESS_DETAILS.name,
      telephone: BUSINESS_DETAILS.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_DETAILS.address.streetAddress,
        addressLocality: BUSINESS_DETAILS.address.locality,
        addressRegion: BUSINESS_DETAILS.address.state,
        postalCode: BUSINESS_DETAILS.address.postalCode,
        addressCountry: BUSINESS_DETAILS.address.country,
      },
    },
  };

  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <BookNowClientPage />
    </>
  );
}
