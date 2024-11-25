import React, { useState, useEffect } from 'react';
import './CartPage.css';  // Assuming the CSS is named CartPage.css or similar

const CartPageComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (parseInt(item.price.replace('₹', '')) * item.quantity);
    }, 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2>Your Cart</h2>

        {cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty!</p>
        )}

        <div className="cart-summary">
          <h3>Total: ₹{calculateTotal()}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPageComponent;
