import React from "react";
import style from "./Header.module.scss";
import { LinkCustom } from "../../shared/LinkCustom/LinkCustom.tsx";
import { Logo } from "../../shared/Logo/Logo.tsx";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.header__topBox}>
        <nav className={style.header__links}>
          <LinkCustom linkTo={"/"} text={"Главная"} />
          <LinkCustom linkTo={"/catalog"} text={"Каталог"}></LinkCustom>
          <LinkCustom linkTo={"/catalog/item"} text={"Новости( временно страница вещи)"}></LinkCustom>
        </nav>

        <nav className={style.header__links}>
          <LinkCustom linkTo={"/"} text={"О нас"} />
          <LinkCustom linkTo={"/"} text={"Доставка"} />
          <LinkCustom linkTo={"/userPage"} text={"Личный кабинет"} />
        </nav>
      </div>
      <div className={style.header__bottomBox}>
        <div className={style.header__boxs}>
          <Link to='/catalog-cloth' className={style.header__text}>Одежда</Link>
          <Link to='/catalog-hats' className={style.header__text}>Шапки и шарфы</Link>
          <Link to='/catalog-gloves' className={style.header__text}>Варежки и перчатки</Link>
      
        </div>
        <Logo />
        <div className={style.header__boxs}>
        <Link to='/catalog-toys' className={style.header__text}>Игрушки</Link>
        <Link to='/catalog-bags' className={style.header__text}>Сумки</Link>
          <Link to='/catalog-other' className={style.header__text}>Прочие вязаные изделия</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
