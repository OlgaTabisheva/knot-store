import React from "react";
import cartImg from "./../../assets/586e4b7a-18c8-4278-98c5-2060605eb28d.png";

import style from "./CartBox.module.scss";

export const CartBox: React.FC = () => {
  return (
    <div className={style.cartBox}>
      <h3>позиция</h3>
      <div className={style.cartBox__box}>
        <div className={style.cartBox__imgBox} >
          <img src={cartImg} className={style.cartBox__img} />
          <div className={style.cartBox__itemDescriptionBox}>
            <h4>Название</h4>
            <p>Что-то еще</p>
            <p>Краткое описание</p>
          </div>
        </div>
        <div className={style.cartBox__price}>USD 160</div>
      </div>
      <div className={style.cartBox__boxButtons}>
        <button className={style.cartBox__button}>Отложить в избранное</button>
        <button className={style.cartBox__button}>Удалить</button>
      </div>
    </div>
  );
};
