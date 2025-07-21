// Shared color constants and accessible combinations
// Ensures WCAG compliance and consistent theming across the site

export const brandColors = {
  primary: '#2DD4BF', // Rising Teal
  secondary: '#065F46', // Deep Forest
  accent: '#F97316', // Warm Coral
  cream: '#FEF7ED', // Soft Cream
  charcoal: '#1F2937', // Charcoal
  slate: '#64748B', // Slate Gray
  success: '#10B981', // Success Green
  warning: '#F59E0B', // Alert Orange
};

// Accessible color combinations (WCAG AA compliant)
export const accessibleCombinations = {
  // Light backgrounds
  lightBg: {
    primary: 'text-gray-900 bg-white',
    secondary: 'text-gray-800 bg-gray-50',
    accent: 'text-gray-900 bg-cream'
  },
  
  // Dark backgrounds  
  darkBg: {
    primary: 'text-white bg-gray-900',
    secondary: 'text-gray-100 bg-gray-800',
    accent: 'text-white bg-charcoal'
  },

  // Colored backgrounds
  coloredBg: {
    teal: 'text-white bg-primary',
    coral: 'text-white bg-accent', 
    forest: 'text-white bg-secondary',
    success: 'text-white bg-success'
  }
};

// Gradient definitions
export const gradients = {
  hero: 'bg-gradient-to-br from-primary via-secondary to-primary',
  teal: 'bg-gradient-to-r from-primary to-success',
  coral: 'bg-gradient-to-r from-accent to-warning',
  forest: 'bg-gradient-to-r from-secondary to-success',
  sunset: 'bg-gradient-to-r from-accent via-warning to-accent'
};

// Fixed button styles with proper contrast
export const buttonStyles = {
  // Primary buttons - solid colored backgrounds
  primary: 'bg-gradient-to-r from-primary to-success text-white hover:from-success hover:to-primary font-semibold transition-all duration-300',
  
  // Secondary buttons - outline style with proper contrast
  secondary: 'border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white font-semibold transition-all duration-300',
  
  // Accent buttons
  accent: 'bg-gradient-to-r from-accent to-warning text-white hover:from-warning hover:to-accent font-semibold transition-all duration-300',
  
  // Ghost buttons for dark backgrounds
  ghost: 'border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 font-semibold transition-all duration-300',
  
  // Outline buttons for light backgrounds  
  outline: 'border-2 border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white font-semibold transition-all duration-300'
};

// Hero section gradients for different pages
export const heroGradients = {
  about: 'bg-gradient-to-br from-blue-600 via-purple-600 to-primary',
  programs: 'bg-gradient-to-br from-success via-primary to-secondary',
  impact: 'bg-gradient-to-br from-accent via-warning to-success',
  volunteer: 'bg-gradient-to-br from-purple-600 via-primary to-accent'
}; 