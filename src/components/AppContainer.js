import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import App from "./App";

import { themeSelectors } from "../redux/theme";
import { authOperation } from "../redux/auth";

class AppContainer extends Component {
  static propTypes = {
    theme: PropTypes.string.isRequired,
    onGetCurrentUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    const { theme } = this.props;

    return <App theme={theme} />;
  }
}

const mapStateToProps = (state) => {
  return {
    theme: themeSelectors.getTheme(state),
  };
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperation.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
