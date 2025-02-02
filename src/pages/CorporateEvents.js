import React, { useEffect } from 'react';
import '../assets/styles/CorporateEvents.css';

const CorporateEvents = () => {
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

    // Observe each event image
    const images = document.querySelectorAll('.event-image');
    images.forEach(image => {
      observer.observe(image);
    });

    // Cleanup observer on component unmount
    return () => {
      images.forEach(image => {
        observer.unobserve(image);
      });
    };
  }, []);

  return (
    <div id='corporate-events' className="corporate-events">
      {/* Central Banner with Side Collages */}
      <div className="banner-with-collage">
        {/* Left Collage */}
        <div className="side-collage-container">
          <div className="side-collage">
            <img src={require('../assets/images/events/event.png')} alt="Left Collage" />
          </div>
        </div>

        {/* Central Banner */}
        <div className="central-banner-container">
          <div className="central-banner">
            <img
              src={require('../assets/images/events/banner.jpg')}
              alt="Congratulations Banner"
            />
          </div>
        </div>

        {/* Right Collage */}
        <div className="side-collage-container">
          <div className="side-collage">
            <img src={require('../assets/images/events/event2.png')} alt="Right Collage" />
          </div>
        </div>
      </div>

      {/* Collage Below */}
      <div className="image-collage-below">
        <div className="event-image">
          <img src={require('../assets/images/events/event7.png')} alt="Event 1" />
        </div>
        <div className="event-image">
          <img src={require('../assets/images/events/event4.png')} alt="Event 2" />
        </div>
        <div className="event-image">
          <img src={require('../assets/images/events/event5.png')} alt="Event 3" />
        </div>
        <div className="event-image">
          <img src={require('../assets/images/events/event6.png')} alt="Event 4" />
        </div>
        <div className="event-image">
          <img src={require('../assets/images/events/event3.png')} alt="Event 5" />
        </div>
      </div>
    </div>
  );
};

export default CorporateEvents;
