import { createSlice,  } from "@reduxjs/toolkit";


export interface NewsInt {
  id: string;
  article: string;
  //date: any;
  name:string;
  image: string;

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
    removeNews (state, action)  {
      const { id } = action.payload;
      let a:any = state.newsArray;
      a = a.filter((item:{id:string}) => item.id !== id);
     state.newsArray = a;
    },

  },
});
export const {onfetchNews, removeNews } = newsSlice.actions;
export const { actions, reducer } = newsSlice;
export default newsSlice.reducer;
