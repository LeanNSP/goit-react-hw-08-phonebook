import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import RegisterForm from "../../components/RegisterForm/RegisterFormContainer";

import routes from "../../routes";

import styles from "./RegisterPage.module.css";
import "./animationRegisterPage.css";

const RegisterPage = ({ theme }) => {
  const { loginPage } = routes;
  const titleClass = theme === "light" ? styles.title_light : styles.title_dark;
  const textClass = theme === "light" ? styles.text_light : styles.text_dark;
  const linkClass = theme === "light" ? styles.link_light : styles.link_dark;

  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        classNames="RegisterPage-slideIn"
        timeout={350}
        unmountOnExit
      >
        <h2 className={titleClass}>Registered, please!</h2>
      </CSSTransition>
      <CSSTransition
        in={true}
        appear={true}
        classNames="RegisterForm-slideIn"
        timeout={350}
        unmountOnExit
      >
        <RegisterForm />
      </CSSTransition>
      <p className={textClass}>
        Registered?{" "}
        <NavLink
          className={linkClass}
          activeClassName={styles.active_link}
          to={loginPage}
        >
          Log In!
        </NavLink>
      </p>
    </>
  );
};

RegisterPage.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default RegisterPage;
