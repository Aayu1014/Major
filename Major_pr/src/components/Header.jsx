import React from "react";
import styles from "./Header.module.css"; // Import the CSS module

function Header() {
  return (
    <header className={styles.header}>
      {/* Left section: Logo */}
      <div className={styles.logo}>
        <h1>KANMAN</h1>
      </div>

      {/* Center section: Navigation links */}
      <div className={styles.nav}>
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
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Right section: User profile */}
      <div className={styles.profile}>
        <img
          src="/src/assets/profile.jpg"
          alt="User Avatar"
          className={styles.avatar}
        />
      </div>
    </header>
  );
}

export default Header;
