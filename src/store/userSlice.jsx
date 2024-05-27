import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    user: {},
    orders: [],
  },
  reducers: {
    loginUser(state) {
      state.isAuthenticated = true;
    },
    logOutUser(state) {
      state.isAuthenticated = false;
    },
    setUser(state, { payload }) {
      state.user = payload;
    },
    addOrders(state, { payload }) {
      state.orders = payload;
    },
    addOrder(state, { payload }) {
      state.orders = [...state.orders, payload];
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
