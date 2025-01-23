import React, { useState, useEffect } from 'react';
import '../assets/styles/GallerySection.css'; // Include CSS for the styles

const photos = [
  { front: 'gallery1.png', back: 'gallery1-back.png', alt: 'Couple', flip: true },
  { front: 'gallery2.png', back: 'gallery2-back.png', alt: 'Guitar', flip: false },
  { front: 'gallery3.png', back: 'gallery3-back.png', alt: 'Mountain', flip: true },
  { front: 'gallery4.png', back: 'gallery4-back.png', alt: 'Beach', flip: false },
  { front: 'gallery8.png', back: 'gallery8-back.png', alt: 'Sunset', flip: false },
  { front: 'gallery7.png', back: 'gallery7-back.png', alt: 'Forest', flip: true },
  { front: 'gallery6.png', back: 'gallery6-back.png', alt: 'City', flip: false },
  { front: 'gallery5.png', back: 'gallery5-back.png', alt: 'Couple Silhouette', flip: true },
  { front: 'gallery9.png', back: 'gallery9-back.png', alt: 'Lake', flip: true },
  { front: 'gallery10.png', back: 'gallery10-back.png', alt: 'Snow', flip: false },
  { front: 'gallery11.png', back: 'gallery11-back.png', alt: 'Desert', flip: true },
  { front: 'gallery12.png', back: 'gallery12-back.png', alt: 'Park', flip: false },
  { front: 'gallery13.png', back: 'gallery13-back.png', alt: 'Bridge', flip: false },
  { front: 'gallery14.png', back: 'gallery14-back.png', alt: 'Waterfall', flip: true },
  { front: 'gallery15.png', back: 'gallery15-back.png', alt: 'Street', flip: false },
  { front: 'gallery16.png', back: 'gallery16-back.png', alt: 'Sky', flip: true },
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
    }, 300); // Flip every 1 second

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
