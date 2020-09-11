import { connect } from "react-redux";

import Contacts from "./Contacts";

import contactsSelector from "../../redux/contacts/contactsSelectors";
import themeSelectors from "../../redux/theme/themeSelectors";

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelector.getContacts(state),
    theme: themeSelectors.getTheme(state),
    isLoadingContact: contactsSelector.getLoadingContact(state),
  };
};

export default connect(mapStateToProps)(Contacts);
