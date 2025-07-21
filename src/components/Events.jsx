import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Ticket, Star, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Events = () => {
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

  const upcomingEvents = [
    {
      title: "Annual Gala: Rising Together",
      date: "March 15, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Brooklyn Museum",
      description: "Join us for our signature fundraising event featuring dinner, entertainment, and inspiring stories from our students.",
      price: "$150 per person",
      category: "Fundraiser",
      featured: true,
      image: "/api/placeholder/600/400",
      highlights: ["Student performances", "Silent auction", "Awards ceremony", "Networking reception"]
    },
    {
      title: "Community Basketball Tournament",
      date: "April 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Rising Edge Community Center",
      description: "Annual basketball tournament bringing together teams from across NYC to compete and celebrate community.",
      price: "Free admission",
      category: "Sports",
      image: "/api/placeholder/600/400",
      highlights: ["16 teams competing", "Food trucks", "Live music", "Awards ceremony"]
    },
    {
      title: "STEM Showcase & Science Fair",
      date: "May 10, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Columbia University",
      description: "Students present their STEM projects and innovations to the community, judges, and potential mentors.",
      price: "Free admission",
      category: "Education",
      image: "/api/placeholder/600/400",
      highlights: ["Student presentations", "Interactive demos", "Mentor networking", "Awards & prizes"]
    },
    {
      title: "Summer Kickoff Family Fun Day",
      date: "June 8, 2024",
      time: "11:00 AM - 5:00 PM",
      location: "Prospect Park",
      description: "Celebrate the start of summer with games, activities, food, and fun for the whole family.",
      price: "Free admission",
      category: "Community",
      image: "/api/placeholder/600/400",
      highlights: ["Family activities", "BBQ lunch", "Live entertainment", "Resource fair"]
    }
  ];

  const pastEvents = [
    {
      title: "2023 Annual Gala",
      date: "March 2023",
      impact: "Raised $125,000 for student programs",
      attendance: "300+ attendees"
    },
    {
      title: "Holiday Toy Drive",
      date: "December 2023",
      impact: "Collected 500+ toys for families",
      attendance: "50+ volunteers"
    },
    {
      title: "Back-to-School Resource Fair",
      date: "August 2023",
      impact: "Served 200+ families with supplies",
      attendance: "150+ families"
    }
  ];

  const eventCategories = [
    {
      icon: Heart,
      title: "Fundraising Events",
      description: "Galas, auctions, and special events that raise funds for our programs",
      examples: ["Annual Gala", "Silent Auctions", "Benefit Concerts"]
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Free events that bring our community together for fun and connection",
      examples: ["Family Fun Days", "Block Parties", "Holiday Celebrations"]
    },
    {
      icon: Star,
      title: "Student Showcases",
      description: "Events highlighting student achievements and talents",
      examples: ["STEM Fair", "Art Exhibitions", "Athletic Competitions"]
    },
    {
      icon: Calendar,
      title: "Educational Workshops",
      description: "Learning opportunities for students, families, and community members",
      examples: ["Financial Literacy", "College Prep", "Parenting Workshops"]
    }
  ];

  const volunteerOpportunities = [
    {
      role: "Event Setup",
      description: "Help set up venues, decorations, and equipment before events",
      commitment: "2-4 hours"
    },
    {
      role: "Registration & Check-in",
      description: "Welcome guests and manage event registration tables",
      commitment: "3-4 hours"
    },
    {
      role: "Activity Coordinator",
      description: "Lead games, activities, and entertainment for children and families",
      commitment: "4-6 hours"
    },
    {
      role: "Photography",
      description: "Capture memories and moments from our events for marketing and memories",
      commitment: "2-4 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Community Events
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join us for inspiring events that bring our community together, celebrate student achievements, and support our mission of youth empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar for these exciting upcoming events. Each one is an opportunity to connect, celebrate, and support our community.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {upcomingEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                  variants={fadeInUp}
                >
                  {/* Image */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
                          <div className="text-gray-600 font-semibold">Event Image</div>
                        </div>
                      </div>
                      {event.featured && (
                        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Featured Event
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary">
                        {event.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">{event.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="h-5 w-5 text-primary mr-3" />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="h-5 w-5 text-primary mr-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="h-5 w-5 text-primary mr-3" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Ticket className="h-5 w-5 text-primary mr-3" />
                        <span className="font-semibold">{event.price}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-gradient-to-r from-primary to-secondary text-white font-semibold group">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Types of Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We host a variety of events throughout the year, each designed to serve different aspects of our mission and community.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {eventCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  variants={fadeInUp}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <div key={idx} className="text-sm text-primary font-medium">
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Past Events Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Past Events Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the incredible impact our community events have made throughout the year.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="text-primary font-semibold text-sm mb-4">{event.date}</div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-sm">{event.impact}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-sm">{event.attendance}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Volunteer at Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInUp}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Volunteer at Our Events
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our events wouldn't be possible without amazing volunteers like you. Join our event team and help create memorable experiences for our community.
              </p>
              <div className="space-y-6">
                {volunteerOpportunities.map((opportunity, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{opportunity.role}</h3>
                    <p className="text-gray-600 text-sm mb-2">{opportunity.description}</p>
                    <div className="text-primary text-sm font-medium">
                      Time commitment: {opportunity.commitment}
                    </div>
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
                <h3 className="text-2xl font-bold mb-6">Event Volunteer Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 mr-3" />
                    <span>Make a direct impact on community events</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3" />
                    <span>Meet like-minded community members</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-3" />
                    <span>Gain event planning experience</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3" />
                    <span>Flexible scheduling options</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Us at Our Next Event
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Be part of our community story. Register for upcoming events or sign up to volunteer and help make each event a success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg group">
                  Register for Events
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/volunteer">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg transition-all duration-300">
                  Volunteer at Events
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;

