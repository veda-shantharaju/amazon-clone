import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignupPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>

        <form className="auth-form">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          {isSignup && (
            <div className="form-group">
              <label>Confirm Password:</label>
              <input type="password" placeholder="Confirm your password" />
            </div>
          )}

          <button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</button>
        </form>

        <div className="toggle-form">
          <p>
            {isSignup ? "Already have an account? " : "Don't have an account? "}
            <span onClick={toggleForm} className="toggle-link">
              {isSignup ? 'Log In' : 'Sign Up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
