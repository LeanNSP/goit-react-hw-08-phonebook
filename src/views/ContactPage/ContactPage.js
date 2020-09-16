import React from "react";
import PropTypes from "prop-types";

import UserMenu from "../../components/UserMenu/UserMenuContainer";
import ContactForm from "../../components/ContactForm/ContactFormContainer";
import Contacts from "../../components/Contacts/ContactsContainer";
import Filter from "../../components/Filter/FilterContainer";
import ContactList from "../../components/ContactList/ContactListContainer";

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
