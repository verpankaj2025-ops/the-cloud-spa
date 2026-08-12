import { MetadataRoute } from 'next';
import { BUSINESS_DETAILS } from '../constants/business';
import { SPA_TREATMENTS } from '../constants/services';
import { LUCKNOW_LOCATIONS } from '../constants/locations';
import { BLOG_POSTS } from '../constants/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_DETAILS.url;

  const serviceRoutes: MetadataRoute.Sitemap = SPA_TREATMENTS.map((treatment) => ({
    url: `${baseUrl}/services/${treatment.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const locationRoutes: MetadataRoute.Sitemap = LUCKNOW_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
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
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/thai-massage-lucknow`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book-now`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...serviceRoutes,
    ...locationRoutes,
    ...blogRoutes,
  ];
}
