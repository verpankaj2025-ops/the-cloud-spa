'use client';

/**
 * Homepage Client Container Component
 * Handles booking modal state and interactive callbacks
 * Preserves 100% exact UI, UX, styling, and design system
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './AnnouncementBar';
import { HeaderNavigation } from '../ui/HeaderNavigation';
import { HeroSection } from './HeroSection';
import { WhyChooseUsSection } from './WhyChooseUsSection';
import { FeaturedServicesSection } from './FeaturedServicesSection';
import { MembershipSection } from './MembershipSection';
import { PackagesSection } from './PackagesSection';
import { GallerySection } from './GallerySection';
import { ReviewsSection } from './ReviewsSection';
import { FAQSection } from './FAQSection';
import { LocationSection } from './LocationSection';
import { BlogPreviewSection } from './BlogPreviewSection';
import { FinalCTASection } from './FinalCTASection';
import { FooterSection } from '../ui/FooterSection';
import { QuickActionBar } from './QuickActionBar';
import { BookingFormModal } from '../ui/BookingFormModal';
import { JsonLdSchemas } from './JsonLdSchemas';
import { trackBookingModalOpen } from '../../lib/analytics';

export function HomepageClientContainer() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | undefined>();

  const handleOpenBooking = (treatmentId?: string) => {
    setSelectedTreatmentId(treatmentId);
    trackBookingModalOpen('homepage_cta');
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1A1C1A] font-sans-body antialiased selection:bg-[#C5A059] selection:text-white pb-16">
      {/* Google SEO JSON-LD Structured Data Scripts */}
      <JsonLdSchemas />

      {/* 1. Announcement Bar */}
      <AnnouncementBar onOpenBookingModal={() => handleOpenBooking()} />

      {/* 2. Sticky Header Navigation */}
      <HeaderNavigation onOpenBookingModal={() => handleOpenBooking()} />

      {/* Main Homepage Flow */}
      <main>
        {/* 3. Luxury Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Why Choose The Cloud Spa */}
        <WhyChooseUsSection />

        {/* 5. Featured Services Catalog */}
        <FeaturedServicesSection onOpenBooking={(id) => handleOpenBooking(id)} />

        {/* 6. Premium VIP Membership */}
        <MembershipSection onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Luxury Packages & Rituals */}
        <PackagesSection onOpenBooking={(id) => handleOpenBooking(id)} />

        {/* 8. Gallery Preview */}
        <GallerySection onOpenBooking={() => handleOpenBooking()} />

        {/* 9 & 10. Google Reviews & Testimonials */}
        <ReviewsSection />

        {/* 11. FAQ Accordion (Schema Ready) */}
        <FAQSection />

        {/* 12. Location Section & Driving Directions */}
        <LocationSection />

        {/* 13. Blog Preview & SEO Guides */}
        <BlogPreviewSection />

        {/* 14. Strong Conversion CTA */}
        <FinalCTASection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 15. Luxury Footer */}
      <FooterSection />

      {/* Persistent Floating Quick Action Bar */}
      <QuickActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Form Modal */}
      <BookingFormModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preSelectedTreatmentId={selectedTreatmentId}
      />
    </div>
  );
}
