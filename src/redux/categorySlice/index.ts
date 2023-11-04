import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categorySlcie",
  initialState: {
    filteredData: [],
  },
  reducers: {
    setFiltered(state, action) {},
  },
});

export default categorySlice.reducer;
