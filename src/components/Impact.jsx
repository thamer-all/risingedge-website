import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const Impact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const impactAreas = [
    {
      icon: Users,
      title: "Lives Transformed",
      stat: "1,000+",
      description: "Students have participated in our comprehensive programs since inception",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Academic Success",
      stat: "95%",
      description: "Of students show improved grades and academic performance",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Heart,
      title: "Community Impact",
      stat: "$2.5M",
      description: "In scholarships and support provided to students and families",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Impact - Rising Edge Community"
        description="Discover the measurable impact of Rising Edge Community programs. View our reports, success stories, and calculate how your support transforms lives."
        keywords="impact, success stories, reports, community transformation, student outcomes"
        url="https://risingedge.org/impact"
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
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Impact
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Measuring the difference we make in young lives and communities across New York City.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                {...fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Real Impact, Real Results
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our programs create measurable change in the lives of students, families, and communities.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {impactAreas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">{area.stat}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                      <p className="text-gray-600">{area.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Action Cards */}
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
                  {...fadeInUp}
                >
                  <BarChart3 className="h-12 w-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Impact Reports</h3>
                  <p className="mb-6 text-blue-100">
                    Download our comprehensive impact reports with detailed metrics and outcomes.
                  </p>
                  <Link to="/reports">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold group">
                      View Reports
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl p-8 text-white"
                  {...fadeInUp}
                >
                  <Users className="h-12 w-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
                  <p className="mb-6 text-green-100">
                    Read inspiring stories from students, families, and alumni whose lives we've touched.
                  </p>
                  <Link to="/stories">
                    <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold group">
                      Read Stories
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 text-white"
                  {...fadeInUp}
                >
                  <Heart className="h-12 w-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Impact Calculator</h3>
                  <p className="mb-6 text-orange-100">
                    See exactly how your donation creates measurable impact in our community.
                  </p>
                  <Link to="/calculator">
                    <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold group">
                      Calculate Impact
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Impact; 