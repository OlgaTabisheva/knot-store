import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface authState {
  email: string | null;
  token: string | null;
  id: string | null;
  isLoggedIn: boolean;
}

const initialState: authState = {
  email: null,
  token: null,
  id: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onRegisterAuth(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isLoggedIn = true;
    },
    onLogoutAuth(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.isLoggedIn = false;
      localStorage.removeItem("saveAuth");
    },
    onError(state, action) {
      toast.error(action.payload, { position: "top-left" });
    },
    setIsLoggedIn(state) {
      state.isLoggedIn = true;
    },
  },
});
export const { onRegisterAuth, onLogoutAuth, onError, setIsLoggedIn } =
  authSlice.actions;
export const { actions, reducer } = authSlice;
export default authSlice.reducer;
