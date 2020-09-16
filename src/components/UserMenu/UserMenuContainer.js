import { connect } from "react-redux";

import UserMenu from "./UserMenu";

import { authSelectors, authOperation } from "../../redux/auth";
import { themeSelectors } from "../../redux/theme";

const mapStateToProps = (state) => {
  return {
    name: authSelectors.getUserName(state),
    theme: themeSelectors.getTheme(state),
  };
};

export default connect(mapStateToProps, { onLogout: authOperation.logOut })(
  UserMenu
);
