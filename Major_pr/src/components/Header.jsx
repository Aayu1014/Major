import React, { useState } from "react";
import styles from "./Header.module.css";
import ContactForm from "./ContactForm";
import DropdownMenu from "./DropdownMenu";
import User from "./User";

const Header = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleContactClick = () => {
    setFormVisible((prevState) => !prevState);
  };

  return (
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
                  { name: "Service 1", link: "#service1" },
                  { name: "Service 2", link: "#service2" },
                  { name: "Service 3", link: "#service3" },
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
          <User />
        </div>
      </header>

      <ContactForm
        isVisible={isFormVisible}
        onClose={() => setFormVisible(false)}
      />
    </>
  );
};

export default Header;
