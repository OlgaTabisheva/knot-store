import {  createSlice } from "@reduxjs/toolkit";


export interface categoryArrayTS{
  id: string;
  CategoryName:string,
  category: string,
  image: string,
  linkCategory: string,
  type: string[],
  price: number,
  size: number,
  name:string,
}

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