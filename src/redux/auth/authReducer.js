import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { authActions } from "./";

const INITIAL_USER_STATE = { name: null, email: null };

const user = createReducer(INITIAL_USER_STATE, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => INITIAL_USER_STATE,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

export default combineReducers({ user, token });
