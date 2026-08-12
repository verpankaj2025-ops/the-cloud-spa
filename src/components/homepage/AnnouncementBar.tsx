'use client';

/**
 * Announcement Bar Component
 * The Cloud Spa & Wellness Center
 */

import React from 'react';
import { Phone, Clock, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '../../constants/business';

interface AnnouncementBarProps {
  onOpenBookingModal?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-[#1E2522] text-[#F4F1EA] text-xs py-2 px-4 border-b border-[#C5A059]/20 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Luxury Offer */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#C5A059]/20 text-[#D4AF37] text-[11px] font-medium border border-[#C5A059]/30">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            SPECIAL OFFER
          </span>
          <span className="text-[#E0DDD5] font-medium truncate">
            Flat 20% OFF on First Couple Spa & Deep Tissue Session in Gomti Nagar
          </span>
        </div>

        {/* Right: Contact & Hours */}
        <div className="flex items-center gap-4 sm:gap-6 text-[11px] text-[#A3A8A5] flex-wrap justify-center">
          <div className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Open 7 Days: 11:00 AM – 8:00 PM</span>
          </div>

          <a
            href={`tel:${BUSINESS_DETAILS.phone}`}
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="font-semibold">{BUSINESS_DETAILS.formattedPhone}</span>
          </a>

          <a
            href={BUSINESS_DETAILS.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-[#25D366] hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};
