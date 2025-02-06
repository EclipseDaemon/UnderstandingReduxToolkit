import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.title === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({
          id: nanoid(),
          title: action.payload,
          quantity: 1,
        });
      }
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
