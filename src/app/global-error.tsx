'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF9F5] flex flex-col items-center justify-center p-6 text-center space-y-6">
        <h2 className="text-3xl font-bold text-[#1A1C1A]">Something went wrong</h2>
        <button
          type="button"
          onClick={() => reset()}
          className="px-6 py-3 rounded-xl bg-[#2C3A33] text-[#FAF9F5] font-semibold text-sm hover:bg-[#1E2522]"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
