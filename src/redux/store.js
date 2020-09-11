import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/contactsReducer";
import themeReducer from "./theme/themeReducer";
import loadingThemeReducer from "./theme/loadingThemeReducer";
import errorReducer from "./error/errorReducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    theme: themeReducer,
    loadingTheme: loadingThemeReducer,
    error: errorReducer,
  },
});

export default store;
