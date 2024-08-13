import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  email: string | null;
  token: string | null;
  id: string | null;
  isLoggedIn: boolean;
}

const initialState: cartState = {

};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

  },
});
export const {  } =
cartSlice.actions;
export const { actions, reducer } = cartSlice;
export default cartSlice.reducer;
