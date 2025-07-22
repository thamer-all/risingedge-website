import React from 'react';
import { motion } from 'framer-motion';
import { Accessibility as AccessibilityIcon, Eye, Ear, Mouse, Keyboard } from 'lucide-react';
import SEO from './SEO';

const Accessibility = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <SEO 
        title="Accessibility Statement - Rising Edge Community"
        description="Learn about our commitment to digital accessibility and how we ensure our website and programs are accessible to all users."
        keywords="accessibility, digital inclusion, WCAG, screen readers, disability support"
        url="https://risingedge.org/accessibility"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <AccessibilityIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Accessibility Statement
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                We are committed to ensuring digital accessibility for all users, regardless of ability or disability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h2>
                <p className="text-gray-700 mb-4">
                  Rising Edge Community is committed to ensuring that our website and digital services are accessible to all users. We continuously work to improve the accessibility of our platform to provide equal access and opportunity to people with diverse abilities.
                </p>
                <p className="text-gray-700">
                  We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and follow best practices for digital accessibility.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Visual Accessibility</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">Features for users with visual impairments:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>High contrast color schemes that meet WCAG standards</li>
                    <li>Alternative text for all images and graphics</li>
                    <li>Scalable fonts and responsive design</li>
                    <li>Screen reader compatibility</li>
                    <li>Clear navigation and consistent layout</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Keyboard className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Keyboard Navigation</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">Our website supports full keyboard navigation:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Tab navigation through all interactive elements</li>
                    <li>Enter and space key activation for buttons and links</li>
                    <li>Arrow key navigation for menus and carousels</li>
                    <li>Escape key to close modals and menus</li>
                    <li>Skip links to main content areas</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Mouse className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Motor Accessibility</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">Features for users with motor impairments:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Large clickable areas for buttons and links</li>
                    <li>No time-sensitive actions required</li>
                    <li>Drag and drop alternatives</li>
                    <li>Error prevention and clear error messages</li>
                    <li>Consistent and predictable interface</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Feedback and Support</h2>
                <p className="text-gray-700 mb-4">
                  We welcome your feedback on the accessibility of our website and programs. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
                </p>
                <div className="text-gray-700 mb-6">
                  <p><strong>Email:</strong> accessibility@risingedge.org</p>
                  <p><strong>Phone:</strong> (212) 555-0100</p>
                  <p><strong>Address:</strong> 123 Community Way, New York, NY 10001</p>
                </div>
                <p className="text-gray-700">
                  We aim to respond to accessibility feedback within 5 business days and will work with you to provide the information or service you need in an accessible format.
                </p>
                <p className="text-sm text-gray-500 mt-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Accessibility; 