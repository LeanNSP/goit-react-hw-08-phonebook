import React from "react";
import PropTypes from "prop-types";

import s from "./ContactList.module.css";

const ContactListItem = ({ name, number, theme, onRemove }) => {
  const itemClass = theme === "light" ? s.item_light : s.item_dark;
  const initBtnClasses = [s.button];
  const btnClasses =
    theme === "light"
      ? [...initBtnClasses, s.button_light]
      : [...initBtnClasses, s.button_dark];

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
  name: PropTypes.string,
  number: PropTypes.string,
  theme: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
