import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, TrendingUp, MapPin, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const History = () => {
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

  const timeline = [
    {
      year: "2010",
      title: "The Beginning",
      description: "Founded by a group of educators and community leaders in Brooklyn, starting with just 15 students in an after-school tutoring program.",
      icon: Users,
      stats: "15 Students"
    },
    {
      year: "2012",
      title: "First Athletic Program",
      description: "Launched our first soccer league with 3 teams, recognizing the power of sports to build character and community connections.",
      icon: Award,
      stats: "45 Athletes"
    },
    {
      year: "2014",
      title: "Mentorship Initiative",
      description: "Introduced our signature one-on-one mentorship program, pairing students with dedicated adult mentors from the community.",
      icon: Star,
      stats: "25 Mentors"
    },
    {
      year: "2016",
      title: "Expansion to Manhattan",
      description: "Opened our second location in Harlem, doubling our capacity and reaching new communities across NYC.",
      icon: MapPin,
      stats: "150 Students"
    },
    {
      year: "2018",
      title: "STEM Program Launch",
      description: "Introduced coding and robotics workshops in response to growing demand for technology education in underserved communities.",
      icon: TrendingUp,
      stats: "200+ Students"
    },
    {
      year: "2020",
      title: "Virtual Programming",
      description: "Pivoted to online learning during the pandemic, ensuring continuous support for students during challenging times.",
      icon: Calendar,
      stats: "500+ Students"
    },
    {
      year: "2023",
      title: "Today & Beyond",
      description: "Continuing to grow our impact across NYC with comprehensive programs that address the whole child's development needs.",
      icon: Clock,
      stats: "1000+ Students"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with consistent gradient background */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="flex justify-center mb-6"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Our History
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-blue-100"
              variants={fadeInUp}
            >
              From humble beginnings to a thriving community organization, our journey of growth and impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tracing the growth and evolution of Rising Edge Community from its founding to today.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
              
              {/* Timeline Events */}
              <div className="space-y-16">
                {timeline.map((event, index) => (
                  <motion.div
                    key={event.year}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Year Marker */}
                      <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
                        <div className="bg-primary text-white text-2xl font-bold py-2 px-6 rounded-full shadow-lg">
                          {event.year}
                        </div>
                      </div>
                      
                      {/* Center Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow hidden md:flex items-center justify-center">
                        <event.icon className="h-4 w-4 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8">
                        <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 md:hidden">
                              <event.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          <div className="text-primary font-semibold">{event.stats}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link to="/get-involved">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3">
                  Be Part of Our Future
                  <Users className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default History;

