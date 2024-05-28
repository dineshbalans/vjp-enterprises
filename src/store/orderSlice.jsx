import { createSlice } from "@reduxjs/toolkit";

// Not Needed
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [
      {
        orderId: "123456",
        email: "user@example.com",
        total: 45_789,
        paid: "Paid At Today 23:56 AM",
        date: "Dec 12 2021",
        status: "Delivered",
        shipping: 9841,
        tax: 355,
      },
      {
        orderId: "789012",
        email: "user@example.com",
        total: 45_789,
        paid: "Not paid",
        date: "Dec 12 2021",
        status: "Not Delivered",
        shipping: 9841,
        tax: 355,
      },
    ],
  },
  reducers: {
    addOrder(state, { payload }) {
      state.orders = [...state.orders, payload];
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
