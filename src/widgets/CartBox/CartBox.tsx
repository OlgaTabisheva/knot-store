import React from "react";

import style from "./CartBox.module.scss";
import { ButtonImage } from "../../entities/ButtonImage/ButtonImage";
import plus from "../../assets/sumpleIcons/plus_k851sseuxl9x.svg";
import minus from "../../assets/sumpleIcons/minus_uk9l2bpabquc.svg";

interface cartBoxInt{
  name:string,
  price:number,
  size:string,
  CategoryName:string,
  count: number,
  image: string,
  id:string,changeCount: any,
  handleDelItemFromCart: any
}



export const CartBox: React.FC<cartBoxInt> = ({name, size, price, CategoryName, count, image,id, changeCount,handleDelItemFromCart}) => {
  return (
    <div className={style.cartBox}>
      <h3 className={style.cartBox__title}>Позиция: {name}</h3>
      <div className={style.cartBox__box}>
        <div className={style.cartBox__imgBox} >
          <img src={image} className={style.cartBox__img} />
          <div className={style.cartBox__itemDescriptionBox}>
            <h4>{CategoryName}</h4>
            <p>{size} размер</p>
            <div className={style.cartBox__countBox}>
            <ButtonImage img={minus} type={'button'} onClick={()=>changeCount(id, 'minus')}/> <p>{count} шт.</p><ButtonImage  type={'button'} onClick={()=>changeCount(id, 'plus')} img={plus} />
            </div>
          </div>
        </div>
        <div className={style.cartBox__price}>USD {price*count}</div>
      </div>
      <div className={style.cartBox__boxButtons}>
        <button className={style.cartBox__button}>Отложить в избранное</button>
        <button className={style.cartBox__button} onClick={(e)=>handleDelItemFromCart(e,id)}>Удалить</button>
      </div>
    </div>
  );
};
