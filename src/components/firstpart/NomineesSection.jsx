import React from 'react';
import styles from './NomineesSection.module.css';

const nomineesData = [
  {
    id: 1,
    image: '/pics/a.png',
    title: 'طراحی وبسایت با وردپرس',
    details: 'با مدرن ترین دیزاین و سلیقه',
    targetId: 'wordpress-section', // <--- اضافه شده: ID بخش هدف
  },
  {
    id: 2,
    image: '/pics/b.png',
    title: 'طراحی سایت اختصاصی',
    details: 'طراحی سایت اختصاصی با فریمورک ریکت',
    targetId: 'design-section', // <--- اضافه شده: ID بخش هدف
  },
  {
    id: 3,
    image: '/pics/c.png',
    title: 'خدمات سئو وبسایت',
    details: 'رنک 1 گوگل را با ما تجربه کنید',
    targetId: 'seo-section', // <--- اضافه شده: ID بخش هدف
  },
];

const NomineesSection = () => {
  // تابع handleScroll که اسکرول رو انجام میده
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={styles.nomineesSection}>
      <h2 className={styles.mainTitle}>
        خدمات مجموعه ما
        {/* Inline SVG for the star icon */}
        <svg
          className={styles.starIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.817 1.48-8.279L.001 9.306l8.332-1.151L12 .587z" />
        </svg>
      </h2>
      <p className={styles.subtitle}>
        با هزینه مناسب و کیفیت تضمینی
      </p>

      <div className={styles.cardsContainer}>
        {nomineesData.map((nominee) => (
          <div key={nominee.id} className={styles.nomineeCard}>
            <img src={nominee.image} alt={nominee.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{nominee.title}</h3>
            <p className={styles.cardDetails}>{nominee.details}</p>
            {/* دکمه "ادامه" که با کلیک، به ID مربوطه اسکرول می‌کنه */}
            <button
              onClick={() => handleScroll(nominee.targetId)} // <--- اینجا تابع اسکرول رو وصل کردیم
              className={styles.button} // از کلاس 'button' در ImgLeft.module.css استفاده شده، باید در NomineesSection.module.css تعریف شود
            >
              ادامه
            </button>
          </div>
        ))}
      </div>

      <button className={styles.viewNomineesButton}>
        برای دیدن دوره های آموزشی کلیک کنید
      </button>
    </section>
  );
};

export default NomineesSection;