import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoginForm from "./LoginForm";

import { authOperation } from "../../redux/auth";
import { themeSelectors } from "../../redux/theme";

const INITIAL_STATE = { email: "", password: "" };

class LoginFormContainer extends Component {
  static propTypes = {
    theme: PropTypes.string.isRequired,
    onLogin: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  formInputsChangeHandler = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });

    this.clearForm();
  };

  clearForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { theme } = this.props;

    return (
      <LoginForm
        {...this.state}
        theme={theme}
        onSubmit={this.submitHandler}
        onChange={this.formInputsChangeHandler}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: themeSelectors.getTheme(state),
  };
};

export default connect(mapStateToProps, { onLogin: authOperation.logIn })(
  LoginFormContainer
);
