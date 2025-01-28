import React, { useEffect, useRef } from "react";
import "../assets/styles/Christening.css"; // Import the external CSS file
import christeningImage from "../assets/images/christening/avery.jpg"; // Corrected path
import image1 from "../assets/images/christening/christeningRow.jpg"; // Add your image path
import image2 from "../assets/images/christening/christeningRow2.jpg"; // Add your image path
import image3 from "../assets/images/christening/christeningRow3.jpg"; // Add your image path

const Christening = () => {
  // Refs for all the elements you want to animate
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Trigger animation
        }
      },
      { threshold: 0.5 } // The element should be at least 50% in view to trigger the animation
    );

    // Observe each item in the section
    sectionRefs.current.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      sectionRefs.current.forEach((item) => {
        observer.unobserve(item); // Cleanup observer
      });
    };
  }, []);

  return (
    <>
      <section className="christening-container">
        <img
          src={christeningImage}
          alt="Christening Invitation"
          className="christening-image"
          ref={(el) => (sectionRefs.current[0] = el)} // Add to the refs array
        />
      </section>

      {/* Second Section with a background image */}
      <section
        className="second-section"
        ref={(el) => (sectionRefs.current[1] = el)} // Add to the refs array
      ></section>

      {/* Third Section with 3 images in separate containers */}
      <section className="image-row-section">
        <div className="image-container image-container-1">
          <img
            src={image1}
            alt="Image 1"
            className="image-1"
            ref={(el) => (sectionRefs.current[2] = el)} // Add to the refs array
          />
        </div>
        <div className="image-container image-container-2">
          <img
            src={image2}
            alt="Image 2"
            className="image-2"
            ref={(el) => (sectionRefs.current[3] = el)} // Add to the refs array
          />
        </div>
        <div className="image-container image-container-3">
          <img
            src={image3}
            alt="Image 3"
            className="image-3"
            ref={(el) => (sectionRefs.current[4] = el)} // Add to the refs array
          />
        </div>
      </section>
    </>
  );
};

export default Christening;
