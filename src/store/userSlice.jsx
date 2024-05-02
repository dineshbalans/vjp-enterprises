import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    loginUser(state) {
      state.isAuthenticated = true;
    },
    logOutUser(state) {
      state.isAuthenticated = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
