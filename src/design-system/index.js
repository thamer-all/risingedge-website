// Design System Main Export
export { designTokens, semanticColors, getColor, getSpacing, getFontSize } from './tokens.js';
export { componentStyles, composeClasses, getVariantClasses, getAnimationClasses } from './components.js';

// Re-export commonly used utilities
export { cn } from '../lib/utils.js';

// Design System Hooks and Utilities
import { useState, useEffect } from 'react';

// Custom hook for responsive design
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('sm');
  
  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1536) setBreakpoint('2xl');
      else if (width >= 1280) setBreakpoint('xl');
      else if (width >= 1024) setBreakpoint('lg');
      else if (width >= 768) setBreakpoint('md');
      else if (width >= 640) setBreakpoint('sm');
      else setBreakpoint('xs');
    };
    
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);
  
  return breakpoint;
};

// Animation utilities
export const animationPresets = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  
  stagger: {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }
};

// Layout utilities
export const layoutClasses = {
  page: {
    base: 'min-h-screen bg-gray-50',
    centered: 'min-h-screen bg-gray-50 flex items-center justify-center',
    withHeader: 'min-h-screen bg-gray-50 pt-20'
  },
  
  section: {
    default: 'py-12 md:py-16 lg:py-20',
    hero: 'py-20 md:py-28 lg:py-32',
    compact: 'py-8 md:py-12',
    spacious: 'py-16 md:py-24 lg:py-32'
  },
  
  grid: {
    cols1: 'grid grid-cols-1 gap-6',
    cols2: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    cols3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    cols4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
    auto: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
  },
  
  flex: {
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    start: 'flex items-start justify-between',
    end: 'flex items-end justify-between',
    col: 'flex flex-col',
    colCenter: 'flex flex-col items-center justify-center'
  }
};

// Text utilities with proper contrast ratios
export const textClasses = {
  display: {
    xl: 'text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900',
    lg: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900',
    md: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900',
    sm: 'text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900'
  },
  
  heading: {
    h1: 'text-3xl md:text-4xl font-bold tracking-tight text-gray-900',
    h2: 'text-2xl md:text-3xl font-bold tracking-tight text-gray-900',
    h3: 'text-xl md:text-2xl font-semibold tracking-tight text-gray-900',
    h4: 'text-lg md:text-xl font-semibold tracking-tight text-gray-900',
    h5: 'text-base md:text-lg font-semibold tracking-tight text-gray-900',
    h6: 'text-sm md:text-base font-semibold tracking-tight text-gray-900'
  },
  
  body: {
    xl: 'text-xl leading-relaxed text-gray-700',
    lg: 'text-lg leading-relaxed text-gray-700',
    md: 'text-base leading-relaxed text-gray-700',
    sm: 'text-sm leading-relaxed text-gray-600',
    xs: 'text-xs leading-relaxed text-gray-500'
  },
  
  accent: {
    primary: 'text-emerald-600',
    secondary: 'text-orange-600',
    muted: 'text-gray-500'
  }
};