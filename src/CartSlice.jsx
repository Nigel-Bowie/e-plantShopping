import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // <-- this stores all items added to cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Check if item already exists in cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1; // increment quantity if exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(i => i.name === action.payload.name);
      if (item) item.quantity = action.payload.quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;