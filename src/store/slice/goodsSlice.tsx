import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../../firebase-config/firebase";

export const addGoodToFirestore = createAsyncThunk(
  "goods/addGoodsToFirestore",
  async (good: {}) => {
    const addGoodsRef = await addDoc(collection(db, "Goods"), good);
    const newGoods = { id: addGoodsRef.id, good };
    return newGoods;
  }
);
export interface goodInt {
  id: string;
  image: string;
  mainDescription: string;
  name: string;
  other: string;
  price: string;
  season: string;
  size: string;
  type: string;
  category: string;
  compound: string;
  description: string;
  goodSum:string
}

interface initialStateTS {
  goodsArray?: goodInt[];
  categoryGood: any;
}

const initialState = {
  goodsArray: [],
  categoryGood: [],
} as initialStateTS;

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    onfetchGoods(state, action) {
      state.goodsArray = action.payload.goods;
    },
    removeItem (state, action)  {
      const { id } = action.payload;
      let a:any = state.goodsArray;
      a = a.filter((item:{id:string}) => item.id !== id);
     state.goodsArray = a;
    },
    onfetchGoodsWithCategories(state, action) {
      state.categoryGood = action.payload.category;
      
    },
  },
});
export const { onfetchGoods, removeItem, onfetchGoodsWithCategories } =
  goodsSlice.actions;
export const { actions, reducer } = goodsSlice;
export default goodsSlice.reducer;
