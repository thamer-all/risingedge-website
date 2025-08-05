import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, DollarSign, Users, BookOpen, Trophy, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Calculator = () => {
  const [donation, setDonation] = useState(100);
  const [results, setResults] = useState(null);

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

  const impactData = {
    tutoring: { cost: 25, unit: "hour of tutoring" },
    mentoring: { cost: 50, unit: "month of mentoring" },
    athletics: { cost: 75, unit: "month of athletic programs" },
    supplies: { cost: 30, unit: "set of school supplies" },
    meals: { cost: 15, unit: "nutritious meals" },
    scholarship: { cost: 500, unit: "scholarship fund contribution" }
  };

  const calculateImpact = () => {
    const impact = {};
    Object.keys(impactData).forEach(key => {
      const amount = Math.floor(donation / impactData[key].cost);
      if (amount > 0) {
        impact[key] = {
          amount,
          unit: impactData[key].unit,
          cost: impactData[key].cost
        };
      }
    });
    setResults(impact);
  };

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const impactExamples = [
    {
      amount: 25,
      icon: BookOpen,
      title: "1 Hour of Tutoring",
      description: "Provides one-on-one academic support to help a student improve their grades",
      color: "from-blue-500 to-blue-600"
    },
    {
      amount: 50,
      icon: Users,
      title: "1 Month of Mentoring",
      description: "Connects a young person with a caring adult mentor for guidance and support",
      color: "from-green-500 to-green-600"
    },
    {
      amount: 75,
      icon: Trophy,
      title: "1 Month of Athletics",
      description: "Gives a student access to sports programs that build character and teamwork",
      color: "from-orange-500 to-orange-600"
    },
    {
      amount: 100,
      icon: Heart,
      title: "Complete Support Package",
      description: "Provides comprehensive support including tutoring, mentoring, and activities",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const realImpactStats = [
    {
      stat: "$25",
      label: "Average Cost Per Hour",
      description: "To provide high-quality tutoring"
    },
    {
      stat: "85%",
      label: "Program Efficiency",
      description: "Of donations go directly to programs"
    },
    {
      stat: "2,500+",
      label: "Students Served",
      description: "Through donor support since 2010"
    },
    {
      stat: "$2.5M",
      label: "Scholarships Awarded",
      description: "To help students pursue higher education"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-700 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Impact Calculator
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              See exactly how your donation transforms lives. Every dollar creates measurable impact in our community—calculate yours today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            {...fadeInUp}
          >
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 text-white text-center">
              <CalcIcon className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-white">Calculate Your Impact</h2>
              <p className="text-xl text-gray-100">
                Enter a donation amount to see the specific impact you can make
              </p>
            </div>

            <div className="p-8">
              {/* Donation Input */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-slate-800 mb-4">
                  Donation Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <input
                    type="number"
                    value={donation}
                    onChange={(e) => setDonation(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-4 text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    min="1"
                    placeholder="100"
                  />
                </div>
              </div>

              {/* Preset Amounts */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Quick Select
                </label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonation(amount)}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                        donation === amount
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <Button
                onClick={calculateImpact}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-4 text-lg"
              >
                Calculate My Impact
              </Button>

              {/* Results */}
              {results && (
                <motion.div
                  className="mt-8 p-6 bg-gray-50 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Your ${donation} donation can provide:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(results).map(([key, value]) => (
                      <div key={key} className="bg-white rounded-lg p-4 shadow-md">
                        <div className="text-2xl font-bold text-primary mb-2">
                          {value.amount}
                        </div>
                        <div className="text-gray-700 capitalize">
                          {value.amount === 1 ? value.unit : value.unit + 's'}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Link to="/donate">
                      <Button className="bg-gradient-to-r from-emerald-600 to-orange-600 text-white font-semibold px-8 py-3 text-lg group">
                        Donate ${donation} Now
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Use Your Donations - Transparency Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              {...fadeInUp}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                How We Use Your Donations
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We believe in complete transparency about how your donations create impact. Every dollar is carefully allocated to maximize benefit for our students and community.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                  <span className="text-slate-700 text-lg">85% directly funds student programs and services</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-slate-700 text-lg">10% covers essential administrative costs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                  <span className="text-slate-700 text-lg">5% supports fundraising and outreach efforts</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Premium Transparency Checklist */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-600">
                <h3 className="text-2xl font-bold mb-8 text-center text-yellow-400">How We Use Your Donations</h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-lg">
                      <span className="text-slate-900 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-yellow-400 text-lg">Donation Transparency</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-7 h-7 bg-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-lg">
                      <span className="text-slate-900 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-cyan-400 text-lg">Independent Audits</div>
                      <div className="text-cyan-300 font-semibold ml-6 text-base">✓ Annual</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-lg">
                      <span className="text-slate-900 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-orange-400 text-lg">Financial Reports</div>
                      <div className="text-orange-300 font-semibold ml-6 text-base">✓ Public</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-lg">
                      <span className="text-slate-900 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-emerald-400 text-lg">Impact Tracking</div>
                      <div className="text-emerald-300 font-semibold ml-6 text-base">✓ Real-time</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-lg">
                      <span className="text-slate-900 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-purple-400 text-lg">Donor Updates</div>
                      <div className="text-purple-300 font-semibold ml-6 text-base">✓ Quarterly</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real Impact Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how different donation amounts translate into tangible support for our students and programs.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {impactExamples.map((example, index) => {
              const IconComponent = example.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  variants={fadeInUp}
                >
                  <div className={`bg-gradient-to-r ${example.color} p-6 text-white`}>
                    <IconComponent className="h-12 w-12 mb-4" />
                    <div className="text-3xl font-bold mb-2">${example.amount}</div>
                    <h3 className="text-xl font-bold">{example.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">{example.description}</p>
                    <Button
                      onClick={() => setDonation(example.amount)}
                      className="w-full mt-4 bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold"
                    >
                      Calculate ${example.amount} Impact
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Real Impact Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Donation at Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to transparency and efficiency. Here's how your donations create maximum impact.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {realImpactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="text-4xl font-bold text-primary mb-4">{stat.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stat.label}</h3>
                <p className="text-gray-600 leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Use Donations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInUp}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                How We Use Your Donations
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We believe in complete transparency about how every dollar is used. Our commitment to efficiency ensures maximum impact for every donation.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-900">Programs & Services</span>
                      <span className="text-primary font-bold">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-secondary rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-900">Administration</span>
                      <span className="text-secondary font-bold">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-400 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-900">Fundraising</span>
                      <span className="text-gray-600 font-bold">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
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
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-600">
                <h3 className="text-2xl font-bold mb-6 text-orange-400">Donation Transparency</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-300 font-semibold">Independent Audits</span>
                    <span className="text-emerald-400 font-bold">✓ Annual</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-300 font-semibold">Financial Reports</span>
                    <span className="text-emerald-400 font-bold">✓ Public</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-300 font-semibold">Impact Tracking</span>
                    <span className="text-emerald-400 font-bold">✓ Real-time</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-300 font-semibold">Donor Updates</span>
                    <span className="text-emerald-400 font-bold">✓ Quarterly</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Every donation, no matter the size, creates real change in a young person's life. Calculate your impact and join our mission today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg group">
                  Donate Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/reports">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg transition-all duration-300">
                  View Impact Reports
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;

