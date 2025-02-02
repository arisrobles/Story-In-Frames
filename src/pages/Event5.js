import React from 'react';
import '../assets/styles/Event5.css';

const Event5 = () => {
  return (
    <div id='family-portraits' className="event-design">
      {/* Left Column */}
      <div className="left-column">
        <img src={require('../assets/images/events/event5-1.jpg')} alt="Top Left" />
        <img src={require('../assets/images/events/event5-2.png')} alt="Bottom Left" />
      </div>

      {/* Center Text */}
      <div className="center-text">
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
      <div className="right-column">
        <img src={require('../assets/images/events/event5-3.png')} alt="Top Right" />
        <img src={require('../assets/images/events/event5-4.jpg')} alt="Bottom Right" />
      </div>
    </div>
  );
};

export default Event5;
