import React from "react";
import { connect } from "react-redux";

import UserMenu from "../components/UserMenu/UserMenu";
import ContactForm from "../components/ContactForm/ContactFormContainer";
import Contacts from "../components/Contacts/ContactsContainer";
import Filter from "../components/Filter/FilterContainer";
import ContactList from "../components/ContactList/ContactListContainer";

import { authSelectors } from "../redux/auth";

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

const mapStateToProps = (state) => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(ContactPage);
