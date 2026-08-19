'use client';

/**
 * Enterprise Multi-Step Booking & Lead Conversion Engine
 * WCAG AA Accessible, High-Converting 6-Step Guided Flow
 * Direct WhatsApp, Phone & Data Layer Integration
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  ShieldCheck,
  AlertCircle,
  MapPin,
  Lock,
  Copy,
  Check,
  Award,
  PhoneCall,
  Sparkle,
  FileText,
} from 'lucide-react';
import { SPA_TREATMENTS } from '../../constants/services';
import { BUSINESS_DETAILS } from '../../constants/business';
import { LUCKNOW_LOCATIONS } from '../../constants/locations';
import { LuxuryButton } from '../ui/LuxuryButton';
import { LuxuryBadge } from '../ui/LuxuryBadge';
import {
  trackBookAppointmentClick,
  trackWhatsAppClick,
  trackPhoneClick,
  trackBookingSubmitted,
  trackServiceSelected,
  trackBookingStepView,
} from '../../lib/analytics';
import {
  validateBookingForm,
  checkDuplicateSubmission,
  registerSubmissionLock,
  normalizeIndianPhone,
  BookingFormData,
} from '../../lib/booking-validation';

export interface BookingEngineProps {
  initialServiceSlug?: string;
  initialLocationSlug?: string;
  source?: string;
  onBookingComplete?: (details: BookingFormData) => void;
  compact?: boolean;
}

const DURATION_OPTIONS = [60, 90, 120] as const;

const TIME_SLOTS = [
  { time: '10:00 AM', period: 'Morning Slot' },
  { time: '11:30 AM', period: 'Morning Slot' },
  { time: '01:00 PM', period: 'Afternoon Slot' },
  { time: '02:30 PM', period: 'Afternoon Slot' },
  { time: '04:00 PM', period: 'Afternoon Slot' },
  { time: '05:30 PM', period: 'Evening Slot' },
  { time: '07:00 PM', period: 'Evening Slot' },
  { time: '08:30 PM', period: 'Late Evening Slot' },
];

export function BookingEngine({
  initialServiceSlug,
  initialLocationSlug,
  source = 'booking_engine',
  onBookingComplete,
  compact = false,
}: BookingEngineProps) {
  // Step 1 to 6 State Management
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const defaultService =
    SPA_TREATMENTS.find((s) => s.slug === initialServiceSlug || s.id === initialServiceSlug) ||
    SPA_TREATMENTS[0];

  const [selectedServiceId, setSelectedServiceId] = useState<string>(defaultService.id);
  const [selectedDuration, setSelectedDuration] = useState<number>(60);

  // Today ISO date helper
  const getTodayIso = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getTomorrowIso = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getDayAfterTomorrowIso = () => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  };

  const [preferredDate, setPreferredDate] = useState<string>(getTodayIso());
  const [preferredTime, setPreferredTime] = useState<string>('01:00 PM');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [honeypot, setHoneypot] = useState<string>('');

  // Category filter state for Step 1
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Validation & Submission States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDuplicateLock, setIsDuplicateLock] = useState<boolean>(false);
  const [bookingRefCode, setBookingRefCode] = useState<string>('');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Auto Focus ref
  const stepContainerRef = useRef<HTMLDivElement>(null);

  // Get active selected service object
  const activeService =
    SPA_TREATMENTS.find((s) => s.id === selectedServiceId) || SPA_TREATMENTS[0];

  // Calculate live INR price
  const activePriceINR =
    activeService.priceINR[selectedDuration] ||
    Object.values(activeService.priceINR)[0] ||
    2499;

  // Track step view on step change
  useEffect(() => {
    const stepNames = [
      'Select Service',
      'Select Duration',
      'Select Date',
      'Select Time',
      'Guest Details',
      'Confirmation',
    ];
    trackBookingStepView(currentStep, stepNames[currentStep - 1] || 'Step');

    // Focus top of step for screen readers
    if (stepContainerRef.current) {
      stepContainerRef.current.focus();
    }
  }, [currentStep]);

  // Handle service pick
  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const srv = SPA_TREATMENTS.find((s) => s.id === serviceId);
    if (srv) {
      trackServiceSelected(srv.id, srv.name, srv.category);
    }
    // Auto advance to duration step
    setErrors({});
    setCurrentStep(2);
  };

  // Step 5 validation before advancing to Step 6
  const handleProceedToConfirmation = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const formData: BookingFormData = {
      serviceId: selectedServiceId,
      durationMinutes: selectedDuration,
      preferredDate,
      preferredTime,
      clientName,
      clientPhone,
      clientEmail,
      specialRequests,
      honeypot,
    };

    const validation = validateBookingForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Check duplicate locking
    if (checkDuplicateSubmission(clientPhone, selectedServiceId)) {
      setIsDuplicateLock(true);
      setErrors({
        clientPhone:
          'You have recently requested a reservation with this number. Please wait or call our front desk directly.',
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Generate Unique Booking Reference Code
    const refCode = `CS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRefCode(refCode);

    // Register lock
    registerSubmissionLock(clientPhone, selectedServiceId);

    // Track analytics
    trackBookingSubmitted({
      serviceId: activeService.id,
      serviceName: activeService.name,
      category: activeService.category,
      durationMinutes: selectedDuration,
      priceINR: activePriceINR,
      preferredDate,
      preferredTime,
      clientName,
      clientPhone,
      source,
    });

    if (onBookingComplete) {
      onBookingComplete(formData);
    }

    setIsSubmitting(false);
    setCurrentStep(6);
  };

  // WhatsApp Trigger Handler
  const handleTriggerWhatsApp = () => {
    trackWhatsAppClick(`${source}_confirmation_step`, {
      service: activeService.name,
      price: activePriceINR,
      refCode: bookingRefCode,
    });

    const msg = `Hello The Cloud Spa Gomti Nagar,
I would like to confirm my VIP Spa Session:
- Ref Code: ${bookingRefCode || 'NEW'}
- Guest Name: ${clientName}
- Phone: ${normalizeIndianPhone(clientPhone)}
- Therapy: ${activeService.name} (${selectedDuration} Mins - ₹${activePriceINR.toLocaleString('en-IN')})
- Preferred Date: ${preferredDate}
- Preferred Time: ${preferredTime}
${specialRequests ? `- Special Notes: ${specialRequests}` : ''}

Please confirm slot availability and driver valet instructions.`;

    const encoded = encodeURIComponent(msg);
    window.open(`${BUSINESS_DETAILS.social.whatsapp}?text=${encoded}`, '_blank');
  };

  // Direct Phone Call Trigger Handler
  const handleTriggerPhoneCall = () => {
    trackPhoneClick(`${source}_confirmation_step`);
    window.location.href = `tel:${BUSINESS_DETAILS.phone}`;
  };

  // Copy Ref Code to Clipboard
  const handleCopyRefCode = () => {
    if (typeof window !== 'undefined' && bookingRefCode) {
      navigator.clipboard.writeText(bookingRefCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  // Filtered Services for Step 1
  const filteredServices = SPA_TREATMENTS.filter((srv) => {
    if (categoryFilter !== 'all' && srv.category.toLowerCase() !== categoryFilter.toLowerCase()) {
      return false;
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase().trim();
      return (
        srv.name.toLowerCase().includes(q) ||
        srv.shortDescription.toLowerCase().includes(q) ||
        srv.benefits.some((b) => b.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const categoriesList = ['all', ...Array.from(new Set(SPA_TREATMENTS.map((s) => s.category)))];

  return (
    <div
      ref={stepContainerRef}
      tabIndex={-1}
      className={`bg-white rounded-3xl border border-[#2C3A33]/15 shadow-xl overflow-hidden focus:outline-none ${
        compact ? 'p-4 sm:p-6' : 'p-6 sm:p-10'
      }`}
    >
      {/* WIZARD STEP INDICATOR HEADER */}
      <div className="border-b border-[#2C3A33]/10 pb-6 mb-8">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <LuxuryBadge variant="gold" className="text-[10px] uppercase tracking-wider font-bold">
              <Sparkles className="w-3 h-3" /> Step {currentStep} of 6
            </LuxuryBadge>
            <span className="text-xs font-serif font-bold text-[#1E2522]">
              {currentStep === 1 && 'Select Spa Therapy'}
              {currentStep === 2 && 'Select Session Duration'}
              {currentStep === 3 && 'Choose Preferred Date'}
              {currentStep === 4 && 'Select Time Slot'}
              {currentStep === 5 && 'Guest Details & Contact'}
              {currentStep === 6 && 'Reservation Confirmed'}
            </span>
          </div>

          <div className="text-xs text-[#C5A059] font-bold flex items-center gap-1">
            <Lock className="w-3.5 h-3.5" /> Zero Advance Fee Required
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full bg-[#FAF9F5] h-2.5 rounded-full overflow-hidden border border-[#2C3A33]/10 flex">
          {[1, 2, 3, 4, 5, 6].map((stepNum) => (
            <div
              key={stepNum}
              className={`h-full flex-1 transition-all duration-500 border-r border-white/20 last:border-0 ${
                currentStep >= stepNum ? 'bg-[#C5A059]' : 'bg-[#2C3A33]/10'
              }`}
            />
          ))}
        </div>
      </div>

      {/* STEP 1: SELECT SPA THERAPY */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1E2522]">
                Choose Your Healing Therapy
              </h2>
              <p className="text-xs sm:text-sm text-[#2C3A33]/75">
                Certified Thai bodywork, deep tissue muscle recovery, and couple wellness packages in Gomti Nagar.
              </p>
            </div>

            <input
  id="therapy-search"
  name="therapy_search"
  type="text"
  placeholder="Search therapy (e.g. Thai, Deep Tissue)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-xl bg-[#FAF9F5] border border-[#2C3A33]/20 text-xs focus:border-[#C5A059] focus:outline-none"
            />
          </div>

          {/* CATEGORY FILTER CHIPS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  categoryFilter === cat
                    ? 'bg-[#1E2522] text-[#C5A059] shadow-sm'
                    : 'bg-[#FAF9F5] text-[#2C3A33]/80 border border-[#2C3A33]/10 hover:border-[#C5A059]'
                }`}
              >
                {cat === 'all' ? 'All Therapies' : cat}
              </button>
            ))}
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[480px] overflow-y-auto pr-1 scrollbar-thin">
            {filteredServices.map((service) => {
              const isSelected = selectedServiceId === service.id;
              const minPrice = Math.min(...Object.values(service.priceINR));

              return (
                <div
                  key={service.id}
                  onClick={() => handleSelectService(service.id)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'border-[#C5A059] bg-[#FAF9F5] shadow-md'
                      : 'border-[#2C3A33]/10 bg-white hover:border-[#C5A059]/60 hover:shadow-sm'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleSelectService(service.id);
                  }}
                  aria-pressed={isSelected}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2 py-0.5 rounded">
                        {service.category}
                      </span>
                      <span className="text-xs font-bold text-[#1E2522]">
                        From ₹{minPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <h3 className="text-base font-serif font-bold text-[#1E2522] flex items-center gap-1.5">
                      {service.name}
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />}
                    </h3>

                    <p className="text-xs text-[#2C3A33]/80 line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#2C3A33]/10 flex items-center justify-between text-[11px] text-[#2C3A33]/60 font-medium">
                    <span>{service.durationMinutes.join(' / ')} Mins</span>
                    <span className="text-[#C5A059] font-bold flex items-center gap-1">
                      Select Therapy <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 2: SELECT DURATION */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-bold text-[#1E2522]">
              Select Session Duration for {activeService.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#2C3A33]/75">
              Longer sessions allow deeper myofascial tension release and comprehensive full-body recovery.
            </p>
          </div>

          {/* ACTIVE SERVICE PREVIEW CARD */}
          <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#C5A059]/30 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#C5A059] block">
                Selected Therapy
              </span>
              <strong className="text-sm font-serif font-bold text-[#1E2522]">
                {activeService.name}
              </strong>
            </div>
            <button
              onClick={() => setCurrentStep(1)}
              className="text-xs font-bold text-[#C5A059] underline hover:text-[#1E2522]"
            >
              Change Therapy
            </button>
          </div>

          {/* DURATION SELECTION CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {DURATION_OPTIONS.map((mins) => {
              const price = activeService.priceINR[mins] || activePriceINR;
              const isSelected = selectedDuration === mins;

              return (
                <div
                  key={mins}
                  onClick={() => setSelectedDuration(mins)}
                  className={`p-6 rounded-2xl border-2 text-center transition-all cursor-pointer space-y-3 ${
                    isSelected
                      ? 'border-[#C5A059] bg-[#1E2522] text-[#FAF9F5] shadow-lg scale-105'
                      : 'border-[#2C3A33]/15 bg-white text-[#2C3A33] hover:border-[#C5A059]'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setSelectedDuration(mins);
                  }}
                  aria-pressed={isSelected}
                >
                  <div className="text-3xl font-serif font-bold">
                    {mins} <span className="text-xs font-sans uppercase">Mins</span>
                  </div>

                  <div className={`text-xl font-bold ${isSelected ? 'text-[#C5A059]' : 'text-[#1E2522]'}`}>
                    ₹{price.toLocaleString('en-IN')}
                  </div>

                  <p className={`text-[11px] leading-relaxed ${isSelected ? 'text-[#FAF9F5]/80' : 'text-[#2C3A33]/70'}`}>
                    {mins === 60 && 'Targeted muscle focus & quick stress reset.'}
                    {mins === 90 && 'Recommended for deep tissue & full body relaxation.'}
                    {mins === 120 && 'Ultimate VIP luxury ritual with head & foot reflexology.'}
                  </p>

                  <div className="pt-2">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full inline-block ${
                        isSelected
                          ? 'bg-[#C5A059] text-[#1E2522]'
                          : 'bg-[#FAF9F5] text-[#2C3A33] border border-[#2C3A33]/10'
                      }`}
                    >
                      {isSelected ? 'Selected' : 'Select Slot'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* NEXT / BACK BUTTONS */}
          <div className="pt-4 flex items-center justify-between gap-4 border-t border-[#2C3A33]/10">
            <button
              onClick={() => setCurrentStep(1)}
              className="flex items-center gap-1.5 text-xs font-bold text-[#2C3A33] hover:text-[#C5A059] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Therapies
            </button>

            <LuxuryButton
              variant="forest"
              onClick={() => setCurrentStep(3)}
              className="group"
            >
              Continue to Preferred Date
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </LuxuryButton>
          </div>
        </div>
      )}

      {/* STEP 3: PREFERRED DATE */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-bold text-[#1E2522]">
              Select Preferred Appointment Date
            </h2>
            <p className="text-xs sm:text-sm text-[#2C3A33]/75">
              Open 7 days a week from 10:00 AM to 09:30 PM at Gomti Nagar, Lucknow.
            </p>
          </div>

          {/* QUICK DATE SHORTCUT BUTTONS */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Today', dateStr: getTodayIso() },
              { label: 'Tomorrow', dateStr: getTomorrowIso() },
              { label: 'Day After', dateStr: getDayAfterTomorrowIso() },
            ].map((shortcut) => {
              const isSelected = preferredDate === shortcut.dateStr;
              return (
                <button
                  key={shortcut.label}
                  type="button"
                  onClick={() => setPreferredDate(shortcut.dateStr)}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    isSelected
                      ? 'bg-[#1E2522] text-[#C5A059] border-[#C5A059] font-bold shadow-md'
                      : 'bg-[#FAF9F5] text-[#2C3A33] border-[#2C3A33]/15 hover:border-[#C5A059]'
                  }`}
                >
                  <span className="block text-xs uppercase font-semibold text-[#C5A059]">
                    {shortcut.label}
                  </span>
                  <span className="text-sm font-bold block mt-0.5">
                    {new Date(shortcut.dateStr).toLocaleDateString('en-IN', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </button>
              );
            })}
          </div>

          {/* CUSTOM CALENDAR PICKER INPUT */}
          <div className="space-y-2 bg-[#FAF9F5] p-5 rounded-2xl border border-[#2C3A33]/10">
            <label
  htmlFor="preferred-date"
  className="text-xs font-bold uppercase tracking-wider text-[#2C3A33] flex items-center gap-1.5"
>
              <Calendar className="w-4 h-4 text-[#C5A059]" /> Or Pick Specific Calendar Date:
            </label>
            <input
              type="date"
              min={getTodayIso()}
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#2C3A33]/20 text-sm font-semibold text-[#1E2522] focus:border-[#C5A059] focus:outline-none"
            />
          </div>

          {/* NEXT / BACK BUTTONS */}
          <div className="pt-4 flex items-center justify-between gap-4 border-t border-[#2C3A33]/10">
            <button
              onClick={() => setCurrentStep(2)}
              className="flex items-center gap-1.5 text-xs font-bold text-[#2C3A33] hover:text-[#C5A059] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Duration
            </button>

            <LuxuryButton
              variant="forest"
              onClick={() => setCurrentStep(4)}
              className="group"
            >
              Continue to Time Slots
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </LuxuryButton>
          </div>
        </div>
      )}

      {/* STEP 4: PREFERRED TIME */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-bold text-[#1E2522]">
              Select Preferred Time Slot
            </h2>
            <p className="text-xs sm:text-sm text-[#2C3A33]/75">
              Appointments scheduled every 90 minutes to ensure thorough room sanitization between guests.
            </p>
          </div>

          {/* TIME SLOTS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TIME_SLOTS.map((slot) => {
              const isSelected = preferredTime === slot.time;
              return (
                <button
                  key={slot.time}
                  type="button"
                  onClick={() => setPreferredTime(slot.time)}
                  className={`p-3.5 rounded-2xl border text-center transition-all ${
                    isSelected
                      ? 'bg-[#1E2522] text-[#C5A059] border-[#C5A059] font-bold shadow-md scale-105'
                      : 'bg-[#FAF9F5] text-[#2C3A33] border-[#2C3A33]/15 hover:border-[#C5A059]'
                  }`}
                >
                  <span className="block text-[10px] uppercase font-bold text-[#C5A059]">
                    {slot.period}
                  </span>
                  <span className="text-sm font-bold block mt-0.5">
                    {slot.time}
                  </span>
                </button>
              );
            })}
          </div>

          {/* SUMMARY MINI RECAP */}
          <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#C5A059]/30 text-xs flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[#2C3A33]/60 block font-medium">Selected Experience:</span>
              <strong className="text-[#1E2522]">
                {activeService.name} ({selectedDuration} Mins)
              </strong>
            </div>
            <div>
              <span className="text-[#2C3A33]/60 block font-medium">Scheduled For:</span>
              <strong className="text-[#C5A059]">
                {preferredDate} at {preferredTime}
              </strong>
            </div>
          </div>

          {/* NEXT / BACK BUTTONS */}
          <div className="pt-4 flex items-center justify-between gap-4 border-t border-[#2C3A33]/10">
            <button
              onClick={() => setCurrentStep(3)}
              className="flex items-center gap-1.5 text-xs font-bold text-[#2C3A33] hover:text-[#C5A059] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Date
            </button>

            <LuxuryButton
              variant="forest"
              onClick={() => setCurrentStep(5)}
              className="group"
            >
              Continue to Guest Details
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </LuxuryButton>
          </div>
        </div>
      )}

      {/* STEP 5: CUSTOMER DETAILS */}
      {currentStep === 5 && (
        <form onSubmit={handleProceedToConfirmation} className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-bold text-[#1E2522]">
              Guest Contact & Special Requests
            </h2>
            <p className="text-xs sm:text-sm text-[#2C3A33]/75">
              Enter your contact details so our front desk receptionist can confirm your slot and send valet parking instructions.
            </p>
          </div>

          {/* SPAM TRAP HONEYPOT (HIDDEN) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website_hp"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="space-y-4">
            {/* FULL NAME */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2C3A33] flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#C5A059]" /> Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Vikramaditya Singh"
                value={clientName}
                onChange={(e) => {
                  setClientName(e.target.value);
                  if (errors.clientName) setErrors((prev) => ({ ...prev, clientName: '' }));
                }}
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border text-sm font-medium text-[#1E2522] focus:outline-none ${
                  errors.clientName ? 'border-red-500' : 'border-[#2C3A33]/20 focus:border-[#C5A059]'
                }`}
              />
              {errors.clientName && (
                <p className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.clientName}
                </p>
              )}
            </div>

            {/* PHONE NUMBER */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2C3A33] flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#C5A059]" /> Mobile / WhatsApp Number *
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-xs font-bold text-[#2C3A33]/60">+91</span>
                <input
  id="client-phone"
  name="client_phone"
  inputMode="numeric"
  pattern="[0-9]{10}"
  maxLength={10}
  minLength={10}
  autoComplete="tel-national"
  required
  placeholder="9455671995"
  value={clientPhone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setClientPhone(value);

    if (errors.clientPhone) {
      setErrors((prev) => ({ ...prev, clientPhone: '' }));
    }
  }}
                  className={`w-full pl-14 pr-4 py-3 rounded-xl bg-[#FAF9F5] border text-sm font-medium text-[#1E2522] focus:outline-none ${
                    errors.clientPhone ? 'border-red-500' : 'border-[#2C3A33]/20 focus:border-[#C5A059]'
                  }`}
                />
              </div>
              {errors.clientPhone ? (
                <p className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.clientPhone}
                </p>
              ) : (
                <span className="text-[11px] text-[#2C3A33]/60 block">
                  10-digit Indian mobile number for instant WhatsApp confirmation receipt.
                </span>
              )}
            </div>

            {/* EMAIL (OPTIONAL) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2C3A33] flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#C5A059]" /> Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. vikram@example.com"
                value={clientEmail}
                onChange={(e) => {
                  setClientEmail(e.target.value);
                  if (errors.clientEmail) setErrors((prev) => ({ ...prev, clientEmail: '' }));
                }}
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border text-sm font-medium text-[#1E2522] focus:outline-none ${
                  errors.clientEmail ? 'border-red-500' : 'border-[#2C3A33]/20 focus:border-[#C5A059]'
                }`}
              />
              {errors.clientEmail && (
                <p className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.clientEmail}
                </p>
              )}
            </div>

            {/* SPECIAL REQUESTS */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2C3A33] flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#C5A059]" /> Muscle Pain / Posture Notes / Special Requests
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Focus on neck & upper back tension, prefer light aroma oil, couple suite required..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#2C3A33]/20 text-sm font-medium text-[#1E2522] focus:border-[#C5A059] focus:outline-none"
              />
            </div>
          </div>

          {/* NEXT / BACK BUTTONS */}
          <div className="pt-4 flex items-center justify-between gap-4 border-t border-[#2C3A33]/10">
            <button
              type="button"
              onClick={() => setCurrentStep(4)}
              className="flex items-center gap-1.5 text-xs font-bold text-[#2C3A33] hover:text-[#C5A059] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Time
            </button>

            <LuxuryButton
              variant="gold"
              type="submit"
              disabled={isSubmitting}
              className="group"
            >
              {isSubmitting ? 'Confirming Slot...' : 'Review & Confirm Booking'}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </LuxuryButton>
          </div>
        </form>
      )}

      {/* STEP 6: CONFIRMATION & MULTI-CHANNEL ACTIONS */}
      {currentStep === 6 && (
        <div className="space-y-8 text-center">
          <div className="space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 text-[#C5A059] mx-auto flex items-center justify-center border-2 border-[#C5A059]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <LuxuryBadge variant="gold" className="uppercase font-bold tracking-wider inline-block">
              VIP Slot Pending Confirmation
            </LuxuryBadge>

            <h2 className="text-3xl font-serif font-bold text-[#1E2522]">
              Thank You, {clientName || 'Valued Guest'}!
            </h2>

            <p className="text-xs sm:text-sm text-[#2C3A33]/80 max-w-lg mx-auto">
              Your appointment details have been compiled. Complete your reservation with one click below via WhatsApp or Direct Call.
            </p>
          </div>

          {/* BOOKING REFERENCE CODE BOX */}
          <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#C5A059]/40 max-w-md mx-auto space-y-3">
            <div className="flex items-center justify-between border-b border-[#2C3A33]/10 pb-3">
              <span className="text-xs text-[#2C3A33]/70 font-semibold">Booking Reference:</span>
              <button
                onClick={handleCopyRefCode}
                className="text-xs font-bold text-[#C5A059] flex items-center gap-1 hover:underline"
              >
                {bookingRefCode}
                {copiedCode ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-left text-xs space-y-1">
              <div>
                <span className="text-[#2C3A33]/60 block font-medium">Therapy:</span>
                <strong className="text-[#1E2522]">{activeService.name}</strong>
              </div>
              <div>
                <span className="text-[#2C3A33]/60 block font-medium">Duration & Price:</span>
                <strong className="text-[#C5A059]">{selectedDuration} Mins (₹{activePriceINR.toLocaleString('en-IN')})</strong>
              </div>
              <div>
                <span className="text-[#2C3A33]/60 block font-medium">Date & Slot:</span>
                <strong className="text-[#1E2522]">{preferredDate} @ {preferredTime}</strong>
              </div>
              <div>
                <span className="text-[#2C3A33]/60 block font-medium">Phone:</span>
                <strong className="text-[#1E2522]">{normalizeIndianPhone(clientPhone)}</strong>
              </div>
            </div>
          </div>

          {/* DUAL HIGH CONVERSION ACTION BUTTONS */}
          <div className="space-y-3 max-w-md mx-auto">
            <LuxuryButton
              variant="whatsapp"
              fullWidth
              size="lg"
              onClick={handleTriggerWhatsApp}
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Send WhatsApp Confirmation Now
            </LuxuryButton>

            <LuxuryButton
              variant="forest"
              fullWidth
              size="md"
              onClick={handleTriggerPhoneCall}
              icon={<PhoneCall className="w-4 h-4" />}
            >
              Call Receptionist ({BUSINESS_DETAILS.formattedPhone})
            </LuxuryButton>
          </div>

          {/* LOCATION & VALET NOTE */}
          <div className="bg-[#1E2522] text-[#FAF9F5] p-5 rounded-2xl text-left text-xs space-y-2 max-w-md mx-auto border border-[#C5A059]/30">
            <strong className="text-[#C5A059] font-serif font-bold text-sm block flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> Spa Location & Valet Details
            </strong>
            <p className="text-[#FAF9F5]/85">
              {BUSINESS_DETAILS.address.fullAddress}
            </p>
            <span className="text-[11px] text-[#C5A059] block font-semibold">
              • Free Valet Parking available at entrance opposite Brijwasi Bakery.
            </span>
          </div>

          {/* START NEW BOOKING BUTTON */}
          <div className="pt-2">
            <button
              onClick={() => {
                setCurrentStep(1);
                setBookingRefCode('');
              }}
              className="text-xs text-[#2C3A33]/60 hover:text-[#1E2522] font-semibold underline"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
