import { connect } from "react-redux";

import Phonebook from "./Phonebook";

import { themeSelectors } from "../../redux/theme";
import { errorSelectors } from "../../redux/error";

const mapStateToProps = (state) => {
  return {
    theme: themeSelectors.getTheme(state),
    isError: errorSelectors.getError(state),
  };
};

export default connect(mapStateToProps)(Phonebook);
