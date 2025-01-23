import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/Birthday.css";

const Birthday = () => {
  const [inView, setInView] = useState([false, false, false]); // Track the visibility of images
  const imageRefs = [useRef(null), useRef(null), useRef(null)]; // Refs for each image

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setInView((prevInView) => {
              const newInView = [...prevInView];
              newInView[index] = true; // Set the image as visible
              return newInView;
            });
          } else {
            setInView((prevInView) => {
              const newInView = [...prevInView];
              newInView[index] = false; // Reset when out of view
              return newInView;
            });
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the image is in view
      }
    );

    // Observe each image element
    imageRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="photo-row">
      {/* First Image */}
      <div
        ref={imageRefs[0]}
        className={`image-wrapper ${inView[0] ? "in-view" : ""} first-image-card`}
      >
        <img
          src={require("../assets/images/birthday/birthday1.png")}
          alt="Baby Photo 1"
        />
      </div>

      {/* Second Image */}
      <div
        ref={imageRefs[1]}
        className={`image-wrapper ${inView[1] ? "in-view" : ""}`}
      >
        <img
          src={require("../assets/images/birthday/birthday2.png")}
          alt="Baby Photo 2"
        />
      </div>

      {/* Third Image */}
      <div
        ref={imageRefs[2]}
        className={`image-wrapper ${inView[2] ? "in-view" : ""}`}
      >
        <img
          src={require("../assets/images/birthday/birthday3.png")}
          alt="Baby Photo 3"
        />
      </div>
    </div>
  );
};

export default Birthday;
