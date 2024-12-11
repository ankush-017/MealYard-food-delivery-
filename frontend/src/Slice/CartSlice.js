import { createSlice } from '@reduxjs/toolkit';
import { food_list } from '../assets/assets';

const initialState = {
  cartItems: {}, // Initialize as an object
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemId = action.payload.id;
      if (state.cartItems[itemId]) {
        // If the item already exists, increase the quantity
        state.cartItems[itemId].quantity += 1;
      } else {
        // If the item does not exist, add it to the cart
        state.cartItems[itemId] = { ...action.payload, quantity: 1 };
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems[itemId]) {
        if (state.cartItems[itemId].quantity > 1) {
          // Decrease the quantity if more than 1
          state.cartItems[itemId].quantity -= 1;
        } else {
          // Remove the item if quantity is 1
          delete state.cartItems[itemId];
        }
      }
    },
  },
});

export const { addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalAmount = (state) => {
  let totalAmount = 0;
  const cartItems = state.cart.cartItems; // Access cartItems from state
  for (const itemId in cartItems) {
    const itemInfo = food_list.find((product) => product._id === itemId);
    if (itemInfo) {
      totalAmount += itemInfo.price * cartItems[itemId].quantity;
    }
  }
  return totalAmount;
};