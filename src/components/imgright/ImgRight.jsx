// ImgRight.jsx
import React from 'react';
import styles from './ImgRight.module.css'; // ایمپورت کردن CSS Module

const ImgRight = ({id, heading, paragraph, buttonText, buttonLink , imageUrl, imageAlt }) => {
  return (
    <section id={id} className={styles.imgRightSection}>
      <div className={styles.container}>
        {/* Left side: Heading and Paragraph */}
        <div className={styles.textContent}>
          <h2>{heading}</h2> {/* هدینگ از طریق Prop دریافت می‌شود */}
          <p>{paragraph}</p> {/* پاراگراف از طریق Prop دریافت می‌شود */}
          {buttonText && buttonLink && (
            <div className={styles.buttonContainer}>
              <a href={buttonLink} className={styles.button}>
                {buttonText}
              </a>
            </div>
          )}
        </div>

        {/* Right side: Image */}
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={imageAlt} className={styles.image} /> {/* آدرس عکس از طریق Prop دریافت می‌شود */}
        </div>
      </div>
    </section>
  );
};

export default ImgRight;