import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/CorporateEvents.css';

const CorporateEvents = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideInVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const hoverVariant = {
    hover: { scale: 1.05, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' },
  };

  return (
    <motion.div
      id="corporate-events"
      className="corporate-events"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Central Banner with Side Collages */}
      <div className="banner-with-collage">
        {/* Left Collage */}
        <motion.div
          className="side-collage-container"
          variants={slideInVariant}
        >
          <div className="side-collage">
            <img
              src={require('../assets/images/events/event.png')}
              alt="Left Collage"
            />
          </div>
        </motion.div>

        {/* Central Banner */}
        <motion.div
          className="central-banner-container"
          variants={fadeInVariant}
        >
          <div className="central-banner">
            <img
              src={require('../assets/images/events/banner.jpg')}
              alt="Congratulations Banner"
            />
          </div>
        </motion.div>

        {/* Right Collage */}
        <motion.div
          className="side-collage-container"
          variants={slideInVariant}
        >
          <div className="side-collage">
            <img
              src={require('../assets/images/events/event2.png')}
              alt="Right Collage"
            />
          </div>
        </motion.div>
      </div>

      {/* Collage Below */}
      <div className="image-collage-below">
        <motion.div
          className="event-image"
          variants={fadeInVariant}
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
        >
          <img
            src={require('../assets/images/events/event7.png')}
            alt="Event 1"
          />
        </motion.div>
        <motion.div
          className="event-image"
          variants={fadeInVariant}
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
        >
          <img
            src={require('../assets/images/events/event4.png')}
            alt="Event 2"
          />
        </motion.div>
        <motion.div
          className="event-image"
          variants={fadeInVariant}
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
        >
          <img
            src={require('../assets/images/events/event5.png')}
            alt="Event 3"
          />
        </motion.div>
        <motion.div
          className="event-image"
          variants={fadeInVariant}
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
        >
          <img
            src={require('../assets/images/events/event6.png')}
            alt="Event 4"
          />
        </motion.div>
        <motion.div
          className="event-image"
          variants={fadeInVariant}
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
        >
          <img
            src={require('../assets/images/events/event3.png')}
            alt="Event 5"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CorporateEvents;
