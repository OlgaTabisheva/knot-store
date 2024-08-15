import React from "react";
import style from "./Emptybox.module.scss";
import imgCat from "../../assets/catEmpty.png";

export const Emptybox: React.FC = () => {
  return (
    <div className={style.emptybox}>
      <img className={style.emptybox__img} alt="emty" src={imgCat} />

      <button className={style.emptybox__button}>
        Тут пока ничего нет. Нажми чтобы вернуться назад.
      </button>
    </div>
  );
};
