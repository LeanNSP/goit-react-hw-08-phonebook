import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import routes from "../routes/routes";

import { authSelectors } from "../redux/auth";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={routes.loginPage} />
      )
    }
  />
);

const mapStateToProps = (state) => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(PrivateRoute);
