'use client';

/**
 * Standalone Enterprise Book Now Client Page Component
 * High-Converting CRO Layout, Trust Badges, Direct Call/WhatsApp Cards, FAQs
 */

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Award,
  HelpCircle,
  Star,
  Users,
  Car,
  Lock,
} from 'lucide-react';
import { HeaderNavigation } from '../ui/HeaderNavigation';
import { FooterSection } from '../ui/FooterSection';
import { BookingEngine } from './BookingEngine';
import { LuxuryButton } from '../ui/LuxuryButton';
import { LuxuryBadge } from '../ui/LuxuryBadge';
import { BUSINESS_DETAILS } from '../../constants/business';
import { SPA_TREATMENTS } from '../../constants/services';
import { LUCKNOW_LOCATIONS } from '../../constants/locations';
import { trackPhoneClick, trackWhatsAppClick } from '../../lib/analytics';

const BOOKING_FAQS = [
  {
    question: 'Is advance payment required to book a session?',
    answer:
      'No advance fee is required for standard individual reservations. You pay at our front desk after completing your spa session via Cash, UPI, Credit Card, or Debit Card.',
  },
  {
    question: 'How early should I arrive before my appointment?',
    answer:
      'We recommend arriving 10-15 minutes prior to your scheduled time. This allows you to enjoy our welcome herbal detox tea and discuss any specific muscle strain areas with your therapist.',
  },
  {
    question: 'Is free valet parking available at Gomti Nagar?',
    answer:
      'Yes! We offer complimentary valet parking directly at our entrance located opposite Brijwasi Bakery in Gomti Nagar, Lucknow.',
  },
  {
    question: 'Can I reschedule or cancel my appointment?',
    answer:
      'Yes. You can reschedule or cancel at any time free of charge by calling or messaging our reception on WhatsApp at least 1 hour prior to your slot.',
  },
  {
    question: 'Are couple suites private and soundproofed?',
    answer:
      'Yes, all couple suites at The Cloud Spa are 100% private, acoustically soundproofed, climate-controlled, and feature attached warm rain showers.',
  },
];

