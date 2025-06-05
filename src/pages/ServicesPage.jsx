// src/pages/ServicesPage.jsx
import React from 'react';
import styles from './ServicesPage.module.css'; // مطمئن شوید این CSS Module وجود دارد و نامش صحیح است

const ServicesPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>خدمات ما</h1>
      <p className={styles.pageDescription}>در این صفحه می‌توانید با جزئیات کامل خدمات طراحی سایت و سئو ما آشنا شوید.</p>
      {/* اینجا می‌توانید محتوای کامل صفحه خدمات را اضافه کنید */}
    </div>
  );
};

export default ServicesPage; // <--- این خط حیاتی است