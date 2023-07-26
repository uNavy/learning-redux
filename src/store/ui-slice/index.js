import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  showCart: true
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    }
  }
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
