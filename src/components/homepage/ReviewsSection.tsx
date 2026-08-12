/**
 * Guest Experience & Sanctuary Commitments Section
 * Highlights wellness standards and Google Maps directory link
 */

import React from 'react';
import { Star, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { LuxuryBadge } from '../ui/LuxuryBadge';
import { BUSINESS_DETAILS } from '../../constants/business';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4F1EA] text-[#1A1C1A]" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header & Google Badge Dashboard */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#2C3A33] text-[#FAF9F5] p-8 rounded-3xl border border-[#C5A059]/30 shadow-xl">
          <div className="space-y-3 text-center lg:text-left">
            <LuxuryBadge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
              GUEST SATISFACTION COMMITMENT
            </LuxuryBadge>
            <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#FAF9F5]">
              Uncompromised Spa Excellence in Lucknow
            </h2>
            <p className="text-sm text-[#D2D6D3] max-w-xl">
              Dedicated to high hygiene standards, quiet acoustic suites, and authentic Asian bodywork therapies in Vivek Khand 4, Gomti Nagar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#1E2522] p-6 rounded-2xl border border-white/10 shrink-0">
            <div className="text-center">
              <div className="text-2xl font-bold font-serif-heading text-[#D4AF37]">
                Google Maps
              </div>
              <div className="flex items-center justify-center gap-1 text-[#D4AF37] my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs text-[#A3A8A5]">
                Vivek Khand 4, Gomti Nagar
              </div>
            </div>

            <a
              href={BUSINESS_DETAILS.social.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#C5A059] text-[#1E2522] font-semibold text-xs hover:bg-[#D4AF37] transition-all shadow-md text-center flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" /> View Google Location
            </a>
          </div>
        </div>

        {/* Commitment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E2DDD3] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#2C3A33] text-[#D4AF37] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif-heading font-bold text-[#1A1C1A]">Sanitized Suites</h3>
            <p className="text-xs text-[#525854] leading-relaxed">
              Every suite undergoes complete UV sanitization, fresh linen changes, and climate control prep before every session.
            </p>
          </div>

          <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E2DDD3] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#2C3A33] text-[#D4AF37] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif-heading font-bold text-[#1A1C1A]">Experienced Staff</h3>
            <p className="text-xs text-[#525854] leading-relaxed">
              Our team consists of experienced wellness professionals trained in Thai, Balinese, Swedish, and Deep Tissue modalities.
            </p>
          </div>

          <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E2DDD3] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#2C3A33] text-[#D4AF37] flex items-center justify-center font-bold">
              <Star className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif-heading font-bold text-[#1A1C1A]">Private VIP Suites</h3>
            <p className="text-xs text-[#525854] leading-relaxed">
              Soundproof therapy rooms equipped with private attached showers, Jacuzzi amenities, and calming mood lighting.
            </p>
          </div>

          <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E2DDD3] space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#2C3A33] text-[#D4AF37] flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif-heading font-bold text-[#1A1C1A]">Prime Location</h3>
            <p className="text-xs text-[#525854] leading-relaxed">
              Situated in Vivek Khand 4 near Brijwasi Bakery, easily accessible with dedicated valet parking for guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
