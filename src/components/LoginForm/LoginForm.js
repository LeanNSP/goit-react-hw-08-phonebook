import React from "react";
import PropTypes from "prop-types";

import styles from "./LoginForm.module.css";

const LoginForm = ({ email, password, theme, onSubmit, onChange }) => {
  const labelClass = theme === "light" ? styles.label_light : styles.label_dark;
  const inputClass = theme === "light" ? styles.input_light : styles.input_dark;
  const initBtnClasses = [styles.button];
  const btnClasses =
    theme === "light"
      ? [...initBtnClasses, styles.button_light]
      : [...initBtnClasses, styles.button_dark];

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={labelClass}>
        E-mail
        <input
          className={inputClass}
          type="email"
          placeholder="Enter e-mail"
          name="email"
          required
          value={email}
          onChange={({ target }) => onChange(target)}
        />
      </label>
      <label className={labelClass}>
        Password
        <input
          className={inputClass}
          type="password"
          placeholder="Enter password"
          name="password"
          required
          value={password}
          onChange={({ target }) => onChange(target)}
        />
      </label>
      <button className={btnClasses.join(" ")} type="submit">
        Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginForm;
