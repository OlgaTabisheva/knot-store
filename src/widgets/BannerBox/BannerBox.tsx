import React from "react";

import style from './BannerBox.module.scss'
import cat from "../../assets/catYarnL.jpeg";


export const BannerBox: React.FC = () => {
    return (
        <div className={style.banner}>

            <img className={style.banner__img}
                 src={cat} alt="logo"/>
            <div className={style.banner__box}>
                <h3 className={style.banner__name}>KNOT STORE</h3>
                <h4 className={style.banner__subName}>—  since 2024  —</h4>
                <h2 className={style.banner__about}>С заботой о Вас!</h2>
                <p className={style.banner__text}>Наша продукция связана с любовью из пряжи высокого качества. Мы стараемся учесть все пожелания наших покупателей, даже самых требовательных.</p>
        </div>
        </div>
    )
}