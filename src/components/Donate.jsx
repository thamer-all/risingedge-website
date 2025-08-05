import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, CreditCard, Shield, Users, CheckCircle, ArrowLeft, ArrowRight, DollarSign, Gift, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import { animationPresets } from '@/design-system';
import PremiumButton, { GradientButton } from '@/components/ui/premium-button';
import PremiumCard, { FeatureCard, StatCard } from '@/components/ui/premium-card';
import PremiumSection, { HeroSection, CTASection } from '@/components/ui/premium-section';
import PageLayout from '@/components/layout/PageLayout';
import StripeCheckout from './StripeCheckout';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [currentStep, setCurrentStep] = useState('form'); // 'form', 'payment', 'success'
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

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

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleInputChange = (e) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = selectedAmount || parseFloat(customAmount);
    
    if (!amount || amount < 1) {
      alert('Please enter a valid donation amount.');
      return;
    }
    
    if (!donorInfo.firstName || !donorInfo.lastName || !donorInfo.email) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setCurrentStep('payment');
  };

  const handlePaymentSuccess = (paymentData) => {
    console.log('Payment successful:', paymentData);
    setCurrentStep('success');
  };

  const handlePaymentError = (error) => {
    console.error('Payment failed:', error);
    alert('Payment failed. Please try again.');
  };

  const handlePaymentCancel = () => {
    setCurrentStep('form');
  };

  const resetForm = () => {
    setCurrentStep('form');
    setSelectedAmount(50);
    setCustomAmount('');
    setDonationType('one-time');
    setDonorInfo({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
  };

  // Success Page
  if (currentStep === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              Thank You!
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Your generous donation of ${selectedAmount || customAmount} has been processed successfully.
              You will receive a confirmation email shortly.
            </motion.p>
            
            <motion.div
              className="bg-white rounded-xl p-8 mb-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h3>
              <p className="text-gray-700 mb-4">
                Your donation will help provide educational resources, mentorship, and opportunities 
                for underserved youth in our community.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Heart className="w-4 h-4 text-red-500 mr-2" />
                  Supporting {Math.floor((selectedAmount || customAmount) / 10)} students
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-blue-500 mr-2" />
                  Funding {Math.floor((selectedAmount || customAmount) / 25)} mentorship hours
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Button onClick={resetForm} className="bg-gradient-coral text-white font-semibold px-6 py-3">
                Make Another Donation
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/'} className="font-semibold px-6 py-3">
                Return to Home
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Payment Page
  if (currentStep === 'payment') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={handlePaymentCancel}
              variant="outline"
              className="mb-6 font-semibold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Donation Form
            </Button>
            
            <StripeCheckout
              amount={selectedAmount || parseFloat(customAmount)}
              donorInfo={donorInfo}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              onCancel={handlePaymentCancel}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  // Main Donation Form
  return (
    <PageLayout backgroundVariant="gradient" showHeader={true}>
      {/* Premium Hero Section */}
      <HeroSection
        backgroundImage="/api/placeholder/1920/1080"
        overlay={true}
        className="relative bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 text-white"
      >
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            className="flex justify-center mb-8"
            {...animationPresets.scaleIn}
          >
            <div className="w-20 h-20 glass-card-dark backdrop-blur-premium rounded-2xl flex items-center justify-center glow-coral">
              <Heart className="h-10 w-10 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            {...animationPresets.fadeInUp}
          >
            Make a Difference
            <br />
            <span className="text-gradient-coral bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Today
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            {...animationPresets.fadeInUp}
          >
            Your donation directly impacts the lives of underserved youth in New York City. 
            Every dollar creates opportunities for education, growth, and success.
          </motion.p>

          {/* Impact Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
            {...animationPresets.stagger.container}
          >
            {[
              { value: '$50', label: 'Provides school supplies for 1 student' },
              { value: '$100', label: 'Funds 4 hours of tutoring' },
              { value: '$250', label: 'Sponsors 1 month of mentorship' },
              { value: '$500', label: 'Supports athletic program participation' }
            ].map((impact, index) => (
              <motion.div
                key={index}
                className="text-center glass-card-dark backdrop-blur-premium rounded-xl p-6"
                variants={animationPresets.stagger.item}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
                  {impact.value}
                </div>
                <div className="text-sm md:text-base text-white/90 font-medium leading-tight">
                  {impact.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </HeroSection>

      {/* Premium Donation Form */}
      <PremiumSection 
        background="default" 
        spacing="spacious"
        title="Choose Your Impact Level"
        subtitle="Select the donation amount that feels right for you. Every contribution makes a meaningful difference in a young person's life."
        titleAlign="center"
      >
        <div className="max-w-5xl mx-auto">
          <PremiumCard variant="elevated" padding="xl" className="shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Donation Type Selection */}
              <motion.div
                {...animationPresets.fadeInUp}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Choose Your Impact Style</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={cn(
                      'group relative p-8 rounded-2xl border-2 transition-all duration-300 text-left',
                      donationType === 'one-time'
                        ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg glow-coral'
                        : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
                    )}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors',
                      donationType === 'one-time' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600'
                    )}>
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">One-time Donation</h4>
                    <p className="text-gray-600 leading-relaxed">Make an immediate impact with a single contribution that directly supports our programs today.</p>
                    {donationType === 'one-time' && (
                      <div className="absolute top-4 right-4">
                        <CheckCircle className="w-6 h-6 text-orange-500" />
                      </div>
                    )}
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={cn(
                      'group relative p-8 rounded-2xl border-2 transition-all duration-300 text-left',
                      donationType === 'monthly'
                        ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg glow-coral'
                        : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
                    )}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors',
                      donationType === 'monthly' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600'
                    )}>
                      <Heart className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Monthly Giving</h4>
                    <p className="text-gray-600 leading-relaxed">Provide sustained support that allows us to plan long-term programs and create lasting change.</p>
                    {donationType === 'monthly' && (
                      <div className="absolute top-4 right-4">
                        <CheckCircle className="w-6 h-6 text-orange-500" />
                      </div>
                    )}
                  </motion.button>
                </div>
              </motion.div>

              {/* Amount Selection */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Select Amount</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-4 rounded-xl border-2 font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'border-orange-500 bg-orange-500 text-white shadow-lg'
                          : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ${amount}
                    </motion.button>
                  ))}
                </div>
                
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300 pl-12"
                    min="1"
                  />
                  <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </motion.div>

              {/* Donor Information */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={donorInfo.firstName}
                    onChange={handleInputChange}
                    required
                    className="p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={donorInfo.lastName}
                    onChange={handleInputChange}
                    required
                    className="p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={donorInfo.email}
                    onChange={handleInputChange}
                    required
                    className="p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={donorInfo.phone}
                    onChange={handleInputChange}
                    className="p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </motion.div>

              {/* Security Notice */}
              <motion.div
                className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <div className="flex items-center text-blue-700">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Secure Payment</span>
                </div>
                <p className="text-blue-600 text-sm mt-1">
                  Your payment information is encrypted and secure. We use Stripe to process payments safely.
                </p>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="text-center space-y-6"
                {...animationPresets.fadeInUp}
              >
                <GradientButton
                  type="submit"
                  gradient="coral"
                  size="lg"
                  className="px-12 py-4 text-xl font-bold shadow-2xl"
                  icon={<ArrowRight className="h-6 w-6" />}
                  iconPosition="right"
                >
                  Continue to Secure Payment
                </GradientButton>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-green-600" />
                    SSL Secured
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                    Tax Deductible
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1 text-red-500" />
                    100% Transparent
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                  * Required fields. Your donation is tax-deductible to the full extent allowed by law. 
                  You will receive a receipt via email for your records.
                </p>
              </motion.div>
            </form>
          </PremiumCard>
        </div>
      </PremiumSection>

      {/* Trust & Impact Section */}
      <PremiumSection 
        background="gray" 
        title="Why Your Donation Matters"
        subtitle="See exactly how your contribution creates real change in our community"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Target className="w-6 h-6" />}
            title="Direct Impact"
            description="100% of your donation goes directly to programs. Our operational costs are covered by grants and partnerships."
            iconColor="primary"
            hover
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Transparent Reporting"
            description="Receive quarterly impact reports showing exactly how your funds are being used to change lives."
            iconColor="coral"
            hover
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Community Focused"
            description="Every program is designed with community input to ensure we're meeting real needs effectively."
            iconColor="purple"
            hover
          />
        </div>
      </PremiumSection>
    </PageLayout>
  );
};

export default Donate;

