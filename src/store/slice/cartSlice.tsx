import { createSlice } from "@reduxjs/toolkit";

export interface cartInt {
  count: number;
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  size: string;
}

interface initialStateTS {
  cartArray?: cartInt[];
}
const initialState = {
  cartArray: [],
  count: 0,
} as initialStateTS;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    onfetchCart(state, action) {
      state.cartArray = action.payload.cart;
      localStorage.setItem("addToCartBox", JSON.stringify(state.cartArray));
    },
    onAddCartItem: (state, action) => {
      let foundItem = state.cartArray?.find(
        (s: { id: string }) => s?.id === action.payload.id
      );
      if (foundItem === undefined) {
        let tmp = [...state.cartArray, action.payload];
        tmp.sort(function (a: { id: string }, b: { id: string }) {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        });
        state.cartArray = tmp;
      } else {
        let tmp = state.cartArray?.filter(
          (s: { id: string }) => s?.id !== action.payload.id
        );

        let couterItem = {
          id: foundItem.id,
          count: foundItem.count + 1,
          price: foundItem.price,
          name: foundItem.name,
          image: foundItem.image,
          description: foundItem.description,
          size: foundItem.size,
        };
        tmp = [...tmp, couterItem];
        tmp.sort(function (a: { id: string }, b: { id: string }) {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        });

        state.cartArray = tmp;
      }
      localStorage.setItem("addToCartBox", JSON.stringify(state.cartArray));
    },

    reduceCountCartItem(state, action) {
      let tmpStor = JSON.parse(localStorage.getItem("addToCartBox") || "{}");
      state.cartArray = tmpStor;
      let foundItem = state.cartArray?.find(
        (s: { id: string }) => s?.id === action.payload.id
      );
   console.log(action.payload, 'action.payload.')
      if (action.payload.count > 1) {
        let tmp = state.cartArray?.filter(
          (s: { id: string }) => s?.id !== action.payload.id
        );
        let couterItem = {
          id: action.payload.id,
          count: action.payload.count - 1,
          price: action.payload.price,
          name: action.payload.name,
          image: action.payload.image,
          description: action.payload.description,
          size: action.payload.size,
        };
      
      tmp = [...tmp, couterItem];
      tmp.sort(function (a: { id: string }, b: { id: string }) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });

      state.cartArray = tmp;
    }
    },
  },
});
export const { onfetchCart, onAddCartItem, reduceCountCartItem, updateCartItem } =
  cartSlice.actions;
export const { actions, reducer } = cartSlice;
export default cartSlice.reducer;
