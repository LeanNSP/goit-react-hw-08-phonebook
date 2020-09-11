import contactsActions from "./contactsActions";

import fetchDB from "../../services/fetchDB";

const addContact = (contact) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  fetchDB
    .post("/contacts", contact)
    .then((data) => {
      dispatch(contactsActions.addContactSuccess(data));
    })
    .catch(({ message }) => dispatch(contactsActions.addContactError(message)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  fetchDB
    .get("/contacts")
    .then((data) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch(({ message }) =>
      dispatch(contactsActions.fetchContactsError(message))
    );
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());

  fetchDB
    .del(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch(({ message }) =>
      dispatch(contactsActions.removeContactError(message))
    );
};

export default {
  addContact,
  fetchContacts,
  removeContact,
};
