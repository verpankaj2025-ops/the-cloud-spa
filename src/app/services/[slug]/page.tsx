import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';

import {
  SPA_TREATMENTS,
  getTreatmentBySlug,
} from '../../../constants/services';
import {
  TARGET_LOCALITIES,
  BUSINESS_DETAILS,
} from '../../../constants/business';
import { buildPageMetadata } from '../../../lib/metadata-builder';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
} from '../../../lib/schema-generator';
import { ServiceDetailClient } from '../../../components/services/ServiceDetailClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SPA_TREATMENTS.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  if (treatment.slug !== slug) {
    return {
      robots: {
        index: false,
        follow: true,
      },
      alternates: {
        canonical: `${BUSINESS_DETAILS.url}/services/${treatment.slug}`,
      },
    };
  }

  const canonicalPath = `/services/${treatment.slug}`;
  const absoluteImageUrl = treatment.image.src.startsWith('http')
    ? treatment.image.src
    : `${BUSINESS_DETAILS.url}${treatment.image.src}`;

  const startingPrice =
    treatment.priceINR[60] ?? Object.values(treatment.priceINR)[0];

  const serviceTitle = treatment.name.includes('Gomti Nagar, Lucknow')
  ? treatment.name
  : `${treatment.name} in Gomti Nagar, Lucknow`;

const meta = buildPageMetadata({
  title: `${serviceTitle} | Benefits & Pricing`,
  description:
    `${treatment.shortDescription} Book ${treatment.name} at The Cloud Spa in Gomti Nagar, Lucknow. ` +
    `Sessions start at ₹${startingPrice}.`,
  path: canonicalPath,
  keywords: treatment.targetKeywords,
  imageUrl: absoluteImageUrl,
  type: 'website',
  geoPlacename: 'Gomti Nagar, Lucknow',
});

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,

    alternates: {
      canonical: `${BUSINESS_DETAILS.url}${canonicalPath}`,
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
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: `${BUSINESS_DETAILS.url}${canonicalPath}`,
      type: 'website',
      siteName: BUSINESS_DETAILS.name,
      locale: 'en_IN',
      images: [
        {
          url: absoluteImageUrl,
          width: treatment.image.width,
          height: treatment.image.height,
          alt: treatment.image.alt,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: meta.twitter.title,
      description: meta.twitter.description,
      images: [absoluteImageUrl],
    },

    other: {
      'geo.region': meta.geoTags.region,
      'geo.placename': meta.geoTags.placename,
      'geo.position': meta.geoTags.position,
      ICBM: meta.geoTags.ICBM,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  if (treatment.slug !== slug) {
    permanentRedirect(`/services/${treatment.slug}`);
  }

  const relatedTreatments = SPA_TREATMENTS
    .filter((item) => item.id !== treatment.id)
    .slice(0, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/', position: 1 },
    { name: 'Services', url: '/services', position: 2 },
    {
      name: treatment.name,
      url: `/services/${treatment.slug}`,
      position: 3,
    },
  ]);

  const serviceSchema = generateServiceSchema(treatment);
  const faqSchema = generateFAQSchema(treatment.faqs);

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
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ServiceDetailClient
        treatment={treatment}
        relatedTreatments={relatedTreatments}
        localities={TARGET_LOCALITIES}
      />
    </>
  );
}
