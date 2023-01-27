import { configureStore, combineReducers } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// REDUCERS
import usersReducer from "../reducers/usersReducer";

// configureStore will set up the Redux Store for us!

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const bigReducer = combineReducers({
  user: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
