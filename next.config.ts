import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/services/traditional-thai-massage',
        destination: '/services/thai-massage',
        permanent: true,
      },
      {
        source: '/services/deep-tissue-massage-lucknow',
        destination: '/services/deep-tissue-massage',
        permanent: true,
      },
      {
        source: '/services/couple-spa-lucknow',
        destination: '/services/couple-spa',
        permanent: true,
      },
      {
        source: '/services/balinese-massage-lucknow',
        destination: '/services/balinese-massage',
        permanent: true,
      },
      {
        source: '/services/swedish-massage-lucknow',
        destination: '/services/swedish-massage',
        permanent: true,
      },
{
  source: '/services/aromatherapy-massage',
  destination: '/services/aromatherapy',
  permanent: true,
},
{
  source: '/services/aromatherapy-massage-lucknow',
  destination: '/services/aromatherapy',
  permanent: true,
},
{
  source: '/services/hot-stone-massage-lucknow',
  destination: '/services/hot-stone-massage',
  permanent: true,
},
{
  source: '/services/volcanic-hot-stone-therapy',
  destination: '/services/hot-stone-massage',
  permanent: true,
},
      {
        source: '/services/balinese-royal-massage',
        destination: '/services/balinese-massage',
        permanent: true,
      },
      {
        source: '/services/deep-tissue-recovery',
        destination: '/services/deep-tissue-massage',
        permanent: true,
      },
      {
        source: '/services/classic-swedish-massage',
        destination: '/services/swedish-massage',
        permanent: true,
      },
      {
        source: '/services/couple-massage-package',
        destination: '/services/couple-spa',
        permanent: true,
      },
      {
        source: '/services/luxury-couple-spa',
        destination: '/services/couple-spa',
        permanent: true,
      },
      {
        source: '/services/steam-bath-lucknow',
        destination: '/services/steam-bath',
        permanent: true,
      },
      {
        source: '/services/herbal-steam-bath',
        destination: '/services/steam-bath',
        permanent: true,
      },
      {
        source: '/services/jacuzzi-lucknow',
        destination: '/services/jacuzzi',
        permanent: true,
      },
      {
        source: '/services/jacuzzi-hydrotherapy',
        destination: '/services/jacuzzi',
        permanent: true,
      },
      {
        source: '/services/hydrotherapy-jacuzzi',
        destination: '/services/jacuzzi',
        permanent: true,
      },
      {
        source: '/services/body-scrub-lucknow',
        destination: '/services/body-scrub',
        permanent: true,
      },
      {
        source: '/services/body-scrub-polish',
        destination: '/services/body-scrub',
        permanent: true,
      },
      {
        source: '/services/exfoliating-body-scrub',
        destination: '/services/body-scrub',
        permanent: true,
      },
    ];
  },

  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion'],
  },
};

export default nextConfig;

