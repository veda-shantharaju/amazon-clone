import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import AutoLocation from './AutoLocation';
import SearchBar from './SearchBar';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'; // Cart and User icons
import './Header.css';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Left Section (AutoLocation and SearchBar) */}
        <AutoLocation />
        <SearchBar onSearch={onSearch} />
      </div>

      {/* Right Section (Login/Signup and Cart) */}
      <div className="header-right">
        {/* Login/Signup Section */}
        <div className="auth-links">
          <Link to="/login" className="auth-link">
            <FaUserAlt /> Login/Signup
          </Link>
        </div>

        {/* Cart Section */}
        <div className="cart">
          <Link to="/cart" className="cart-link">
            <FaShoppingCart /> Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
