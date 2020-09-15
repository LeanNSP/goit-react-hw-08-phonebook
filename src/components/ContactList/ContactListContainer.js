import { connect } from "react-redux";

import ContactList from "./ContactList";

import { contactsSelectors } from "../../redux/contacts";

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
  };
};

export default connect(mapStateToProps)(ContactList);
