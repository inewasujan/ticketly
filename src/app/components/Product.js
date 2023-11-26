"Use Client";

import React, { useState } from 'react';

const Product = ({ id, name, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id, name, price });
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', textAlign: 'center' }}>
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
