import { connect } from "react-redux";

import PositionedSpinner from "./PositionedSpinner";

import { themeSelectors } from "../../redux/theme";

const mapStateToProps = (state) => {
  return {
    theme: themeSelectors.getTheme(state),
  };
};

export default connect(mapStateToProps)(PositionedSpinner);
