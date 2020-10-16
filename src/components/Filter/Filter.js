import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import s from "./Filter.module.css";
import "./animationFilter.css";

const Filter = ({ contacts, filter, theme, onChange }) => {
  const labelClass = theme === "light" ? s.label_light : s.label_dark;
  const inputClass = theme === "light" ? s.input_light : s.input_dark;

  return (
    <CSSTransition
      in={contacts.length > 0}
      classNames="Filter-slideIn"
      timeout={350}
      unmountOnExit
    >
      <label className={labelClass}>
        Find contacts by name
        <input
          className={inputClass}
          type="text"
          name="filter"
          value={filter}
          onChange={({ target }) => onChange(target.value)}
        />
      </label>
    </CSSTransition>
  );
};

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
