import React from 'react';
import '../assets/styles/Pricing.css'; // Import the CSS file for styles

const PrenupRates = () => {
  return (
    <div id='packages' className="prenup-container">
      <h2 className="title">RATES AS OF 2025-2026</h2>
      <h1 className="subtitle">PRENUP</h1>
      <p className="subsub">Photo Only</p>
      <div className="rates-container">
        <div className="rate-card">
          <div className="rate-icon">
            <img src={require('../assets/images/logos/hello-image.png')} alt="Bloom Icon" />
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

        <div className="rate-card">
          <div className="rate-icon">
            <img src={require('../assets/images/logos/hello-image.png')} alt="Lustre Icon" />
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

        <div className="rate-card">
          <div className="rate-icon">
            <img src={require('../assets/images/logos/hello-image.png')} alt="Aurora Icon" />
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
