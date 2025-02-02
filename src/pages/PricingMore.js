import React, { useEffect } from 'react';
import '../assets/styles/PricingMore.css';

const PricingMore = () => {
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
      '.pricing-more-container, .pricing-more-image, .pricing-more-details-section, .pricing-more-wed-title, .pricing-more-other-subtitle, .pricing-more-features li, .pricing-more-total-price'
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
              <li>400+ (HIGH RESOLUTION)</li>
              <li>EDITED PICTURES</li>
              <li>USING PREMIUM PRESETS</li>
              <li>10 PREMIUM FILM COLLAGE</li>
              <li>ALL FILES SENT TO GDRIVE</li>
              <li>OR CAB VE STORED THROUGH</li>
              <li>FLASHDRIVE</li>
            </ul>

            <div className="pricing-more-summary">
              <p className="pricing-more-total-price">
                TOTAL: 4000 + Transpo <br />
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
