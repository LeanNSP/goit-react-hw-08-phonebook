import { createReducer } from "@reduxjs/toolkit";

import { themeActions } from "./";

const toggleTheme = (theme) => {
  return theme === "light" ? "dark" : "light";
};

const themeReducer = createReducer("light", {
  [themeActions.toggleTheme]: toggleTheme,
});

export default themeReducer;
