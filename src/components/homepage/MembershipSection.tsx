/**
 * Premium VIP Membership Section Component
 * Tiered corporate & individual spa memberships
 */

import React from 'react';
import { Crown, Check, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { LuxuryBadge } from '../ui/LuxuryBadge';
import { LuxuryButton } from '../ui/LuxuryButton';

interface MembershipSectionProps {
  onOpenBooking: () => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenBooking }) => {
  const tiers = [
    {
      name: 'Silver Club Membership',
      priceINR: '15,000',
      valueINR: '20,000',
      validity: '6 Months Validity',
      tagline: 'Ideal for bi-weekly stress relief and body maintenance.',
      isPopular: false,
      features: [
        '₹20,000 Total Spa Credit Balance',
        '25% Flat Discount on all Massages',
        'Complimentary Steam Session with every treatment',
        'Priority Weekend Booking Slots',
        'Transferable to Immediate Family',
      ],
    },
    {
      name: 'Gold VIP Luxury Membership',
      priceINR: '30,000',
      valueINR: '45,000',
      validity: '12 Months Validity',
      tagline: 'Our most popular annual wellness program for executives.',
      isPopular: true,
      features: [
        '₹45,000 Total Spa Credit Balance',
        '35% Flat Discount on all Massages & Packages',
        '1 Free Royal Couple Spa Session Included',
        'Unlimited Aromatherapy Steam & Jacuzzi access',
        'Complimentary Organic Tea & Fruit Elixirs',
        'Dedicated VIP Suite Reservation Guarantee',
      ],
    },
    {
      name: 'Platinum Elite Membership',
      priceINR: '50,000',
      valueINR: '80,000',
      validity: '12 Months Validity',
      tagline: 'The ultimate luxury privilege card for connoisseurs.',
      isPopular: false,
      features: [
        '₹80,000 Total Spa Credit Balance',
        '40% Flat Discount on all Services & Suites',
        '2 Free Royal Couple Spa Sessions Included',
        'Free Upgrade to Private VIP Couple Suite',
        'Personal Senior Therapist Assignment',
        'Complimentary Guest Passes (4/year)',
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#1E2522] text-[#FAF9F5]" id="membership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <LuxuryBadge variant="gold" icon={<Crown className="w-3.5 h-3.5" />}>
            EXCLUSIVE VIP PRIVILEGES
          </LuxuryBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-[#FAF9F5]">
            The Cloud Spa Royalty Memberships
          </h2>
          <p className="text-base text-[#D2D6D3] leading-relaxed">
            Elevate your wellness regimen with guaranteed savings up to 40%, VIP suite priority access, and complimentary Jacuzzi upgrades in Gomti Nagar.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.isPopular
                  ? 'bg-[#2C3A33] border-2 border-[#C5A059] shadow-2xl scale-105 z-10'
                  : 'bg-[#222B28] border border-[#FAF9F5]/10 hover:border-[#C5A059]/40'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C5A059] text-[#1E2522] text-xs font-bold tracking-wider uppercase shadow-md">
                  MOST POPULAR CHOICE
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif-heading font-bold text-[#FAF9F5]">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-[#A3A8A5] mt-1">{tier.tagline}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#1E2522]/80 border border-white/5 space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold font-serif-heading text-[#D4AF37]">
                      ₹{tier.priceINR}
                    </span>
                    <span className="text-xs text-[#A3A8A5]">/ {tier.validity}</span>
                  </div>
                  <div className="text-xs text-[#2E6930] font-semibold">
                    Get ₹{tier.valueINR} Total Spa Value
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-[#D2D6D3]">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10">
                <LuxuryButton
                  variant={tier.isPopular ? 'gold' : 'outline'}
                  fullWidth
                  onClick={onOpenBooking}
                  icon={<Crown className="w-4 h-4" />}
                >
                  Apply For Membership
                </LuxuryButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
