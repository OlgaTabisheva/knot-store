import React from "react";
import style from "./CartPayBox.module.scss";

export const CartPayBox: React.FC = () => {
  return (
    <div className={style.cartPayBox}>
      <h3>Сумма заказов в вашей корзине:</h3>
      <p>500 USD</p>
      <button>Оформить заказ</button>
    </div>
  );
};
