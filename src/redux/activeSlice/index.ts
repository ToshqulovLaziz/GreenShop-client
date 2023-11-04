import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
  name: "activeSlcie",
  initialState: {
    active: "text-[#46a358]",
  },
  reducers: {
    setActive(state, action) {
      state.active = action.payload;
    },
  },
});

export default activeSlice.reducer;

export const { setActive } = activeSlice.actions;
