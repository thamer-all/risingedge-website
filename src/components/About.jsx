import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              About Rising Edge Community
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-blue-100"
              variants={fadeInUp}
            >
              Empowering underserved youth through education, athletics, and mentorship to create lasting positive change in New York City communities.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link to="/mission">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg">
                  Our Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/team">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 text-lg">
                  Meet Our Team
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Rising Edge Community is dedicated to empowering individuals and strengthening communities through various programs and initiatives. Our mission is to create a positive and lasting impact on the lives of those we serve.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  Foster growth, provide opportunities, and build a supportive network for all community members through comprehensive programs.
                </p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-teal-50 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Team</h3>
                <p className="text-gray-700">
                  Passionate and dedicated individuals with diverse backgrounds working collaboratively to achieve our goals and serve our community.
                </p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Impact</h3>
                <p className="text-gray-700">
                  Growing from a small initiative into a significant force for good, continuously adapting to meet evolving community needs.
                </p>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Learn More?
              </h3>
              <p className="text-xl mb-6 text-blue-100">
                Explore our mission, meet our team, and discover our journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/mission">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3">
                    Our Mission & Values
                  </Button>
                </Link>
                <Link to="/history">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-3">
                    Our History
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

