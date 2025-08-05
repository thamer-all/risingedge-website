// Accessibility Utilities
// WCAG 2.1 AA Compliance for Rising Edge Community Website

// Focus management utilities
export const focusManagement = {
  // Create a focus trap for modals and dropdowns
  createFocusTrap: (element) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
    
    return {
      activate: () => firstElement?.focus(),
      deactivate: () => element.removeEventListener('keydown', handleTabKey)
    };
  },

  // Manage focus for route changes
  manageFocusOnRouteChange: () => {
    const skipLink = document.getElementById('skip-to-main');
    const mainContent = document.getElementById('main-content') || document.querySelector('main');
    
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  // Create skip navigation links
  createSkipLinks: () => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'sr-only focus:not-sr-only fixed top-0 left-0 z-50 bg-white p-4 shadow-lg';
    skipLinks.innerHTML = `
      <a href="#main-content" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
        Skip to main content
      </a>
    `;
    document.body.prepend(skipLinks);
  }
};

// Color contrast utilities
export const colorContrast = {
  // Calculate contrast ratio between two colors
  calculateContrast: (color1, color2) => {
    const getLuminance = (hex) => {
      const rgb = hex.replace('#', '').match(/.{2}/g);
      const [r, g, b] = rgb.map(component => {
        const normalized = parseInt(component, 16) / 255;
        return normalized <= 0.03928
          ? normalized / 12.92
          : Math.pow((normalized + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
  },

  // Check if contrast meets WCAG standards
  meetsWCAGStandards: (color1, color2, level = 'AA', size = 'normal') => {
    const contrast = colorContrast.calculateContrast(color1, color2);
    const requirements = {
      AA: { normal: 4.5, large: 3 },
      AAA: { normal: 7, large: 4.5 }
    };
    
    return contrast >= requirements[level][size];
  },

  // Get accessible color suggestions
  getAccessibleColors: (baseColor) => {
    const suggestions = [];
    const testColors = ['#ffffff', '#000000', '#1f2937', '#374151', '#4b5563', '#6b7280'];
    
    testColors.forEach(testColor => {
      const contrast = colorContrast.calculateContrast(baseColor, testColor);
      if (contrast >= 4.5) {
        suggestions.push({
          color: testColor,
          contrast: contrast.toFixed(2),
          level: contrast >= 7 ? 'AAA' : 'AA'
        });
      }
    });
    
    return suggestions.sort((a, b) => b.contrast - a.contrast);
  }
};

// ARIA utilities
export const ariaHelpers = {
  // Generate unique IDs for ARIA relationships
  generateId: (prefix = 'aria') => `${prefix}-${Math.random().toString(36).substr(2, 9)}`,

  // Create ARIA live regions
  createLiveRegion: (type = 'polite') => {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', type);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
    
    return {
      announce: (message) => {
        liveRegion.textContent = message;
        setTimeout(() => liveRegion.textContent = '', 1000);
      },
      remove: () => document.body.removeChild(liveRegion)
    };
  },

  // Set up proper ARIA relationships
  setupDescribedBy: (element, descriptionId, description) => {
    element.setAttribute('aria-describedby', descriptionId);
    
    const descElement = document.getElementById(descriptionId);
    if (!descElement) {
      const newDesc = document.createElement('div');
      newDesc.id = descriptionId;
      newDesc.className = 'sr-only';
      newDesc.textContent = description;
      element.parentNode.appendChild(newDesc);
    }
  },

  // Handle expandable content
  setupExpandable: (trigger, content) => {
    const contentId = ariaHelpers.generateId('expandable');
    
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', contentId);
    content.id = contentId;
    content.setAttribute('aria-hidden', 'true');
    
    return {
      expand: () => {
        trigger.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
      },
      collapse: () => {
        trigger.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
      }
    };
  }
};

// Keyboard navigation utilities
export const keyboardNavigation = {
  // Standard key codes and names
  keys: {
    ENTER: 'Enter',
    SPACE: ' ',
    ESCAPE: 'Escape',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    TAB: 'Tab',
    HOME: 'Home',
    END: 'End'
  },

  // Handle roving tabindex for component groups
  setupRovingTabindex: (container, items) => {
    let currentIndex = 0;
    
    const updateTabindex = () => {
      items.forEach((item, index) => {
        item.tabIndex = index === currentIndex ? 0 : -1;
      });
    };
    
    const handleKeyDown = (e) => {
      switch (e.key) {
        case keyboardNavigation.keys.ARROW_RIGHT:
        case keyboardNavigation.keys.ARROW_DOWN:
          e.preventDefault();
          currentIndex = (currentIndex + 1) % items.length;
          updateTabindex();
          items[currentIndex].focus();
          break;
          
        case keyboardNavigation.keys.ARROW_LEFT:
        case keyboardNavigation.keys.ARROW_UP:
          e.preventDefault();
          currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
          updateTabindex();
          items[currentIndex].focus();
          break;
          
        case keyboardNavigation.keys.HOME:
          e.preventDefault();
          currentIndex = 0;
          updateTabindex();
          items[currentIndex].focus();
          break;
          
        case keyboardNavigation.keys.END:
          e.preventDefault();
          currentIndex = items.length - 1;
          updateTabindex();
          items[currentIndex].focus();
          break;
      }
    };
    
    container.addEventListener('keydown', handleKeyDown);
    updateTabindex();
    
    return {
      destroy: () => container.removeEventListener('keydown', handleKeyDown)
    };
  },

  // Make elements clickable with keyboard
  makeKeyboardClickable: (element, callback) => {
    element.addEventListener('keydown', (e) => {
      if (e.key === keyboardNavigation.keys.ENTER || e.key === keyboardNavigation.keys.SPACE) {
        e.preventDefault();
        callback(e);
      }
    });
  }
};

// Screen reader utilities
export const screenReader = {
  // Hide content from screen readers
  hideFromScreenReader: (element) => {
    element.setAttribute('aria-hidden', 'true');
  },

  // Show content to screen readers only
  screenReaderOnly: (element) => {
    element.className = element.className + ' sr-only';
  },

  // Create descriptive text for complex elements
  addDescription: (element, description) => {
    const descId = ariaHelpers.generateId('desc');
    ariaHelpers.setupDescribedBy(element, descId, description);
  },

  // Handle dynamic content updates
  announceUpdate: (message, priority = 'polite') => {
    const liveRegion = ariaHelpers.createLiveRegion(priority);
    liveRegion.announce(message);
    setTimeout(() => liveRegion.remove(), 2000);
  }
};

// Form accessibility utilities
export const formAccessibility = {
  // Set up proper form labeling
  setupFormField: (input, labelText, options = {}) => {
    const { 
      required = false, 
      description = null, 
      errorId = null,
      helpText = null 
    } = options;
    
    const fieldId = input.id || ariaHelpers.generateId('field');
    input.id = fieldId;
    
    // Create or update label
    let label = document.querySelector(`label[for="${fieldId}"]`);
    if (!label) {
      label = document.createElement('label');
      label.setAttribute('for', fieldId);
      input.parentNode.insertBefore(label, input);
    }
    label.textContent = labelText;
    
    // Handle required fields
    if (required) {
      input.setAttribute('required', '');
      input.setAttribute('aria-required', 'true');
      label.innerHTML = `${labelText} <span class="text-red-500" aria-label="required">*</span>`;
    }
    
    // Add description if provided
    if (description || helpText) {
      const descId = ariaHelpers.generateId('desc');
      ariaHelpers.setupDescribedBy(input, descId, description || helpText);
    }
    
    // Set up error handling
    if (errorId) {
      input.setAttribute('aria-describedby', 
        `${input.getAttribute('aria-describedby') || ''} ${errorId}`.trim()
      );
    }
  },

  // Handle form validation errors
  handleValidationError: (input, errorMessage) => {
    const errorId = ariaHelpers.generateId('error');
    
    // Create error element
    const errorElement = document.createElement('div');
    errorElement.id = errorId;
    errorElement.className = 'text-red-600 text-sm mt-1';
    errorElement.setAttribute('role', 'alert');
    errorElement.textContent = errorMessage;
    
    // Insert after input
    input.parentNode.insertBefore(errorElement, input.nextSibling);
    
    // Update ARIA attributes
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', 
      `${input.getAttribute('aria-describedby') || ''} ${errorId}`.trim()
    );
    
    // Focus the field
    input.focus();
    
    return {
      clear: () => {
        errorElement.remove();
        input.removeAttribute('aria-invalid');
        const describedBy = input.getAttribute('aria-describedby')?.replace(errorId, '').trim();
        if (describedBy) {
          input.setAttribute('aria-describedby', describedBy);
        } else {
          input.removeAttribute('aria-describedby');
        }
      }
    };
  }
};

// Accessibility testing utilities (development only)
export const accessibilityTesting = {
  // Check for common accessibility issues
  auditPage: () => {
    if (process.env.NODE_ENV !== 'development') return;
    
    const issues = [];
    
    // Check for images without alt text
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images without alt text`);
    }
    
    // Check for buttons without accessible names
    const buttonsWithoutNames = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    const problematicButtons = Array.from(buttonsWithoutNames).filter(btn => !btn.textContent.trim());
    if (problematicButtons.length > 0) {
      issues.push(`${problematicButtons.length} buttons without accessible names`);
    }
    
    // Check for form inputs without labels
    const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    const problematicInputs = Array.from(inputsWithoutLabels).filter(input => {
      const id = input.id;
      return !id || !document.querySelector(`label[for="${id}"]`);
    });
    if (problematicInputs.length > 0) {
      issues.push(`${problematicInputs.length} form inputs without labels`);
    }
    
    // Check for low contrast
    // This would need more sophisticated color analysis
    
    if (issues.length > 0) {
      console.warn('Accessibility issues found:', issues);
    } else {
      console.log('No obvious accessibility issues found');
    }
    
    return issues;
  },

  // Test keyboard navigation
  testKeyboardNavigation: () => {
    if (process.env.NODE_ENV !== 'development') return;
    
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    console.log(`Found ${focusableElements.length} focusable elements`);
    
    // Check for tab order issues
    const elementsWithTabindex = document.querySelectorAll('[tabindex]:not([tabindex="0"]):not([tabindex="-1"])');
    if (elementsWithTabindex.length > 0) {
      console.warn('Elements with custom tabindex found - check tab order');
    }
  }
};

// Initialize accessibility features
export const initializeAccessibility = () => {
  // Create skip links
  focusManagement.createSkipLinks();
  
  // Set up focus management for route changes
  if (typeof window !== 'undefined') {
    window.addEventListener('popstate', focusManagement.manageFocusOnRouteChange);
  }
  
  // Add main content ID if missing
  const main = document.querySelector('main');
  if (main && !main.id) {
    main.id = 'main-content';
  }
  
  // Run accessibility audit in development
  if (process.env.NODE_ENV === 'development') {
    setTimeout(() => {
      accessibilityTesting.auditPage();
      accessibilityTesting.testKeyboardNavigation();
    }, 1000);
  }
};

export default {
  focusManagement,
  colorContrast,
  ariaHelpers,
  keyboardNavigation,
  screenReader,
  formAccessibility,
  accessibilityTesting,
  initializeAccessibility
};