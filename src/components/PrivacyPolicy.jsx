import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import SEO from './SEO';

const PrivacyPolicy = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <SEO 
        title="Privacy Policy - Rising Edge Community"
        description="Learn how Rising Edge Community protects your privacy and handles your personal information. Our comprehensive privacy policy ensures your data security."
        keywords="privacy policy, data protection, personal information, security"
        url="https://risingedge.org/privacy"
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
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Your privacy and data security are our top priorities. Learn how we protect and handle your information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    Rising Edge Community collects information to provide better services to our community members:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Personal information you provide when registering for programs</li>
                    <li>Contact information for communication and program updates</li>
                    <li>Program participation and progress data</li>
                    <li>Donation and payment information (processed securely through Stripe)</li>
                    <li>Website usage data through analytics</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Lock className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">How We Protect Your Information</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>SSL encryption for all data transmission</li>
                    <li>Secure servers with regular security updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Regular security audits and monitoring</li>
                    <li>Compliance with applicable privacy laws and regulations</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    Your information is used exclusively for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Program registration and participation management</li>
                    <li>Communication about programs, events, and opportunities</li>
                    <li>Processing donations and payments</li>
                    <li>Improving our services and programs</li>
                    <li>Compliance with legal and regulatory requirements</li>
                    <li>Newsletter and updates (with your consent)</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or how we handle your information, please contact us:
                </p>
                <div className="text-gray-700">
                  <p><strong>Email:</strong> privacy@risingedge.org</p>
                  <p><strong>Phone:</strong> (212) 555-0100</p>
                  <p><strong>Address:</strong> 123 Community Way, New York, NY 10001</p>
                </div>
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

export default PrivacyPolicy; 