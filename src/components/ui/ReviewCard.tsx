/**
 * Review & Social Proof Card Component
 * Optimized for Schema AggregateRating & Google Search Local Trust
 */

import React from 'react';
import { Star, ShieldCheck, MapPin } from 'lucide-react';
import { CustomerReview } from '../../types/spa';
import { LuxuryCard } from './LuxuryCard';

export interface ReviewCardProps {
  review: CustomerReview;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <LuxuryCard variant="elevated" padding="md" className="flex flex-col justify-between h-full">
      <div>
        {/* Star Rating Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating
                    ? 'fill-[#C5A059] text-[#C5A059]'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>

          {review.verifiedBooking && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2E6930] bg-[#EAF3EB] px-2.5 py-0.5 rounded-full border border-[#2E6930]/20">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Visit
            </span>
          )}
        </div>

        {/* Comment Body */}
        <p className="text-sm text-[#4A4E4B] leading-relaxed italic mb-4">
          "{review.comment}"
        </p>
      </div>

      {/* Author Details & Locality Tag */}
      <div className="pt-4 border-t border-[#2C3A33]/10 flex items-center justify-between text-xs">
        <div>
          <h4 className="font-bold text-[#1A1C1A] text-sm">{review.author}</h4>
          <span className="text-[#767B78]">{review.serviceName}</span>
        </div>

        <div className="flex items-center gap-1 text-[#2C3A33] bg-[#F4F1EA] px-2.5 py-1 rounded-md font-medium">
          <MapPin className="w-3 h-3 text-[#C5A059]" />
          <span>{review.locality}</span>
        </div>
      </div>
    </LuxuryCard>
  );
};
