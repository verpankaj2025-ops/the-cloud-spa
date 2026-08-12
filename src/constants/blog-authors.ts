import { BlogAuthor } from '../types/blog';

const DEFAULT_EDITORIAL_AUTHOR: BlogAuthor = {
  id: 'cloud-spa-editorial',
  name: 'The Cloud Spa Editorial Team',
  role: 'Wellness Editorial Team',
  credentials: 'Experienced Wellness Professionals',
  bio: 'The Cloud Spa Editorial Team provides wellness guides, bodywork insights, and self-care recommendations prepared by experienced wellness professionals in Gomti Nagar, Lucknow.',
  avatar: '/images/spa-placeholder.svg',
  experienceYears: 0,
};

export const BLOG_AUTHORS: Record<string, BlogAuthor> = {
  'cloud-spa-editorial': DEFAULT_EDITORIAL_AUTHOR,
  'dr-ananya-sharma': DEFAULT_EDITORIAL_AUTHOR,
  'master-somchai': DEFAULT_EDITORIAL_AUTHOR,
  'priya-verma': DEFAULT_EDITORIAL_AUTHOR,
};
