import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <img 
        src="/Images/Logo.svg" 
        alt="Logo" 
        className="navbar-logo"
      />
      
      <div className="navbar-search">
        <input 
          type="text" 
          className="search-input" 
          placeholder='SEARCH FOR " GUITARS "' 
        />
        <img 
          src="/Images/Search icon.svg" 
          alt="Search" 
          className="search-icon"
        />
      </div>
      
      <div className="navbar-right">
        <img 
          src="/Images/Cart icon.svg" 
          alt="Cart" 
          className="navbar-icon"
        />
        <img 
          src="/Images/User icon.svg" 
          alt="User" 
          className="navbar-icon"
        />
        <button className="signup-login-btn">
          Sign up / Log in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
