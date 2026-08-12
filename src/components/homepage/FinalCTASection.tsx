/**
 * Final High-Conversion CTA Banner
 * Direct Call, WhatsApp, and Booking Trigger
 */

import React from 'react';
import { Phone, MessageCircle, Sparkles, MapPin, Calendar } from 'lucide-react';
import { BUSINESS_DETAILS } from '../../constants/business';
import { LuxuryButton } from '../ui/LuxuryButton';
import { LuxuryBadge } from '../ui/LuxuryBadge';

interface FinalCTASectionProps {
  onOpenBooking: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#1E2522] text-[#FAF9F5] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#C5A059]/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#2C3A33] blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <LuxuryBadge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
          RESERVE YOUR SANCTUARY SESSION
        </LuxuryBadge>

        <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#FAF9F5] leading-tight">
          Ready to Experience Lucknow’s Highest Rated Luxury Spa?
        </h2>

        <p className="text-base sm:text-lg text-[#D2D6D3] max-w-2xl mx-auto leading-relaxed">
          Book your session today in Gomti Nagar, Vivek Khand 4. Certified therapists, 100% organic oils, private acoustic suites, and instant confirmation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <LuxuryButton
            variant="gold"
            size="lg"
            onClick={onOpenBooking}
            icon={<Calendar className="w-5 h-5" />}
          >
            Book Appointment Online
          </LuxuryButton>

          <LuxuryButton
            variant="whatsapp"
            size="lg"
            onClick={() => window.open(BUSINESS_DETAILS.social.whatsapp, '_blank')}
            icon={<MessageCircle className="w-5 h-5" />}
          >
            Instant WhatsApp Chat
          </LuxuryButton>

          <a
            href={`tel:${BUSINESS_DETAILS.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#FAF9F5]/30 text-[#FAF9F5] hover:bg-white/10 font-semibold text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call {BUSINESS_DETAILS.formattedPhone}</span>
          </a>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 text-xs text-[#A3A8A5]">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            4/526 Vivek Khand 4, Gomti Nagar, Lucknow
          </span>
          <span>•</span>
          <span>Open Daily: 11 AM - 8 PM</span>
          <span>•</span>
          <span>Instant Confirmation</span>
        </div>
      </div>
    </section>
  );
};
