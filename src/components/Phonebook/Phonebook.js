import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import NotifyError from "../NotifyError/NotifyErrorContainer";
import Switch from "../Switch/SwitchContainer";

import styles from "./Phonebook.module.css";
import "./animationPhonebook.css";

const Phonebook = ({ theme, isError, children }) => {
  const phonebookClass =
    theme === "light" ? styles.phonebook_light : styles.phonebook_dark;
  const titleClass = theme === "light" ? styles.title_light : styles.title_dark;

  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames="Phonebook-slideIn"
      timeout={350}
      unmountOnExit
    >
      <div className={phonebookClass} theme={theme}>
        <CSSTransition
          in={true}
          appear={true}
          classNames="Title-slideIn"
          timeout={350}
          unmountOnExit
        >
          <h1 className={titleClass} theme={theme}>
            Phonebook
          </h1>
        </CSSTransition>
        <div className={styles.border_top} />
        <CSSTransition
          in={isError !== null}
          classNames="NotifyError-slideIn"
          timeout={350}
          unmountOnExit
        >
          <NotifyError isError={isError} />
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          classNames="Switch-slideIn"
          timeout={350}
          unmountOnExit
        >
          <Switch />
        </CSSTransition>
        {children}
      </div>
    </CSSTransition>
  );
};

Phonebook.propTypes = {
  theme: PropTypes.string.isRequired,
  isError: PropTypes.string,
};

export default Phonebook;
