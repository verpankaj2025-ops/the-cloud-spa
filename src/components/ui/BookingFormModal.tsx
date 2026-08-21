'use client';

/**
 * Luxury Appointment Booking Modal Component
 * Wraps Enterprise Multi-Step Booking Engine inside Accessible Focus Modal
 */

import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BookingEngine } from '../booking/BookingEngine';

export interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedTreatmentId?: string;
  preSelectedDuration?: number;
  source?: string;
}

export const BookingFormModal: React.FC<BookingFormModalProps> = ({
  isOpen,
  onClose,
  preSelectedTreatmentId,
  preSelectedDuration,
  source = 'modal_trigger',
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl my-auto bg-[#FAF9F5] rounded-3xl shadow-2xl border border-[#C5A059]/30 overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Modal Sticky Header */}
            <div className="bg-[#1E2522] text-white p-5 relative shrink-0 flex items-center justify-between border-b border-[#C5A059]/30">
              <div>
                <div className="flex items-center gap-1.5 text-[#C5A059] text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> VIP Session Reservation
                </div>
                <h2 id="booking-modal-title" className="text-xl sm:text-2xl font-serif font-bold text-[#FAF9F5]">
                  The Cloud Spa • Gomti Nagar
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Booking Modal"
                className="p-2 rounded-full hover:bg-white/10 text-white/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Multi-Step Engine */}
            <div className="p-4 sm:p-6 overflow-y-auto">
              <BookingEngine
                initialServiceSlug={preSelectedTreatmentId}
                initialDuration={preSelectedDuration}
                source={source}
                compact
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
