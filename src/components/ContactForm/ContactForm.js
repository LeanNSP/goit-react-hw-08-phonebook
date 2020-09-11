import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import styles from "./ContactForm.module.css";
import "./animationContactForm.css";

const ContactForm = ({ name, phone, theme, onSubmit, onChange }) => {
  const labelClass = theme === "light" ? styles.label_light : styles.label_dark;
  const inputClass = theme === "light" ? styles.input_light : styles.input_dark;
  const initBtnClasses = [styles.button];
  const btnClasses =
    theme === "light"
      ? [...initBtnClasses, styles.button_light]
      : [...initBtnClasses, styles.button_dark];

  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        classNames="ContactForm-slideIn"
        timeout={350}
        unmountOnExit
      >
        {(stage) => {
          return (
            <form className={styles.form} onSubmit={onSubmit}>
              <label className={labelClass}>
                Name
                <input
                  className={inputClass}
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  required
                  value={name}
                  onChange={({ target }) => onChange(target)}
                />
              </label>
              <label className={labelClass}>
                Phone
                <input
                  className={inputClass}
                  type="tel"
                  placeholder="Enter phone*"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                  required
                  value={phone}
                  onChange={({ target }) => onChange(target)}
                />
                <small className={styles.small}>*Format: 123-45-67</small>
              </label>
              <CSSTransition
                in={stage === "entered"}
                classNames="ButtonSubmit-slideIn"
                timeout={250}
                unmountOnExit
              >
                <button className={btnClasses.join(" ")} type="submit">
                  Add contact
                </button>
              </CSSTransition>
            </form>
          );
        }}
      </CSSTransition>
      <div className={styles.border_bottom} />
    </>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactForm;
