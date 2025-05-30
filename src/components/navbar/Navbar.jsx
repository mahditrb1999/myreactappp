import React, { useState, useEffect } from 'react';
import styles from './Header.module.css'; // Import the CSS module

// Main App component
const App = () => {
  // State to control scroll behavior
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Add this line to define the menu state

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 200) {  // When the user scrolls more than 50px
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Listen to scroll event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      {/* Upper Part of the Header */}
      <div className={`${styles.headerTop} ${isScrolled ? styles.headerTopScrolled : ''}`}>
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          <a href="#" className={styles.logo}>
            TRB DEV
          </a>
        </div>

        {/* Mobile menu button (hamburger icon) */}
        <div className={styles.mobileMenuButtonContainer}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}  // Toggle the mobile menu state
            className={styles.mobileMenuButton}
            aria-label="Toggle menu"
          >
            <svg
              className={styles.hamburgerIcon}
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links and Call to Action */}
        <nav className={styles.desktopNav}>
          <div className={styles.navLinks}>
            <a href="#" className={styles.navLink}>
              خانه
            </a>
            <a href="#" className={styles.navLink}>
             خدمات
            </a>
            <a href="#" className={styles.navLink}>
           درباره ما
            </a>
            <a href="#" className={styles.navLink}>
            ارتباط با ما
            </a>
          </div>
          <div>
            <a href="#" className={styles.signInButton}>
              ثبت نام
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      <nav
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}
      >
        <div className={styles.mobileNavLinks}>
          <a href="#" className={styles.mobileNavLink}>
           خانه
          </a>
          <a href="#" className={styles.mobileNavLink}>
           خدمات
          </a>
          <a href="#" className={styles.mobileNavLink}>
         درباره ما
          </a>
          <a href="#" className={styles.mobileNavLink}>
           ارتباط با ما
          </a>
          <a href="#" className={styles.mobileSignInButton}>
          ثبت نام
          </a>
        </div>
      </nav>

      {/* Lower Part of the Header */}
      <div className={`${styles.headerBottom} ${isScrolled ? styles.headerBottomHidden : ''}`}>
        {/* Phone Number */}
        <div className={styles.phoneNumber}>
          <a href="tel:+1234567890" className={styles.phoneNumberLink}>
           تماس بگیرید : 0912 123 12 12
          </a>
        </div>

        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIconLink} aria-label="Facebook">
            {/* Facebook Icon */}
            <svg fill="currentColor" viewBox="0 0 24 24" className={styles.socialSvg} aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className={styles.socialIconLink} aria-label="Twitter">
            {/* Twitter Icon */}
            <svg fill="currentColor" viewBox="0 0 24 24" className={styles.socialSvg} aria-hidden="true">
              <path
                d="M19.633 7.997c.412-.213.824-.425 1.229-.638a8.135 8.135 0 01-2.357.653 4.088 4.088 0 00-3.564-1.725 4.088 4.088 0 00-4.088 4.088c0 .32.03.633.09.937A11.66 11.66 0 013.627 6.03c-.337.587-.506 1.25-.506 1.956 0 1.42.724 2.67 1.82 3.407a4.06 4.06 0 01-1.85-.513v.05c0 1.996 1.42 3.656 3.307 4.037-.345.094-.71.144-1.085.144-.265 0-.52-.026-.767-.073a4.08 4.08 0 003.81 2.846A8.106 8.106 0 013 18.345c-1.188 0-2.316-.07-3.4-.204.094.97.283 1.906.565 2.793a11.66 11.66 0 0017.062-11.458c.412-.213.824-.425 1.229-.638z"
              />
            </svg>
          </a>
          <a href="#" className={styles.socialIconLink} aria-label="Instagram">
            {/* Instagram Icon */}
            <svg fill="currentColor" viewBox="0 0 24 24" className={styles.socialSvg} aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C8.683 2 7.01 2.008 5.62 2.054 4.23 2.1 3.32 2.305 2.65 2.65c-.67.345-1.22.795-1.77 1.345-.55.55-1 1.1-1.345 1.77-.345.67-.55 1.58-.6 2.97-.046 1.39-.054 3.06-.054 6.31s.008 4.92.054 6.31c.05 1.39.255 2.3.6 2.97.345.67.795 1.22 1.345 1.77.55.55 1.1 1 1.77 1.345.67.345 1.58.55 2.97.6 1.39.046 3.06.054 6.31.054s4.92-.008 6.31-.054c1.39-.05 2.3-.255 2.97-.6.67-.345 1.22-.795 1.77-1.345.55-.55 1-1.1 1.345-1.77.345-.67.55-1.58.6-2.97.046 1.39.054-3.06.054-6.31s-.008-4.92-.054-6.31c-.05-1.39-.255-2.3-.6-2.97-.345-.67-.795-1.22-1.345-1.77-.55-.55-1-1.1-1.77-1.345-.67-.345-1.58-.55-2.97-.6C16.93 2.008 15.26 2 12 2zm0 2.16c3.2 0 3.58.012 4.85.06c1.27.045 1.93.24 2.34.44.41.2.73.47 1.05.79.32.32.59.64.79 1.05.2.41.395 1.07.44 2.34.048 1.27.06 1.65.06 4.85s-.012 3.58-.06 4.85c-.045 1.27-.24 1.93-.44 2.34-.2.41-.47.73-.79 1.05-.32.32-.64.59-1.05.79-.41.2-.99.395-2.34.44-1.27.048-1.65.06-4.85.06s-3.58-.012-4.85-.06c-1.27-.045-1.93-.24-2.34-.44-.41-.2-.73-.47-1.05-.79-.32-.32-.59-.64-.79-1.05-.2-.41-.395-1.07-.44-2.34-.048-1.27-.06-1.65-.06-4.85s.012-3.58.06-4.85c.045-1.27.24-1.93.44-2.34.2-.41.47-.73.79-1.05.32-.32.64-.59 1.05-.79.41-.2.99-.395 2.34-.44 1.27-.048 1.65-.06 4.85-.06zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2.16a2.84 2.84 0 110 5.68 2.84 2.84 0 010-5.68zM18.42 6.18a1.28 1.28 0 110 2.56 1.28 1.28 0 010-2.56z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};


export default App;
