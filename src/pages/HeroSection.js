import React from 'react';
import '../assets/styles/HeroSection.css';
import logo from '../assets/images/logos/hero-logo.png'; 
import decorativeBorder from '../assets/images/logos/hero-design.png';

const HeroSection = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Story In Frames Logo" className="logo-image" />
      </div>
      <nav className="nav-menu">
        <a href="#about-us" className="nav-link">ABOUT US</a>
        <a href="#services" className="nav-link">SERVICES</a>
        <a href="#gallery" className="nav-link">GALLERY</a>
        <a href="#packages" className="nav-link">PACKAGES</a>
        <a href="#booking" className="nav-link">BOOKING</a>
        <a href="#booking" className="nav-link">FAQS</a>
      </nav>
      <div className="decorative-border"></div>
      <div className="decorative-image">
        <img src={decorativeBorder} alt="Decorative Border" className="decorative-border-image" />
      </div>
    </header>
  );
};

export default HeroSection;
