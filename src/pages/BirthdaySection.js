import React, { useEffect, useRef } from 'react';
import '../assets/styles/BirthdaySection.css';

const BirthdaySection = () => {
  const singleImageRef = useRef(null);
  const collageImageRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Remove for repeated transitions
        }
      });
    };

    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (singleImageRef.current) observer.observe(singleImageRef.current);
    if (collageImageRef.current) observer.observe(collageImageRef.current);

    return () => {
      // Cleanup observer
      if (singleImageRef.current) observer.unobserve(singleImageRef.current);
      if (collageImageRef.current) observer.unobserve(collageImageRef.current);
    };
  }, []);

  return (
    <div className="image-layout">
      <div className="single-image" ref={singleImageRef}>
        <img
          src={require('../assets/images/birthday/birthday4.jpg')} // Replace with the actual filename
          alt="Single image"
        />
      </div>
      <div className="collage-image" ref={collageImageRef}>
        <img
          src={require('../assets/images/birthday/birthday5.jpg')} // Replace with the actual filename
          alt="Collage image"
        />
      </div>
    </div>
  );
};

export default BirthdaySection;
