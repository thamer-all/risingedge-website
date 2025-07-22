import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found - Rising Edge Community"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our programs and impact."
        keywords="404, page not found, error"
        url="https://risingedge.org/404"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 flex items-center justify-center">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated 404 */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <h1 className="text-9xl md:text-[12rem] font-bold text-white/20 leading-none">
                  404
                </h1>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <AlertCircle className="h-24 w-24 text-yellow-300" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Oops! Page Not Found
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto">
                The page you're looking for seems to have taken a different path. 
                Let's get you back on track to making a difference!
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg group">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 text-lg transition-all duration-300 group"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                Go Back
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="mt-12 pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-white/80 mb-4">Or explore these popular pages:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link to="/about" className="text-white hover:text-yellow-300 transition-colors underline">
                  About Us
                </Link>
                <Link to="/services" className="text-white hover:text-yellow-300 transition-colors underline">
                  Our Programs
                </Link>
                <Link to="/donate" className="text-white hover:text-yellow-300 transition-colors underline">
                  Donate
                </Link>
                <Link to="/contact" className="text-white hover:text-yellow-300 transition-colors underline">
                  Contact
                </Link>
                <Link to="/volunteer" className="text-white hover:text-yellow-300 transition-colors underline">
                  Volunteer
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-6 h-6 bg-yellow-300/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-8 h-8 bg-pink-300/30 rounded-full"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    </>
  );
};

export default NotFound; 