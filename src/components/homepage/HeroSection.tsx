/**
 * Luxury Hero Section Component
 * Optimized for 'Best Spa in Gomti Nagar', 'Spa in Lucknow', and local conversion
 */

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, MapPin, Sparkles, Award, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '../../constants/business';
import { LuxuryButton } from '../ui/LuxuryButton';
import { LuxuryBadge } from '../ui/LuxuryBadge';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1E2522] text-[#FAF9F5] py-16 lg:py-24">
      {/* Background Hero Ambient Image with Dark Overlay - Optimized LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/spa-placeholder.svg"
          alt="Luxury Spa Room in Gomti Nagar Lucknow"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 scale-105 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2522] via-[#1E2522]/80 to-[#1E2522]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Controls */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 backdrop-blur-md">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-[#F4F1EA]">
                Vivek Khand 4, Gomti Nagar, Lucknow (Near Brijwasi Bakery)
              </span>
            </div>

            {/* Main H1 Title - Target SEO Keywords */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-heading font-bold text-[#FAF9F5] leading-tight tracking-tight">
              Best Luxury Spa in <span className="text-[#D4AF37] italic font-normal">Gomti Nagar</span>, Lucknow
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#D2D6D3] max-w-2xl font-light leading-relaxed">
              Step into Lucknow’s premier sanctuary for wellness. Experience authentic Thai stretching, Balinese aromatherapy, deep tissue muscle recovery, and private couple Jacuzzi suites guided by certified expert therapists.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <LuxuryButton
                variant="gold"
                size="lg"
                onClick={onOpenBooking}
                icon={<Sparkles className="w-5 h-5" />}
              >
                Book Appointment
              </LuxuryButton>

              <LuxuryButton
                variant="whatsapp"
                size="lg"
                onClick={() => window.open(BUSINESS_DETAILS.social.whatsapp, '_blank')}
                icon={<MessageCircle className="w-5 h-5" />}
              >
                WhatsApp Booking
              </LuxuryButton>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#E2C765] font-medium transition-colors px-3 py-2"
              >
                Explore Treatments <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-6 border-t border-[#FAF9F5]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#C5C9C6]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>100% Certified Therapists</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Private VIP Suites</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Organic Essential Oils</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Steam & Jacuzzi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Rating Box & Visual Badge Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#2C3A33]/80 border border-[#C5A059]/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6">
              
              {/* Luxury Sanctuary Highlights */}
              <div className="flex items-center justify-between pb-6 border-b border-[#FAF9F5]/10">
                <div>
                  <div className="flex items-center gap-1.5 text-[#D4AF37] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="text-2xl font-serif-heading font-bold text-[#FAF9F5]">
                    Luxury Wellness Sanctuary
                  </div>
                  <div className="text-xs text-[#A3A8A5]">
                    Experienced Wellness Professionals in Gomti Nagar
                  </div>
                </div>

                <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                  <Sparkles className="w-7 h-7 text-[#D4AF37]" />
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1E2522]/60 p-4 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold font-serif-heading text-[#D4AF37]">
                    10,000+
                  </div>
                  <div className="text-xs text-[#A3A8A5] mt-0.5">Satisfied Guests</div>
                </div>

                <div className="bg-[#1E2522]/60 p-4 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold font-serif-heading text-[#D4AF37]">
                    15+
                  </div>
                  <div className="text-xs text-[#A3A8A5] mt-0.5">Expert Therapists</div>
                </div>

                <div className="bg-[#1E2522]/60 p-4 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold font-serif-heading text-[#D4AF37]">
                    100%
                  </div>
                  <div className="text-xs text-[#A3A8A5] mt-0.5">Sanitized & Hygienic</div>
                </div>

                <div className="bg-[#1E2522]/60 p-4 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold font-serif-heading text-[#D4AF37]">
                    7 Days
                  </div>
                  <div className="text-xs text-[#A3A8A5] mt-0.5">11:00 AM - 8:00 PM</div>
                </div>
              </div>

              {/* Instant Call Action */}
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#C5A059] text-[#1E2522] font-semibold hover:bg-[#D4AF37] transition-all text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly: {BUSINESS_DETAILS.formattedPhone}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
