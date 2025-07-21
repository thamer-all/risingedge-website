import React from 'react';
import { motion } from 'framer-motion';
import { Building, Handshake, Target, Users, DollarSign, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Partner = () => {
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

  const partnershipTypes = [
    {
      icon: Building,
      title: "Corporate Sponsorship",
      description: "Partner with us as a corporate sponsor to support our programs while gaining valuable community visibility.",
      benefits: ["Brand visibility at events", "Employee volunteer opportunities", "Tax-deductible contributions", "Corporate social responsibility impact"],
      commitment: "Annual partnership",
      investment: "$5,000 - $50,000+",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Handshake,
      title: "Program Partnership",
      description: "Collaborate directly with our programs by providing expertise, resources, or specialized services.",
      benefits: ["Direct program impact", "Skills-based volunteering", "Professional development", "Community engagement"],
      commitment: "Project-based",
      investment: "In-kind services",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Strategic Alliance",
      description: "Form long-term strategic partnerships that align with your organization's mission and values.",
      benefits: ["Joint program development", "Shared resources", "Collaborative impact", "Mutual brand enhancement"],
      commitment: "Multi-year agreement",
      investment: "Negotiable",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Community Partnership",
      description: "Join with other community organizations to create a network of support for our shared mission.",
      benefits: ["Resource sharing", "Cross-promotion", "Expanded reach", "Collective impact"],
      commitment: "Ongoing collaboration",
      investment: "Mutual support",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const currentPartners = [
    {
      name: "Goldman Sachs",
      type: "Corporate Sponsor",
      contribution: "Financial literacy programs and mentorship",
      since: "2018"
    },
    {
      name: "NYC Department of Education",
      type: "Strategic Partner",
      contribution: "Educational resources and teacher training",
      since: "2015"
    },
    {
      name: "Mount Sinai Health System",
      type: "Program Partner",
      contribution: "Mental health and wellness programs",
      since: "2020"
    },
    {
      name: "Brooklyn Public Library",
      type: "Community Partner",
      contribution: "Reading programs and study spaces",
      since: "2016"
    },
    {
      name: "Nike Community Impact",
      type: "Corporate Sponsor",
      contribution: "Athletic equipment and coaching support",
      since: "2019"
    },
    {
      name: "Columbia University",
      type: "Strategic Partner",
      contribution: "Student mentors and research collaboration",
      since: "2017"
    }
  ];

  const partnershipBenefits = [
    {
      icon: Target,
      title: "Measurable Impact",
      description: "See direct results from your partnership through detailed impact reports and success stories."
    },
    {
      icon: Users,
      title: "Employee Engagement",
      description: "Provide meaningful volunteer opportunities that boost employee satisfaction and team building."
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Gain recognition as a community leader committed to youth development and social responsibility."
    },
    {
      icon: DollarSign,
      title: "Tax Benefits",
      description: "Receive tax deductions for charitable contributions while making a positive community impact."
    }
  ];

  const partnershipLevels = [
    {
      level: "Champion",
      investment: "$50,000+",
      benefits: ["Title sponsorship opportunities", "Board representation", "Custom program development", "Premium recognition"],
      color: "from-yellow-400 to-yellow-600"
    },
    {
      level: "Advocate",
      investment: "$25,000 - $49,999",
      benefits: ["Event sponsorship", "Quarterly impact reports", "Employee volunteer programs", "Logo placement"],
      color: "from-green-500 to-green-600"
    },
    {
      level: "Supporter",
      investment: "$10,000 - $24,999",
      benefits: ["Program sponsorship", "Annual impact report", "Volunteer opportunities", "Newsletter recognition"],
      color: "from-blue-500 to-blue-600"
    },
    {
      level: "Friend",
      investment: "$5,000 - $9,999",
      benefits: ["General support", "Impact updates", "Event invitations", "Website recognition"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join forces with Rising Edge Community to create lasting change. Together, we can amplify our impact and transform more lives than ever before.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer flexible partnership opportunities designed to align with your organization's goals, values, and capacity for impact.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {partnershipTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  variants={fadeInUp}
                >
                  <div className={`bg-gradient-to-r ${type.color} p-6`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">{type.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Commitment</div>
                        <div className="font-semibold text-gray-900">{type.commitment}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Investment</div>
                        <div className="font-semibold text-gray-900">{type.investment}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Partnership Benefits:</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Partnership Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Partnership Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership level that best fits your organization's capacity and desired impact.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {partnershipLevels.map((level, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className={`bg-gradient-to-r ${level.color} p-6 text-white text-center`}>
                  <h3 className="text-2xl font-bold mb-2">{level.level}</h3>
                  <div className="text-lg font-semibold">{level.investment}</div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {level.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full mt-6 bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold">
                    Choose {level.level}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnering with Rising Edge Community offers unique benefits that go beyond traditional corporate giving.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {partnershipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Valued Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to work with these outstanding organizations who share our commitment to youth development.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {currentPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">
                    {partner.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <div className="text-primary font-semibold text-sm mb-3">{partner.type}</div>
                <p className="text-gray-600 text-sm mb-3">{partner.contribution}</p>
                <div className="text-gray-500 text-xs">Partner since {partner.since}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can work together to create meaningful impact in our community. Contact us to explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg group">
                  Start Partnership Discussion
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg transition-all duration-300">
                  Download Partnership Info
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partner;

