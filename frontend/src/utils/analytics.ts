// Google Analytics utility functions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Check if Google Analytics is loaded
export const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Track page views
export const trackPageView = (url: string, title?: string): void => {
  if (!isGALoaded()) {
    console.log('GA not loaded, would track page view:', url);
    return;
  }

  window.gtag!('config', import.meta.env.VITE_GA_TRACKING_ID || 'G-CS7MYH9BF5', {
    page_path: url,
    page_title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (action: string, parameters?: {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
}): void => {
  if (!isGALoaded()) {
    console.log('GA not loaded, would track event:', action, parameters);
    return;
  }

  window.gtag!('event', action, {
    event_category: parameters?.event_category || 'general',
    event_label: parameters?.event_label,
    value: parameters?.value,
    ...parameters,
  });
};

// E-commerce tracking for payments
export const trackPurchase = (transactionId: string, value: number, currency: string = 'INR', items?: any[]): void => {
  if (!isGALoaded()) {
    console.log('GA not loaded, would track purchase:', { transactionId, value, currency });
    return;
  }

  window.gtag!('event', 'purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency,
    items: items || [{
      item_id: 'success_mastery_program',
      item_name: 'Success Mastery Program',
      item_category: 'Course',
      price: value,
      quantity: 1,
    }],
  });
};

// Track payment initiation
export const trackBeginCheckout = (value: number, currency: string = 'INR', items?: any[]): void => {
  if (!isGALoaded()) {
    console.log('GA not loaded, would track begin_checkout:', { value, currency });
    return;
  }

  window.gtag!('event', 'begin_checkout', {
    currency: currency,
    value: value,
    items: items || [{
      item_id: 'success_mastery_program',
      item_name: 'Success Mastery Program',
      item_category: 'Course',
      price: value,
      quantity: 1,
    }],
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string, success: boolean = true): void => {
  trackEvent('form_submit', {
    event_category: 'engagement',
    event_label: formName,
    value: success ? 1 : 0,
    success: success,
  });
};

// Track user registration
export const trackSignUp = (method: string = 'email'): void => {
  if (!isGALoaded()) {
    console.log('GA not loaded, would track sign_up:', method);
    return;
  }

  window.gtag!('event', 'sign_up', {
    method: method,
  });
};

// Track user login
export const trackLogin = (method: string = 'email'): void => {
  if (!isGALoaded()) {
    console.log('GA not loaded, would track login:', method);
    return;
  }

  window.gtag!('event', 'login', {
    method: method,
  });
};

// Track video engagement
export const trackVideoProgress = (videoTitle: string, progress: number): void => {
  trackEvent('video_progress', {
    event_category: 'engagement',
    event_label: videoTitle,
    value: progress,
    video_title: videoTitle,
    progress_percent: progress,
  });
};

// Track course completion
export const trackCourseComplete = (courseName: string): void => {
  trackEvent('course_complete', {
    event_category: 'engagement',
    event_label: courseName,
    value: 100,
    course_name: courseName,
  });
};

// Track payment errors
export const trackPaymentError = (errorType: string, errorMessage?: string): void => {
  trackEvent('payment_error', {
    event_category: 'error',
    event_label: errorType,
    error_type: errorType,
    error_message: errorMessage,
  });
};

// Track user engagement time
export const trackEngagementTime = (page: string, timeInSeconds: number): void => {
  trackEvent('user_engagement', {
    event_category: 'engagement',
    event_label: page,
    value: timeInSeconds,
    engagement_time_msec: timeInSeconds * 1000,
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, page: string): void => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaName,
    page: page,
    cta_name: ctaName,
  });
};

// Track scroll depth
export const trackScrollDepth = (page: string, percentage: number): void => {
  // Only track at specific milestones to avoid spam
  if ([25, 50, 75, 90, 100].includes(percentage)) {
    trackEvent('scroll', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      value: percentage,
      page: page,
      scroll_depth: percentage,
    });
  }
};