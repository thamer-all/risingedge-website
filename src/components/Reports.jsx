import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, BarChart3, TrendingUp, Users, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Reports = () => {
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

  const reports = [
    {
      title: "2023 Annual Impact Report",
      description: "Comprehensive overview of our programs, achievements, and community impact throughout 2023.",
      type: "Annual Report",
      date: "March 2024",
      pages: "32 pages",
      highlights: ["500+ students served", "95% graduation rate", "$2.5M in scholarships", "15 community partnerships"],
      downloadUrl: "#",
      featured: true
    },
    {
      title: "Education Program Outcomes",
      description: "Detailed analysis of academic improvements and educational achievements across all our programs.",
      type: "Program Report",
      date: "January 2024",
      pages: "18 pages",
      highlights: ["92% grade improvement", "85% reading level growth", "78% college enrollment", "200+ tutoring hours weekly"],
      downloadUrl: "#"
    },
    {
      title: "Athletic Program Impact Study",
      description: "Comprehensive study on the character development and leadership skills gained through our athletic programs.",
      type: "Research Study",
      date: "December 2023",
      pages: "24 pages",
      highlights: ["300+ active athletes", "15 championship titles", "98% retention rate", "25+ college scholarships"],
      downloadUrl: "#"
    },
    {
      title: "Mentorship Program Evaluation",
      description: "In-depth evaluation of our mentorship programs and their long-term impact on student success.",
      type: "Evaluation Report",
      date: "November 2023",
      pages: "20 pages",
      highlights: ["200+ mentoring pairs", "88% academic improvement", "95% program completion", "3.2 year average relationship"],
      downloadUrl: "#"
    },
    {
      title: "Community Engagement Report",
      description: "Analysis of our community outreach efforts and partnerships throughout New York City.",
      type: "Community Report",
      date: "October 2023",
      pages: "16 pages",
      highlights: ["10 NYC communities served", "50+ community events", "1,000+ volunteer hours", "25 local partnerships"],
      downloadUrl: "#"
    },
    {
      title: "Financial Transparency Report",
      description: "Detailed breakdown of our financial stewardship and how donations are utilized to maximize impact.",
      type: "Financial Report",
      date: "September 2023",
      pages: "12 pages",
      highlights: ["85% program funding", "10% administration", "5% fundraising", "AAA charity rating"],
      downloadUrl: "#"
    }
  ];

  const keyMetrics = [
    {
      icon: Users,
      metric: "2,500+",
      label: "Lives Transformed",
      description: "Total students served since our founding"
    },
    {
      icon: TrendingUp,
      metric: "95%",
      label: "Success Rate",
      description: "Students who achieve their academic goals"
    },
    {
      icon: BarChart3,
      metric: "$5.2M",
      label: "Community Investment",
      description: "Total value of programs and services provided"
    },
    {
      icon: Calendar,
      metric: "14 Years",
      label: "Proven Impact",
      description: "Years of consistent community service"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Impact Reports
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transparency and accountability drive everything we do. Explore our comprehensive reports showcasing the measurable impact we're making in our communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {keyMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.metric}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
                  <p className="text-gray-600 text-sm">{metric.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Impact Reports
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into our data-driven approach to community impact. Each report provides detailed insights into our programs, outcomes, and the lives we're changing.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {reports.map((report, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  report.featured ? 'ring-2 ring-primary' : ''
                }`}
                variants={fadeInUp}
              >
                {report.featured && (
                  <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-semibold">
                    Featured Report
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <FileText className="h-5 w-5 text-primary mr-2" />
                        <span className="text-sm text-primary font-medium">{report.type}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{report.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Published</div>
                      <div className="font-semibold text-gray-900">{report.date}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Length</div>
                      <div className="font-semibold text-gray-900">{report.pages}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {report.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold group">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data Transparency */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInUp}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Commitment to Transparency
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We believe in complete transparency about our impact, finances, and operations. Every dollar donated and every program delivered is documented and reported with full accountability.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our reports undergo independent review and are published annually to ensure our community knows exactly how their support is creating positive change.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Independent financial audits</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Third-party program evaluations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Regular community feedback sessions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Open data sharing with stakeholders</span>
                </div>
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
                <h3 className="text-2xl font-bold mb-6">Our Accountability Promise</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-white/90">Financial Transparency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Annual</div>
                    <div className="text-white/90">Impact Reporting</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Open</div>
                    <div className="text-white/90">Data Access</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated on Our Impact
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Subscribe to receive our latest reports, impact updates, and stories of transformation directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3">
                Subscribe
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/stories">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg transition-all duration-300">
                  Read Success Stories
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reports;

