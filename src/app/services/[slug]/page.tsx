import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SPA_TREATMENTS, getTreatmentBySlug } from '../../../constants/services';
import { TARGET_LOCALITIES, BUSINESS_DETAILS } from '../../../constants/business';
import { buildPageMetadata } from '../../../lib/metadata-builder';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
} from '../../../lib/schema-generator';
import { ServiceDetailClient } from '../../../components/services/ServiceDetailClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const paramsList: Array<{ slug: string }> = [];

  SPA_TREATMENTS.forEach((treatment) => {
    paramsList.push({ slug: treatment.slug });
    if (treatment.aliases) {
      treatment.aliases.forEach((alias) => {
        paramsList.push({ slug: alias });
      });
    }
  });

  return paramsList;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return {
      title: 'Treatment Not Found | The Cloud Spa Lucknow',
      description: 'The requested spa treatment page could not be found.',
    };
  }

  const meta = buildPageMetadata({
    title: `${treatment.name} in Gomti Nagar, Lucknow | Benefits & Pricing`,
    description: `${treatment.shortDescription} Book ${treatment.name} at The Cloud Spa Gomti Nagar Lucknow. Starting ₹${
      treatment.priceINR[60] || Object.values(treatment.priceINR)[0]
    }. Call 9455671995.`,
    path: `/services/${treatment.slug}`,
    keywords: treatment.targetKeywords,
    imageUrl: treatment.image.src,
    type: 'article',
  });

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${BUSINESS_DETAILS.url}/services/${treatment.slug}`,
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: `${BUSINESS_DETAILS.url}/services/${treatment.slug}`,
      type: meta.openGraph.type,
      images: [
        {
          url: treatment.image.src,
          width: treatment.image.width,
          height: treatment.image.height,
          alt: treatment.image.alt,
        },
      ],
    },
    twitter: {
      card: meta.twitter.card,
      title: meta.twitter.title,
      description: meta.twitter.description,
      images: [treatment.image.src],
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

  // Related treatments (excluding current treatment)
  const relatedTreatments = SPA_TREATMENTS.filter(
    (t) => t.id !== treatment.id
  ).slice(0, 3);

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
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <ServiceDetailClient
        treatment={treatment}
        relatedTreatments={relatedTreatments}
        localities={TARGET_LOCALITIES}
      />
    </>
  );
}
