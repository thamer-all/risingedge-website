// Performance Optimization Utilities
// For Rising Edge Community Website

// Image optimization utility
export const optimizeImage = (src, options = {}) => {
  const {
    width = 800,
    height = 600,
    quality = 80,
    format = 'webp',
    loading = 'lazy'
  } = options;

  // If it's a placeholder API or external image
  if (src.includes('placeholder') || src.startsWith('http')) {
    return {
      src: `${src}?w=${width}&h=${height}&q=${quality}&fm=${format}`,
      loading,
      width,
      height
    };
  }

  // For local images, return optimized attributes
  return {
    src,
    loading,
    width,
    height,
    style: { 
      aspectRatio: `${width}/${height}`,
      objectFit: 'cover'
    }
  };
};

// Lazy loading observer
export const createLazyLoadObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };

  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

// Performance monitoring
export class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.observers = [];
  }

  // Measure loading times
  measureLoadTime(name, startTime = performance.now()) {
    return {
      end: () => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        this.metrics[name] = duration;
        
        // Log performance in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
        }
        
        return duration;
      }
    };
  }

  // Measure component render time
  measureRender(componentName) {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`Render: ${componentName} rendered in ${renderTime.toFixed(2)}ms`);
      }
      
      return renderTime;
    };
  }

  // Track Core Web Vitals
  trackWebVitals() {
    // Track LCP (Largest Contentful Paint)
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(this.logMetric);
        getFID(this.logMetric);
        getFCP(this.logMetric);
        getLCP(this.logMetric);
        getTTFB(this.logMetric);
      });
    }
  }

  logMetric = (metric) => {
    this.metrics[metric.name] = metric.value;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Web Vital: ${metric.name}`, metric.value);
    }
  };

  // Get all metrics
  getMetrics() {
    return { ...this.metrics };
  }

  // Clear metrics
  clearMetrics() {
    this.metrics = {};
  }
}

// Create global performance monitor instance
export const performanceMonitor = new PerformanceMonitor();

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    // Add other critical resources
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    Object.assign(link, resource);
    document.head.appendChild(link);
  });
};

// Bundle analyzer utility (development only)
export const analyzeBundleSize = () => {
  if (process.env.NODE_ENV === 'development') {
    // Analyze loaded modules
    const loadedModules = Object.keys(window.webpackJsonp || {});
    console.log('Loaded modules:', loadedModules.length);
    
    // Memory usage
    if (performance.memory) {
      console.log('Memory usage:', {
        used: `${(performance.memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
        total: `${(performance.memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
        limit: `${(performance.memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`
      });
    }
  }
};

// Resource hints utility
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://api.stripe.com' },
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.assign(link, hint);
    document.head.appendChild(link);
  });
};

// Code splitting utilities
export const loadChunk = async (chunkName) => {
  const loadTimer = performanceMonitor.measureLoadTime(`chunk-${chunkName}`);
  
  try {
    const module = await import(/* webpackChunkName: "[request]" */ chunkName);
    loadTimer.end();
    return module;
  } catch (error) {
    loadTimer.end();
    console.error(`Failed to load chunk: ${chunkName}`, error);
    throw error;
  }
};

// Critical CSS inlining (build-time utility)
export const inlineCriticalCSS = (css) => {
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.appendChild(style);
};

// Service Worker registration
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      console.log('Service Worker registered:', registration);
      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Performance optimization hooks
export const usePerformanceTracking = (componentName) => {
  React.useEffect(() => {
    const endRender = performanceMonitor.measureRender(componentName);
    return endRender;
  }, [componentName]);
};

// Viewport-based loading
export const useViewportLoading = (ref, callback, options = {}) => {
  React.useEffect(() => {
    if (!ref.current) return;

    const observer = createLazyLoadObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, callback, options]);
};

// Initialize performance optimizations
export const initializePerformanceOptimizations = () => {
  // Add resource hints
  addResourceHints();
  
  // Register service worker
  registerServiceWorker();
  
  // Track web vitals
  performanceMonitor.trackWebVitals();
  
  // Analyze bundle size in development
  analyzeBundleSize();
};

export default {
  optimizeImage,
  createLazyLoadObserver,
  PerformanceMonitor,
  performanceMonitor,
  preloadCriticalResources,
  analyzeBundleSize,
  addResourceHints,
  loadChunk,
  inlineCriticalCSS,
  registerServiceWorker,
  usePerformanceTracking,
  useViewportLoading,
  initializePerformanceOptimizations
};