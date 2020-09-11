import { createReducer } from "@reduxjs/toolkit";

import contactsActions from "../contacts/contactsActions";
import themeActions from "../theme/themeActions";
import errorAction from "./errorAction";

const openNotifyError = (error, action) => (error = action.payload);

const errorReducer = createReducer(null, {
  [contactsActions.fetchContactsError]: openNotifyError,
  [contactsActions.addContactError]: openNotifyError,
  [contactsActions.removeContactError]: openNotifyError,
  [themeActions.fetchThemeError]: openNotifyError,
  [themeActions.toggleThemeError]: openNotifyError,
  [errorAction.openNotifyError]: openNotifyError,
  [errorAction.closeNotifyError]: (error) => (error = null),
});

export default errorReducer;
