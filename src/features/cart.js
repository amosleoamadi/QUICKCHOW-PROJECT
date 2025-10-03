import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartHolder: [],
  totalCarts: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const item = action.payload;
      const alreadyExisting = state.cartHolder.find((e) => e.id === item.id);

      if (alreadyExisting) {
        alreadyExisting.quantity += 1;
      } else {
        state.cartHolder.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const term = action.payload;
      const alreadyExisting = state.cartHolder.find((e) => e.id === term);

      if (alreadyExisting) {
        state.totalCarts -= alreadyExisting.quantity;
      }
    },

    increment: (state, action) => {
      const id = action.payload;
      const alreadyExisting = state.cartHolder.find((e) => e.id === id);

      if (alreadyExisting) {
        alreadyExisting.quantity += 1;
        state.totalCarts += 1;
      }
    },

    decrement: (state, action) => {
      const id = action.payload;
      const alreadyExisting = state.cartHolder.find((e) => i.id === id);

      if (alreadyExisting && alreadyExisting.quantity > 1) {
        alreadyExisting.quantity -= 1;
        state.totalCarts -= 1;
      } else if (alreadyExisting && alreadyExisting.quantity === 1) {
        state.cartHolder = state.cartHolder.filter((item) => item.id !== id);
        state.totalCarts -= 1;
      }
    },
  },
});

export const { addTocart, removeFromCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
