// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGooglePlay, FaAppStore } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-title">Bigbasket</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Become A Bigbasket Rider</a></li>
              <li><a href="#">In News</a></li>
              <li><a href="#">Green Bigbasket</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Careers At Bigbasket</a></li>
              <li><a href="#">bb Instant</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Help</h3>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">bb Wallet FAQs</a></li>
              <li><a href="#">bb Wallet T&Cs</a></li>
              <li><a href="#">Vendor Connect</a></li>
            </ul>
          </div>
        </div>

        {/* Download App Section */}
        <div className="footer-section">
          <h3 className="footer-title">Download the App</h3>
          <div className="app-links">
            <a href="#" className="app-link">
              <FaGooglePlay size={40} color="white" />
            </a>
            <a href="#" className="app-link">
              <FaAppStore size={40} color="white" />
            </a>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link">
              <FaFacebook size={30} color="white" />
            </a>
            <a href="#" className="social-link">
              <FaTwitter size={30} color="white" />
            </a>
            <a href="#" className="social-link">
              <FaInstagram size={30} color="white" />
            </a>
            <a href="#" className="social-link">
              <FaGooglePlay size={30} color="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
