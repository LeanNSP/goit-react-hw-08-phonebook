import React from "react";
import { connect } from "react-redux";

import { authSelectors, authOperation } from "../../redux/auth";

const UserMenu = ({ name, onLogout }) => {
  return (
    <div>
      <span>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: authSelectors.getUserName(state),
  };
};

export default connect(mapStateToProps, { onLogout: authOperation.logOut })(
  UserMenu
);
