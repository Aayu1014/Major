import React, { useState } from "react";
import styles from "./Welcome.module.css"; // Import the CSS module

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Welcome Back!</h2>

      {/* Add login image here */}
      <div className={styles.loginImageContainer}>
        <img
          src="/src/assets/login.png" // Provide the path to your login image
          alt="Login"
          className={styles.loginImage}
        />
      </div>

      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
