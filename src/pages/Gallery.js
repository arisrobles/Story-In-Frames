import React, { useState, useEffect } from 'react';
import '../assets/styles/Gallery.css'; // Include CSS for the styles

const photos = [
  { front: 'flip1.png', back: 'back1.jpg', alt: 'Couple', flip: true },
  { front: 'storyinframes.png', back: 'storyinframes.png', alt: 'Guitar', flip: false },
  { front: 'flip2.jpg', back: 'back2.jpg', alt: 'Mountain', flip: true },
  { front: 'cam icon.png', back: 'cam icon.png', alt: 'Beach', flip: false },
  { front: 'wave.png', back: 'wave.png', alt: 'Sunset', flip: false },
  { front: 'flip3.jpg', back: 'back3.jpg', alt: 'Forest', flip: true },
  { front: 'CoffeeIcon.png', back: 'CoffeeIcon.png', alt: 'Sunset', flip: false },
  { front: 'flip4.jpg', back: 'back4.jpg', alt: 'Couple Silhouette', flip: true },
];

const Gallery = () => {
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
    <div id="gallery" className="story-container-2">
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

export default Gallery;
