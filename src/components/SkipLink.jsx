import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 z-50 bg-primary text-white px-4 py-2 rounded-b-md focus:outline-none focus:ring-2 focus:ring-white transform -translate-y-full focus:translate-y-0 transition-transform"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink; 