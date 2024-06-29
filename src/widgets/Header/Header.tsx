import React from "react";
import style from './Header.module.scss'
import {LinkCustom} from "../../shared/LinkCustom/LinkCustom.tsx";
import {Logo} from "../../shared/Logo/Logo.tsx";


const Header: React.FC = () => {
    return (
        <div className={style.header}>
            <div className={style.header__topBox}>
                <nav className={style.header__links}>

                    <LinkCustom linkTo={'/'} text={'Главная'}/>
                    <LinkCustom linkTo={'/catalog'} text={'Каталог'}></LinkCustom>
                    <LinkCustom linkTo={''} text={'Добавить новый рецепт'}></LinkCustom>

                </nav>

                <nav className={style.header__links}>

                    <LinkCustom linkTo={'/'} text={'Авторы'}/>
                    <LinkCustom linkTo={'/'} text={'Авторы'}/>
                    <LinkCustom linkTo={''} text={'Добавить новый рецепт'}/>

                </nav>
            </div>
            <div className={style.header__bottomBox}>
                <div className={style.header__boxs}>
                    <p className={style.header__text}>скидки</p>
                    <p className={style.header__text}>Подарочные наборы</p>
                    <p className={style.header__text}>Горячие новинки</p>
                </div>
                <Logo/>
                <div className={style.header__boxs}>
                    <p className={style.header__text}>Изготовление по заказу</p>
                    <p className={style.header__text}>Компаниям</p>
                    <p className={style.header__text}>Каталог</p>
                </div>

            </div>
        </div>
    )
}

export default Header
