import { authActions } from "./";

import fetchDB, { tokenToHeader } from "../../services/fetchDB";

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  fetchDB
    .post("/users/signup", credentials)
    .then((data) => {
      tokenToHeader.set(data.token);
      dispatch(authActions.registerSuccess(data));
    })
    .catch(({ message }) => dispatch(authActions.registerError(message)));
};

const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  fetchDB
    .post("/users/login", credentials)
    .then((data) => {
      tokenToHeader.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(({ message }) => dispatch(authActions.loginError(message)));
};

const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  fetchDB
    .post("/users/logout")
    .then(() => {
      tokenToHeader.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(({ message }) => dispatch(authActions.logoutError(message)));
};

const getCurrentUser = (onFetchContacts) => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (persistedToken) {
    tokenToHeader.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest());

    fetchDB
      .get("/users/current")
      .then((data) => {
        dispatch(authActions.getCurrentUserSuccess(data));
      })
      .catch(({ message }) =>
        dispatch(authActions.getCurrentUserError(message))
      );
    onFetchContacts();
  }
};

export default { register, logIn, logOut, getCurrentUser };
