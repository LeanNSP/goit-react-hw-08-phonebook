import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, theme, onRemove }) => {
  const itemClass = theme === "light" ? styles.item_light : styles.item_dark;
  const initBtnClasses = [styles.button];
  const btnClasses =
    theme === "light"
      ? [...initBtnClasses, styles.button_light]
      : [...initBtnClasses, styles.button_dark];

  return (
    <li className={itemClass}>
      {name}: {number}
      <button className={btnClasses.join(" ")} type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
