import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Lightbulb, Clock, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Mentorship = () => {
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

  const programs = [
    {
      icon: Heart,
      title: "One-on-One Mentoring",
      description: "Personalized mentorship relationships that provide individualized support and guidance.",
      features: ["Weekly 1-hour sessions", "Goal setting & tracking", "Academic support", "Life skills development"],
      duration: "Minimum 1 year commitment",
      ages: "Ages 10-18",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Group Mentoring",
      description: "Small group sessions that combine peer support with adult guidance and leadership.",
      features: ["4-6 students per group", "Bi-weekly sessions", "Team building activities", "Leadership workshops"],
      duration: "Academic year program",
      ages: "Ages 12-18",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Career Mentoring",
      description: "Professional mentorship focused on career exploration and workforce preparation.",
      features: ["Industry professionals", "Job shadowing opportunities", "Resume & interview prep", "Networking events"],
      duration: "6-month intensive",
      ages: "Ages 16-18",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Lightbulb,
      title: "Peer Mentoring",
      description: "Older students mentor younger ones, creating a supportive community of learning.",
      features: ["Student-led sessions", "Academic tutoring", "Social skills development", "Leadership training"],
      duration: "Ongoing program",
      ages: "Mentors: 15-18, Mentees: 8-14",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const mentorQualities = [
    {
      title: "Dedicated",
      description: "Committed to building lasting relationships and supporting student growth"
    },
    {
      title: "Experienced",
      description: "Professionals and community leaders with diverse backgrounds and expertise"
    },
    {
      title: "Trained",
      description: "All mentors complete comprehensive training in youth development and mentoring best practices"
    },
    {
      title: "Supportive",
      description: "Ongoing support and resources provided to ensure successful mentoring relationships"
    }
  ];

  const outcomes = [
    {
      stat: "200+",
      label: "Active Mentoring Pairs",
      description: "Current mentor-mentee relationships in our program"
    },
    {
      stat: "88%",
      label: "Academic Improvement",
      description: "Students show improved grades within 6 months"
    },
    {
      stat: "95%",
      label: "Program Completion",
      description: "Students who complete their full mentoring commitment"
    },
    {
      stat: "3.2 Years",
      label: "Average Relationship",
      description: "Average length of mentor-mentee relationships"
    }
  ];

  const testimonials = [
    {
      quote: "My mentor didn't just help me with homework - she helped me believe in myself. Now I'm the first in my family to go to college, and I know I can achieve anything.",
      name: "David Chen",
      age: "Age 18",
      program: "One-on-One Mentoring"
    },
    {
      quote: "Being a mentor has been one of the most rewarding experiences of my life. Watching my mentee grow and succeed has reminded me why I love working with young people.",
      name: "Sarah Martinez",
      role: "Mentor",
      program: "Career Mentoring"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Application",
      description: "Students and families complete our mentoring program application"
    },
    {
      step: "2",
      title: "Matching",
      description: "We carefully match mentees with mentors based on interests, goals, and personality"
    },
    {
      step: "3",
      title: "Orientation",
      description: "Both mentors and mentees attend orientation to set expectations and goals"
    },
    {
      step: "4",
      title: "Regular Meetings",
      description: "Consistent weekly or bi-weekly meetings build strong relationships"
    },
    {
      step: "5",
      title: "Ongoing Support",
      description: "Program staff provide continuous support and check-ins throughout the relationship"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-600 via-purple-700 to-blue-700 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mentorship Programs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Guidance that changes everything. Our mentorship programs create meaningful relationships that shape futures and transform lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Power of Mentorship
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every young person deserves a champion—someone who believes in their potential and helps them navigate life's challenges. Our mentorship programs create these life-changing relationships.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  variants={fadeInUp}
                >
                  <div className={`bg-gradient-to-r ${program.color} p-6`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">{program.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Duration</div>
                        <div className="font-semibold text-gray-900">{program.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Age Range</div>
                        <div className="font-semibold text-gray-900">{program.ages}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold">
                      Apply for Mentoring
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Mentors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Amazing Mentors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mentors are carefully selected professionals, community leaders, and caring adults who are passionate about making a difference in young lives.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {mentorQualities.map((quality, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{quality.title}</h3>
                <p className="text-gray-600 leading-relaxed">{quality.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How Our Program Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure successful mentoring relationships that benefit both mentors and mentees.
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full hidden lg:block"></div>

            <div className="space-y-12">
              {process.map((step, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}
                    variants={fadeInUp}
                  >
                    {/* Content */}
                    <div className={`lg:w-1/2 ${isEven ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} mb-8 lg:mb-0`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="lg:w-1/2 hidden lg:block"></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes & Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Mentorship Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The results speak for themselves—mentorship creates lasting positive change in academic performance, personal development, and life outcomes.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="text-4xl font-bold text-primary mb-4">{outcome.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{outcome.label}</h3>
                <p className="text-gray-600 leading-relaxed">{outcome.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Mentorship Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from mentees and mentors about the transformative power of these special relationships.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="mb-6">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.age || testimonial.role}</div>
                    <div className="text-primary text-sm font-medium">{testimonial.program}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Change a Life?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Whether you're a young person seeking guidance or an adult ready to make a difference, our mentorship programs are waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg group">
                  Become a Mentee
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg transition-all duration-300">
                  Become a Mentor
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mentorship;

