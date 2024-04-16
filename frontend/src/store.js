import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import CartSlice from "./slices/CartSlice";
import UserSlice from "./slices/UserSlice";
const store = configureStore({
  reducer: {
    products: ProductSlice,
    cart: CartSlice,
    user: UserSlice,
  },
});

export default store;
