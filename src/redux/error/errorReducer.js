import { createReducer } from "@reduxjs/toolkit";

// import authActions from "../auth/authActions";
import { contactsActions } from "../contacts";
import { themeActions } from "../theme";
import { errorAction } from "./";

const openNotifyError = (error, { payload }) => (error = payload);

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
