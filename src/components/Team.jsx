import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter, Users, Award, Heart, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Team = () => {
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

  const leadership = [
    {
      name: "Maria Rodriguez",
      role: "Executive Director",
      bio: "With over 15 years in youth development, Maria has dedicated her career to creating opportunities for underserved communities. She holds an M.Ed. from Columbia Teachers College.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        email: "maria@risingedge.org"
      }
    },
    {
      name: "David Chen",
      role: "Program Director",
      bio: "Former NYC public school teacher and Rising Edge alumnus, David brings firsthand experience and passion to program development and student mentorship.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        email: "david@risingedge.org"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Development Director",
      bio: "Sarah leads our fundraising and community partnerships. Her background in nonprofit management has helped secure over $2M in funding for our programs.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "#",
        email: "sarah@risingedge.org"
      }
    }
  ];

  const board = [
    {
      name: "Michael Thompson",
      role: "Board Chair",
      bio: "CEO of Thompson Financial Group and longtime advocate for educational equity in NYC.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Aisha Williams",
      role: "Board Member",
      bio: "Former Rising Edge student, now a pediatrician serving in community health centers.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Robert Garcia",
      role: "Board Member",
      bio: "Community organizer and education policy expert with the NYC Department of Education.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Jennifer Lee",
      role: "Board Member",
      bio: "Sports marketing executive who has helped develop our athletics programs.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
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
                <Users className="h-8 w-8 text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Our Team
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-blue-100"
              variants={fadeInUp}
            >
              Meet the dedicated professionals and community leaders who make our mission possible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced team brings diverse expertise and a shared passion for youth development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-primary transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Board of Directors</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our board members provide strategic guidance and oversight to advance our mission.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {board.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3 text-sm">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link to="/history">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3">
                  Learn About Our History
                  <Target className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;

