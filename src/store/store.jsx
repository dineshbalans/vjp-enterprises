import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
