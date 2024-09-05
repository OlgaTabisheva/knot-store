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
      console.log(action.payload.category,'action.payload.category')
      state.categoryArray = action.payload.category;

},
  },

  
});

export const { onfetchCategory } = categorySlice.actions;
export const { actions, reducer } = categorySlice;
export default categorySlice.reducer;