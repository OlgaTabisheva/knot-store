import React from "react";
import style from './NewsCard.module.scss'
import { Link, useParams } from "react-router-dom";
import { ButtonDell } from "../../shared/ButtonDell/ButtonDell";
//import image from './../../assets/pexels-anete-lusina-4792079.jpg'

export interface NewsCardInt {
    image: string,
    date: string,
    title: string,
    news: string,
    item: any,
    delVisible: boolean
}

const NewsCard: React.FC<NewsCardInt> = ({image,date,title,news, item,delVisible}) => {

  


    return (
        <div className={style.newsCard}>
            <Link to={`/news/${item?.id}`}>
            <img className={style.newsCard__image} alt='image' src={image} />
            </Link>
            <ButtonDell delVisible={true}  onClick={() => delGood(item?.id)}/>

            <p className={style.newsCard__date}>{date}</p>
            <h3 className={style.newsCard__title}>{title}</h3>
            <p className={style.newsCard__text}>{news}</p>
            
        </div>
    )
}

export default NewsCard
