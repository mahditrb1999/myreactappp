
import React from 'react';
import styles from './ImgLeft.module.css';

const ImgLeft = ({id, heading, paragraph, buttonText, buttonLink, imageUrl, imageAlt }) => {
  return (
    <section id={id} className={styles.imgLeftSection}>
      <div className={styles.container}>
        {/* Left side: Image */}
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={imageAlt} className={styles.image} />
        </div>

        {/* Right side: Heading, Paragraph, and Button */}
        <div className={styles.textContent}>
          <h2>{heading}</h2>
          <p>{paragraph}</p>
          {/* دکمه رو داخل یک div جدید با کلاس buttonContainer قرار دادیم */}
          {buttonText && buttonLink && (
            <div className={styles.buttonContainer}>
              <a href={buttonLink} className={styles.button}>
                {buttonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImgLeft;