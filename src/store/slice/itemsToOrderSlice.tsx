import { createSlice } from "@reduxjs/toolkit";

export interface itemsToOrderInt {
  id: string;
  needsText: string;
  date: string;
  contacts: string;
  image: string;
}

interface initialStateTS {
  itemsToOrderArray?: itemsToOrderInt[];
}

const initialState = {
  itemsToOrderArray: [],
} as initialStateTS;

const itemsToOrderSlice = createSlice({
  name: "itemsToOrderSlice",
  initialState,
  reducers: {
    onfetchItemsToOrderSlice(state, action) {
      state.itemsToOrderArray = action.payload;
    },
  },
});
export const { onfetchItemsToOrderSlice } = itemsToOrderSlice.actions;
export const { actions, reducer } = itemsToOrderSlice;
export default itemsToOrderSlice.reducer;
