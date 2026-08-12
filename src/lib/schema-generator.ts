/**
 * Schema.org JSON-LD Structured Data Generators for Google Rich Results
 * Compliance: Schema.org / Google Search Central Guidelines
 */

import { BUSINESS_DETAILS, TARGET_LOCALITIES } from '../constants/business';
import { SPA_TREATMENTS } from '../constants/services';
import { SEO_KEYWORD_CLUSTERS } from '../constants/seo-keywords';
import { SchemaBreadcrumbItem, SpaTreatment } from '../types/spa';

/**
 * LocalBusiness & HealthAndBeautyBusiness JSON-LD Schema
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['DaySpa', 'HealthAndBeautyBusiness', 'LocalBusiness'],
    '@id': `${BUSINESS_DETAILS.url}/#localbusiness`,
    name: BUSINESS_DETAILS.name,
    legalName: BUSINESS_DETAILS.legalName,
    alternateName: 'The Cloud Spa Lucknow',
    description: BUSINESS_DETAILS.description,
    url: BUSINESS_DETAILS.url,
    telephone: BUSINESS_DETAILS.phone,
    email: BUSINESS_DETAILS.email,
    priceRange: BUSINESS_DETAILS.priceRange,
    currenciesAccepted: BUSINESS_DETAILS.currenciesAccepted,
    paymentAccepted: BUSINESS_DETAILS.paymentAccepted.join(', '),
    image: [
      `${BUSINESS_DETAILS.url}/assets/images/cloud-spa-facade.jpg`,
      `${BUSINESS_DETAILS.url}/assets/images/cloud-spa-interior.jpg`,
      `${BUSINESS_DETAILS.url}/assets/images/cloud-spa-couple-suite.jpg`,
    ],
    logo: `${BUSINESS_DETAILS.url}/assets/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_DETAILS.address.streetAddress,
      addressLocality: BUSINESS_DETAILS.address.locality,
      addressRegion: BUSINESS_DETAILS.address.state,
      postalCode: BUSINESS_DETAILS.address.postalCode,
      addressCountry: BUSINESS_DETAILS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_DETAILS.geo.latitude,
      longitude: BUSINESS_DETAILS.geo.longitude,
    },
    openingHoursSpecification: BUSINESS_DETAILS.openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    sameAs: Object.values(BUSINESS_DETAILS.social).filter(Boolean),
    areaServed: BUSINESS_DETAILS.areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: `${area}, Lucknow, Uttar Pradesh`,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Luxury Spa Therapies & Treatments',
      itemListElement: SPA_TREATMENTS.map((treatment) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: treatment.name,
          description: treatment.shortDescription,
        },
        priceCurrency: 'INR',
        price: treatment.priceINR[60] || treatment.priceINR[90],
      })),
    },
  };
}

/**
 * Organization Schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS_DETAILS.url}/#organization`,
    name: BUSINESS_DETAILS.name,
    legalName: BUSINESS_DETAILS.legalName,
    url: BUSINESS_DETAILS.url,
    logo: `${BUSINESS_DETAILS.url}/assets/images/logo.png`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_DETAILS.phone,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    sameAs: Object.values(BUSINESS_DETAILS.social).filter(Boolean),
  };
}

/**
 * WebSite & Sitelinks Searchbox Schema
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS_DETAILS.url}/#website`,
    url: BUSINESS_DETAILS.url,
    name: BUSINESS_DETAILS.name,
    description: BUSINESS_DETAILS.description,
    publisher: {
      '@id': `${BUSINESS_DETAILS.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BUSINESS_DETAILS.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Service Schema for Individual Treatments
 */
export function generateServiceSchema(treatment: SpaTreatment) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BUSINESS_DETAILS.url}/services/${treatment.slug}/#service`,
    name: treatment.name,
    serviceType: treatment.category,
    description: treatment.fullDescription,
    provider: {
      '@id': `${BUSINESS_DETAILS.url}/#localbusiness`,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Gomti Nagar, Lucknow',
    },
    offers: Object.entries(treatment.priceINR).map(([duration, price]) => ({
      '@type': 'Offer',
      name: `${duration} Minutes Session`,
      price: price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${BUSINESS_DETAILS.url}/services/${treatment.slug}`,
    })),
  };
}

/**
 * FAQPage Schema
 */
export function generateFAQSchema(
  customFaqs?: Array<{ question: string; answer: string }>
) {
  const faqs = customFaqs || SEO_KEYWORD_CLUSTERS.faqSchemaQuestions;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items: SchemaBreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.url.startsWith('http')
        ? item.url
        : `${BUSINESS_DETAILS.url}${item.url}`,
    })),
  };
}

/**
 * Person / Author Schema for EEAT Compliance
 */
export function generateAuthorSchema(author: {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  avatar: string;
}) {
  return {
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    description: `${author.credentials} - ${author.bio}`,
    image: author.avatar.startsWith('http')
      ? author.avatar
      : `${BUSINESS_DETAILS.url}${author.avatar}`,
    worksFor: {
      '@type': 'Organization',
      name: BUSINESS_DETAILS.name,
      url: BUSINESS_DETAILS.url,
    },
  };
}

/**
 * Article / BlogPosting Schema for Google Rich Results
 */
export function generateArticleSchema(post: {
  slug: string;
  title: string;
  metaDescription: string;
  publishedDate: string;
  updatedDate: string;
  category: string;
  featuredImage: { src: string; alt: string };
  author: {
    name: string;
    role: string;
    credentials: string;
    bio: string;
    avatar: string;
  };
}) {
  const articleUrl = `${BUSINESS_DETAILS.url}/blog/${post.slug}`;
  const imageUrl = post.featuredImage.src.startsWith('http')
    ? post.featuredImage.src
    : `${BUSINESS_DETAILS.url}${post.featuredImage.src}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}/#article`,
    isPartOf: {
      '@type': 'WebPage',
      '@id': `${articleUrl}/#webpage`,
      url: articleUrl,
      name: post.title,
    },
    headline: post.title,
    description: post.metaDescription,
    url: articleUrl,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    articleSection: post.category,
    inLanguage: 'en-US',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
      caption: post.featuredImage.alt,
    },
    author: generateAuthorSchema(post.author),
    publisher: {
      '@type': 'Organization',
      '@id': `${BUSINESS_DETAILS.url}/#organization`,
      name: BUSINESS_DETAILS.name,
      logo: {
        '@type': 'ImageObject',
        url: `${BUSINESS_DETAILS.url}/assets/images/logo.png`,
      },
    },
  };
}

