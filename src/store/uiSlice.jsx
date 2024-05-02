import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showMenuBar: false,
  },
  reducers: {
    menuBarHanlder(state) {
      document.body.style.overflow = state.showMenuBar ? "" : "hidden";
      state.showMenuBar = !state.showMenuBar;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
