// Footer.jsx
import React from 'react';
import styles from './Footer.module.css'; // ایمپورت CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* بخش 1: لوگو و معرفی کوتاه */}
        <div className={styles.colAbout}>
          <h3 className={styles.footerLogo}>TRBDEV</h3> {/* یا <img src="/path/to/your/logo.png" alt="TRBDEV Logo" className={styles.logoImage} /> */}
          <p className={styles.aboutText}>
            ارائه دهنده خدمات نوین طراحی وب‌سایت و بهینه‌سازی سئو، برای رشد و درخشش کسب‌وکار شما در فضای دیجیتال.
          </p>
          <div className={styles.socialLinks}>
            {/* اینجا آیکون‌های شبکه‌های اجتماعی قرار می‌گیرند */}
            <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              {/* آیکون لینکدین (مثال: SVG یا فونت آیکون) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              {/* آیکون اینستاگرام */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.071 1.17.06 1.743.243 2.156.409.654.267 1.123.597 1.636 1.109s.842.982 1.109 1.636c.166.413.349.986.409 2.156.059 1.266.071 1.646.071 4.85s-.012 3.584-.071 4.85c-.06 1.17-.243 1.743-.409 2.156-.267.654-.597 1.123-1.109 1.636s-.982.842-1.636 1.109c-.413.166-.986.349-2.156.409-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.071c-1.17-.06-1.743-.243-2.156-.409-.654-.267-1.123-.597-1.109-1.636s-.842-.982-1.109-1.636c-.166-.413-.349-.986-.409-2.156-.059-1.266-.071-1.646-.071-4.85s.012-3.584.071-4.85c.06-1.17.243-1.743.409-2.156.267-.654.597-1.123 1.109-1.636s.982-.842 1.636-1.109c.413-.166.986-.349 2.156-.409 1.266-.059 1.646-.071 4.85-.071zm0-2.163c-3.259 0-3.667.014-4.947.072-1.38.06-2.361.27-3.264.636-.677.275-1.229.697-1.78.252-1.045-.551-1.895-1.228-2.618-1.951-.723-.723-1.228-1.603-1.951-2.618-.551-1.045-.661-2.026-.636-3.264.058-1.28.271-2.361.636-3.264.275-.677.697-1.229 1.109-1.78.551-1.045 1.228-1.895 1.951-2.618.723-.723 1.603-1.228 2.618-1.951 1.045-.551 2.026-.661 3.264-.636 1.38.058 2.361.271 3.264.636.677.275 1.229.697 1.78 1.109 1.045.551 1.895 1.228 2.618 1.951.723.723 1.228 1.603 1.951 2.618.551 1.045.661 2.026.636 3.264-.058 1.28-.271 2.361-.636 3.264-.275.677-.697 1.229-1.109 1.78-1.045.551-1.895 1.228-2.618 1.951-.723.723-1.603 1.228-2.618 1.951-1.045.551-2.026.661-3.264.636z"/></svg>
            </a>
            {/* می‌توانید آیکون‌های دیگر (تلگرام، توییتر و...) را اضافه کنید */}
          </div>
        </div>

        {/* بخش 2: لینک‌های سریع */}
        <div className={styles.colLinks}>
          <h4 className={styles.colTitle}>لینک‌های سریع</h4>
          <ul className={styles.footerList}>
            <li><a href="#services-section" className={styles.footerLink}>خدمات ما</a></li>
            <li><a href="#portfolio-section" className={styles.footerLink}>نمونه‌کارها</a></li>
            <li><a href="#about-section" className={styles.footerLink}>درباره ما</a></li>
            <li><a href="#faq-section" className={styles.footerLink}>سوالات متداول</a></li>
            <li><a href="#blog-section" className={styles.footerLink}>مقالات و بلاگ</a></li>
          </ul>
        </div>

        {/* بخش 3: خدمات */}
        <div className={styles.colLinks}>
          <h4 className={styles.colTitle}>خدمات ما</h4>
          <ul className={styles.footerList}>
            <li><a href="#wordpress-section" className={styles.footerLink}>طراحی سایت وردپرس</a></li>
            <li><a href="#design-section" className={styles.footerLink}>طراحی سایت اختصاصی</a></li>
            <li><a href="#seo-section" className={styles.footerLink}>بهینه‌سازی سئو</a></li>
            <li><a href="#" className={styles.footerLink}>توسعه نرم‌افزار</a></li>
            <li><a href="#" className={styles.footerLink}>پشتیبانی وب‌سایت</a></li>
          </ul>
        </div>

        {/* بخش 4: تماس با ما */}
        <div className={styles.colContact}>
          <h4 className={styles.colTitle}>تماس با ما</h4>
          <ul className={styles.footerList}>
            <li><a href="#" className={styles.footerLink}><i className="fas fa-map-marker-alt"></i> تهران، خیابان اصلی، پلاک ۱۲</a></li>
            <li><a href="tel:+982112345678" className={styles.footerLink} dir="ltr"><i className="fas fa-phone"></i> +98 (21) 1234 5678</a></li>
            <li><a href="mailto:info@trbdev.com" className={styles.footerLink}><i className="fas fa-envelope"></i> info@trbdev.com</a></li>
            <li><a href="#" className={styles.footerLink}><i className="fas fa-clock"></i> شنبه تا چهارشنبه: ۹ صبح تا ۵ عصر</a></li>
          </ul>
        </div>

      </div>

      {/* بخش کپی‌رایت */}
      <div className={styles.bottomBar}>
        <p className={styles.copyrightText}>
          &copy; {new Date().getFullYear()} تمامی حقوق برای TRBDEV محفوظ است.
        </p>
      </div>
    </footer>
  );
};

export default Footer;