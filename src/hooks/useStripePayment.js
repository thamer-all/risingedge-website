import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

export const useStripePayment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [paymentIntent, setPaymentIntent] = useState(null);
  
  const stripe = useStripe();
  const elements = useElements();

  const processPayment = async (amount, donorInfo, donationType = 'one-time') => {
    if (!stripe || !elements) {
      setError('Stripe has not loaded properly. Please refresh and try again.');
      return false;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Step 1: Create payment intent on your backend
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(amount * 100), // Convert to cents
          currency: 'usd',
          donor_info: donorInfo,
          donation_type: donationType,
          metadata: {
            organization: 'Rising Edge Community',
            donor_name: `${donorInfo.firstName} ${donorInfo.lastName}`,
            donor_email: donorInfo.email,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const { client_secret, payment_intent_id } = await response.json();

      // Step 2: Confirm payment with Stripe
      const cardElement = elements.getElement(CardElement);
      
      const { error: stripeError, paymentIntent: confirmedPaymentIntent } = await stripe.confirmCardPayment(
        client_secret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: `${donorInfo.firstName} ${donorInfo.lastName}`,
              email: donorInfo.email,
              phone: donorInfo.phone || undefined,
            },
          }
        }
      );

      if (stripeError) {
        setError(stripeError.message);
        return false;
      }

      if (confirmedPaymentIntent.status === 'succeeded') {
        setSucceeded(true);
        setPaymentIntent(confirmedPaymentIntent);
        
        // Step 3: Log successful donation (optional analytics)
        await logDonation({
          amount,
          donor: donorInfo,
          payment_intent_id: confirmedPaymentIntent.id,
          donation_type: donationType,
        });

        return true;
      } else {
        setError('Payment was not successful. Please try again.');
        return false;
      }

    } catch (err) {
      console.error('Payment processing error:', err);
      setError(
        err.message || 'An unexpected error occurred. Please try again.'
      );
      return false;
    } finally {
      setIsProcessing(false);
    }
  };

  const logDonation = async (donationData) => {
    try {
      await fetch('/api/log-donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });
    } catch (error) {
      console.error('Error logging donation:', error);
      // Don't throw error here - payment already succeeded
    }
  };

  const reset = () => {
    setIsProcessing(false);
    setError(null);
    setSucceeded(false);
    setPaymentIntent(null);
  };

  return {
    processPayment,
    isProcessing,
    error,
    succeeded,
    paymentIntent,
    reset,
  };
}; 