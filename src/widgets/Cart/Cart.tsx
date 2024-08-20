import React, { useEffect, useState } from "react";

import style from "./Cart.module.scss";
import { CartBox } from "../CartBox/CartBox";
import { CartPayBox } from "../CartPayBox/CartPayBox";
import { useSelector } from "react-redux";

export const Cart: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartArray);

  const [items, setItems] = useState<any>();
  useEffect(() => {
      setItems(cartItems);
  }, [cartItems]);

  console.log(cartItems, "cartItems");
  return (
    <div className={style.cart}>
      <h3>В вашей корзине 4 товара</h3>
      <div className={style.cart__cover}>
        <div className={style.cart__box}>
          {items?.map((cartItem:{id:string,name:string,size:string,price:string,CategoryName:string}) => (
            <CartBox key={cartItem.id} name={cartItem?.name} size={cartItem?.size} price={cartItem?.price} CategoryName={cartItem?.CategoryName}/>
          ))}
        </div>

        <CartPayBox />
      </div>
    </div>
  );
};
