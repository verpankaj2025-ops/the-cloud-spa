'use client';

/**
 * Featured Services Section Component
 * Tabbed filtering (All, Massages, Couple Spa, Body Therapies)
 * Complete treatment catalog display with interactive Duration & Pricing selection
 */

import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { SPA_TREATMENTS } from '../../constants/services';
import { BUSINESS_DETAILS } from '../../constants/business';
import { ServiceCard } from '../ui/ServiceCard';
import { LuxuryBadge } from '../ui/LuxuryBadge';
import { LuxuryButton } from '../ui/LuxuryButton';

interface FeaturedServicesSectionProps {
  onOpenBooking: (treatmentId?: string) => void;
}

export const FeaturedServicesSection: React.FC<FeaturedServicesSectionProps> = ({
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTreatments =
    activeCategory === 'all'
      ? SPA_TREATMENTS
      : SPA_TREATMENTS.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 bg-[#FAF9F5] text-[#1A1C1A]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <LuxuryBadge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
            SIGNATURE THERAPIES
          </LuxuryBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-[#1A1C1A]">
            Full Body Massage & Spa Therapies in Gomti Nagar
          </h2>
          <p className="text-base text-[#4A4E4B] leading-relaxed">
            Explore Thai Massage, Deep Tissue Massage, Balinese Massage, aromatherapy and other wellness experiences at our professional massage center in Gomti Nagar, Lucknow.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#2C3A33] text-[#FAF9F5] shadow-md'
                  : 'bg-[#F4F1EA] text-[#4A4E4B] hover:bg-[#EAE5D9]'
              }`}
            >
              All Therapies ({SPA_TREATMENTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('massage')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === 'massage'
                  ? 'bg-[#2C3A33] text-[#FAF9F5] shadow-md'
                  : 'bg-[#F4F1EA] text-[#4A4E4B] hover:bg-[#EAE5D9]'
              }`}
            >
              Body Massages
            </button>
            <button
              onClick={() => setActiveCategory('couple')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === 'couple'
                  ? 'bg-[#2C3A33] text-[#FAF9F5] shadow-md'
                  : 'bg-[#F4F1EA] text-[#4A4E4B] hover:bg-[#EAE5D9]'
              }`}
            >
              Couple VIP Suites
            </button>
          </div>
        </div>

        {/* SEO Internal Service Links */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-serif-heading font-bold text-[#1A1C1A]">
            Popular Massage Services in Gomti Nagar
          </h3>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a href="/services/thai-massage" className="text-[#C5A059] hover:underline">
              Thai Massage
            </a>

            <a href="/services/deep-tissue-massage" className="text-[#C5A059] hover:underline">
              Deep Tissue Massage
            </a>

            <a href="/services/balinese-massage" className="text-[#C5A059] hover:underline">
              Balinese Massage
            </a>

            <a href="/services/couple-spa" className="text-[#C5A059] hover:underline">
              Couple Spa
            </a>

            <a href="/services/jacuzzi" className="text-[#C5A059] hover:underline">
              Jacuzzi Spa
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => (
            <ServiceCard
              key={treatment.id}
              treatment={treatment}
              onBookNow={() => onOpenBooking(treatment.id)}
            />
          ))}
        </div>

        {/* Custom Inquiry Callout */}
        <div className="bg-[#F4F1EA] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-serif-heading font-semibold text-[#1A1C1A]">
              Need a Custom Spa Package or Special Event Booking?
            </h3>
            <p className="text-sm text-[#4A4E4B]">
              Speak directly with our front-desk concierge in Gomti Nagar for customized therapy plans, birthday surprises, or corporate wellness packages.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <LuxuryButton
              variant="gold"
              onClick={() => onOpenBooking()}
            >
              Request Custom Quote
            </LuxuryButton>
            <LuxuryButton
              variant="whatsapp"
              icon={<MessageCircle className="w-4 h-4" />}
              onClick={() => window.open(BUSINESS_DETAILS.social.whatsapp, '_blank')}
            >
              WhatsApp Us
            </LuxuryButton>
          </div>
        </div>
      </div>
    </section>
  );
};
