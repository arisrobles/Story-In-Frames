import React, { useEffect } from "react";
import "../assets/styles/PricingCorpo.css";

const PricingCorpo = () => {
  useEffect(() => {
    // Function to handle visibility detection
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add the visible class
        } else {
          entry.target.classList.remove("visible"); // Remove when out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    const elementsToAnimate = document.querySelectorAll(
      ".pricing-corpo-container, .pricing-corpo-image, .pricing-corpo-details-overlay, .pricing-corpo-rates-title, .pricing-corpo-event-type, .pricing-corpo-features-list li, .pricing-corpo-total-price"
    );

    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

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
          <li>EDITED PICTURES USING <br /> PREMIUM PRESETS</li>
          <li>ALL FILES SENT THROUGH <br /> GDRIVE</li>
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
