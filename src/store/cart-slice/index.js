import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialShoppingCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};

// {id: 1, title: "React JS Course",
// price: 25,
// description: "This course will help you to learn basic thing in React"}

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialShoppingCartState,
  reducers: {
    addItem(state, action) {
      console.log("this is payload", action.payload);
      const newItem = action.payload;
      const isItemExist = state.items.find((i) => i.id === newItem.id);
      if (!isItemExist) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          title: newItem.title,
          quantity: 1,
          description: newItem.description
        });
        state.totalAmount++;
        state.totalQuantity++;
      } else {
        const item = state.items.find((i) => i.id === newItem.id);
        item.totalPrice += newItem.price;
        item.quantity++;
        state.totalAmount++;
        state.totalQuantity++;
      }
    },
    removeItem(state, action) {
      console.log("this is payload", action.payload);
      const existingItem = action.payload;
      const result = state.items.find((i) => i.id === existingItem.id);
      state.change = true;
      if (result.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== result.id);
      } else {
        result.quantity--;
        result.totalPrice = result.totalPrice - result.price;
      }
      state.totalQuantity--;
    }
  }
});

export default shoppingCartSlice.reducer;
export const shoppingCartActions = shoppingCartSlice.actions;
