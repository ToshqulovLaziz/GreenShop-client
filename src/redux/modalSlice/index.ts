import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlcie",
  initialState: {
    siteMapModalVisibilty: false,
    authModal: false,
    googleVerification: false,
  },
  reducers: {
    setSiteMapModalVisibilty(state) {
      state.siteMapModalVisibilty = !state.siteMapModalVisibilty;
    },
    setAuthModal(state) {
      state.authModal = !state.authModal;
    },
    setGoogleVerification(state) {
      state.googleVerification = !state.googleVerification;
    },
  },
});

export default modalSlice.reducer;

export const { setSiteMapModalVisibilty, setAuthModal, setGoogleVerification } =
  modalSlice.actions;
