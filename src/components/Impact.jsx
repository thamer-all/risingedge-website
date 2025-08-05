import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, GraduationCap, Award, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Impact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const impactStats = [
    {
      icon: Users,
      value: '500+',
      label: 'Lives Transformed',
      description: 'Young people empowered through our programs',
      color: 'emerald'
    },
    {
      icon: GraduationCap,
      value: '95%',
      label: 'Graduation Rate',
      description: 'Of our students complete high school',
      color: 'blue'
    },
    {
      icon: Award,
      value: '150+',
      label: 'Scholarships Awarded',
      description: 'Supporting higher education dreams',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Career Success',
      description: 'Alumni in stable employment or education',
      color: 'orange'
    }
  ];

  const impactAreas = [
    {
      title: 'Educational Excellence',
      description: 'Comprehensive academic support and mentorship programs that help students achieve their full potential.',
      metrics: '500+ students supported annually',
      link: '/education'
    },
    {
      title: 'Athletic Development',
      description: 'Sports programs that build character, teamwork, and leadership skills while promoting physical health.',
      metrics: '12 sports programs, 200+ athletes',
      link: '/athletics'
    },
    {
      title: 'Community Leadership',
      description: 'Leadership development programs that prepare young people to become positive forces in their communities.',
      metrics: '50+ community leaders trained',
      link: '/mentorship'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'from-emerald-500 to-emerald-600 shadow-emerald-200',
      blue: 'from-blue-500 to-blue-600 shadow-blue-200',
      purple: 'from-purple-500 to-purple-600 shadow-purple-200',
      orange: 'from-orange-500 to-orange-600 shadow-orange-200'
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              Our <span className="text-gradient bg-gradient-to-r from-emerald-600 to-blue-600">Impact</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              variants={fadeInUp}
            >
              Every number tells a story. Every story represents a life changed. 
              See how Rising Edge Community is transforming lives and building stronger communities.
            </motion.p>
          </div>

          {/* Impact Statistics */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={staggerContainer}
          >
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${getColorClasses(stat.color)} shadow-lg mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Areas */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where We Make a Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses the whole person, creating lasting change through education, athletics, and leadership development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                <div className="text-sm font-medium text-emerald-600 mb-6 bg-emerald-50 px-4 py-2 rounded-lg">
                  {area.metrics}
                </div>
                <Link to={area.link}>
                  <Button variant="outline" className="w-full group hover:bg-emerald-50 hover:border-emerald-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-blue-600"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of Our Impact Story
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in creating lasting change. Whether through volunteering, donating, or partnering with us, 
            you can help write the next chapter of transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-4">
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 font-semibold px-8 py-4">
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-2xl font-bold text-gray-900 text-center mb-12"
            variants={fadeInUp}
          >
            Explore Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp}>
              <Link to="/reports" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-emerald-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Impact Reports</h3>
                </div>
                <p className="text-gray-600">Detailed annual reports showing our measurable impact on the community.</p>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link to="/stories" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Success Stories</h3>
                </div>
                <p className="text-gray-600">Real stories from young people whose lives have been transformed.</p>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link to="/calculator" className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Impact Calculator</h3>
                </div>
                <p className="text-gray-600">See exactly how your donation creates measurable change in our community.</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Impact;