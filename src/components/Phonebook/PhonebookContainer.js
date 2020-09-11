import { connect } from "react-redux";

import Phonebook from "./Phonebook";

import themeSelectors from "../../redux/theme/themeSelectors";
import errorSelectors from "../../redux/error/errorSelectors";

const mapStateToProps = (state) => {
  return {
    theme: themeSelectors.getTheme(state),
    isLoadingTheme: themeSelectors.getLoadingTheme(state),
    isError: errorSelectors.getError(state),
  };
};

export default connect(mapStateToProps)(Phonebook);
