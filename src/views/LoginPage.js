import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import routes from "../routes";

import { authOperation } from "../redux/auth";

const INITIAL_STATE = { email: "", password: "" };

class LoginPage extends Component {
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

    this.props.onLogin({ ...this.state });

    this.clearForm();
  };

  /*
   * Clearing a form
   */
  clearForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;
    const { registerPage } = routes;

    return (
      <>
        <h2>Authorisation, please!</h2>
        <form onSubmit={this.submitHandler}>
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
          <button type="submit">Login</button>
        </form>
        <p>
          Non account? <Link to={registerPage}>Register!</Link>
        </p>
      </>
    );
  }
}

export default connect(null, { onLogin: authOperation.logIn })(LoginPage);
