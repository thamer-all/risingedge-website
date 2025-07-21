import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Loader2, CreditCard, Shield } from 'lucide-react';

// This would be your publishable key from Stripe Dashboard
const stripePromise = loadStripe('pk_test_51234567890abcdef...');

const CheckoutForm = ({ amount, donationType, donorInfo, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: `${donorInfo.firstName} ${donorInfo.lastName}`,
        email: donorInfo.email,
        phone: donorInfo.phone,
      },
    });

    if (paymentError) {
      setError(paymentError.message);
      setIsProcessing(false);
      return;
    }

    // In a real application, you would send the payment method to your backend
    // to create a payment intent and confirm the payment
    try {
      // Simulate API call to backend
      const response = await simulatePaymentProcessing();

      if (response.success) {
        onSuccess({
          paymentMethod,
          amount,
          donationType,
          transactionId: response.transactionId,
        });
      } else {
        throw new Error(response.error || 'Payment failed');
      }
    } catch (err) {
      setError(err.message);
      onError(err);
    } finally {
      setIsProcessing(false);
    }
  };

  // Simulate payment processing (replace with actual backend call)
  const simulatePaymentProcessing = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate success (in real app, this would be handled by your backend)
    return {
      success: true,
      transactionId: `txn_${Date.now()}`,
      message: 'Payment processed successfully'
    };
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
        fontFamily: 'Inter, system-ui, sans-serif',
      },
      invalid: {
        color: '#9e2146',
      },
    },
    hidePostalCode: false,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <CreditCard className="mr-2 h-5 w-5" />
          Payment Information
        </h3>
        
        <div className="bg-white p-4 border border-gray-200 rounded-md">
          <CardElement options={cardElementOptions} />
        </div>
        
        {error && (
          <div className="mt-3 text-sm text-red-600 bg-red-50 p-3 rounded-md">
            {error}
          </div>
        )}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-center text-blue-800 mb-2">
          <Shield className="mr-2 h-5 w-5" />
          <span className="font-medium">Secure Payment</span>
        </div>
        <p className="text-sm text-blue-700">
          Your payment information is encrypted and secure. We use Stripe to process payments safely.
        </p>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium text-gray-900">
            {donationType === 'monthly' ? 'Monthly' : 'One-time'} Donation:
          </span>
          <span className="text-2xl font-bold text-primary">
            ${amount}
          </span>
        </div>

        <Button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full bg-gradient-coral hover:scale-105 transition-transform duration-200 text-white font-semibold py-4 text-lg"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing Payment...
            </>
          ) : (
            <>
              Complete ${amount} {donationType === 'monthly' ? 'Monthly' : ''} Donation
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

const StripeCheckout = ({ amount, donationType, donorInfo, onSuccess, onError, onCancel }) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Donation</h2>
          <p className="text-gray-600">
            Thank you for supporting Rising Edge Community!
          </p>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm
            amount={amount}
            donationType={donationType}
            donorInfo={donorInfo}
            onSuccess={onSuccess}
            onError={onError}
          />
        </Elements>

        <div className="mt-6 text-center">
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700 text-sm underline"
          >
            Cancel and return to donation form
          </button>
        </div>
      </div>
    </div>
  );
};

export default StripeCheckout;

