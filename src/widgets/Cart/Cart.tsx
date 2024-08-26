import React, { useEffect, useState } from "react";
import style from "./Cart.module.scss";
import { CartBox } from "../CartBox/CartBox";
import { CartPayBox } from "../CartPayBox/CartPayBox";
import { useDispatch, useSelector } from "react-redux";
import { onfetchCart } from "../../store/slice/cartSlice";

export const Cart: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartArray);
  const dispatch = useDispatch();
  const [items, setItems] = useState<any>();

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);


  function changeCount(a: string, operation: string) {
    let foundItem: any = items?.find((item: any) => item?.id === a);

    if (operation === "plus") {
      if (foundItem.count <= 0) {
      } else {
        let tmp = items.filter((item: { id: string }) => item.id !== a);
        let couterItem = {
          id: foundItem?.id,
          count: foundItem.count + 1,
          price: foundItem?.price,
          name: foundItem?.name,
          size: foundItem?.size,
          image: foundItem?.image,
          CategoryName: foundItem?.CategoryName,
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

        setItems(tmp);
      }
    }
    if (operation === "minus") {
      if (foundItem.count <= 1) {
      } else {
        let tmp = items.filter((item: { id: string }) => item.id !== a);
        let couterItem = {
          id: foundItem?.id,
          count: foundItem.count - 1,
          price: foundItem?.price,
          name: foundItem?.name,
          size: foundItem?.size,
          image: foundItem?.image,
          CategoryName: foundItem?.CategoryName,
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

        setItems(tmp);
      }
    }
    localStorage.setItem("addToCartBox", JSON.stringify(items));
    dispatch(
      onfetchCart({
        cart: items,
      })
    );
  }



  return (
    <div className={style.cart}>
      <h3>В вашей корзине 4 товара</h3>
      <div className={style.cart__cover}>
        <div className={style.cart__box}>
          {items?.map(
            (cartItem: {
              id: string;
              count: number;
              name: string;
              size: string;
              price: number;
              CategoryName: string;
              image: string;
            }) => (
              <CartBox
                key={cartItem.id}
                id={cartItem.id}
                changeCount={changeCount}
                count={cartItem?.count}
                image={cartItem?.image}
                name={cartItem?.name}
                size={cartItem?.size}
                price={cartItem?.price}
                CategoryName={cartItem?.CategoryName}
              />
            )
          )}
        </div>

        <CartPayBox  />
      </div>
    </div>
  );
};

