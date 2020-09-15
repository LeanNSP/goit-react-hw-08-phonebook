import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ContactForm from "./ContactForm";

import { errorAction } from "../../redux/error";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { themeSelectors } from "../../redux/theme";

const INITIAL_STATE = { name: "", number: "" };

class ContactFormContainer extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    theme: PropTypes.string.isRequired,
    onAddContact: PropTypes.func.isRequired,
    onOpenNotifyError: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  /*
   * Processing form input
   */
  formInputsChangeHandler = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  /*
   * Processing form submit
   */
  submitHandler = (e) => {
    e.preventDefault();

    const { onAddContact, onOpenNotifyError } = this.props;
    const { name } = this.state;
    const newContact = this.createContact();

    this.isSuchContact()
      ? onOpenNotifyError(`${name} is already in contacts!`)
      : onAddContact(newContact);

    this.clearForm();
  };

  /*
   * Creating a contact
   */
  createContact() {
    const { name, number } = this.state;
    return {
      name,
      number,
    };
  }

  /*
   * Checks is there such a name in contacts
   */
  isSuchContact = () => {
    return this.props.contacts.find(
      ({ name }) => name.toLowerCase() === this.state.name.toLowerCase()
    );
  };

  /*
   * Clearing a form
   */
  clearForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { theme } = this.props;

    return (
      <ContactForm
        {...this.state}
        theme={theme}
        onSubmit={this.submitHandler}
        onChange={this.formInputsChangeHandler}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getContacts(state),
    theme: themeSelectors.getTheme(state),
  };
};

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
  onOpenNotifyError: errorAction.openNotifyError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactFormContainer);
