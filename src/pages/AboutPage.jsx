// src/pages/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css';

// اگر می‌خواهید از کامپوننت‌های ImgRight/ImgLeft استفاده کنید:
import ImgRight from '../components/imgright/ImgRight';
import ImgLeft from '../components/imgleft/ImgLeft';
import WavyDivider from '../components/svg/WavyDivider'; // برای جداکننده‌ها


const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* بخش معرفی/قهرمان صفحه درباره ما */}
      <section className={styles.aboutHero}>
        <h1 className={styles.pageTitle}>درباره TRBDEV: خالق آینده دیجیتال شما</h1>
        <p className={styles.heroDescription}>
          ما تیمی از متخصصان پرشور هستیم که به قدرت طراحی وب و سئو برای دگرگون کردن کسب‌وکارها باور داریم. داستان ما، از تعهد به نوآوری و خلق راه‌حل‌هایی آغاز شد که نه تنها زیبا هستند، بلکه نتیجه‌گرا.
        </p>
      </section>

      {/* بخش "ماموریت ما" - شبیه به ImgRight/ImgLeft اما با استایل سفارشی این صفحه */}
      {/* می‌توانید از کامپوننت ImgRight خودتان هم اینجا استفاده کنید و صرفاً محتوا را به آن پاس دهید */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <h2 className={styles.sectionTitle}>ماموریت ما</h2>
          <p className={styles.sectionText}>
            باور ما این است که برای رشد یک کسب‌وکار، نیازی به بی‌رحمی نیست. ما می‌دانیم راه بهتری برای رشد وجود دارد؛ راهی که در آن موفقیت پایانی برای مشتریان وجود دارد. ما بر این باوریم که کسب‌وکارها می‌توانند با وجدان، موفقیت و روحیه رشد کنند – و می‌توانند این کار را با رویکرد درون‌گرا انجام دهند. به همین دلیل، اکوسیستمی از نرم‌افزارها، آموزش و جامعه‌ای متحد ایجاد کرده‌ایم تا به کسب‌وکارها کمک کنیم هر روز بهتر رشد کنند.
          </p>
        </div>
        <div className={styles.missionImageContainer}>
          <img src="/pics/our-mission.jpg" alt="Our Mission" className={styles.missionImage} /> {/* تصویر نمونه UI */}
        </div>
      </section>

      {/* جداکننده (اگر می‌خواهید) */}
      <WavyDivider />

      {/* بخش "داستان ما" - می‌تواند شامل یک ویدیو یا تصویر بزرگ باشد */}
      <section className={styles.storySection}>
        <div className={styles.storyImageContainer}>
          {/* اگر ویدیو دارید: <video src="/path/to/video.mp4" controls className={styles.storyVideo}></video> */}
          <img src="/pics/our-story.jpg" alt="Our Story" className={styles.storyImage} />
        </div>
        <div className={styles.storyContent}>
          <h2 className={styles.sectionTitle}>داستان ما</h2>
          <p className={styles.sectionText}>
            TRBDEV از اشتیاق ما برای پر کردن شکاف بین خلاقیت و کارایی در دنیای دیجیتال متولد شد. با سال‌ها تجربه در طراحی وب‌سایت‌های سفارشی و ارتقاء رتبه کسب‌وکارها در نتایج جستجو، ما تصمیم گرفتیم دانش و تخصص خود را برای کمک به شما در تحقق اهداف آنلاینتان به کار گیریم. داستان ما، داستان تحول است: تحول ایده‌ها به وب‌سایت‌های پویا، و تحول بازدیدکنندگان به مشتریان وفادار.
          </p>
        </div>
      </section>

      {/* جداکننده */}
      <WavyDivider />


      {/* بخش "ارزش‌های اصلی" (همانند قبل، اما با استایل جدید) */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>ارزش‌های اصلی ما</h2>
        <ul className={styles.valuesList}>
          <li>
            <strong>نوآوری:</strong> همواره در جستجوی جدیدترین تکنولوژی‌ها و روندهای طراحی و سئو هستیم تا بهترین‌ها را ارائه دهیم.
          </li>
          <li>
            <strong>تعهد:</strong> به اهداف مشتریانمان متعهدیم و تا رسیدن به نتیجه مطلوب، در کنار آن‌ها می‌مانیم.
          </li>
          <li>
            <strong>کیفیت:</strong> در هر پروژه، بالاترین استانداردهای کیفی را در طراحی، کدنویسی و بهینه‌سازی رعایت می‌کنیم.
          </li>
          <li>
            <strong>شفافیت:</strong> فرآیند کار را به صورت کاملاً شفاف با مشتریانمان در میان می‌گذاریم.
          </li>
          <li>
            <strong>مشتری‌مداری:</strong> نیازها و خواسته‌های مشتریانمان را در اولویت قرار می‌دهیم و بر اساس آن، راهکار ارائه می‌کنیم.
          </li>
        </ul>
      </section>

      {/* بخش "تیم ما" (اختیاری) */}
      {/* می‌توانید این بخش را گسترش دهید و اطلاعات بیشتری از تیم خود اضافه کنید */}
      {/* <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>تیم ما</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="/pics/team-member-1.jpg" alt="نام عضو تیم" className={styles.teamPhoto} />
            <h3 className={styles.memberName}>علیرضا احمدی</h3>
            <p className={styles.memberRole}>مدیرعامل و طراح ارشد</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/pics/team-member-2.jpg" alt="نام عضو تیم" className={styles.teamPhoto} />
            <h3 className={styles.memberName}>فاطمه کریمی</h3>
            <p className={styles.memberRole}>متخصص سئو و بازاریابی دیجیتال</p>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default AboutPage;