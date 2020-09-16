import React, { lazy, Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import Phonebook from "./Phonebook/PhonebookContainer";
import PositionedSpinner from "./PositionedSpinner/PositionedSpinnerContainer";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import routes from "../routes";

import styles from "./App.module.css";

const AsyncLoginPage = lazy(() =>
  import(
    "../views/LoginPage/LoginPageContainer" /* webpackChunkName: "login-page" */
  )
);

const AsyncRegisterPage = lazy(() =>
  import(
    "../views/RegisterPage/RegisterPageContainer" /* webpackChunkName: "register-page" */
  )
);

const AsyncContactPage = lazy(() =>
  import(
    "../views/ContactPage/ContactPageContainer" /* webpackChunkName: "contact-page" */
  )
);

const App = ({ theme }) => {
  const { loginPage, registerPage, contactPage } = routes;
  const layoutClass = theme === "light" ? styles.light : styles.dark;

  return (
    <div className={layoutClass}>
      <Phonebook>
        <Suspense fallback={<PositionedSpinner />}>
          <Switch>
            <PublicRoute
              path={loginPage}
              exact
              restricted={true}
              component={AsyncLoginPage}
            />
            <PublicRoute
              path={registerPage}
              exact
              restricted={true}
              component={AsyncRegisterPage}
            />
            <PrivateRoute
              path={contactPage}
              exact
              component={AsyncContactPage}
            />
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
