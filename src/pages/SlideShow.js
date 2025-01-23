import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/SlideShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const images = [
  require('../assets/images/slideshow/sample.png'),
  require('../assets/images/gallery/gallery2.png'),
  require('../assets/images/gallery/gallery3.png'),
  require('../assets/images/gallery/gallery4.png'),
  require('../assets/images/gallery/gallery5.png'),
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Initially paused
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // Tracks user interaction
  const audioRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // Automatically switch images every 3 seconds
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  // Control music playback
  useEffect(() => {
    if (isPlaying && hasInteracted) {
      audioRef.current.play().catch((err) => console.warn(err)); // Handle autoplay restrictions gracefully
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, hasInteracted]);

  // Hide the button after 3 seconds if no click occurs
  useEffect(() => {
    if (isButtonVisible) {
      timeoutRef.current = setTimeout(() => {
        setIsButtonVisible(false);
      }, 3000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isButtonVisible]);

  // Handle user interaction
  const handleUserInteraction = () => {
    setHasInteracted(true); // Mark as interacted
    setIsPlaying(!isPlaying); // Toggle play/pause state
    setIsButtonVisible(true);
  };

  return (
    <div className="slideshow-container" onClick={handleUserInteraction}>
      <div className="slideshow-background">
        <img src={images[currentIndex]} alt="Slideshow" />
      </div>
      <div className="slider-control">
        <input
          type="range"
          min="0"
          max={images.length - 1}
          value={currentIndex}
          onChange={(e) => setCurrentIndex(Number(e.target.value))}
        />
      </div>

      {/* Music Control Section */}
      <div className={`music-control ${isButtonVisible ? '' : 'hidden'}`}>
        <button onClick={handleUserInteraction}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="2x" />
        </button>
      </div>

      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src={require('../assets/audios/background-music.mp3')} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Slideshow;
