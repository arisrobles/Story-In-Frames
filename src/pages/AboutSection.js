import React from "react";
import "../assets/styles/AboutSection.css";

function AboutSection() {
  return (
    <div id="about-us" className="warm-moments-container">
      <div className="image-section">
        <img
          src={require("../assets/images/logos/camera.png")} // Adjust the filename if needed
          alt="Camera in hand"
          className="camera-image"
        />
      </div>
      <div className="text-section">
        <img
          src={require("../assets/images/logos/hello-image.png")} // Adjust the filename if needed
          alt="Hello"
          className="hello-image"
        />
        <p className="description">
          AT STORY IN FRAMES. WARM MOMENTS, WE BELIEVE EVERY PICTURE TELLS A
          UNIQUE STORY AND CAPTURES THE WARMTH OF LIFE’S MOST CHERISHED MOMENTS.
          SPECIALIZING IN AUTHENTIC AND HEARTFELT PHOTOGRAPHY, WE TURN FLEETING
          MEMORIES INTO TIMELESS TREASURES. WE ARE DEDICATED TO PRESERVING YOUR
          STORY—ONE FRAME AT A TIME.
        </p>
        <p className="description">
          WE VALUE EVERY COLOR TONE, WHICH IS WHY WE OFFER A VARIETY OF PREMIUM
          PRESETS AND CUSTOM COLLAGES TO BRING OUT THE CINEMATIC ESSENCE OF YOUR
          MOMENTS.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
