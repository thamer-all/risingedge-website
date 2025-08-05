import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { componentStyles, composeClasses, animationPresets } from '@/design-system';

const PremiumCard = React.forwardRef(({
  children,
  variant = 'elevated',
  padding = 'md',
  className,
  hover = true,
  animate = true,
  gradient,
  glass = false,
  ...props
}, ref) => {
  const baseClasses = componentStyles.card.base;
  const variantClasses = componentStyles.card.variants[variant];
  const paddingClasses = componentStyles.card.padding[padding];
  
  const cardClasses = composeClasses(
    baseClasses,
    variantClasses,
    paddingClasses,
    hover && 'card-hover cursor-pointer',
    glass && 'glass-card',
    gradient && `bg-gradient-${gradient}`,
    className
  );

  const CardComponent = animate ? motion.div : 'div';
  const animationProps = animate ? {
    ...animationPresets.stagger.item,
    whileHover: hover ? {
      y: -6,
      transition: { duration: 0.2 }
    } : {}
  } : {};

  return (
    <CardComponent
      ref={ref}
      className={cardClasses}
      {...animationProps}
      {...props}
    >
      {children}
    </CardComponent>
  );
});

PremiumCard.displayName = 'PremiumCard';

// Card Header Component
export const CardHeader = ({ 
  children, 
  className,
  title,
  subtitle,
  action,
  ...props 
}) => (
  <div 
    className={cn(
      'flex items-start justify-between',
      title && subtitle ? 'mb-4' : 'mb-2',
      className
    )}
    {...props}
  >
    <div className="flex-1">
      {title && (
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-sm md:text-base text-gray-600">
          {subtitle}
        </p>
      )}
      {!title && !subtitle && children}
    </div>
    {action && (
      <div className="flex-shrink-0 ml-4">
        {action}
      </div>
    )}
  </div>
);

// Card Content Component
export const CardContent = ({ 
  children, 
  className,
  ...props 
}) => (
  <div 
    className={cn('flex-1', className)}
    {...props}
  >
    {children}
  </div>
);

// Card Footer Component
export const CardFooter = ({ 
  children, 
  className,
  justify = 'between',
  ...props 
}) => {
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around'
  };

  return (
    <div 
      className={cn(
        'flex items-center pt-4 mt-4 border-t border-gray-100',
        justifyClasses[justify],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Specialized Card Variants
export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  action,
  iconColor = 'primary',
  ...props 
}) => {
  const iconColorClasses = {
    primary: 'text-emerald-600 bg-emerald-50',
    coral: 'text-orange-600 bg-orange-50',
    purple: 'text-purple-600 bg-purple-50',
    blue: 'text-blue-600 bg-blue-50'
  };

  return (
    <PremiumCard variant="elevated" hover animate {...props}>
      <div className="text-center">
        {icon && (
          <motion.div
            className={cn(
              'w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4',
              iconColorClasses[iconColor]
            )}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        {action && (
          <div className="pt-2">
            {action}
          </div>
        )}
      </div>
    </PremiumCard>
  );
};

export const StatCard = ({ 
  value, 
  label, 
  change,
  changeType = 'positive',
  icon,
  trend,
  ...props 
}) => {
  const changeColors = {
    positive: 'text-green-600 bg-green-50',
    negative: 'text-red-600 bg-red-50',
    neutral: 'text-gray-600 bg-gray-50'
  };

  return (
    <PremiumCard variant="elevated" hover animate {...props}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">
            {label}
          </p>
          <p className="text-3xl font-bold text-gray-900 mb-2">
            {value}
          </p>
          {change && (
            <div className={cn(
              'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
              changeColors[changeType]
            )}>
              {change}
            </div>
          )}
        </div>
        {icon && (
          <div className="flex-shrink-0">
            <div className="w-8 h-8 text-gray-400">
              {icon}
            </div>
          </div>
        )}
      </div>
      {trend && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          {trend}
        </div>
      )}
    </PremiumCard>
  );
};

export const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  avatar,
  rating,
  ...props 
}) => (
  <PremiumCard variant="elevated" hover animate {...props}>
    <div className="text-center">
      {rating && (
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={cn(
                'w-5 h-5',
                i < rating ? 'text-yellow-400' : 'text-gray-300'
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center justify-center">
        {avatar && (
          <img 
            src={avatar} 
            alt={author}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div className="text-left">
          <p className="font-semibold text-gray-900">{author}</p>
          {role && (
            <p className="text-sm text-gray-600">{role}</p>
          )}
        </div>
      </div>
    </div>
  </PremiumCard>
);

export default PremiumCard;