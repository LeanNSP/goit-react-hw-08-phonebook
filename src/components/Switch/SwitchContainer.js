import { connect } from "react-redux";

import Switch from "./Switch";

import { themeActions, themeSelectors } from "../../redux/theme";

const mapStateToProps = (state) => {
  return {
    theme: themeSelectors.getTheme(state),
  };
};

const mapDispatchToProps = {
  onToggleTheme: themeActions.toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Switch);
