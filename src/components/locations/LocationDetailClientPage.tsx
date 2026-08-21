'use client';

/**
 * Enterprise Locality Detail Client Component
 * Renders 1200-1800 words of rich, locality-specific local SEO content
 */

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Car,
  Star,
  ShieldCheck,
  MessageCircle,
  Calendar,
  Compass,
  Building2,
  Route,
  UserCheck,
  HelpCircle,
  ArrowRight,
  Heart,
  Award,
} from 'lucide-react';
import { HeaderNavigation } from '../ui/HeaderNavigation';
import { FooterSection } from '../ui/FooterSection';
import { BookingFormModal } from '../ui/BookingFormModal';
import { LuxuryButton } from '../ui/LuxuryButton';
import { LuxuryBadge } from '../ui/LuxuryBadge';
import { BUSINESS_DETAILS, getWhatsAppUrl } from '../../constants/business';
import { DetailedLocationSEO, LUCKNOW_LOCATIONS } from '../../constants/locations';
import { SPA_TREATMENTS } from '../../constants/services';

interface LocationDetailClientPageProps {
  location: DetailedLocationSEO;
}

export function LocationDetailClientPage({ location }: LocationDetailClientPageProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('thai-massage');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const otherLocations = LUCKNOW_LOCATIONS.filter((loc) => loc.slug !== location.slug);

  const handleOpenBooking = (treatmentSlug?: string) => {
    if (treatmentSlug) setSelectedTreatment(treatmentSlug);
    setIsBookingOpen(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#2C3A33] selection:bg-[#C5A059] selection:text-white flex flex-col justify-between">
      <HeaderNavigation onOpenBookingModal={() => handleOpenBooking()} />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1E2522] via-[#242E29] to-[#1E2522] text-[#FAF9F5] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-[#C5A059]/80 mb-6 font-medium">
              <Link href="/" className="hover:text-[#C5A059] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]/40" />
              <Link href="/locations" className="hover:text-[#C5A059] transition-colors">
                Locations
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]/40" />
              <span className="text-[#FAF9F5] font-semibold">{location.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <LuxuryBadge variant="gold" className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {location.distanceFromSpa}
                  </LuxuryBadge>
                  <LuxuryBadge variant="outline" className="border-[#FAF9F5]/30 text-[#FAF9F5] inline-flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#C5A059]" />
                    {location.drivingTime}
                  </LuxuryBadge>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF9F5] leading-tight">
                  Luxury Spa Services Near <span className="text-[#C5A059]">{location.name}</span>, Lucknow
                </h1>

                <p className="text-base sm:text-lg text-[#FAF9F5]/85 leading-relaxed font-light max-w-3xl">
                  {location.heroSubtitle}
                </p>

                {/* Key Landmarks Chips */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold block">
                    Nearby Key Landmarks Served:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {location.landmarks.map((landmark, idx) => (
                      <span
                        key={idx}
                        className="bg-[#2C3A33]/80 text-[#FAF9F5] text-xs px-3 py-1 rounded-full border border-[#C5A059]/30 flex items-center gap-1"
                      >
                        <Building2 className="w-3 h-3 text-[#C5A059]" />
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Rating & Trust Bar */}
                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-[#FAF9F5]/90 border-t border-[#C5A059]/20">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                    <span><strong className="text-[#FAF9F5]">Gomti Nagar Flagship</strong> Sanctuary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>Experienced Female & Male Therapists</span>
                  </div>
                </div>

                {/* Conversion Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <LuxuryButton variant="gold" size="lg" onClick={() => handleOpenBooking()}>
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </LuxuryButton>

                  <a
                    href={getWhatsAppUrl(`Hello The Cloud Spa, I am reaching out from ${location.name} to book a spa session.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuxuryButton variant="whatsapp" size="lg">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp {location.name} Booking
                    </LuxuryButton>
                  </a>

                  <a href={`tel:${BUSINESS_DETAILS.phone}`}>
                    <LuxuryButton variant="outline" size="lg" className="border-[#FAF9F5]/30 text-[#FAF9F5]">
                      <Phone className="w-4 h-4" />
                      Call Front Desk
                    </LuxuryButton>
                  </a>
                </div>
              </div>

              {/* Quick Navigation Card */}
              <div className="lg:col-span-4 bg-[#2C3A33]/90 backdrop-blur-md p-6 rounded-2xl border border-[#C5A059]/30 space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#FAF9F5] flex items-center gap-2 border-b border-[#C5A059]/20 pb-3">
                  <Navigation className="w-5 h-5 text-[#C5A059]" />
                  Locality Access Snapshot
                </h3>

                <div className="space-y-3 text-xs text-[#FAF9F5]/80">
                  <div>
                    <span className="text-[#C5A059] font-semibold block">Distance to Spa:</span>
                    <p className="font-medium text-[#FAF9F5] text-sm">{location.distanceFromSpa}</p>
                  </div>

                  <div>
                    <span className="text-[#C5A059] font-semibold block">Driving Duration:</span>
                    <p className="font-medium text-[#FAF9F5] text-sm">{location.drivingTime}</p>
                  </div>

                  <div>
                    <span className="text-[#C5A059] font-semibold block">Primary Route:</span>
                    <p className="text-[#FAF9F5]/90 leading-snug">{location.drivingRouteSummary}</p>
                  </div>

                  {location.nearestMetro && (
                    <div>
                      <span className="text-[#C5A059] font-semibold block">Nearest Metro Link:</span>
                      <p className="text-[#FAF9F5]/90">{location.nearestMetro}</p>
                    </div>
                  )}
                </div>

                <a
                  href={BUSINESS_DETAILS.social.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pt-2"
                >
                  <LuxuryButton variant="gold" fullWidth size="sm">
                    <Route className="w-4 h-4" />
                    Get Driving Directions
                  </LuxuryButton>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED LOCALITY CONTENT & DEEP NARRATIVE */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
          {/* Overview & Paragraphs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                <LuxuryBadge variant="forest">
                  Localized Wellness Guide
                </LuxuryBadge>
                <h2 className="text-3xl font-serif font-bold text-[#1E2522]">
                  Unmatched Luxury Spa Therapy Accessible from {location.name}
                </h2>
              </div>

              <div className="prose prose-stone max-w-none space-y-4 text-sm sm:text-base text-[#2C3A33]/85 leading-relaxed">
                {location.introParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="bg-white p-5 rounded-xl border border-[#2C3A33]/10 shadow-sm">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Target Audience & Lifestyle Pattern Card */}
              <div className="bg-[#F4F1E8] p-6 sm:p-8 rounded-2xl border border-[#2C3A33]/15 space-y-4">
                <h3 className="text-xl font-serif font-bold text-[#1E2522] flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#C5A059]" />
                  Wellness Context for {location.name} Residents & Workers
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white p-4 rounded-xl border border-[#2C3A33]/10">
                    <strong className="text-[#1E2522] block mb-1 font-semibold text-xs uppercase tracking-wider text-[#C5A059]">
                      Target Profile:
                    </strong>
                    <p className="text-[#2C3A33]/80">{location.localityContext.targetAudience}</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#2C3A33]/10">
                    <strong className="text-[#1E2522] block mb-1 font-semibold text-xs uppercase tracking-wider text-[#C5A059]">
                      Lifestyle Pattern:
                    </strong>
                    <p className="text-[#2C3A33]/80">{location.localityContext.lifestylePattern}</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#2C3A33]/10 space-y-2">
                  <strong className="text-[#1E2522] block font-semibold text-xs uppercase tracking-wider text-[#C5A059]">
                    Common Therapeutic Needs Solved:
                  </strong>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#2C3A33]/85">
                    {location.localityContext.commonWellnessNeeds.map((need, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Neighborhood Highlights Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-[#2C3A33]/10 shadow-sm space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#1E2522] flex items-center gap-2 border-b border-[#2C3A33]/10 pb-3">
                  <Award className="w-5 h-5 text-[#C5A059]" />
                  Neighborhood Highlights
                </h3>

                <div className="space-y-4">
                  {location.neighborhoodHighlights.map((hl, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4 className="font-semibold text-sm text-[#1E2522] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                        {hl.title}
                      </h4>
                      <p className="text-xs text-[#2C3A33]/75 leading-relaxed pl-5">
                        {hl.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instant Call Card */}
              <div className="bg-[#1E2522] text-[#FAF9F5] p-6 rounded-2xl border border-[#C5A059]/30 text-center space-y-3">
                <Phone className="w-8 h-8 text-[#C5A059] mx-auto" />
                <h4 className="font-serif font-bold text-base">
                  Visiting from {location.name}?
                </h4>
                <p className="text-xs text-[#FAF9F5]/75">
                  Our front desk receptionist will guide you through current traffic, valet parking, and slot availability.
                </p>
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="block pt-2">
                  <LuxuryButton variant="gold" fullWidth size="sm">
                    Call {BUSINESS_DETAILS.formattedPhone}
                  </LuxuryButton>
                </a>
              </div>
            </div>
          </div>

          {/* DRIVING DIRECTIONS STEPS */}
          <div className="bg-white p-8 rounded-3xl border border-[#2C3A33]/10 shadow-sm space-y-6">
            <div className="space-y-2">
              <LuxuryBadge variant="forest">
                Simple Route Guide
              </LuxuryBadge>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E2522] flex items-center gap-2">
                <Route className="w-6 h-6 text-[#C5A059]" />
                Driving Directions from {location.name} to The Cloud Spa
              </h2>
              <p className="text-xs sm:text-sm text-[#2C3A33]/80">
                Follow these simple steps to reach our Vivek Khand 4, Gomti Nagar center.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {location.drivingDirectionsDetailed.map((step) => (
                <div key={step.step} className="bg-[#FAF9F5] p-5 rounded-2xl border border-[#2C3A33]/10 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#1E2522] text-[#C5A059] font-bold text-xs flex items-center justify-center">
                    0{step.step}
                  </div>
                  <p className="text-xs sm:text-sm text-[#2C3A33]/85 font-medium leading-relaxed">
                    {step.instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RECOMMENDED SERVICES GRID */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <LuxuryBadge variant="gold">
                Top Treatments
              </LuxuryBadge>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E2522]">
                Recommended Massages for {location.name} Visitors
              </h2>
              <p className="text-xs sm:text-sm text-[#2C3A33]/80">
                Tailored for postural realignment, stress recovery, and luxury couple relaxation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {location.recommendedServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#2C3A33]/10 hover:border-[#C5A059] transition-all shadow-sm flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="bg-[#C5A059]/10 text-[#C5A059] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                        {service.badge}
                      </span>
                      <span className="text-xs text-[#2C3A33]/60 font-medium">
                        {service.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#1E2522]">
                      {service.name}
                    </h3>

                    <p className="text-xs text-[#2C3A33]/75 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2C3A33]/10 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-[#2C3A33]/60 block">Price starting:</span>
                      <span className="text-lg font-bold text-[#1E2522]">{service.price}</span>
                    </div>

                    <LuxuryButton
                      variant="forest"
                      size="sm"
                      onClick={() => handleOpenBooking(service.slug)}
                    >
                      Book Slot
                    </LuxuryButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GOOGLE MAP & ADDRESS CARD */}
          <div className="bg-[#1E2522] text-[#FAF9F5] p-8 sm:p-12 rounded-3xl border border-[#C5A059]/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <LuxuryBadge variant="gold">
                Map & Landmark Indicator
              </LuxuryBadge>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">
                Located Directly Opposite Brijwasi Bakery
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF9F5]/85 leading-relaxed">
                4/526 Vivek Khand 4, Gomti Nagar, Lucknow, Uttar Pradesh 226010. Situated 200 meters from Patrakarpuram Crossing with valet parking and direct ground floor accessibility.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={BUSINESS_DETAILS.social.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuxuryButton variant="gold">
                    <Navigation className="w-4 h-4" />
                    Open Google Maps
                  </LuxuryButton>
                </a>

                <a href={`tel:${BUSINESS_DETAILS.phone}`}>
                  <LuxuryButton variant="outline" className="border-[#FAF9F5]/30 text-[#FAF9F5]">
                    <Phone className="w-4 h-4" />
                    Call Front Desk
                  </LuxuryButton>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#242E29] p-6 rounded-2xl border border-[#C5A059]/20 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-2">
                <span className="font-semibold text-[#C5A059]">Operating Hours:</span>
                <span className="text-[#FAF9F5]">11:00 AM – 8:00 PM (7 Days)</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-2">
                <span className="font-semibold text-[#C5A059]">Distance from {location.name}:</span>
                <span className="text-[#FAF9F5]">{location.distanceFromSpa}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-2">
                <span className="font-semibold text-[#C5A059]">Drive Duration:</span>
                <span className="text-[#FAF9F5]">{location.drivingTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#C5A059]">Parking Assistance:</span>
                <span className="text-[#FAF9F5]">Free Valet Parking</span>
              </div>
            </div>
          </div>

          {/* LOCALITY FAQS */}
          <div className="bg-white p-8 rounded-3xl border border-[#2C3A33]/10 shadow-sm space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <LuxuryBadge variant="forest">
                Locality FAQs
              </LuxuryBadge>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E2522]">
                Frequently Asked Questions for {location.name} Guests
              </h2>
            </div>

            <div className="space-y-3 max-w-4xl mx-auto">
              {location.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-[#2C3A33]/10 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 bg-[#FAF9F5] hover:bg-[#F4F1E8] font-serif font-bold text-sm sm:text-base text-[#1E2522] flex items-center justify-between gap-4"
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
                    <div className="p-4 sm:p-5 text-xs sm:text-sm text-[#2C3A33]/85 bg-white border-t border-[#2C3A33]/10 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* VERIFIED CUSTOMER REVIEWS */}
          {location.reviews && location.reviews.length > 0 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <LuxuryBadge variant="gold">
                  Guest Testimonials
                </LuxuryBadge>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E2522]">
                  Guest Feedback from {location.name} & Nearby Visitors
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {location.reviews.map((rev, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-[#2C3A33]/10 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                        ))}
                      </div>
                      <span className="text-[11px] text-[#2C3A33]/50">{rev.datePublished}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#2C3A33]/85 italic leading-relaxed">
                      "{rev.comment}"
                    </p>

                    <div className="pt-2 border-t border-[#2C3A33]/10 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-[#1E2522] block font-bold">{rev.author}</strong>
                        <span className="text-[#C5A059]">{rev.locality}</span>
                      </div>
                      <span className="bg-[#FAF9F5] px-2.5 py-1 rounded text-[11px] font-semibold text-[#2C3A33]">
                        {rev.serviceName}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NEARBY LOCALITIES NAVIGATION (INTERNAL LINKING) */}
          <div className="bg-[#F4F1E8] p-8 rounded-3xl border border-[#2C3A33]/10 space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                Lucknow Neighborhood Directory
              </span>
              <h3 className="text-xl font-serif font-bold text-[#1E2522]">
                Explore Luxury Spa Services in Other Lucknow Localities
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {otherLocations.map((otherLoc) => (
                <Link
                  key={otherLoc.slug}
                  href={`/locations/${otherLoc.slug}`}
                  className="bg-white hover:bg-[#C5A059] hover:text-white transition-all p-3 rounded-xl border border-[#2C3A33]/10 text-center text-xs font-semibold text-[#1E2522] flex flex-col justify-center items-center gap-1 shadow-sm group"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-white transition-colors" />
                  <span className="truncate w-full">{otherLoc.name}</span>
                  <span className="text-[10px] text-[#2C3A33]/60 group-hover:text-white/80 font-normal">
                    {otherLoc.distanceFromSpa}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* RELATED TREATMENTS NAVIGATION */}
          <div className="bg-white p-8 rounded-3xl border border-[#2C3A33]/10 space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                Treatment Index
              </span>
              <h3 className="text-xl font-serif font-bold text-[#1E2522]">
                Popular Spa Treatments Available at The Cloud Spa
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              <Link
                href="/services/thai-massage"
                className="p-4 rounded-xl border border-[#2C3A33]/10 bg-[#FAF9F5] hover:border-[#C5A059] transition-all flex items-center justify-between"
              >
                <div>
                  <strong className="text-[#1E2522] block font-bold text-sm">Traditional Thai Massage</strong>
                  <span className="text-[#2C3A33]/70">Starting ₹2,499 • 60-120 mins</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#C5A059]" />
              </Link>

              <Link
                href="/services/deep-tissue-massage"
                className="p-4 rounded-xl border border-[#2C3A33]/10 bg-[#FAF9F5] hover:border-[#C5A059] transition-all flex items-center justify-between"
              >
                <div>
                  <strong className="text-[#1E2522] block font-bold text-sm">Deep Tissue Recovery</strong>
                  <span className="text-[#2C3A33]/70">Starting ₹2,799 • 60-90 mins</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#C5A059]" />
              </Link>

              <Link
                href="/services/couple-spa"
                className="p-4 rounded-xl border border-[#2C3A33]/10 bg-[#FAF9F5] hover:border-[#C5A059] transition-all flex items-center justify-between"
              >
                <div>
                  <strong className="text-[#1E2522] block font-bold text-sm">Royal Couple Spa Suite</strong>
                  <span className="text-[#2C3A33]/70">Starting ₹5,999 • VIP Suite</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#C5A059]" />
              </Link>

              <Link
                href="/services/balinese-massage"
                className="p-4 rounded-xl border border-[#2C3A33]/10 bg-[#FAF9F5] hover:border-[#C5A059] transition-all flex items-center justify-between"
              >
                <div>
                  <strong className="text-[#1E2522] block font-bold text-sm">Balinese Aromatherapy</strong>
                  <span className="text-[#2C3A33]/70">Starting ₹2,499 • Relaxing</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#C5A059]" />
              </Link>

              <Link
                href="/services/swedish-massage"
                className="p-4 rounded-xl border border-[#2C3A33]/10 bg-[#FAF9F5] hover:border-[#C5A059] transition-all flex items-center justify-between"
              >
                <div>
                  <strong className="text-[#1E2522] block font-bold text-sm">Swedish Gentle Relaxation</strong>
                  <span className="text-[#2C3A33]/70">Starting ₹2,499 • Effleurage</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#C5A059]" />
              </Link>

              <Link
                href="/services"
                className="p-4 rounded-xl border border-[#C5A059]/40 bg-[#C5A059]/10 hover:bg-[#C5A059] hover:text-white transition-all flex items-center justify-between group"
              >
                <div>
                  <strong className="block font-bold text-sm group-hover:text-white">View All Spa Services</strong>
                  <span className="text-[#2C3A33]/70 group-hover:text-white/80">12+ Treatment Options</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:text-white" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />

      <BookingFormModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedTreatmentId={selectedTreatment}
      />
    </div>
  );
}
