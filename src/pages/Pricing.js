import React, { useEffect } from 'react';
import '../assets/styles/Pricing.css'; // Import the CSS file for styles

const PrenupRates = () => {
  useEffect(() => {
    // Function to handle visibility detection
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        // If the element is intersecting (entering the viewport), trigger animation
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the visible class
        } else {
          entry.target.classList.remove('visible'); // Remove the visible class when out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Observe each element for visibility detection
    const elementsToAnimate = document.querySelectorAll(
      '.prenup-container, .rates-container, .rate-card'
    );

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      elementsToAnimate.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div id='packages' className="prenup-container">
      <h2 className="title">RATES AS OF 2025-2026</h2>
      <h1 className="subtitle">PRENUP</h1>
      <p className="subsub">Photo Only</p>
      <div className="rates-container">
        <div className="rate-card">
          <div className="rate-icon">
            <img src={require('../assets/images/pricing/bloomIcon.png')} alt="Bloom Icon" />
          </div>
          <h3 className="rate-name">BLOOM</h3>
          <ul className="rate-details">
            <li>3-4HRS</li>
            <li>600 raw file</li>
            <li>300 (HIGH RESOLUTION)</li>
            <li>EDITED PICTURES USING PREMIUM PRESETS</li>
            <li>10 PREMIUM COLLAGE</li>
          </ul>
          <p className="total">TOTAL: 3K + TRANSPO <br /> (OUTSIDE LINGAYEN)</p>
        </div>

        <div className="rate-card">
          <div className="rate-icon">
            <img src={require('../assets/images/pricing/Lustreicon.png')} alt="Lustre Icon" />
          </div>
          <h3 className="rate-name">LUSTRE</h3>
          <ul className="rate-details">
            <li>3-5HRS</li>
            <li>UNLIMITED SHOT</li>
            <li>500 (HIGH RESOLUTION)</li>
            <li>EDITED PICTURES USING PREMIUM PRESETS</li>
            <li>12 PREMIUM COLLAGE</li>
          </ul>
          <p className="total">TOTAL: 4K + TRANSPO <br /> (OUTSIDE LINGAYEN)</p>
        </div>

        <div className="rate-card">
          <div className="rate-icon">
            <img src={require('../assets/images/pricing/Aurora icon.png')} alt="Aurora Icon" />
          </div>
          <h3 className="rate-name">AURORA</h3>
          <ul className="rate-details">
            <li>3-5HRS</li>
            <li>UNLIMITED SHOT</li>
            <li>700 (HIGH RESOLUTION)</li>
            <li>EDITED PICTURES USING PREMIUM PRESETS</li>
            <li>15 PREMIUM COLLAGE</li>
            <li>PHOTO SLIDESHOW</li>
            <li>PHOTOS WILL BE STORED IN FLASHDRIVE</li>
          </ul>
          <p className="total">TOTAL: 5500 + TRANSPO <br /> (OUTSIDE LINGAYEN)</p>
        </div>
      </div>
    </div>
  );
};

export default PrenupRates;
