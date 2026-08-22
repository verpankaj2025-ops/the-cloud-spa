/**
 * Location & Local SEO Section Component
 * Address, Landmarks, Directions, Nearby Localities, Interactive Map Component
 */

import React from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, Compass, ExternalLink, Sparkles } from 'lucide-react';
import { BUSINESS_DETAILS, TARGET_LOCALITIES } from '../../constants/business';
import { LuxuryBadge } from '../ui/LuxuryBadge';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4F1EA] text-[#1A1C1A]" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <LuxuryBadge variant="gold" icon={<MapPin className="w-3.5 h-3.5" />}>
            PRIME LOCATION & ACCESSIBILITY
          </LuxuryBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-[#1A1C1A]">
            Visit Us in Gomti Nagar, Lucknow
          </h2>
          <p className="text-base text-[#4A4E4B] leading-relaxed">
            Conveniently situated in Vivek Khand 4 near Brijwasi Bakery, The Cloud Spa is a centrally located spa and massage center in Gomti Nagar, Lucknow, with easy access from nearby residential and commercial areas.
          </p>
        </div>

        {/* Location Details & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Card */}
          <div className="lg:col-span-5 bg-[#2C3A33] text-[#FAF9F5] p-8 rounded-3xl border border-[#C5A059]/30 shadow-xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#D4AF37] text-xs font-semibold">
                <Compass className="w-3.5 h-3.5" />
                CENTRAL GOMTI NAGAR HUB
              </div>

              <div>
                <h3 className="text-2xl font-serif-heading font-bold text-[#FAF9F5]">
                  The Cloud Spa & Wellness Center
                </h3>
                <p className="text-sm text-[#D2D6D3] mt-2 leading-relaxed">
                  {BUSINESS_DETAILS.address.fullAddress}
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#E0DDD5] border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#FAF9F5]">Key Landmark:</span>
                    <span>Directly opposite Brijwasi Bakery, Vivek Khand 4</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#FAF9F5]">Operating Hours:</span>
                    <span>11:00 AM – 8:00 PM (Open All 7 Days)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#FAF9F5]">Direct Helpline:</span>
                    <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-[#D4AF37] underline">
                      {BUSINESS_DETAILS.formattedPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={BUSINESS_DETAILS.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[#C5A059] text-[#1E2522] font-semibold text-sm hover:bg-[#D4AF37] transition-all shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Placeholder / Component */}
          <div className="lg:col-span-7 bg-[#FAF9F5] rounded-3xl overflow-hidden border border-black/10 shadow-lg relative min-h-[380px] flex flex-col justify-between">
            <div className="relative w-full h-full min-h-[350px] bg-[#E5E3DD]">
              {/* Embed Google Maps Iframe */}
              <iframe
                title="The Cloud Spa Gomti Nagar Lucknow Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.876!2d80.9927!3d26.8526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzA5LjQiTiA4MMKwNTknMzMuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 min-h-[350px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Nearby Localities Serviced Tags */}
            <div className="p-6 bg-[#FAF9F5] border-t border-black/5 space-y-3">
              <div className="text-xs font-semibold text-[#1A1C1A] uppercase tracking-wider">
                Serving Nearby Localities in Lucknow:
              </div>
              <div className="flex flex-wrap gap-2">
                {BUSINESS_DETAILS.areaServed.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#F4F1EA] text-[11px] font-medium text-[#4A4E4B] border border-black/5"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Locality Distance Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {TARGET_LOCALITIES.map((locality, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#FAF9F5] border border-black/5 space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif-heading font-bold text-base text-[#1A1C1A]">
                  {locality.name}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#2C3A33]">
                  {locality.distanceFromSpa}
                </span>
              </div>
              <p className="text-xs text-[#767B78] line-clamp-2">
                {locality.introText}
              </p>
              <div className="text-[10px] font-mono text-[#C5A059] pt-1">
                Landmarks: {locality.landmarks.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
