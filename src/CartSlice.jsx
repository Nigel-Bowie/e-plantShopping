import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructure product details from the action payload
      // Check if the item already exists in the cart by comparing names
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // If item already exists in the cart, increase its quantity
        existingItem.quantity++;
      } else {
        // If item does not exist, add it to the cart with quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructure product details from the action payload
      // Check if the item already exists in the cart by comparing names
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // If item already exists in the cart, remove it from the cart
          state.items = state.items.filter(item => item.name !== name);
      }
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Destructure product name and new quantity from the action payload
      // Find the item in the cart by name
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // Update the quantity of the existing item
        existingItem.quantity = quantity;
        // If the quantity becomes 0, remove the item from the cart
        if (existingItem.quantity === 0) {
          state.items = state.items.filter(item => item.name !== name);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
