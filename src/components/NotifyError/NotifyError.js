import React from "react";
import PropTypes from "prop-types";

import s from "./NotifyError.module.css";

const NotifyError = ({ isError, theme, onClose }) => {
  const notifyClass =
    theme === "light" ? s.notify_light : s.notify_dark;

  return (
    <div className={notifyClass} theme={theme}>
      <p>{isError}</p>
      <button type="button" onClick={() => onClose()}>
        OK
      </button>
    </div>
  );
};

NotifyError.propTypes = {
  theme: PropTypes.string.isRequired,
  isError: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default NotifyError;
