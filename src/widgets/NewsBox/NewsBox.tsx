import React from "react";
import style from './NewsBox.module.scss'
import NewsCard from "../Newscard/NewsCard";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";



const NewsBox: React.FC = () => {
    return (
        <div className={style.news}>
            <h2 className={style.news__title}>Hoвости</h2>
            <div className={style.news__box}>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            </div>
            <ButtonClassic name="Все новости" stylesButton={'blue'}/>
        </div>
    )
}

export default NewsBox
