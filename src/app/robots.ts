import { MetadataRoute } from 'next';
import { BUSINESS_DETAILS } from '../constants/business';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${BUSINESS_DETAILS.url}/sitemap.xml`,
  };
}
