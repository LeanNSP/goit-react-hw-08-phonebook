import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import App from "./App";

import { contactsOperations } from "../redux/contacts";
import { themeSelectors } from "../redux/theme";
import { authOperation } from "../redux/auth";

class AppContainer extends Component {
  static propTypes = {
    theme: PropTypes.string.isRequired,
    onFetchContacts: PropTypes.func.isRequired,
    onGetCurrentUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onGetCurrentUser, onFetchContacts } = this.props;
    onGetCurrentUser(onFetchContacts);
    // this.props.onFetchContacts();
  }

  render() {
    const { theme, isAuthenticated } = this.props;

    return <App theme={theme} isAuthenticated={isAuthenticated} />;
  }
}

const mapStateToProps = (state) => {
  return {
    theme: themeSelectors.getTheme(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
  onGetCurrentUser: authOperation.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
