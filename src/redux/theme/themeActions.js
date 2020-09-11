import { createAction } from "@reduxjs/toolkit";

const toggleThemeRequest = createAction("theme/toggleRequest");
const toggleThemeSuccess = createAction("theme/toggleSuccess");
const toggleThemeError = createAction("theme/toggleError");

const fetchThemeRequest = createAction("theme/fetchRequest");
const fetchThemeSuccess = createAction("theme/fetchSuccess");
const fetchThemeError = createAction("theme/fetchError");

export default {
  toggleThemeRequest,
  toggleThemeSuccess,
  toggleThemeError,
  fetchThemeRequest,
  fetchThemeSuccess,
  fetchThemeError,
};
