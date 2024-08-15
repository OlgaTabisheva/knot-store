import React from "react";

import style from "./Cart.module.scss";
import { CartBox } from "../CartBox/CartBox";
import { CartPayBox } from "../CartPayBox/CartPayBox";

export const Cart: React.FC = () => {
  return (
    <div className={style.cart}>
      <h3>В вашей корзине 4 товара</h3>
      <div className={style.cart__cover}>
        <div className={style.cart__box}>
          <CartBox />
          <CartBox />
          <CartBox />
          <CartBox />
        </div>

        <CartPayBox />
      </div>
    </div>
  );
};
