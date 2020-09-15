import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { contactsActions } from "./";

const addContact = (items, { payload }) => {
  return [...items, payload];
};

const fetchContacts = (_, { payload }) => payload;

const removeContact = (items, { payload }) => {
  return items.filter((contact) => contact.id !== payload);
};

const itemsReducer = createReducer([], {
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.fetchContactsSuccess]: fetchContacts,
  [contactsActions.removeContactSuccess]: removeContact,
});

const filterReducer = createReducer("", {
  [contactsActions.filterInputsChangeHandler]: (_, { payload }) => payload,
});

const loadingContactReducer = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loadingContact: loadingContactReducer,
});
