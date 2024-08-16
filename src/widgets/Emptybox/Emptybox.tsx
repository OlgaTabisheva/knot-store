import React from "react";
import style from "./Emptybox.module.scss";
import imgCat from "../../assets/catEmpty.png";

export const Emptybox: React.FC = () => {
  return (
    <div className={style.emptybox}>
      <p className={style.emptybox__text}> Тут пока ничего нет. </p>

      <img className={style.emptybox__img} alt="emty" src={imgCat} />

      <button className={style.emptybox__button}>Вернуться назад</button>
    </div>
  );
};
