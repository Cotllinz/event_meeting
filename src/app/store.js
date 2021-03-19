import { configureStore } from "@reduxjs/toolkit";
import FormData from "../components/_base/Forms/formReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
const reducers = combineReducers({
  meetings: FormData,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer,
});
