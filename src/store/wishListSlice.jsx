import { createSlice } from "@reduxjs/toolkit";
import { remove } from "firebase/database";

const initialState = {
  items: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishList(state, { payload }) {
      state.items = payload;
    },
    addToWishList(state, { payload }) {
      const itemExist = state.items.find(
        (item) => item._id === payload._id
      );
      itemExist ? alert("Item already added") : state.items.push(payload);
    },
    removeFromWishList(state, { payload }) {
      state.items = state.items.filter((item) => item._id !== payload);
    },
    clearWishList(state) {
      state.items = [];
    },
  },
});

export const wishListActions = wishListSlice.actions;

export default wishListSlice.reducer;
