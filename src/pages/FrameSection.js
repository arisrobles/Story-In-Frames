import React, { useEffect } from "react";
import "../assets/styles/FrameSection.css"; // External CSS file for styling

// Import images
import mainImage from "../assets/images/frames/main-frame.png";
import portrait1 from "../assets/images/frames/frame1.png";
import portrait2 from "../assets/images/frames/frame2.png";
import portrait3 from "../assets/images/frames/frame3.png";

const FramesSection = () => {
  useEffect(() => {
    const section = document.querySelector(".collage-container");
    const mainImageEl = document.querySelector(".main-images");
    const portraitImages = document.querySelectorAll(".portraits-image");

    // Create an IntersectionObserver to detect when section is about to come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations as soon as the section starts to come into view
            section.classList.add("visible");
            mainImageEl.classList.add("visible");
            portraitImages.forEach((image) => image.classList.add("visible"));
          } else {
            // Remove the visible class if it goes out of view (optional, if you want to hide again)
            section.classList.remove("visible");
            mainImageEl.classList.remove("visible");
            portraitImages.forEach((image) => image.classList.remove("visible"));
          }
        });
      },
      {
        rootMargin: "0px 0px -20% 0px", // Trigger when 20% of the section is visible
        threshold: 0, // Activate when any part of the section enters the viewport
      }
    );

    // Start observing the section
    observer.observe(section);

    return () => {
      observer.disconnect(); // Cleanup observer when component unmounts
    };
  }, []);

  return (
    <div className="collage-container">
      {/* Right Section with Portrait Images */}
      <div className="right-section">
        <div className="portrait-section">
          <img src={portrait1} alt="Portrait 1" className="portraits-image" />
          <img src={portrait2} alt="Portrait 2" className="portraits-image" />
          <img src={portrait3} alt="Portrait 3" className="portraits-image" />
        </div>
      </div>

      {/* Left Section with Main Image */}
      <div className="left-section">
        <img src={mainImage} alt="Main Portrait" className="main-images" />
      </div>
    </div>
  );
};

export default FramesSection;
