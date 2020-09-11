import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import App from "./App";

import contactsOperations from "../redux/contacts/contactsOperations";
import themeOperations from "../redux/theme/themeOperations";
import themeSelectors from "../redux/theme/themeSelectors";

class AppContainer extends Component {
  static propTypes = {
    theme: PropTypes.string.isRequired,
    onFetchContacts: PropTypes.func.isRequired,
    onFetchTheme: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.onFetchContacts();
    this.props.onFetchTheme();
  }

  render() {
    const { theme } = this.props;

    return <App theme={theme} />;
  }
}

const mapStateDispatchToProps = (state) => {
  return {
    theme: themeSelectors.getTheme(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
  onFetchTheme: themeOperations.fetchTheme,
};

export default connect(
  mapStateDispatchToProps,
  mapDispatchToProps
)(AppContainer);
