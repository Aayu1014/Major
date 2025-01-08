import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" }); // Clear the form fields
    onClose(); // Close the form
  };

  return (
    <div className={`${styles.formContainer} ${isVisible ? styles.show : ""}`}>
      <div className={styles.formContent}>
        <button onClick={onClose} className={styles.closeBtn}>
          X
        </button>
        <h2>Contact Us</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
