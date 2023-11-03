import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import CartSlice from "./features/cart/CartSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: CartSlice,
  },
});

export default store;
