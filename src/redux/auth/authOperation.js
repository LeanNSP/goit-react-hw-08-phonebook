import { authActions } from "./";
import { contactsActions } from "../contacts/";

import fetchDB, { tokenToHeader } from "../../services/fetchDB";

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const data = await fetchDB.post("/users/signup", credentials);

    tokenToHeader.set(data.token);
    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const data = await fetchDB.post("/users/login", credentials);

    tokenToHeader.set(data.token);
    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    await fetchDB.post("/users/logout");

    tokenToHeader.unset();
    dispatch(contactsActions.clearContactsItems());
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (persistedToken) {
    tokenToHeader.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest());

    try {
      const data = await fetchDB.get("/users/current");

      dispatch(authActions.getCurrentUserSuccess(data));
    } catch (error) {
      dispatch(authActions.getCurrentUserError(error.message));
    }
  }
};

export default { register, logIn, logOut, getCurrentUser };
