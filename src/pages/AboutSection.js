import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/AboutSection.css";

function AboutSection() {
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.5 } },
  };

  return (
    <div id="about-us" className="warm-moments-container">
      <motion.div
        className="image-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={imageVariant}
      >
        <img
          src={require("../assets/images/logos/cam.jpeg")}
          alt="Camera in hand"
          className="camera-image"
        />
      </motion.div>

      <motion.div
        className="text-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariant}
      >
        <motion.img
          src={require("../assets/images/logos/hello-image.png")}
          alt="Hello"
          className="hello-image"
          variants={imageVariant}
        />
        
        <motion.p className="about-description" variants={paragraphVariant}>
          AT STORY IN FRAMES. WARM MOMENTS, WE BELIEVE EVERY PICTURE TELLS A UNIQUE STORY AND CAPTURES THE WARMTH OF LIFE’S MOST CHERISHED MOMENTS. SPECIALIZING IN AUTHENTIC AND HEARTFELT PHOTOGRAPHY, WE TURN FLEETING MEMORIES INTO TIMELESS TREASURES. UNDER THE DEDICATED LEADERSHIP OF{' '}
          <a
            href="https://arisrobles.github.io/ARCFOLIO/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'underline' }}
          >
            ARISTON CARAGAY
          </a>{' '}
          WE ARE COMMITTED TO PRESERVING YOUR STORY—ONE FRAME AT A TIME.
        </motion.p>
        
        <motion.p className="about-description" variants={paragraphVariant}>
          WE VALUE EVERY COLOR TONE, WHICH IS WHY WE OFFER A VARIETY OF PREMIUM PRESETS AND CUSTOM COLLAGES TO BRING OUT THE CINEMATIC ESSENCE OF YOUR MOMENTS.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default AboutSection;
