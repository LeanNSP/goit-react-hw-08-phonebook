import { createReducer } from "@reduxjs/toolkit";

import themeActions from "./themeActions";

const loadingThemeReducer = createReducer(false, {
  [themeActions.fetchThemeRequest]: () => true,
  [themeActions.fetchThemeSuccess]: () => false,
  [themeActions.fetchThemeError]: () => false,
  [themeActions.toggleThemeRequest]: () => true,
  [themeActions.toggleThemeSuccess]: () => false,
  [themeActions.toggleThemeError]: () => false,
});

export default loadingThemeReducer;
