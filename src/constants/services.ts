/**
 * Service & Treatment Catalog with SEO Keyword Mappings & AI Overview Assets
 * The Cloud Spa & Wellness Center, Lucknow
 */

import { SpaTreatment } from '../types/spa';

export const SPA_TREATMENTS: SpaTreatment[] = [
  {
  id: 'thai-massage',
  slug: 'thai-massage',
  name: 'Thai Massage in Gomti Nagar, Lucknow',
  tagline:
    'Authentic Thai Stretching, Acupressure & Full-Body Relaxation',
  shortDescription:
    'Experience authentic Thai Massage in Gomti Nagar, Lucknow with assisted stretching, acupressure and full-body relaxation by trained therapists.',
  fullDescription:
    'The Cloud Spa Thai Massage combines traditional Thai stretching, controlled acupressure and assisted mobility techniques for guests looking for a firm, structured massage experience. The treatment is performed without oil and can be tailored around common areas of stiffness such as the back, shoulders, hips and legs.',
  aiOverview: {
    summary:
      'Thai Massage at The Cloud Spa Gomti Nagar is a traditional oil-free bodywork experience combining assisted stretching and acupressure to support flexibility, relaxation and everyday tension relief.',
    keyPoints: [
      'Authentic Thai Massage in Gomti Nagar, Lucknow',
      'Oil-free assisted stretching and acupressure techniques',
      'Suitable for everyday stiffness, desk-work tension and flexibility goals',
      'Available in 60, 90 and 120-minute sessions',
    ],
    idealDuration:
      '90 Minutes for a complete full-body Thai stretching session',
    expectedOutcome:
      'A structured relaxation experience with improved comfort, mobility and reduced feelings of muscular stiffness.',
  },
  category: 'massage',
  durationMinutes: [60, 90, 120],
  priceINR: { 60: 2499, 90: 3499, 120: 4499 },
  benefits: [
    'Supports flexibility and mobility through assisted stretching',
    'Targets common back, shoulder, hip and leg tension',
    'Oil-free massage experience for guests who prefer traditional Thai techniques',
    'Useful after long desk hours or physically demanding activity',
    'Pressure can be adjusted around guest comfort',
  ],
  popularFor: [
    'IT Professionals & Desk Workers',
    'Athletes & Fitness Enthusiasts',
    'Guests with Back, Neck & Shoulder Stiffness',
    'Travelers Looking for Full-Body Relaxation',
  ],
  contraindications: [
    'Recent bone fractures or acute spinal injuries',
    'Uncontrolled blood pressure or serious cardiovascular conditions',
    'First trimester of pregnancy',
    'Recent abdominal or joint surgery',
  ],
  preparation: [
    'Avoid a heavy meal before the session',
    'Arrive a little early for consultation and changing',
    'Tell your therapist about previous injuries or sensitive areas',
  ],
  aftercare: [
    'Drink water after the session',
    'Perform only light stretching for the rest of the day',
    'Avoid unusually strenuous activity immediately after treatment',
  ],
  targetKeywords: [
    'Thai Massage Lucknow',
    'Thai Massage Gomti Nagar',
    'Best Thai Massage in Lucknow',
    'Best Thai Massage in Gomti Nagar',
    'Thai Massage near me Lucknow',
    'Thai Massage near me Gomti Nagar',
    'Authentic Thai Massage Lucknow',
    'Traditional Thai Massage Gomti Nagar',
    'Thai Massage Center Lucknow',
    'Thai Spa Gomti Nagar',
    'Thai Massage for Back Pain Lucknow',
    'Massage Center Gomti Nagar',
  ],
    image: {
      src: '/images/spa/thai-massage.webp',
      alt: 'Traditional Thai Massage Therapy at The Cloud Spa Gomti Nagar Lucknow',
      width: 1200,
      height: 800,
    },
    faqs: [
      {
        question: 'Do I need to wear special clothing for Thai Massage?',
        answer:
          'We provide freshly sanitized, loose-fitting cotton garments specially tailored for Thai stretching and pressure point therapy.',
      },
      {
        question: 'Is oil used during Traditional Thai Massage?',
        answer:
          'No, authentic Traditional Thai therapy is a dry massage technique performed entirely over comfortable cotton attire.',
      },
      {
        question: 'How often should I get a Thai massage for posture improvement?',
        answer:
          'For acute stiffness and posture correction, a session every 1 to 2 weeks is recommended, followed by monthly maintenance sessions.',
      },
    ],
  },
  {
  id: 'balinese-massage',
  slug: 'balinese-massage',
  name: 'Balinese Massage in Gomti Nagar, Lucknow',
  tagline:
    'Luxury Indonesian Oil Massage for Deep Relaxation & Stress Relief',
  shortDescription:
    'Experience relaxing Balinese Massage in Gomti Nagar, Lucknow with flowing oil strokes, gentle stretching and calming aromatherapy.',
  fullDescription:
    'The Cloud Spa Balinese Massage combines flowing Indonesian massage strokes, gentle stretching, acupressure and relaxing aromatic oils to create a deeply calming full-body treatment. It is ideal for guests looking for stress relief, relaxation and a premium spa experience in Gomti Nagar, Lucknow.',
  aiOverview: {
    summary:
      'Balinese Massage at The Cloud Spa Gomti Nagar is a relaxing Indonesian-inspired oil massage combining flowing strokes, gentle stretching, acupressure and aromatherapy for full-body relaxation.',
    keyPoints: [
      'Balinese Massage in Gomti Nagar, Lucknow',
      'Flowing oil-based massage with gentle stretching and acupressure',
      'A relaxing choice for stress, fatigue and general muscle tension',
      'Available in 60 and 90-minute sessions',
    ],
    idealDuration:
      '90 Minutes for a complete full-body relaxation experience',
    expectedOutcome:
      'A calming spa experience designed to reduce everyday stress and muscular tension while promoting relaxation.',
  },
  category: 'massage',
  durationMinutes: [60, 90],
  priceINR: { 60: 2599, 90: 3699 },
  benefits: [
    'Promotes full-body relaxation and stress reduction',
    'Flowing massage strokes help release everyday muscular tension',
    'Aromatic oils provide a soothing sensory spa experience',
    'Gentle stretching supports comfortable body movement',
    'Ideal for guests seeking a slower, relaxing massage style',
  ],
  popularFor: [
    'Luxury Spa & Wellness Seekers',
    'Guests Experiencing Stress or Fatigue',
    'Weekend Relaxation',
    'Bridal & Pre-Event Spa Sessions',
  ],
  contraindications: [
    'Open wounds, active skin irritation or contagious skin conditions',
    'Known sensitivity or allergy to massage oils or essential oils',
    'Fever or active systemic infection',
  ],
  preparation: [
    'Take a light shower before your appointment',
    'Tell the therapist about sensitive skin or preferred oil aromas',
  ],
  aftercare: [
    'Allow massage oils to remain on the skin for a short period after treatment',
    'Drink water after the session and rest comfortably',
  ],
  targetKeywords: [
    'Balinese Massage Lucknow',
    'Balinese Massage Gomti Nagar',
    'Best Balinese Massage Lucknow',
    'Best Balinese Massage in Gomti Nagar',
    'Balinese Massage near me Lucknow',
    'Balinese Massage near me Gomti Nagar',
    'Luxury Balinese Spa Lucknow',
    'Aromatherapy Massage Gomti Nagar',
    'Relaxation Massage Lucknow',
    'Indonesian Massage Lucknow',
    'Balinese Spa Gomti Nagar',
    'Full Body Massage Gomti Nagar',
  ],
    image: {
      src: '/images/spa/balinese-massage.webp',
      alt: 'Balinese Massage Spa Treatment at The Cloud Spa Lucknow',
      width: 1200,
      height: 800,
    },
    faqs: [
      {
        question: 'What oils are used in Balinese massage at The Cloud Spa?',
        answer:
          'We use pure cold-pressed almond and sesame oil infused with natural lemongrass, frangipani, jasmine, and lavender therapeutic essences.',
      },
      {
        question: 'Is Balinese massage suitable for first-time spa visitors?',
        answer:
          'Yes, Balinese massage is gentle yet effective, making it an ideal choice for both beginners and experienced spa enthusiasts.',
      },
    ],
  },
  {
  id: 'deep-tissue-massage',
  slug: 'deep-tissue-massage',
  name: 'Deep Tissue Massage in Gomti Nagar, Lucknow',
  tagline: 'Targeted Deep Pressure for Muscle Recovery & Tension Relief',
  shortDescription:
    'Get targeted deep tissue massage in Gomti Nagar, Lucknow for tight shoulders, back tension, muscle knots and post-workout recovery.',
  fullDescription:
    'The Cloud Spa Deep Tissue Massage uses slow, controlled pressure and focused bodywork techniques to address deeper areas of muscular tension. It is designed for guests looking for a firm, targeted massage experience for everyday stiffness, desk-related tension and post-workout muscle fatigue in Gomti Nagar, Lucknow.',
  aiOverview: {
    summary:
      'Deep Tissue Massage at The Cloud Spa Gomti Nagar is a firm, targeted massage experience focused on areas of persistent muscular tension, including the back, neck, shoulders and legs.',
    keyPoints: [
      'Targeted deep-pressure massage in Gomti Nagar, Lucknow',
      'Focus on back, neck, shoulders and other high-tension areas',
      'Suitable for desk-work tension and post-workout muscle fatigue',
      'Available in 60, 90 and 120-minute sessions',
    ],
    idealDuration:
      '90 Minutes for addressing multiple tension areas during one session',
    expectedOutcome:
      'A targeted relaxation and recovery experience with reduced feelings of muscular tightness and improved comfort.',
  },
  category: 'massage',
  durationMinutes: [60, 90, 120],
  priceINR: { 60: 2799, 90: 3899, 120: 4899 },
  benefits: [
    'Targets persistent muscle tightness and common tension areas',
    'Focused pressure for neck, shoulder, back and leg discomfort',
    'Useful for post-workout recovery and everyday muscular fatigue',
    'Supports relaxation after long desk or driving hours',
    'Customizable pressure based on guest comfort',
  ],
  popularFor: [
    'Gym Enthusiasts & Athletes',
    'Corporate Executives & Desk Workers',
    'Guests with Tight Neck, Shoulders or Back',
    'Guests Looking for a Firm Massage Experience',
  ],
  contraindications: [
    'Blood clotting disorders or use of blood-thinning medication',
    'Recent major orthopedic surgery',
    'Severe osteoporosis or active varicose veins',
  ],
  preparation: [
    'Stay comfortably hydrated before your appointment',
    'Avoid a heavy meal immediately before the session',
    'Tell the therapist about areas of sensitivity or previous injuries',
  ],
  aftercare: [
    'Drink water after the session',
    'Allow the body to rest after a firm-pressure treatment',
    'Avoid unusually strenuous activity immediately after the session',
  ],
  targetKeywords: [
    'Deep Tissue Massage Lucknow',
    'Deep Tissue Massage Gomti Nagar',
    'Best Deep Tissue Massage Lucknow',
    'Deep Tissue Massage near me Lucknow',
    'Deep Tissue Massage near me Gomti Nagar',
    'Deep Tissue Massage for Back Pain Lucknow',
    'Back Pain Relief Massage Lucknow',
    'Muscle Knot Massage Gomti Nagar',
    'Pain Relief Massage Gomti Nagar',
    'Deep Tissue Massage Center Lucknow',
    'Massage Center Gomti Nagar',
  ],
    image: {
      src: '/images/spa/deep-tissue-massage.webp',
      alt: 'Deep Tissue Massage Therapy at The Cloud Spa Gomti Nagar',
      width: 1200,
      height: 800,
    },
    faqs: [
      {
        question: 'Does Deep Tissue Massage hurt?',
        answer:
          'You may feel targeted pressure on tight muscle knots, often described as a "satisfying release." Your therapist maintains continuous communication to adjust pressure to your comfort.',
      },
      {
        question: 'How is Deep Tissue different from Swedish Massage?',
        answer:
          'While Swedish focuses on superficial relaxation and light strokes, Deep Tissue applies intense, firm pressure to penetrate deeper muscle layers and fascia.',
      },
    ],
  },
  {
  id: 'swedish-massage',
  slug: 'swedish-massage',
  name: 'Swedish Massage in Gomti Nagar, Lucknow',
  tagline:
    'Gentle Full-Body Massage for Stress Relief, Relaxation & Recovery',
  shortDescription:
    'Enjoy a relaxing Swedish Massage in Gomti Nagar, Lucknow with gentle-to-medium pressure, flowing strokes and full-body relaxation.',
  fullDescription:
    'The Cloud Spa Swedish Massage is a classic relaxation-focused full-body treatment using smooth flowing strokes, kneading and rhythmic techniques. It is designed for guests looking for a gentle massage experience to unwind after work, travel or a busy week in Lucknow.',
  aiOverview: {
    summary:
      'Swedish Massage at The Cloud Spa Gomti Nagar is a gentle-to-medium pressure full-body massage designed for relaxation, stress relief and everyday muscle fatigue.',
    keyPoints: [
      'Swedish Massage in Gomti Nagar, Lucknow',
      'Gentle-to-medium pressure full-body massage',
      'Ideal for stress, fatigue and first-time spa visitors',
      'Available in 60 and 90-minute sessions',
    ],
    idealDuration:
      '60 or 90 Minutes depending on the desired relaxation time',
    expectedOutcome:
      'A calm, refreshed and relaxing full-body spa experience.',
  },
  category: 'massage',
  durationMinutes: [60, 90],
  priceINR: { 60: 2299, 90: 3299 },
  benefits: [
    'Promotes full-body relaxation after a busy day',
    'Helps ease everyday muscle fatigue and physical tension',
    'Gentle-to-medium pressure suitable for relaxation-focused sessions',
    'A comfortable choice for first-time spa guests',
    'Supports a calm and restorative wellness experience',
  ],
  popularFor: [
    'First-Time Spa Guests',
    'Corporate Professionals & Desk Workers',
    'Guests Experiencing Everyday Stress',
    'Guests Preferring Gentle Massage Pressure',
  ],
  contraindications: [
    'Fever or active infection',
    'Open wounds or active skin irritation',
    'Any condition where massage has been medically restricted',
  ],
  preparation: [
    'Arrive a few minutes early to settle in before the session',
    'Tell your therapist your preferred pressure level',
  ],
  aftercare: [
    'Drink water after the session',
    'Allow yourself time to rest and relax after treatment',
  ],
  targetKeywords: [
    'Swedish Massage Lucknow',
    'Swedish Massage Gomti Nagar',
    'Best Swedish Massage Lucknow',
    'Best Swedish Massage in Gomti Nagar',
    'Swedish Massage near me Lucknow',
    'Swedish Massage near me Gomti Nagar',
    'Relaxing Massage Lucknow',
    'Full Body Massage Gomti Nagar',
    'Gentle Massage Center Lucknow',
    'Relaxation Spa Gomti Nagar',
    'Stress Relief Massage Lucknow',
    'Massage Center Gomti Nagar',
  ],
    image: {
      src: '/images/spa/swedish-massage.webp',
      alt: 'Swedish Massage Therapy at The Cloud Spa Lucknow',
      width: 1200,
      height: 800,
    },
    faqs: [
      {
        question: 'Is Swedish massage good for stress relief?',
        answer:
          'Yes! Swedish massage is scientifically proven to reduce stress hormones like cortisol while stimulating endorphins and serotonin.',
      },
    ],
  },
  {
  id: 'aromatherapy',
  slug: 'aromatherapy',
  name: 'Aromatherapy Massage in Gomti Nagar, Lucknow',
  tagline:
    'Relaxing Essential Oil Massage for Stress Relief, Calm & Wellness',
  shortDescription:
    'Enjoy a soothing Aromatherapy Massage in Gomti Nagar, Lucknow using calming essential oils and gentle massage techniques for relaxation and stress relief.',
  fullDescription:
    'The Cloud Spa Aromatherapy Massage combines gentle massage techniques with carefully selected essential oil aromas to create a calming wellness experience. It is designed for guests seeking relaxation, stress relief and a peaceful spa session in Gomti Nagar, Lucknow.',
  aiOverview: {
    summary:
      'Aromatherapy Massage at The Cloud Spa Gomti Nagar combines gentle massage with selected essential oil aromas to create a relaxing wellness experience focused on stress reduction and calm.',
    keyPoints: [
      'Aromatherapy Massage in Gomti Nagar, Lucknow',
      'Relaxing massage with selected essential oil aromas',
      'Designed for guests seeking stress relief and a calming spa experience',
      'Available in 60 and 90-minute sessions',
    ],
    idealDuration:
      '90 Minutes for a longer relaxation-focused aromatherapy experience',
    expectedOutcome:
      'A peaceful and relaxing spa session designed to reduce everyday stress and support overall wellbeing.',
  },
  category: 'therapy',
  durationMinutes: [60, 90],
  priceINR: { 60: 2699, 90: 3799 },
  benefits: [
    'Creates a calming and relaxing spa experience',
    'Gentle massage helps ease everyday physical tension',
    'Essential oil aromas enhance the sensory wellness experience',
    'Suitable for stress and mental fatigue from busy routines',
    'Customizable aroma preferences for a more personalized session',
  ],
  popularFor: [
    'Stress & Relaxation',
    'Guests Seeking Gentle Massage',
    'Wellness & Self-Care',
    'Relaxation After Busy Work Days',
  ],
  contraindications: [
    'Known allergies or sensitivity to specific essential oils',
    'Severe respiratory sensitivity to strong fragrances',
    'Any condition where massage or specific oils have been medically restricted',
  ],
  preparation: [
    'Tell the therapist about allergies or fragrance sensitivities',
    'Avoid applying strong perfume immediately before the appointment',
  ],
  aftercare: [
    'Drink water after the session',
    'Relax for a short period after treatment and avoid rushing into strenuous activity',
  ],
  targetKeywords: [
    'Aromatherapy Massage Lucknow',
    'Aromatherapy Massage Gomti Nagar',
    'Best Aromatherapy Massage Lucknow',
    'Aromatherapy Massage near me Lucknow',
    'Aromatherapy Massage near me Gomti Nagar',
    'Essential Oil Massage Lucknow',
    'Essential Oil Spa Gomti Nagar',
    'Stress Relief Massage Lucknow',
    'Relaxation Massage Gomti Nagar',
    'Aromatic Spa Lucknow',
    'Aromatherapy Spa Gomti Nagar',
    'Relaxing Spa near me Lucknow',
  ],
    image: {
      src: '/images/spa/aromatherapy-oils.webp',
      alt: 'Aromatherapy Essential Oil Therapy at The Cloud Spa Lucknow',
      width: 1200,
      height: 800,
    },
    faqs: [
      {
        question: 'Can I choose my essential oil blend?',
        answer:
          'Yes! Prior to your treatment, you will experience an scent sampling test to select the exact essential oil blend your body craves.',
      },
    ],
  },
  {
  id: 'hot-stone-massage',
  slug: 'hot-stone-massage',
  name: 'Hot Stone Massage in Gomti Nagar, Lucknow',
  tagline:
    'Warm Basalt Stone Massage for Deep Relaxation & Muscle Comfort',
  shortDescription:
    'Experience a relaxing Hot Stone Massage in Gomti Nagar, Lucknow using warm basalt stones and massage techniques for deep comfort and relaxation.',
  fullDescription:
    'The Cloud Spa Hot Stone Massage combines controlled warm basalt stones with massage techniques to create a soothing thermal wellness experience. It is designed for guests seeking deep relaxation, warmth and relief from everyday muscular tension in Gomti Nagar, Lucknow.',
  aiOverview: {
    summary:
      'Hot Stone Massage at The Cloud Spa Gomti Nagar combines warm basalt stones with massage techniques for a deeply relaxing thermal spa experience.',
    keyPoints: [
      'Hot Stone Massage in Gomti Nagar, Lucknow',
      'Warm basalt stones used alongside massage techniques',
      'Suitable for relaxation and everyday muscular tension',
      'Available in 60 and 90-minute sessions',
    ],
    idealDuration:
      '90 Minutes for a complete full-body hot stone relaxation experience',
    expectedOutcome:
      'A warm, calming spa experience designed to reduce feelings of everyday muscle tension and promote relaxation.',
  },
  category: 'therapy',
  durationMinutes: [60, 90],
  priceINR: { 60: 2999, 90: 4199 },
  benefits: [
    'Provides soothing warmth during a relaxing massage experience',
    'Helps ease feelings of everyday muscular tightness',
    'Creates a calming thermal wellness experience',
    'Ideal for guests who enjoy warm spa treatments',
  ],
  popularFor: [
    'Deep Relaxation',
    'Cold Weather & Winter Wellness',
    'Guests Seeking Warm Therapy',
  ],
  contraindications: [
    'Reduced heat sensitivity or certain neuropathy conditions',
    'Certain cardiovascular or blood-pressure conditions',
    'Open skin wounds or irritated skin',
    'Pregnancy unless cleared by a qualified healthcare professional',
  ],
  preparation: [
    'Stay hydrated before your appointment',
    'Tell the therapist if you are sensitive to heat',
  ],
  aftercare: [
    'Cool down gradually after the session',
    'Drink water after treatment',
  ],
  targetKeywords: [
    'Hot Stone Massage Lucknow',
    'Hot Stone Massage Gomti Nagar',
    'Best Hot Stone Massage Lucknow',
    'Hot Stone Massage near me Lucknow',
    'Hot Stone Massage near me Gomti Nagar',
    'Warm Stone Massage Lucknow',
    'Luxury Hot Stone Spa Gomti Nagar',
    'Thermal Massage Lucknow',
    'Hot Stone Spa Lucknow',
    'Hot Stone Therapy Gomti Nagar',
  ],
    image: {
      src: '/images/spa/hot-stone-massage.webp',
      alt: 'Volcanic Hot Stone Therapy at The Cloud Spa Gomti Nagar',
      width: 1200,
      height: 800,
    },
    faqs: [
      {
        question: 'Are the stones hot enough to burn skin?',
        answer:
          'No! Stones are monitored with electronic thermostats between 120°F–130°F (49°C–54°C) and tested on therapist hands prior to contact.',
      },
    ],
  },
  {
  id: 'couple-spa',
  slug: 'couple-spa',
  name: 'Luxury Couple Spa in Gomti Nagar, Lucknow',
  tagline:
    'Private VIP Couple Spa Suite with Synchronized Massage & Jacuzzi',
  shortDescription:
    'Enjoy a private couple spa experience in Gomti Nagar with synchronized massages, a luxury suite, Jacuzzi and relaxing wellness rituals.',
  fullDescription:
    'The Cloud Spa Couple Spa experience is designed for partners celebrating an anniversary, honeymoon, birthday or simply looking to relax together. Guests enjoy a private VIP suite with synchronized massage sessions, a dedicated Jacuzzi experience and a calm, comfortable wellness setting in Gomti Nagar, Lucknow.',
  aiOverview: {
    summary:
      'Couple Spa at The Cloud Spa Gomti Nagar is a private wellness experience featuring synchronized massages, a VIP couple suite and Jacuzzi access for shared relaxation and special occasions.',
    keyPoints: [
      'Private couple spa suite in Gomti Nagar, Lucknow',
      'Synchronized massage sessions with two therapists',
      'Private Jacuzzi experience included in selected packages',
      '90, 120 and 150-minute package options',
    ],
    idealDuration:
      '120 Minutes for a complete massage and Jacuzzi experience',
    expectedOutcome:
      'A private shared relaxation experience designed for couples and special occasions.',
  },
  category: 'couple',
  durationMinutes: [90, 120, 150],
  priceINR: { 90: 5999, 120: 7999, 150: 9999 },
  benefits: [
    'Private VIP couple spa suite with enhanced privacy',
    'Synchronized side-by-side massage experience',
    'Jacuzzi hydrotherapy option for shared relaxation',
    'Ideal for anniversaries, honeymoons and special occasions',
    'Convenient luxury spa experience in Gomti Nagar, Lucknow',
  ],
  popularFor: [
    'Anniversary Celebrations & Birthdays',
    'Honeymoon & Romantic Couples',
    'Valentine & Special Occasion Gifts',
  ],
  contraindications: [
    'Standard pregnancy precautions for Jacuzzi heat',
    'Certain cardiovascular conditions sensitive to hot hydrotherapy',
  ],
  preparation: [
    'Book in advance to secure the private couple suite',
    'Comfortable attire or spa-provided attire can be used for the Jacuzzi session',
  ],
  aftercare: [
    'Relax and hydrate after the session',
    'Take time to cool down gradually after Jacuzzi hydrotherapy',
  ],
  targetKeywords: [
    'Couple Spa Lucknow',
    'Best Couple Spa in Gomti Nagar',
    'Couple Spa Gomti Nagar',
    'Couple Massage Lucknow',
    'Couple Massage Gomti Nagar',
    'Private Couple Spa Lucknow',
    'Luxury Couple Spa Lucknow',
    'Couple Spa with Jacuzzi Lucknow',
    'Couple Spa with Jacuzzi Gomti Nagar',
    'Romantic Spa Day Lucknow',
    'Couple Spa near me Lucknow',
    'Couple Spa near me Gomti Nagar',
  ],
    image: {
      src: '/images/spa/couples-spa.webp',
      alt: 'Private Luxury Couple Spa Suite at The Cloud Spa Gomti Nagar Lucknow',
      width: 1200,
      height: 800,
    },
    faqs: [
      {
        question: 'Is prior booking mandatory for the couple suite?',
        answer:
          'Yes, because our VIP couple suite is in high demand, prior booking at least 3-6 hours in advance is strongly recommended.',
      },
      {
        question: 'Can we choose different massage types for each person in the couple package?',
        answer:
          'Absolutely! Each partner can select their preferred massage style (e.g., Deep Tissue for him, Balinese for her).',
      },
    ],
  },
  {
  id: 'steam-bath',
  slug: 'steam-bath',
  name: 'Luxury Steam Bath in Gomti Nagar, Lucknow',
  tagline: 'Herbal Steam Wellness for Deep Relaxation & Muscle Recovery',
  shortDescription:
    'Relax in a private herbal steam bath with warm eucalyptus-infused moisture designed for relaxation, skin care and pre-massage muscle preparation.',
  fullDescription:
    'The Cloud Spa Steam Bath experience provides a private warm-steam wellness session with optional eucalyptus aromatherapy. The humid heat creates a relaxing environment, helps soften the skin and can prepare tired muscles for a subsequent massage session.',
  aiOverview: {
    summary:
      'Herbal Steam Bath at The Cloud Spa Gomti Nagar is a private warm-steam wellness experience with optional eucalyptus aromatherapy for relaxation and pre-massage preparation.',
    keyPoints: [
      'Private steam bath experience in Gomti Nagar, Lucknow',
      'Warm humid environment with optional eucalyptus aroma',
      'Useful as a relaxation or pre-massage wellness session',
      'Available in 30 and 45-minute sessions',
    ],
    idealDuration:
      '30 Minutes for a comfortable steam wellness session',
    expectedOutcome:
      'A relaxing warm-steam experience with refreshed skin and comfortably warmed muscles.',
  },
  category: 'hydrotherapy',
  durationMinutes: [30, 45],
  priceINR: { 30: 999, 45: 1499 },
  benefits: [
    'Provides a relaxing warm-steam wellness experience',
    'Helps soften skin before selected spa treatments',
    'Can gently warm muscles before massage therapy',
    'Creates a calming private spa environment',
  ],
  popularFor: [
    'Pre-Massage Relaxation',
    'Post-Workout Recovery',
    'Steam Wellness & Self-Care',
  ],
  contraindications: [
    'Uncontrolled blood pressure conditions',
    'Certain cardiovascular conditions',
    'Pregnancy unless cleared by a qualified healthcare professional',
    'Dizziness or heat sensitivity',
  ],
  preparation: [
    'Drink water before your steam session',
    'Remove watches and metal jewellery before entering',
  ],
  aftercare: [
    'Cool down gradually after leaving the steam room',
    'Drink water after the session to stay hydrated',
  ],
  targetKeywords: [
    'Steam Bath Lucknow',
    'Best Steam Bath Gomti Nagar',
    'Steam Bath in Gomti Nagar',
    'Luxury Steam Bath Lucknow',
    'Herbal Steam Bath Lucknow',
    'Steam Room Gomti Nagar',
    'Spa with Steam Bath Lucknow',
    'Steam Bath near me Lucknow',
    'Steam Bath near me Gomti Nagar',
  ],
    image: {
      src: '/images/spa/steam-bath.webp',
      alt: 'Herbal Detox Steam Chamber at The Cloud Spa Lucknow',
      width: 1200,
      height: 800,
    },
    faqs: [
      {
        question: 'Should I do steam before or after a massage?',
        answer:
          'Taking steam BEFORE a massage softens tight muscle fibers and opens pores, making the subsequent massage significantly more effective.',
      },
    ],
  },
  {
  id: 'jacuzzi',
  slug: 'jacuzzi',
  name: 'Luxury Jacuzzi Spa & Hydrotherapy Bath',
  tagline: 'Private Multi-Jet Hydrotherapy for Deep Relaxation & Muscle Recovery',
  shortDescription:
    'Relax in a private Jacuzzi spa experience with warm hydrotherapy jets, Epsom salts and calming aromatherapy in Gomti Nagar, Lucknow.',
  fullDescription:
    'The Cloud Spa Jacuzzi experience combines warm buoyant water, targeted multi-jet hydrotherapy, Epsom mineral salts and calming aromatherapy to create a deeply relaxing private spa session. The warm water environment can help ease everyday muscle tension and provide a comfortable recovery experience after workouts or long working hours.',
  aiOverview: {
    summary:
      'Jacuzzi Spa at The Cloud Spa Gomti Nagar is a private hydrotherapy experience using warm water, adjustable jets, Epsom salts and relaxing aromatherapy for stress relief, muscle relaxation and a premium wellness break.',
    keyPoints: [
      'Private Jacuzzi hydrotherapy experience in Gomti Nagar, Lucknow',
      'Adjustable water jets for back, legs and foot relaxation',
      'Epsom salts and relaxing aromatherapy options',
      'Available in 30, 45 and 60-minute sessions',
    ],
    idealDuration:
      '45 Minutes for a complete private hydrotherapy and relaxation session',
    expectedOutcome:
      'A soothing, weightless relaxation experience with temporary relief from everyday muscle tension and fatigue.',
  },
  category: 'hydrotherapy',
  durationMinutes: [30, 45, 60],
  priceINR: { 30: 1499, 45: 1999, 60: 2499 },
  benefits: [
    'Provides a relaxing warm-water hydrotherapy experience',
    'Helps soothe everyday muscle fatigue after work or exercise',
    'Adjustable jets provide targeted water-pressure relaxation',
    'Creates a private premium spa and wellness experience',
  ],
  popularFor: [
    'Couples & Luxury Pampering',
    'Post-Workout Recovery',
    'Stress Relief & Relaxation',
  ],
  contraindications: [
    'Open skin wounds or unhealed incisions',
    'Certain cardiovascular conditions sensitive to warm-water immersion',
    'Active skin infections',
  ],
  preparation: [
    'Shower before entering the Jacuzzi',
    'Use clean swimwear or the spa-provided disposable spa attire',
  ],
  aftercare: [
    'Drink fresh water after the session to stay hydrated',
    'Allow your body to cool gradually after warm-water therapy',
  ],
  targetKeywords: [
    'Jacuzzi Lucknow',
    'Jacuzzi Spa Lucknow',
    'Jacuzzi in Gomti Nagar',
    'Luxury Spa with Jacuzzi Lucknow',
    'Private Jacuzzi Spa Gomti Nagar',
    'Jacuzzi Bath Center Lucknow',
    'Hydrotherapy Spa Gomti Nagar',
    'Spa with Jacuzzi near me Lucknow',
    'Jacuzzi near me Gomti Nagar',
  ],
    image: {
      src: '/images/spa/jacuzzi.webp',
      alt: 'Luxury Hydrotherapy Jacuzzi Soak at The Cloud Spa Gomti Nagar',
      width: 1200,
      height: 800,
    },
    faqs: [
      {
        question: 'Are the Jacuzzi tubs cleaned between clients?',
        answer:
          'Yes! Every Jacuzzi tub undergoes complete draining, hospital-grade sanitation, and fresh water refill after every single use.',
      },
    ],
  },
  {
  id: 'body-scrub',
  slug: 'body-scrub',
  name: 'Body Scrub & Body Polish in Gomti Nagar, Lucknow',
  tagline:
    'Luxury Full-Body Exfoliation for Smooth, Fresh & Radiant Skin',
  shortDescription:
    'Enjoy a relaxing Body Scrub and Body Polish in Gomti Nagar, Lucknow to gently exfoliate dry skin and leave your body feeling smooth and refreshed.',
  fullDescription:
    'The Cloud Spa Body Scrub & Body Polish treatment is a relaxing body-care experience designed to gently exfoliate the skin and support a smoother, refreshed appearance. Our therapists use selected scrub blends followed by cleansing and moisturizing care for a comfortable spa experience in Gomti Nagar, Lucknow.',
  aiOverview: {
    summary:
      'Body Scrub & Body Polish at The Cloud Spa Gomti Nagar is a relaxing exfoliation treatment designed to remove surface dead skin buildup and leave the skin feeling smoother and refreshed.',
    keyPoints: [
      'Body Scrub in Gomti Nagar, Lucknow',
      'Gentle full-body exfoliation and polishing treatment',
      'Choice of selected botanical scrub blends',
      'Available in 45 and 60-minute sessions',
    ],
    idealDuration:
      '60 Minutes for a complete full-body exfoliation and moisturizing experience',
    expectedOutcome:
      'Smoother-feeling skin and a refreshed full-body spa experience.',
  },
  category: 'body-care',
  durationMinutes: [45, 60],
  priceINR: { 45: 1999, 60: 2699 },
  benefits: [
    'Helps remove surface dead-skin buildup',
    'Leaves skin feeling smoother and refreshed',
    'Supports a relaxing full-body self-care routine',
    'Helps prepare the skin for moisturizing products',
  ],
  popularFor: [
    'Bridal & Pre-Event Grooming',
    'Dry or Dull Skin',
    'Full-Body Spa & Self-Care',
  ],
  contraindications: [
    'Sunburn or severely irritated skin',
    'Open cuts or active skin flare-ups',
    'Recent shaving or waxing that may make the skin sensitive',
  ],
  preparation: [
    'Avoid shaving or waxing immediately before the treatment',
    'Tell the therapist about any skin sensitivity or irritation',
  ],
  aftercare: [
    'Use a gentle moisturizer after treatment',
    'Protect freshly exfoliated skin from excessive sun exposure',
  ],
  targetKeywords: [
    'Body Scrub Lucknow',
    'Body Scrub Gomti Nagar',
    'Best Body Scrub Lucknow',
    'Body Scrub near me Lucknow',
    'Body Scrub near me Gomti Nagar',
    'Body Polish Spa Gomti Nagar',
    'Full Body Polish Lucknow',
    'Full Body Spa Lucknow',
    'Luxury Body Scrub Lucknow',
    'Body Exfoliation Spa Lucknow',
    'Bridal Body Polish Lucknow',
    'Body Scrub and Massage Lucknow',
  ],
    image: {
      src: '/images/spa/body-scrub.webp',
      alt: 'Exfoliating Body Scrub & Polish Treatment at The Cloud Spa Lucknow',
      width: 1200,
      height: 800,
    },
    faqs: [
      {
        question: 'Can I combine a Body Scrub with a full body massage?',
        answer:
          'Yes! Pairing a Body Scrub with a Swedish or Balinese massage is the ultimate head-to-toe pampering ritual.',
      },
    ],
  },
];

/**
 * Helper function to find a treatment by slug or alias
 */
export function getTreatmentBySlug(slugParam: string): SpaTreatment | undefined {
  const normalized = slugParam.toLowerCase().trim();
  return SPA_TREATMENTS.find(
    (t) =>
      t.slug === normalized ||
      t.id === normalized ||
      (t.aliases && t.aliases.includes(normalized))
  );
}
