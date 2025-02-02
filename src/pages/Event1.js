import React, { useEffect } from 'react';
import '../assets/styles/Event1.css';

const Event1 = () => {
  useEffect(() => {
    // Function to handle visibility detection
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        // If the element is intersecting (entering the viewport), trigger animation
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the visible class
        } else {
          entry.target.classList.remove('visible'); // Remove the visible class when out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Observe each element for visibility detection
    const elementsToAnimate = document.querySelectorAll(
      '.event-design, .left-column, .right-column, .center-text, .icon, .left-column img, .right-column img'
    );

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      elementsToAnimate.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="event-design">
      {/* Left Column */}
      <div className="left-column">
        <img src={require('../assets/images/events/event8.jpg')} alt="Top Left" />
        <img src={require('../assets/images/events/event9.jpg')} alt="Bottom Left" />
      </div>

      {/* Center Text */}
      <div className="center-text">
        <span className="real-text">REAL</span>
        <div className="icon">
          <img src={require('../assets/images/events/monstera-leaf.png')} alt="Leaf Icon" />
        </div>
        <div className="authentic-text">
          {'A'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'U'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'T'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'H'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'E'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'N'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'T'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'I'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
          {'C'.split('').map((letter, index) => <span key={index}>{letter}</span>)}
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <img src={require('../assets/images/events/event10.jpg')} alt="Top Right" />
        <img src={require('../assets/images/events/event11.jpg')} alt="Bottom Right" />
      </div>
    </div>
  );
};

export default Event1;
