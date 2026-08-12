'use client';

/**
 * Luxury Header Navigation Bar System
 * Features Top Utility Bar, Schema Local Business Meta, and Responsive Menu
 */

import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { BUSINESS_DETAILS } from '../../constants/business';
import { LuxuryButton } from './LuxuryButton';

export interface HeaderNavigationProps {
  onOpenBookingModal?: () => void;
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  onOpenBookingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#2C3A33]/10 transition-all duration-300">
      {/* Top Bar for High Local SEO Visibility */}
      <div className="bg-[#1E2522] text-[#FAF9F5] text-xs py-2 px-4 sm:px-8 border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-[#C5A059]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Gomti Nagar, Lucknow (Near Brijwasi Bakery)</span>
            </span>

            <span className="hidden md:flex items-center gap-1 text-[#FAF9F5]/80">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>11:00 AM – 8:00 PM (Open 7 Days)</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs font-semibold">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="flex items-center gap-1 hover:text-[#C5A059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call: {BUSINESS_DETAILS.formattedPhone}</span>
            </a>

            <a
              href={BUSINESS_DETAILS.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-[#25D366] hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#2C3A33] border border-[#C5A059] flex items-center justify-center text-[#C5A059] shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="block font-serif-heading text-lg sm:text-xl font-bold tracking-tight text-[#1A1C1A] group-hover:text-[#C5A059] transition-colors">
              The Cloud Spa
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-[#767B78] font-semibold">
              Wellness Center • Gomti Nagar
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#2C3A33]">
          <a href="#services" className="hover:text-[#C5A059] transition-colors">
            Therapies & Massages
          </a>
          <a href="#couple-spa" className="hover:text-[#C5A059] transition-colors">
            Couple Spa Suite
          </a>
          <a href="#packages" className="hover:text-[#C5A059] transition-colors">
            Packages
          </a>
          <a href="#locations" className="hover:text-[#C5A059] transition-colors">
            Locations Served
          </a>
          <a href="#reviews" className="hover:text-[#C5A059] transition-colors">
            Guest Reviews
          </a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <LuxuryButton
            variant="gold"
            size="sm"
            onClick={onOpenBookingModal}
            className="hidden sm:inline-flex"
          >
            Book Appointment
          </LuxuryButton>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden p-2 rounded-lg border border-[#2C3A33]/20 text-[#2C3A33] hover:bg-[#F4F1EA]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-[#2C3A33]/15 px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3 font-medium text-sm text-[#2C3A33]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#2C3A33]/10"
            >
              Therapies & Massages
            </a>
            <a
              href="#couple-spa"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#2C3A33]/10"
            >
              Couple Spa Suite
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#2C3A33]/10"
            >
              Packages
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#2C3A33]/10"
            >
              Locations Served
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#2C3A33]/10"
            >
              Guest Reviews
            </a>
          </nav>

          <div className="pt-2">
            <LuxuryButton variant="gold" fullWidth onClick={() => { setMobileMenuOpen(false); onOpenBookingModal?.(); }}>
              Book Appointment
            </LuxuryButton>
          </div>
        </div>
      )}
    </header>
  );
};
