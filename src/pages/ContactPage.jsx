// src/pages/ContactPage.jsx
import React from 'react';
import styles from './ContactPage.module.css'; // مطمئن شوید این CSS Module وجود دارد و نامش صحیح است

const ContactPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>تماس با ما</h1>
      <p className={styles.pageDescription}>برای دریافت مشاوره رایگان یا شروع پروژه، با ما تماس بگیرید.</p>
      {/* اینجا می‌توانید فرم تماس و اطلاعات تماس را اضافه کنید */}
    </div>
  );
};

export default ContactPage; // <--- این خط حیاتی است