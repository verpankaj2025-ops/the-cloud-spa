import { Metadata } from 'next';
import { BUSINESS_DETAILS } from '../../constants/business';
import { LUCKNOW_LOCATIONS } from '../../constants/locations';
import { buildPageMetadata } from '../../lib/metadata-builder';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
} from '../../lib/schema-generator';
import { LocationsHubClientPage } from '../../components/locations/LocationsHubClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const meta = buildPageMetadata({
    title: 'Luxury Spa Locations in Lucknow | Gomti Nagar & Surrounding Zones | The Cloud Spa',
    description:
      'Explore luxury spa services across 11 key localities in Lucknow. Headquartered in Vivek Khand 4, Gomti Nagar. Authentic Thai, Deep Tissue, Balinese & Couple Spa near Vibhuti Khand, Hazratganj, Indira Nagar, Sushant Golf City. Call 9455671995.',
    path: '/locations',
    keywords: [
      'Spa Locations Lucknow',
      'Spa in Gomti Nagar',
      'Spa near Vibhuti Khand',
      'Spa near Hazratganj Lucknow',
      'Spa near Indira Nagar Lucknow',
      'Spa near Sushant Golf City',
      'Massage Center Lucknow Directory',
      'Best Spa in Lucknow Locations',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    type: 'website',
  });

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${BUSINESS_DETAILS.url}/locations`,
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: `${BUSINESS_DETAILS.url}/locations`,
      type: 'website',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
          width: 1200,
          height: 630,
          alt: 'The Cloud Spa Locations Directory - Gomti Nagar Lucknow',
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
      'geo.placename': meta.geoTags.placename,
      'geo.position': meta.geoTags.position,
      ICBM: meta.geoTags.ICBM,
    },
  };
}

export default function LocationsHubPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/', position: 1 },
    { name: 'Locations', url: '/locations', position: 2 },
  ]);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${BUSINESS_DETAILS.url}/locations/#itemlist`,
    name: 'The Cloud Spa Locations Directory Lucknow',
    description: 'Luxury spa service coverage areas across Lucknow',
    numberOfItems: LUCKNOW_LOCATIONS.length,
    itemListElement: LUCKNOW_LOCATIONS.map((loc, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: `Luxury Spa Service in ${loc.name}, Lucknow`,
      url: `${BUSINESS_DETAILS.url}/locations/${loc.slug}`,
    })),
  };

  const localBusinessSchema = generateLocalBusinessSchema();

  const faqs = [
    {
      question: 'Which areas in Lucknow does The Cloud Spa serve?',
      answer:
        'Our flagship spa is located in Vivek Khand 4, Gomti Nagar. We serve guests from Gomti Nagar, Vibhuti Khand, Vivek Khand, Vipul Khand, Patrakarpuram, Indira Nagar, Hazratganj, Aliganj, Sushant Golf City, Chinhat, Jankipuram, and all surrounding sectors.',
    },
    {
      question: 'How far is the spa from Patrakarpuram Crossing?',
      answer:
        'We are located only 300 meters from Patrakarpuram Crossing, right opposite Brijwasi Bakery in Vivek Khand 4.',
    },
    {
      question: 'Is parking available when coming from other localities?',
      answer:
        'Yes! We provide complimentary reserved parking and valet assistance for all our spa guests right outside our building.',
    },
    {
      question: 'How do I book an appointment if I am traveling from Hazratganj or Sushant Golf City?',
      answer:
        'You can easily book online using our instant booking form, or call us at 9455671995 or message us on WhatsApp. We recommend booking 1 to 2 hours prior to your visit.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <LocationsHubClientPage />
    </>
  );
}
