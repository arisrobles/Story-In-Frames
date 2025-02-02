import React, { useEffect, useRef } from 'react';
import '../assets/styles/Event4.css'; // Import the CSS file for styles

const Event4 = () => {
  // Ref for storing image elements
  const imageRefs = useRef([]);

  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.25, // Trigger when 25% of the element is visible
  };

  // Initialize the IntersectionObserver
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add visible class to trigger animation
        }
      });
    }, observerOptions)
  );

  // Observe images when component mounts
  useEffect(() => {
    imageRefs.current.forEach((imgRef) => observer.current.observe(imgRef));

    // Clean up observers on unmount
    return () => {
      imageRefs.current.forEach((imgRef) => observer.current.unobserve(imgRef));
    };
  }, []);

  return (
    <div className="event4-container">
      <div className="event4-grid">
        <div className="event4-image" ref={(el) => (imageRefs.current[0] = el)}>
          <img src={require('../assets/images/events/event4-1.jpg')} alt="Event Banner" />
        </div>
        <div className="event4-image" ref={(el) => (imageRefs.current[1] = el)}>
          <img src={require('../assets/images/events/event4-2.png')} alt="Attendees" />
        </div>
        <div className="event4-image" ref={(el) => (imageRefs.current[2] = el)}>
          <img src={require('../assets/images/events/event4-3.jpg')} alt="Host Speaking" />
        </div>
        <div className="event4-image" ref={(el) => (imageRefs.current[3] = el)}>
          <img src={require('../assets/images/events/event4-4.jpg')} alt="Audience Watching" />
        </div>
        <div className="event4-image" ref={(el) => (imageRefs.current[4] = el)}>
          <img src={require('../assets/images/events/event4-5.jpg')} alt="Prize" />
        </div>
        <div className="event4-image" ref={(el) => (imageRefs.current[5] = el)}>
          <img src={require('../assets/images/events/event4-6.jpg')} alt="Winner" />
        </div>
        <div className="event4-image" ref={(el) => (imageRefs.current[6] = el)}>
          <img src={require('../assets/images/events/event4-7.jpg')} alt="Host with Audience" />
        </div>
        <div className="event4-image" ref={(el) => (imageRefs.current[7] = el)}>
          <img src={require('../assets/images/events/event4-8.jpg')} alt="Award Presentation" />
        </div>
        <div className="event4-image" ref={(el) => (imageRefs.current[8] = el)}>
          <img src={require('../assets/images/events/event4-9.jpg')} alt="Closing Ceremony" />
        </div>
      </div>
    </div>
  );
};

export default Event4;
