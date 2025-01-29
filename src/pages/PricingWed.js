import React from 'react';
import '../assets/styles/PricingWed.css';

const PricingWed = () => {
  return (
    <div className="pricing-wed-container">
      <div className="pricing-wed-image-section">
        <img
          src={require('../assets/images/pricing/wedding.jpg')} 
          alt="Wedding set-up"
          className="pricing-wed-image"
        />
      </div>
      <div className="pricing-wed-details-section">
        <h2 className="pricing-wed-title">RATES AS OF 2025-2026</h2>
        <h3 className="pricing-wed-subtitle">WEDDING</h3>
        <p className="pricing-wed-note">
          exclusive for small weddings only <br></br> (50 pax / one location)
        </p>

        <div className="pricing-wed-info-container">
          <div className="pricing-wed-info">
            <h4 className="pricing-wed-package-title">THE INTIMATE</h4>
            <ul className="pricing-wed-features">
              <li>4-5 HRS</li>
              <li>2 PHOTOGRAPHERS</li>
              <li>WEDDING PHOTO COVERAGE</li>
              <li>1000 (HIGH RESOLUTION)</li> 
              <li>EDITED PICTURES</li> 
              <li>USING PREMIUM PRESETS</li>
              <li>5 PREMIUM FILM COLLAGE</li> 
              <li>PHOTO SLIDESHOW</li>
            </ul>

            <div className="pricing-wed-summary">
              <p className="pricing-wed-total-prices">TOTAL: 8K + Transpo <br></br>(Outside Lingayen)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingWed;
