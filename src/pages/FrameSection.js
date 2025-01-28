import React, { useEffect } from "react";
import "../assets/styles/FrameSection.css";

// Import images
import mainImage from "../assets/images/frames/main-frame.jpg";
import portraitImage from "../assets/images/frames/frame.jpg";

const FramesSection = () => {
  useEffect(() => {
    const section = document.querySelector(".collage-container");
    const images = document.querySelectorAll(".image");

    // IntersectionObserver to trigger animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("visible");
            images.forEach((img) => img.classList.add("visible"));
          } else {
            section.classList.remove("visible");
            images.forEach((img) => img.classList.remove("visible"));
          }
        });
      },
      {
        rootMargin: "0px 0px -20% 0px",
        threshold: 0,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="collage-container">
      {/* Wrapper for both images */}
      <div className="images-wrapper">
        <img src={portraitImage} alt="Portrait Frame" className="image" />
        <img src={mainImage} alt="Main Frame" className="image" />
      </div>
    </div>
  );
};

export default FramesSection;
