// components/Cart.js
import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((productId) => (
          <li key={productId}>{productId} - Quantity: 1</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
