import type { Metadata, Viewport } from 'next';
import React from 'react';
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
    default: 'Best Spa in Gomti Nagar, Lucknow | The Cloud Spa',
    template: '%s | The Cloud Spa',
  },

  description:
    'Looking for a spa near you in Lucknow? The Cloud Spa in Gomti Nagar offers Thai, Balinese, Deep Tissue, Swedish and Couple Spa experiences, plus Jacuzzi and wellness facilities.',

  keywords: [
    'Best Spa in Gomti Nagar',
    'Spa in Gomti Nagar',
    'Spa in Lucknow',
    'Spa near me Lucknow',
    'Spa near me Gomti Nagar',
    'Best spa in Lucknow',
    'Massage Center Gomti Nagar',
    'Luxury Spa Lucknow',
    'Thai Massage Lucknow',
    'Deep Tissue Massage Lucknow',
    'Balinese Massage Lucknow',
    'Couple Spa Lucknow',
    'Full Body Massage Gomti Nagar',
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
    title: 'Best Spa in Gomti Nagar, Lucknow | The Cloud Spa',
    description:
      'Luxury spa and massage experiences in Gomti Nagar, Lucknow with Thai, Balinese, Deep Tissue, Swedish and Couple Spa treatments, plus Jacuzzi facilities.',
    images: [
      {
        url: `${BUSINESS_DETAILS.url}/images/spa-placeholder.svg`,
        width: 1200,
        height: 630,
        alt: 'The Cloud Spa luxury spa in Gomti Nagar Lucknow',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Best Spa in Gomti Nagar, Lucknow | The Cloud Spa',
    description:
      'Luxury spa and massage experiences in Gomti Nagar, Lucknow with Thai, Balinese, Deep Tissue, Swedish and Couple Spa treatments.',
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
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className="min-h-screen bg-[#FAF9F5] text-[#1A1C1A] font-sans-body antialiased selection:bg-[#C5A059] selection:text-white">
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
