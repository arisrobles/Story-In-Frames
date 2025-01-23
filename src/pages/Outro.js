import React from "react";
import "../assets/styles/Outro.css";

const Outro = () => {
  return (
    <div className="outro-container">
      <div className="image-section">
        <img
          src={require("../assets/images/events/banner.png")} // Change to the path of your uploaded image
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
