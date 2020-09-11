import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/AppContainer";

import store from "./redux/store";

import "./style.css";

/*
 * Start magic =)
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
