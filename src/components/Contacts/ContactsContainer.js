import { connect } from "react-redux";

import Contacts from "./Contacts";

import { contactsSelectors } from "../../redux/contacts";
import { themeSelectors } from "../../redux/theme";

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getContacts(state),
    theme: themeSelectors.getTheme(state),
    isLoadingContact: contactsSelectors.getLoadingContact(state),
  };
};

export default connect(mapStateToProps)(Contacts);
