'use client';

/**
 * Gallery Preview Section Component
 * High-definition visuals of rooms, couple suite, jacuzzi, and reception
 */

import React, { useState } from 'react';
import { Sparkles, Eye, ArrowRight, X } from 'lucide-react';
import { LuxuryBadge } from '../ui/LuxuryBadge';
import { LuxuryButton } from '../ui/LuxuryButton';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      title: 'Private VIP Couple Suite',
      category: 'Couple Suite',
      alt: 'Luxury Couple Spa Suite with Candlelight Ambiance in Gomti Nagar',
    },
    {
      src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80',
      title: 'Balinese Therapy Room',
      category: 'Single Room',
      alt: 'Traditional Balinese Spa Room with Ambient Lighting Lucknow',
    },
    {
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
      title: 'Thai Stretch Therapy Bed',
      category: 'Thai Massage',
      alt: 'Authentic Thai Massage Mat setup at Cloud Spa Lucknow',
    },
    {
      src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
      title: 'Deep Tissue Therapy Suite',
      category: 'Therapy Room',
      alt: 'Deep Tissue Muscle Recovery Therapy Suite Gomti Nagar',
    },
    {
      src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
      title: 'Hydrotherapy Jacuzzi Tub',
      category: 'Amenities',
      alt: 'Private Spa Jacuzzi Hydrotherapy Bath Lucknow',
    },
    {
      src: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80',
      title: 'Aromatherapy Oils & Elixirs',
      category: 'Organic Oils',
      alt: 'Cold-Pressed Essential Oils and Herbal Teas at The Cloud Spa',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF9F5] text-[#1A1C1A]" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <LuxuryBadge variant="gold" icon={<Sparkles className="w-3.5 h-3.5" />}>
            SANCTUARY TOUR
          </LuxuryBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-[#1A1C1A]">
            Take a Visual Tour of The Cloud Spa
          </h2>
          <p className="text-base text-[#4A4E4B] leading-relaxed">
            Immerse yourself in our serene, world-class sanctuary located at Vivek Khand 4, Gomti Nagar. Designed for peace, luxury, and absolute privacy.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item.src)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md border border-black/5"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2522]/90 via-[#1E2522]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-semibold tracking-wider text-[#D4AF37] uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif-heading font-semibold text-[#FAF9F5]">
                    {item.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#C5A059] text-[#1E2522] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center pt-4">
          <LuxuryButton
            variant="gold"
            size="lg"
            onClick={onOpenBooking}
            icon={<Sparkles className="w-4 h-4" />}
          >
            Experience The Cloud Spa in Person - Book Now
          </LuxuryButton>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#D4AF37] p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={activeImage}
            alt="Expanded Spa View"
            className="max-w-full max-h-[85vh] rounded-xl object-contain border border-white/10 shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};
