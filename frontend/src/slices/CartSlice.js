import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  count: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addTocart: (state, action) => {
      const foundprod = state.cartItems.find((item) => {
        return item._id === action.payload._id;
      });
      if (!foundprod) {
        state.cartItems.push({ ...action.payload, count: 1 });
        state.total += action.payload.price;
      } else {
        foundprod.count += 1;
        state.total += foundprod.price;
      }
      state.count += 1;
    },
    removeFromCart: (state, action) => {
      const foundprod = state.cartItems.find((item) => {
        return item._id === action.payload._id;
      });
      if (foundprod && foundprod.count > 1) {
        foundprod.count -= 1;
        state.total -= foundprod.price;
      } else {
        state.cartItems = state.cartItems.filter((item) => {
          return item._id !== action.payload._id;
        });
        state.total -= action.payload.price;
      }

      state.count -= 1;
    },
  },
});

export const { addTocart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
