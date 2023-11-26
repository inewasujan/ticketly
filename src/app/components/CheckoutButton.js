"Use Client";

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutButton = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleCheckout = async () => {
    // Add your server-side logic for creating a payment intent and handling the payment

    // Example: Create a payment intent
    const { client_secret, error } = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: total * 100 }), // Convert total to cents
    }).then((res) => res.json());

    if (error) {
      console.error(error);
      return;
    }

    // Confirm the payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (confirmError) {
      console.error(confirmError);
    } else {
      console.log(paymentIntent);
      // Handle successful payment, e.g., show a success message, clear the cart, etc.
    }
  };

  return (
    <div>
      <CardElement />
      <button onClick={handleCheckout} disabled={!stripe}>
        Checkout ${total.toFixed(2)}
      </button>
    </div>
  );
};

export default CheckoutButton;
