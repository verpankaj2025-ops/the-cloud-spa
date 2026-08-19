/**
 * Enterprise Booking Validation & Spam Protection Utility
 * Standardizes lead validation, Indian phone formatting, spam protection, and duplicate locks.
 */

export interface BookingFormData {
  serviceId: string;
  durationMinutes: number;
  preferredDate: string;
  preferredTime: string;
  clientName: string;
  clientPhone: string;
  clientEmail?: string;
  specialRequests?: string;
  honeypot?: string; // Invisible spam trap
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validates Indian Phone Number (10 digits starting with 6-9)
 */
export function validateIndianPhone(phone: string): boolean {
  if (!phone) return false;
  // Clean non-digits
  const digitsOnly = phone.replace(/\D/g, '');

  // Handle +91 or 0 prefix
  let tenDigits = digitsOnly;
  if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
    tenDigits = digitsOnly.substring(2);
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
    tenDigits = digitsOnly.substring(1);
  }

  // Must be exactly 10 digits starting with 6, 7, 8, or 9
  return /^[6-9]\d{9}$/.test(tenDigits);
}

/**
 * Normalizes Indian Phone to standard format (e.g. +91 9455671995)
 */
export function normalizeIndianPhone(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, '');
  let tenDigits = digitsOnly;

  if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
    tenDigits = digitsOnly.substring(2);
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
    tenDigits = digitsOnly.substring(1);
  }

  if (tenDigits.length === 10) {
    return `+91 ${tenDigits.slice(0, 5)} ${tenDigits.slice(5)}`;
  }

  return phone;
}

/**
 * Validates complete Booking Form Data
 */
export function validateBookingForm(data: BookingFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Honeypot spam check
  if (data.honeypot && data.honeypot.trim() !== '') {
    return {
      isValid: false,
      errors: { _spam: 'Spam submission detected.' },
    };
  }

  // Name validation
  if (!data.clientName || data.clientName.trim().length < 2) {
    errors.clientName = 'Please enter your full name (minimum 2 letters).';
  } else if (!/^[a-zA-Z\s.'-]+$/.test(data.clientName.trim())) {
    errors.clientName = 'Name should only contain letters and spaces.';
  }

  // Phone validation
  if (!data.clientPhone || !data.clientPhone.trim()) {
    errors.clientPhone = 'Phone number is required for appointment confirmation.';
  } else if (!validateIndianPhone(data.clientPhone)) {
    errors.clientPhone = 'Please enter a valid 10-digit mobile number (e.g., 9876543210).';
  }

  // Email validation (optional)
  if (data.clientEmail && data.clientEmail.trim() !== '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.clientEmail.trim())) {
      errors.clientEmail = 'Please enter a valid email address.';
    }
  }

  // Date validation
  if (!data.preferredDate) {
    errors.preferredDate = 'Please select a preferred appointment date.';
  } else {
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDate.getTime())) {
      errors.preferredDate = 'Invalid date selected.';
    } else if (selectedDate < today) {
      errors.preferredDate = 'Appointment date cannot be in the past.';
    }
  }

  // Time validation
  if (!data.preferredTime) {
    errors.preferredTime = 'Please select a time slot.';
  }

  // Service validation
  if (!data.serviceId) {
    errors.serviceId = 'Please select a spa therapy.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Prevents Duplicate Submissions within a specified timeframe (default 90s)
 */
const SUBMISSION_LOCK_TIME_MS = 90000; // 90 seconds

export function checkDuplicateSubmission(phone: string, serviceId: string): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const lockKey = `thecloudspa_booking_lock_${phone.replace(/\D/g, '')}_${serviceId}`;
    const lastSubmission = localStorage.getItem(lockKey);

    if (lastSubmission) {
      const timeDiff = Date.now() - parseInt(lastSubmission, 10);
      if (timeDiff < SUBMISSION_LOCK_TIME_MS) {
        return true; // Is duplicate
      }
    }
  } catch (e) {
    console.warn('Storage check error', e);
  }

  return false;
}

export function registerSubmissionLock(phone: string, serviceId: string): void {
  if (typeof window === 'undefined') return;

  try {
    const lockKey = `thecloudspa_booking_lock_${phone.replace(/\D/g, '')}_${serviceId}`;
    localStorage.setItem(lockKey, Date.now().toString());
  } catch (e) {
    console.warn('Storage write error', e);
  }
}
