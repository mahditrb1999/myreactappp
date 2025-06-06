// src/pages/WebDesignPage.jsx
import React from 'react';
import styles from './WebDesign.module.css'; // استایل‌های اصلی صفحه
import WavyDivider from '../components/svg/WavyDivider'; // جداکننده موج‌دار
// اگر از WavyDividerInverted استفاده می‌کنید:
// import WavyDividerInverted from '../components/svg/WavyDividerInverted';

// اگر از کامپوننت‌های ImgRight/ImgLeft استفاده می‌کنید:
// import ImgRight from '../components/imgright/ImgRight';
// import ImgLeft from '../components/imgleft/ImgLeft';

const WebDesign = () => {
  return (
    <div className={styles.pageContainer}>
      {/* 1. بخش بنر اصلی (Hero Section) */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>طراحی وب‌سایت حرفه‌ای: هویت دیجیتال شما را می‌سازیم</h1>
          <p className={styles.heroDescription}>
            کسب‌وکار شما ارزش یک حضور آنلاین قدرتمند را دارد. متخصصان TRBDEV وب‌سایتی زیبا، کاربردی و بهینه برای شما طراحی می‌کنند که دقیقا مطابق با نیازها و اهداف شما باشد.
          </p>
          <a href="/contact" className={styles.heroButton}>دریافت مشاوره رایگان</a>
        </div>
      </section>

      {/* جداکننده موج‌دار */}
      <WavyDivider />

      {/* 2. بخش "چرا ما را انتخاب کنید؟" (Why Choose Us) */}
      <section className={styles.whyChooseUsSection}>
        <h2 className={styles.sectionHeading}>چرا طراحی سایت خود را به TRBDEV بسپارید؟</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}>💡</span> {/* آیکون مرتبط */}
            <h3 className={styles.benefitTitle}>طراحی منحصر به فرد و جذاب</h3>
            <p className={styles.benefitText}>
              وب‌سایتی می‌سازیم که نه تنها زیباست، بلکه با هویت برند شما همخوانی کامل دارد و در ذهن کاربران ماندگار می‌شود.
            </p>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}>⚡</span> {/* آیکون مرتبط */}
            <h3 className={styles.benefitTitle}>سرعت و عملکرد فوق‌العاده</h3>
            <p className={styles.benefitText}>
              با استفاده از جدیدترین تکنولوژی‌ها و بهینه‌سازی کد، وب‌سایت شما سریع‌ترین تجربه کاربری را ارائه خواهد داد.
            </p>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}>🔍</span> {/* آیکون مرتبط */}
            <h3 className={styles.benefitTitle}>سئو فرندلی از همان ابتدا</h3>
            <p className={styles.benefitText}>
              وب‌سایت شما از پایه با رعایت اصول سئو و ساختار مناسب برای موتورهای جستجو طراحی می‌شود تا بهترین رتبه را کسب کند.
            </p>
          </div>
          <div className={styles.benefitItem}>
            <span className={styles.benefitIcon}>📱</span> {/* آیکون مرتبط */}
            <h3 className={styles.benefitTitle}>ریسپانسیو و سازگار با همه دستگاه‌ها</h3>
            <p className={styles.benefitText}>
              طراحی وب‌سایت شما برای نمایش بی‌نقص در تمامی دستگاه‌ها از موبایل تا دسکتاپ بهینه خواهد شد.
            </p>
          </div>
        </div>
      </section>

      {/* جداکننده موج‌دار */}
      <WavyDivider />

      {/* 3. بخش "فرآیند طراحی سایت" (Our Process) */}
      <section className={styles.processSection}>
        <h2 className={styles.sectionHeading}>فرآیند طراحی سایت در TRBDEV</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>مشاوره و نیازسنجی</h3>
            <p className={styles.stepText}>
              با مشاوره رایگان، نیازها، اهداف و مخاطبان کسب‌وکار شما را به دقت شناسایی می‌کنیم.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>طراحی UI/UX</h3>
            <p className={styles.stepText}>
              طراحی رابط کاربری (UI) جذاب و تجربه کاربری (UX) بهینه را برای حداکثر رضایت کاربران انجام می‌دهیم.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>توسعه و کدنویسی</h3>
            <p className={styles.stepText}>
              طرح‌های تایید شده شما را با کدنویسی تمیز و بهینه (با React، وردپرس و...) پیاده‌سازی می‌کنیم.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>تست و راه‌اندازی</h3>
            <p className={styles.stepText}>
              وب‌سایت را به دقت تست کرده و پس از تایید نهایی شما، به صورت رسمی راه‌اندازی می‌کنیم.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>پشتیبانی و بهینه‌سازی</h3>
            <p className={styles.stepText}>
              پس از راه‌اندازی، خدمات پشتیبانی فنی، به‌روزرسانی و سئو مداوم را ارائه می‌دهیم.
            </p>
          </div>
        </div>
      </section>

      {/* جداکننده موج‌دار */}
      <WavyDivider />

      {/* 4. بخش "چه چیزی شامل می‌شود؟" (What's Included) */}
      <section className={styles.whatsIncludedSection}>
        <h2 className={styles.sectionHeading}>خدمات طراحی سایت TRBDEV شامل چه مواردی است؟</h2>
        <div className={styles.includedGrid}>
          <div className={styles.includedItem}>
            <span className={styles.includedIcon}>🌐</span>
            <h3 className={styles.includedTitle}>هاست و دامنه</h3>
            <p className={styles.includedText}>کمک به انتخاب و ثبت هاست و دامنه مناسب برای سایت شما.</p>
          </div>
          <div className={styles.includedItem}>
            <span className={styles.includedIcon}>🔐</span>
            <h3 className={styles.includedTitle}>گواهینامه SSL</h3>
            <p className={styles.includedText}>امنیت سایت شما با نصب رایگان گواهینامه SSL.</p>
          </div>
          <div className={styles.includedItem}>
            <span className={styles.includedIcon}>✉️</span>
            <h3 className={styles.includedTitle}>ایمیل سازمانی</h3>
            <p className={styles.includedText}>راه‌اندازی ایمیل‌های اختصاصی با نام دامنه شما.</p>
          </div>
          <div className={styles.includedItem}>
            <span className={styles.includedIcon}>📈</span>
            <h3 className={styles.includedTitle}>ابزارهای تحلیل</h3>
            <p className={styles.includedText}>اتصال به Google Analytics و Search Console برای رصد عملکرد سایت.</p>
          </div>
          <div className={styles.includedItem}>
            <span className={styles.includedIcon}>📚</span>
            <h3 className={styles.includedTitle}>آموزش مدیریت</h3>
            <p className={styles.includedText}>آموزش‌های لازم برای مدیریت محتوای سایت شما.</p>
          </div>
          <div className={styles.includedItem}>
            <span className={styles.includedIcon}>⚡</span>
            <h3 className={styles.includedTitle}>بهینه‌سازی سرعت</h3>
            <p className={styles.includedText}>بهینه‌سازی فنی برای افزایش سرعت بارگذاری سایت.</p>
          </div>
        </div>
      </section>

      {/* جداکننده موج‌دار */}
      <WavyDivider />

      {/* 5. بخش "مراحل بعدی / تماس" (Call to Action) */}
      <section className={styles.nextStepsSection}>
        <h2 className={styles.sectionHeading}>آماده‌اید کسب‌وکار خود را آنلاین کنید؟</h2>
        <p className={styles.nextStepsDescription}>
          بیایید با هم شروع کنیم و وب‌سایتی را طراحی کنیم که نه تنها انتظارات شما را برآورده کند، بلکه از آن‌ها فراتر رود.
        </p>
        <a href="/contact" className={styles.nextStepsButton}>درخواست مشاوره رایگان</a>
      </section>

      {/* می‌توانید اینجا بخش FAQ را اضافه کنید اگر فکر می‌کنید برای این صفحه مناسب است */}
      {/* <FAQSection /> */}
    </div>
  );
};

export default WebDesign;