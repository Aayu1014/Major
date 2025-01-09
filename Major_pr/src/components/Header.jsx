import React, { useState } from "react";
import styles from "./Header.module.css";
import ContactForm from "./ContactForm";
import DropdownMenu from "./DropdownMenu";
import User from "./User";
import Welcome from "./Welcome"; // Import the Welcome component

const Header = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track login/logout state

  const handleContactClick = () => {
    setFormVisible((prevState) => !prevState);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set to false on logout
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <header className={styles.header}>
            <div className={styles.logo}>KANMAN</div>
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
                  <DropdownMenu
                    label="SERVICES"
                    items={[
                      { name: "Project Management", link: "#service1" },
                      { name: "Consultancy", link: "#service2" },
                      { name: "CyberSecurity", link: "#service3" },
                    ]}
                  />
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
            <div className={styles.userProfile}>
              <User onLogout={handleLogout} /> {/* Pass logout handler */}
            </div>
          </header>

          <ContactForm
            isVisible={isFormVisible}
            onClose={() => setFormVisible(false)}
          />
        </>
      ) : (
        <Welcome /> // Show Welcome component if logged out
      )}
    </>
  );
};

export default Header;
