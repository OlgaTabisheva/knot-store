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
      console.log(action.payload.cart,'action.payload.cart')
   //   localStorage.setItem('addToCartBox', JSON.stringify(state.cartArray));

    },
  // onAddCartItem(state, action) {
  //   state.cartArray = action.payload.cart;
     //state.cartArray = JSON.parse(localStorage.getItem('addToCartBox'));;

 //   },
  },
});
export const { onfetchCart } = cartSlice.actions;
export const { actions, reducer } = cartSlice;
export default cartSlice.reducer;
