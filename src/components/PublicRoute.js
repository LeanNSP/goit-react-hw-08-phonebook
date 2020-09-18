import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import routes from "../routes/routes";

import { authSelectors } from "../redux/auth";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && restricted ? (
        <Redirect to={routes.contactPage} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(PublicRoute);
