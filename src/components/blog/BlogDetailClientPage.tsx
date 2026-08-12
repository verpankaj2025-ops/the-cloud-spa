'use client';

/**
 * Enterprise Blog Article Detail Client Component
 * EEAT Compliant, Interactive Table of Contents, Social Share, AI Overview Box, FAQs, Related Posts, Services & Locations
 */

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
  Calendar,
  User,
  ChevronRight,
  Share2,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  MapPin,
  Phone,
  MessageCircle,
  BookOpen,
  ArrowRight,
  Award,
  List,
  Copy,
  Check,
  Twitter,
  Linkedin,
  Mail,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { HeaderNavigation } from '../ui/HeaderNavigation';
import { FooterSection } from '../ui/FooterSection';
import { BookingFormModal } from '../ui/BookingFormModal';
import { LuxuryButton } from '../ui/LuxuryButton';
import { LuxuryBadge } from '../ui/LuxuryBadge';
import { BlogPost } from '../../types/blog';
import { BUSINESS_DETAILS } from '../../constants/business';
import { SPA_TREATMENTS } from '../../constants/services';
import { LUCKNOW_LOCATIONS } from '../../constants/locations';
import { BLOG_POSTS } from '../../constants/blog-posts';

interface BlogDetailClientPageProps {
  post: BlogPost;
}

