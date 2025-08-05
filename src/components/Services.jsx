import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Users, Heart, Briefcase, HandHeart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
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

  const services = [
    {
      icon: BookOpen,
      title: "Education Programs",
      description: "Comprehensive educational initiatives including tutoring, workshops, and skill development programs to enhance learning opportunities for all ages.",
      link: "/education",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Trophy,
      title: "Athletic Programs", 
      description: "Sports and fitness programs that promote physical health, teamwork, and leadership skills through various athletic activities and competitions.",
      link: "/athletics",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "One-on-one and group mentorship programs connecting experienced professionals with individuals seeking guidance and support.",
      link: "/mentorship",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Initiatives focused on addressing community needs through volunteer work, charitable activities, and social impact projects.",
      link: "/volunteer",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Professional development services including job placement assistance, resume building, and interview preparation.",
      link: "/education",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: HandHeart,
      title: "Support Services",
      description: "Comprehensive support services including counseling, resource referrals, and emergency assistance for community members in need.",
      link: "/volunteer",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white py-20 lg:py-32 overflow-hidden">
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
              Our Programs & Services
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-green-100"
              variants={fadeInUp}
            >
              Comprehensive programs designed to support and empower our community members through education, athletics, and mentorship.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link to="/education">
                <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3 text-lg">
                  Education Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/athletics">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3 text-lg">
                  Athletic Programs
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Lives Through Comprehensive Programs
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer a comprehensive range of services designed to support and empower our community members. Our programs are tailored to meet diverse needs and foster personal and professional growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Join our programs and be part of a community that's transforming lives every day. Whether you're looking for education, athletics, or mentorship, we have something for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved">
                <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3 text-lg">
                  Get Involved Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

