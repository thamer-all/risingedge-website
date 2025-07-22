import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Shield, AlertCircle } from 'lucide-react';
import SEO from './SEO';

const TermsOfService = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <SEO 
        title="Terms of Service - Rising Edge Community"
        description="Read our terms of service and user agreement for Rising Edge Community programs and services."
        keywords="terms of service, user agreement, legal terms, conditions"
        url="https://risingedge.org/terms"
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
                  <FileText className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Please read these terms carefully before using our services and participating in our programs.
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
                  <Users className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Program Participation</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    By participating in Rising Edge Community programs, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Respect all participants, staff, and volunteers</li>
                    <li>Follow program guidelines and safety protocols</li>
                    <li>Attend programs regularly and punctually</li>
                    <li>Communicate any concerns or issues promptly</li>
                    <li>Support the positive learning environment</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Code of Conduct</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    All community members must maintain appropriate behavior:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>No discrimination, harassment, or bullying</li>
                    <li>Respectful communication in all interactions</li>
                    <li>Proper use of facilities and equipment</li>
                    <li>Compliance with local, state, and federal laws</li>
                    <li>Commitment to the organization's mission and values</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <AlertCircle className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Liability and Safety</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    Your safety is our priority. Please understand:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Participation in activities carries inherent risks</li>
                    <li>Medical clearance may be required for certain activities</li>
                    <li>Emergency contact information must be current</li>
                    <li>Insurance coverage responsibility</li>
                    <li>Reporting requirements for accidents or incidents</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  Questions about these terms? Contact us:
                </p>
                <div className="text-gray-700">
                  <p><strong>Email:</strong> legal@risingedge.org</p>
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

export default TermsOfService; 