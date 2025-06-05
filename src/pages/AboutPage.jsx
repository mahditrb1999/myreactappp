// src/pages/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css'; // مطمئن شوید این CSS Module وجود دارد و نامش صحیح است

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>درباره ما</h1>
      <p className={styles.pageDescription}>
        ما در TRBDEV، تیمی از متخصصان خلاق و باتجربه در زمینه طراحی وب‌سایت و بهینه‌سازی سئو هستیم که با شور و اشتیاق، به کسب‌وکارها کمک می‌کنیم تا در دنیای پرچالش دیجیتال بدرخشند.
      </p>
      {/* اینجا می‌توانید جزئیات بیشتری درباره شرکت، ماموریت و تیم خود اضافه کنید */}
    </div>
  );
};

export default AboutPage; // <--- این خط حیاتی است