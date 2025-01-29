import React from 'react';
import '../assets/styles/Event4.css'; // Import the CSS file for styles

const Event4 = () => {
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
