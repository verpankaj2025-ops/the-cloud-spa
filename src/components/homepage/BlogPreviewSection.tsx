/**
 * Blog Preview Section Component
 * Latest articles, wellness tips, internal linking for Local SEO
 */

import React from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { LuxuryBadge } from '../ui/LuxuryBadge';

export const BlogPreviewSection: React.FC = () => {
  const articles = [
    {
      id: 'blog-1',
      title: 'Top 5 Health Benefits of Traditional Thai Massage in Lucknow',
      excerpt:
        'Discover how ancient dry yoga stretching releases spinal tightness, enhances joint flexibility, and relieves posture strain for desk professionals.',
      date: 'August 04, 2026',
      readTime: '4 min read',
      category: 'Thai Massage',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'blog-2',
      title: 'Why Couple Spa Packages Are Lucknow’s Favorite Anniversary Gift',
      excerpt:
        'Explore what makes private VIP suites, hydrotherapy Jacuzzis, and synchronized aromatherapy massagers the ultimate romantic celebration.',
      date: 'July 29, 2026',
      readTime: '5 min read',
      category: 'Couple Spa',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'blog-3',
      title: 'Deep Tissue vs. Swedish Massage: Which Therapy Do You Need?',
      excerpt:
        'Learn the key differences between fast muscle knot relief with deep fascial pressure versus gentle gliding relaxation for stress reduction.',
      date: 'July 18, 2026',
      readTime: '6 min read',
      category: 'Therapy Guide',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF9F5] text-[#1A1C1A]" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <LuxuryBadge variant="gold" icon={<BookOpen className="w-3.5 h-3.5" />}>
            WELLNESS JOURNAL & INSIGHTS
          </LuxuryBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-[#1A1C1A]">
            Latest Articles & Spa Guides
          </h2>
          <p className="text-base text-[#4A4E4B] leading-relaxed">
            Expert wellness tips, therapy guides, and self-care routines from experienced wellness professionals at The Cloud Spa Gomti Nagar.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-[#F4F1EA] rounded-2xl overflow-hidden border border-black/5 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#1E2522] text-[#D4AF37] text-[10px] font-semibold uppercase tracking-wider shadow-md">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-[#767B78]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif-heading font-bold text-[#1A1C1A] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#4A4E4B] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#blog"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#2C3A33] hover:text-[#C5A059] transition-colors"
                >
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
