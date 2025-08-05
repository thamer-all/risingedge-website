import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { layoutClasses, animationPresets } from '@/design-system';

const PremiumSection = ({
  children,
  id,
  className,
  background = 'default',
  spacing = 'default',
  containerSize = '7xl',
  animate = true,
  title,
  subtitle,
  titleAlign = 'center',
  titleSize = 'default'
}) => {
  const backgroundClasses = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
    primary: 'bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50',
    warm: 'bg-gradient-to-br from-orange-50/30 via-white to-red-50/30',
    cool: 'bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30',
    dark: 'bg-gray-900 text-white'
  };

  const spacingClasses = {
    compact: 'py-8 md:py-12',
    default: 'py-12 md:py-16 lg:py-20',
    spacious: 'py-16 md:py-24 lg:py-32',
    hero: 'py-20 md:py-28 lg:py-32'
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
    full: 'w-full px-4 sm:px-6 lg:px-8'
  };

  const titleAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const titleSizeClasses = {
    small: {
      title: 'text-2xl md:text-3xl font-bold tracking-tight',
      subtitle: 'text-base md:text-lg'
    },
    default: {
      title: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
      subtitle: 'text-lg md:text-xl'
    },
    large: {
      title: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
      subtitle: 'text-xl md:text-2xl'
    }
  };

  const SectionComponent = animate ? motion.section : 'section';
  const animationProps = animate ? {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true, margin: "-100px" },
    variants: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    }
  } : {};

  return (
    <SectionComponent
      id={id}
      className={cn(
        backgroundClasses[background],
        spacingClasses[spacing],
        className
      )}
      {...animationProps}
    >
      <div className={containerClasses[containerSize]}>
        {(title || subtitle) && (
          <motion.div
            className={cn(
              'mb-12 md:mb-16',
              titleAlignClasses[titleAlign]
            )}
            variants={animate ? animationPresets.stagger.item : {}}
          >
            {title && (
              <h2 className={cn(
                titleSizeClasses[titleSize].title,
                background === 'dark' ? 'text-white' : 'text-gray-900',
                'mb-4'
              )}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn(
                titleSizeClasses[titleSize].subtitle,
                background === 'dark' ? 'text-gray-300' : 'text-gray-700',
                'leading-relaxed',
                titleAlign === 'center' ? 'max-w-3xl mx-auto' : 'max-w-4xl'
              )}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        <motion.div
          variants={animate ? animationPresets.stagger.container : {}}
        >
          {children}
        </motion.div>
      </div>
    </SectionComponent>
  );
};

// Specialized Section Components
export const HeroSection = ({ 
  children, 
  backgroundImage, 
  overlay = true,
  ...props 
}) => (
  <PremiumSection
    spacing="hero"
    background="default"
    className={cn(
      'relative min-h-screen flex items-center',
      backgroundImage && 'bg-cover bg-center bg-no-repeat'
    )}
    style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    {...props}
  >
    {backgroundImage && overlay && (
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
    )}
    <div className="relative z-10 w-full">
      {children}
    </div>
  </PremiumSection>
);

export const FeatureSection = ({ 
  features = [], 
  columns = 3,
  ...props 
}) => {
  const gridClasses = {
    1: 'grid grid-cols-1 gap-8',
    2: 'grid grid-cols-1 md:grid-cols-2 gap-8',
    3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
  };

  return (
    <PremiumSection {...props}>
      <div className={gridClasses[columns]}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={animationPresets.stagger.item}
            className="text-center"
          >
            {feature.icon && (
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-emerald-600">
                {feature.icon}
              </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </PremiumSection>
  );
};

export const CTASection = ({ 
  title, 
  description, 
  primaryAction, 
  secondaryAction,
  backgroundPattern = false,
  ...props 
}) => (
  <PremiumSection
    background="gradient"
    className={cn(
      'relative overflow-hidden',
      backgroundPattern && 'bg-pattern-dots'
    )}
    {...props}
  >
    {backgroundPattern && (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5" />
    )}
    <div className="relative z-10 text-center">
      <motion.div variants={animationPresets.stagger.item}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryAction}
          {secondaryAction}
        </div>
      </motion.div>
    </div>
  </PremiumSection>
);

export const StatsSection = ({ 
  stats = [],
  columns = 4,
  ...props 
}) => {
  const gridClasses = {
    1: 'grid grid-cols-1 gap-8',
    2: 'grid grid-cols-1 md:grid-cols-2 gap-8',
    3: 'grid grid-cols-1 md:grid-cols-3 gap-8',
    4: 'grid grid-cols-2 md:grid-cols-4 gap-8'
  };

  return (
    <PremiumSection background="gray" {...props}>
      <div className={gridClasses[columns]}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={animationPresets.stagger.item}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
              {stat.value}
            </div>
            <div className="text-sm md:text-base text-gray-600 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </PremiumSection>
  );
};

export default PremiumSection;