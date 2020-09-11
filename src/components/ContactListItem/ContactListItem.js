import React from "react";

import styles from "./ContactListItem.module.css";

const ContactListItem = ({ name, phone, theme, onRemove }) => {
  const itemClass = theme === "light" ? styles.item_light : styles.item_dark;
  const initBtnClasses = [styles.button];
  const btnClasses =
    theme === "light"
      ? [...initBtnClasses, styles.button_light]
      : [...initBtnClasses, styles.button_dark];

  return (
    <li className={itemClass}>
      {name}: {phone}
      <button className={btnClasses.join(" ")} type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
