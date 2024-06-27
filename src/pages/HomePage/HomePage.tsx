import React from "react";
import {BannerBox} from "../../widgets/BannerBox/BannerBox.tsx";
import { CardsBox } from "../../widgets/CardsBox/CardsBox.tsx";
import style from './HomePage.module.scss'
import NewsBox from "../../widgets/NewsBox/NewsBox.tsx";
import NewProductsBox from "../../widgets/NewProductsBox/NewProductsBox.tsx";


export const HomePage: React.FC = () => {
    return (
<div className={style.homePage}><BannerBox/>
<CardsBox/>
<NewsBox/>
<NewProductsBox/>
</div>

)
}