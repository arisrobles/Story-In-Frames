import React from "react";
import "../assets/styles/PricingCorpo.css";

const PricingCorpo = () => {
  return (
    <div className="pricing-corpo-container">
      <div className="pricing-corpo-image-section">
        <img
          src={require("../assets/images/pricing/background.jpg")}
          alt="Corporate Event"
          className="pricing-corpo-image"
        />
      </div>
      <div className="pricing-corpo-details-overlay">
        <h2 className="pricing-corpo-rates-title">RATES AS OF 2025-2026</h2>
        <h3 className="pricing-corpo-event-type">CORPORATE / OCCASIONAL EVENTS</h3>
        <ul className="pricing-corpo-features-list">
          <li>3-4 HRS</li>
          <li>1000 (HIGH RESOLUTION)</li>
          <li>EDITED PICTURES USING <br></br>PREMIUM PRESETS</li>
          <li>ALL FILES SENT THROUGH <br></br>GDRIVE</li>
        </ul>
        <p className="pricing-corpo-total-price">
          TOTAL: 4K + Transpo <br />
          (Outside Lingayen)
        </p>
      </div>
    </div>
  );
};

export default PricingCorpo;
