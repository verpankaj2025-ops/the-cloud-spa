'use client';

/**
 * Enterprise Blog Index Client Component
 * Features Search, Category Filters (15 Categories), Tags, Featured Article, Grid, Pagination, Newsletter
 */

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  BookOpen,
  Clock,
  User,
  Calendar,
  ChevronRight,
  Filter,
  Sparkles,
  ArrowRight,
  Tag,
  Mail,
  CheckCircle2,
  MapPin,
  Compass,
  MessageCircle,
  Phone,
  RotateCcw,
} from 'lucide-react';
import { HeaderNavigation } from '../ui/HeaderNavigation';
import { FooterSection } from '../ui/FooterSection';
import { BookingFormModal } from '../ui/BookingFormModal';
import { LuxuryButton } from '../ui/LuxuryButton';
import { LuxuryBadge } from '../ui/LuxuryBadge';
import { BlogPost, BlogCategory } from '../../types/blog';
import { BLOG_POSTS } from '../../constants/blog-posts';
import { BLOG_CATEGORIES } from '../../constants/blog-categories';
import { BUSINESS_DETAILS } from '../../constants/business';
import { SPA_TREATMENTS } from '../../constants/services';
import { LUCKNOW_LOCATIONS } from '../../constants/locations';

const POSTS_PER_PAGE = 9;

