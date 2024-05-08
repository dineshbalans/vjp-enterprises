import { createSlice } from "@reduxjs/toolkit";
import { remove } from "firebase/database";

const initialState = {
  items: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList(state, { payload }) {
      const itemExist = state.items.find(
        (item) => item.itemId === payload.itemId
      );
      itemExist ? alert("Item already added") : state.items.push(payload);
    },
    removeFromWishList(state, { payload }) {
      state.items = state.items.filter((item) => item.itemId !== payload);
    },
    clearWishList(state) {
      state.items = [];
    },
  },
});

export const wishListActions = wishListSlice.actions;

export default wishListSlice.reducer;
