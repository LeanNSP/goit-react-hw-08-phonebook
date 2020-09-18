import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import LoginForm from "../../LoginForm/LoginFormContainer";

import routes from "../../../routes/routes";

import styles from "./LoginPage.module.css";
import "./animationLoginPage.css";

const LoginPage = ({ theme }) => {
  const { registerPage } = routes;
  const titleClass = theme === "light" ? styles.title_light : styles.title_dark;
  const textClass = theme === "light" ? styles.text_light : styles.text_dark;
  const linkClass = theme === "light" ? styles.link_light : styles.link_dark;

  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        classNames="LoginPage-slideIn"
        timeout={350}
        unmountOnExit
      >
        <h2 className={titleClass}>Authorisation, please!</h2>
      </CSSTransition>
      <CSSTransition
        in={true}
        appear={true}
        classNames="LoginForm-slideIn"
        timeout={350}
        unmountOnExit
      >
        <LoginForm />
      </CSSTransition>
      <p className={textClass}>
        Non account?{" "}
        <NavLink
          className={linkClass}
          activeClassName={styles.active_link}
          to={registerPage}
        >
          Register!
        </NavLink>
      </p>
    </>
  );
};

LoginPage.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LoginPage;
