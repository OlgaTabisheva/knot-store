import { createSlice,  } from "@reduxjs/toolkit";


export interface messagesInt {
  id: string;
  text: string;
  //date: any;
  userUld:string;

}

 interface initialStateTS {
    messagesArray?: messagesInt[];
}

const initialState = {
    messagesArray: [],
} as initialStateTS;

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    onfetchMessages(state, action) {
      state.messagesArray = action.payload;
    },
 /*    removeMessage (state, action)  {
      const { id } = action.payload;
      let a:any = state.newsArray;
      a = a.filter((item:{id:string}) => item.id !== id);
     state.newsArray = a;
    }, */

  },
});
export const {onfetchMessages } = messagesSlice.actions;
export const { actions, reducer } = messagesSlice;
export default messagesSlice.reducer;
