import React from "react";
import PropTypes from "prop-types";

import UserMenu from "../../UserMenu/UserMenuContainer";
import ContactForm from "../../ContactForm/ContactFormContainer";
import Contacts from "../../Contacts/ContactsContainer";
import Filter from "../../Filter/FilterContainer";
import ContactList from "../../ContactList/ContactListContainer";

const ContactPage = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated && <UserMenu />}
      <ContactForm />
      <Contacts>
        <Filter />
        <ContactList />
      </Contacts>
    </>
  );
};

ContactPage.propTypes = {
  isAuthenticated: PropTypes.string.isRequired,
};

export default ContactPage;
