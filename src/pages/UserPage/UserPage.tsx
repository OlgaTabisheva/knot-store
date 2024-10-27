import React, { useState } from "react";
import style from "./UserPage.module.scss";
import userImg from "../../assets/user.png";
import { onLogoutAuth } from "../../store/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { AdminPage } from "../../widgets/AdminPage/AdminPage";
import { OrderTable } from "../../widgets/OrderTable/OrderTable";
import { UserSettings } from "../../widgets/UserSettings/UserSettings";
import { FavoritesBox } from "../../widgets/FavoritesBox/FavoritesBox";
import { Cart } from "../Cart/Cart";

export const UserPage: React.FC <{addLikeToServer:any,favoritesItems:any, setFavoritesItems:any,mapFavor:any}>= ({mapFavor, addLikeToServer, favoritesItems, setFavoritesItems}) => {
  const dispatch = useDispatch();
  const userUid = useSelector((state: any) => state?.auth.user);
  const [buttonUserClick, setButtonUserClick] = useState<number>(0);
  return (
    <div className={style.userPage}>
      <h3 className={style.userPage__title}>
        Добро пожаловать пользователь <br />
        {userUid?.email}!
      </h3>
      <div className={style.userPage__top}>
        <div className={style.userPage__menu}>
          <div className={style.userPage__margin}>
            <ButtonClassic
              name="Личный кабинет"
              type="button"
              disabled={false}
              onClick={() => setButtonUserClick(0)}
            />
          </div>
          <div className={style.userPage__margin}>
            <ButtonClassic
              name="Избранное"
              type="button"
              disabled={false}
              onClick={() => setButtonUserClick(4)}
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
          <img
            className={style.userPage__img}
            src={userUid?.photoURL === null ? userImg : userUid?.photoURL}
            alt="image"
          />
          {userUid?.id == "ppnifnT4HdStLXALeMJaEEGmBRP2" && (
            <div className={style.userPage__margin}>
              <ButtonClassic
                name="Страница администратора"
                type="button"
                disabled={false}
                onClick={() => setButtonUserClick(3)}
              />
            </div>
          )}
        </div>
        <div className={style.userPage__userBox}>
          <div className={style.userPage__margin}>
            <ButtonClassic
              name="Страница заказов"
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
              onClick={() => setButtonUserClick(2)}
            />
          </div>
        </div>
      </div>
      <div className={style.userPage__bottom}>
        {buttonUserClick === 0 && <UserSettings />}
        {buttonUserClick === 1 && <OrderTable />}
        {buttonUserClick === 2 && <Cart addLikeToServer={addLikeToServer} favoritesItems={favoritesItems} setFavoritesItems={setFavoritesItems}/>}
        {buttonUserClick === 3 && <AdminPage/>}
        {buttonUserClick === 4 && <FavoritesBox mapFavor={mapFavor} addLikeToServer={addLikeToServer} favoritesItems={favoritesItems} setFavoritesItems={setFavoritesItems}/>}
      </div>
    </div>
  );
};
