import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Logo */}
        <div className="logo-container">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="REVO Logo" className="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {/* Left Navigation */}
          <div className="nav-left">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/about" className="nav-link">ABOUT REVO</Link>
          </div>

          {/* Right Navigation */}
          <div className="nav-right">
            <Link to="/team" className="nav-link">OUR TEAM</Link>
            <Link to="/contact" className="nav-link">CONTACT US</Link>
          </div>
        </nav>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
        
        {/* Mobile Navigation Menu */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-content">
            <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>HOME</Link>
            <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>ABOUT REVO</Link>
            <Link to="/team" className="mobile-nav-link" onClick={closeMobileMenu}>OUR TEAM</Link>
            <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>CONTACT US</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
