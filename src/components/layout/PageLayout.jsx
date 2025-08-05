import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { layoutClasses, animationPresets } from '@/design-system';
import LoadingSpinner from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';

const PageLayout = ({ 
  children, 
  className,
  title,
  subtitle,
  backgroundVariant = 'default',
  showHeader = true,
  containerSize = '7xl',
  sectionSpacing = 'default'
}) => {
  const backgroundClasses = {
    default: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
    primary: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50',
    warm: 'bg-gradient-to-br from-orange-50 via-white to-red-50',
    cool: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
    dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
  };

  const containerClasses = {
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
  };

  const spacingClasses = {
    compact: 'py-8 md:py-12',
    default: 'py-12 md:py-16 lg:py-20',
    spacious: 'py-16 md:py-24 lg:py-32',
    hero: 'py-20 md:py-28 lg:py-32'
  };

  return (
    <ErrorBoundary>
      <div className={cn(
        'min-h-screen',
        backgroundClasses[backgroundVariant],
        showHeader && 'pt-20',
        className
      )}>
        <main className={cn(
          containerClasses[containerSize],
          spacingClasses[sectionSpacing]
        )}>
          {(title || subtitle) && (
            <motion.div
              className="text-center mb-12 md:mb-16"
              {...animationPresets.fadeInUp}
            >
              {title && (
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}
          
          <Suspense fallback={<LoadingSpinner />}>
            <motion.div
              {...animationPresets.stagger.container}
            >
              {children}
            </motion.div>
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default PageLayout;