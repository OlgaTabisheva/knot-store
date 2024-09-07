import { createSlice } from "@reduxjs/toolkit";

export interface orderInt {
  id: string;
  nameItem: string;
  note: string;
  status: string;
  sum: string;
  telephone: string;
  userName: string;
  goods: any;
  email: string
}

interface initialStateTS {
  orderArray?: orderInt[];
}

const initialState = {
  orderArray: [],
} as initialStateTS;

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    onfetchOrders(state, action) {
      state.orderArray = action.payload.order;
    },
    onfetchUpdateOrders(state, action) {
      state.orderArray = action.payload.order;
    },
    addOrder(state, action) {
      state.orderArray = action.payload.order;
    },
    dellOrder(state, action) {
      state.orderArray = action.payload.order;
    },
  },
});
export const { onfetchOrders,onfetchUpdateOrders, addOrder, dellOrder } = orderSlice.actions;
export const { actions, reducer } = orderSlice;
export default orderSlice.reducer;
