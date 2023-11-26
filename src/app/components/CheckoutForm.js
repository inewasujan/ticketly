// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     // Your payment processing logic here

//     // Example: Create a payment method
//     const { token, error } = await stripe.createToken(elements.getElement(CardElement));

//     if (error) {
//       console.error(error);
//     } else {
//       console.log(token);
//       // Handle successful payment, send token to your server
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;
