import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import wishlistReducer from "./wishListSlice";
import adminReducer from "./adminSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    wishlist: wishlistReducer,
    admin: adminReducer,
  },
});

export default store;
