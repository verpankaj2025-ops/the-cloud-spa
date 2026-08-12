'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  Star,
  ArrowRight,
  Calendar,
  Award,
  MapPin,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Info,
  UserCheck,
  HeartHandshake,
  Sparkle,
  Flame,
  Activity,
  Layers,
  ThumbsUp,
  Navigation,
} from 'lucide-react';
import { BUSINESS_DETAILS, TARGET_LOCALITIES } from '../../constants/business';
import { HeaderNavigation } from '../ui/HeaderNavigation';
import { FooterSection } from '../ui/FooterSection';
import { LuxuryButton } from '../ui/LuxuryButton';
import { BookingFormModal } from '../ui/BookingFormModal';

export const ThaiMassagePageClient: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState<number>(90);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const priceMap: Record<number, number> = {
    60: 2499,
    90: 3499,
    120: 4499,
  };

  const currentPrice = priceMap[selectedDuration] || 3499;

  const handleWhatsAppBooking = () => {
    const message = `Hello The Cloud Spa Gomti Nagar,
I would like to book an Authentic Traditional Thai Massage:
- Duration: ${selectedDuration} Minutes (₹${currentPrice.toLocaleString('en-IN')})
- Location: Vivek Khand 4, Gomti Nagar, Lucknow

Please confirm available appointment slots.`;
    window.open(`${BUSINESS_DETAILS.social.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const faqs = [
    {
      question: 'What is the price of Traditional Thai Massage in Lucknow at The Cloud Spa?',
      answer:
        'Our Traditional Thai Massage pricing in Gomti Nagar, Lucknow is transparent and value-focused: 60 Minutes costs ₹2,499, 90 Minutes costs ₹3,499, and 120 Minutes costs ₹4,499. All prices include complimentary sanitized cotton attire, a warm herbal foot bath ritual, and organic green tea post-treatment with zero hidden charges.',
    },
    {
      question: 'Do I need to wear my own clothing or do you provide outfits?',
      answer:
        'We provide fresh, freshly laundered, loose-fitting cotton traditional Thai garments specially designed to allow unrestricted movement during stretching and acupressure. You do not need to bring any special attire.',
    },
    {
      question: 'Is oil used during Traditional Thai Massage?',
      answer:
        'Authentic Traditional Thai Massage (Nuad Thai) is a dry, oil-free bodywork treatment. If requested for intense muscle knots, our therapists can apply organic Thai herbal balms (Phai Zingiber and Camphor) to targeted joint areas without leaving any oily residue.',
    },
    {
      question: 'Is Thai massage painful or uncomfortable?',
      answer:
        'Thai massage involves deep palm acupressure and gentle yoga stretches. While you will feel satisfying pressure on tight muscle channels, it should never feel painful. Our international-standard therapists maintain constant communication to customize pressure to your exact comfort zone.',
    },
    {
      question: 'How is Thai massage different from Swedish or Deep Tissue massage?',
      answer:
        'Unlike Swedish or Deep Tissue massage which use gliding strokes on bare skin with oil, Traditional Thai massage is performed dry over cotton clothes on a comfortable therapy mat or wide bed. It focuses on SEN energy lines, joint mobilization, and passive yoga stretching to align posture.',
    },
    {
      question: 'Can Thai massage help relieve chronic lower back pain and poor posture?',
      answer:
        'Yes! Thai massage is widely recognized for correcting posture strain caused by prolonged sitting. By stretching tight hamstrings, hip flexors, and glutes while releasing spinal acupressure points, it decompresses the lower back and improves spinal alignment.',
    },
    {
      question: 'Are therapists at The Cloud Spa certified in Thai Massage?',
      answer:
        'Yes. All therapists at The Cloud Spa undergo rigorous training in traditional Wat Pho and Chiang Mai Thai bodywork techniques, human anatomy, and client safety. Both female and male senior therapists are available upon request.',
    },
    {
      question: 'Can couples book Thai Massage together in a private suite?',
      answer:
        'Yes! We offer a soundproof VIP Royal Couple Suite equipped with dual therapy beds, allowing couples, friends, or family members to experience synchronized Traditional Thai massage together in complete privacy.',
    },
    {
      question: 'What precautions should I take before coming for a Thai Massage?',
      answer:
        'Avoid heavy meals at least 1 to 2 hours prior to your appointment as stretching involves abdominal rotation. Hydrate well and arrive 15 minutes early at our Gomti Nagar center to enjoy your welcome herbal tea and consultation.',
    },
    {
      question: 'Where is The Cloud Spa located in Gomti Nagar, Lucknow?',
      answer:
        'The Cloud Spa is located at 4/526 Near Brijwasi Bakery, Vivek Khand 4, Gomti Nagar, Lucknow, UP 226010. We are easily accessible from Patrakarpuram Crossing, Riverside Mall, Hazratganj, and Sushant Golf City with ample valet parking.',
    },
    {
      question: 'What are the spa opening hours in Gomti Nagar?',
      answer:
        'We are open 7 days a week, Monday through Sunday, from 11:00 AM to 8:00 PM. Prior booking via phone or WhatsApp is recommended to secure your preferred therapist and slot.',
    },
    {
      question: 'What payment modes are accepted at The Cloud Spa?',
      answer:
        'We accept all major payment modes including UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and Cash.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1A1C1A] selection:bg-[#C5A059] selection:text-white flex flex-col justify-between font-sans">
      <HeaderNavigation onOpenBookingModal={() => setBookingModalOpen(true)} />

      <main className="flex-1 pb-24 md:pb-12">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#1E2522] text-[#FAF9F5] py-3.5 px-4 sm:px-8 border-b border-[#C5A059]/20">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-medium">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#C5A059] overflow-x-auto">
              <Link href="/" className="hover:underline shrink-0">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <Link href="/services" className="hover:underline shrink-0">Services</Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[#FAF9F5] font-bold shrink-0">Thai Massage Lucknow</span>
            </nav>

            <span className="hidden md:inline-flex items-center gap-1.5 text-[#C5A059]">
              <MapPin className="w-3.5 h-3.5" /> Vivek Khand 4, Gomti Nagar, Lucknow
            </span>
          </div>
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative bg-[#1E2522] text-[#FAF9F5] py-12 md:py-20 px-4 sm:px-8 border-b border-[#C5A059]/20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2C3A33] border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-widest shadow-sm">
                <Sparkles className="w-4 h-4" /> ANCIENT YOGA-ASSISTED BODYWORK
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-heading font-bold text-[#FAF9F5] leading-tight tracking-tight">
                Authentic Traditional Thai Massage in Lucknow
              </h1>

              <p className="text-base sm:text-lg text-[#C5A059] font-medium leading-snug">
                Experience Nuad Thai Energy Line Therapy & Assisted Stretching at The Cloud Spa Gomti Nagar
              </p>

              <p className="text-xs sm:text-sm md:text-base text-[#FAF9F5]/85 font-light leading-relaxed">
                Realign your posture, dissolve spinal stiffness, and liberate tight joints with authentic oil-free Thai acupressure and passive yoga stretches delivered by senior certified therapists in private luxury suites.
              </p>

              {/* Badges: Rating, Duration, Price */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="bg-[#2C3A33] p-3 rounded-xl border border-[#C5A059]/30 flex items-center gap-2.5">
                  <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059] shrink-0" />
                  <div>
                    <span className="font-bold text-[#FAF9F5] block">Luxury Sanctuary</span>
                    <span className="text-[10px] text-[#C5A059]">Experienced Therapists</span>
                  </div>
                </div>

                <div className="bg-[#2C3A33] p-3 rounded-xl border border-[#C5A059]/30 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <div>
                    <span className="font-bold text-[#FAF9F5] block">Durations</span>
                    <span className="text-[10px] text-[#FAF9F5]/80">60 / 90 / 120 Mins</span>
                  </div>
                </div>

                <div className="bg-[#2C3A33] p-3 rounded-xl border border-[#C5A059]/30 flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <TagIcon className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <div>
                    <span className="font-bold text-[#C5A059] block">From ₹2,499</span>
                    <span className="text-[10px] text-[#FAF9F5]/80">100% All-Inclusive</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <LuxuryButton
                  variant="gold"
                  size="lg"
                  onClick={() => setBookingModalOpen(true)}
                  icon={<Calendar className="w-5 h-5" />}
                >
                  Book Appointment Now
                </LuxuryButton>

                <LuxuryButton
                  variant="whatsapp"
                  size="lg"
                  onClick={handleWhatsAppBooking}
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  WhatsApp Booking
                </LuxuryButton>

                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#FAF9F5]/30 text-xs font-bold text-[#FAF9F5] hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call {BUSINESS_DETAILS.formattedPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-[420px] w-full rounded-2xl overflow-hidden border-2 border-[#C5A059]/40 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80"
                  alt="Traditional Thai Massage Therapy Session at The Cloud Spa Gomti Nagar Lucknow"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#1E2522]/90 backdrop-blur-md p-4 rounded-xl border border-[#C5A059]/30 text-xs text-[#FAF9F5] space-y-1">
                  <p className="font-bold text-[#C5A059]">The Cloud Spa • Gomti Nagar</p>
                  <p className="text-[11px] text-[#FAF9F5]/80">Sanitized cotton attire, wide Thai floor-beds, and private climate-controlled suites.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. INTRODUCTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#2C3A33]/10 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                Expertise & Authority in Wellness
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1A1C1A]">
                Welcome to Lucknow&apos;s Sanctuary for Authentic Thai Massage
              </h2>
            </div>

            <div className="prose prose-neutral max-w-none text-sm text-[#2C3A33]/90 leading-relaxed font-light space-y-4">
              <p>
                In today&apos;s fast-paced corporate and urban landscape across Lucknow, prolonged hours at office desks, long traffic commutes along Shaheed Path, and high stress levels take a heavy toll on physical health. Chronic spinal stiffness, tight hamstrings, and persistent lower back strain have become common concerns for working professionals, business owners, and active individuals alike.
              </p>
              <p>
                At <strong>The Cloud Spa & Wellness Center</strong> in Gomti Nagar, we bring the authentic therapeutic art of <strong>Traditional Thai Massage (Nuad Thai)</strong> to Lucknow. Recognizing its medical and restorative significance, UNESCO formally inscribed Nuad Thai on the Representative List of the Intangible Cultural Heritage of Humanity. Our dedicated Thai bodywork center offers a serene environment where ancient healing traditions meet modern hygiene and luxury standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#2C3A33]/10 text-xs">
              <div className="flex items-center gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#2C3A33]/10">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>Certified Wat Pho Trained Therapists</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#2C3A33]/10">
                <Award className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>100% Dry Oil-Free Traditional Attire</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#2C3A33]/10">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span>Prime Vivek Khand 4, Gomti Nagar Spot</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHAT IS THAI MASSAGE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="bg-[#2C3A33] text-[#FAF9F5] rounded-2xl p-6 sm:p-10 border border-[#C5A059]/30 shadow-lg space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] flex items-center gap-1.5">
                <Info className="w-4 h-4" /> Comprehensive Understanding
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#FAF9F5]">
                What is Traditional Thai Massage (Nuad Thai)?
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#FAF9F5]/90 leading-relaxed font-light">
              Traditional Thai Massage—known natively as <em>Nuad Boran</em>—is an ancient healing discipline combining Ayurvedic principles, Buddhist mindfulness, and traditional Chinese meridian bodywork. Unlike Western massages that rely on oil-based gliding strokes on a table, Thai massage is an oil-free, dry therapy performed over comfortable cotton attire on a wide, cushioned therapy bed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-[#1E2522] p-5 rounded-xl border border-[#C5A059]/20 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] font-bold text-sm">
                  1
                </div>
                <h3 className="font-serif-heading font-bold text-base text-[#FAF9F5]">SEN Energy Line Therapy</h3>
                <p className="text-xs text-[#FAF9F5]/80 leading-relaxed">
                  Therapists apply rhythmic palm and thumb pressure along 10 primary <em>SEN energy channels</em> (Sen Sib) to unblock trapped life force energy (Lom) and stimulate visceral organs.
                </p>
              </div>

              <div className="bg-[#1E2522] p-5 rounded-xl border border-[#C5A059]/20 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] font-bold text-sm">
                  2
                </div>
                <h3 className="font-serif-heading font-bold text-base text-[#FAF9F5]">Assisted Yoga Stretching</h3>
                <p className="text-xs text-[#FAF9F5]/80 leading-relaxed">
                  The therapist uses hands, knees, legs, and feet to gently guide your body into passive yoga postures, lengthening tight myofascial tissue without requiring active exertion from you.
                </p>
              </div>

              <div className="bg-[#1E2522] p-5 rounded-xl border border-[#C5A059]/20 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] font-bold text-sm">
                  3
                </div>
                <h3 className="font-serif-heading font-bold text-base text-[#FAF9F5]">Joint Decompression</h3>
                <p className="text-xs text-[#FAF9F5]/80 leading-relaxed">
                  Gentle traction and rhythmic compression open up compressed spinal discs, hips, and shoulder sockets, restoring natural movement and posture symmetry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HEALTH BENEFITS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#2C3A33]/10 shadow-sm space-y-8">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                Therapeutic Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1A1C1A]">
                Key Benefits of Thai Massage for Your Body & Mind
              </h2>
              <p className="text-xs sm:text-sm text-[#767B78]">
                Scientifically recognized physical and mental benefits experienced by guests at our Gomti Nagar spa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Relieves Back & Neck Pain',
                  desc: 'Concentrated pressure on lumbar SEN lines releases spinal muscle spasms and relieves persistent desk tension.',
                  icon: <Activity className="w-5 h-5 text-[#C5A059]" />,
                },
                {
                  title: 'Enhances Joint Flexibility',
                  desc: 'Assisted yoga stretches elongate tight tendons and increase range of motion in shoulders, hips, and knees.',
                  icon: <Sparkles className="w-5 h-5 text-[#C5A059]" />,
                },
                {
                  title: 'Corrects Postural Misalignment',
                  desc: 'Rebalances forward-head posture and rounded shoulders caused by long hours working on laptops or smartphones.',
                  icon: <UserCheck className="w-5 h-5 text-[#C5A059]" />,
                },
                {
                  title: 'Boosts Circulation & Vitality',
                  desc: 'Rhythmic compression promotes vascular blood flow, speeding up oxygen delivery and cellular waste removal.',
                  icon: <Flame className="w-5 h-5 text-[#C5A059]" />,
                },
                {
                  title: 'Lowers Cortisol & Mental Stress',
                  desc: 'Reduces stress hormone levels while stimulating endorphins, inducing deep mental clarity and calmness.',
                  icon: <HeartHandshake className="w-5 h-5 text-[#C5A059]" />,
                },
                {
                  title: 'Accelerates Athletic Recovery',
                  desc: 'Prevents Delayed Onset Muscle Soreness (DOMS) in runners, gym-goers, and sports enthusiasts in Lucknow.',
                  icon: <ThumbsUp className="w-5 h-5 text-[#C5A059]" />,
                },
              ].map((benefit, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#2C3A33]/10 space-y-3 hover:border-[#C5A059] transition-colors">
                  <div className="p-2.5 rounded-xl bg-white w-fit border border-[#2C3A33]/10 shadow-xs">
                    {benefit.icon}
                  </div>
                  <h3 className="font-serif-heading font-bold text-base text-[#1A1C1A]">{benefit.title}</h3>
                  <p className="text-xs text-[#767B78] leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WHO SHOULD CHOOSE IT & 6. CONTRAINDICATIONS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Who Should Choose */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2C3A33]/10 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" /> Ideal Candidate Profile
              </div>
              <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1A1C1A]">
                Who Should Choose Thai Massage?
              </h2>
              <ul className="space-y-3 text-xs text-[#1A1C1A]/90">
                {[
                  'IT Professionals & Corporate Executives sitting 8+ hours daily',
                  'Athletes, Marathoners & Gym Enthusiasts needing deep fascial stretching',
                  'Individuals suffering from chronic neck, lower back, or shoulder tightness',
                  'Travelers seeking jet-lag recovery after long flights or drives',
                  'Senior citizens looking for gentle joint mobility improvement',
                  'Anyone who prefers an oil-free massage while remaining fully clothed',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAF9F5] border border-[#2C3A33]/10">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Should Avoid */}
            <div className="bg-amber-50/70 p-6 sm:p-8 rounded-2xl border border-amber-200/80 space-y-4">
              <div className="flex items-center gap-2 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-600" /> Medical Precautions
              </div>
              <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-amber-950">
                Who Should Avoid Thai Massage?
              </h2>
              <p className="text-xs text-amber-800">
                Please consult our spa team or your doctor before booking if you have any of the following medical conditions:
              </p>
              <ul className="space-y-2.5 text-xs text-amber-900 font-medium">
                {[
                  'Recent bone fractures, dislocations, or unhealed joint injuries',
                  'Acute slipped disc or severe spinal herniation',
                  'Uncontrolled high blood pressure or severe cardiovascular disease',
                  'First trimester of pregnancy (prenatal massage precautions apply)',
                  'Recent major abdominal or joint surgery (within 12 weeks)',
                  'Severe osteoporosis or artificial joint replacements',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. OUR STEP-BY-STEP PROCESS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#2C3A33]/10 shadow-sm space-y-8">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                The Cloud Spa Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1A1C1A]">
                Our 7-Step Traditional Thai Therapy Journey
              </h2>
              <p className="text-xs sm:text-sm text-[#767B78]">
                Every detail is meticulously crafted to ensure authentic comfort, safety, and deep relaxation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Consultation & Welcome', desc: 'Welcome organic herbal elixir and consultation to understand your focus areas.' },
                { step: '02', title: 'Cotton Attire Change', desc: 'Change into loose, freshly laundered 100% cotton traditional Thai garments.' },
                { step: '03', title: 'Warm Foot Ritual', desc: 'Soothing foot soak in warm floral water with natural sea salts.' },
                { step: '04', title: 'SEN Line Acupressure', desc: 'Rhythmic palm and thumb pressure along key muscular energy pathways.' },
                { step: '05', title: 'Assisted Yoga Stretching', desc: 'Guided passive stretching to elongate tight hamstrings and hips.' },
                { step: '06', title: 'Cranial & Neck Release', desc: 'Gentle traction of neck muscles and head acupressure to clear mental fatigue.' },
                { step: '07', title: 'Thai Herbal Balms (Optional)', desc: 'Targeted application of Zingiber herbal balm for stubborn trigger points.' },
                { step: '08', title: 'Organic Green Tea Lounge', desc: 'Relax in our tranquil lounge with warm lemongrass green tea and aftercare tips.' },
              ].map((proc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF9F5] border border-[#2C3A33]/10 space-y-2">
                  <span className="text-xl font-bold font-serif-heading text-[#C5A059]">{proc.step}</span>
                  <h3 className="font-bold text-sm text-[#1A1C1A]">{proc.title}</h3>
                  <p className="text-xs text-[#767B78] leading-relaxed">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. DURATION OPTIONS & 9. PRICING TABLE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#2C3A33]/10 shadow-sm space-y-8">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                Transparent Rates
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1A1C1A]">
                Thai Massage Pricing & Duration Options in Lucknow
              </h2>
              <p className="text-xs sm:text-sm text-[#767B78]">
                Select your session duration. All prices are transparent with zero hidden taxes or charges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  duration: 60,
                  title: 'Express Flexibility',
                  price: 2499,
                  popular: false,
                  desc: 'Focuses on lower back, shoulders, and major leg stretches. Ideal for quick workday rejuvenation.',
                  inclusions: ['60m Thai Therapy', 'Cotton Attire', 'Foot Soak', 'Herbal Tea'],
                },
                {
                  duration: 90,
                  title: 'Full Body Deep Posture',
                  price: 3499,
                  popular: true,
                  desc: 'Complete head-to-toe SEN line work, deep hip openers, and comprehensive spinal stretches.',
                  inclusions: ['90m Thai Therapy', 'Targeted Herbal Balm', 'Cotton Attire', 'Foot Soak', 'Herbal Tea'],
                },
                {
                  duration: 120,
                  title: 'Royal Master Recovery',
                  price: 4499,
                  popular: false,
                  desc: 'Exhaustive master session including hot herbal compresses and deep cranial decompression.',
                  inclusions: ['120m Thai Master Therapy', 'Hot Herbal Compress', 'Cotton Attire', 'Foot Soak', 'Herbal Tea'],
                },
              ].map((opt) => {
                const isSelected = selectedDuration === opt.duration;
                return (
                  <div
                    key={opt.duration}
                    className={`
                      rounded-2xl p-6 border flex flex-col justify-between space-y-6 transition-all duration-300 relative
                      ${
                        opt.popular
                          ? 'bg-[#1E2522] text-[#FAF9F5] border-[#C5A059] shadow-xl'
                          : 'bg-[#FAF9F5] text-[#1A1C1A] border-[#2C3A33]/15'
                      }
                    `}
                  >
                    {opt.popular && (
                      <span className="absolute -top-3 right-6 bg-[#C5A059] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                        Most Popular
                      </span>
                    )}

                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline">
                        <span className={`text-xs font-bold uppercase tracking-wider ${opt.popular ? 'text-[#C5A059]' : 'text-[#767B78]'}`}>
                          {opt.duration} Minutes
                        </span>
                      </div>

                      <h3 className="text-xl font-serif-heading font-bold">{opt.title}</h3>

                      <div>
                        <span className="text-3xl font-serif-heading font-bold">
                          ₹{opt.price.toLocaleString('en-IN')}
                        </span>
                        <span className={`text-xs block ${opt.popular ? 'text-[#FAF9F5]/70' : 'text-[#767B78]'}`}>
                          Net All-Inclusive Rate
                        </span>
                      </div>

                      <p className={`text-xs leading-relaxed ${opt.popular ? 'text-[#FAF9F5]/85' : 'text-[#767B78]'}`}>
                        {opt.desc}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-current/10">
                        {opt.inclusions.map((inc, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <LuxuryButton
                      variant={opt.popular ? 'gold' : 'forest'}
                      fullWidth
                      onClick={() => {
                        setSelectedDuration(opt.duration);
                        setBookingModalOpen(true);
                      }}
                    >
                      Book {opt.duration}m Session
                    </LuxuryButton>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. WHY CHOOSE US & 11. OUR THERAPISTS & 12. HYGIENE & 13. OILS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Why Choose The Cloud Spa */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2C3A33]/10 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1A1C1A]">
                Why Choose The Cloud Spa in Gomti Nagar?
              </h2>
              <ul className="space-y-3 text-xs text-[#767B78]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1C1A] font-bold block">Soundproof VIP Private Suites</strong>
                    Individual climate control, soft ambient lighting, and soothing acoustic soundscapes.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1C1A] font-bold block">Prime Location with Valet Parking</strong>
                    Situated in Vivek Khand 4, Gomti Nagar near Brijwasi Bakery with safe parking.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1A1C1A] font-bold block">High Hygiene Standards</strong>
                    Dedicated to clean, quiet, and relaxing bodywork in Gomti Nagar.
                  </div>
                </li>
              </ul>
            </div>

            {/* Our Certified Therapists */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2C3A33]/10 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1A1C1A]">
                Our Senior Certified Therapists
              </h2>
              <p className="text-xs text-[#767B78] leading-relaxed">
                At The Cloud Spa, practitioner quality is our highest priority. All therapists undergo formal certification in traditional Thai bodywork techniques, human muscular anatomy, and hospitality etiquette.
              </p>
              <ul className="space-y-2 text-xs text-[#1A1C1A] font-medium">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Female & Male senior therapists available upon request</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Background-verified staff with strict safety protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Continuous pressure customization to ensure guest comfort</span>
                </li>
              </ul>
            </div>

            {/* Hygiene Standards */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2C3A33]/10 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1A1C1A]">
                Hospital-Grade Hygiene Standards
              </h2>
              <p className="text-xs text-[#767B78] leading-relaxed">
                We adhere to rigorous sanitization protocols to guarantee a sterile, safe, and spotless wellness space.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#2C3A33]/10">
                  <strong className="text-[#1A1C1A] block">Fresh Linen Always</strong>
                  100% sanitized cotton attire & sheets laundered post-session.
                </div>
                <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#2C3A33]/10">
                  <strong className="text-[#1A1C1A] block">UV & Disinfectant</strong>
                  Therapy rooms sanitized with medical-grade sprays after every client.
                </div>
              </div>
            </div>

            {/* Authentic Balms & Herbal Extracts */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#2C3A33]/10 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1A1C1A]">
                Authentic Thai Herbal Balms
              </h2>
              <p className="text-xs text-[#767B78] leading-relaxed">
                While traditional Thai therapy is oil-free, for stubborn muscle knots our therapists utilize authentic imported Thai <strong>Zingiber Phai Balm</strong> infused with menthol, camphor, and wild ginger. This provides a gentle warming sensation that penetrates deep myofascial trigger points without leaving grease.
              </p>
            </div>
          </div>
        </section>

        {/* 14. FREQUENTLY ASKED QUESTIONS (10+ FAQs) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#2C3A33]/10 shadow-sm space-y-8">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] flex items-center justify-center gap-1.5">
                <HelpCircle className="w-4 h-4" /> Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1A1C1A]">
                Frequently Asked Questions About Thai Massage in Lucknow
              </h2>
              <p className="text-xs sm:text-sm text-[#767B78]">
                Clear answers to common questions about pricing, booking, clothes, and health benefits.
              </p>
            </div>

            <div className="space-y-3 max-w-4xl mx-auto">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="border border-[#2C3A33]/10 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-[#1A1C1A] bg-[#FAF9F5] hover:bg-[#F4F1EA] transition-colors flex justify-between items-center gap-4"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#C5A059] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#767B78] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 bg-white text-xs text-[#767B78] leading-relaxed border-t border-[#2C3A33]/10">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 15. RELATED SERVICES (INTERNAL LINKING) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="space-y-6">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                  Explore Our Catalog
                </span>
                <h2 className="text-2xl font-serif-heading font-bold text-[#1A1C1A]">
                  Related Spa Treatments You May Also Like
                </h2>
              </div>
              <Link href="/services" className="text-xs font-bold text-[#C5A059] hover:underline flex items-center gap-1">
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Deep Tissue Massage',
                  slug: 'deep-tissue-massage',
                  desc: 'Concentrated fascial pressure to dissolve deep muscle knots and chronic back pain.',
                  price: '₹2,799',
                  img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
                },
                {
                  title: 'Balinese Massage',
                  slug: 'balinese-massage',
                  desc: 'Exotic Indonesian warm essential oil therapy with long gliding strokes & skin rolling.',
                  price: '₹2,599',
                  img: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80',
                },
                {
                  title: 'Swedish Massage',
                  slug: 'swedish-massage',
                  desc: 'Classic relaxation therapy with gentle effleurage strokes for total nervous system calm.',
                  price: '₹2,299',
                  img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
                },
                {
                  title: 'Couple Spa Package',
                  slug: 'couple-spa',
                  desc: 'Private soundproof VIP couple suite with side-by-side massages & Jacuzzi hydrotherapy.',
                  price: '₹5,999',
                  img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
                },
              ].map((item, idx) => (
                <article key={idx} className="bg-white rounded-2xl border border-[#2C3A33]/10 overflow-hidden hover:shadow-lg transition-all p-4 flex flex-col justify-between space-y-3">
                  <div className="relative h-36 rounded-xl overflow-hidden bg-neutral-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif-heading font-bold text-base text-[#1A1C1A]">
                      <Link href={`/services/${item.slug}`} className="hover:text-[#C5A059]">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#767B78] line-clamp-2 mt-1">{item.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-[#2C3A33]/10 flex justify-between items-center text-xs">
                    <span className="font-bold text-[#C5A059]">Starts {item.price}</span>
                    <Link href={`/services/${item.slug}`} className="font-bold text-[#2C3A33] hover:text-[#C5A059] flex items-center gap-1">
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 16. NEARBY AREAS & 17. GOOGLE MAP CTA */}
        <section className="bg-[#1E2522] text-[#FAF9F5] py-12 px-4 sm:px-8 mt-8 border-t border-[#C5A059]/20">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] flex items-center justify-center gap-1.5">
                <Navigation className="w-4 h-4" /> Local SEO Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#FAF9F5]">
                Thai Massage Center Serving All Key Localities in Lucknow
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF9F5]/80">
                Conveniently located at Vivek Khand 4 in Gomti Nagar with fast access from all major hubs across Lucknow.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center text-xs">
              {TARGET_LOCALITIES.map((loc) => (
                <div key={loc.slug} className="bg-[#2C3A33] p-3 rounded-xl border border-[#C5A059]/20 space-y-1">
                  <span className="font-bold text-[#FAF9F5] block">{loc.name}</span>
                  <span className="text-[10px] text-[#C5A059]">{loc.distanceFromSpa}</span>
                </div>
              ))}
            </div>

            {/* Google Map Directions Box */}
            <div className="bg-[#2C3A33] p-6 rounded-2xl border border-[#C5A059]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#FAF9F5]">
              <div>
                <h3 className="font-bold text-base text-[#C5A059]">The Cloud Spa Location & Address</h3>
                <p className="text-[#FAF9F5]/80 mt-1">
                  {BUSINESS_DETAILS.address.fullAddress} (Landmark: {BUSINESS_DETAILS.address.landmark})
                </p>
              </div>
              <a
                href={BUSINESS_DETAILS.social.googleBusiness}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-[#C5A059] text-white font-bold text-xs hover:bg-[#b08c48] transition-colors shrink-0 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Google Map Directions</span>
              </a>
            </div>
          </div>
        </section>

        {/* 18. BOOK APPOINTMENT CTA & 19. WHATSAPP & 20. CALL CTAs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
          <div className="bg-gradient-to-r from-[#1E2522] via-[#2C3A33] to-[#1E2522] text-[#FAF9F5] rounded-3xl p-8 sm:p-12 border-2 border-[#C5A059]/40 shadow-2xl text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block">
              Ready for Deep Physical Rejuvenation?
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#FAF9F5] max-w-2xl mx-auto leading-tight">
              Book Your Authentic Traditional Thai Massage Session Today
            </h2>

            <p className="text-xs sm:text-sm text-[#FAF9F5]/85 max-w-xl mx-auto">
              Limited slots available daily to guarantee personalized care. Reserve online or connect directly with our spa reception.
            </p>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
              <LuxuryButton
                variant="gold"
                size="lg"
                onClick={() => setBookingModalOpen(true)}
                icon={<Calendar className="w-5 h-5" />}
              >
                Book Appointment
              </LuxuryButton>

              <LuxuryButton
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppBooking}
                icon={<MessageCircle className="w-5 h-5" />}
              >
                WhatsApp Us
              </LuxuryButton>

              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-[#FAF9F5]/30 font-bold text-xs text-[#FAF9F5] hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call {BUSINESS_DETAILS.formattedPhone}</span>
              </a>
            </div>

            {/* Quick Internal Footer Links */}
            <div className="pt-6 border-t border-[#C5A059]/20 flex flex-wrap justify-center gap-4 text-xs text-[#C5A059]">
              <Link href="/" className="hover:underline">Home</Link>
              <span>•</span>
              <Link href="/services" className="hover:underline">All Services</Link>
              <span>•</span>
              <Link href="/services/deep-tissue-massage" className="hover:underline">Deep Tissue</Link>
              <span>•</span>
              <Link href="/services/balinese-massage" className="hover:underline">Balinese Massage</Link>
              <span>•</span>
              <Link href="/services/swedish-massage" className="hover:underline">Swedish Massage</Link>
              <span>•</span>
              <Link href="/services/couple-spa" className="hover:underline">Couple Spa</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1E2522] border-t border-[#C5A059]/30 p-3 md:hidden backdrop-blur-md shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_DETAILS.phone}`}
          className="flex-1 py-3 bg-[#2C3A33] text-white rounded-xl text-center font-bold text-xs flex items-center justify-center gap-1 border border-[#C5A059]/20"
        >
          <Phone className="w-4 h-4 text-[#C5A059]" />
          <span>Call</span>
        </a>

        <button
          type="button"
          onClick={() => setBookingModalOpen(true)}
          className="flex-[2] py-3 bg-[#C5A059] text-white rounded-xl text-center font-bold text-xs shadow-md"
        >
          Book Appointment
        </button>

        <a
          href={`${BUSINESS_DETAILS.social.whatsapp}?text=${encodeURIComponent(
            'Hello The Cloud Spa, I want to book Thai Massage in Gomti Nagar'
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-3 bg-[#25D366] text-white rounded-xl text-center font-bold text-xs flex items-center justify-center gap-1"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>

      <FooterSection />

      <BookingFormModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preSelectedTreatmentId="thai-massage"
      />
    </div>
  );
};

function TagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );
}
