import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="text-6xl font-serif-heading font-bold text-[#C5A059]">404</div>
      <h1 className="text-3xl font-serif-heading font-bold text-[#1A1C1A]">
        Page Not Found
      </h1>
      <p className="text-sm text-[#767B78] max-w-md">
        The sanctuary page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-[#2C3A33] text-[#FAF9F5] font-semibold text-sm hover:bg-[#1E2522] transition-colors"
      >
        Return to Home Page
      </Link>
    </div>
  );
}
