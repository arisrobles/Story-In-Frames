import React, { useEffect } from "react";
import "../assets/styles/Honest.css"; // Import your CSS file

const Honest = () => {
  useEffect(() => {
    // IntersectionObserver to handle animations
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const elementsToAnimate = document.querySelectorAll(
      ".honest-section, .honest-container, .collage-left, .collage-right, .honest-image"
    );

    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="honest-section">
      {/* Container for all images */}
      <div className="honest-container">
        {/* Left Collage Image */}
        <div className="collage-left">
          <img
            src={require("../assets/images/honest/left.jpg")}
            alt="Left Collage"
          />
        </div>

        {/* Honest Text as Image in the Center */}
        <div className="honest-image">
          <img
            src={require("../assets/images/honest/HonestIcon.png")}
            alt="Honest Text"
          />
        </div>

        {/* Right Collage Image */}
        <div className="collage-right">
          <img
            src={require("../assets/images/honest/right.jpg")}
            alt="Right Collage"
          />
        </div>
      </div>
    </section>
  );
};

export default Honest;
