import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlcie",
  initialState: {
    siteMapModalVisibilty: false,
  },
  reducers: {
    setSiteMapModalVisibilty(state) {
      state.siteMapModalVisibilty = !state.siteMapModalVisibilty;
    },
  },
});

export default modalSlice.reducer;

export const { setSiteMapModalVisibilty } = modalSlice.actions;
