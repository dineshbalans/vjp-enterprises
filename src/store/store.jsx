import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import wishlistReducer from "./wishListSlice";
import adminReducer from "./adminSlice";
import orderReducer from "./orderSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    admin: adminReducer,
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
  },
});

export default store;
