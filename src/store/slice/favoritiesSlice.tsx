import { createSlice } from "@reduxjs/toolkit";
import { goodInt } from "./goodsSlice";

export interface favoritiesInt {
  UserUId:string;
  itemId:{id:string}
}

interface initialStateTS {
    favoritiesArray?: favoritiesInt[];
    favoritiesGoodsArray: goodInt[];
}

const initialState = {
    favoritiesArray: [],
    favoritiesGoodsArray: []
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
      onfetchFavoritiesGoods(state, action) {
        state.favoritiesGoodsArray = action.payload;
console.log(state.favoritiesGoodsArray, 'tate.favoritiesGoodsArray')
localStorage.setItem("favoritiesGoods", JSON.stringify(state.favoritiesGoodsArray));

      },
 
  },
});
export const { onfetchFavorities,addToFavorities,onfetchFavoritiesGoods} = favoritiesSlice.actions;
export const { actions, reducer } = favoritiesSlice;
export default favoritiesSlice.reducer;
