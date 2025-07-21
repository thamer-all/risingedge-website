import { useEffect, useCallback } from 'react';

export const useAnalytics = () => {
  // Track Core Web Vitals
  const trackWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint (LCP)
    const trackLCP = () => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        // Log to your analytics service
        console.log('LCP:', lastEntry.startTime);
        
        // Send to Google Analytics or your analytics service
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime),
          });
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true });
    };

    // First Input Delay (FID)
    const trackFID = () => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FID',
              value: Math.round(entry.processingStart - entry.startTime),
            });
          }
        });
      }).observe({ type: 'first-input', buffered: true });
    };

    // Cumulative Layout Shift (CLS)
    const trackCLS = () => {
      let clsValue = 0;
      let clsEntries = [];

      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            const firstSessionEntry = clsEntries[0];
            const lastSessionEntry = clsEntries[clsEntries.length - 1];

            if (clsEntries.length === 0 || 
                entry.startTime - lastSessionEntry.startTime < 1000 &&
                entry.startTime - firstSessionEntry.startTime < 5000) {
              clsEntries.push(entry);
              clsValue += entry.value;
            } else {
              clsEntries = [entry];
              clsValue = entry.value;
            }
          }
        }

        console.log('CLS:', clsValue);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'CLS',
            value: clsValue,
          });
        }
      }).observe({ type: 'layout-shift', buffered: true });
    };

    // Initialize tracking
    trackLCP();
    trackFID();
    trackCLS();
  }, []);

  // Track page views
  const trackPageView = useCallback((pageName, additionalData = {}) => {
    if (window.gtag) {
      window.gtag('config', process.env.VITE_GA_TRACKING_ID, {
        page_title: pageName,
        page_location: window.location.href,
        ...additionalData
      });
    }
    
    // Custom analytics
    console.log('Page view:', pageName, additionalData);
  }, []);

  // Track events (donations, form submissions, etc.)
  const trackEvent = useCallback((eventName, eventData = {}) => {
    if (window.gtag) {
      window.gtag('event', eventName, {
        event_category: eventData.category || 'User Interaction',
        event_label: eventData.label || '',
        value: eventData.value || 0,
        ...eventData
      });
    }

    console.log('Event tracked:', eventName, eventData);
  }, []);

  // Track donation attempts and completions
  const trackDonation = useCallback((stage, amount = 0, additionalData = {}) => {
    const donationEvents = {
      'donation_started': 'User started donation process',
      'donation_form_completed': 'User filled out donation form',
      'donation_payment_attempted': 'User attempted payment',
      'donation_completed': 'Donation successfully completed',
      'donation_failed': 'Donation process failed'
    };

    trackEvent(stage, {
      category: 'Donations',
      label: donationEvents[stage] || stage,
      value: amount,
      ...additionalData
    });
  }, [trackEvent]);

  // Track user engagement
  const trackEngagement = useCallback((action, details = {}) => {
    trackEvent('engagement', {
      category: 'User Engagement',
      label: action,
      ...details
    });
  }, [trackEvent]);

  // Initialize analytics on mount
  useEffect(() => {
    trackWebVitals();
  }, [trackWebVitals]);

  return {
    trackPageView,
    trackEvent,
    trackDonation,
    trackEngagement,
    trackWebVitals,
  };
};

// Hook for A/B testing donation conversion
export const useDonationOptimization = () => {
  const { trackEvent } = useAnalytics();

  const getVariant = useCallback((testName) => {
    // Simple A/B testing logic
    const stored = localStorage.getItem(`ab_test_${testName}`);
    if (stored) return stored;

    const variant = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem(`ab_test_${testName}`, variant);
    
    // Track the assignment
    trackEvent('ab_test_assignment', {
      category: 'A/B Testing',
      label: `${testName}_${variant}`,
    });

    return variant;
  }, [trackEvent]);

  const trackConversion = useCallback((testName, variant, conversionType) => {
    trackEvent('ab_test_conversion', {
      category: 'A/B Testing',
      label: `${testName}_${variant}_${conversionType}`,
    });
  }, [trackEvent]);

  return {
    getVariant,
    trackConversion,
  };
}; 