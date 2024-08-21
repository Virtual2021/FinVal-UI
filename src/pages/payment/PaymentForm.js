import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { apiURL } from '../../config/Config';

const stripePromise = loadStripe('pk_test_51OISelSJ4yR6OnGd0FMAcl1Yy7E6ZNy9R39tTT4dCl0ndN1cvfxmrKjXo8JtBikvYMwuV5ymxu9Ix8Bp90OAVREo00AzmAbuli');

const PaymentForm = () => {
  const handleClick = async (event) => {
    const { data } = await axios.post(apiURL + '/stripe/create-checkout-session');
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
    if (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <button role="link" className="btn btn-large btn-round-edge bg-blue submit text-white w-100 fin-btn" onClick={handleClick}>
        Checkout
      </button>
    </div>
  );
};

export default PaymentForm;
