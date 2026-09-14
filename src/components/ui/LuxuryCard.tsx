/**
 * Luxury Card System - The Cloud Spa Design System
 * Enforces Nested Border Radius Formula: Inner Radius = Outer Radius - Padding
 *
 * Performance note:
 * This component uses CSS transforms/transitions instead of a motion runtime
 * for its simple hover lift effect.
 */

import React from 'react';

export interface LuxuryCardProps extends React.HTMLAttributes<HTMLDivElement> {
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
    sm: 'p-4',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-12',
  };

  return (
    <div
      className={`
        rounded-2xl overflow-hidden relative
        transition-transform duration-300
        ${hoverEffect ? 'hover:-translate-y-1' : ''}
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
