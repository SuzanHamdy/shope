import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const WishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    add(state, action) {
      // Add a new item to the cart
      state.push(action.payload);
    },
    remove(state, action) {
      // Remove the item with the specified id
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = WishSlice.actions;
export default WishSlice.reducer;
