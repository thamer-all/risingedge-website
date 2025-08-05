import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { animationPresets } from '@/design-system';
import PremiumButton, { GradientButton } from '@/components/ui/premium-button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navItems = [
    {
      name: 'About',
      href: '/about',
      dropdown: ['Mission', 'Team', 'History']
    },
    {
      name: 'Programs',
      href: '/services',
      dropdown: ['Education', 'Athletics', 'Mentorship']
    },
    {
      name: 'Impact',
      href: '/impact',
      dropdown: ['Reports', 'Stories', 'Calculator']
    },
    {
      name: 'Get Involved',
      href: '/get-involved',
      dropdown: ['Volunteer', 'Partner', 'Events']
    }
  ];

  // Check if current path matches nav item
  const isActivePath = (href, dropdown = null) => {
    if (dropdown) {
      return dropdown.some(item => 
        location.pathname === `/${item.toLowerCase().replace(/ /g, '-')}`
      );
    }
    return location.pathname === href;
  };

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-premium shadow-xl h-16'
          : 'bg-white/90 backdrop-blur-sm h-20',
        'border-b border-gray-100/50'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Premium Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="flex items-center group">
              <div className="relative mr-4">
                {/* Main Logo Container */}
                <motion.div 
                  className="relative w-14 h-14 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.4)",
                    rotate: 1
                  }}
                >
                  {/* Geometric Pattern Background */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-white/10 rounded-full blur-sm"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white/10 rounded-full blur-sm"></div>
                  </div>
                  
                  {/* Main Logo Icon */}
                  <div className="relative z-10 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl tracking-tight" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}>
                      R
                    </span>
                    <motion.span 
                      className="text-yellow-300 font-bold text-xl ml-0.5"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}
                    >
                      E
                    </motion.span>
                  </div>
                </motion.div>
                
                {/* Premium Heart Badge */}
                <motion.div 
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(251, 146, 60, 0.7)", "0 0 0 10px rgba(251, 146, 60, 0)", "0 0 0 0 rgba(251, 146, 60, 0)"]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity },
                    scale: { type: "spring", stiffness: 300 },
                    rotate: { type: "spring", stiffness: 300 }
                  }}
                >
                  <Heart className="w-2.5 h-2.5 text-white fill-current" />
                </motion.div>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              </div>
              
              {/* Enhanced Typography */}
              <div className="hidden sm:block">
                <motion.div 
                  className="relative"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:via-emerald-500 group-hover:to-emerald-400 transition-all duration-500" 
                       style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, letterSpacing: '-0.02em' }}>
                    Rising Edge
                  </div>
                  <div className="text-lg font-semibold text-emerald-600 group-hover:text-emerald-500 transition-colors duration-300 -mt-1"
                       style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '0.05em' }}>
                    COMMUNITY
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300 mt-0.5 font-medium tracking-wide">
                    Empowering Youth • Building Futures
                  </div>
                </motion.div>
              </div>
            </Link>
          </motion.div>

          {/* Premium Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 relative',
                    isActivePath(item.href, item.dropdown)
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                  
                  {/* Active indicator */}
                  {isActivePath(item.href, item.dropdown) && (
                    <motion.span
                      className="absolute bottom-0 left-1/2 w-6 h-0.5 bg-emerald-600 rounded-full"
                      layoutId="activeTab"
                      style={{ x: '-50%' }}
                    />
                  )}
                </Link>

                {/* Enhanced Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-premium rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-3">
                      {item.dropdown.map((subItem, subIndex) => (
                        <motion.div
                          key={subItem}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: subIndex * 0.05 }}
                        >
                          <Link
                            to={`/${subItem.toLowerCase().replace(/ /g, '-')}`}
                            className={cn(
                              'block px-4 py-3 text-sm font-medium transition-all duration-200 relative',
                              location.pathname === `/${subItem.toLowerCase().replace(/ /g, '-')}`
                                ? 'text-emerald-600 bg-emerald-50 border-r-2 border-emerald-600'
                                : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50 hover:translate-x-1'
                            )}
                          >
                            {subItem}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Premium CTA Button */}
          <motion.div 
            className="hidden lg:flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link to="/donate">
              <GradientButton
                gradient="coral"
                size="md"
                className="px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                icon={<Heart className="h-4 w-4" />}
              >
                Donate Now
              </GradientButton>
            </Link>
          </motion.div>

          {/* Premium Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-premium border-t border-gray-100 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.div 
              className="px-4 py-6 space-y-2 max-h-screen overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-xl font-medium transition-all duration-300',
                      isActivePath(item.href, item.dropdown)
                        ? 'text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50 hover:translate-x-1'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <motion.div 
                      className="ml-6 mt-2 space-y-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (index * 0.1) + 0.2 }}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <motion.div
                          key={subItem}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (subIndex * 0.05) + 0.3 }}
                        >
                          <Link
                            to={`/${subItem.toLowerCase().replace(/ /g, '-')}`}
                            className={cn(
                              'block px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200',
                              location.pathname === `/${subItem.toLowerCase().replace(/ /g, '-')}`
                                ? 'text-emerald-600 bg-emerald-50'
                                : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
              
              <motion.div 
                className="pt-6 border-t border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                  <GradientButton
                    gradient="coral"
                    fullWidth
                    className="font-semibold shadow-lg"
                    icon={<Heart className="h-4 w-4" />}
                  >
                    Donate Now
                  </GradientButton>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
