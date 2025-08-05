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
          {/* Ultra-Premium Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="flex items-center group">
              <div className="relative mr-5">
                {/* Main Premium Logo Container */}
                <motion.div 
                  className="relative w-16 h-16 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-700 border border-gray-700/50"
                  whileHover={{ 
                    boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(16, 185, 129, 0.3)",
                    rotate: [0, 1, -1, 0],
                    scale: 1.05
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Sophisticated Background Pattern */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    {/* Primary gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-orange-500/20"></div>
                    
                    {/* Geometric accent lines */}
                    <div className="absolute top-3 left-3 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent opacity-60"></div>
                    <div className="absolute bottom-3 right-3 w-6 h-0.5 bg-gradient-to-l from-orange-400 to-transparent opacity-60"></div>
                    
                    {/* Subtle corner highlights */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                    <div className="absolute -top-1 -left-1 w-4 h-4 bg-emerald-400/20 rounded-full blur-sm"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-400/20 rounded-full blur-sm"></div>
                  </div>
                  
                  {/* Premium Logo Mark */}
                  <div className="relative z-10 flex items-center justify-center">
                    {/* Main "R" with premium styling */}
                    <motion.span 
                      className="text-white font-black text-3xl tracking-tight drop-shadow-lg"
                      style={{ 
                        fontFamily: 'Inter, system-ui, sans-serif', 
                        fontWeight: 900,
                        textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      R
                    </motion.span>
                    
                    {/* Animated "E" with premium accent */}
                    <motion.span 
                      className="text-emerald-400 font-black text-2xl ml-1 drop-shadow-lg"
                      animate={{ 
                        opacity: [0.8, 1, 0.8],
                        textShadow: [
                          '0 0 8px rgba(16, 185, 129, 0.5)',
                          '0 0 16px rgba(16, 185, 129, 0.8)',
                          '0 0 8px rgba(16, 185, 129, 0.5)'
                        ]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      style={{ 
                        fontFamily: 'Inter, system-ui, sans-serif', 
                        fontWeight: 900
                      }}
                    >
                      E
                    </motion.span>
                  </div>
                  
                  {/* Premium floating accent */}
                  <motion.div 
                    className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full shadow-lg"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(16, 185, 129, 0.7)',
                        '0 0 0 6px rgba(16, 185, 129, 0)',
                        '0 0 0 0 rgba(16, 185, 129, 0)'
                      ]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* Premium Success Badge */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(251, 146, 60, 0.7)", 
                      "0 0 0 12px rgba(251, 146, 60, 0)", 
                      "0 0 0 0 rgba(251, 146, 60, 0)"
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2.5, repeat: Infinity },
                    scale: { type: "spring", stiffness: 300 },
                    rotate: { type: "spring", stiffness: 300 }
                  }}
                >
                  <Heart className="w-3 h-3 text-white fill-current drop-shadow-sm" />
                </motion.div>
                
                {/* Ultra-Premium Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/30 via-transparent to-orange-500/30 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 -z-10"></div>
              </div>
              
              {/* Premium Typography System */}
              <div className="hidden sm:block">
                <motion.div 
                  className="relative"
                  whileHover={{ x: 3, y: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Main Brand Name */}
                  <div className="text-3xl font-black bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:via-emerald-700 group-hover:to-orange-600 transition-all duration-700" 
                       style={{ 
                         fontFamily: 'Inter, system-ui, sans-serif', 
                         fontWeight: 900, 
                         letterSpacing: '-0.03em',
                         lineHeight: '1.1'
                       }}>
                    Rising Edge
                  </div>
                  
                  {/* Premium Subtitle */}
                  <div className="text-base font-bold text-emerald-600 group-hover:text-emerald-500 transition-colors duration-500 -mt-1.5"
                       style={{ 
                         fontFamily: 'Inter, system-ui, sans-serif', 
                         fontWeight: 700, 
                         letterSpacing: '0.08em',
                         textTransform: 'uppercase'
                       }}>
                    Community
                  </div>
                  
                  {/* Elegant Tagline */}
                  <div className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-500 mt-1 font-semibold tracking-wide opacity-90">
                    <span className="text-emerald-600">•</span> Empowering Tomorrow's Leaders <span className="text-orange-500">•</span>
                  </div>
                  
                  {/* Premium Underline Effect */}
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-emerald-500 to-orange-500 mt-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
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
