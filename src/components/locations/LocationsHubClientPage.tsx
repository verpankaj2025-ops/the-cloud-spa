'use client';

/**
 * Enterprise Locations Hub Client Component
 * Local SEO Hub covering 11 key zones in Lucknow
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
  Search,
  CheckCircle2,
  Car,
  Star,
  ShieldCheck,
  MessageCircle,
  Calendar,
  Compass,
} from 'lucide-react';
import { HeaderNavigation } from '../ui/HeaderNavigation';
import { FooterSection } from '../ui/FooterSection';
import { BookingFormModal } from '../ui/BookingFormModal';
import { LuxuryButton } from '../ui/LuxuryButton';
import { LuxuryBadge } from '../ui/LuxuryBadge';
import { BUSINESS_DETAILS, getWhatsAppUrl } from '../../constants/business';
import { LUCKNOW_LOCATIONS, DetailedLocationSEO } from '../../constants/locations';
import { SPA_TREATMENTS } from '../../constants/services';

export function LocationsHubClientPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('thai-massage');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = LUCKNOW_LOCATIONS.filter((loc) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      loc.name.toLowerCase().includes(q) ||
      loc.landmarks.some((lm) => lm.toLowerCase().includes(q)) ||
      loc.introParagraphs.some((p) => p.toLowerCase().includes(q)) ||
      loc.primaryKeywords.some((kw) => kw.toLowerCase().includes(q))
    );
  });

  const handleOpenBooking = (treatmentSlug?: string) => {
    if (treatmentSlug) setSelectedTreatment(treatmentSlug);
    setIsBookingOpen(true);
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
              <span className="text-[#FAF9F5]">Locations Directory</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <LuxuryBadge variant="gold" className="inline-flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  Lucknow Local SEO Directory
                </LuxuryBadge>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF9F5] leading-tight">
                  Luxury Spa Locations & Neighborhood Coverage Across <span className="text-[#C5A059]">Lucknow</span>
                </h1>

                <p className="text-base sm:text-lg text-[#FAF9F5]/85 leading-relaxed font-light max-w-2xl">
                  Discover The Cloud Spa’s five-star wellness sanctuary. Headquartered at Vivek Khand 4, Gomti Nagar, we serve 11 prime localities across Lucknow with authentic Thai stretch therapy, deep tissue massage, and VIP couple spa suites.
                </p>

                {/* Quick Trust Bar */}
                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-[#FAF9F5]/90">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                    <span><strong className="text-[#FAF9F5]">Luxury Wellness</strong> Sanctuary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C5A059]" />
                    <span>Vivek Khand 4, Gomti Nagar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>Experienced Wellness Professionals</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <LuxuryButton variant="gold" size="lg" onClick={() => handleOpenBooking()}>
                    <Calendar className="w-4 h-4" />
                    Book Spa Appointment
                  </LuxuryButton>
                  <a
                    href={getWhatsAppUrl('Hello The Cloud Spa, I would like to query spa services and directions.')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuxuryButton variant="whatsapp" size="lg">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Query
                    </LuxuryButton>
                  </a>
                  <a href={`tel:${BUSINESS_DETAILS.phone}`}>
                    <LuxuryButton variant="outline" size="lg" className="border-[#FAF9F5]/30 text-[#FAF9F5] hover:bg-[#FAF9F5]/10">
                      <Phone className="w-4 h-4" />
                      Call {BUSINESS_DETAILS.formattedPhone}
                    </LuxuryButton>
                  </a>
                </div>
              </div>

              {/* Interactive Locality Search Card */}
              <div className="lg:col-span-5 bg-[#2C3A33]/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#C5A059]/30 shadow-2xl">
                <h2 className="text-xl font-serif font-bold text-[#FAF9F5] mb-2 flex items-center gap-2">
                  <Search className="w-5 h-5 text-[#C5A059]" />
                  Find Spa Near Your Area
                </h2>
                <p className="text-xs text-[#FAF9F5]/70 mb-4">
                  Search by locality, street landmark, or office complex in Lucknow.
                </p>

                <div className="relative mb-4">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search e.g. Vibhuti Khand, High Court, Bhootnath..."
                    className="w-full bg-[#1E2522] border border-[#C5A059]/40 rounded-xl px-4 py-3 text-sm text-[#FAF9F5] placeholder-[#FAF9F5]/50 focus:outline-none focus:border-[#C5A059]"
                  />
                  <Search className="absolute right-3.5 top-3.5 w-4 h-4 text-[#C5A059]" />
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                  {filteredLocations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-[#1E2522]/60 hover:bg-[#C5A059]/20 transition-all border border-[#C5A059]/10 text-xs"
                    >
                      <div>
                        <span className="font-semibold text-[#FAF9F5] block">{loc.name}</span>
                        <span className="text-[11px] text-[#C5A059]">{loc.distanceFromSpa} • {loc.drivingTime}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#C5A059]" />
                    </Link>
                  ))}
                  {filteredLocations.length === 0 && (
                    <p className="text-xs text-[#FAF9F5]/60 text-center py-4">
                      No matching locality found. Our Gomti Nagar spa center serves all areas in Lucknow!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCALITIES GRID SECTION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <LuxuryBadge variant="forest" className="mb-3">
              11 Targeted Localities
            </LuxuryBadge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E2522]">
              Explore Spa Destinations Across Lucknow
            </h2>
            <p className="text-sm sm:text-base text-[#2C3A33]/80 mt-3">
              Click on any locality to view detailed driving directions, landmark proximity, neighborhood wellness needs, and nearby service recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LUCKNOW_LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white rounded-2xl p-6 border border-[#2C3A33]/10 hover:border-[#C5A059] transition-all shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#2C3A33]/5 text-[#2C3A33]">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      {loc.distanceFromSpa}
                    </span>
                    <span className="text-xs text-[#C5A059] font-medium flex items-center gap-1">
                      <Car className="w-3.5 h-3.5" />
                      {loc.drivingTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#1E2522] group-hover:text-[#C5A059] transition-colors mb-2">
                    {loc.name}
                  </h3>

                  <p className="text-xs text-[#2C3A33]/75 line-clamp-3 mb-4 leading-relaxed">
                    {loc.introParagraphs[0]}
                  </p>

                  <div className="space-y-1.5 mb-5 text-xs text-[#2C3A33]/80">
                    <span className="font-semibold text-[#1E2522] block mb-1">Key Landmarks:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.landmarks.map((lm, i) => (
                        <span key={i} className="bg-[#FAF9F5] px-2 py-0.5 rounded text-[11px] border border-[#2C3A33]/10">
                          {lm}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2C3A33]/10 flex items-center justify-between gap-3">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C3A33] group-hover:text-[#C5A059] transition-colors"
                  >
                    <span>Locality Page</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleOpenBooking('thai-massage')}
                    className="text-xs font-semibold text-[#C5A059] hover:underline"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CITY-WIDE WELLNESS NARRATIVE */}
        <section className="py-16 bg-[#F4F1E8] border-y border-[#2C3A33]/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <LuxuryBadge variant="gold">
                Enterprise Local SEO Engine
              </LuxuryBadge>
              <h2 className="text-3xl font-serif font-bold text-[#1E2522]">
                Lucknow’s Most Trusted Wellness & Massage Destination
              </h2>
              <p className="text-sm text-[#2C3A33]/80 max-w-2xl mx-auto">
                Connecting corporate professionals, local residents, shopping enthusiasts, and luxury seekers directly to experienced bodywork specialists in Gomti Nagar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#2C3A33]/85 leading-relaxed">
              <div className="bg-white p-6 rounded-2xl border border-[#2C3A33]/10 space-y-3">
                <h3 className="font-serif font-bold text-lg text-[#1E2522]">
                  Central Flagship Location in Vivek Khand 4
                </h3>
                <p>
                  The Cloud Spa was strategically established in Vivek Khand 4, Gomti Nagar—right opposite Brijwasi Bakery and 200 meters from Patrakarpuram Crossing. This location places our luxury spa center at the geometric center of Lucknow’s most vibrant residential and commercial corridors.
                </p>
                <p>
                  Whether traveling from Vibhuti Khand corporate IT parks, Hazratganj via Lohia Path, or Sushant Golf City via Shaheed Path Expressway, our facility offers instant accessibility with zero traffic hassle and free valet parking.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#2C3A33]/10 space-y-3">
                <h3 className="font-serif font-bold text-lg text-[#1E2522]">
                  Uncompromising Hygiene & Certified Expertise
                </h3>
                <p>
                  We maintain strict international spa hygiene standards. Every private therapy suite undergoes thorough sanitization between appointments, utilizing medical-grade air purifiers, freshly laundered 100% cotton linens, and disposable therapy garments.
                </p>
                <p>
                  All our male and female therapists hold formal certifications in traditional Wat Pho Thai bodywork, Balinese pressure point techniques, and deep tissue myofascial release, ensuring safe, effective, and deeply satisfying treatment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MAP & LOCATION CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-[#1E2522] text-[#FAF9F5] rounded-3xl p-8 sm:p-12 border border-[#C5A059]/30 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-5">
                <LuxuryBadge variant="gold">
                  Navigation & Driving Access
                </LuxuryBadge>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold">
                  Visit Our Flagship Spa Center in Gomti Nagar
                </h2>
                <div className="space-y-2 text-xs sm:text-sm text-[#FAF9F5]/85">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> {BUSINESS_DETAILS.address.fullAddress}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Opening Hours:</strong> Monday – Sunday, 11:00 AM – 8:00 PM</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Car className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Parking:</strong> Free Reserved Parking & Complimentary Valet Assistance</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={BUSINESS_DETAILS.social.googleBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuxuryButton variant="gold">
                      <Navigation className="w-4 h-4" />
                      Open Google Maps Directions
                    </LuxuryButton>
                  </a>
                  <LuxuryButton variant="outline" className="border-[#FAF9F5]/30 text-[#FAF9F5]" onClick={() => handleOpenBooking()}>
                    <Calendar className="w-4 h-4" />
                    Reserve Therapy Slot
                  </LuxuryButton>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#242E29] p-6 rounded-2xl border border-[#C5A059]/20 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#FAF9F5]">
                  Need Directions or Help Booking?
                </h3>
                <p className="text-xs text-[#FAF9F5]/75">
                  Call our front desk receptionist for real-time traffic guidance or treatment consultations.
                </p>
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="block">
                  <span className="text-xl font-bold text-[#C5A059] block hover:underline">
                    {BUSINESS_DETAILS.formattedPhone}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATIONS HUB FAQS */}
        <section className="py-16 bg-[#FAF9F5] border-t border-[#2C3A33]/10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <LuxuryBadge variant="forest">
              Location & Accessibility FAQs
            </LuxuryBadge>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E2522] mt-2">
              Frequently Asked Questions About Visiting The Cloud Spa
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Which areas in Lucknow does The Cloud Spa serve?',
                a: 'Our flagship spa is located in Vivek Khand 4, Gomti Nagar. We serve guests from Gomti Nagar, Vibhuti Khand, Vivek Khand, Vipul Khand, Patrakarpuram, Indira Nagar, Hazratganj, Aliganj, Sushant Golf City, Chinhat, Jankipuram, and all surrounding sectors.',
              },
              {
                q: 'How far is the spa from Patrakarpuram Crossing?',
                a: 'We are located only 300 meters from Patrakarpuram Crossing, right opposite Brijwasi Bakery in Vivek Khand 4.',
              },
              {
                q: 'Is parking available when coming from other localities?',
                a: 'Yes! We provide complimentary reserved parking and valet assistance for all our spa guests right outside our building.',
              },
              {
                q: 'How do I book an appointment if I am traveling from Hazratganj or Sushant Golf City?',
                a: 'You can easily book online using our instant booking form, or call us at 9455671995 or message us on WhatsApp. We recommend booking 1 to 2 hours prior to your visit.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-[#2C3A33]/10 space-y-2">
                <h3 className="font-serif font-bold text-base text-[#1E2522] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#2C3A33]/80 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
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
