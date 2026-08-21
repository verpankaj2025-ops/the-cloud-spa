/**
 * Why Choose The Cloud Spa Section Component
 * Highlighting luxury pillars, certified therapists, hygiene, and amenities
 */

import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Flame, Droplets, Lock, CheckCircle2 } from 'lucide-react';
import { LuxuryBadge } from '../ui/LuxuryBadge';
import { BUSINESS_DETAILS } from '../../constants/business';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-[#C5A059]" />,
      title: 'Certified & Expert Therapists',
      description:
        'Our therapists undergo rigorous training in traditional Thai, Balinese, and Swedish techniques to deliver authentic therapeutic healing.',
    },
    {
      icon: <Lock className="w-6 h-6 text-[#C5A059]" />,
      title: 'Private Acoustic VIP Rooms',
      description:
        'Soundproof luxury suites equipped with ambient dimmable mood lighting, private attached showers, and individual climate controls.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#C5A059]" />,
      title: '100% Hospital-Grade Hygiene',
      description:
        'Freshly laundered organic cotton linens, single-use disposable kits, UV-sterilized therapy rooms, and spotless sanitation after every session.',
    },
    {
      icon: <Droplets className="w-6 h-6 text-[#C5A059]" />,
      title: 'Cold-Pressed Organic Essential Oils',
      description:
        'We exclusively use pure cold-pressed almond, sesame, and jojoba oils infused with natural frangipani, lavender, and lemongrass essences.',
    },
    {
      icon: <Flame className="w-6 h-6 text-[#C5A059]" />,
      title: 'Aromatherapy Steam Therapy',
      description:
        'Opens skin pores, flushes out metabolic toxins, and enhances deep muscle relaxation before or after your body massage.',
    },
    {
      icon: <Heart className="w-6 h-6 text-[#C5A059]" />,
      title: 'Hydrotherapy Couple Jacuzzi',
      description:
        'Custom hydro-massage jet tubs designed for romantic couple therapy, anniversary celebrations, and deep stress release in Gomti Nagar.',
    },
  ];

  return (
    <section className="py-20 bg-[#F4F1EA] text-[#1A1C1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <LuxuryBadge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
            THE CLOUD SPA BENCHMARK
          </LuxuryBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-[#1A1C1A]">
            Why The Cloud Spa is Gomti Nagar’s Preferred Sanctuary
          </h2>
          <p className="text-base text-[#4A4E4B] leading-relaxed">
            We combine ancient East Asian healing traditions with five-star luxury hospitality in Vivek Khand 4, Gomti Nagar. Every detail is curated for your absolute mental and physical rejuvenation.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F5] p-8 rounded-2xl border border-[#2C3A33]/10 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2C3A33] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-serif-heading font-semibold text-[#1A1C1A] mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#4A4E4B] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="bg-[#2C3A33] text-[#FAF9F5] p-6 sm:p-8 rounded-2xl border border-[#C5A059]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-7 h-7 text-[#D4AF37] shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-serif-heading font-semibold text-[#FAF9F5]">
                Strict Zero-Tolerance Safety & Privacy Policy
              </h4>
              <p className="text-sm text-[#D2D6D3] mt-1 max-w-2xl">
                The Cloud Spa is a professional wellness center operating strictly under ethical, licensed, and transparent healthcare standards in Gomti Nagar, Lucknow.
              </p>
            </div>
          </div>
          <a
            href={`tel:${BUSINESS_DETAILS.phone}`}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#C5A059] text-[#1E2522] font-semibold text-sm hover:bg-[#D4AF37] transition-all shadow-md"
          >
            Inquire via Call: {BUSINESS_DETAILS.formattedPhone}
          </a>
        </div>
      </div>
    </section>
  );
};
