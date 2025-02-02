import React, { useEffect } from 'react';
import '../assets/styles/Event2.css'; // Import your CSS file for styling

const Event2 = () => {
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
      '.event-banner, .event-grid, .grid-item'
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
    <div className="event-container">
      {/* Main Banner Section */}
      <div className="event-banner">
        <div className="banner-overlay">
          <div className="event-grid">
            <div className="grid-item">
              <img src={require('../assets/images/events/bottom1.jpg')} alt="Audience enjoying the event" />
            </div>
            <div className="grid-item">
              <img src={require('../assets/images/events/bottom2.jpg')} alt="Camera recording the event" />
            </div>
            <div className="grid-item">
              <img src={require('../assets/images/events/bottom3.jpg')} alt="Performer on stage" />
            </div>
            <div className="grid-item">
              <img src={require('../assets/images/events/bottom4.jpg')} alt="Speaker addressing the audience" />
            </div>
            <div className="grid-item">
              <img src={require('../assets/images/events/bottom5.jpg')} alt="Awardee celebrating" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event2;
