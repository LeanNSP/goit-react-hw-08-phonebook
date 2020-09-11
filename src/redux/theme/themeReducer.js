import { createReducer } from "@reduxjs/toolkit";

import themeActions from "./themeActions";

import toggleNameTheme from "../../services/toggleNameTheme";

const toggleTheme = (theme, _) => toggleNameTheme(theme);

const fetchTheme = (theme, action) => (theme = action.payload);

const themeReducer = createReducer("light", {
  [themeActions.toggleThemeSuccess]: toggleTheme,
  [themeActions.fetchThemeSuccess]: fetchTheme,
});

export default themeReducer;
