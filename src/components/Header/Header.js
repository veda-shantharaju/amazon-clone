import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import AutoLocation from './AutoLocation';
import SearchBar from './SearchBar';
import { FaShoppingCart, FaUserAlt, FaSun, FaMoon } from 'react-icons/fa'; // Cart, User, Sun, and Moon icons
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = ({ onSearch }) => {
  const { isDarkMode, toggleTheme } = useTheme(); // Get the theme state and toggle function
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

        {/* Theme Toggle Section */}
        <div className="theme-toggle">
          <button onClick={toggleTheme} className="theme-button">
            {isDarkMode ? <FaSun /> : <FaMoon />} {/* Display sun/moon icon based on theme */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