export function BookNowClientPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('book_now_hero_card');
    const msg = encodeURIComponent(
      `Hello The Cloud Spa Gomti Nagar, I would like to check instant appointment availability for today.`
    );
    window.open(`${BUSINESS_DETAILS.social.whatsapp}?text=${msg}`, '_blank');
  };

  const handlePhoneClick = () => {
    trackPhoneClick('book_now_hero_card');
    window.location.href = `tel:${BUSINESS_DETAILS.phone}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#2C3A33] selection:bg-[#C5A059] selection:text-white flex flex-col justify-between">
      <HeaderNavigation />

      <main>
        {/* HERO HEADER */}
        <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1E2522] via-[#242E29] to-[#1E2522] text-[#FAF9F5] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-xs text-[#C5A059]/80 font-medium">
              <Link href="/" className="hover:text-[#C5A059] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]/40" />
              <span className="text-[#FAF9F5] font-semibold">Reserve Session</span>
            </nav>

            <div className="space-y-3">
              <LuxuryBadge variant="gold" className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Direct Front Desk Booking
              </LuxuryBadge>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FAF9F5] leading-tight max-w-4xl mx-auto">
                Book Your VIP Spa & Massage Therapy Experience
              </h1>

              <p className="text-sm sm:text-base text-[#FAF9F5]/85 leading-relaxed font-light max-w-2xl mx-auto">
                Reserve certified Thai massage, deep tissue therapy, or couple rituals at Gomti Nagar, Lucknow. Zero advance fee required.
              </p>
            </div>

            {/* TRUST BADGES ROW */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-[#FAF9F5]/90 font-medium border-t border-[#C5A059]/20">
              <span className="flex items-center gap-1.5 text-[#C5A059]">
                <Star className="w-4 h-4 fill-[#C5A059]" /> Luxury Wellness Sanctuary
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" /> Experienced Therapists
              </span>
              <span className="flex items-center gap-1.5">
                <Car className="w-4 h-4 text-[#C5A059]" /> Free Valet Parking
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#C5A059]" /> Pay at Front Desk
              </span>
            </div>
          </div>
        </section>

        {/* MAIN BOOKING CONTENT AREA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT 8 COLS: MULTI-STEP BOOKING ENGINE */}
            <div className="lg:col-span-8 space-y-8">
              <BookingEngine source="book_now_page" />

              {/* SPA GUARANTEES GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-white p-5 rounded-2xl border border-[#2C3A33]/10 space-y-2 shadow-sm">
                  <Award className="w-6 h-6 text-[#C5A059]" />
                  <strong className="text-sm font-serif font-bold text-[#1E2522] block">
                    Certified Bodywork
                  </strong>
                  <p className="text-xs text-[#2C3A33]/70">
                    Experienced therapists skilled in Thai pressure points and deep tissue release.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#2C3A33]/10 space-y-2 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
                  <strong className="text-sm font-serif font-bold text-[#1E2522] block">
                    Sanitized Suites
                  </strong>
                  <p className="text-xs text-[#2C3A33]/70">
                    Fresh organic linens, UV-sanitized rooms, and organic essential oils.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#2C3A33]/10 space-y-2 shadow-sm">
                  <Clock className="w-6 h-6 text-[#C5A059]" />
                  <strong className="text-sm font-serif font-bold text-[#1E2522] block">
                    Instant Slot Lock
                  </strong>
                  <p className="text-xs text-[#2C3A33]/70">
                    Direct front desk synchronization via WhatsApp with no waiting lines.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT 4 COLS: FAST CONVERSION CARDS */}
            <div className="lg:col-span-4 space-y-8 sticky top-24">
              {/* INSTANT WHATSAPP / CALL CARD */}
              <div className="bg-gradient-to-br from-[#1E2522] via-[#242E29] to-[#1E2522] text-[#FAF9F5] p-6 sm:p-8 rounded-3xl border border-[#C5A059]/30 shadow-xl space-y-6">
                <div className="space-y-2">
                  <LuxuryBadge variant="gold">
                    Need Same-Day Slot?
                  </LuxuryBadge>
                  <h3 className="text-2xl font-serif font-bold text-[#FAF9F5]">
                    Fast Track Voice & Chat Booking
                  </h3>
                  <p className="text-xs text-[#FAF9F5]/80 leading-relaxed font-light">
                    Speak directly with our receptionist for instant slot verification and custom couple package requests.
                  </p>
                </div>

                <div className="space-y-3">
                  <LuxuryButton
                    variant="whatsapp"
                    fullWidth
                    size="md"
                    onClick={handleWhatsAppClick}
                    icon={<MessageCircle className="w-5 h-5" />}
                  >
                    WhatsApp Front Desk
                  </LuxuryButton>

                  <LuxuryButton
                    variant="gold"
                    fullWidth
                    size="md"
                    onClick={handlePhoneClick}
                    icon={<Phone className="w-4 h-4" />}
                  >
                    Call {BUSINESS_DETAILS.formattedPhone}
                  </LuxuryButton>
                </div>

                <div className="pt-4 border-t border-[#C5A059]/20 text-[11px] text-[#FAF9F5]/70 space-y-1">
                  <p className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" /> Open Today: 10:00 AM – 09:30 PM
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> Opp. Brijwasi Bakery, Gomti Nagar
                  </p>
                </div>
              </div>

              {/* POPULAR TREATMENTS QUICK LIST */}
              <div className="bg-white p-6 rounded-3xl border border-[#2C3A33]/10 shadow-sm space-y-4">
                <h4 className="font-serif font-bold text-base text-[#1E2522] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  Most Requested Therapies
                </h4>
                <div className="space-y-2 text-xs font-semibold">
                  {SPA_TREATMENTS.slice(0, 5).map((treatment) => (
                    <Link
                      key={treatment.id}
                      href={`/services/${treatment.slug}`}
                      className="p-2.5 rounded-xl bg-[#FAF9F5] hover:bg-[#C5A059] hover:text-white transition-all flex items-center justify-between text-[#1E2522]"
                    >
                      <span>{treatment.name}</span>
                      <span className="text-[11px] opacity-80">
                        ₹{treatment.priceINR[60] || treatment.priceINR[90]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BOOKING FAQS SECTION */}
          <div className="mt-16 bg-white p-8 sm:p-12 rounded-3xl border border-[#2C3A33]/10 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <LuxuryBadge variant="forest">
                Got Questions?
              </LuxuryBadge>
              <h2 className="text-3xl font-serif font-bold text-[#1E2522]">
                Booking & Reservation Policy FAQs
              </h2>
              <p className="text-xs sm:text-sm text-[#2C3A33]/75">
                Everything you need to know before visiting our Gomti Nagar wellness sanctuary.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {BOOKING_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-[#2C3A33]/10 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 bg-[#FAF9F5] hover:bg-[#F4F1E8] font-serif font-bold text-sm sm:text-base text-[#1E2522] flex items-center justify-between gap-4"
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
                    <div className="p-5 text-xs sm:text-sm text-[#2C3A33]/85 bg-white border-t border-[#2C3A33]/10 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
