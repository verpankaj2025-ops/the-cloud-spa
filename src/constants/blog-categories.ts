import { BlogCategory } from '../types/blog';

export interface CategoryMetadata {
  name: BlogCategory;
  slug: string;
  description: string;
  iconName: string;
}

export const BLOG_CATEGORIES: CategoryMetadata[] = [
  {
    name: 'Thai Massage',
    slug: 'thai-massage',
    description: 'Ancient yoga-assisted stretching, SEN line pressure, and oil-free bodywork for joint flexibility.',
    iconName: 'Sparkles',
  },
  {
    name: 'Deep Tissue Massage',
    slug: 'deep-tissue-massage',
    description: 'Targeted deep muscle fiber friction and knot release for desk strain and chronic stiffness.',
    iconName: 'Activity',
  },
  {
    name: 'Balinese Massage',
    slug: 'balinese-massage',
    description: 'Traditional Indonesian pressure points, gentle rolling, and warm herbal aromatherapy.',
    iconName: 'Heart',
  },
  {
    name: 'Swedish Massage',
    slug: 'swedish-massage',
    description: 'Gentle long effleurage strokes designed to boost lymphatic circulation and induce deep sleep.',
    iconName: 'Feather',
  },
  {
    name: 'Aromatherapy',
    slug: 'aromatherapy',
    description: 'Pure essential oil formulations targeting anxiety reduction, mood elevation, and respiratory wellness.',
    iconName: 'Droplet',
  },
  {
    name: 'Hot Stone Massage',
    slug: 'hot-stone-massage',
    description: 'Thermodynamic volcanic basalt stones radiating soothing heat into deep muscle layers.',
    iconName: 'Flame',
  },
  {
    name: 'Couple Spa',
    slug: 'couple-spa',
    description: 'Private luxury suite experiences, romantic anniversary escapes, and tandem relaxation rituals.',
    iconName: 'Users',
  },
  {
    name: 'Body Scrub',
    slug: 'body-scrub',
    description: 'Exfoliating organic herbal scrubs, dead skin cell removal, and deep skin glow treatments.',
    iconName: 'Sun',
  },
  {
    name: 'Steam Bath',
    slug: 'steam-bath',
    description: 'Hydrothermal detox, pore cleansing, sinus clearance, and herbal steam sauna therapy.',
    iconName: 'CloudRain',
  },
  {
    name: 'Wellness',
    slug: 'wellness',
    description: 'Holistic health tips, Ayurvedic wisdom, self-care routines, and preventive bodywork guides.',
    iconName: 'ShieldCheck',
  },
  {
    name: 'Stress Relief',
    slug: 'stress-relief',
    description: 'Cortisol reduction, tension headache relief, insomnia solutions, and nervous system calm.',
    iconName: 'Smile',
  },
  {
    name: 'Corporate Wellness',
    slug: 'corporate-wellness',
    description: 'Ergonomic guides for IT professionals, executive stress relief, and workplace wellness in Lucknow.',
    iconName: 'Briefcase',
  },
  {
    name: 'Lifestyle',
    slug: 'lifestyle',
    description: 'Spa etiquette, bridal beauty timelines, seasonal wellness guides, and luxury self-care tips.',
    iconName: 'Compass',
  },
  {
    name: 'Fitness Recovery',
    slug: 'fitness-recovery',
    description: 'Post-gym muscle soreness relief, fascia release, and posture correction for active adults.',
    iconName: 'Dumbbell',
  },
  {
    name: 'Sports Recovery',
    slug: 'sports-recovery',
    description: 'Marathon runner recovery, athletic injury prevention, and muscle flexibility protocols.',
    iconName: 'Trophy',
  },
];

export function getCategoryBySlug(slug: string): CategoryMetadata | undefined {
  return BLOG_CATEGORIES.find((cat) => cat.slug === slug);
}
