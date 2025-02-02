import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/ServiceSection.css'; 

const ServiceSection = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const listItemVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  // Add an onClick handler to navigate to respective section
  const handleItemClick = (item) => {
    const element = document.getElementById(item);  // Get the element by its ID
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll to the section
    }
  };

  return (
    <motion.section
      id="services"
      className="services-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="text-container" variants={fadeInVariant}>
        <motion.img
          className="services-title-image"
          src={require("../assets/images/logos/service-title.png")}
          alt="Services Title"
        />
        <motion.p
          className="services-description"
          variants={fadeInVariant}
        >
          Affordable & Flexible Packages to Suit Your Budget
        </motion.p>
      </motion.div>

      <motion.div className="content-container" variants={fadeInVariant}>
        <motion.div className="image-container" variants={fadeInVariant}>
          <img
            className="camera-icon"
            src={require("../assets/images/logos/service-image.png")}
            alt="Camera Icon"
          />
        </motion.div>

        <div className="services-list">
          <ul>
            <motion.li custom={0} variants={listItemVariant} onClick={() => handleItemClick('prenup')}>PRENUP</motion.li>
            <motion.li custom={1} variants={listItemVariant} onClick={() => handleItemClick('pre-debut')}>PRE-DEBUT</motion.li>
            <motion.li custom={2} variants={listItemVariant} onClick={() => handleItemClick('birthday')}>BIRTHDAY</motion.li>
            <motion.li custom={3} variants={listItemVariant} onClick={() => handleItemClick('kids-birthday')}>KIDS BIRTHDAY</motion.li>
            <motion.li custom={4} variants={listItemVariant} onClick={() => handleItemClick('christening')}>CHRISTENING</motion.li>
            <motion.li custom={5} variants={listItemVariant} onClick={() => handleItemClick('corporate-events')}>CORPORATE EVENTS</motion.li>
            <motion.li custom={6} variants={listItemVariant} onClick={() => handleItemClick('family-portraits')}>FAMILY PORTRAITS</motion.li>
            <motion.li custom={7} variants={listItemVariant} onClick={() => handleItemClick('etc')}>ETC...</motion.li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ServiceSection;
