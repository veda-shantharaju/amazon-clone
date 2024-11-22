import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import 'leaflet/dist/leaflet.css';


// Pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";

// Global Styles
import "./styles/global.css";

const App = () => {
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
