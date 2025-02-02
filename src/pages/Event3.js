import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/Event3.css'; // Import the CSS file for styles

const Event3 = () => {
  const [visible, setVisible] = useState(false);

  // Set up Intersection Observer
  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.25, // Trigger when 25% of the element is visible
  };

  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions)
  );

  const imageRefs = useRef([]);
  const leafLeftRef = useRef(null);
  const leafRightRef = useRef(null);

  useEffect(() => {
    // Observe the images
    imageRefs.current.forEach((imgRef) => observer.current.observe(imgRef));

    // Observe leaf icons
    if (leafLeftRef.current && leafRightRef.current) {
      observer.current.observe(leafLeftRef.current);
      observer.current.observe(leafRightRef.current);
    }

    return () => {
      // Clean up the observers when the component is unmounted
      imageRefs.current.forEach((imgRef) => observer.current.unobserve(imgRef));
      if (leafLeftRef.current && leafRightRef.current) {
        observer.current.unobserve(leafLeftRef.current);
        observer.current.unobserve(leafRightRef.current);
      }
    };
  }, []);

  return (
    <div className="event3-container">
      <div className="event3-grid">
        <div className="event3-image" ref={(el) => (imageRefs.current[0] = el)}>
          <img src={require('../assets/images/events/event3-1.jpg')} alt="Awards Ceremony Stage" />
        </div>
        <div className="event3-image" ref={(el) => (imageRefs.current[1] = el)}>
          <img src={require('../assets/images/events/event3-2.jpg')} alt="Award Table" />
        </div>
        <div className="event3-image" ref={(el) => (imageRefs.current[2] = el)}>
          <img src={require('../assets/images/events/event3-3.jpg')} alt="Singers Performing" />
        </div>
        <div className="event3-image" ref={(el) => (imageRefs.current[3] = el)}>
          <img src={require('../assets/images/events/event3-4.jpg')} alt="Group of Awardees" />
        </div>
      </div>
      <div className="event3-leaf-left-container" ref={leafLeftRef}>
        <img src={require('../assets/images/events/icon.png')} alt="Leaf Left" className="event3-leaf-left" />
      </div>
      <div className="event3-leaf-right-container" ref={leafRightRef}>
        <img src={require('../assets/images/events/icon.png')} alt="Leaf Right" className="event3-leaf-right" />
      </div>
    </div>
  );
};

export default Event3;
