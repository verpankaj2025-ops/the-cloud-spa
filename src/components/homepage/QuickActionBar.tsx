'use client';

/**
 * Floating Sticky Quick Action Bar
 * High-converting persistent bar for mobile and desktop
 */

import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_DETAILS } from '../../constants/business';

interface QuickActionBarProps {
  onOpenBooking: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1E2522]/95 backdrop-blur-md border-t border-[#C5A059]/30 py-2.5 px-4 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Quick Business Info (Hidden on very small mobile) */}
        <div className="hidden sm:flex flex-col text-left text-xs">
          <span className="font-serif-heading font-bold text-[#D4AF37] truncate">
            The Cloud Spa Gomti Nagar
          </span>
          <span className="text-[11px] text-[#A3A8A5] truncate">
            Open Today: 11 AM – 8 PM
          </span>
        </div>

        {/* Right: Conversion Action Buttons */}
        <div className="flex items-center justify-end gap-2 w-full sm:w-auto">
          <a
            href={`tel:${BUSINESS_DETAILS.phone}`}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#2C3A33] text-[#FAF9F5] border border-white/10 text-xs font-semibold hover:bg-[#1E2522] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Call Now</span>
          </a>

          <a
            href={BUSINESS_DETAILS.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#C5A059] text-[#1E2522] text-xs font-bold hover:bg-[#D4AF37] transition-colors shadow-md"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Spa Session</span>
          </button>
        </div>
      </div>
    </div>
  );
};
