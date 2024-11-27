import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import 'leaflet/dist/leaflet.css';
import './styles/global.css';
import { useTheme } from "./context/ThemeContext";
import { products } from './data/productdata';

// Pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from './pages/ProductPage';

// Global Styles
import "./styles/global.css";

const App = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state

  // Apply dark theme to the body when dark mode is active
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage products={products} />} />
            
            {/* Cart Page */}
            <Route path="/cart" element={<CartPage />} />
            
            {/* Login Page */}
            <Route path="/login" element={<LoginPage />} />
            
            <Route path="/products/:category" element={<ProductPage products={products} />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
