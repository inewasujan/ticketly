"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Product from './components/Product';
import CheckoutButton from './components/CheckoutButton';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <Head>
        <title>Shopping Cart</title>
      </Head>

      <h1>My Shopping App</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Product id={1} name="Item 1" price={10.99} addToCart={addToCart} />
        <Product id={2} name="Item 2" price={19.99} addToCart={addToCart} />
        <Product id={3} name="Item 3" price={14.99} addToCart={addToCart} />
        <Product id={4} name="Item 4" price={9.99} addToCart={addToCart} />
        <Product id={5} name="Item 5" price={24.99} addToCart={addToCart} />
      </div>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Total: ${calculateTotal().toFixed(2)}</h2>

      <Elements stripe={stripePromise}>
        <CheckoutButton total={calculateTotal()} />
      </Elements>
    </div>
  );
};

export default Home;
