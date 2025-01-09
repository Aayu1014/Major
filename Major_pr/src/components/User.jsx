import React from "react";
import styles from "./User.module.css";

const User = () => {
  return (
    <div className={styles.userContainer}>
      <img src="src\assets\profile.jpg" alt="User" className={styles.avatar} />
      <div className={styles.dropdown}>
        <ul className={styles.dropdownList}>
          <li className={styles.dropdownItem}>
            <a href="#profile" className={styles.dropdownLink}>
              Your Profile
            </a>
          </li>
          <li className={styles.dropdownItem}>
            <a href="#logout" className={styles.dropdownLink}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
