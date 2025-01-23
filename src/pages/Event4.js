import React from 'react';
import '../assets/styles/Event4.css'; // Import the CSS file for styles

const Event4 = () => {
  return (
    <div className="event4-container">
      <div className="event4-grid">
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-1.png')} alt="Event Banner" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-2.png')} alt="Attendees" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-3.png')} alt="Host Speaking" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-4.png')} alt="Audience Watching" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-5.png')} alt="Prize" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-6.png')} alt="Winner" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-7.png')} alt="Host with Audience" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-8.png')} alt="Award Presentation" />
        </div>
        <div className="event4-image">
          <img src={require('../assets/images/events/event4-9.png')} alt="Closing Ceremony" />
        </div>
      </div>
    </div>
  );
};

export default Event4;
