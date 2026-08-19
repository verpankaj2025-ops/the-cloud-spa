import { Metadata } from 'next';
import { BUSINESS_DETAILS } from '../../../constants/business';
import { buildPageMetadata } from '../../../lib/metadata-builder';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
} from '../../../lib/schema-generator';
import { ThaiMassagePageClient } from '../../../components/services/ThaiMassagePageClient';

export async function generateMetadata(): Promise<Metadata> {
  const meta = buildPageMetadata({
    title: 'Traditional Thai Massage in Lucknow | Thai Spa Gomti Nagar | The Cloud Spa',
    description:
      'Experience authentic Traditional Thai Massage in Gomti Nagar, Lucknow at The Cloud Spa. Relieve spinal back pain, improve joint flexibility & correct desk posture with oil-free Thai stretch therapy. Starting ₹2,499. Call 9455671995.',
    path: '/services/thai-massage-lucknow',
    keywords: [
      'Thai Massage Lucknow',
      'Thai Spa Gomti Nagar',
      'Traditional Thai Massage',
      'Thai Massage Benefits',
      'Thai Stretch Therapy',
      'Luxury Thai Spa',
      'Best Thai Massage Lucknow',
      'Body Stretch Massage Lucknow',
      'Nuad Thai Lucknow',
      'Thai Acupressure Lucknow',
      'Thai Massage Price Lucknow',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    type: 'article',
  });

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${BUSINESS_DETAILS.url}/services/thai-massage-lucknow`,
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: `${BUSINESS_DETAILS.url}/services/thai-massage-lucknow`,
      type: meta.openGraph.type,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
          width: 1200,
          height: 630,
          alt: 'Traditional Thai Massage Therapy Session at The Cloud Spa Gomti Nagar Lucknow',
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

export default function ThaiMassageLucknowPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/', position: 1 },
    { name: 'Services', url: '/services', position: 2 },
    {
      name: 'Thai Massage Lucknow',
      url: '/services/thai-massage-lucknow',
      position: 3,
    },
  ]);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BUSINESS_DETAILS.url}/services/thai-massage-lucknow/#service`,
    name: 'Traditional Thai Massage in Lucknow',
    alternateName: ['Nuad Thai', 'Thai Stretch Therapy', 'Thai Spa Gomti Nagar'],
    serviceType: 'Thai Massage & Assisted Stretch Therapy',
    description:
      'Authentic Traditional Thai Massage in Gomti Nagar, Lucknow. Dry oil-free therapy incorporating SEN line acupressure and passive yoga stretches for spinal alignment and deep stress relief.',
    provider: {
      '@id': `${BUSINESS_DETAILS.url}/#localbusiness`,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Gomti Nagar, Lucknow, Uttar Pradesh',
    },
    offers: [
      {
        '@type': 'Offer',
        name: '60 Minutes Express Thai Massage',
        price: '2499',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: `${BUSINESS_DETAILS.url}/services/thai-massage-lucknow`,
      },
      {
        '@type': 'Offer',
        name: '90 Minutes Full Body Thai Massage',
        price: '3499',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: `${BUSINESS_DETAILS.url}/services/thai-massage-lucknow`,
      },
      {
        '@type': 'Offer',
        name: '120 Minutes Royal Thai Master Session',
        price: '4499',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: `${BUSINESS_DETAILS.url}/services/thai-massage-lucknow`,
      },
    ],
  };

  const imageObjectSchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    license: 'https://unsplash.com/license',
    acquireLicensePage: 'https://unsplash.com',
    caption: 'Authentic Traditional Thai Massage Session at The Cloud Spa Lucknow',
    creator: {
      '@type': 'Organization',
      name: BUSINESS_DETAILS.name,
    },
  };

  const faqs = [
    {
      question: 'What is the price of Traditional Thai Massage in Lucknow at The Cloud Spa?',
      answer:
        'Our Traditional Thai Massage pricing in Gomti Nagar, Lucknow is transparent and value-focused: 60 Minutes costs ₹2,499, 90 Minutes costs ₹3,499, and 120 Minutes costs ₹4,499. All prices include complimentary sanitized cotton attire, a warm herbal foot bath ritual, and organic green tea post-treatment with zero hidden charges.',
    },
    {
      question: 'Do I need to wear my own clothing or do you provide outfits?',
      answer:
        'We provide fresh, freshly laundered, loose-fitting cotton traditional Thai garments specially designed to allow unrestricted movement during stretching and acupressure. You do not need to bring any special attire.',
    },
    {
      question: 'Is oil used during Traditional Thai Massage?',
      answer:
        'Authentic Traditional Thai Massage (Nuad Thai) is a dry, oil-free bodywork treatment. If requested for intense muscle knots, our therapists can apply organic Thai herbal balms (Phai Zingiber and Camphor) to targeted joint areas without leaving any oily residue.',
    },
    {
      question: 'Is Thai massage painful or uncomfortable?',
      answer:
        'Thai massage involves deep palm acupressure and gentle yoga stretches. While you will feel satisfying pressure on tight muscle channels, it should never feel painful. Our international-standard therapists maintain constant communication to customize pressure to your exact comfort zone.',
    },
    {
      question: 'How is Thai massage different from Swedish or Deep Tissue massage?',
      answer:
        'Unlike Swedish or Deep Tissue massage which use gliding strokes on bare skin with oil, Traditional Thai massage is performed dry over cotton clothes on a comfortable therapy mat or wide bed. It focuses on SEN energy lines, joint mobilization, and passive yoga stretching to align posture.',
    },
    {
      question: 'Can Thai massage help relieve chronic lower back pain and poor posture?',
      answer:
        'Yes! Thai massage is widely recognized for correcting posture strain caused by prolonged sitting. By stretching tight hamstrings, hip flexors, and glutes while releasing spinal acupressure points, it decompresses the lower back and improves spinal alignment.',
    },
    {
      question: 'Are therapists at The Cloud Spa experienced in Thai Massage?',
      answer:
        'Yes. All therapists at The Cloud Spa are experienced wellness professionals trained in traditional Thai bodywork techniques, human anatomy, and client safety. Both female and male therapists are available upon request.',
    },
    {
      question: 'Can couples book Thai Massage together in a private suite?',
      answer:
        'Yes! We offer a soundproof VIP Royal Couple Suite equipped with dual therapy beds, allowing couples, friends, or family members to experience synchronized Traditional Thai massage together in complete privacy.',
    },
    {
      question: 'What precautions should I take before coming for a Thai Massage?',
      answer:
        'Avoid heavy meals at least 1 to 2 hours prior to your appointment as stretching involves abdominal rotation. Hydrate well and arrive 15 minutes early at our Gomti Nagar center to enjoy your welcome herbal tea and consultation.',
    },
    {
      question: 'Where is The Cloud Spa located in Gomti Nagar, Lucknow?',
      answer:
        'The Cloud Spa is located at 4/526 Near Brijwasi Bakery, Vivek Khand 4, Gomti Nagar, Lucknow, UP 226010. We are easily accessible from Patrakarpuram Crossing, Riverside Mall, Hazratganj, and Sushant Golf City with ample valet parking.',
    },
    {
      question: 'What are the spa opening hours in Gomti Nagar?',
      answer:
        'We are open 7 days a week, Monday through Sunday, from 11:00 AM to 8:00 PM. Prior booking via phone or WhatsApp is recommended to secure your preferred therapist and slot.',
    },
    {
      question: 'What payment modes are accepted at The Cloud Spa?',
      answer:
        'We accept all major payment modes including UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and Cash.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <ThaiMassagePageClient />
    </>
  );
}
