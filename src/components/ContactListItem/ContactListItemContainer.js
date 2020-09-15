import { connect } from "react-redux";

import ContactListItem from "./ContactListItem";

import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { themeSelectors } from "../../redux/theme";

const mapStateToProps = (state, ownProps) => {
  const item = contactsSelectors.getContactById(state, ownProps.id);
  return { ...item, theme: themeSelectors.getTheme(state) };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
