'use client';

import React, { useEffect } from 'react';
import { LuxuryButton } from '../components/ui/LuxuryButton';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Router Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FAF9F5] flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-[#1E2522] flex items-center justify-center text-[#C5A059]">
        <span className="text-2xl font-bold">!</span>
      </div>
      <h2 className="text-3xl font-serif-heading font-bold text-[#1A1C1A]">
        Something went wrong
      </h2>
      <p className="text-sm text-[#767B78] max-w-md">
        We encountered an issue loading this sanctuary experience. Please try refreshing or return to the main view.
      </p>
      <LuxuryButton variant="gold" onClick={() => reset()}>
        Try Again
      </LuxuryButton>
    </div>
  );
}
