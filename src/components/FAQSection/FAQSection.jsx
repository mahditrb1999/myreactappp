// src/components/faq/FAQSection.jsx
import React, { useState } from 'react';
import styles from './FAQSection.module.css';

// راه حل برای ایمپورت عکس از Public Folder در JSX
const backgroundImage = process.env.PUBLIC_URL + '/back.png';

const faqData = [
  {
    id: 1,
    question: 'طراحی سایت اختصاصی چه تفاوتی با قالب‌های آماده دارد؟',
    answer: 'طراحی سایت اختصاصی به شما امکان می‌دهد پلتفرمی کاملاً متناسب با نیازهای منحصربه‌فرد، اهداف تجاری و برندینگ خاص خود داشته باشید. برخلاف قالب‌های آماده که محدودیت‌هایی در سفارشی‌سازی دارند، در طراحی اختصاصی کنترل کاملی بر جزئیات بصری، تجربه کاربری (UX) و قابلیت‌های فنی دارید.'
  },
  {
    id: 2,
    question: 'خدمات سئو شما شامل چه مواردی است؟',
    answer: 'خدمات سئو ما شامل تحقیق کلمات کلیدی جامع، بهینه‌سازی فنی وب‌سایت، تولید محتوای سئو فرندلی، ساخت بک‌لینک‌های معتبر، آنالیز رقبا و گزارش‌دهی منظم پیشرفت برای بهبود رتبه شما در موتورهای جستجو می‌شود.'
  },
  {
    id: 3,
    question: 'آیا وب‌سایت‌های وردپرسی که طراحی می‌کنید، سئو فرندلی هستند؟',
    answer: 'بله، تمامی وب‌سایت‌های وردپرسی که توسط تیم ما طراحی می‌شوند، از پایه با رعایت اصول سئو و بهینه‌سازی سرعت و کدنویسی استاندارد، ساخته می‌شوند تا از همان ابتدا بالاترین پتانسیل را برای رتبه‌بندی در موتورهای جستجو داشته باشند.'
  },
  {
    id: 4,
    question: 'مدت زمان طراحی یک وب‌سایت چقدر است؟',
    answer: 'مدت زمان طراحی وب‌سایت بستگی به پیچیدگی پروژه، تعداد صفحات، قابلیت‌های خاص مورد نیاز و سرعت تایید شما دارد. پس از مشاوره اولیه و تعیین دقیق نیازها، یک زمان‌بندی تخمینی به شما اعلام خواهد شد.'
  },
  {
    id: 5,
    question: 'آیا پس از تحویل وب‌سایت، پشتیبانی هم ارائه می‌دهید؟',
    answer: 'بله، ما پس از تحویل پروژه نیز خدمات پشتیبانی فنی، به‌روزرسانی و نگهداری وب‌سایت را ارائه می‌دهیم تا از عملکرد صحیح و امنیت وب‌سایت شما در طولانی مدت اطمینان حاصل کنیم.'
  }
];

const FAQSection = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <section 
      className={styles.faqSection} 
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      {/* لایه overlay (اگر در CSS Module تعریف شده و می‌خواهید از آن استفاده کنید) */}
      {/* در روش mask-image، معمولاً نیازی به این div نیست. */}
      {/* اگر در CSS Module، کلاس .overlay را حذف کرده‌اید، این خط را هم حذف کنید. */}
      {/* اگر میخواهید لایه شفاف رنگی روی بکگراند باشد، آن را در CSS Module تعریف کنید. */}
      {/* <div className={styles.overlay}></div> */} 

      <h2 className={styles.mainTitle}>
        سوالات متداول
        {/* آیکون ستاره */}
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
        پاسخ به رایج‌ترین پرسش‌های شما درباره خدمات ما
      </p>

      <div className={styles.faqList}>
        {faqData.map((item) => (
          <div key={item.id} className={styles.faqItem}>
            <button
              className={styles.questionButton}
              onClick={() => toggleQuestion(item.id)}
            >
              {item.question}
              <span className={styles.toggleIcon}>
                {openQuestionId === item.id ? '-' : '+'}
              </span>
            </button>
            {/* اعمال کلاس‌های CSS برای نمایش/پنهان کردن پاسخ */}
            <p className={`${styles.answerText} ${openQuestionId === item.id ? styles.answerTextVisible : ''}`}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;