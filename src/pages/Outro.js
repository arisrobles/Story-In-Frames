import React, { useEffect } from "react";
import "../assets/styles/Outro.css";

const Outro = () => {
  useEffect(() => {
    // Function to handle visibility detection
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add visible class
        } else {
          entry.target.classList.remove("visible"); // Remove when out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    const elementsToAnimate = document.querySelectorAll(
      ".outro-container, .outro-image, .text-overlay, .outro-text, .decorative-img"
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
    <div className="outro-container">
      <div className="image-section">
        <img
          src={require("../assets/images/pricing/outro.jpg")} // Path to your background image
          alt="Outro Background"
          className="outro-image"
        />
      </div>
      <div className="text-overlay">
        <h2 className="outro-text">
          IF YOU WISH TO ADD VIDEO <br />
          SERVICES, WE HAVE PARTNER <br />
          VIDEO TEAMS WE ARE <br />
          COLLABORATING WITH IF YOU <br />
          NEED ONE.
        </h2>
        <div className="decorative-image">
          <img
            src={require("../assets/images/logos/hero-design.png")} // Path to your decorative image
            alt="Decorative Design"
            className="decorative-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Outro;
