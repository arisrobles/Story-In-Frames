import React, { useEffect, useRef } from 'react';
import '../assets/styles/Event5.css';

const Event5 = () => {
  // Refs for images and text to be observed
  const imageRefs = useRef([]);
  const textRef = useRef(null);

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

  // Observe images and text when component mounts
  useEffect(() => {
    imageRefs.current.forEach((imgRef) => observer.current.observe(imgRef));
    if (textRef.current) observer.current.observe(textRef.current);

    // Cleanup observers when component unmounts
    return () => {
      imageRefs.current.forEach((imgRef) => observer.current.unobserve(imgRef));
      if (textRef.current) observer.current.unobserve(textRef.current);
    };
  }, []);

  return (
    <div id="family-portraits" className="event-design">
      {/* Left Column */}
      <div className="left-column" ref={(el) => imageRefs.current[0] = el}>
        <img src={require('../assets/images/events/event5-1.jpg')} alt="Top Left" />
        <img src={require('../assets/images/events/event5-2.png')} alt="Bottom Left" />
      </div>

      {/* Center Text */}
      <div className="center-text" ref={textRef}>
        <span className="real-text">GENUINE</span>
        <div className="icon">
          <img src={require('../assets/images/events/monstera-leaf.png')} alt="Leaf Icon" />
        </div>
        <div className="authentic-text">
          {'N'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'A'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'T'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'U'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'R'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'A'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'L'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column" ref={(el) => imageRefs.current[1] = el}>
        <img src={require('../assets/images/events/event5-3.png')} alt="Top Right" />
        <img src={require('../assets/images/events/event5-4.jpg')} alt="Bottom Right" />
      </div>
    </div>
  );
};

export default Event5;
