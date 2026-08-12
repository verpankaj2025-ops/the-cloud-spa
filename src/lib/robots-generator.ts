/**
 * Dynamic Robots.txt Configuration Generator
 */

import { BUSINESS_DETAILS } from '../constants/business';

export function generateRobotsTxt(): string {
  return `# Robots.txt for ${BUSINESS_DETAILS.name}
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /checkout/thank-you?*

# Explicit Crawl-Delay for Bingbot to optimize server bandwidth
User-agent: Bingbot
Crawl-delay: 1

# Sitemap Index URL
Sitemap: ${BUSINESS_DETAILS.url}/sitemap.xml
Host: ${BUSINESS_DETAILS.url}
`;
}
