import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, clearCart } = productSlice.actions;

export default productSlice.reducers;
