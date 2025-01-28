import React from 'react';
import '../assets/styles/Testimonials.css'; // Import the corresponding CSS file
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa'; // Import quote and star icons

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Ma Lee Bag',
      message: 'The service was fantastic! Everything was well-organized and stress-free. Highly recommended!',
      role: 'Event Host',
      image: 'https://icon-library.com/images/generic-user-icon/generic-user-icon-9.jpg',
      rating: 5,
    },
    {
      name: 'Aris Robles',
      message: 'Our event was perfect, thanks to your amazing team! Will definitely book again.',
      role: 'Wedding Client',
      image: 'https://icon-library.com/images/generic-user-icon/generic-user-icon-9.jpg',
      rating: 4,
    },
    {
      name: 'Tha Nga Kha',
      message: 'Your professionalism and attention to detail were outstanding. You exceeded our expectations!',
      role: 'Corporate Client',
      image: 'https://icon-library.com/images/generic-user-icon/generic-user-icon-9.jpg',
      rating: 5,
    },
    {
      name: 'O Ki Nawa',
      message: 'The event was handled with utmost care and creativity. Truly a remarkable team!',
      role: 'Birthday Client',
      image: 'https://icon-library.com/images/generic-user-icon/generic-user-icon-9.jpg',
      rating: 5,
    },
  ];

  return (
    <div id="testimonials" className="testimonials-section">
      <h1 className="testimonials-title">
        WHAT OUR <span className="highlight">CLIENTS</span> SAY
      </h1>
      <p className="testimonials-subtitle">
        We value our clients and their feedback. Here’s what they have to say about our services!
      </p>
      <div className="testimonials-carousel">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
            <div className="testimonial-message">
              <FaQuoteLeft className="quote-icon left" />
              <p>{testimonial.message}</p>
              <FaQuoteRight className="quote-icon right" />
            </div>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, starIndex) => (
                <FaStar
                  key={starIndex}
                  className={`star-icon ${starIndex < testimonial.rating ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="testimonials-cta">
        <p>Ready to make your event unforgettable? <span className="cta-highlight">Contact us today!</span></p>
      </div>
    </div>
  );
};

export default Testimonials;