export function BlogIndexClientPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  // Collect all unique tags across blog posts
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    BLOG_POSTS.forEach((post) => {
      post.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  // Filter posts based on search, category, and tag
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      // Category Filter
      if (selectedCategory !== 'all') {
        const catMatch =
          post.category.toLowerCase() === selectedCategory.toLowerCase() ||
          post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory.toLowerCase();
        if (!catMatch) return false;
      }

      // Tag Filter
      if (selectedTag !== 'all') {
        const tagMatch = post.tags.some(
          (t) => t.toLowerCase() === selectedTag.toLowerCase()
        );
        if (!tagMatch) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = post.title.toLowerCase().includes(q);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(q);
        const matchesCategory = post.category.toLowerCase().includes(q);
        const matchesTags = post.tags.some((t) => t.toLowerCase().includes(q));
        const matchesAuthor = post.author.name.toLowerCase().includes(q);
        if (!matchesTitle && !matchesExcerpt && !matchesCategory && !matchesTags && !matchesAuthor) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  // Featured post is the first post when no filters are active
  const featuredPost = useMemo(() => {
    if (selectedCategory === 'all' && selectedTag === 'all' && !searchQuery) {
      return BLOG_POSTS[0];
    }
    return null;
  }, [selectedCategory, selectedTag, searchQuery]);

  // Posts for grid (excluding featured if featured exists)
  const postsForGrid = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.slice(1);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  // Pagination calculation
  const totalPages = Math.ceil(postsForGrid.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return postsForGrid.slice(start, start + POSTS_PER_PAGE);
  }, [postsForGrid, currentPage]);

  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setCurrentPage(1);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTag('all');
    setCurrentPage(1);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#2C3A33] selection:bg-[#C5A059] selection:text-white flex flex-col justify-between">
      <HeaderNavigation onOpenBookingModal={handleOpenBooking} />

      <main>
        {/* HERO HEADER SECTION */}
        <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1E2522] via-[#242E29] to-[#1E2522] text-[#FAF9F5] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 space-y-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-[#C5A059]/80 font-medium">
              <Link href="/" className="hover:text-[#C5A059] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]/40" />
              <span className="text-[#FAF9F5] font-semibold">Wellness & Spa Blog</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto space-y-4">
              <LuxuryBadge variant="gold" className="inline-flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                The Cloud Spa Journal
              </LuxuryBadge>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FAF9F5] leading-tight">
                Wellness, Massage Science & Holistic Living Journal
              </h1>

              <p className="text-sm sm:text-base text-[#FAF9F5]/85 leading-relaxed font-light">
                Explore 50+ expert guides on Thai massage, deep tissue pain relief, corporate stress recovery, bridal wellness, and luxury spa therapy in Lucknow.
              </p>
            </div>

            {/* SEARCH BAR */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-[#C5A059]/30 shadow-xl">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-[#C5A059] absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search 50+ topics (e.g. Thai massage, office neck pain, couple spa)..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-transparent pl-12 pr-10 py-3 text-sm text-[#FAF9F5] placeholder-[#FAF9F5]/60 focus:outline-none focus:ring-0 border-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-xs text-[#FAF9F5]/70 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* CATEGORY FILTER CAROUSEL / CHIPS */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs text-[#C5A059]">
                <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5" /> Filter by Category ({BLOG_CATEGORIES.length})
                </span>
                {(selectedCategory !== 'all' || selectedTag !== 'all' || searchQuery) && (
                  <button
                    onClick={handleResetFilters}
                    className="text-[#FAF9F5] hover:text-[#C5A059] flex items-center gap-1 transition-colors underline"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset Filters
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#C5A059]/40 scrollbar-track-transparent">
                <button
                  onClick={() => handleCategorySelect('all')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-[#C5A059] text-[#1E2522] shadow-md'
                      : 'bg-white/10 text-[#FAF9F5] hover:bg-white/20 border border-white/10'
                  }`}
                >
                  All Articles ({BLOG_POSTS.length})
                </button>

                {BLOG_CATEGORIES.map((cat) => {
                  const count = BLOG_POSTS.filter(
                    (p) =>
                      p.category.toLowerCase() === cat.name.toLowerCase() ||
                      p.category.toLowerCase().replace(/\s+/g, '-') === cat.slug
                  ).length;

                  return (
                    <button
                      key={cat.slug}
                      onClick={() => handleCategorySelect(cat.slug)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                        selectedCategory === cat.slug
                          ? 'bg-[#C5A059] text-[#1E2522] shadow-md'
                          : 'bg-white/10 text-[#FAF9F5] hover:bg-white/20 border border-white/10'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] opacity-75">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* MAIN BLOG CONTENT AREA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
          {/* SEARCH & FILTER RESULTS BAR */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2C3A33]/10 pb-4 text-sm">
            <div>
              <p className="text-[#2C3A33]/80 font-medium">
                Showing <strong className="text-[#1E2522]">{filteredPosts.length}</strong> wellness guides
                {selectedCategory !== 'all' && (
                  <span> in <strong className="text-[#C5A059]">{BLOG_CATEGORIES.find((c) => c.slug === selectedCategory)?.name || selectedCategory}</strong></span>
                )}
                {selectedTag !== 'all' && (
                  <span> tagged <strong className="text-[#C5A059]">#{selectedTag}</strong></span>
                )}
                {searchQuery && (
                  <span> matching "<strong className="text-[#1E2522]">{searchQuery}</strong>"</span>
                )}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#2C3A33]/60 font-semibold uppercase tracking-wider">
                Popular Tags:
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-md">
                {['Thai Massage', 'Deep Tissue', 'Gomti Nagar', 'Office Workers', 'Couple Spa', 'Stress Relief'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagSelect(tag)}
                    className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                      selectedTag.toLowerCase() === tag.toLowerCase()
                        ? 'bg-[#1E2522] text-[#C5A059] font-bold'
                        : 'bg-white text-[#2C3A33]/80 border border-[#2C3A33]/10 hover:border-[#C5A059]'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FEATURED POST HERO CARD (IF ACTIVE) */}
          {featuredPost && (
            <div className="bg-white rounded-3xl border border-[#2C3A33]/10 overflow-hidden shadow-lg hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-0 group">
              <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.featuredImage.src}
                  alt={featuredPost.featuredImage.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <LuxuryBadge variant="gold">
                    Featured Article
                  </LuxuryBadge>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[#2C3A33]/60 font-medium">
                    <span className="bg-[#C5A059]/10 text-[#C5A059] font-bold px-2.5 py-1 rounded-full uppercase">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      {featuredPost.readingTimeMinutes} min read
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                      {featuredPost.publishedDate}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`} className="block">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E2522] hover:text-[#C5A059] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-[#2C3A33]/80 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2C3A33]/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-9 h-9 rounded-full object-cover border border-[#C5A059]"
                    />
                    <div>
                      <strong className="text-xs font-bold text-[#1E2522] block">
                        {featuredPost.author.name}
                      </strong>
                      <span className="text-[11px] text-[#2C3A33]/60">
                        {featuredPost.author.role}
                      </span>
                    </div>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <LuxuryButton variant="forest" size="sm" className="group">
                      Read Guide
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </LuxuryButton>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* MAIN ARTICLES GRID */}
          {paginatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-[#2C3A33]/10 overflow-hidden shadow-sm hover:shadow-md hover:border-[#C5A059] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="relative h-48 overflow-hidden bg-[#2C3A33]/10">
                      <img
                        src={post.featuredImage.src}
                        alt={post.featuredImage.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-[#1E2522]/90 backdrop-blur-md text-[#C5A059] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-[#C5A059]/30">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-[#2C3A33]/60 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#C5A059]" />
                          {post.publishedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#C5A059]" />
                          {post.readingTimeMinutes} min read
                        </span>
                      </div>

                      <Link href={`/blog/${post.slug}`} className="block">
                        <h3 className="text-lg font-serif font-bold text-[#1E2522] hover:text-[#C5A059] transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-[#2C3A33]/75 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#2C3A33]/10 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-[#C5A059]/40"
                      />
                      <span className="text-xs text-[#2C3A33]/80 font-medium truncate max-w-[120px]">
                        {post.author.name}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-[#C5A059] hover:text-[#1E2522] flex items-center gap-1 transition-colors"
                    >
                      Read Post
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-3xl border border-[#2C3A33]/10 text-center space-y-4 max-w-xl mx-auto">
              <Search className="w-12 h-12 text-[#C5A059] mx-auto opacity-50" />
              <h3 className="text-xl font-serif font-bold text-[#1E2522]">
                No Wellness Guides Found
              </h3>
              <p className="text-xs sm:text-sm text-[#2C3A33]/75">
                We couldn't find any articles matching your filters. Try clearing your search or category selection.
              </p>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 bg-[#1E2522] text-[#FAF9F5] px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#C5A059] hover:text-white transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset All Filters
              </button>
            </div>
          )}

          {/* PAGINATION CONTROLS */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-6">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="px-4 py-2 rounded-xl border border-[#2C3A33]/20 text-xs font-semibold bg-white text-[#2C3A33] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1E2522] hover:text-[#C5A059] transition-all"
              >
                Previous Page
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                      currentPage === page
                        ? 'bg-[#1E2522] text-[#C5A059] shadow-sm'
                        : 'bg-white text-[#2C3A33]/80 border border-[#2C3A33]/10 hover:border-[#C5A059]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                className="px-4 py-2 rounded-xl border border-[#2C3A33]/20 text-xs font-semibold bg-white text-[#2C3A33] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1E2522] hover:text-[#C5A059] transition-all"
              >
                Next Page
              </button>
            </div>
          )}

          {/* NEWSLETTER CTA BOX */}
          <div className="bg-gradient-to-r from-[#1E2522] via-[#242E29] to-[#1E2522] text-[#FAF9F5] p-8 sm:p-12 rounded-3xl border border-[#C5A059]/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <LuxuryBadge variant="gold" className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                Exclusive Wellness Journal
              </LuxuryBadge>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF9F5]">
                Subscribe to Weekly Wellness & Spa Privileges
              </h2>

              <p className="text-xs sm:text-sm text-[#FAF9F5]/80 leading-relaxed font-light">
                Receive physician-backed posture tips, seasonal spa discounts, and early access to VIP couple suite slots directly in your inbox.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#242E29] p-6 rounded-2xl border border-[#C5A059]/20 space-y-4">
              {newsletterSubscribed ? (
                <div className="text-center py-4 space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#C5A059] mx-auto" />
                  <h4 className="font-serif font-bold text-base text-[#FAF9F5]">
                    Welcome to The Cloud Spa Journal!
                  </h4>
                  <p className="text-xs text-[#FAF9F5]/80">
                    Thank you for subscribing. Look out for our weekly wellness letter in your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-[#1E2522] text-[#FAF9F5] placeholder-[#FAF9F5]/50 border border-[#C5A059]/30 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                  <LuxuryButton variant="gold" fullWidth size="sm" type="submit">
                    Join Subscriber List
                  </LuxuryButton>
                  <span className="text-[10px] text-[#FAF9F5]/60 text-center block">
                    Zero spam. Unsubscribe at any time.
                  </span>
                </form>
              )}
            </div>
          </div>

          {/* QUICK SERVICE INDEX & LOCATION DIRECTORY LINKING */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Services Links */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#2C3A33]/10 space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#1E2522] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                Explore Popular Spa Services
              </h3>
              <p className="text-xs text-[#2C3A33]/75">
                Book certified bodywork therapies at our Gomti Nagar sanctuary.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                {SPA_TREATMENTS.slice(0, 6).map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.slug}`}
                    className="p-2.5 rounded-xl bg-[#FAF9F5] hover:bg-[#C5A059] hover:text-white transition-all text-[#1E2522] flex items-center justify-between"
                  >
                    <span className="truncate">{srv.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Locations Links */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#2C3A33]/10 space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#1E2522] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C5A059]" />
                Lucknow Locality Coverage
              </h3>
              <p className="text-xs text-[#2C3A33]/75">
                Serving guests across all 11 primary zones in Lucknow.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                {LUCKNOW_LOCATIONS.slice(0, 6).map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="p-2.5 rounded-xl bg-[#FAF9F5] hover:bg-[#C5A059] hover:text-white transition-all text-[#1E2522] flex items-center justify-between"
                  >
                    <span className="truncate">{loc.name}</span>
                    <span className="text-[10px] text-[#2C3A33]/60">{loc.distanceFromSpa}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />

      <BookingFormModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
