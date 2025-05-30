// src/components/HeroSection/HeroSection.js
import React from 'react';
import styles from './hero.module.css'; // Import the CSS module
import HeroSlider from "../slider/HeroSlider"

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContentWrapper}>
        {/* Left Column: Image */}
        <div className={styles.heroImageContainer}>
          {/* Integrate the HeroSlider component here */}
          <HeroSlider />
        </div>
        {/* Right Column: Text Content */}
        <div className={styles.heroTextContent}>
          <h1 className={styles.heroHeadline}>
      خدمات حرفه‌ای طراحی سایت
          </h1>
          <p className={styles.heroParagraph}>
          ما با استفاده از تکنولوژی‌های روز و طراحی‌های مدرن، وب‌سایت‌هایی زیبا و کاربرپسند برای شما می‌سازیم. هدف ما کمک به رشد کسب و کار شماست تا به راحتی با مخاطبانتان ارتباط برقرار کنید و تجربه آنلاین بی‌نظیری ایجاد کنید
          </p>
          <button className={styles.heroCtaButton}>
          استفاده از خدمات ما
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;