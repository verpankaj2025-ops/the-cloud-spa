/**
 * Luxury Spa Package & Membership Pricing Card Component
 */

import React from 'react';
import { Check, Sparkles, PhoneCall } from 'lucide-react';
import { LuxuryCard } from './LuxuryCard';
import { LuxuryButton } from './LuxuryButton';
import { LuxuryBadge } from './LuxuryBadge';
import { BUSINESS_DETAILS } from '../../constants/business';

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  priceINR: number;
  durationMins: number;
  popular?: boolean;
  features: string[];
  idealFor: string;
}

export interface PricingCardProps {
  pkg: PricingPackage;
  onSelect?: (pkg: PricingPackage) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ pkg, onSelect }) => {
  return (
    <LuxuryCard
      variant={pkg.popular ? 'gold-bordered' : 'elevated'}
      padding="lg"
      className={`flex flex-col justify-between h-full relative ${
        pkg.popular ? 'shadow-lg border-2 border-[#C5A059]' : ''
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <LuxuryBadge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
            MOST POPULAR EXPERIENCE
          </LuxuryBadge>
        </div>
      )}

      <div>
        <div className="text-center mb-6 pt-2">
          <h3 className="text-2xl font-serif-heading font-bold text-[#1A1C1A] mb-1">
            {pkg.name}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
            {pkg.tagline}
          </p>

          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="text-3xl sm:text-4xl font-bold text-[#2C3A33]">
              ₹{pkg.priceINR.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-[#767B78] font-medium">
              / {pkg.durationMins} Mins Session
            </span>
          </div>
        </div>

        <div className="space-y-3 mb-8 pt-4 border-t border-[#2C3A33]/10">
          {pkg.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-[#4A4E4B]">
              <div className="w-5 h-5 rounded-full bg-[#EAF3EB] text-[#2E6930] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="bg-[#F4F1EA] p-3 rounded-lg text-center mb-6">
          <span className="text-xs text-[#767B78] block">Ideal For:</span>
          <span className="text-xs font-bold text-[#2C3A33]">{pkg.idealFor}</span>
        </div>

        <LuxuryButton
          variant={pkg.popular ? 'gold' : 'forest'}
          fullWidth
          icon={<PhoneCall className="w-4 h-4" />}
          onClick={() =>
            onSelect
              ? onSelect(pkg)
              : window.open(`tel:${BUSINESS_DETAILS.phone}`, '_self')
          }
        >
          Book Package Now
        </LuxuryButton>
      </div>
    </LuxuryCard>
  );
};
