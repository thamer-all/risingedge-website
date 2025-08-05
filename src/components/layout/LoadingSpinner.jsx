import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const LoadingSpinner = ({ 
  size = 'md', 
  variant = 'primary',
  className,
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: {
      spinner: 'w-6 h-6',
      text: 'text-sm'
    },
    md: {
      spinner: 'w-8 h-8',
      text: 'text-base'
    },
    lg: {
      spinner: 'w-12 h-12',
      text: 'text-lg'
    },
    xl: {
      spinner: 'w-16 h-16',
      text: 'text-xl'
    }
  };

  const variantClasses = {
    primary: 'text-emerald-600',
    secondary: 'text-orange-600',
    neutral: 'text-gray-600'
  };

  return (
    <motion.div
      className={cn(
        'flex flex-col items-center justify-center py-12',
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated Spinner */}
      <motion.div
        className={cn(
          'relative',
          sizeClasses[size].spinner
        )}
      >
        {/* Outer Ring */}
        <motion.div
          className={cn(
            'absolute inset-0 rounded-full border-2 border-transparent border-t-current',
            variantClasses[variant]
          )}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Inner Ring */}
        <motion.div
          className={cn(
            'absolute inset-1 rounded-full border-2 border-transparent border-b-current opacity-60',
            variantClasses[variant]
          )}
          animate={{ rotate: -360 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Center Dot */}
        <motion.div
          className={cn(
            'absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2',
            variantClasses[variant] === 'text-emerald-600' ? 'bg-emerald-600' :
            variantClasses[variant] === 'text-orange-600' ? 'bg-orange-600' :
            'bg-gray-600'
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.div>

      {/* Loading Text */}
      {text && (
        <motion.p
          className={cn(
            'mt-4 font-medium text-center',
            sizeClasses[size].text,
            variantClasses[variant]
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </motion.div>
  );
};

// Alternative minimal loading component
export const LoadingDots = ({ variant = 'primary', className }) => {
  const variantClasses = {
    primary: 'bg-emerald-600',
    secondary: 'bg-orange-600',
    neutral: 'bg-gray-600'
  };

  return (
    <div className={cn('flex items-center justify-center space-x-1', className)}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={cn(
            'w-2 h-2 rounded-full',
            variantClasses[variant]
          )}
          animate={{
            y: [-4, 4, -4],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.1,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

// Skeleton loading component
export const SkeletonLoader = ({ className, variant = 'text' }) => {
  const variants = {
    text: 'h-4 bg-gray-200 rounded',
    title: 'h-8 bg-gray-200 rounded',
    card: 'h-32 bg-gray-200 rounded-lg',
    avatar: 'w-12 h-12 bg-gray-200 rounded-full',
    button: 'h-10 w-24 bg-gray-200 rounded-lg'
  };

  return (
    <motion.div
      className={cn(
        'animate-pulse',
        variants[variant],
        className
      )}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
};

export default LoadingSpinner;