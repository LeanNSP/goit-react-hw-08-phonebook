import React from "react";
import Spinner from "react-spinner-material";
import PropTypes from "prop-types";

import s from "./PositionedSpinner.module.css";

const PositionedSpinner = ({ theme }) => {
  const spinnerColor =
    theme === "light" ? "rgb(180, 180, 180)" : "rgb(255, 255, 210)";

  return (
    <div className={s.spinner}>
      <Spinner radius={100} color={spinnerColor} stroke={5} visible={true} />
    </div>
  );
};

PositionedSpinner.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default PositionedSpinner;
