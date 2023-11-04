import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import categorySlice from "./categorySlice";
import activeSlice from "./activeSlice";
const store = configureStore({
  reducer: {
    modal: modalSlice,
    category: categorySlice,
    active: activeSlice,
  },
});

export default store;
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
