import React, { useState, useEffect } from 'react';
import '../assets/styles/GallerySection.css'; // Include CSS for the styles

const photos = [
  { front: 'frontflip1.jpg', back: 'backflip1.jpg', alt: 'Couple', flip: true },
  { front: 'small-icon.png', back: 'small-icon.png', alt: 'Beach', flip: false },
  { front: 'frontflip2.jpg', back: 'backflip2.jpg', alt: 'Mountain', flip: true },
  { front: 'wave.png', back: 'wave.png', alt: 'Beach', flip: false },
  { front: 'storyinframes.png', back: 'cam icon.png', alt: 'Beach', flip: false },
  { front: 'frontflip3.jpg', back: 'backflip3.jpg', alt: 'Forest', flip: true },
  { front: 'bird.png', back: 'bird.png', alt: 'Beach', flip: false },
  { front: 'frontflip4.jpg', back: 'backflip4.jpg', alt: 'Couple Silhouette', flip: true },
];

const GallerySection = () => {
  const [flipped, setFlipped] = useState(Array(photos.length).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prevFlipped) => {
        const nextFlipped = [...prevFlipped];
        
        // Find all photos that are marked as 'flip: true'
        const flipableIndexes = photos
          .map((photo, index) => (photo.flip ? index : null))
          .filter((index) => index !== null);

        // Flip a random photo among the ones marked for flipping
        const indexToFlip = flipableIndexes[Math.floor(Math.random() * flipableIndexes.length)];
        nextFlipped[indexToFlip] = !nextFlipped[indexToFlip];

        return nextFlipped;
      });
    }, 1000); // Flip every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="gallery" className="story-container">
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            className={`photo-item ${flipped[index] ? 'flipped' : ''}`}
            key={index}
          >
            <div className="photo-inner">
              <img
                src={require(`../assets/images/gallery/${photo.front}`)}
                alt={photo.alt}
                className="photo front"
              />
              <img
                src={require(`../assets/images/gallery/${photo.back}`)}
                alt={`${photo.alt} Back`}
                className="photo back"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
