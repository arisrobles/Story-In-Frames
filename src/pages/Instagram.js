import React, { useEffect } from "react";
import "../assets/styles/Instagram.css";

const Instagram = () => {
  const images = [
    require("../assets/images/instagram/instagram1.png"),
    require("../assets/images/instagram/instagram2.png"),
    require("../assets/images/instagram/instagram3.png"),
    require("../assets/images/instagram/instagram4.png"),
  ];

  useEffect(() => {
    const imageCards = document.querySelectorAll('.image-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // Optionally reset animation when the image goes out of view
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 }); // Trigger animation when 50% of the element is in view

    imageCards.forEach(card => observer.observe(card)); // Observe each image card

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, []);

  return (
    <div className="instagram-container"> 
        <div className="top-decoration"></div>
        <div className="images-grid">
          {images.map((image, index) => (
            <div className="image-card" key={index}>
              <img src={image} alt={`${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="bottom-decoration"></div>
    </div>
  );
};

export default Instagram;
