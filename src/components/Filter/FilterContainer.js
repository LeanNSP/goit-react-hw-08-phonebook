import { connect } from "react-redux";

import Filter from "./Filter";

import contactsActions from "../../redux/contacts/contactsActions";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import themeSelectors from "../../redux/theme/themeSelectors";

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getContacts(state),
    filter: contactsSelectors.getFilter(state),
    theme: themeSelectors.getTheme(state),
  };
};

const mapDispatchToProps = {
  onChange: contactsActions.filterInputsChangeHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
