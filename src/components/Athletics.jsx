import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Heart, Target, Clock, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Athletics = () => {
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

  const sports = [
    {
      icon: Trophy,
      title: "Soccer League",
      description: "Competitive and recreational soccer programs that build teamwork, discipline, and athletic skills.",
      features: ["Youth leagues (ages 6-18)", "Competitive teams", "Skills training", "Tournament participation"],
      seasons: "Fall & Spring",
      schedule: "Tue/Thu practice, Sat games",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Basketball",
      description: "Fast-paced basketball programs focusing on fundamentals, strategy, and sportsmanship.",
      features: ["Beginner to advanced levels", "3v3 and 5v5 leagues", "Shooting clinics", "Leadership development"],
      seasons: "Winter & Summer",
      schedule: "Mon/Wed practice, Fri games",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "Track & Field",
      description: "Individual and team track events that promote personal achievement and healthy competition.",
      features: ["Sprint and distance events", "Field events", "Cross country", "NYC meet participation"],
      seasons: "Spring & Fall",
      schedule: "Mon/Wed/Fri training",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Fitness & Wellness",
      description: "Comprehensive fitness programs promoting lifelong healthy habits and physical wellness.",
      features: ["Strength training", "Cardio fitness", "Nutrition education", "Mental health awareness"],
      seasons: "Year-round",
      schedule: "Daily sessions available",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Physical Health",
      description: "Regular exercise improves cardiovascular health, builds strength, and promotes overall wellness."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Sports teach collaboration, communication, and how to work together toward common goals."
    },
    {
      icon: Target,
      title: "Discipline",
      description: "Athletic training instills self-discipline, time management, and commitment to excellence."
    },
    {
      icon: Trophy,
      title: "Confidence",
      description: "Achievement in sports builds self-esteem and confidence that carries into all areas of life."
    }
  ];

  const achievements = [
    {
      stat: "300+",
      label: "Active Athletes",
      description: "Students participating in our athletic programs annually"
    },
    {
      stat: "15",
      label: "Championship Titles",
      description: "League championships won by our teams since 2015"
    },
    {
      stat: "98%",
      label: "Retention Rate",
      description: "Athletes who continue in programs year after year"
    },
    {
      stat: "25+",
      label: "College Scholarships",
      description: "Athletic scholarships earned by our student-athletes"
    }
  ];

  const testimonials = [
    {
      quote: "Soccer taught me more than just how to play a sport. It taught me leadership, perseverance, and how to be part of something bigger than myself.",
      name: "Aisha Williams",
      age: "Age 16",
      sport: "Soccer Team Captain"
    },
    {
      quote: "Watching my son grow through the basketball program has been incredible. His confidence on and off the court has transformed completely.",
      name: "Michael Johnson",
      role: "Parent",
      sport: "Basketball Parent"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-blue-700 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Athletic Programs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Building character, confidence, and community through sports. Our athletic programs develop not just better athletes, but better people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              More Than Just Sports
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our athletic programs use sports as a vehicle for character development, leadership training, and building life skills that extend far beyond the playing field.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => {
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

      {/* Sports Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Sports Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From recreational to competitive levels, we offer programs that meet every athlete where they are and help them reach their potential.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {sports.map((sport, index) => {
              const IconComponent = sport.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  variants={fadeInUp}
                >
                  <div className={`bg-gradient-to-r ${sport.color} p-6`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{sport.title}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">{sport.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Seasons</div>
                        <div className="font-semibold text-gray-900">{sport.seasons}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Schedule</div>
                        <div className="font-semibold text-gray-900">{sport.schedule}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                      <ul className="space-y-2">
                        {sport.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold">
                      Join This Program
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Achievements & Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Athletic Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence shows in both competitive achievements and the personal growth of every athlete.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="text-4xl font-bold text-primary mb-4">{achievement.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.label}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Athlete Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Athlete Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from athletes and families about how sports have transformed their lives and opened new opportunities.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.age || testimonial.role}</div>
                    <div className="text-primary text-sm font-medium">{testimonial.sport}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Athletic Family?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Registration is open for all skill levels. Whether your child is just starting out or looking to take their game to the next level, we have a place for them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg group">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg transition-all duration-300">
                  Schedule a Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Athletics;

