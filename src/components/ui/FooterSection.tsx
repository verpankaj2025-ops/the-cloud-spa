/**
 * SEO Optimized Footer Component
 * Local Keyword Deep Links, Address Schema & Geographic Landmarks
 */

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_DETAILS, TARGET_LOCALITIES } from '../../constants/business';
import { SPA_TREATMENTS } from '../../constants/services';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#1E2522] text-[#FAF9F5] pt-16 pb-12 border-t border-[#C5A059]/30 font-sans-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#FAF9F5]/10">
          {/* Col 1: Brand & Local Address */}
          <div>
            <h3 className="text-xl font-serif-heading font-bold text-[#FAF9F5] mb-2">
              {BUSINESS_DETAILS.name}
            </h3>
            <p className="text-xs text-[#C5A059] font-medium uppercase tracking-wider mb-4">
              {BUSINESS_DETAILS.tagline}
            </p>
            <p className="text-xs text-[#FAF9F5]/70 leading-relaxed mb-6">
              {BUSINESS_DETAILS.description}
            </p>

            <div className="space-y-2.5 text-xs text-[#FAF9F5]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{BUSINESS_DETAILS.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{BUSINESS_DETAILS.formattedPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{BUSINESS_DETAILS.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{BUSINESS_DETAILS.openingHours[0].displayHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: High Ranking Treatments */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">
              Popular Spa Therapies
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF9F5]/80">
              {SPA_TREATMENTS.map((t) => (
                <li key={t.id}>
                  <a
                    href={`/services/${t.slug}`}
                    className="hover:text-[#C5A059] transition-colors flex items-center justify-between"
                  >
                    <span>{t.name}</span>
                    <span className="text-[10px] text-[#C5A059]/70">From ₹{t.priceINR[60] || 2499}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Localities Served in Lucknow */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">
              Localities Served
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF9F5]/80">
              {TARGET_LOCALITIES.map((loc) => (
                <li key={loc.slug}>
                  <a
                    href={`/locations/${loc.slug}`}
                    className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-[#C5A059]" />
                    <span>Spa in {loc.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Trust Badges & Directions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">
              Locate & Visit Us
            </h4>
            <p className="text-xs text-[#FAF9F5]/70 mb-4">
              Landmark: Located near Brijwasi Bakery in Vivek Khand 4, Gomti Nagar. Free Valet Parking available.
            </p>

            <a
              href={BUSINESS_DETAILS.social.googleBusiness}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#2C3A33] border border-[#C5A059]/40 text-[#FAF9F5] text-xs font-medium rounded-lg hover:bg-[#FAF9F5] hover:text-[#1E2522] transition-colors mb-4"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="p-3 bg-[#2C3A33] rounded-lg border border-[#C5A059]/20 flex items-center gap-2.5 text-xs text-[#FAF9F5]/90">
              <ShieldCheck className="w-5 h-5 text-[#25D366] shrink-0" />
              <span>Certified Therapists & 100% Hygiene Assured</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & keywords strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF9F5]/50">
          <div>
            © {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All Rights Reserved.
          </div>
          <div className="flex flex-wrap gap-3">
            <span>Spa in Gomti Nagar</span>
            <span>•</span>
            <span>Best Spa in Lucknow</span>
            <span>•</span>
            <span>Massage Center Gomti Nagar</span>
            <span>•</span>
            <span>Thai Massage Lucknow</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
