import { connect } from "react-redux";

import Filter from "./Filter";

import { contactsActions, contactsSelectors } from "../../redux/contacts";
import { themeSelectors } from "../../redux/theme";

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
