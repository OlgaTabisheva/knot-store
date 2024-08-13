import React from "react";

import style from "./Cart.module.scss";
import { CartBox } from "../CartBox/CartBox";

export const Cart: React.FC = () => {
  return (
    <div className={style.cart}>
      <h3>Корзина</h3>
      <div className={style.cart__box}>
        <CartBox />
        <CartBox />
        <CartBox />
        <CartBox />
      </div>
    </div>
  );
};
