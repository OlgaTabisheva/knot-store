import React from "react";
import cartImg from "./../../assets/586e4b7a-18c8-4278-98c5-2060605eb28d.png";

import style from "./CartBox.module.scss";

interface cartBoxInt{
  name:string,
  price:string,
  size:string,
  CategoryName:string,
}

export const CartBox: React.FC<cartBoxInt> = ({name, size, price, CategoryName}) => {
  return (
    <div className={style.cartBox}>
      <h3>Позиция: {name}</h3>
      <div className={style.cartBox__box}>
        <div className={style.cartBox__imgBox} >
          <img src={cartImg} className={style.cartBox__img} />
          <div className={style.cartBox__itemDescriptionBox}>
            <h4>{CategoryName}</h4>
            <p>{size} размер</p>
            <p>1 шт.</p>
          </div>
        </div>
        <div className={style.cartBox__price}>USD {price}</div>
      </div>
      <div className={style.cartBox__boxButtons}>
        <button className={style.cartBox__button}>Отложить в избранное</button>
        <button className={style.cartBox__button}>Удалить</button>
      </div>
    </div>
  );
};
