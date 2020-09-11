import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import contactsActions from "./contactsActions";

const addContact = (items, action) => {
  return [...items, action.payload];
};

const fetchContacts = (_, action) => action.payload;

const removeContact = (items, action) => {
  return items.filter((contact) => contact.id !== action.payload);
};

const itemsReducer = createReducer([], {
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.fetchContactsSuccess]: fetchContacts,
  [contactsActions.removeContactSuccess]: removeContact,
});

const filterReducer = createReducer("", {
  [contactsActions.filterInputsChangeHandler]: (state, action) =>
    action.payload,
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
