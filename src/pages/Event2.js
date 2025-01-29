import React from 'react';
import '../assets/styles/Event2.css'; // Import your CSS file for styling

const Event2 = () => {
  return (
    <div className="event-container">
      {/* Main Banner Section */}
      <div className="event-banner">
        {/* Image Grid Section inside the Banner */}
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
  );
};

export default Event2;
