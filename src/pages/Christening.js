import React, { useEffect, useRef } from "react";
import "../assets/styles/Christening.css"; // Import the external CSS file
import christeningImage from "../assets/images/christening/avery.jpg"; // Corrected path
import image1 from "../assets/images/christening/christeningRow.jpg"; // Add your image path
import image2 from "../assets/images/christening/christeningRow2.jpg"; // Add your image path
import image3 from "../assets/images/christening/christeningRow3.jpg"; // Add your image path

const Christening = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); // Trigger animation
        }
      },
      { threshold: 0.5 } // The image should be at least 50% in view to trigger the animation
    );

    if (imageRef.current) {
      observer.observe(imageRef.current); // Start observing the image
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <>
      <section className="christening-container">
        <img
          src={christeningImage}
          alt="Christening Invitation"
          className="christening-image"
          ref={imageRef}
        />
      </section>

      {/* Second Section with a background image */}
      <section className="second-section">
      </section>

      {/* Third Section with 3 images in separate containers */}
      <section className="image-row-section">
        <div className="image-container image-container-1">
          <img src={image1} alt="Image 1" className="image-1" />
        </div>
        <div className="image-container image-container-2">
          <img src={image2} alt="Image 2" className="image-2" />
        </div>
        <div className="image-container image-container-3">
          <img src={image3} alt="Image 3" className="image-3" />
        </div>
      </section>
    </>
  );
};

export default Christening;
