import type { Metadata, Viewport } from 'next';
import React, { ReactNode } from 'react';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import '../index.css';
import { BUSINESS_DETAILS } from '../constants/business';
import { getVerificationMetadata } from '../lib/verification';
import { AnalyticsProvider } from '../components/analytics/AnalyticsProvider';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#1E2522',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_DETAILS.url),
  title: {
    default: `${BUSINESS_DETAILS.name} | Luxury Spa Gomti Nagar Lucknow`,
    template: '%s',
  },
  description:
    'Best Luxury Spa in Gomti Nagar, Lucknow. Experience experienced wellness professional massages, couple spa suites, Swedish, Thai, Deep Tissue, and Jacuzzi hydrotherapy in Vivek Khand 4.',
  keywords: [
    'Spa in Gomti Nagar',
    'Best Spa in Gomti Nagar',
    'Spa in Lucknow',
    'Massage Center Gomti Nagar',
    'Luxury Spa Lucknow',
    'Thai Massage Lucknow',
    'Deep Tissue Massage Lucknow',
    'Couple Spa Lucknow',
    'Vivek Khand 4 Spa',
  ],
  authors: [{ name: BUSINESS_DETAILS.name }],
  creator: BUSINESS_DETAILS.name,
  publisher: BUSINESS_DETAILS.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BUSINESS_DETAILS.url,
    siteName: BUSINESS_DETAILS.name,
    title: `${BUSINESS_DETAILS.name} | Best Luxury Spa in Gomti Nagar Lucknow`,
    description:
      'Premier luxury spa and wellness sanctuary in Gomti Nagar, Vivek Khand 4, Lucknow. Book online or call for instant confirmation.',
    images: [
      {
        url: `${BUSINESS_DETAILS.url}/images/spa-placeholder.svg`,
        width: 1200,
        height: 630,
        alt: `${BUSINESS_DETAILS.name} - Luxury Spa Gomti Nagar Lucknow`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_DETAILS.name} | Luxury Spa Gomti Nagar Lucknow`,
    description:
      'Premier luxury spa in Gomti Nagar Lucknow with experienced wellness professionals and private acoustic suites.',
    images: [`${BUSINESS_DETAILS.url}/images/spa-placeholder.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BUSINESS_DETAILS.url,
  },
  verification: getVerificationMetadata(),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-[#FAF9F5] text-[#1A1C1A] font-sans-body antialiased selection:bg-[#C5A059] selection:text-white">
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}

