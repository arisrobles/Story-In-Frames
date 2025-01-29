import React from 'react';
import '../assets/styles/Event3.css'; // Import the CSS file for styles

const Event3 = () => {
  return (
    <div className="event3-container">
      <div className="event3-grid">
        <div className="event3-image">
          <img src={require('../assets/images/events/event3-1.jpg')} alt="Awards Ceremony Stage" />
        </div>
        <div className="event3-image">
          <img src={require('../assets/images/events/event3-2.jpg')} alt="Award Table" />
        </div>
        <div className="event3-image">
          <img src={require('../assets/images/events/event3-3.jpg')} alt="Singers Performing" />
        </div>
        <div className="event3-image">
          <img src={require('../assets/images/events/event3-4.jpg')} alt="Group of Awardees" />
        </div>
      </div>
      <div className="event3-leaf-left-container">
        <img src={require('../assets/images/events/icon.png')} alt="Leaf Left" className="event3-leaf-left" />
      </div>
      <div className="event3-leaf-right-container">
        <img src={require('../assets/images/events/icon.png')} alt="Leaf Right" className="event3-leaf-right" />
      </div>
    </div>
  );
};

export default Event3;
