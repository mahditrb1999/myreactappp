// CallToActionSection.jsx
import React from 'react';
import styles from './CallToActionSection.module.css';

const CallToActionSection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.ctaHeading}>
          آیا آماده رشد کسب‌وکار خود هستید؟
        </h2>
        <p className={styles.ctaParagraph}>
          با ما تماس بگیرید و مشاوره رایگان دریافت کنید تا بهترین راهکارهای طراحی سایت و سئو را برای شما پیدا کنیم.
        </p>
        <a href="/contact" className={styles.ctaButton}>
          دریافت مشاوره رایگان
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;