'use client';

/**
 * Spa Treatment Service Card Component
 * Optimized for Conversion, Schema Markup & Local SEO Keywords
 */

import React, { useState } from 'react';
import { Clock, CheckCircle2, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { SpaTreatment } from '../../types/spa';
import { LuxuryCard } from './LuxuryCard';
import { LuxuryBadge } from './LuxuryBadge';
import { LuxuryButton } from './LuxuryButton';
import { BUSINESS_DETAILS } from '../../constants/business';

export interface ServiceCardProps {
  treatment: SpaTreatment;
  onBookNow?: (treatment: SpaTreatment, selectedDuration: number) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  treatment,
  onBookNow,
}) => {
  const [selectedDuration, setSelectedDuration] = useState<number>(
    treatment.durationMinutes[0] || 60
  );

  const currentPrice =
    treatment.priceINR[selectedDuration] ||
    Object.values(treatment.priceINR)[0];

  const whatsappMessage = encodeURIComponent(
    `Hello The Cloud Spa, I would like to book a ${selectedDuration} mins session for ${treatment.name} (₹${currentPrice}) at Gomti Nagar, Lucknow.`
  );

  return (
    <LuxuryCard variant="elevated" padding="none" className="flex flex-col h-full group">
      {/* Treatment Image Header */}
      <div className="relative h-60 w-full overflow-hidden bg-[#ECE7DE]">
        <img
          src={treatment.image.src}
          alt={treatment.image.alt}
          width={treatment.image.width}
          height={treatment.image.height}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <LuxuryBadge variant="gold" icon={<Sparkles className="w-3 h-3" />}>
            {treatment.category.toUpperCase()}
          </LuxuryBadge>
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-md border border-[#C5A059]/30">
          <span className="text-xs font-semibold text-[#767B78] uppercase block">Starting at</span>
          <span className="text-lg font-bold text-[#2C3A33]">₹{currentPrice.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold font-serif-heading text-[#1A1C1A] mb-1 group-hover:text-[#C5A059] transition-colors">
            {treatment.name}
          </h3>
          <p className="text-xs font-semibold tracking-wider text-[#C5A059] uppercase mb-3">
            {treatment.tagline}
          </p>

          <p className="text-sm text-[#4A4E4B] leading-relaxed mb-5 line-clamp-3">
            {treatment.shortDescription}
          </p>

          {/* Duration Selector Pills */}
          <div className="mb-5">
            <label className="text-xs font-semibold text-[#767B78] uppercase tracking-wider block mb-2">
              Select Session Duration:
            </label>
            <div className="flex flex-wrap gap-2">
              {treatment.durationMinutes.map((mins) => (
                <button
                  key={mins}
                  type="button"
                  onClick={() => setSelectedDuration(mins)}
                  className={`
                    px-3 py-1.5 text-xs font-medium rounded-md border transition-all duration-200 flex items-center gap-1
                    ${
                      selectedDuration === mins
                        ? 'bg-[#2C3A33] text-white border-[#2C3A33] shadow-sm'
                        : 'bg-[#F4F1EA] text-[#2C3A33] border-[#2C3A33]/15 hover:border-[#C5A059]'
                    }
                  `}
                >
                  <Clock className="w-3 h-3" />
                  <span>{mins} Mins</span>
                  <span className="font-bold ml-1">
                    ₹{(treatment.priceINR[mins] || 0).toLocaleString('en-IN')}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="space-y-1.5 mb-6">
            {treatment.benefits.slice(0, 3).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#4A4E4B]">
                <CheckCircle2 className="w-4 h-4 text-[#2E6930] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#2C3A33]/10">
          <LuxuryButton
            variant="whatsapp"
            size="sm"
            icon={<MessageCircle className="w-4 h-4" />}
            onClick={() => window.open(`${BUSINESS_DETAILS.social.whatsapp}?text=${whatsappMessage}`, '_blank')}
          >
            WhatsApp
          </LuxuryButton>

          <LuxuryButton
            variant="gold"
            size="sm"
            icon={<PhoneCall className="w-4 h-4" />}
            onClick={() => onBookNow ? onBookNow(treatment, selectedDuration) : window.open(`tel:${BUSINESS_DETAILS.phone}`, '_self')}
          >
            Book Session
          </LuxuryButton>
        </div>
      </div>
    </LuxuryCard>
  );
};
