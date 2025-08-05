// Design System Component Definitions
// Premium component classes and variants for Rising Edge Community

import { designTokens } from './tokens.js';

export const componentStyles = {
  // Button Components
  button: {
    base: [
      'inline-flex items-center justify-center gap-2',
      'font-medium transition-all duration-300',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'rounded-lg shadow-sm hover:shadow-md',
      'transform hover:scale-[1.02] active:scale-[0.98]'
    ].join(' '),
    
    variants: {
      primary: [
        'bg-gradient-to-r from-emerald-500 to-emerald-600',
        'text-white border-transparent',
        'hover:from-emerald-600 hover:to-emerald-700',
        'focus-visible:ring-emerald-500',
        'shadow-emerald-500/25 hover:shadow-emerald-500/40'
      ].join(' '),
      
      secondary: [
        'bg-gradient-to-r from-orange-500 to-orange-600',
        'text-white border-transparent',
        'hover:from-orange-600 hover:to-orange-700',
        'focus-visible:ring-orange-500',
        'shadow-orange-500/25 hover:shadow-orange-500/40'
      ].join(' '),
      
      outline: [
        'bg-white/80 backdrop-blur-sm',
        'text-gray-700 border-2 border-gray-200',
        'hover:bg-white hover:border-gray-300',
        'focus-visible:ring-gray-500',
        'shadow-gray-500/10'
      ].join(' '),
      
      ghost: [
        'bg-transparent text-gray-700',
        'hover:bg-gray-100',
        'focus-visible:ring-gray-500'
      ].join(' ')
    },
    
    sizes: {
      sm: 'px-3 py-1.5 text-sm h-8',
      md: 'px-4 py-2 text-base h-10',
      lg: 'px-6 py-3 text-lg h-12',
      xl: 'px-8 py-4 text-xl h-14'
    }
  },
  
  // Card Components
  card: {
    base: [
      'bg-white rounded-xl border border-gray-200',
      'shadow-sm hover:shadow-lg transition-all duration-300',
      'transform hover:translate-y-[-2px]',
      'overflow-hidden'
    ].join(' '),
    
    variants: {
      elevated: [
        'shadow-lg hover:shadow-xl',
        'border-transparent bg-white/95 backdrop-blur-sm'
      ].join(' '),
      
      gradient: [
        'bg-gradient-to-br from-white to-gray-50',
        'border-gray-100'
      ].join(' '),
      
      interactive: [
        'cursor-pointer hover:border-emerald-200',
        'hover:shadow-emerald-500/10'
      ].join(' ')
    },
    
    padding: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    }
  },
  
  // Typography Components
  typography: {
    display: {
      '1': 'text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight',
      '2': 'text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight',
      '3': 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
      '4': 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight'
    },
    
    heading: {
      '1': 'text-3xl md:text-4xl font-bold tracking-tight text-gray-900',
      '2': 'text-2xl md:text-3xl font-bold tracking-tight text-gray-900',
      '3': 'text-xl md:text-2xl font-semibold tracking-tight text-gray-900',
      '4': 'text-lg md:text-xl font-semibold tracking-tight text-gray-900',
      '5': 'text-base md:text-lg font-semibold tracking-tight text-gray-900',
      '6': 'text-sm md:text-base font-semibold tracking-tight text-gray-900'
    },
    
    body: {
      large: 'text-lg leading-relaxed text-gray-700',
      medium: 'text-base leading-relaxed text-gray-700',
      small: 'text-sm leading-relaxed text-gray-600'
    },
    
    caption: 'text-xs leading-relaxed text-gray-500 uppercase tracking-wide'
  },
  
  // Input Components
  input: {
    base: [
      'w-full px-4 py-3 rounded-lg border border-gray-200',
      'bg-white placeholder-gray-500 text-gray-900',
      'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent',
      'transition-all duration-200',
      'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed'
    ].join(' '),
    
    variants: {
      error: [
        'border-red-300 focus:ring-red-500',
        'bg-red-50 placeholder-red-400'
      ].join(' '),
      
      success: [
        'border-emerald-300 focus:ring-emerald-500',
        'bg-emerald-50'
      ].join(' ')
    },
    
    sizes: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg'
    }
  },
  
  // Badge Components
  badge: {
    base: [
      'inline-flex items-center px-2.5 py-0.5 rounded-full',
      'text-xs font-medium'
    ].join(' '),
    
    variants: {
      primary: 'bg-emerald-100 text-emerald-800',
      secondary: 'bg-orange-100 text-orange-800',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800',
      info: 'bg-blue-100 text-blue-800',
      neutral: 'bg-gray-100 text-gray-800'
    }
  },
  
  // Navigation Components
  nav: {
    link: {
      base: [
        'text-gray-700 hover:text-emerald-600',
        'font-medium transition-colors duration-200',
        'relative py-2 px-1'
      ].join(' '),
      
      active: [
        'text-emerald-600',
        'after:absolute after:bottom-0 after:left-0 after:right-0',
        'after:h-0.5 after:bg-emerald-600 after:rounded-full'
      ].join(' ')
    },
    
    dropdown: {
      trigger: [
        'flex items-center gap-1 text-gray-700 hover:text-emerald-600',
        'font-medium transition-colors duration-200'
      ].join(' '),
      
      content: [
        'absolute top-full left-0 mt-2 w-48',
        'bg-white rounded-lg shadow-lg border border-gray-200',
        'py-2 z-50',
        'opacity-0 invisible group-hover:opacity-100 group-hover:visible',
        'transition-all duration-200 transform translate-y-1 group-hover:translate-y-0'
      ].join(' '),
      
      item: [
        'block px-4 py-2 text-sm text-gray-700',
        'hover:bg-gray-50 hover:text-emerald-600',
        'transition-colors duration-150'
      ].join(' ')
    }
  },
  
  // Layout Components
  container: {
    base: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    
    sizes: {
      xs: 'max-w-xs mx-auto px-4',
      sm: 'max-w-sm mx-auto px-4',
      md: 'max-w-md mx-auto px-4',
      lg: 'max-w-lg mx-auto px-4',
      xl: 'max-w-xl mx-auto px-4',
      '2xl': 'max-w-2xl mx-auto px-4',
      '3xl': 'max-w-3xl mx-auto px-4',
      '4xl': 'max-w-4xl mx-auto px-4',
      '5xl': 'max-w-5xl mx-auto px-4',
      '6xl': 'max-w-6xl mx-auto px-4',
      '7xl': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      full: 'max-w-full mx-auto px-4 sm:px-6 lg:px-8'
    }
  },
  
  section: {
    base: 'py-12 md:py-16 lg:py-20',
    
    variants: {
      hero: 'py-20 md:py-28 lg:py-32',
      compact: 'py-8 md:py-12',
      spacious: 'py-16 md:py-24 lg:py-32'
    }
  },
  
  // Animation Classes
  animation: {
    fadeIn: 'animate-in fade-in duration-500',
    slideUp: 'animate-in slide-in-from-bottom-4 duration-500',
    slideDown: 'animate-in slide-in-from-top-4 duration-500',
    slideLeft: 'animate-in slide-in-from-right-4 duration-500',
    slideRight: 'animate-in slide-in-from-left-4 duration-500',
    scaleIn: 'animate-in zoom-in-95 duration-300',
    
    // Stagger animations
    stagger: {
      container: 'animate-in fade-in duration-200',
      item: 'animate-in slide-in-from-bottom-4 duration-500'
    }
  },
  
  // Gradient Backgrounds
  gradients: {
    primary: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
    secondary: 'bg-gradient-to-r from-orange-500 to-orange-600',
    accent: 'bg-gradient-to-r from-purple-500 to-purple-600',
    warm: 'bg-gradient-to-br from-orange-400 via-red-400 to-pink-400',
    cool: 'bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400',
    neutral: 'bg-gradient-to-br from-gray-100 to-gray-200',
    
    // Hero backgrounds
    hero: 'bg-gradient-to-br from-emerald-600/90 via-teal-700/90 to-cyan-800/90',
    heroOverlay: 'bg-gradient-to-t from-black/60 via-black/30 to-transparent'
  }
};

// Component Composition Utilities
export const composeClasses = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const getVariantClasses = (component, variant = 'default', size = 'md') => {
  const comp = componentStyles[component];
  if (!comp) return '';
  
  return composeClasses(
    comp.base,
    comp.variants?.[variant],
    comp.sizes?.[size]
  );
};

// Animation Utilities
export const getAnimationClasses = (type, delay = 0) => {
  const baseClass = componentStyles.animation[type] || '';
  const delayClass = delay > 0 ? `delay-${delay}` : '';
  
  return composeClasses(baseClass, delayClass);
};