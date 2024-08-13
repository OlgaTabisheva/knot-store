import React, { useEffect, useState } from "react";
import style from "./UserPage.module.scss";
import userImg from "../../assets/user.png";
import { onLogoutAuth } from "../../store/slice/authSlice";
import { useDispatch } from "react-redux";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { Cart } from "../../widgets/Cart/Cart";
import { AdminPage } from "../../widgets/AdminPage/AdminPage";

export const UserPage: React.FC = () => {
  const [localUser, setLocalUser] = useState<string>();
  const dispatch = useDispatch();
  const [buttonUserClick, setButtonUserClick] = useState<number>(0);
  useEffect(() => {
    const localDatat = JSON.parse(localStorage.getItem("saveAuth") || "{}");
    setLocalUser(localDatat?.email);
  }, []);

  return (
    <div className={style.userPage}>
      <div className={style.userPage__top}>
        <div className={style.userPage__menu}>
          <img className={style.userPage__img} src={userImg} alt="image" />
          <div className={style.userPage__margin}>
            <ButtonClassic
              name="Личный кабинет"
              type="button"
              disabled={false}
              onClick={() => setButtonUserClick(1)}
            />
          </div>
          <div className={style.userPage__margin}>
            <ButtonClassic
              name="Корзина"
              type="button"
              disabled={false}
              onClick={() => setButtonUserClick(0)}
            />
          </div>
          <div className={style.userPage__margin}>
            <ButtonClassic
              name="Страница администратора"
              type="button"
              disabled={false}
              onClick={() => setButtonUserClick(1)}
            />
          </div>
        </div>
        <div className={style.userPage__userBox}>
          <ButtonClassic
            name={"выйти"}
            type={"button"}
            disabled={false}
            onClick={() => dispatch(onLogoutAuth())}
          ></ButtonClassic>
          <h3 className={style.userPage__title}>
            Добро пожаловать пользователь <br />
            {localUser}!
          </h3>
        </div>
      </div>
      <div className={style.userPage__bottom}>
        {buttonUserClick === 0 && <Cart />}
        {buttonUserClick === 1 && <AdminPage />}
      </div>
    </div>
  );
};
