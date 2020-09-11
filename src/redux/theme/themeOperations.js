import themeActions from "./themeActions";

import fetchDB from "../../services/fetchDB";
import toggleNameTheme from "../../services/toggleNameTheme";

const toggleTheme = (theme) => (dispatch) => {
  dispatch(themeActions.toggleThemeRequest());

  fetchDB
    .patch("/profile", { theme: toggleNameTheme(theme) })
    .then(() => dispatch(themeActions.toggleThemeSuccess()))
    .catch(({ message }) => dispatch(themeActions.toggleThemeError(message)));
};

const fetchTheme = () => (dispatch) => {
  dispatch(themeActions.fetchThemeRequest());

  fetchDB
    .get("/profile")
    .then(({ theme }) => {
      dispatch(themeActions.fetchThemeSuccess(setDefaultTheme(theme)));
    })
    .catch(({ message }) => dispatch(themeActions.fetchThemeError(message)));
};

const setDefaultTheme = (theme) => {
  if (!theme) {
    fetchDB
      .post("/profile", { theme: "light" })
      .then()
      .catch((error) => {
        throw error;
      });
    return "light";
  }
  return theme;
};

export default { toggleTheme, fetchTheme };
