import { connect } from "react-redux";

import NotifyError from "./NotifyError";

import errorAction from "../../redux/error/errorAction";
import themeSelectors from "../../redux/theme/themeSelectors";

const mapStateToProps = (state) => {
  return {
    theme: themeSelectors.getTheme(state),
  };
};

const mapDispatchToProps = {
  onClose: errorAction.closeNotifyError,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotifyError);
