import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactsReducer } from "./contacts";
import { authReducer } from "./auth";
import { themeReducer } from "./theme";
import { errorReducer } from "./error";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["theme"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  theme: themeReducer,
  error: errorReducer,
});

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
});

export const persistor = persistStore(store);
