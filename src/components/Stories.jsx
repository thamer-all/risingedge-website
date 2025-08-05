import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Trophy, BookOpen, Users, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Stories = () => {
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

  const featuredStories = [
    {
      name: "Maria Santos",
      age: "18",
      program: "Education & Mentorship",
      title: "From Struggling Student to Valedictorian",
      story: "When Maria joined our program at age 12, she was reading below grade level and struggling with confidence. Through our literacy program and one-on-one mentoring, she not only caught up but excelled. Today, she's her high school valedictorian and heading to Columbia University on a full scholarship.",
      quote: "Rising Edge didn't just help me with my grades—they helped me believe I could achieve anything. My mentor became like a second mother to me.",
      image: "/api/placeholder/400/400",
      outcome: "Full scholarship to Columbia University",
      featured: true
    },
    {
      name: "David Chen",
      age: "16",
      program: "Athletic Program",
      title: "Building Character Through Basketball",
      story: "David was a talented athlete but struggled with teamwork and leadership. Through our basketball program, he learned discipline, cooperation, and how to lift others up. He's now team captain and has been recruited by several colleges.",
      quote: "Basketball taught me that being the best player doesn't matter if you can't make your team better. That lesson changed everything for me.",
      image: "/api/placeholder/400/400",
      outcome: "Team Captain & College Recruitment"
    },
    {
      name: "Aisha Williams",
      age: "17",
      program: "STEM Program",
      title: "Coding Her Way to the Future",
      story: "Aisha had never touched a computer when she joined our STEM program. Now she's building apps, leading coding workshops for younger students, and has already secured an internship at a tech startup.",
      quote: "I never imagined I could create something from nothing with just code. Now I want to build apps that help other kids like me.",
      image: "/api/placeholder/400/400",
      outcome: "Tech Startup Internship"
    }
  ];

  const successMetrics = [
    {
      icon: BookOpen,
      number: "95%",
      label: "Graduate High School",
      description: "Of students in our programs"
    },
    {
      icon: Trophy,
      number: "85%",
      label: "Pursue Higher Education",
      description: "College or vocational training"
    },
    {
      icon: Users,
      number: "78%",
      label: "Give Back",
      description: "Return as volunteers or mentors"
    },
    {
      icon: Star,
      number: "92%",
      label: "Report Increased Confidence",
      description: "In academic and personal goals"
    }
  ];

  const quickStories = [
    {
      name: "Carlos Rodriguez",
      program: "Mentorship",
      achievement: "First in family to attend college",
      quote: "My mentor helped me navigate the college application process and believe in myself."
    },
    {
      name: "Jasmine Thompson",
      program: "Athletics",
      achievement: "Soccer scholarship recipient",
      quote: "Soccer taught me discipline and teamwork that I use in every part of my life."
    },
    {
      name: "Michael Park",
      program: "Education",
      achievement: "Improved from D's to A's",
      quote: "The tutoring program didn't just help my grades—it helped me love learning."
    },
    {
      name: "Destiny Johnson",
      program: "STEM",
      achievement: "Won city-wide robotics competition",
      quote: "Building robots showed me that I can solve any problem if I break it down step by step."
    },
    {
      name: "Alex Martinez",
      program: "Mentorship",
      achievement: "Started own tutoring business",
      quote: "My mentor taught me that success means lifting others up as you climb."
    },
    {
      name: "Zoe Williams",
      program: "Athletics",
      achievement: "Track & field state champion",
      quote: "Running taught me that the only limits are the ones I set for myself."
    }
  ];

  const parentStories = [
    {
      name: "Carmen Rodriguez",
      child: "Carlos",
      story: "I watched my son transform from a shy, uncertain boy into a confident young man ready to take on the world. The mentorship program gave him something I couldn't—a roadmap to success.",
      impact: "Carlos is now studying engineering at NYU"
    },
    {
      name: "James Thompson",
      child: "Jasmine",
      story: "The athletic program taught my daughter more than just soccer skills. She learned leadership, perseverance, and how to work as part of a team. These lessons have shaped who she is today.",
      impact: "Jasmine received a full athletic scholarship"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Every number tells a story, but behind every story is a young person whose life has been transformed. These are their journeys of growth, achievement, and hope.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {successMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.number}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
                  <p className="text-gray-600 text-sm">{metric.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of the incredible young people who have transformed their lives through our programs and are now inspiring others to reach for their dreams.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredStories.map((story, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                  variants={fadeInUp}
                >
                  {/* Image */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                        <div className="w-48 h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-4xl">
                            {story.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      {story.featured && (
                        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Featured Story
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="mb-4">
                      <span className="text-primary font-semibold text-sm">{story.program}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{story.title}</h3>
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {story.name}, {story.age}
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">{story.story}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <Quote className="h-8 w-8 text-primary mb-4" />
                      <p className="text-gray-700 italic text-lg leading-relaxed">"{story.quote}"</p>
                    </div>

                    <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-4 text-white">
                      <div className="font-semibold mb-1">Outcome:</div>
                      <div>{story.outcome}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Quick Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every student has a unique journey. Here are more inspiring stories of growth, achievement, and transformation.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {quickStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                <div className="text-primary font-semibold text-sm mb-3">{story.program}</div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {story.achievement}
                </div>
                <p className="text-gray-600 italic">"{story.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The transformation doesn't just impact our students—it transforms entire families and communities.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {parentStories.map((parent, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                    "{parent.story}"
                  </p>
                </div>
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{parent.name}</div>
                      <div className="text-gray-600 text-sm">Parent of {parent.child}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-semibold text-sm">Impact:</div>
                      <div className="text-gray-700 text-sm">{parent.impact}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Share Your Story
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Are you a Rising Edge alumnus with a success story to share? We'd love to hear from you and celebrate your achievements with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg group">
                  Share Your Story
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

export default Stories;

