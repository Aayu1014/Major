// src/components/Header.jsx
import React, { useState } from "react";
import styles from "./Header.module.css";
import ContactForm from "./Contactform";

const Header = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  // Toggle the form visibility on each click
  const handleContactClick = () => {
    setFormVisible((prevState) => !prevState); // Toggle between true and false
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>MyWebsite</div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#home" className={styles.navLink}>
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#about" className={styles.navLink}>
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#services" className={styles.navLink}>
                Services
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#contact"
                className={styles.navLink}
                onClick={handleContactClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <ContactForm
        isVisible={isFormVisible}
        onClose={() => setFormVisible(false)}
      />
    </>
  );
};

export default Header;
