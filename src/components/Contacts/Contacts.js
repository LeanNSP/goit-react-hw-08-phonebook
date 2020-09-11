import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import Spinner from "react-spinner-material";

import styles from "./Contacts.module.css";
import "./animationContacts.css";

const Contacts = ({ contacts, theme, isLoadingContact, children }) => {
  const spinnerColor =
    theme === "light" ? "rgb(180, 180, 180)" : "rgb(255, 255, 210)";
  const titleClass = theme === "light" ? styles.title_light : styles.title_dark;

  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames="ContactsBox-slideIn"
      timeout={350}
      unmountOnExit
    >
      <div>
        <CSSTransition
          in={contacts.length > 0}
          classNames="ContactsTitle-slideIn"
          timeout={350}
          unmountOnExit
        >
          <h2 className={titleClass} theme={theme}>
            Contacts
          </h2>
        </CSSTransition>
        {children}
        {isLoadingContact && (
          <div className={styles.spinner}>
            <Spinner
              radius={30}
              color={spinnerColor}
              stroke={3}
              visible={true}
            />
          </div>
        )}
      </div>
    </CSSTransition>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired,
  isLoadingContact: PropTypes.bool.isRequired,
};

export default Contacts;
