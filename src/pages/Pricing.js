import React, { useEffect, useRef } from 'react';
import '../assets/styles/Pricing.css'; // Import the CSS file for styles

const PrenupRates = () => {
  // Refs for each rate card to be observed
  const cardRefs = useRef([]);

  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.25, // Trigger when 25% of the element is visible
  };

  // Initialize the IntersectionObserver
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add visible class to trigger animation
        }
      });
    }, observerOptions)
  );

  // Observe each rate card when component mounts
  useEffect(() => {
    cardRefs.current.forEach((card) => observer.current.observe(card));

    // Cleanup observers when component unmounts
    return () => {
      cardRefs.current.forEach((card) => observer.current.unobserve(card));
    };
  }, []);

  return (
    <div id='packages' className="prenup-container">
      <h2 className="title">RATES AS OF 2025-2026</h2>
      <h1 className="subtitle">PRENUP</h1>
      <p className="subsub">Photo Only</p>
      <div className="rates-container">
        {/* Bloom Rate Card */}
        <div 
          className="rate-card" 
          ref={(el) => cardRefs.current[0] = el}
        >
          <div className="rate-icon">
            <img src={require('../assets/images/pricing/bloomIcon.png')} alt="Bloom Icon" />
          </div>
          <h3 className="rate-name">BLOOM</h3>
          <ul className="rate-details">
            <li>3-4HRS</li>
            <li>UNLIMITED SHOT</li>
            <li>400 (HIGH RESOLUTION)</li>
            <li>EDITED PICTURES USING PREMIUM PRESETS</li>
            <li>4 PREMIUM COLLAGE</li>
          </ul>
          <p className="total">TOTAL: 3K + TRANSPO <br /> (OUTSIDE LINGAYEN)</p>
        </div>

        {/* Lustre Rate Card */}
        <div 
          className="rate-card" 
          ref={(el) => cardRefs.current[1] = el}
        >
          <div className="rate-icon">
            <img src={require('../assets/images/pricing/Lustreicon.png')} alt="Lustre Icon" />
          </div>
          <h3 className="rate-name">LUSTRE</h3>
          <ul className="rate-details">
            <li>3-4HRS</li>
            <li>UNLIMITED SHOT</li>
            <li>600 (HIGH RESOLUTION)</li>
            <li>EDITED PICTURES USING PREMIUM PRESETS</li>
            <li>7 PREMIUM COLLAGE</li>
          </ul>
          <p className="total">TOTAL: 5K + TRANSPO <br /> (OUTSIDE LINGAYEN)</p>
        </div>

        {/* Aurora Rate Card */}
        <div 
          className="rate-card" 
          ref={(el) => cardRefs.current[2] = el}
        >
          <div className="rate-icon">
            <img src={require('../assets/images/pricing/Aurora icon.png')} alt="Aurora Icon" />
          </div>
          <h3 className="rate-name">AURORA</h3>
          <ul className="rate-details">
            <li>3-4HRS</li>
            <li>UNLIMITED SHOT</li>
            <li>700 (HIGH RESOLUTION)</li>
            <li>EDITED PICTURES USING PREMIUM PRESETS</li>
            <li>10 PREMIUM COLLAGE</li>
            <li>PHOTO SLIDESHOW</li>
          </ul>
          <p className="total">TOTAL: 7K + TRANSPO <br /> (OUTSIDE LINGAYEN)</p>
        </div>
      </div>
    </div>
  );
};

export default PrenupRates;
