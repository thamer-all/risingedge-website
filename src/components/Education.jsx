import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Calculator, Users, Clock, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Education = () => {
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
      icon: BookOpen,
      title: "Literacy & Reading",
      description: "Comprehensive reading programs that build foundational skills and foster a love of learning.",
      features: ["One-on-one tutoring", "Small group sessions", "Reading comprehension", "Writing workshops"],
      ages: "Ages 6-18",
      schedule: "Mon-Fri, 3:30-6:00 PM",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "STEM & Coding",
      description: "Hands-on technology education preparing students for 21st-century careers.",
      features: ["Python programming", "Web development", "Robotics clubs", "Science experiments"],
      ages: "Ages 10-18",
      schedule: "Tue/Thu, 4:00-6:00 PM",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Calculator,
      title: "Math Excellence",
      description: "Building mathematical confidence through engaging, real-world problem solving.",
      features: ["Algebra & Geometry", "SAT/ACT prep", "Math competitions", "Peer tutoring"],
      ages: "Ages 8-18",
      schedule: "Mon/Wed/Fri, 4:00-5:30 PM",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Homework Support",
      description: "Daily academic support ensuring students stay on track with their schoolwork.",
      features: ["All subjects covered", "Study skills training", "Organization techniques", "Test preparation"],
      ages: "Ages 6-18",
      schedule: "Mon-Fri, 3:30-6:00 PM",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const outcomes = [
    {
      stat: "92%",
      label: "Grade Improvement",
      description: "Students show measurable improvement in grades within one semester"
    },
    {
      stat: "85%",
      label: "Reading Level Growth",
      description: "Participants advance at least one reading level per year"
    },
    {
      stat: "95%",
      label: "High School Graduation",
      description: "Program participants graduate high school at exceptional rates"
    },
    {
      stat: "78%",
      label: "College Enrollment",
      description: "Graduates enroll in college or vocational training programs"
    }
  ];

  const testimonials = [
    {
      quote: "The coding program opened up a whole new world for me. I never thought I could build websites, but now I'm planning to study computer science in college.",
      name: "Marcus Johnson",
      age: "Age 17",
      program: "STEM & Coding"
    },
    {
      quote: "My daughter struggled with reading for years. The literacy program not only improved her skills but made her love books. She reads every night now!",
      name: "Carmen Rodriguez",
      role: "Parent",
      program: "Literacy & Reading"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Education Programs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Building tomorrow's leaders through comprehensive educational support that ignites curiosity and opens doors to limitless possibilities.
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
              Comprehensive Educational Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our education programs address the whole student, providing academic support, skill development, and the confidence needed to succeed in school and beyond.
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
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Age Range</div>
                        <div className="font-semibold text-gray-900">{program.ages}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Schedule</div>
                        <div className="font-semibold text-gray-900">{program.schedule}</div>
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

      {/* Outcomes & Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our education programs deliver measurable outcomes that transform academic performance and open pathways to success.
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

      {/* Student Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students and families whose lives have been transformed through our education programs.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
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

      {/* Enrollment CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Child's Education?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of students who have discovered their potential through our education programs. Enrollment is open year-round with flexible scheduling options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg group">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg transition-all duration-300">
                  Schedule a Visit
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Education;

