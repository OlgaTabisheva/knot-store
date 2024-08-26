import React, { useEffect } from "react";
import style from "./CartPayBox.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const CartPayBox: React.FC <{handleOnClickPopup :any}>= () => {

  const cartItems = useSelector((state: any) => state.cart.cartArray);



  return (
    <div className={style.cartPayBox}>
      <h3>Сумма заказов в вашей корзине:</h3>
      <p>{cartItems?.reduce((s:number, i:{price:number,count:number}) => s = s + i.price*i.count, 0)} USD</p>
      <Link to='/order' className={style.cartPayBox__button} >Оформить заказ</Link>

    </div>
  );
};
