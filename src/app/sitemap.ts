import { MetadataRoute } from 'next';
import { BUSINESS_DETAILS } from '../constants/business';
import { SPA_TREATMENTS } from '../constants/services';
import { LUCKNOW_LOCATIONS } from '../constants/locations';
import { BLOG_POSTS } from '../constants/blog-posts';

const STATIC_LAST_MODIFIED = new Date('2026-08-21T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_DETAILS.url;

  const serviceRoutes: MetadataRoute.Sitemap = SPA_TREATMENTS.map((treatment) => ({
    url: `${baseUrl}/services/${treatment.slug}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const locationRoutes: MetadataRoute.Sitemap = LUCKNOW_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.publishedDate),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book-now`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/thai-massage-lucknow`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...serviceRoutes,
    ...locationRoutes,
    ...blogRoutes,
  ];
}
