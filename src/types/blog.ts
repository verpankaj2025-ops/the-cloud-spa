/**
 * Blog Engine Type Definitions
 * Compliance: Enterprise SEO, Schema.org Article / BlogPosting, EEAT
 */

export type BlogCategory =
  | 'Thai Massage'
  | 'Deep Tissue Massage'
  | 'Balinese Massage'
  | 'Swedish Massage'
  | 'Aromatherapy'
  | 'Hot Stone Massage'
  | 'Couple Spa'
  | 'Body Scrub'
  | 'Steam Bath'
  | 'Wellness'
  | 'Stress Relief'
  | 'Corporate Wellness'
  | 'Lifestyle'
  | 'Fitness Recovery'
  | 'Sports Recovery';

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  avatar: string;
  experienceYears: number;
}

export interface BlogTocItem {
  id: string;
  title: string;
  level: number; // 2 for h2, 3 for h3
}

export interface BlogArticleSection {
  id: string;
  title: string;
  content: string; // rich text/paragraphs
  callout?: string;
  keyTakeaway?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  author: BlogAuthor;
  publishedDate: string; // YYYY-MM-DD
  updatedDate: string; // YYYY-MM-DD
  readingTimeMinutes: number;
  featuredImage: {
    src: string;
    alt: string;
    caption?: string;
  };
  tableOfContents: BlogTocItem[];
  sections: BlogArticleSection[];
  aiOverviewSummary: string;
  voiceSearchAnswers?: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedServicesSlugs: string[];
  relatedLocationsSlugs: string[];
  relatedPostsSlugs: string[];
}
