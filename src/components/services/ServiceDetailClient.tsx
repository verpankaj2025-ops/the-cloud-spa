'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  Star,
  ArrowRight,
  Calendar,
  Award,
  MapPin,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Info,
} from 'lucide-react';
import { SpaTreatment, TargetLocalitySEO } from '../../types/spa';
import { BUSINESS_DETAILS } from '../../constants/business';
import { HeaderNavigation } from '../ui/HeaderNavigation';
import { FooterSection } from '../ui/FooterSection';
import { LuxuryButton } from '../ui/LuxuryButton';
import { BookingFormModal } from '../ui/BookingFormModal';

interface ServiceDetailClientProps {
  treatment: SpaTreatment;
  relatedTreatments: SpaTreatment[];
  localities: TargetLocalitySEO[];
}

export const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({
  treatment,
  relatedTreatments,
  localities,
}) => {
  const [selectedDuration, setSelectedDuration] = useState<number>(
    treatment.durationMinutes[0]
  );
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const selectedPrice =
    treatment.priceINR[selectedDuration] ||
    Object.values(treatment.priceINR)[0];

  const handleWhatsAppBooking = () => {
    const message = `Hello The Cloud Spa Gomti Nagar,
I would like to enquire / book the following treatment:
- Therapy: ${treatment.name}
- Duration: ${selectedDuration} Minutes (₹${selectedPrice.toLocaleString('en-IN')})

Please share slot availability.`;
    window.open(`${BUSINESS_DETAILS.social.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1A1C1A] selection:bg-[#C5A059] selection:text-white flex flex-col justify-between font-sans">
      <HeaderNavigation onOpenBookingModal={() => setBookingModalOpen(true)} />

      <main className="flex-1 pb-24 md:pb-12">
        {/* Breadcrumb & Top Bar */}
        <div className="bg-[#1E2522] text-[#FAF9F5] py-4 px-4 sm:px-8 border-b border-[#C5A059]/20">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-medium">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 overflow-x-auto text-[#C5A059]">
              <Link href="/" className="hover:underline shrink-0">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <Link href="/services" className="hover:underline shrink-0">Services</Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[#FAF9F5] shrink-0 font-bold">{treatment.name}</span>
            </nav>

            <span className="hidden sm:inline-flex items-center gap-1 text-[#C5A059]">
              <MapPin className="w-3.5 h-3.5" /> Gomti Nagar, Lucknow
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[#1E2522] text-[#FAF9F5] py-12 md:py-16 px-4 sm:px-8 border-b border-[#C5A059]/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading & Key Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2C3A33] border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> {treatment.category.toUpperCase()} THERAPY
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#FAF9F5] leading-tight">
                {treatment.name}
              </h1>

              <p className="text-base sm:text-lg font-medium text-[#C5A059]">
                {treatment.tagline}
              </p>

              <p className="text-sm sm:text-base text-[#FAF9F5]/80 font-light leading-relaxed">
                {treatment.shortDescription}
              </p>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#FAF9F5]/90">
                <div className="flex items-center gap-2 bg-[#2C3A33]/80 p-3 rounded-xl border border-[#C5A059]/20">
                  <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  <span>Luxury Sanctuary</span>
                </div>
                <div className="flex items-center gap-2 bg-[#2C3A33]/80 p-3 rounded-xl border border-[#C5A059]/20">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Experienced Therapists</span>
                </div>
                <div className="flex items-center gap-2 bg-[#2C3A33]/80 p-3 rounded-xl border border-[#C5A059]/20 col-span-2 sm:col-span-1">
                  <Award className="w-4 h-4 text-[#C5A059]" />
                  <span>Premium Organic Oils</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <LuxuryButton
                  variant="gold"
                  size="lg"
                  onClick={() => setBookingModalOpen(true)}
                  icon={<Calendar className="w-5 h-5" />}
                >
                  Book Appointment
                </LuxuryButton>

                <LuxuryButton
                  variant="whatsapp"
                  size="lg"
                  onClick={handleWhatsAppBooking}
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  WhatsApp Booking
                </LuxuryButton>

                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#FAF9F5]/30 text-xs font-bold text-[#FAF9F5] hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call {BUSINESS_DETAILS.formattedPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Treatment Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border-2 border-[#C5A059]/30 shadow-2xl">
                <Image
                  src={treatment.image.src}
                  alt={treatment.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#1E2522]/90 backdrop-blur-md p-4 rounded-xl border border-[#C5A059]/30 text-xs text-[#FAF9F5]">
                  <p className="font-semibold text-[#C5A059]">The Cloud Spa • Gomti Nagar</p>
                  <p className="text-[11px] text-[#FAF9F5]/80">Private temperature-controlled suites with soothing ambient soundscapes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI OVERVIEW OPTIMIZED DIRECT ANSWER BOX (Google SGE / AI Overview Ready) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="bg-[#2C3A33] text-[#FAF9F5] p-6 sm:p-8 rounded-2xl border-2 border-[#C5A059]/40 shadow-lg space-y-4">
            <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
              <Info className="w-4 h-4" /> AI Overview & Direct Treatment Summary
            </div>

            <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#FAF9F5]">
              At a Glance: {treatment.name} in Lucknow
            </h2>

            <p className="text-sm text-[#FAF9F5]/90 leading-relaxed font-light">
              {treatment.aiOverview.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#1E2522] p-4 rounded-xl border border-[#C5A059]/20 space-y-2">
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                  Key Features & Methodology:
                </span>
                <ul className="space-y-1.5 text-xs text-[#FAF9F5]/80">
                  {treatment.aiOverview.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E2522] p-4 rounded-xl border border-[#C5A059]/20 space-y-3 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
                    Ideal Duration:
                  </span>
                  <p className="text-xs text-[#FAF9F5]/90">{treatment.aiOverview.idealDuration}</p>
                </div>

                <div className="pt-2 border-t border-[#C5A059]/20">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
                    Expected Outcome:
                  </span>
                  <p className="text-xs text-[#FAF9F5]/90">{treatment.aiOverview.expectedOutcome}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Duration Selection Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#2C3A33]/10 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                Transparent Pricing
              </span>
              <h2 className="text-2xl font-serif-heading font-bold text-[#1A1C1A]">
                Select Duration & Pricing Options
              </h2>
              <p className="text-xs text-[#767B78]">
                All prices are in Indian Rupees (INR). Includes full access to shower room, herbal green tea, and disposable spa attire.
              </p>
            </div>

            {/* Duration Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {treatment.durationMinutes.map((mins) => {
                const price = treatment.priceINR[mins];
                const isSelected = selectedDuration === mins;

                return (
                  <button
                    key={mins}
                    type="button"
                    onClick={() => setSelectedDuration(mins)}
                    className={`
                      p-5 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden flex flex-col justify-between space-y-3
                      ${
                        isSelected
                          ? 'bg-[#2C3A33] text-white border-[#C5A059] shadow-md'
                          : 'bg-[#FAF9F5] text-[#1A1C1A] border-[#2C3A33]/15 hover:border-[#C5A059]'
                      }
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-[#C5A059]' : 'text-[#767B78]'}`}>
                        {mins} Minutes
                      </span>
                      {isSelected && (
                        <span className="bg-[#C5A059] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                          Selected
                        </span>
                      )}
                    </div>

                    <div>
                      <span className="text-2xl font-bold font-serif-heading">
                        ₹{price ? price.toLocaleString('en-IN') : 'N/A'}
                      </span>
                      <span className={`block text-[11px] mt-0.5 ${isSelected ? 'text-[#FAF9F5]/80' : 'text-[#767B78]'}`}>
                        Full Body Session
                      </span>
                    </div>

                    <div className="pt-2 border-t border-current/10 text-[11px] font-medium flex items-center justify-between">
                      <span>Instant Confirmation</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* CTA Trigger */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF9F5] p-4 rounded-xl border border-[#2C3A33]/10">
              <div>
                <p className="text-xs font-bold text-[#1A1C1A]">
                  Selected: {treatment.name} ({selectedDuration} Mins - ₹{selectedPrice.toLocaleString('en-IN')})
                </p>
                <p className="text-[11px] text-[#767B78]">
                  Open 7 Days • 11:00 AM – 8:00 PM • Gomti Nagar, Lucknow
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <LuxuryButton
                  variant="gold"
                  size="md"
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full sm:w-auto"
                >
                  Book Selected Slot
                </LuxuryButton>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Full Description & Benefits */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content Body */}
            <div className="lg:col-span-8 space-y-8">
              {/* Full Description */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2C3A33]/10 space-y-4 shadow-sm">
                <h2 className="text-2xl font-serif-heading font-bold text-[#1A1C1A]">
                  About {treatment.name}
                </h2>
                <p className="text-sm text-[#2C3A33]/90 leading-relaxed font-light">
                  {treatment.fullDescription}
                </p>
              </div>

              {/* Benefits Section */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2C3A33]/10 space-y-4 shadow-sm">
                <h2 className="text-2xl font-serif-heading font-bold text-[#1A1C1A]">
                  Therapeutic Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatment.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF9F5] border border-[#2C3A33]/10">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-[#1A1C1A]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Is It For */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2C3A33]/10 space-y-4 shadow-sm">
                <h2 className="text-2xl font-serif-heading font-bold text-[#1A1C1A]">
                  Who Is This Treatment Ideal For?
                </h2>
                <div className="flex flex-wrap gap-2">
                  {treatment.popularFor.map((target, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 rounded-xl bg-[#2C3A33] text-[#FAF9F5] text-xs font-semibold border border-[#C5A059]/30"
                    >
                      {target}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contraindications */}
              <div className="bg-amber-50/60 p-6 sm:p-8 rounded-2xl border border-amber-200 space-y-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-lg">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <h2>Medical Guidelines & Contraindications</h2>
                </div>
                <p className="text-xs text-amber-800">
                  Please consult our spa receptionist or your physician before booking if any of the following apply to you:
                </p>
                <ul className="space-y-2">
                  {treatment.contraindications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-amber-900 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preparation & Aftercare */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-[#2C3A33]/10 space-y-3 shadow-sm">
                  <h2 className="text-lg font-serif-heading font-bold text-[#1A1C1A]">
                    Pre-Session Preparation
                  </h2>
                  <ul className="space-y-2 text-xs text-[#767B78]">
                    {treatment.preparation.map((prep, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-bold text-[#C5A059]">{idx + 1}.</span>
                        <span>{prep}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#2C3A33]/10 space-y-3 shadow-sm">
                  <h2 className="text-lg font-serif-heading font-bold text-[#1A1C1A]">
                    Post-Session Aftercare Guide
                  </h2>
                  <ul className="space-y-2 text-xs text-[#767B78]">
                    {treatment.aftercare.map((care, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-bold text-[#C5A059]">{idx + 1}.</span>
                        <span>{care}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQs Accordion */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2C3A33]/10 space-y-6 shadow-sm">
                <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
                </div>
                <h2 className="text-2xl font-serif-heading font-bold text-[#1A1C1A]">
                  Questions About {treatment.name}
                </h2>

                <div className="space-y-3">
                  {treatment.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-[#2C3A33]/10 rounded-xl overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#1A1C1A] bg-[#FAF9F5] hover:bg-[#F4F1EA] transition-colors flex justify-between items-center gap-3"
                        >
                          <span>{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-[#C5A059] shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#767B78] shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="p-4 bg-white text-xs text-[#767B78] leading-relaxed border-t border-[#2C3A33]/10">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 bg-white p-6 rounded-2xl border border-[#2C3A33]/10 shadow-lg space-y-6">
                <div className="border-b border-[#2C3A33]/10 pb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] block">
                    Fast Track Reservation
                  </span>
                  <h3 className="text-xl font-serif-heading font-bold text-[#1A1C1A] mt-1">
                    Book {treatment.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#767B78]">Location:</span>
                    <span className="font-bold text-[#1A1C1A]">Gomti Nagar, Lucknow</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#767B78]">Hours:</span>
                    <span className="font-bold text-[#1A1C1A]">11:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#767B78]">Starting Price:</span>
                    <span className="font-bold text-[#C5A059]">₹{selectedPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <LuxuryButton
                    variant="gold"
                    fullWidth
                    onClick={() => setBookingModalOpen(true)}
                  >
                    Reserve Session Slot
                  </LuxuryButton>

                  <LuxuryButton
                    variant="whatsapp"
                    fullWidth
                    onClick={handleWhatsAppBooking}
                    icon={<MessageCircle className="w-4 h-4" />}
                  >
                    Instant WhatsApp
                  </LuxuryButton>

                  <a
                    href={`tel:${BUSINESS_DETAILS.phone}`}
                    className="w-full py-3 rounded-xl border border-[#2C3A33]/20 font-bold text-xs text-[#2C3A33] hover:bg-[#FAF9F5] text-center block transition-colors"
                  >
                    Call Spa Reception
                  </a>
                </div>

                <div className="pt-4 border-t border-[#2C3A33]/10 text-center space-y-1 text-[11px] text-[#767B78]">
                  <p>📍 Near Brijwasi Bakery, Vivek Khand 4, Gomti Nagar</p>
                  <p>✓ Zero cancellation fee before 2 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Spa Services */}
        {relatedTreatments.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 border-t border-[#2C3A33]/10 space-y-6">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block">
                  Explore Catalog
                </span>
                <h2 className="text-2xl font-serif-heading font-bold text-[#1A1C1A]">
                  Related Spa Treatments You May Enjoy
                </h2>
              </div>
              <Link href="/services" className="text-xs font-bold text-[#C5A059] hover:underline hidden sm:inline-flex items-center gap-1">
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTreatments.map((rel) => {
                const startPrice =
                  rel.priceINR[60] || Object.values(rel.priceINR)[0];
                return (
                  <article
                    key={rel.id}
                    className="bg-white rounded-2xl border border-[#2C3A33]/10 overflow-hidden hover:shadow-lg transition-all space-y-3 p-4 flex flex-col justify-between"
                  >
                    <div className="relative h-40 rounded-xl overflow-hidden bg-neutral-100">
                      <Image
                        src={rel.image.src}
                        alt={rel.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif-heading font-bold text-base text-[#1A1C1A]">
                        <Link href={`/services/${rel.slug}`} className="hover:text-[#C5A059]">
                          {rel.name}
                        </Link>
                      </h3>
                      <p className="text-xs text-[#767B78] line-clamp-2 mt-1">
                        {rel.shortDescription}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#2C3A33]/10 flex justify-between items-center text-xs">
                      <span className="font-bold text-[#C5A059]">Starts ₹{startPrice.toLocaleString('en-IN')}</span>
                      <Link
                        href={`/services/${rel.slug}`}
                        className="text-xs font-bold text-[#2C3A33] hover:text-[#C5A059] flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* Localities Served Links */}
        <section className="bg-[#1E2522] text-[#FAF9F5] py-12 px-4 sm:px-8 mt-12">
          <div className="max-w-7xl mx-auto space-y-6 text-center">
            <h2 className="text-xl font-serif-heading font-bold text-[#FAF9F5]">
              {treatment.name} Available for Guests Across Lucknow
            </h2>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              {localities.map((loc) => (
                <span
                  key={loc.slug}
                  className="bg-[#2C3A33] text-[#FAF9F5]/90 px-3 py-1.5 rounded-lg border border-[#C5A059]/20"
                >
                  {loc.name} ({loc.distanceFromSpa})
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1E2522] border-t border-[#C5A059]/30 p-3 md:hidden backdrop-blur-md shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_DETAILS.phone}`}
          className="flex-1 py-3 bg-[#2C3A33] text-white rounded-xl text-center font-bold text-xs flex items-center justify-center gap-1 border border-[#C5A059]/20"
        >
          <Phone className="w-4 h-4 text-[#C5A059]" />
          <span>Call</span>
        </a>

        <button
          type="button"
          onClick={() => setBookingModalOpen(true)}
          className="flex-[2] py-3 bg-[#C5A059] text-white rounded-xl text-center font-bold text-xs shadow-md"
        >
          Book Appointment
        </button>

        <a
          href={`${BUSINESS_DETAILS.social.whatsapp}?text=${encodeURIComponent(
            `Hello The Cloud Spa, I want to book ${treatment.name}`
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-3 bg-[#25D366] text-white rounded-xl text-center font-bold text-xs flex items-center justify-center gap-1"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>

      <FooterSection />

      <BookingFormModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preSelectedTreatmentId={treatment.id}
      />
    </div>
  );
};
