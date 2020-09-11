import React from "react";
import PropTypes from "prop-types";

import Phonebook from "./Phonebook/PhonebookContainer";
import ContactForm from "./ContactForm/ContactFormContainer";
import Contacts from "./Contacts/ContactsContainer";
import Filter from "./Filter/FilterContainer";
import ContactList from "./ContactList/ContactListContainer";

import styles from "./App.module.css";

const App = ({ theme }) => {
  const layoutClass = theme === "light" ? styles.light : styles.dark;

  return (
    <div className={layoutClass}>
      <Phonebook>
        <ContactForm />
        <Contacts>
          <Filter />
          <ContactList />
        </Contacts>
      </Phonebook>
    </div>
  );
};

App.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default App;
