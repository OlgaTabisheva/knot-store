import React from "react";
import {BannerBox} from "../../widgets/BannerBox/BannerBox.tsx";
import { CardsBox } from "../../widgets/CardsBox/CardsBox.tsx";
import style from './HomePage.module.scss'


export const HomePage: React.FC = () => {
    return (
<div className={style.homePage}><BannerBox/>
<CardsBox/>
</div>

)
}