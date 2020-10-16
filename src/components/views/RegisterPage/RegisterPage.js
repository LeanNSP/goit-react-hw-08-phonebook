import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import RegisterForm from "../../RegisterForm/RegisterFormContainer";

import routes from "../../../routes/routes";

import s from "./RegisterPage.module.css";
import "./animationRegisterPage.css";

const RegisterPage = ({ theme }) => {
  const { loginPage } = routes;
  const titleClass = theme === "light" ? s.title_light : s.title_dark;
  const textClass = theme === "light" ? s.text_light : s.text_dark;
  const linkClass = theme === "light" ? s.link_light : s.link_dark;

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
          activeClassName={s.active_link}
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
