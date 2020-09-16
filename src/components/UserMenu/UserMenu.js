import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import styles from "./UserMenu.module.css";
import "./animationUserMenu.css";

const UserMenu = ({ name, theme, onLogout }) => {
  const spanClass = theme === "light" ? styles.span_light : styles.span_dark;
  const initBtnClasses = [styles.button];
  const btnClasses =
    theme === "light"
      ? [...initBtnClasses, styles.button_light]
      : [...initBtnClasses, styles.button_dark];

  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames="UserMenu-slideIn"
      timeout={450}
      unmountOnExit
    >
      <div className={styles.wrapper}>
        <span className={spanClass}>Welcome, {name}</span>
        <button
          className={btnClasses.join(" ")}
          type="button"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </CSSTransition>
  );
};

UserMenu.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
