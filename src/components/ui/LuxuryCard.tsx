/**
 * Luxury Card System - The Cloud Spa Design System
 * Enforces Nested Border Radius Formula: Inner Radius = Outer Radius - Padding
 */

import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

export interface LuxuryCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'elevated' | 'flat' | 'gold-bordered' | 'dark';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverEffect?: boolean;
  className?: string;
}

export const LuxuryCard: React.FC<LuxuryCardProps> = ({
  children,
  variant = 'elevated',
  padding = 'md',
  hoverEffect = true,
  className = '',
  ...props
}) => {
  const variantStyles = {
    elevated: 'bg-white text-[#1A1C1A] border border-[rgba(44,58,51,0.08)] shadow-[0_8px_24px_-6px_rgba(44,58,51,0.06)]',
    flat: 'bg-[#F4F1EA] text-[#1A1C1A] border border-[rgba(44,58,51,0.06)]',
    'gold-bordered': 'bg-white text-[#1A1C1A] border border-[#C5A059]/40 shadow-sm',
    dark: 'bg-[#1E2522] text-[#FAF9F5] border border-[#C5A059]/20 shadow-xl',
  };

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4', // 16px
    md: 'p-6 sm:p-8', // 24px - 32px
    lg: 'p-8 sm:p-12', // 32px - 48px
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
      className={`
        rounded-2xl transition-all duration-300 overflow-hidden relative
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};
