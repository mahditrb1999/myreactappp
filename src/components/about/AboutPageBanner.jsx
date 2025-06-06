// src/pages/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css';
import AboutPageBanner from '../components/about/AboutPageBanner'; // <--- ایمپورت کامپوننت بنر


const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <AboutPageBanner /> {/* <--- قرار دادن بنر در بالای صفحه */}

      {/* بخش معرفی/قهرمان صفحه درباره ما - استایل‌های این بخش هم قبلاً در AboutPage.module.css بودند */}
      <section className={styles.aboutHero}>
        <h1 className={styles.pageTitle}>درباره TRBDEV: خالق آینده دیجیتال شما</h1>
        <p className={styles.heroDescription}>
          ما تیمی از متخصصان پرشور هستیم که به قدرت طراحی وب و سئو برای دگرگون کردن کسب‌وکارها باور داریم. داستان ما، از تعهد به نوآوری و خلق راه‌حل‌هایی آغاز شد که نه تنها زیبا هستند، بلکه نتیجه‌گرا.
        </p>
      </section>

      {/* ... بقیه بخش‌های AboutPage مثل MissionSection, StorySection, ValuesSection ... */}

    </div>
  );
};

export default AboutPage;