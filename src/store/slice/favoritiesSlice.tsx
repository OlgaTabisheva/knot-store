import { createSlice } from "@reduxjs/toolkit";

export interface favoritiesInt {

}

interface initialStateTS {
    favoritiesArray?: favoritiesInt[];
}

const initialState = {
    favoritiesArray: [],
} as initialStateTS;

const favoritiesSlice = createSlice({
  name: "favorities",
  initialState,
  reducers: {
    onfetchFavorities(state, action) {
      state.favoritiesArray = action.payload.order;
    },
    addToFavorities(state, action) {
        state.favoritiesArray = action.payload.order;
      },
 
  },
});
export const { onfetchFavorities,addToFavorities} = favoritiesSlice.actions;
export const { actions, reducer } = favoritiesSlice;
export default favoritiesSlice.reducer;
