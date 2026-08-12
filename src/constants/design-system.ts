/**
 * THE CLOUD SPA & WELLNESS CENTER - ENTERPRISE DESIGN SYSTEM SPECIFICATION
 * Design Architecture Inspired by Apple Simplicity, Aman Resorts Serenity & Airbnb Accessibility
 * 
 * Target Persona: Executives, Business Owners, Doctors, High-Net-Worth Couples (24-55)
 * Primary Aesthetic: Japanese Onsen Luxury Minimalist / Soft Sanctuary Palette
 */

export const DESIGN_TOKENS = {
  brand: {
    name: 'The Cloud Spa & Wellness Center',
    tagline: 'Lucknow’s Premier Luxury Wellness Sanctuary',
    location: 'Gomti Nagar, Lucknow',
  },

  // Color Architecture - WCAG AA/AAA Compliant Soft Sanctuary Palette
  colors: {
    // Base Canvas & Surface Tokens (No stark blacks or harsh artificial whites)
    canvas: {
      primary: '#FAF9F5', // Warm Organic Ivory - Main Page Background
      secondary: '#F4F1EA', // Soft Sand Beige - Section Elevation 1
      tertiary: '#ECE7DE', // Muted Alabaster - Section Elevation 2 / Cards
      card: '#FFFFFF', // Pure Crisp Canvas for elevated cards
      cardHover: '#FCFBF8',
      surfaceDark: '#1E2522', // Forest Onyx - Used for Deep Luxury Contrast Blocks
    },
    
    // Luxury Accent Tokens
    accent: {
      goldPrimary: '#C5A059', // Champagne Gold - Primary CTA & Royal Badges
      goldHover: '#B28E46', // Deep Gold Hover State
      goldLight: '#F7F2E8', // Soft Champagne Gold Tint
      goldBorder: '#E5D6B8', // Subtle Metallic Border Frame
      forestPrimary: '#2C3A33', // Deep Japanese Cypress - High Contrast Headings
      forestMuted: '#44564E', // Sage Forest - Subtitle & Secondary Text
      forestLight: '#EBF0ED', // Soft Botanical Tint
    },

    // Neutral Text Hierarchy
    text: {
      primary: '#1A1C1A', // Deep Charcoal (4.5:1+ Contrast ratio over Ivory)
      secondary: '#4A4E4B', // Muted Slate Grey for Body Text (7:1+ ratio)
      tertiary: '#767B78', // Subtle Caption & Meta Text
      inversePrimary: '#FAF9F5', // Soft Ivory text for dark sections
      inverseSecondary: '#D1D6D3',
    },

    // Status & Utility Colors
    status: {
      success: '#2E6930', // Deep Jade Success
      successBg: '#EAF3EB',
      error: '#A32828', // Soft Crimson Error
      errorBg: '#FDF2F2',
      warning: '#B86E00', // Amber Warning
      warningBg: '#FFF9ED',
      info: '#1C5B7D', // Mineral Blue Info
      infoBg: '#F0F7FB',
    },

    // Borders & Dividers
    border: {
      subtle: 'rgba(44, 58, 51, 0.08)', // Ultra-thin organic boundary
      medium: 'rgba(44, 58, 51, 0.16)', // Structural card border
      goldSubtle: 'rgba(197, 160, 89, 0.25)', // Gold framed accent line
      focusRing: '#C5A059', // Accessibility Focus Ring
    },
  },

  // Typography Scale (Mathematical Ratio 1.25 Major Third for Luxury Elegance)
  typography: {
    fontFamilies: {
      heading: 'Playfair Display, Cormorant Garamond, Georgia, serif', // Luxury Hospitality Serif
      body: 'Plus Jakarta Sans, Inter, -apple-system, sans-serif', // Modern Crisp Sans
      mono: 'JetBrains Mono, monospace',
    },
    
    // Exact Font Sizes & Line Heights
    sizes: {
      display1: { fontSize: '3.75rem', lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '500' }, // 60px Hero
      h1: { fontSize: '2.75rem', lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '500' }, // 44px Page Title
      h2: { fontSize: '2.125rem', lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '500' }, // 34px Section Title
      h3: { fontSize: '1.5rem', lineHeight: '1.3', letterSpacing: '0em', fontWeight: '600' }, // 24px Card Title
      h4: { fontSize: '1.25rem', lineHeight: '1.4', letterSpacing: '0em', fontWeight: '600' }, // 20px Subtitle
      bodyLarge: { fontSize: '1.125rem', lineHeight: '1.65', letterSpacing: '0em', fontWeight: '400' }, // 18px Intro Paragraph
      bodyMedium: { fontSize: '1.00rem', lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }, // 16px Standard Body
      bodySmall: { fontSize: '0.875rem', lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }, // 14px Meta & Microcopy
      caption: { fontSize: '0.75rem', lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '500' }, // 12px Uppercase Badges
    },
  },

  // Spacing Scale (8px Grid with Japanese Spatial Harmony - Ma 間)
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1.0rem',  // 16px
    lg: '1.5rem',  // 24px
    xl: '2.5rem',  // 40px
    '2xl': '4.0rem', // 64px
    '3xl': '6.0rem', // 96px
    '4xl': '9.0rem', // 144px
  },

  // Corner Radii (Mathematical Corner Nesting Rule: Inner Radius = Outer Radius - Padding)
  radii: {
    none: '0px',
    sm: '6px', // Small Tag / Button
    md: '12px', // Standard Luxury Card
    lg: '18px', // Outer Modal / Container
    pill: '9999px', // Pill Badge / Floating Action Button
  },

  // Elevation & Shadows (Organic Soft Ambient Occlusion - No Heavy Drop Shadows)
  shadows: {
    subtle: '0 2px 8px -2px rgba(44, 58, 51, 0.04), 0 1px 3px 0 rgba(44, 58, 51, 0.02)',
    card: '0 8px 24px -6px rgba(44, 58, 51, 0.06), 0 2px 6px -1px rgba(44, 58, 51, 0.03)',
    float: '0 20px 40px -12px rgba(44, 58, 51, 0.10), 0 4px 12px -2px rgba(44, 58, 51, 0.05)',
    goldGlow: '0 0 25px rgba(197, 160, 89, 0.20)',
  },

  // Layout Grid & Breakpoints
  breakpoints: {
    sm: '640px',   // Mobile Landscape
    md: '768px',   // Tablet
    lg: '1024px',  // Laptop / Small Desktop
    xl: '1280px',  // Desktop
    '2xl': '1536px', // Ultra-Wide Luxury Display
  },

  containers: {
    contentNarrow: '768px', // Editorial / FAQ / Article Width
    contentMedium: '1024px', // Service Detail Layout
    contentWide: '1280px', // Main Dashboard / Section Container
    contentMax: '1440px', // Max Screen Width Constraint
  },

  // Framer Motion Springs & Transitions (Smooth Fluid Hospitality Feel)
  transitions: {
    smoothEase: [0.25, 1, 0.5, 1], // Apple Style Smooth cubic-bezier
    springGentle: { type: 'spring', stiffness: 260, damping: 20 },
    springBounce: { type: 'spring', stiffness: 300, damping: 15 },
    durationFast: '0.2s',
    durationMedium: '0.4s',
    durationSlow: '0.8s',
  },
};

/**
 * Framer Motion Variant Presets for Reuse Across All Spa UI Components
 */
export const MOTION_ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: DESIGN_TOKENS.transitions.smoothEase },
  },
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  },
  scaleOnHover: {
    whileHover: { scale: 1.02, transition: { duration: 0.25 } },
    whileTap: { scale: 0.98 },
  },
};
