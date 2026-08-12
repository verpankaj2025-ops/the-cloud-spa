import React from 'react';
import { SkeletonLoader } from '../components/ui/SkeletonLoader';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] p-6 space-y-8 max-w-7xl mx-auto flex flex-col justify-center items-center">
      <div className="w-full space-y-4">
        <SkeletonLoader className="h-12 w-1/3" />
        <SkeletonLoader className="h-64 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <SkeletonLoader variant="card" className="w-full" />
          <SkeletonLoader variant="card" className="w-full" />
          <SkeletonLoader variant="card" className="w-full" />
        </div>
      </div>
    </div>
  );
}
