import React, { useEffect } from 'react';
import '../assets/styles/Event4.css'; // Import the CSS file for styles

const Event4 = () => {
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
      '.event4-container, .event4-grid, .event4-image'
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
    <div className="event4-container">
      <div className="event4-grid">
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-1.jpg')} alt="Event Banner" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-2.png')} alt="Attendees" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-3.jpg')} alt="Host Speaking" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-4.jpg')} alt="Audience Watching" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-5.jpg')} alt="Prize" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-6.jpg')} alt="Winner" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-7.jpg')} alt="Host with Audience" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-8.jpg')} alt="Award Presentation" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-9.jpg')} alt="Closing Ceremony" />
        </div>
      </div>
    </div>
  );
};

export default Event4;
