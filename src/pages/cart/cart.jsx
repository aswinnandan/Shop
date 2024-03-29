import React from 'react';
import './Cart.css'; 

const Cart = () => {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>Your cart is empty.</p>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default Cart;
