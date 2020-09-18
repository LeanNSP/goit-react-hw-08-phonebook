import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ContactPage from "./ContactPage";

import { authSelectors } from "../../../redux/auth";
import { contactsOperations } from "../../../redux/contacts";

class ContactPageContainer extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.string.isRequired,
    onFetchContacts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { isAuthenticated } = this.props;

    return <ContactPage isAuthenticated={isAuthenticated} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactPageContainer);
