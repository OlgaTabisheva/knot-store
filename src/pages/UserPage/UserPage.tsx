import React, { useEffect, useState } from "react";
import style from "./UserPage.module.scss";
import userImg from '../../assets/user.png'
import { onLogoutAuth } from "../../store/slice/authSlice";
import { useDispatch } from "react-redux";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { Cart } from "../../widgets/Cart/Cart";

export const UserPage: React.FC = () => {
  const [localUser, setLocalUser] = useState<string>()
  const dispatch = useDispatch();

  useEffect(()=>{
    const localDatat= JSON.parse(localStorage.getItem("saveAuth")|| '{}');
    setLocalUser(localDatat?.email )
  },[])

  return <div className={style.userPage}>
<div className={style.userPage__top}>
    <div className={style.userPage__menu}>
    <img className={style.userPage__img} src={userImg} alt="image"/>

    
    </div>
    <div className={style.userPage__userBox}>
      <ButtonClassic name={'выйти'} type={'button'} disabled={false} onClick={() => dispatch(onLogoutAuth())}></ButtonClassic>
      <h3 className={style.userPage__title}>Добро пожаловать пользователь <br/>{localUser}!</h3>
    </div>
    </div>
  <div className={style.userPage__bottom}>
<Cart/>
  </div>
  </div>;
};
