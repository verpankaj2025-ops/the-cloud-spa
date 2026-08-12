/**
 * Luxury Badge System - The Cloud Spa Design System
 * High Contrast Microcapsules for Local SEO & Service Highlighting
 */

import React from 'react';

export interface LuxuryBadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'forest' | 'sand' | 'outline' | 'verified';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const LuxuryBadge: React.FC<LuxuryBadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  icon,
  className = '',
}) => {
  const variantStyles = {
    gold: 'bg-[#F7F2E8] text-[#B28E46] border border-[#E5D6B8]',
    forest: 'bg-[#2C3A33] text-[#FAF9F5] border border-transparent',
    sand: 'bg-[#ECE7DE] text-[#2C3A33] border border-[#2C3A33]/10',
    outline: 'bg-transparent text-[#2C3A33] border border-[#C5A059]',
    verified: 'bg-[#EAF3EB] text-[#2E6930] border border-[#2E6930]/20',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-[11px] font-semibold tracking-wider uppercase rounded-full gap-1',
    md: 'px-3.5 py-1 text-xs font-medium tracking-wide rounded-full gap-1.5',
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center whitespace-nowrap
        font-sans-body transition-all duration-200
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
