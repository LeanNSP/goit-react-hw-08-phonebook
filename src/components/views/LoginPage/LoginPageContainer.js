import { connect } from "react-redux";

import LoginPage from "./LoginPage";

import { themeSelectors } from "../../../redux/theme";

const mapStateToProps = (state) => {
  return {
    theme: themeSelectors.getTheme(state),
  };
};

export default connect(mapStateToProps)(LoginPage);
