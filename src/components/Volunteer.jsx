import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Clock, BookOpen, Trophy, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Volunteer = () => {
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

  const volunteerRoles = [
    {
      icon: BookOpen,
      title: "Academic Tutor",
      description: "Help students with homework, reading, and study skills in one-on-one or small group settings.",
      commitment: "2-3 hours/week",
      requirements: ["High school diploma", "Patience and enthusiasm", "Background check"],
      impact: "Directly improve student academic performance",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Mentor",
      description: "Build meaningful relationships with students, providing guidance, support, and encouragement.",
      commitment: "1-2 hours/week",
      requirements: ["21+ years old", "Mentoring training", "1-year commitment"],
      impact: "Transform a young person's life trajectory",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Trophy,
      title: "Athletic Coach",
      description: "Lead sports teams and athletic activities, teaching skills, teamwork, and sportsmanship.",
      commitment: "3-4 hours/week",
      requirements: ["Sports experience", "CPR certification", "Coaching background preferred"],
      impact: "Build character through athletics",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Code,
      title: "STEM Instructor",
      description: "Teach coding, robotics, and technology skills to students in our STEM programs.",
      commitment: "2-3 hours/week",
      requirements: ["Technical background", "Teaching experience helpful", "Passion for technology"],
      impact: "Prepare students for 21st-century careers",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Event Volunteer",
      description: "Support special events, fundraisers, and community activities throughout the year.",
      commitment: "Flexible",
      requirements: ["Enthusiasm", "Team player", "Reliable"],
      impact: "Help create memorable experiences",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Clock,
      title: "Administrative Support",
      description: "Assist with office tasks, data entry, and program coordination behind the scenes.",
      commitment: "2-4 hours/week",
      requirements: ["Basic computer skills", "Attention to detail", "Professional demeanor"],
      impact: "Keep programs running smoothly",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const volunteerBenefits = [
    "Make a meaningful difference in young lives",
    "Gain valuable experience and skills",
    "Connect with like-minded community members",
    "Receive comprehensive training and support",
    "Flexible scheduling to fit your lifestyle",
    "Recognition and appreciation events",
    "Professional development opportunities",
    "Letters of recommendation available"
  ];

  const volunteerStats = [
    {
      number: "150+",
      label: "Active Volunteers",
      description: "Dedicated community members serving our students"
    },
    {
      number: "2,000+",
      label: "Volunteer Hours",
      description: "Contributed monthly by our amazing volunteers"
    },
    {
      number: "95%",
      label: "Satisfaction Rate",
      description: "Of volunteers report a rewarding experience"
    },
    {
      number: "3+ Years",
      label: "Average Commitment",
      description: "Volunteers stay engaged long-term"
    }
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our online volunteer application form with your interests and availability"
    },
    {
      step: "2",
      title: "Background Check",
      description: "All volunteers undergo a background check to ensure student safety"
    },
    {
      step: "3",
      title: "Interview & Orientation",
      description: "Meet with our team and attend orientation to learn about our programs"
    },
    {
      step: "4",
      title: "Training",
      description: "Receive role-specific training to prepare you for success"
    },
    {
      step: "5",
      title: "Start Volunteering",
      description: "Begin making a difference in the lives of our students"
    }
  ];

  const testimonials = [
    {
      quote: "Volunteering with Rising Edge has been the most rewarding experience of my life. Seeing my mentee graduate and head to college made every hour worth it.",
      name: "Sarah Martinez",
      role: "Mentor Volunteer",
      years: "3 years"
    },
    {
      quote: "As a tutor, I've watched students go from struggling with reading to becoming confident learners. The impact is incredible and goes both ways.",
      name: "Michael Chen",
      role: "Academic Tutor",
      years: "2 years"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-pink-600 to-purple-700 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Volunteer With Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join our community of passionate volunteers who are transforming lives and building stronger communities. Your time and talents can make all the difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {volunteerStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have volunteer opportunities for every skill set, schedule, and interest. Find the perfect way to make a difference.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {volunteerRoles.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  variants={fadeInUp}
                >
                  <div className={`bg-gradient-to-r ${role.color} p-6`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{role.title}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">{role.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Time Commitment</div>
                        <div className="font-semibold text-gray-900">{role.commitment}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Impact</div>
                        <div className="font-semibold text-gray-900">{role.impact}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {role.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold">
                      Apply for This Role
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInUp}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Volunteer With Us?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Volunteering with Rising Edge Community isn't just about giving back—it's about being part of a movement that creates lasting change. Here's what you can expect:
              </p>
              <div className="space-y-4">
                {volunteerBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Volunteer Impact</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-white/90">Students Supported Annually</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">24,000+</div>
                    <div className="text-white/90">Volunteer Hours Per Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">$600K</div>
                    <div className="text-white/90">Value of Volunteer Contributions</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our application process is designed to ensure the best match between volunteers and opportunities while maintaining the highest standards for student safety.
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
              {applicationProcess.map((step, index) => {
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
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
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

      {/* Volunteer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Volunteers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from volunteers who have experienced the joy and fulfillment of making a difference in young lives.
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
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-primary text-sm font-medium">{testimonial.years}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join our community of volunteers and start transforming lives today. Your journey of impact begins with a single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg group">
                  Apply to Volunteer
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;

