import { createSlice } from "@reduxjs/toolkit";

export interface cartInt {}

interface initialStateTS {
  cartArray?: cartInt[];
}
const initialState = {
  cartArray: [],
} as initialStateTS;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    onfetchCart(state, action) {
      state.cartArray = action.payload.cart;
   //   localStorage.setItem('addToCartBox', JSON.stringify(state.cartArray));

    },
  onAddCartItem(state, action) {
     state.cartArray = action.payload.cart;

    },
  },
});
export const { onfetchCart,onAddCartItem } = cartSlice.actions;
export const { actions, reducer } = cartSlice;
export default cartSlice.reducer;
