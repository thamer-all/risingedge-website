import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { componentStyles, composeClasses } from '@/design-system';

const PremiumButton = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  onClick,
  ...props
}, ref) => {
  const baseClasses = componentStyles.button.base;
  const variantClasses = componentStyles.button.variants[variant] || componentStyles.button.variants.primary;
  const sizeClasses = componentStyles.button.sizes[size];
  
  const buttonClasses = composeClasses(
    baseClasses,
    variantClasses,
    sizeClasses,
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed',
    loading && 'cursor-wait',
    'btn-hover-lift',
    className
  );

  const handleClick = (e) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  return (
    <motion.button
      ref={ref}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { 
        scale: 1.02,
        y: -2
      } : {}}
      whileTap={!disabled && !loading ? { 
        scale: 0.98,
        y: 0
      } : {}}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      {...props}
    >
      {loading && (
        <motion.div
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
      
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      
      <span>{children}</span>
      
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </motion.button>
  );
});

PremiumButton.displayName = 'PremiumButton';

// Specialized button variants
export const GradientButton = ({ children, gradient = 'primary', ...props }) => {
  const gradientClasses = {
    primary: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
    coral: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
    purple: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    blue: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
  };

  return (
    <PremiumButton
      className={cn(
        gradientClasses[gradient],
        'text-white border-transparent shadow-lg',
        `glow-${gradient === 'coral' ? 'coral' : gradient === 'purple' ? 'purple' : 'primary'}`
      )}
      {...props}
    >
      {children}
    </PremiumButton>
  );
};

export const GlassButton = ({ children, ...props }) => (
  <PremiumButton
    className="glass-card hover:bg-white/80 text-gray-700 border-white/30"
    {...props}
  >
    {children}
  </PremiumButton>
);

export const FloatingActionButton = ({ 
  children, 
  position = 'bottom-right',
  className,
  ...props 
}) => {
  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-24 right-6',
    'top-left': 'fixed top-24 left-6'
  };

  return (
    <motion.div
      className={cn(positionClasses[position], 'z-50')}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <PremiumButton
        size="lg"
        className={cn(
          'rounded-full w-14 h-14 p-0 shadow-2xl',
          'bg-gradient-to-br from-emerald-500 to-emerald-600',
          'hover:from-emerald-600 hover:to-emerald-700',
          'text-white glow-primary',
          className
        )}
        {...props}
      >
        {children}
      </PremiumButton>
    </motion.div>
  );
};

export default PremiumButton;