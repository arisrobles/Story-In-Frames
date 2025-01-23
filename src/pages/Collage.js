import React, { useState, useEffect } from 'react';
import '../assets/styles/Collage.css'; // Include CSS for the styles

const Collage = () => {
  const images = [
    { id: 1, src: require('../assets/images/collage/main-image.png'), alt: 'Image 1', type: 'portrait' },
    { id: 2, src: require('../assets/images/gallery/gallery2.png'), alt: 'Image 2', type: 'portrait' },
    { id: 3, src: require('../assets/images/gallery/gallery3.png'), alt: 'Image 3', type: 'portrait' },
    { id: 4, src: require('../assets/images/gallery/gallery4.png'), alt: 'Image 4', type: 'landscape' },
    { id: 5, src: require('../assets/images/collage/landscape-collage.png'), alt: 'Image 5', type: 'landscape' },
    { id: 6, src: require('../assets/images/collage/landscape-collage2.png'), alt: 'Image 6', type: 'landscape' },
    { id: 7, src: require('../assets/images/collage/last-collage.png'), alt: 'Image 7', type: 'landscape' },
  ];

  const [currentImage, setCurrentImage] = useState(images[0].src);

  const handleThumbnailClick = (src) => {
    setCurrentImage(src);
  };

  // Function to add 'in-view' class when the image is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    // Target all images and the landscape row for the special animation
    const imagesToObserve = document.querySelectorAll('.gallery-container img');
    const landscapeRow = document.querySelector('.landscape-row');
    imagesToObserve.forEach(image => observer.observe(image));
    if (landscapeRow) observer.observe(landscapeRow);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="gallery-container">
      {/* Main Image */}
      <div className="main-image-container">
        <img src={currentImage} alt="Main" className="main-image" />
      </div>

      {/* Thumbnails Grid */}
      <div className="thumbnails-container">
        {/* Portrait Row */}
        <div className="portrait-row">
          {images.slice(1, 4).map((image) => (
            <div
              key={image.id}
              className="portrait-thumbnail"
              onClick={() => handleThumbnailClick(image.src)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        {/* Landscape Row */}
        <div className="landscape-row">
          {images.slice(4, 6).map((image) => (
            <div
              key={image.id}
              className="landscape-thumbnail"
              onClick={() => handleThumbnailClick(image.src)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        {/* Full Width Thumbnail */}
        <div className="full-width-thumbnail">
          <img src={images[6].src} alt={images[6].alt} onClick={() => handleThumbnailClick(images[6].src)} />
        </div>
      </div>
    </div>
  );
};

export default Collage;
