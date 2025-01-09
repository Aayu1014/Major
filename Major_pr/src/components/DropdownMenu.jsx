import React, { useState } from "react";
import styles from "./DropdownMenu.module.css";

const DropdownMenu = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <div className={styles.dropdownContainer}>
      <span className={styles.dropdownLabel} onClick={toggleMenu}>
        {label}
      </span>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {items.map((item, index) => (
            <li key={index} className={styles.dropdownItem}>
              <a href={item.link} className={styles.dropdownLink}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
