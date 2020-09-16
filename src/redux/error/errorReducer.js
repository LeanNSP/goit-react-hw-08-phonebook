import { createReducer } from "@reduxjs/toolkit";

import authActions from "../auth/authActions";
import { contactsActions } from "../contacts";
import { errorAction } from "./";

const openNotifyError = (_, { payload }) => payload;

const closeNotifyError = () => null;

const errorReducer = createReducer(null, {
  [authActions.registerError]: openNotifyError,
  [authActions.loginError]: openNotifyError,
  [authActions.logoutError]: openNotifyError,
  [authActions.getCurrentUserError]: openNotifyError,
  [contactsActions.fetchContactsError]: openNotifyError,
  [contactsActions.addContactError]: openNotifyError,
  [contactsActions.removeContactError]: openNotifyError,
  [errorAction.openNotifyError]: openNotifyError,
  [errorAction.closeNotifyError]: closeNotifyError,
});

export default errorReducer;
