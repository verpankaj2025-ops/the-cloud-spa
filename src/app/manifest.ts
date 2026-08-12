import { MetadataRoute } from 'next';
import { BUSINESS_DETAILS } from '../constants/business';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_DETAILS.name,
    short_name: 'Cloud Spa',
    description: 'Luxury Spa & Wellness Center in Gomti Nagar, Lucknow',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9F5',
    theme_color: '#1E2522',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
