import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isAuthenticated: true,
    admin: {},
  },
  reducers: {
    loginAdmin(state) {
      state.isAuthenticated = true;
    },
    logOutAdmin(state) {
      state.isAuthenticated = false;
    },
  },
});

export const adminActions = adminSlice.actions;

export default adminSlice.reducer;
