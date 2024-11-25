import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import 'leaflet/dist/leaflet.css';
import { useTheme } from "./context/ThemeContext";

// Pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";

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
  }, [isDarkMode]); // Re-run effect when theme changes


  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />
            
            {/* Cart Page */}
            <Route path="/cart" element={<CartPage />} />
            
            {/* Login Page */}
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
