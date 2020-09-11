import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContactListItem from "../ContactListItem/ContactListItemContainer";

import styles from "./ContactList.module.css";
import "./animationContactList.css";

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(({ id }) => (
        <CSSTransition classNames="ListItem-slideIn" timeout={350} key={id}>
          <ContactListItem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
