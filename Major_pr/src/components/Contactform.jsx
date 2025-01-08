// src/components/ContactForm.jsx
import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ isVisible, onClose }) => {
  return (
    <div className={`${styles.formContainer} ${isVisible ? styles.show : ""}`}>
      <div className={styles.formContent}>
        <button onClick={onClose} className={styles.closeBtn}>
          X
        </button>
        <h2>Contact Us</h2>
        <form className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
