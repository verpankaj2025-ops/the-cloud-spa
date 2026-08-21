/**
 * Service & Treatment Catalog with SEO Keyword Mappings & AI Overview Assets
 * The Cloud Spa & Wellness Center, Lucknow
 */

import { SpaTreatment } from '../types/spa';

export const SPA_TREATMENTS: SpaTreatment[] = [
  {
    id: 'thai-massage',
    slug: 'thai-massage',
    aliases: ['traditional-thai-massage'],
    name: 'Authentic Traditional Thai Massage',
    tagline: 'Ancient Yoga-Assisted Stretching & SEN Energy Line Therapy',
    shortDescription:
      'Re-energize your body with authentic Thai acupressure and gentle yoga stretching performed by certified therapists without oil.',
    fullDescription:
      'Originating from ancient Buddhist and Ayurvedic medicinal practices, our Traditional Thai Massage is a dry, oil-free bodywork therapy. Senior therapists apply rhythmic palm and thumb pressure along key SEN energy pathways accompanied by passive yoga stretches. This therapeutic sequence aligns postural imbalances, dissolves muscular stiffness, opens tight joints, and dramatically enhances physical flexibility.',
    aiOverview: {
      summary:
        'Traditional Thai Massage at The Cloud Spa Lucknow is a dry, oil-free bodywork therapy combining rhythmic acupressure and passive yoga stretches along SEN energy lines to relieve stiffness, improve posture, and enhance flexibility.',
      keyPoints: [
        'Dry massage performed over comfortable cotton attire provided by the spa',
        'Uses thumb, palm, elbow, and knee pressure combined with assisted yoga stretching',
        'Targets chronic back strain, postural misalignment, and joint stiffness',
        'Session durations available in 60, 90, and 120 minutes',
      ],
      idealDuration: '90 Minutes recommended for full-body flexibility and tension release',
      expectedOutcome: 'Immediate improvement in joint range of motion, relief from postural tension, and rejuvenated physical vitality.',
    },
    category: 'massage',
    durationMinutes: [60, 90, 120],
    priceINR: { 60: 2499, 90: 3499, 120: 4499 },
    benefits: [
      'Relieves intense back strain and spinal muscular tightness',
      'Enhances joint mobility, flexibility, and athletic mobility',
      'Boosts blood circulation and energetic vitality',
      'Stimulates SEN energy pathways for systemic balance',
      'Helps correct desk-bound postural slumping',
    ],
    popularFor: [
      'IT Professionals & Desk Workers',
      'Athletes & Fitness Enthusiasts',
      'Chronic Lower Back & Neck Tension Sufferers',
      'Travelers Seeking Quick Jet-Lag Recovery',
    ],
    contraindications: [
      'Recent bone fractures or acute spinal disc herniation',
      'Uncontrolled high blood pressure or severe cardiovascular disease',
      'First trimester of pregnancy',
      'Recent abdominal or joint surgical procedures',
    ],
    preparation: [
      'Avoid heavy meals at least 1 to 2 hours before your session',
      'Arrive 15 minutes prior to complete your consultation and change into loose cotton attire',
      'Inform your therapist about any previous spinal or joint injuries',
    ],
    aftercare: [
      'Drink plenty of warm water or herbal tea to support metabolic detoxification',
      'Perform light range-of-motion stretching over the next 24 hours',
      'Avoid strenuous heavy lifting immediately after your session',
    ],
    targetKeywords: [
      'Thai Massage Lucknow',
      'Best Thai Spa Gomti Nagar',
      'Traditional Thai Therapy Lucknow',
      'Dry Massage Center Lucknow',
      'Yoga Massage Lucknow',
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
    name: 'Balinese Royal Relaxation Massage',
    tagline: 'Exotic Indonesian Oil Therapy, Percussion & Acupressure',
    shortDescription:
      'Immerse yourself in a luxurious blend of warm essential oils, long gliding strokes, gentle skin folding, and rhythmic pressure.',
    fullDescription:
      'Transport your senses to the tropical serenity of Bali. The Balinese Royal Massage combines gentle stretches, acupressure, skin-rolling techniques, and fragrant warm exotic essential oils to stimulate blood circulation, relieve deep anxiety, and induce profound mental tranquility.',
    aiOverview: {
      summary:
        'Balinese Royal Massage is an Indonesian holistic oil treatment utilizing firm palm strokes, gentle skin rolling, acupressure, and warm herbal essential oils to relieve stress, improve circulation, and soothe deep muscular ache.',
      keyPoints: [
        'Combines Swedish gliding, Thai stretches, and Ayurvedic acupressure',
        'Uses organic cold-pressed warm oils like Frangipani, Lemongrass, and Sandalwood',
        'Improves lymphatic drainage and releases deep mental fatigue',
        'Available in 60 and 90-minute full-body sessions',
      ],
      idealDuration: '90 Minutes for full head-to-toe relaxation and skin nourishing',
      expectedOutcome: 'Profound mental relaxation, silky soft skin, and complete relief from stress-induced muscle knots.',
    },
    category: 'massage',
    durationMinutes: [60, 90],
    priceINR: { 60: 2599, 90: 3699 },
    benefits: [
      'Induces deep psychological relaxation and restful sleep',
      'Nourishes and softens skin with organic cold-pressed oils',
      'Improves lymphatic drainage and toxin elimination',
      'Eases mental anxiety, insomnia, and nervous exhaustion',
      'Relieves stubborn shoulder and upper back tightness',
    ],
    popularFor: [
      'Luxury Seekers & Wellness Lovers',
      'Individuals Suffering from Insomnia or Stress',
      'Weekend Rejuvenation Pampering',
      'Bridal & Groom Prep Treatments',
    ],
    contraindications: [
      'Open skin wounds, rashes, or contagious dermatological conditions',
      'Severe allergy to natural botanical essential oils',
      'High fever or active systemic infection',
    ],
    preparation: [
      'Take a light warm shower prior to your appointment',
      'Inform the therapist if you have sensitive skin or specific aromatic oil preferences',
    ],
    aftercare: [
      'Allow the essential oils to absorb into your skin for at least 2 hours post-massage before showering',
      'Sip warm herbal green tea to flush out mobilized cellular toxins',
    ],
    targetKeywords: [
      'Balinese Massage Lucknow',
      'Aromatherapy Spa Gomti Nagar',
      'Exotic Oil Massage Lucknow',
      'Relaxation Therapy Lucknow',
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
    name: 'Deep Tissue Muscle Recovery Therapy',
    tagline: 'Targeted Deep Fascial Pressure for Muscular Pain Relief',
    shortDescription:
      'Penetrate deep muscle layers and connective tissue to melt chronic knots, stiffness, and long-standing postural strain.',
    fullDescription:
      'Designed specifically for individuals suffering from chronic stress knots, stiff shoulders, and athletic soreness. Our expert therapists utilize slow, deliberate deep strokes, concentrated elbow/forearm pressure, and warm therapeutic herbal oils to break down dense muscle adhesions deep within your muscular structure.',
    aiOverview: {
      summary:
        'Deep Tissue Muscle Recovery Therapy focuses on realigning deep layers of muscle and connective fascia. It targets chronic pain, stiff necks, tight shoulders, and sports injuries using firm, deliberate pressure.',
      keyPoints: [
        'Targets inner muscle layers, tendons, and protective fascia',
        'Helps break down scar tissue and stubborn muscle knots (adhesions)',
        'Reduces inflammation and lowers stress hormone (cortisol) levels',
        'Offered in 60, 90, and 120-minute customizable pressure sessions',
      ],
      idealDuration: '90 Minutes to thoroughly address multiple tension zones',
      expectedOutcome: 'Substantial reduction in chronic joint/muscle pain, improved posture, and liberated physical movement.',
    },
    category: 'massage',
    durationMinutes: [60, 90, 120],
    priceINR: { 60: 2799, 90: 3899, 120: 4899 },
    benefits: [
      'Breaks down stubborn muscle adhesions and chronic stress knots',
      'Alleviates chronic neck, lower back, and shoulder pain',
      'Significantly lowers cortisol stress levels',
      'Accelerates athletic muscle recovery and reduces DOMS',
      'Restores optimal postural symmetry',
    ],
    popularFor: [
      'Gym Enthusiasts & Athletes',
      'Corporate Executives & Long-Hour Desk Workers',
      'Chronic Back & Neck Pain Sufferers',
    ],
    contraindications: [
      'Blood clotting disorders or use of blood-thinning medications',
      'Recent major orthopedic surgeries',
      'Severe osteoporosis or active varicose veins',
    ],
    preparation: [
      'Hydrate well throughout the day before your appointment',
      'Avoid eating heavy or spicy foods 1 hour prior to pressure therapy',
    ],
    aftercare: [
      'Expect slight muscular tenderness for 24-48 hours, which is normal during muscle fiber realignment',
      'Drink 2-3 liters of water to help flush released metabolic waste from muscle tissues',
    ],
    targetKeywords: [
      'Deep Tissue Massage Lucknow',
      'Pain Relief Spa Gomti Nagar',
      'Muscle Knot Treatment Lucknow',
      'Back Pain Relief Massage Lucknow',
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
    name: 'Classic Swedish Rejuvenation Therapy',
    tagline: 'Gentle Gliding Effleurage for Total Mind & Body Harmony',
    shortDescription:
      'The classic Western therapeutic massage designed to smooth tension, boost blood oxygenation, and calm your central nervous system.',
    fullDescription:
      'Featuring the five classic therapeutic strokes—effleurage (gliding), petrissage (kneading), friction, tapotement (rhythmic tapping), and vibration. Swedish Rejuvenation Therapy is the gold standard for stress elimination, ideal for first-time spa visitors and anyone needing nervous system restoration.',
    aiOverview: {
      summary:
        'Classic Swedish Massage is a smooth, soothing full-body oil therapy using long gliding strokes, kneading, and rhythmic tapping to relieve muscle fatigue, boost circulation, and calm stress.',
      keyPoints: [
        'Utilizes 5 foundational Swedish massage strokes for complete stress relief',
        'Increases blood oxygen level and speeds up cellular circulation',
        'Gentle to medium pressure tailored for ultimate comfort',
        'Available in 60 and 90-minute therapeutic sessions',
      ],
      idealDuration: '60 or 90 Minutes for comprehensive relaxation',
      expectedOutcome: 'Calm nervous system, refreshed energy, and silky smooth muscle tone.',
    },
    category: 'massage',
    durationMinutes: [60, 90],
    priceINR: { 60: 2299, 90: 3299 },
    benefits: [
      'Promotes deep central nervous system tranquility',
      'Increases blood oxygenation and vascular circulation',
      'Relieves general physical fatigue and mental burnout',
      'Improves sleep quality and decreases anxiety',
    ],
    popularFor: [
      'First-Time Spa Guests',
      'People Experiencing High Workplace Stress',
      'Senior Citizens & Gentle Care Seekers',
    ],
    contraindications: [
      'Fever or acute viral infection',
      'Uncontrolled skin conditions or open wounds',
    ],
    preparation: [
      'Arrive 10-15 minutes early to unwind in our tranquil lounge',
      'Communicate your preferred pressure level with your therapist',
    ],
    aftercare: [
      'Enjoy a cup of warm Chamomile or Green tea post-session',
      'Take a warm shower 1-2 hours later to relax muscles further',
    ],
    targetKeywords: [
      'Swedish Massage Lucknow',
      'Full Body Massage Gomti Nagar',
      'Relaxing Spa Lucknow',
      'Gentle Massage Center Lucknow',
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
    name: 'Aromatherapy Healing Essential Oil Therapy',
    tagline: 'Custom Essential Oil Elixirs for Emotional & Physical Balance',
    shortDescription:
      'Harness the healing essence of organic cold-pressed botanical oils tailored to soothe your senses, ease stress, and boost mental clarity.',
    fullDescription:
      'Aromatherapy Massage blends specialized lymphatic massage strokes with organic plant-extracted essential oils (such as Lavender, Eucalyptus, Ylang Ylang, and Tea Tree). As the volatile aromatic molecules are inhaled and absorbed through the skin, they interact with the brain limbic system to balance emotions, reduce migraine frequency, and restore internal harmony.',
    aiOverview: {
      summary:
        'Aromatherapy Massage uses therapeutic-grade organic essential oils custom-blended for your state of mind. It combines gentle rhythmic strokes with olfactory therapy to soothe stress, relieve headaches, and boost mood.',
      keyPoints: [
        'Personalized essential oil consultation before treatment',
        'Activates the limbic system to release serotonin and balance emotions',
        'Enhances skin hydration with vitamin-rich carrier oils',
        'Available in 60 and 90-minute sessions',
      ],
      idealDuration: '90 Minutes for deep mental de-stressing and sensory restoration',
      expectedOutcome: 'Profound tranquility, reduced anxiety, improved mood, and glowing hydrated skin.',
    },
    category: 'therapy',
    durationMinutes: [60, 90],
    priceINR: { 60: 2699, 90: 3799 },
    benefits: [
      'Balances emotional mood swings and reduces anxiety',
      'Promotes deep restful sleep and cures insomnia',
      'Relieves tension headaches and sinus congestion',
      'Intensifies skin hydration and cellular elasticity',
    ],
    popularFor: [
      'Stress & Anxiety Management',
      'Insomnia & Sleep Disorder Relief',
      'Aromatic Wellness Connoisseurs',
    ],
    contraindications: [
      'Severe asthma or acute respiratory allergies',
      'Epilepsy or seizure disorders (certain essential oils)',
      'Pregnancy (specific essential oil restrictions apply)',
    ],
    preparation: [
      'Inform therapist of any perfume or plant allergies',
      'Avoid wearing heavy perfumes before coming to the spa',
    ],
    aftercare: [
      'Leave essential oils on skin for several hours to maximize therapeutic absorption',
      'Drink plenty of water to maintain hydration',
    ],
    targetKeywords: [
      'Aromatherapy Massage Lucknow',
      'Essential Oil Spa Gomti Nagar',
      'Stress Relief Therapy Lucknow',
      'Aromatic Spa Lucknow',
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
    name: 'Volcanic Hot Stone Melt Therapy',
    tagline: 'Geothermal Basalt Stones Infusing Deep Thermal Muscular Heat',
    shortDescription:
      'Penetrate dense muscle tightness with smooth heated basalt stones placed on key chakra energy centers and glided over sore muscles.',
    fullDescription:
      'Immerse your body in restorative geothermal heat. Smooth volcanic basalt stones, rich in iron and heat retention properties, are heated to optimal therapeutic temperatures and used as extensions of the therapist hands. The deep penetrating thermal energy relaxes rigid muscle fibers 4x faster than manual pressure alone.',
    aiOverview: {
      summary:
        'Volcanic Hot Stone Therapy uses smooth heated volcanic stones placed along energy meridian points and stroked across stiff muscles. Thermal heat melts muscle knots and expands blood vessels for instant pain relief.',
      keyPoints: [
        'Natural volcanic basalt stones heated in temperature-controlled water',
        'Melts deep muscular rigidity without excessive physical pressure',
        'Expands blood vessels to boost oxygen flow to tight tissues',
        'Available in 60 and 90-minute thermal treatments',
      ],
      idealDuration: '90 Minutes for full thermal penetration across all muscle groups',
      expectedOutcome: 'Total muscular softness, instant easing of joint stiffness, and deep thermal comforting bliss.',
    },
    category: 'therapy',
    durationMinutes: [60, 90],
    priceINR: { 60: 2999, 90: 4199 },
    benefits: [
      'Deep thermal penetration melts rigid muscle knots effortlessly',
      'Significantly increases vascular blood flow and cellular nutrition',
      'Soothes arthritic discomfort and joint stiffness',
      'Induces heavy, restorative sleep',
    ],
    popularFor: [
      'Chronic Joint & Arthritis Pain Relief',
      'Winter & Monsoon Cold Stiffness Relief',
      'Deep Relaxation Enthusiasts',
    ],
    contraindications: [
      'Diabetes with nerve neuropathy',
      'Varicose veins or open skin lesions',
      'Heart conditions or high blood pressure',
      'Pregnancy',
    ],
    preparation: [
      'Stay hydrated prior to your thermal treatment',
      'Inform therapist immediately if stone temperature feels too warm',
    ],
    aftercare: [
      'Avoid cold drafts or AC rooms immediately after warm thermal stone therapy',
      'Drink warm water to support thermal detoxification',
    ],
    targetKeywords: [
      'Hot Stone Massage Lucknow',
      'Volcanic Stone Spa Gomti Nagar',
      'Thermal Heat Therapy Lucknow',
      'Warm Stone Massage Lucknow',
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
    name: 'Luxury Royal Couple Spa Package',
    tagline: 'Private Soundproof VIP Suite with Jacuzzi & Synchronized Therapies',
    shortDescription:
      'Celebrate romantic milestones or relax together in our soundproof VIP couple suite with side-by-side massages and hydrotherapy.',
    fullDescription:
      'Unwind side-by-side in complete royal privacy. Our Royal Couple Suite features romantic ambient candlelighting, custom soothing soundscapes, dual plush massage beds, candlelit rose petal bath, and a private Jacuzzi session accompanied by fresh organic herbal refreshments.',
    aiOverview: {
      summary:
        'The Royal Couple Spa Package is a premium romantic wellness experience in a soundproof VIP suite featuring side-by-side synchronized full-body massages, private Jacuzzi immersion, and welcome refreshments.',
      keyPoints: [
        'Exclusive access to our luxury soundproof VIP couple suite',
        'Side-by-side massages performed simultaneously by two expert therapists',
        'Includes private hydro-jacuzzi session and herbal detox drinks',
        'Available in 90, 120, and 150-minute luxury packages',
      ],
      idealDuration: '120 Minutes for complete massage and Jacuzzi immersion',
      expectedOutcome: 'Unforgettable shared relaxation, renewed intimacy, and complete physical stress relief.',
    },
    category: 'couple',
    durationMinutes: [90, 120, 150],
    priceINR: { 90: 5999, 120: 7999, 150: 9999 },
    benefits: [
      'Exclusive private VIP candlelit suite with attached luxury Jacuzzi',
      'Side-by-side synchronized full body massage experience',
      'Complimentary hydro-jacuzzi immersion with organic bath salts',
      'Welcome organic detox elixir and gourmet fruit platter',
      'Unmatched privacy and soundproof romantic tranquility',
    ],
    popularFor: [
      'Anniversary Celebrations & Birthdays',
      'Honeymoon & Romantic Couples',
      'Valentine & Special Occasion Gifts',
    ],
    contraindications: [
      'Standard pregnancy precautions for Jacuzzi heat',
      'Cardiovascular hypertension during hot hydrotherapy',
    ],
    preparation: [
      'Book at least 3-6 hours in advance to guarantee suite availability',
      'Swimwear or comfortable attire provided for Jacuzzi session',
    ],
    aftercare: [
      'Relax in the private suite lounge before heading out',
      'Sip warm organic herbal elixirs',
    ],
    targetKeywords: [
      'Couple Spa Lucknow',
      'Best Couple Spa in Gomti Nagar',
      'Couple Massage Package Lucknow',
      'Romantic Spa Day Lucknow',
      'VIP Couple Suite Lucknow',
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
    name: 'Herbal Detox Steam Bath Chamber',
    tagline: 'Eucalyptus Infused Thermal Moisture to Purify Pores & Clear Airways',
    shortDescription:
      'Purify your skin and respiratory tract with 100% pure eucalyptus-infused thermal herbal steam in custom marble steam chambers.',
    fullDescription:
      'Step into a sanctuary of soothing warm vapor. Our Eucalyptus Herbal Steam Bath opens skin pores, flushes deeply trapped micro-toxins, relaxes respiratory passages, and prepares muscle fibers for massage treatments. Combined with cold-shower contrast therapy, it leaves your skin glowing and invigorated.',
    aiOverview: {
      summary:
        'Eucalyptus Herbal Steam Therapy uses high-temperature moist heat infused with organic eucalyptus to open pores, flush metabolic toxins, clear bronchial passages, and soften stiff muscles.',
      keyPoints: [
        '100% natural eucalyptus essential oil infusion',
        'Helps open skin pores and clear clogged sebum',
        'Soothes nasal congestion and sinus stiffness',
        'Ideal 20-30 minute add-on before or after body massage',
      ],
      idealDuration: '30 Minutes for complete pore cleansing and respiratory ease',
      expectedOutcome: 'Clear airways, glowing revitalized skin, and open, relaxed muscle tissue.',
    },
    category: 'hydrotherapy',
    durationMinutes: [30, 45],
    priceINR: { 30: 999, 45: 1499 },
    benefits: [
      'Flushes out deeply embedded skin toxins and heavy impurities',
      'Clears nasal passages, sinus congestion, and bronchial congestion',
      'Softens hard skin cells and boosts dermal hydration',
      'Relieves muscle soreness and prepares body for deep massage',
    ],
    popularFor: [
      'Sinus & Respiratory Relief Seekers',
      'Post-Workout Muscle De-Stiffening',
      'Pre-Massage Thermal Warmup',
    ],
    contraindications: [
      'Uncontrolled high or low blood pressure',
      'Heart conditions, pacemaker, or cardiovascular disease',
      'Pregnancy',
      'Dizziness or vertigo prone individuals',
    ],
    preparation: [
      'Drink 1-2 glasses of water prior to stepping into the steam room',
      'Remove all metal jewelry and watches',
    ],
    aftercare: [
      'Cool down with a temperate or cold rinse to close skin pores',
      'Hydrate with electrolytes or fresh coconut water post-steam',
    ],
    targetKeywords: [
      'Steam Bath Lucknow',
      'Herbal Steam Room Gomti Nagar',
      'Detox Steam Therapy Lucknow',
      'Spa Steam Room Lucknow',
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
    name: 'Hydrotherapy Jacuzzi Bath Soak',
    tagline: 'Targeted Multi-Jet Hydrotherapy with Epsom & Essential Oils',
    shortDescription:
      'Melt stress in high-pressure hydrotherapy jets infused with mineral Epsom salts, rose petals, and relaxing essential oils.',
    fullDescription:
      'Indulge in deep buoyant weightlessness. Our state-of-the-art Hydrotherapy Jacuzzi tub utilizes ergonomic multi-directional water jets that massage high-tension zones along your spinal column, thighs, and feet. Infused with mineral Epsom salts and therapeutic essential oils, it reduces joint impact and boosts circulation.',
    aiOverview: {
      summary:
        'Hydrotherapy Jacuzzi Soak combines warm buoyant water, high-pressure directional water jets, and Epsom mineral salts to relieve joint pressure, improve circulation, and soothe sore muscles.',
      keyPoints: [
        'Custom jet pressure controls targeting lower back, thighs, and feet',
        'Infused with magnesium-rich Epsom salts and therapeutic aromas',
        'Promotes weightless joint decompression and deep muscle relaxation',
        'Available in 30, 45, and 60-minute hydro-soak options',
      ],
      idealDuration: '45 Minutes for complete mineral absorption and joint decompression',
      expectedOutcome: 'Weightless spinal decompression, instant joint pain relief, and silky skin.',
    },
    category: 'hydrotherapy',
    durationMinutes: [30, 45, 60],
    priceINR: { 30: 1499, 45: 1999, 60: 2499 },
    benefits: [
      'Weightless buoyancy decompresses spinal vertebrae and joints',
      'Magnesium Epsom salts soothe muscle fatigue and cramps',
      'Hydro-jets stimulate blood flow and capillary dilation',
      'Deeply calming warm water environment lowers pulse rate',
    ],
    popularFor: [
      'Joint Pain & Arthritis Relief',
      'Post-Marathon / Gym Recovery',
      'Couples & Luxury Pampering',
    ],
    contraindications: [
      'Open skin incisions or unhealed wounds',
      'Cardiovascular conditions sensitive to warm immersion',
      'Active skin infections',
    ],
    preparation: [
      'Shower thoroughly before entering the Jacuzzi tub',
      'Bring or use provided clean swimwear/disposable spa attire',
    ],
    aftercare: [
      'Pat skin dry gently to retain mineral hydration',
      'Drink plenty of fresh water to balance fluid levels',
    ],
    targetKeywords: [
      'Jacuzzi Lucknow',
      'Hydrotherapy Spa Gomti Nagar',
      'Jacuzzi Bath Center Lucknow',
      'Luxury Spa with Jacuzzi Lucknow',
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
    name: 'Exfoliating Body Scrub & Skin Polish',
    tagline: 'Organic Walnut, Coffee & Honey Exfoliation for Silky Glowing Skin',
    shortDescription:
      'Slough away dead skin cells, unclog pores, and reveal velvety radiant skin with our custom organic botanical body scrubs.',
    fullDescription:
      'Rejuvenate dull, tired skin with our mineral-rich Exfoliating Body Scrub & Polish. Using natural exfoliants like crushed walnut shells, ground Robusta coffee, raw wild honey, and Himalayan pink salt, our therapists gently buff away dead epidermal cells while stimulating surface microcirculation.',
    aiOverview: {
      summary:
        'Exfoliating Body Scrub & Polish buffs away dead skin cells using natural organic scrubs (Coffee, Honey, Himalayan Salt) to reveal smooth, radiant, deeply hydrated skin.',
      keyPoints: [
        'Choice of Coffee & Walnut, Honey & Almond, or Himalayan Pink Salt scrub',
        'Stimulates surface blood flow and cellular cell turnover',
        'Followed by a warm shower and deeply hydrating body lotion lock-in',
        'Available in 45 and 60-minute polishing treatments',
      ],
      idealDuration: '60 Minutes for comprehensive head-to-toe exfoliation and hydration lock-in',
      expectedOutcome: 'Silky smooth, glowing skin texture with even tone and zero dull dryness.',
    },
    category: 'body-care',
    durationMinutes: [45, 60],
    priceINR: { 45: 1999, 60: 2699 },
    benefits: [
      'Removes dead epidermal skin cells and unclogs pore buildup',
      'Stimulates micro-circulation for a healthy radiant glow',
      'Improves absorption of moisturizers and natural skin oils',
      'Evens out skin tone and smoothes rough patches on knees and elbows',
    ],
    popularFor: [
      'Bridal & Pre-Event Glow Treatments',
      'Dry, Dull, or Flaky Skin Texture',
      'Sun Tan Removal & Skin Brightening',
    ],
    contraindications: [
      'Sunburnt or severely irritated skin',
      'Active eczema, psoriasis flare-ups, or open cuts',
      'Shaving or waxing within 24 hours prior to treatment',
    ],
    preparation: [
      'Do not shave or wax your legs/body within 24 hours of your appointment to avoid stinging',
    ],
    aftercare: [
      'Apply gentle moisturizer daily to keep new skin layers supple',
      'Wear SPF sunscreen if stepping out into sunlight',
    ],
    targetKeywords: [
      'Body Scrub Lucknow',
      'Body Polish Spa Gomti Nagar',
      'Skin Exfoliation Lucknow',
      'Bridal Body Polish Lucknow',
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
