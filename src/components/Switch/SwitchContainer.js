import { connect } from "react-redux";

import Switch from "./Switch";

import themeOperations from "../../redux/theme/themeOperations";
import themeSelectors from "../../redux/theme/themeSelectors";

const mapStateToProps = (state) => {
  return {
    theme: themeSelectors.getTheme(state),
  };
};

const mapDispatchToProps = {
  onToggleTheme: themeOperations.toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Switch);
