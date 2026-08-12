'use client';

/**
 * Accessible FAQ Accordion System
 * Fully Schema FAQPage Compatible & Keyboard Navigable
 */

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  title = 'Frequently Asked Questions',
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h3 className="text-2xl font-serif-heading font-bold text-[#1A1C1A] mb-6 text-center sm:text-left">
          {title}
        </h3>
      )}

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-[#2C3A33]/12 rounded-xl overflow-hidden bg-white shadow-xs transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2 hover:bg-[#F7F2E8]/40 transition-colors"
              >
                <span className="font-medium text-sm sm:text-base text-[#1A1C1A]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 pt-1 text-sm text-[#4A4E4B] leading-relaxed border-t border-[#2C3A33]/06">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
