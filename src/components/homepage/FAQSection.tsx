/**
 * FAQ Section Component
 * SEO-optimized Accordion with Schema.org FAQPage compliance
 */

import React from 'react';
import { HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { FAQAccordion } from '../ui/FAQAccordion';
import { LuxuryBadge } from '../ui/LuxuryBadge';
import { SEO_KEYWORD_CLUSTERS } from '../../constants/seo-keywords';
import { BUSINESS_DETAILS } from '../../constants/business';

export const FAQSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F5] text-[#1A1C1A]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <LuxuryBadge variant="gold" icon={<HelpCircle className="w-3.5 h-3.5" />}>
            FREQUENTLY ASKED QUESTIONS
          </LuxuryBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-[#1A1C1A]">
            Everything You Need to Know
          </h2>
          <p className="text-base text-[#4A4E4B]">
            Find quick answers about bookings, therapists, hygiene, location in Gomti Nagar, and couple spa packages.
          </p>
        </div>

        {/* Accordion Component */}
        <FAQAccordion items={SEO_KEYWORD_CLUSTERS.faqSchemaQuestions} />

        {/* Further Assistance */}
        <div className="bg-[#F4F1EA] p-6 rounded-2xl border border-black/5 text-center space-y-3">
          <h3 className="text-lg font-serif-heading font-semibold text-[#1A1C1A]">
            Have a Specific Query or Special Request?
          </h3>
          <p className="text-xs text-[#4A4E4B]">
            Our front-desk team is available 7 days a week from 11:00 AM to 8:00 PM to assist you.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2C3A33] text-[#FAF9F5] text-xs font-semibold hover:bg-[#1E2522] transition-colors"
            >
              Call Us: {BUSINESS_DETAILS.formattedPhone}
            </a>
            <a
              href={BUSINESS_DETAILS.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Instant Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
