'use client';

/**
 * Enterprise Analytics & Marketing Infrastructure Client Script Loader
 * Handles dynamic initialization of GA4, GTM, Meta Pixel, and Consent Mode v2.
 * Uses Suspense boundary for useSearchParams compatibility with Next.js static generation.
 */

import React, { useEffect, Suspense } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { initConsentMode } from '../../lib/consent';
import { getGA4Id } from '../../lib/ga';
import { getGTMId } from '../../lib/gtm';
import { getMetaPixelId } from '../../lib/meta-pixel';
import { trackPageView } from '../../lib/event-tracker';

function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const url = searchParams?.toString() ? `${pathname}?${searchParams.toString()}` : pathname;
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsProvider({ children }: { children?: React.ReactNode }) {
  const ga4Id = getGA4Id();
  const gtmId = getGTMId();
  const pixelId = getMetaPixelId();

  // Initialize Consent Mode v2 defaults immediately on mount
  useEffect(() => {
    initConsentMode();
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>

      {/* 1. Consent Mode v2 Inline Initialization Script */}
      <Script
        id="consent-mode-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            try {
              var saved = localStorage.getItem('the_cloud_spa_consent_v2');
              var consent = saved ? JSON.parse(saved) : {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                functionality_storage: 'granted',
                security_storage: 'granted'
              };
              gtag('consent', 'default', {
                'analytics_storage': consent.analytics_storage,
                'ad_storage': consent.ad_storage,
                'ad_user_data': consent.ad_user_data,
                'ad_personalization': consent.ad_personalization,
                'functionality_storage': consent.functionality_storage,
                'security_storage': consent.security_storage,
                'wait_for_update': 500
              });
            } catch(e) {}
          `,
        }}
      />

      {/* 2. Google Analytics 4 Script */}
      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true
                });
              `,
            }}
          />
        </>
      )}

      {/* 3. Google Tag Manager Container */}
      {gtmId && (
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {/* 4. Meta Pixel Script */}
      {pixelId && (
        <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}

      {children}
    </>
  );
}
