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
  Search,
  Filter,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Star,
  ArrowRight,
} from 'lucide-react';
import { SpaTreatment, TargetLocalitySEO } from '../../types/spa';
import { BUSINESS_DETAILS } from '../../constants/business';
import { HeaderNavigation } from '../ui/HeaderNavigation';
import { FooterSection } from '../ui/FooterSection';
import { LuxuryButton } from '../ui/LuxuryButton';
import { BookingFormModal } from '../ui/BookingFormModal';

interface ServicesDirectoryClientProps {
  treatments: SpaTreatment[];
  localities: TargetLocalitySEO[];
}

export const ServicesDirectoryClient: React.FC<ServicesDirectoryClientProps> = ({
  treatments,
  localities,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [activeTreatmentId, setActiveTreatmentId] = useState<string | undefined>(undefined);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'massage', label: 'Massages & Therapies' },
    { id: 'couple', label: 'Couple Suite' },
    { id: 'hydrotherapy', label: 'Hydrotherapy & Jacuzzi' },
    { id: 'body-care', label: 'Body Care & Scrubs' },
  ];

  const filteredTreatments = treatments.filter((treatment) => {
    const matchesCategory =
      selectedCategory === 'all' || treatment.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      treatment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treatment.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treatment.targetKeywords.some((kw) =>
        kw.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const handleOpenBooking = (treatmentId?: string) => {
    setActiveTreatmentId(treatmentId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1A1C1A] selection:bg-[#C5A059] selection:text-white flex flex-col justify-between font-sans">
      <HeaderNavigation onOpenBookingModal={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#1E2522] text-[#FAF9F5] py-16 md:py-24 px-4 sm:px-8 border-b border-[#C5A059]/20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
            <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5A059] bg-[#2C3A33] px-3.5 py-1.5 rounded-full border border-[#C5A059]/30">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#FAF9F5]/90">Services Catalog</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold tracking-tight text-[#FAF9F5] max-w-4xl mx-auto leading-tight">
              Luxury Spa Treatments & Therapies in Gomti Nagar, Lucknow
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#FAF9F5]/80 max-w-3xl mx-auto font-light leading-relaxed">
              Explore Lucknow&apos;s premier catalog of therapeutic bodywork, Thai stretching, Balinese aromatherapy, deep tissue pain recovery, private couple Jacuzzi packages, and detox hydrotherapy.
            </p>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-medium text-[#C5A059]">
              <span className="flex items-center gap-1.5 bg-[#2C3A33]/80 px-3 py-1.5 rounded-lg border border-[#C5A059]/20">
                <Star className="w-4 h-4 fill-[#C5A059]" /> Luxury Wellness Sanctuary
              </span>
              <span className="flex items-center gap-1.5 bg-[#2C3A33]/80 px-3 py-1.5 rounded-lg border border-[#C5A059]/20">
                <ShieldCheck className="w-4 h-4" /> Experienced Wellness Professionals
              </span>
              <span className="flex items-center gap-1.5 bg-[#2C3A33]/80 px-3 py-1.5 rounded-lg border border-[#C5A059]/20">
                <MapPin className="w-4 h-4" /> Gomti Nagar, Vivek Khand 4
              </span>
            </div>
          </div>
        </section>

        {/* Filter and Search Bar Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#2C3A33]/10 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#767B78]" />
                <input
                  type="text"
                  placeholder="Search spa treatments (e.g. Thai, Deep Tissue, Jacuzzi)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#FAF9F5] rounded-xl border border-[#2C3A33]/15 text-sm font-medium focus:border-[#C5A059] focus:bg-white transition-all outline-none"
                />
              </div>

              {/* Quick WhatsApp & Call Shortcuts */}
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#2C3A33]/20 font-semibold text-xs text-[#2C3A33] hover:bg-[#F4F1EA] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call {BUSINESS_DETAILS.formattedPhone}</span>
                </a>
                <a
                  href={BUSINESS_DETAILS.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-t border-[#2C3A33]/10 pt-4 scrollbar-none">
              <Filter className="w-4 h-4 text-[#C5A059] shrink-0 mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`
                    px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border
                    ${
                      selectedCategory === cat.id
                        ? 'bg-[#2C3A33] text-[#FAF9F5] border-[#2C3A33] shadow-sm'
                        : 'bg-[#FAF9F5] text-[#2C3A33] border-[#2C3A33]/15 hover:border-[#C5A059]'
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-8">
          <div className="flex justify-between items-baseline border-b border-[#2C3A33]/10 pb-4">
            <h2 className="text-2xl font-serif-heading font-bold text-[#1A1C1A]">
              Available Spa Treatments ({filteredTreatments.length})
            </h2>
            <span className="text-xs text-[#767B78] font-medium">
              Showing verified treatments in Gomti Nagar
            </span>
          </div>

          {filteredTreatments.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-[#2C3A33]/10 space-y-4">
              <p className="text-base text-[#767B78]">
                No spa treatments found matching &quot;{searchQuery}&quot;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#2C3A33] text-white text-xs font-semibold hover:bg-[#1E2522]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreatments.map((treatment, index) => {
                const startingPrice =
                  treatment.priceINR[60] ||
                  treatment.priceINR[90] ||
                  Object.values(treatment.priceINR)[0];
                const minDuration = treatment.durationMinutes[0];

                return (
                  <article
                    key={treatment.id}
                    className="bg-white rounded-2xl border border-[#2C3A33]/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
                  >
                    {/* Image Preview */}
                    <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={treatment.image.src}
                        alt={treatment.image.alt}
                        fill
                        priority={index < 3}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-[#2C3A33]/90 text-[#FAF9F5] text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full backdrop-blur-md border border-[#C5A059]/30">
                          {treatment.category}
                        </span>
                      </div>

                      {/* Starting Price Tag */}
                      <div className="absolute bottom-3 right-3 bg-[#1E2522]/90 text-[#C5A059] font-bold text-xs px-3 py-1.5 rounded-xl border border-[#C5A059]/40 backdrop-blur-md">
                        Starts at ₹{startingPrice.toLocaleString('en-IN')} ({minDuration}m)
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h2 className="text-xl font-serif-heading font-bold text-[#1A1C1A] group-hover:text-[#C5A059] transition-colors">
                          <Link href={`/services/${treatment.slug}`}>
                            {treatment.name}
                          </Link>
                        </h2>
                        <p className="text-xs font-semibold text-[#C5A059]">
                          {treatment.tagline}
                        </p>
                        <p className="text-xs text-[#767B78] line-clamp-2 leading-relaxed">
                          {treatment.shortDescription}
                        </p>
                      </div>

                      {/* Key Benefits List */}
                      <div className="space-y-1.5 pt-2 border-t border-[#2C3A33]/10">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#2C3A33] block">
                          Key Benefits:
                        </span>
                        <ul className="space-y-1">
                          {treatment.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs text-[#1A1C1A]/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Duration Options */}
                      <div className="flex items-center gap-2 pt-2 text-xs font-medium text-[#767B78]">
                        <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Durations: {treatment.durationMinutes.join(', ')} mins</span>
                      </div>

                      {/* Actions */}
                      <div className="pt-3 border-t border-[#2C3A33]/10 flex flex-col gap-2">
                        <Link
                          href={`/services/${treatment.slug}`}
                          className="w-full py-2.5 px-4 rounded-xl bg-[#FAF9F5] border border-[#2C3A33]/20 text-[#2C3A33] text-xs font-bold hover:border-[#C5A059] hover:bg-white text-center transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>View Details & Pricing</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenBooking(treatment.id)}
                            className="w-full py-2 px-3 rounded-xl bg-[#2C3A33] text-white text-xs font-semibold hover:bg-[#1E2522] transition-colors"
                          >
                            Book Now
                          </button>
                          <a
                            href={`${BUSINESS_DETAILS.social.whatsapp}?text=${encodeURIComponent(
                              `Hello The Cloud Spa, I am interested in booking: ${treatment.name}`
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full py-2 px-3 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] text-center transition-colors flex items-center justify-center gap-1"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* Localities Served Internal Linking Section */}
        <section className="bg-[#1E2522] text-[#FAF9F5] py-16 px-4 sm:px-8 mt-16 border-t border-[#C5A059]/20">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4" /> Local SEO Coverage Across Lucknow
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#FAF9F5]">
                Spa Treatments Available Near Your Neighborhood
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF9F5]/80">
                Located conveniently at Vivek Khand 4 in Gomti Nagar, our spa center serves guests across all key localities in Lucknow with quick access.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {localities.map((loc) => (
                <div
                  key={loc.slug}
                  className="bg-[#2C3A33] p-3.5 rounded-xl border border-[#C5A059]/20 hover:border-[#C5A059] transition-all text-center space-y-1"
                >
                  <h3 className="text-xs font-bold text-[#FAF9F5]">{loc.name}</h3>
                  <p className="text-[10px] text-[#C5A059]">{loc.distanceFromSpa}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />

      <BookingFormModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preSelectedTreatmentId={activeTreatmentId}
      />
    </div>
  );
};
