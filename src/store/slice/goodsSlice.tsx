import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../../firebase-config/firebase";


export const fetchGoods = createAsyncThunk("goods/fetchGoods", async () => {
  const querySnapshot = await getDocs(collection(db, "Goods"));
  const goods = querySnapshot.docs.map((doc:any) => ({
    id: doc.id,
    good: doc.data(),
  }));
  return goods;
});


export const addGoodToFirestore = createAsyncThunk(
  'goods/addGoodsToFirestore',
  async (good:{})=>{
      const addGoodsRef = await addDoc(collection(db,'Goods'),good);
      const newGoods = { id: addGoodsRef.id, good };
      return newGoods;
  }
);


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
    builder
    .addCase(fetchGoods.fulfilled, (state:any, action) => {
      state.goodsArray = action.payload;
    })
    .addCase(addGoodToFirestore.fulfilled, (state:any, action)=>{
      state.goodsArray.push(action.payload);
    })
  },
});

export default goodsSlice.reducer ;
