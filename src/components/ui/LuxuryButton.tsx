/**
 * Luxury Button System - The Cloud Spa Design System
 * Apple-Level Tactile Simplicity & Google Accessibility Guidelines
 *
 * Performance note:
 * This component uses CSS hover/active transforms instead of a motion runtime
 * for its simple tactile interaction.
 */

import React from 'react';
import { Loader2 } from 'lucide-react';

export interface LuxuryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'gold' | 'forest' | 'outline' | 'ghost' | 'whatsapp' | 'phone';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const LuxuryButton: React.FC<LuxuryButtonProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  isLoading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const variantStyles = {
    gold: 'bg-[#C5A059] hover:bg-[#B28E46] text-white shadow-md hover:shadow-lg border border-transparent',
    forest: 'bg-[#2C3A33] hover:bg-[#1E2522] text-[#FAF9F5] shadow-md border border-transparent',
    outline: 'bg-transparent border border-[#C5A059] text-[#2C3A33] hover:bg-[#F7F2E8]',
    ghost: 'bg-transparent text-[#2C3A33] hover:bg-black/5 border border-transparent',
    whatsapp: 'bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-md border border-transparent',
    phone: 'bg-[#1E2522] hover:bg-[#2C3A33] text-[#FAF9F5] shadow-md border border-[#C5A059]/30',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-md gap-1.5',
    md: 'px-6 py-3 text-sm font-medium tracking-wide rounded-lg gap-2',
    lg: 'px-8 py-4 text-base font-medium tracking-wide rounded-xl gap-2.5',
  };

  return (
    <button
      type={props.type ?? 'button'}
      disabled={disabled || isLoading}
      className={`
        inline-flex items-center justify-center
        font-sans-body
        transition-all duration-150
        hover:scale-[1.015] active:scale-[0.98]
        focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2
        disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
        disabled:hover:scale-100 disabled:active:scale-100
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin text-current" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="inline-flex shrink-0">{icon}</span>
          )}
          <span>{children}</span>
          {icon && iconPosition === 'right' && (
            <span className="inline-flex shrink-0">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};
