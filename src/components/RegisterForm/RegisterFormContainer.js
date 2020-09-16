import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import RegisterForm from "./RegisterForm";

import { authOperation } from "../../redux/auth";
import { themeSelectors } from "../../redux/theme";

const INITIAL_STATE = { name: "", email: "", password: "" };

class RegisterPage extends Component {
  static propTypes = {
    theme: PropTypes.string.isRequired,
    onRegister: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  formInputsChangeHandler = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });

    this.clearForm();
  };

  clearForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { theme } = this.props;

    return (
      <RegisterForm
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

export default connect(mapStateToProps, { onRegister: authOperation.register })(
  RegisterPage
);
