import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Play, Sparkles, Users, Award, Target, BookOpen, Trophy, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('stats');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sample images for dynamic showcase (using placeholder URLs)
  const dynamicImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop", alt: "Students in classroom", type: "education" },
    { id: 2, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", alt: "Basketball team", type: "athletics" },
    { id: 3, src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop", alt: "Mentorship session", type: "mentorship" },
    { id: 4, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop", alt: "Group study", type: "education" },
    { id: 5, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop", alt: "Soccer practice", type: "athletics" },
    { id: 6, src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop", alt: "Graduation ceremony", type: "success" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Premium Gradient Background - No Photo */}
      <div className="absolute inset-0">
        {/* Primary Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"></div>
        
        {/* Secondary Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-blue-900/30"></div>
        
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-orange-900/20"
          animate={{ 
            background: [
              "linear-gradient(135deg, rgba(139,69,19,0.1) 0%, rgba(219,39,119,0.05) 50%, rgba(249,115,22,0.1) 100%)",
              "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(59,130,246,0.05) 50%, rgba(139,69,19,0.1) 100%)",
              "linear-gradient(135deg, rgba(139,69,19,0.1) 0%, rgba(219,39,119,0.05) 50%, rgba(249,115,22,0.1) 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
                             radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
      </div>

      {/* Premium Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Gradient Orbs */}
        <motion.div 
          className="absolute -top-48 -left-48 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-teal-600/30 rounded-full filter blur-3xl"
          animate={!prefersReducedMotion ? { 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          } : {}}
          transition={!prefersReducedMotion ? { duration: 20, repeat: Infinity, ease: "easeInOut" } : {}}
        />
        
        <motion.div 
          className="absolute -bottom-48 -right-48 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-600/30 rounded-full filter blur-3xl"
          animate={!prefersReducedMotion ? { 
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 20, 0]
          } : {}}
          transition={!prefersReducedMotion ? { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 } : {}}
        />

        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full filter blur-3xl"
          animate={!prefersReducedMotion ? { 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          } : {}}
          transition={!prefersReducedMotion ? { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 } : {}}
        />
      </div>

      {/* Main Content - Split Layout */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Premium Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Premium Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span className="text-white/90 text-sm font-semibold tracking-wide">
                    Transforming Lives Since 2014
                  </span>
                </div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </motion.div>

              {/* Hero Headline */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Where Dreams
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Take Flight
                  </motion.span>
                </h1>
              </motion.div>
              
              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                Empowering New York's youth through innovative education, dynamic athletics, and transformative mentorship programs.
                <span className="block mt-2 text-yellow-300 font-semibold">
                  Building tomorrow's leaders today.
                </span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Link to="/impact" className="group">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <div className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group-hover:from-emerald-400 group-hover:to-teal-400">
                      <Target className="w-5 h-5" />
                      Explore Our Impact
                    </div>
                  </motion.div>
                </Link>
                
                <Link to="/get-involved" className="group">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <div className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3">
                      <ArrowRight className="w-5 h-5" />
                      Join Our Mission
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
                variants={itemVariants}
              >
                {[
                  { value: '500+', label: 'Lives Transformed', icon: Users },
                  { value: '15', label: 'Programs', icon: Target },
                  { value: '98%', label: 'Success Rate', icon: Award },
                  { value: '10', label: 'Years Strong', icon: Star }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-lg group-hover:from-emerald-400/30 group-hover:to-teal-400/30 transition-all duration-300">
                        <stat.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                    </div>
                    <div className="text-2xl font-black text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Dynamic Image Showcase */}
            <motion.div
              className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center order-first lg:order-last"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Main Image Grid */}
              <div className="relative w-full h-full">
                {dynamicImages.map((image, index) => {
                  const positions = [
                    { x: '10%', y: '10%', size: 'w-32 h-24 md:w-48 md:h-36', delay: 0 },
                    { x: '60%', y: '5%', size: 'w-28 h-20 md:w-40 md:h-32', delay: 0.1 },
                    { x: '35%', y: '35%', size: 'w-36 h-28 md:w-52 md:h-40', delay: 0.15 },
                    { x: '5%', y: '60%', size: 'w-32 h-24 md:w-44 md:h-36', delay: 0.2 },
                    { x: '65%', y: '55%', size: 'w-34 h-26 md:w-48 md:h-38', delay: 0.25 },
                    { x: '25%', y: '75%', size: 'w-28 h-20 md:w-40 md:h-32', delay: 0.3 }
                  ];
                  
                  const position = positions[index] || positions[0];
                  
                  return (
                    <motion.div
                      key={image.id}
                      className={`absolute ${position.size} rounded-2xl overflow-hidden shadow-2xl`}
                      style={{ left: position.x, top: position.y }}
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: position.delay }}
                      whileHover={{ 
                        scale: 1.05, 
                        rotate: Math.random() * 6 - 3,
                        zIndex: 50
                      }}
                    >
                      {/* Glass Morphism Frame */}
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl z-10"></div>
                      
                      {/* Image */}
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        animate={!prefersReducedMotion ? {
                          y: [0, Math.sin(index) * 10, 0],
                          x: [0, Math.cos(index) * 8, 0],
                          rotate: [0, Math.sin(index) * 2, 0]
                        } : {}}
                        transition={!prefersReducedMotion ? {
                          duration: 4 + index * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        } : {}}
                      />
                      
                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Type Indicator */}
                      <div className="absolute bottom-2 left-2 z-20">
                        <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-md">
                          <span className="text-white text-xs font-medium capitalize">
                            {image.type}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Floating Icons */}
                {[BookOpen, Trophy, Heart].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30"
                    style={{
                      left: `${20 + index * 25}%`,
                      top: `${15 + index * 20}%`
                    }}
                    animate={!prefersReducedMotion ? {
                      y: [0, -20, 0],
                      rotate: [0, 180, 360],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={!prefersReducedMotion ? {
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    } : {}}
                    whileHover={!prefersReducedMotion ? { scale: 1.2 } : {}}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                ))}
              </div>

              {/* Ambient Particles */}
              {!prefersReducedMotion && [...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -50, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: Math.random() * 4 + 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 0.5
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group z-20"
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm font-medium tracking-wide">Discover More</span>
          <motion.div
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="h-6 w-6 text-white group-hover:text-yellow-300 transition-colors duration-300" />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;

