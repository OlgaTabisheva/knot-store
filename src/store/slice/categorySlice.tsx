import {  createSlice } from "@reduxjs/toolkit";


interface initialStateTS {
  categoryArray?: string[];
}

const initialState = {
  categoryArray: [],
} as initialStateTS;

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    onfetchCategory(state, action) {  
      state.categoryArray = action.payload.category;

},
  },

  
});

export const { onfetchCategory } = categorySlice.actions;
export const { actions, reducer } = categorySlice;
export default categorySlice.reducer;