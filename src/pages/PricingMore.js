import React from 'react';
import '../assets/styles/PricingMore.css';

const PricingMore = () => {
  return (
    <div className="pricing-more-container">
      <div className="pricing-more-details-section">
        <h2 className="pricing-more-wed-title">RATES AS OF 2025-2026</h2>
        <h3 className="pricing-more-other-subtitle">
          PRE-DEBUT. DEBUT. PRE-BIRTHDAY. KIDS BIRTHDAY. <br />
          CHRISTENING. FAMILY PORTRAITS
        </h3>

        <div className="pricing-more-infos-container">
          <div className="pricing-more-infos">
            <ul className="pricing-more-features">
              <li>3-4 HRS</li>
              <li>350+ (HIGH RESOLUTION)</li>
              <li>EDITED PICTURES</li>
              <li>USING PREMIUM PRESETS</li>
              <li>10 PREMIUM FILM COLLAGE</li>
              <li>ALL FILES SENT TO GDRIVE</li>
            </ul>

            <div className="pricing-more-summary">
              <p className="pricing-more-total-price">
                TOTAL: 4K + Transpo <br />
                (Outside Lingayen)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-more-image-section">
        <img
          src={require('../assets/images/pricing/moon.jpg')}
          alt="Event setup"
          className="pricing-more-image"
        />
      </div>
    </div>
  );
};

export default PricingMore;
