import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, CreditCard, Shield, Users, CheckCircle, ArrowLeft, ArrowRight, DollarSign } from 'lucide-react';
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
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Thank You!
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Your generous donation of ${selectedAmount || customAmount} has been processed successfully.
              You will receive a confirmation email shortly.
            </motion.p>
            
            <motion.div
              className="bg-white rounded-xl p-8 mb-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
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
              transition={{ delay: 1.1, duration: 0.6 }}
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-20 lg:py-32 overflow-hidden">
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
                <Heart className="h-8 w-8 text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Make a Difference Today
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-orange-100"
              variants={fadeInUp}
            >
              Your donation directly impacts the lives of underserved youth in New York City. 
              Every dollar creates opportunities for education, growth, and success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              {/* Donation Type */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Impact</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                      donationType === 'one-time'
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <DollarSign className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-semibold">One-time Donation</div>
                    <div className="text-sm text-gray-600">Make an immediate impact</div>
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                      donationType === 'monthly'
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Heart className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-semibold">Monthly Giving</div>
                    <div className="text-sm text-gray-600">Sustained support</div>
                  </motion.button>
                </div>
              </motion.div>

              {/* Amount Selection */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
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
                transition={{ delay: 0.5, duration: 0.6 }}
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
                transition={{ delay: 0.6, duration: 0.6 }}
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
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-4 text-lg rounded-xl shadow-lg transition-all duration-300"
                  >
                    Continue to Payment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <p className="text-gray-600 text-sm mt-4">
                  * Required fields. Your donation is tax-deductible.
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Donate;

