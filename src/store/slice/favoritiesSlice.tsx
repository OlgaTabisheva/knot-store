import { createSlice } from "@reduxjs/toolkit";

export interface favoritiesInt {
  UserUId:string;
  itemId:{id:string}
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
        //state.favoritiesArray = action.payload.order;
        state.favoritiesArray = action.payload?.itemId?.id;

        console.log(action.payload, 'action.payload')
        localStorage.setItem("favorities", JSON.stringify(state.favoritiesArray));

      },
 
  },
});
export const { onfetchFavorities,addToFavorities} = favoritiesSlice.actions;
export const { actions, reducer } = favoritiesSlice;
export default favoritiesSlice.reducer;
