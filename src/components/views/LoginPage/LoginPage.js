import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import LoginForm from "../../LoginForm/LoginFormContainer";

import routes from "../../../routes/routes";

import s from "./LoginPage.module.css";
import "./animationLoginPage.css";

const LoginPage = ({ theme }) => {
  const { registerPage } = routes;
  const titleClass = theme === "light" ? s.title_light : s.title_dark;
  const textClass = theme === "light" ? s.text_light : s.text_dark;
  const linkClass = theme === "light" ? s.link_light : s.link_dark;

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
          activeClassName={s.active_link}
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
