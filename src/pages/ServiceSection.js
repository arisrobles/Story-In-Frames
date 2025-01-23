import React from 'react';
import '../assets/styles/ServiceSection.css';  // Make sure to create and link your CSS file

const ServiceSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="text-container">
        <img
          className="services-title-image"
          src={require("../assets/images/logos/service-title.png")} // Replace with your actual image path
          alt="Services Title"
        />
        <p className="services-description">Affordable & Flexible Packages to Suit Your Budget</p>
      </div>
      <div className="content-container">
        <div className="image-container">
          <img
            className="camera-icon"
            src={require("../assets/images/logos/service-image.png")} // Update with the actual image path
            alt="Camera Icon"
          />
        </div>
        <div className="services-list">
          <ul>
            <li>PRENUP</li>
            <li>PRE-DEBUT</li>
            <li>BIRTHDAY</li>
            <li>KIDS BIRTHDAY</li>
            <li>CHRISTENING</li>
            <li>CORPORATE EVENTS</li>
            <li>FAMILY PORTRAITS</li>
            <li>ETC...</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
console.log('Rendering ServiceSection component');
