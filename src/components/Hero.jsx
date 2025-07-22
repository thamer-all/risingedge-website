import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Heart, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { containerVariants, itemVariants, buttonVariants } from '../constants/animations';
import { buttonStyles } from '../constants/colors';

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      {/* Dynamic Gradient Background Overlay with Animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-cyan-600/20"
        animate={prefersReducedMotion ? {} : {
          background: [
            "linear-gradient(to right, rgba(30, 58, 138, 0.2), rgba(8, 145, 178, 0.2))",
            "linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(14, 165, 233, 0.3))",
            "linear-gradient(to right, rgba(30, 58, 138, 0.2), rgba(8, 145, 178, 0.2))"
          ]
        }}
        transition={prefersReducedMotion ? {} : {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated blue orbs */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-32 right-16 w-56 h-56 bg-cyan-400/15 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -25, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-24 w-32 h-32 bg-blue-300/25 rounded-full blur-xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        {/* Additional floating blue elements */}
        <motion.div
          className="absolute top-60 left-1/3 w-20 h-20 bg-sky-400/30 rounded-full blur-lg"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-48 right-1/3 w-28 h-28 bg-indigo-400/25 rounded-full blur-xl"
          animate={{
            y: [0, 35, 0],
            x: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Icon Animation */}
          <motion.div
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Heart className="h-10 w-10 text-white" />
              <motion.div
                className="absolute inset-0 border-2 border-white/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

                      <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              <motion.span
                className="text-white drop-shadow-lg"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(147, 197, 253, 0.8)",
                    "0 0 20px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Empowering
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-cyan-300 via-blue-300 to-sky-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  delay: 1, 
                  duration: 0.8,
                  backgroundPosition: { duration: 6, repeat: Infinity }
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Tomorrow's Leaders
              </motion.span>
            </motion.h1>
          
                      <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md"
              variants={itemVariants}
              animate={{
                textShadow: [
                  "0 2px 10px rgba(0, 0, 0, 0.3)",
                  "0 2px 20px rgba(59, 130, 246, 0.4)",
                  "0 2px 10px rgba(0, 0, 0, 0.3)"
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Transform young lives through comprehensive education, athletics, and mentorship programs. 
              Join Rising Edge Community in building stronger futures for underserved youth across New York City.
            </motion.p>

          {/* Stats Preview */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            variants={itemVariants}
          >
                                    <motion.div
                          className="bg-blue-500/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-400/50"
                          whileHover={{ 
                            scale: 1.05, 
                            y: -5,
                            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                          }}
                          transition={{ duration: 0.3 }}
                          animate={{
                            boxShadow: [
                              "0 10px 20px rgba(59, 130, 246, 0.2)",
                              "0 15px 30px rgba(147, 197, 253, 0.4)",
                              "0 10px 20px rgba(59, 130, 246, 0.2)"
                            ]
                          }}
                        >
                          <div className="flex items-center justify-center mb-2">
                            <Users className="h-6 w-6 text-cyan-300 mr-2" />
                            <motion.span 
                              className="text-3xl font-bold text-white"
                              animate={{
                                textShadow: [
                                  "0 0 10px rgba(34, 211, 238, 0.6)",
                                  "0 0 20px rgba(34, 211, 238, 0.9)",
                                  "0 0 10px rgba(34, 211, 238, 0.6)"
                                ]
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              1,000+
                            </motion.span>
                          </div>
                          <p className="text-blue-100 text-sm font-medium">Students Served</p>
                        </motion.div>
                        
                        <motion.div
                          className="bg-blue-500/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-400/50"
                          whileHover={{ 
                            scale: 1.05, 
                            y: -5,
                            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                          }}
                          transition={{ duration: 0.3 }}
                          animate={{
                            boxShadow: [
                              "0 10px 20px rgba(59, 130, 246, 0.2)",
                              "0 15px 30px rgba(147, 197, 253, 0.4)",
                              "0 10px 20px rgba(59, 130, 246, 0.2)"
                            ]
                          }}
                        >
                          <div className="flex items-center justify-center mb-2">
                            <Star className="h-6 w-6 text-cyan-300 mr-2" />
                            <motion.span 
                              className="text-3xl font-bold text-white"
                              animate={{
                                textShadow: [
                                  "0 0 10px rgba(34, 211, 238, 0.6)",
                                  "0 0 20px rgba(34, 211, 238, 0.9)",
                                  "0 0 10px rgba(34, 211, 238, 0.6)"
                                ]
                              }}
                              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                            >
                              95%
                            </motion.span>
                          </div>
                          <p className="text-blue-100 text-sm font-medium">Success Rate</p>
                        </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={itemVariants}
          >
                                    <Link to="/donate">
                          <motion.div variants={buttonVariants} whileHover="hover">
                            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105 transition-all duration-300 text-white font-semibold px-10 py-4 text-lg shadow-xl group border border-blue-400/50">
                              <motion.span
                                animate={{
                                  textShadow: [
                                    "0 0 5px rgba(255, 255, 255, 0.8)",
                                    "0 0 15px rgba(255, 255, 255, 1)",
                                    "0 0 5px rgba(255, 255, 255, 0.8)"
                                  ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                Make a Difference
                              </motion.span>
                              <Heart className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                            </Button>
                          </motion.div>
                        </Link>
                        <Link to="/programs">
                          <motion.div variants={buttonVariants} whileHover="hover">
                            <Button 
                              variant="outline" 
                              className="px-10 py-4 text-lg backdrop-blur-sm bg-blue-500/20 border-2 border-blue-300/60 text-white hover:bg-blue-400/30 hover:border-blue-200 transition-all duration-300 group"
                            >
                              <motion.span
                                animate={{
                                  textShadow: [
                                    "0 0 5px rgba(147, 197, 253, 0.8)",
                                    "0 0 15px rgba(147, 197, 253, 1)",
                                    "0 0 5px rgba(147, 197, 253, 0.8)"
                                  ]
                                }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                              >
                                Explore Programs
                              </motion.span>
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </motion.div>
                        </Link>
          </motion.div>

                                {/* Enhanced Scroll Indicator */}
                      <motion.button
                        onClick={scrollToNext}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-100 hover:text-white transition-colors duration-300"
                        aria-label="Scroll to next section"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div
                          animate={{ y: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="flex flex-col items-center"
                        >
                          <motion.span 
                            className="text-sm mb-2 text-blue-200"
                            animate={{
                              textShadow: [
                                "0 0 10px rgba(147, 197, 253, 0.5)",
                                "0 0 20px rgba(147, 197, 253, 0.8)",
                                "0 0 10px rgba(147, 197, 253, 0.5)"
                              ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            Scroll to explore
                          </motion.span>
                          <motion.div
                            animate={{
                              boxShadow: [
                                "0 0 15px rgba(34, 211, 238, 0.5)",
                                "0 0 25px rgba(34, 211, 238, 0.8)",
                                "0 0 15px rgba(34, 211, 238, 0.5)"
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="rounded-full p-1"
                          >
                            <ChevronDown className="h-8 w-8" />
                          </motion.div>
                        </motion.div>
                      </motion.button>
        </motion.div>
      </div>

                            {/* Enhanced Floating Decorative Elements */}
                      <motion.div
                        className="absolute top-32 left-16 w-8 h-8 bg-cyan-400 rounded-full opacity-60 border-2 border-blue-300/50"
                        aria-hidden="true"
                        animate={{
                          y: [0, -25, 0],
                          opacity: [0.6, 1, 0.6],
                          scale: [1, 1.3, 1],
                          boxShadow: [
                            "0 0 10px rgba(34, 211, 238, 0.4)",
                            "0 0 25px rgba(34, 211, 238, 0.8)",
                            "0 0 10px rgba(34, 211, 238, 0.4)"
                          ]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.8, opacity: 1 }}
                      />
                      <motion.div
                        className="absolute top-56 right-24 w-6 h-6 bg-blue-400 rounded-full opacity-50 border border-cyan-300/60"
                        aria-hidden="true"
                        animate={{
                          y: [0, 20, 0],
                          x: [0, 15, 0],
                          opacity: [0.5, 0.9, 0.5],
                          boxShadow: [
                            "0 0 8px rgba(59, 130, 246, 0.3)",
                            "0 0 20px rgba(59, 130, 246, 0.7)",
                            "0 0 8px rgba(59, 130, 246, 0.3)"
                          ]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                        whileHover={{ scale: 1.6, opacity: 1 }}
                      />
                      <motion.div
                        className="absolute bottom-48 left-32 w-7 h-7 bg-sky-300 rounded-full opacity-40 border border-blue-400/40"
                        aria-hidden="true"
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0.4, 0.8, 0.4],
                          rotate: [0, 180, 360],
                          boxShadow: [
                            "0 0 6px rgba(14, 165, 233, 0.3)",
                            "0 0 18px rgba(14, 165, 233, 0.7)",
                            "0 0 6px rgba(14, 165, 233, 0.3)"
                          ]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                        whileHover={{ scale: 1.7, opacity: 1 }}
                      />
                      <motion.div
                        className="absolute top-72 right-1/4 w-4 h-4 bg-indigo-300 rounded-full opacity-30"
                        aria-hidden="true"
                        animate={{
                          y: [0, -15, 0],
                          x: [0, -10, 0],
                          opacity: [0.3, 0.7, 0.3],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 3.5
                        }}
                        whileHover={{ scale: 1.5, opacity: 1 }}
                      />
    </section>
  );
};

export default Hero;