export function BlogDetailClientPage({ post }: BlogDetailClientPageProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Resolve related services objects
  const relatedServices = SPA_TREATMENTS.filter((s) =>
    post.relatedServicesSlugs.includes(s.slug) || post.relatedServicesSlugs.includes(s.id)
  ).slice(0, 3);

  // Resolve related locations objects
  const relatedLocations = LUCKNOW_LOCATIONS.filter((l) =>
    post.relatedLocationsSlugs.includes(l.slug)
  ).slice(0, 4);

  // Resolve related blog posts
  const relatedBlogPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || post.relatedPostsSlugs.includes(p.slug))
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#2C3A33] selection:bg-[#C5A059] selection:text-white flex flex-col justify-between">
      <HeaderNavigation onOpenBookingModal={handleOpenBooking} />

      <main>
        {/* ARTICLE HERO SECTION */}
        <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1E2522] via-[#242E29] to-[#1E2522] text-[#FAF9F5] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-[#C5A059]/80 font-medium flex-wrap">
              <Link href="/" className="hover:text-[#C5A059] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]/40" />
              <Link href="/blog" className="hover:text-[#C5A059] transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]/40" />
              <span className="text-[#FAF9F5] font-semibold truncate max-w-[200px] sm:max-w-xs">
                {post.title}
              </span>
            </nav>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <LuxuryBadge variant="gold" className="uppercase font-bold tracking-wider text-[11px]">
                  {post.category}
                </LuxuryBadge>
                <span className="text-xs text-[#FAF9F5]/70 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  {post.readingTimeMinutes} minute read
                </span>
                <span className="text-xs text-[#FAF9F5]/70 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  Published: {post.publishedDate}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF9F5] leading-tight">
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-[#FAF9F5]/85 leading-relaxed font-light">
                {post.excerpt}
              </p>
            </div>

            {/* AUTHOR EEAT SNAPSHOT & SHARE BAR */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#C5A059]/20">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#C5A059]"
                />
                <div>
                  <strong className="text-sm font-bold text-[#FAF9F5] block">
                    {post.author.name}
                  </strong>
                  <span className="text-xs text-[#C5A059]">
                    {post.author.role} ({post.author.experienceYears}+ Yrs Exp)
                  </span>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#FAF9F5]/60 font-semibold flex items-center gap-1">
                  <Share2 className="w-3.5 h-3.5 text-[#C5A059]" /> Share:
                </span>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - ${typeof window !== 'undefined' ? window.location.href : ''}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center text-xs"
                  title="Share on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="w-8 h-8 rounded-full bg-white/10 text-[#FAF9F5] hover:bg-[#C5A059] hover:text-[#1E2522] transition-all flex items-center justify-center text-xs"
                  title="Copy link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN ARTICLE BODY & SIDEBAR */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT MAIN CONTENT COLUMN (8 COLS) */}
            <div className="lg:col-span-8 space-y-10">
              {/* FEATURED IMAGE */}
              <div className="bg-white rounded-3xl overflow-hidden border border-[#2C3A33]/10 shadow-sm space-y-2">
                <img
                  src={post.featuredImage.src}
                  alt={post.featuredImage.alt}
                  className="w-full h-auto max-h-[450px] object-cover"
                />
                {post.featuredImage.caption && (
                  <p className="text-xs text-[#2C3A33]/60 italic p-3 text-center border-t border-[#2C3A33]/5">
                    {post.featuredImage.caption}
                  </p>
                )}
              </div>

              {/* AI OVERVIEW & QUICK TAKEAWAYS BOX */}
              {post.aiOverviewSummary && (
                <div className="bg-[#F4F1E8] p-6 sm:p-8 rounded-2xl border border-[#C5A059]/40 space-y-3 relative overflow-hidden">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                    <Sparkles className="w-4 h-4" />
                    AI Overview & Executive Summary
                  </div>
                  <p className="text-xs sm:text-sm text-[#2C3A33]/90 leading-relaxed font-medium">
                    {post.aiOverviewSummary}
                  </p>
                </div>
              )}

              {/* MOBILE TABLE OF CONTENTS CARD */}
              <div className="lg:hidden bg-white p-6 rounded-2xl border border-[#2C3A33]/10 space-y-3">
                <h3 className="font-serif font-bold text-base text-[#1E2522] flex items-center gap-2 border-b border-[#2C3A33]/10 pb-2">
                  <List className="w-4 h-4 text-[#C5A059]" />
                  Table of Contents
                </h3>
                <ul className="space-y-2 text-xs text-[#2C3A33]/85">
                  {post.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a
                        href={`#${toc.id}`}
                        className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                      >
                        <ChevronRight className="w-3 h-3 text-[#C5A059]" />
                        {toc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ARTICLE SECTIONS */}
              <div className="prose prose-stone max-w-none space-y-10 text-sm sm:text-base text-[#2C3A33]/90 leading-relaxed">
                {post.sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E2522] border-b border-[#2C3A33]/10 pb-3">
                      {section.title}
                    </h2>

                    <div className="bg-white p-6 rounded-2xl border border-[#2C3A33]/10 shadow-sm space-y-4">
                      {section.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}

                      {section.callout && (
                        <div className="bg-[#FAF9F5] p-4 rounded-xl border-l-4 border-[#C5A059] text-xs sm:text-sm text-[#2C3A33]/90 italic font-medium my-4">
                          "{section.callout}"
                        </div>
                      )}

                      {section.keyTakeaway && (
                        <div className="bg-[#1E2522] text-[#FAF9F5] p-4 rounded-xl text-xs sm:text-sm flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-[#C5A059] uppercase text-[10px] tracking-wider block font-bold">
                              Key Takeaway:
                            </strong>
                            <span>{section.keyTakeaway}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* AUTHOR EEAT BIO CARD */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#2C3A33]/10 shadow-sm space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block">
                  Written & Reviewed By Medical & Bodywork Experts
                </span>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-[#C5A059] shrink-0"
                  />
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-serif font-bold text-[#1E2522] flex items-center gap-2">
                      {post.author.name}
                      <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    </h3>
                    <p className="text-xs font-semibold text-[#C5A059]">
                      {post.author.credentials}
                    </p>
                    <p className="text-xs text-[#2C3A33]/80 leading-relaxed">
                      {post.author.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* ARTICLE FAQS SECTION */}
              {post.faqs.length > 0 && (
                <div className="bg-white p-8 rounded-3xl border border-[#2C3A33]/10 shadow-sm space-y-6">
                  <div className="space-y-2">
                    <LuxuryBadge variant="forest">
                      Frequently Asked Questions
                    </LuxuryBadge>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E2522]">
                      Expert Q&A on {post.category}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {post.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="border border-[#2C3A33]/10 rounded-xl overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left p-4 sm:p-5 bg-[#FAF9F5] hover:bg-[#F4F1E8] font-serif font-bold text-sm sm:text-base text-[#1E2522] flex items-center justify-between gap-4"
                        >
                          <span className="flex items-center gap-2">
                            <HelpCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                            {faq.question}
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 text-[#C5A059] transition-transform ${
                              openFaqIndex === idx ? 'rotate-90' : ''
                            }`}
                          />
                        </button>
                        {openFaqIndex === idx && (
                          <div className="p-4 sm:p-5 text-xs sm:text-sm text-[#2C3A33]/85 bg-white border-t border-[#2C3A33]/10 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CONTEXTUAL RELATED SERVICES */}
              {relatedServices.length > 0 && (
                <div className="bg-[#F4F1E8] p-8 rounded-3xl border border-[#2C3A33]/10 space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                      Recommended Treatments
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#1E2522]">
                      Experience Related Bodywork at The Cloud Spa
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedServices.map((srv) => (
                      <div
                        key={srv.id}
                        className="bg-white p-5 rounded-2xl border border-[#2C3A33]/10 flex flex-col justify-between space-y-3 shadow-sm"
                      >
                        <div className="space-y-1">
                          <strong className="text-sm font-serif font-bold text-[#1E2522] block">
                            {srv.name}
                          </strong>
                          <p className="text-xs text-[#2C3A33]/70 line-clamp-2">
                            {srv.shortDescription}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-[#2C3A33]/10 flex items-center justify-between">
                          <span className="text-xs font-bold text-[#1E2522]">
                            ₹{srv.priceINR[60] || srv.priceINR[90]}
                          </span>
                          <Link href={`/services/${srv.slug}`}>
                            <LuxuryButton variant="forest" size="sm">
                              Book
                            </LuxuryButton>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CONTEXTUAL RELATED LOCATIONS */}
              {relatedLocations.length > 0 && (
                <div className="bg-white p-8 rounded-3xl border border-[#2C3A33]/10 space-y-4">
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block">
                    Lucknow Service Areas
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#1E2522]">
                    Visiting Us From Nearby Lucknow Neighborhoods
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    {relatedLocations.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        className="p-3 rounded-xl bg-[#FAF9F5] hover:bg-[#C5A059] hover:text-white transition-all text-[#1E2522] text-center font-semibold border border-[#2C3A33]/10 block"
                      >
                        <span className="block truncate">{loc.name}</span>
                        <span className="text-[10px] text-[#2C3A33]/60 font-normal">
                          {loc.distanceFromSpa}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* RELATED ARTICLES GRID */}
              {relatedBlogPosts.length > 0 && (
                <div className="space-y-6 pt-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                      Further Reading
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#1E2522]">
                      Related Wellness Guides
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedBlogPosts.map((relPost) => (
                      <article
                        key={relPost.slug}
                        className="bg-white rounded-2xl border border-[#2C3A33]/10 overflow-hidden p-5 space-y-3 shadow-sm hover:border-[#C5A059] transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <span className="bg-[#C5A059]/10 text-[#C5A059] text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                            {relPost.category}
                          </span>
                          <Link href={`/blog/${relPost.slug}`}>
                            <h4 className="text-sm font-serif font-bold text-[#1E2522] hover:text-[#C5A059] transition-colors line-clamp-2">
                              {relPost.title}
                            </h4>
                          </Link>
                          <p className="text-xs text-[#2C3A33]/70 line-clamp-2">
                            {relPost.excerpt}
                          </p>
                        </div>
                        <Link
                          href={`/blog/${relPost.slug}`}
                          className="text-xs font-bold text-[#C5A059] hover:text-[#1E2522] flex items-center gap-1 pt-2 border-t border-[#2C3A33]/10"
                        >
                          Read Post <ChevronRight className="w-3 h-3" />
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT SIDEBAR COLUMN (4 COLS) */}
            <div className="lg:col-span-4 space-y-8 sticky top-24">
              {/* DESKTOP TABLE OF CONTENTS */}
              <div className="hidden lg:block bg-white p-6 rounded-3xl border border-[#2C3A33]/10 shadow-sm space-y-4">
                <h3 className="font-serif font-bold text-base text-[#1E2522] flex items-center gap-2 border-b border-[#2C3A33]/10 pb-3">
                  <List className="w-4 h-4 text-[#C5A059]" />
                  Table of Contents
                </h3>
                <nav className="space-y-2 text-xs text-[#2C3A33]/80">
                  {post.tableOfContents.map((toc) => (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className="block p-2 rounded-lg hover:bg-[#FAF9F5] hover:text-[#C5A059] transition-all font-medium border-l-2 border-transparent hover:border-[#C5A059]"
                    >
                      {toc.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* INSTANT BOOKING CARD */}
              <div className="bg-[#1E2522] text-[#FAF9F5] p-6 rounded-3xl border border-[#C5A059]/30 shadow-lg space-y-4 text-center">
                <Sparkles className="w-8 h-8 text-[#C5A059] mx-auto" />
                <h3 className="font-serif font-bold text-lg">
                  Book Your Spa Session in Gomti Nagar
                </h3>
                <p className="text-xs text-[#FAF9F5]/80 leading-relaxed">
                  Certified therapists, private soundproof suites, and fresh organic oils opposite Brijwasi Bakery.
                </p>

                <div className="space-y-2 pt-2">
                  <LuxuryButton
                    variant="gold"
                    fullWidth
                    size="sm"
                    onClick={handleOpenBooking}
                  >
                    Book Appointment Online
                  </LuxuryButton>

                  <a
                    href={`https://wa.me/91${BUSINESS_DETAILS.whatsappPhone}?text=${encodeURIComponent(`Hello The Cloud Spa, I read your post "${post.title}" and would like to book a appointment.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <LuxuryButton variant="whatsapp" fullWidth size="sm">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Front Desk
                    </LuxuryButton>
                  </a>
                </div>
              </div>

              {/* FRONT DESK PHONE CARD */}
              <div className="bg-white p-6 rounded-3xl border border-[#2C3A33]/10 shadow-sm text-center space-y-3">
                <Phone className="w-6 h-6 text-[#C5A059] mx-auto" />
                <h4 className="font-serif font-bold text-sm text-[#1E2522]">
                  Need Instant Assistance?
                </h4>
                <p className="text-xs text-[#2C3A33]/70">
                  Speak directly with our receptionist for custom timings and valet assistance.
                </p>
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="block text-sm font-bold text-[#C5A059] hover:underline"
                >
                  Call {BUSINESS_DETAILS.formattedPhone}
                </a>
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
