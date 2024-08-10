import { createSlice,  } from "@reduxjs/toolkit";


export interface NewsInt {
  id: string;
  article: string;
  //date: any;
  name:string;

}

 interface initialStateTS {
    newsArray?: NewsInt[];
}

const initialState = {
    newsArray: [],
} as initialStateTS;

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    onfetchNews(state, action) {
      state.newsArray = action.payload.news;
    },

  },
});
export const {onfetchNews } = newsSlice.actions;
export const { actions, reducer } = newsSlice;
export default newsSlice.reducer;
