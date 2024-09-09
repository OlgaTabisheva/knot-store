import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface authState {
  email: string | null;
  token: string | null;
  id: string | null;
  isLoggedIn: boolean;
  user: any ,
  error: any

  
  
}

const initialState: authState = {
  email: null,
  token: null,
  id: null,
  isLoggedIn: false,
  user: null,
  error: ''
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onGetAuth(state) {
      state.user = JSON.parse(localStorage.getItem("saveAuth") || "{}");
    },
    onRegisterAuth(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isLoggedIn = true;
      localStorage.setItem("saveAuth", JSON.stringify(action.payload));

    },
    onLogoutAuth(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.isLoggedIn = false;
      localStorage.removeItem("saveAuth");
    },
    onError(state, action) {
      state.error = toast.error(action.payload, { position: "top-left" });
    },
    setIsLoggedIn(state) {
      state.isLoggedIn = true;
    },
  },
});
export const { onRegisterAuth, onLogoutAuth, onError, setIsLoggedIn,onGetAuth } =
  authSlice.actions;
export const { actions, reducer } = authSlice;
export default authSlice.reducer;
