import { Metadata } from 'next';
import { BUSINESS_DETAILS } from '../../constants/business';
import { BLOG_POSTS } from '../../constants/blog-posts';
import { buildPageMetadata } from '../../lib/metadata-builder';
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
} from '../../lib/schema-generator';
import { BlogIndexClientPage } from '../../components/blog/BlogIndexClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const meta = buildPageMetadata({
    title: 'Wellness & Spa Blog | Thai Massage, Deep Tissue & Stress Relief Guides Lucknow',
    description:
      'Explore 50+ expert wellness guides on Traditional Thai massage, Deep Tissue muscle recovery, corporate stress relief, couple spa rituals, and health tips at The Cloud Spa Lucknow.',
    path: '/blog',
    keywords: [
      'Lucknow Spa Blog',
      'Thai Massage Benefits Lucknow',
      'Deep Tissue Massage Guide',
      'Spa in Gomti Nagar Articles',
      'Couple Spa Ideas Lucknow',
      'Wellness Tips Lucknow',
      'Desk Strain Bodywork Guide',
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
      canonical: `${BUSINESS_DETAILS.url}/blog`,
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: `${BUSINESS_DETAILS.url}/blog`,
      type: 'website',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
          width: 1200,
          height: 630,
          alt: 'The Cloud Spa Wellness Journal & Article Directory',
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
  };
}

export default function BlogIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/', position: 1 },
    { name: 'Blog', url: '/blog', position: 2 },
  ]);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${BUSINESS_DETAILS.url}/blog/#itemlist`,
    name: 'The Cloud Spa Wellness & Massage Science Articles',
    description: 'Expert guides on Thai massage, deep tissue therapy, and wellness',
    numberOfItems: BLOG_POSTS.length,
    itemListElement: BLOG_POSTS.map((post, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: post.title,
      url: `${BUSINESS_DETAILS.url}/blog/${post.slug}`,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <BlogIndexClientPage />
    </>
  );
}
