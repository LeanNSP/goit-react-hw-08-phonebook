import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "react-spinner-material";

import Phonebook from "./Phonebook/PhonebookContainer";

import routes from "../routes";

import styles from "./App.module.css";

const AsyncLoginPage = lazy(() =>
  import("../views/LoginPage" /* webpackChankName: "login-page" */)
);

const AsyncRegisterPage = lazy(() =>
  import("../views/RegisterPage" /* webpackChankName: "register-page" */)
);

const AsyncContactPage = lazy(() =>
  import("../views/ContactPage" /* webpackChankName: "contact-page" */)
);

const App = ({ theme }) => {
  const { loginPage, registerPage, contactPage } = routes;
  const spinnerColor =
    theme === "light" ? "rgb(180, 180, 180)" : "rgb(255, 255, 210)";
  const layoutClass = theme === "light" ? styles.light : styles.dark;

  return (
    <div className={layoutClass}>
      <Phonebook>
        <Suspense
          fallback={
            <Spinner
              radius={100}
              color={spinnerColor}
              stroke={5}
              visible={true}
            />
          }
        >
          <Switch>
            <Route path={loginPage} exact component={AsyncLoginPage} />
            <Route path={registerPage} exact component={AsyncRegisterPage} />
            <Route path={contactPage} component={AsyncContactPage} />
            <Redirect to={loginPage} />
          </Switch>
        </Suspense>
      </Phonebook>
    </div>
  );
};

App.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default App;
