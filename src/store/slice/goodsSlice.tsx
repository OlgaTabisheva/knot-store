import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase-config/firebase";

export const fetchGoods = createAsyncThunk("goods/fetchGoods", async () => {
  const querySnapshot = await getDocs(collection(db, "Goods"));
  const goods = querySnapshot.docs.map((doc:any) => ({
    id: doc.id,
    good: doc.data(),
  }));
  return goods;
});
interface initialStateTS {
  goodsArray?: string[];

}

const initialState = {
    goodsArray: []

} as initialStateTS;

const goodsSlice = createSlice({
  name: "goods",
  initialState  ,
  reducers: {},
  extraReducers: builder=> {
    return builder.addCase<any>(fetchGoods.fulfilled, (state: any, action: PayloadAction<number>) => {
      state.goodsArray = action.payload;
    });
  },
});

export default goodsSlice.reducer ;
