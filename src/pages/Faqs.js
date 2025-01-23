import React from 'react';
import { FaInstagram, FaFacebook, FaPhone } from 'react-icons/fa'; // Import icons
import thankYouImage from '../assets/images/logos/thank-you.png';
import '../assets/styles/Faqs.css'; // Import the corresponding CSS file

const Faqs = () => {
  return (
    <div id='booking' className="faqs-container">
      <h1 className="faqs-title">HERE'S HOW TO <span className="highlight">BOOK</span> A PACKAGE</h1>
      <ul className="faqs-list">
        <li className="faqs-item">
          We require a non-refundable downpayment <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to book a date.
        </li>
        <li className="faqs-item">
          Another 40% downpayment on the day of the event and <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the remaining balance should be settled on or <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;before the event.
        </li>
      </ul>
      <div className="faqs-contact">
        <p>For more info, please contact us at:</p>
        <div className="contact-details">
          <div className="contact-item">
            <FaPhone /> 09292620582
          </div>
          <div className="contact-item">
            <FaInstagram />
            <a href="https://www.instagram.com/g.jordieeee/" target="_blank" rel="noopener noreferrer"> Instagram</a>
          </div>
          <div className="contact-item">
            <FaFacebook />
            <a href="https://www.facebook.com/jordan.rodolfo.3726" target="_blank" rel="noopener noreferrer"> Facebook</a>
          </div>
        </div>
      </div>
      <footer className="faqs-footer">
      <img src={thankYouImage} alt="Thank You" className="thank-you-image" />
      </footer>
    </div>
  );
};

export default Faqs;
