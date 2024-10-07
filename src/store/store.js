import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducer/themeReducer";
import langReducer from "./reducer/langReducer";
import userReducer from "./reducer/userReducer";
import detailRestoReducer from "./reducer/detailRestoReducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    user: userReducer,
    detailResto: detailRestoReducer,
  },
});

export default store;

// Catatan ini ditulis oleh Zahran
