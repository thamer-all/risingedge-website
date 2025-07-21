import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, CreditCard, Shield, Users, CheckCircle, ArrowLeft } from 'lucide-react';
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
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-700 mb-8">
            Your generous donation of ${selectedAmount || customAmount} has been processed successfully.
            You will receive a confirmation email shortly.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h3>
            <p className="text-gray-700">
              Your donation will directly support our programs and help us continue empowering 
              young people in our community. Thank you for making a difference!
            </p>
          </div>
          
          <div className="space-y-4">
            <Button
              onClick={resetForm}
              className="bg-gradient-coral hover:scale-105 transition-transform duration-200 text-white font-semibold px-8 py-3"
            >
              Make Another Donation
            </Button>
            <div>
              <a
                href="/"
                className="text-primary hover:underline font-medium"
              >
                Return to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Payment Page
  if (currentStep === 'payment') {
    const amount = selectedAmount || parseFloat(customAmount);
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <button
              onClick={handlePaymentCancel}
              className="flex items-center text-primary hover:text-primary/80 font-medium mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Donation Form
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Complete Your Donation</h1>
          </div>
          
          <StripeCheckout
            amount={amount}
            donationType={donationType}
            donorInfo={donorInfo}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
            onCancel={handlePaymentCancel}
          />
        </div>
      </div>
    );
  }

  // Main Donation Form
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-coral rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Your generous contribution helps us continue our mission of empowering communities 
            and creating positive change. Every donation, no matter the size, makes a difference.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">1,500+</h3>
            <p className="text-gray-700">Lives Impacted</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-gradient-coral rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">95%</h3>
            <p className="text-gray-700">Goes to Programs</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-700">Secure Donations</p>
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Donation Type */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Donation Type</h3>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="donationType"
                    value="one-time"
                    checked={donationType === 'one-time'}
                    onChange={(e) => setDonationType(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-gray-700">One-time</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="donationType"
                    value="monthly"
                    checked={donationType === 'monthly'}
                    onChange={(e) => setDonationType(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Monthly</span>
                </label>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Amount</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-3 rounded-lg border-2 font-semibold transition-colors ${
                      selectedAmount === amount
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div>
                <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                  Or enter custom amount:
                </label>
                <input
                  type="number"
                  id="customAmount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter amount"
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={donorInfo.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={donorInfo.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={donorInfo.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={donorInfo.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-gradient-coral hover:scale-105 transition-transform duration-200 text-white font-semibold px-12 py-4 text-lg"
                disabled={!selectedAmount && !customAmount}
              >
                Continue to Payment - ${selectedAmount || customAmount || '0'} {donationType === 'monthly' ? 'Monthly' : 'Now'}
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                You will be able to review your donation before completing the payment.
              </p>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Other Ways to Give</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Corporate Partnerships</h4>
              <p className="text-gray-700">
                Interested in corporate sponsorship or partnership opportunities? 
                Contact us to learn about our corporate giving programs.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Volunteer Your Time</h4>
              <p className="text-gray-700">
                Can't donate financially? Consider volunteering your time and skills 
                to help us make a difference in the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;

