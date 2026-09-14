import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BUSINESS_DETAILS } from '../../../constants/business';
import {
  BLOG_POSTS,
  getBlogPostBySlug,
} from '../../../constants/blog-posts';
import { buildPageMetadata } from '../../../lib/metadata-builder';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '../../../lib/schema-generator';
import { BlogDetailClientPage } from '../../../components/blog/BlogDetailClientPage';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const canonicalPath = `/blog/${post.slug}`;
  const canonicalUrl = `${BUSINESS_DETAILS.url}${canonicalPath}`;

  const featuredImageUrl = post.featuredImage.src.startsWith('http')
    ? post.featuredImage.src
    : `${BUSINESS_DETAILS.url}${post.featuredImage.src}`;

  const meta = buildPageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: canonicalPath,
    keywords: post.tags,
    imageUrl: featuredImageUrl,
    type: 'article',
    geoPlacename: 'Gomti Nagar, Lucknow',
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
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: canonicalUrl,
      type: 'article',
      siteName: BUSINESS_DETAILS.name,
      locale: 'en_IN',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      images: [
        {
          url: featuredImageUrl,
          width: 1200,
          height: 630,
          alt: post.featuredImage.alt,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: meta.twitter.title,
      description: meta.twitter.description,
      images: [featuredImageUrl],
    },

    other: {
      'geo.region': meta.geoTags.region,
      'geo.placename': meta.geoTags.placename,
      'geo.position': meta.geoTags.position,
      ICBM: meta.geoTags.ICBM,
    },
  };
}

export default async function BlogSlugPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `${BUSINESS_DETAILS.url}/blog/${post.slug}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/', position: 1 },
    { name: 'Blog', url: '/blog', position: 2 },
    {
      name: post.title,
      url: canonicalUrl,
      position: 3,
    },
  ]);

  const articleSchema = generateArticleSchema(post);
  const faqSchema = generateFAQSchema(post.faqs);

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
          __html: JSON.stringify(articleSchema),
        }}
      />

      {post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <BlogDetailClientPage post={post} />
    </>
  );
}
