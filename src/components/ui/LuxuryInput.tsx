/**
 * Luxury Input System - The Cloud Spa Design System
 * Form Controls with High Contrast WCAG AA Focus States
 */

import React from 'react';

export interface LuxuryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const LuxuryInput: React.FC<LuxuryInputProps> = ({
  label,
  error,
  helperText,
  icon,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="w-full flex flex-col gap-1.5">
      <label
        htmlFor={inputId}
        className="text-xs font-semibold uppercase tracking-wider text-[#2C3A33]"
      >
        {label}
      </label>

      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3.5 text-[#767B78] pointer-events-none">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          className={`
            w-full px-4 py-3 text-sm font-medium text-[#1A1C1A] bg-white rounded-lg
            border transition-all duration-200 placeholder:text-[#767B78]/60
            focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2
            ${icon ? 'pl-10' : ''}
            ${
              error
                ? 'border-[#A32828] bg-[#FDF2F2]'
                : 'border-[#2C3A33]/20 focus:border-[#C5A059]'
            }
            ${className}
          `}
          {...props}
        />
      </div>

      {error ? (
        <span className="text-xs font-medium text-[#A32828]">{error}</span>
      ) : helperText ? (
        <span className="text-xs text-[#767B78]">{helperText}</span>
      ) : null}
    </div>
  );
};
