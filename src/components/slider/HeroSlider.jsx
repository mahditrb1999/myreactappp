import React, { useState, useEffect } from 'react';
import styles from './slider.module.css'; // Use a CSS module for the slider too!

// Define your images here. Adjust paths if your images are in 'public' or 'src'
const images = [
  '/pics/firm2.png', // This is your current image
  // Add more images for the slider, e.g.:
  '/pics/firm.png',
  '/pics/firm4.png',
  // Make sure these paths are correct relative to your public folder or if imported.
];

const HeroSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div className={styles.heroSliderContainer}>
     <img
  src={images[currentImageIndex]}
  alt="Hero Section"
  className={styles.heroImage}
  loading={currentImageIndex === 0 ? "eager" : "lazy"}
  fetchpriority={currentImageIndex === 0 ? "high" : "auto"}
  width="1200"
  height="600"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Found";
  }}
/>
      <div className={styles.sliderNavigation}>
        <button onClick={goToPrevious} className={`${styles.navButton} ${styles.prev}`}>
          &#10094; {/* Left arrow character */}
        </button>
        <button onClick={goToNext} className={`${styles.navButton} ${styles.next}`}>
          &#10095; {/* Right arrow character */}
        </button>
      </div>
      <div className={styles.sliderDots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;