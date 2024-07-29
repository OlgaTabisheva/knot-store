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
interface goodInt {

  id: string;
  good: string;
  // image: string;
  // mainDescription: string;
  // name: string;
  // other: string;
  // price: string;
  // season: string;
  // size: string;
  // type: string;
  // category: string;
  // compound: string;
  // description: string;
}

interface initialStateTS {
  goodsArray?: goodInt[];
}

const initialState = {
  goodsArray: [],
} as initialStateTS;

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    onfetchGoods(state, action) {  
          state.goodsArray = action.payload.goods;

    },
  },
});
export const { onfetchGoods } = goodsSlice.actions;
export const { actions, reducer } = goodsSlice;
export default goodsSlice.reducer;
