/**
 * Skeleton Loader Component
 * Zero-CLS Loading States for Cards, Images & Text
 */

import React from 'react';

export interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'image' | 'avatar';
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'text',
  className = '',
}) => {
  const baseClasses = 'animate-pulse bg-[#ECE7DE] rounded-md';

  if (variant === 'card') {
    return (
      <div className={`p-6 rounded-2xl border border-[#2C3A33]/10 bg-white ${baseClasses} ${className}`}>
        <div className="h-48 bg-[#E5DFD3] rounded-xl mb-4" />
        <div className="h-6 w-3/4 bg-[#E5DFD3] rounded-md mb-2" />
        <div className="h-4 w-1/2 bg-[#E5DFD3] rounded-md mb-4" />
        <div className="h-10 bg-[#E5DFD3] rounded-lg w-full" />
      </div>
    );
  }

  if (variant === 'image') {
    return <div className={`h-60 w-full ${baseClasses} ${className}`} />;
  }

  if (variant === 'avatar') {
    return <div className={`w-12 h-12 rounded-full ${baseClasses} ${className}`} />;
  }

  return <div className={`h-4 w-full ${baseClasses} ${className}`} />;
};
