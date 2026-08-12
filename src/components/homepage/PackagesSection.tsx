/**
 * Luxury Packages Section Component
 * Couple Spa, Corporate Wellness, Weekend Relaxation, Premium Rituals
 */

import React from 'react';
import { Sparkles, Heart, Briefcase, Sun, Wine, Clock } from 'lucide-react';
import { PricingCard } from '../ui/PricingCard';
import { LuxuryBadge } from '../ui/LuxuryBadge';

interface PackagesSectionProps {
  onOpenBooking: (treatmentId?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenBooking }) => {
  const packages = [
    {
      id: 'couple-spa-package',
      name: 'Royal Couple Spa & Jacuzzi Ritual',
      tagline: 'Private VIP Couple Suite with Hydrotherapy & Candlelight',
      priceINR: 5999,
      durationMins: 90,
      popular: true,
      features: [
        'Private VIP Candlelit Suite with Acoustic Soundproofing',
        'Side-by-Side Synchronized Swedish or Balinese Therapy',
        'Hydro-Jacuzzi session with organic rose bath salts',
        'Welcome organic detox green tea & fresh fruit bowl',
        'Dedicated senior therapists & attached shower room',
      ],
      idealFor: 'Anniversaries, Honeymoons, Couples Pampering',
    },
    {
      id: 'corporate-wellness',
      name: 'Executive Anti-Burnout Ritual',
      tagline: 'Designed for IT Professionals & Business Executives',
      priceINR: 3499,
      durationMins: 90,
      popular: false,
      features: [
        '30 Mins Dry Thai Acupressure & Postural Stretch',
        '60 Mins Deep Tissue Back, Shoulder & Neck Relief',
        'Hot Stone Therapy on Spinal Trigger Points',
        'Aromatherapy Eucalyptus Steam Bath',
        'Herbal Chamomile Stress-Release Tea',
      ],
      idealFor: 'Desk Workers, Techies, Chronic Neck/Back Pain',
    },
    {
      id: 'weekend-relaxation',
      name: 'Weekend Total Body Reset',
      tagline: 'Complete Head-to-Toe Body Scrub & Massage',
      priceINR: 4299,
      durationMins: 120,
      popular: false,
      features: [
        '30 Mins Organic Coffee & Brown Sugar Body Polish',
        '60 Mins Balinese Warm Essential Oil Therapy',
        '30 Mins Indian Head & Foot Reflexology',
        'Aromatherapy Steam Session',
        'Warm Herbal Bath Towel Wrap',
      ],
      idealFor: 'Weekend Pampering, Deep Skin & Body Detox',
    },
  ];

  return (
    <section className="py-20 bg-[#F4F1EA] text-[#1A1C1A]" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <LuxuryBadge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
            CURATED EXPERIENCES
          </LuxuryBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-[#1A1C1A]">
            Curated Luxury Packages & Spa Rituals
          </h2>
          <p className="text-base text-[#4A4E4B] leading-relaxed">
            Multi-therapy packages combining exfoliation, hydrotherapy, deep muscular massage, and steam sessions in Gomti Nagar, Lucknow.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              pkg={pkg}
              onSelect={() => onOpenBooking(pkg.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
