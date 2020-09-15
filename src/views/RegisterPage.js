import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import routes from "../routes";

import { authOperation } from "../redux/auth";

const INITIAL_STATE = { name: "", email: "", password: "" };

class RegisterPage extends Component {
  state = { ...INITIAL_STATE };

  /*
   * Processing form input
   */
  formInputsChangeHandler = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  /*
   * Processing form submit
   */
  submitHandler = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });

    this.clearForm();
  };

  /*
   * Clearing a form
   */
  clearForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, email, password } = this.state;
    const { loginPage } = routes;

    return (
      <>
        <h2>Registered, please!</h2>
        <form onSubmit={this.submitHandler}>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              required
              value={name}
              onChange={({ target }) => this.formInputsChangeHandler(target)}
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              placeholder="Enter e-mail"
              name="email"
              required
              value={email}
              onChange={({ target }) => this.formInputsChangeHandler(target)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              required
              value={password}
              onChange={({ target }) => this.formInputsChangeHandler(target)}
            />
          </label>
          <button type="submit">Register</button>
        </form>
        <p>
          Registered? <Link to={loginPage}>Log In!</Link>
        </p>
      </>
    );
  }
}

export default connect(null, { onRegister: authOperation.register })(
  RegisterPage
);
