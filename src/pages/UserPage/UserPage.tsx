import React from "react";

import style from "./UserPage.module.scss";
import userImg from '../../assets/user.png'

export const UserPage: React.FC = () => {
  return <div className={style.userPage}>
<div className={style.userPage__top}>
    <div className={style.userPage__menu}>
    <img className={style.userPage__img} src={userImg} alt="image"/>

    <h3>Привет Мир!</h3>
    </div>
    <div>
      Правая часть
    </div>
    </div>
  <div className={style.userPage__bottom}>
нижняя часть
  </div>
  </div>;
};
