import { createSlice } from "@reduxjs/toolkit";

export interface messagesInt {
  id: string;
  text: string;
  userUld: string;
  publish: boolean;
  createdAt: string;
  userEmail: string;
}

interface initialStateTS {
  messagesArray?: messagesInt[];
  messagesArrayAdmin?:messagesInt[]
}

const initialState = {
  messagesArray: [],
  messagesArrayAdmin: []
} as initialStateTS;

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    onfetchMessages(state, action) {
      state.messagesArray = action.payload;
    },
 
      onfetchMessagesAdmin(state, action) {
        state.messagesArrayAdmin = action.payload;
      },
    /*    removeMessage (state, action)  {
      const { id } = action.payload;
      let a:any = state.newsArray;
      a = a.filter((item:{id:string}) => item.id !== id);
     state.newsArray = a;
    }, */
  },
});
export const { onfetchMessages,onfetchMessagesAdmin } = messagesSlice.actions;
export const { actions, reducer } = messagesSlice;
export default messagesSlice.reducer;
