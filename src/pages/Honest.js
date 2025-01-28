import React from 'react';
import '../assets/styles/Honest.css'; // Import your CSS file

const Honest = () => {
  return (
    <section className="honest-section">
      {/* Container for all images */}
      <div className="honest-container">
        
        {/* Left Collage Image */}
        <div className="collage-left">
          <img 
            src={require('../assets/images/honest/left.jpg')} 
            alt="Left Collage" 
          />
        </div>

        {/* Honest Text as Image in the Center */}
        <div className="honest-image">
          <img 
            src={require('../assets/images/honest/HonestIcon.png')} 
            alt="Honest Text" 
          />
        </div>

        {/* Right Collage Image */}
        <div className="collage-right">
          <img 
            src={require('../assets/images/honest/right.jpg')} 
            alt="Right Collage" 
          />
        </div>

      </div>
    </section>
  );
};

export default Honest;
