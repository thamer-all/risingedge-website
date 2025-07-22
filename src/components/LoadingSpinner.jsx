import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ 
  size = 'default', 
  text = 'Loading...', 
  className = '',
  centered = false 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    default: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const containerClasses = centered 
    ? 'flex flex-col items-center justify-center min-h-[200px]'
    : 'flex items-center space-x-2';

  return (
    <div className={`${containerClasses} ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-primary`} />
      {text && (
        <p className={`text-gray-600 ${centered ? 'mt-4 text-lg' : 'text-sm'}`}>
          {text}
        </p>
      )}
    </div>
  );
};

// Skeleton loader components
export const SkeletonCard = ({ className = '' }) => (
  <div className={`animate-pulse bg-white rounded-lg shadow-md p-6 ${className}`}>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

export const SkeletonText = ({ lines = 3, className = '' }) => (
  <div className={`animate-pulse space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div 
        key={i}
        className={`h-4 bg-gray-200 rounded ${
          i === lines - 1 ? 'w-2/3' : 'w-full'
        }`}
      />
    ))}
  </div>
);

export const SkeletonImage = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`}>
    <div className="flex items-center justify-center h-full">
      <svg 
        className="w-12 h-12 text-gray-300" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
);

export default LoadingSpinner; 