import { connect } from "react-redux";

import RegisterPage from "./RegisterPage";

import { themeSelectors } from "../../../redux/theme";

const mapStateToProps = (state) => {
  return {
    theme: themeSelectors.getTheme(state),
  };
};

export default connect(mapStateToProps)(RegisterPage);
