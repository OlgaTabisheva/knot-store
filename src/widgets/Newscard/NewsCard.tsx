import React from "react";
import style from './NewsCard.module.scss'
import { Link } from "react-router-dom";
import { ButtonDell } from "../../shared/ButtonDell/ButtonDell";
//import image from './../../assets/pexels-anete-lusina-4792079.jpg'

export interface NewsCardInt {
    image: string,
    date: any,
    title: string,
    news: string,
    item: any,
    delVisible: boolean,
    delNews: any
}

const NewsCard: React.FC<NewsCardInt> = ({image,title,news, item,delVisible,delNews }) => {

    return (
        <div className={style.newsCard}>
            <Link to={`/news/${item?.id}`} className={style.newsCard__link} >
            <img className={style.newsCard__image} alt='image' src={image} />
            </Link>
            {delVisible && <ButtonDell delVisible={delVisible}  onClick={() => delNews(item?.id)}/>}
          
          {/*   new Date( <p className={style.newsCard__date}>{date}</p> */}
           <h3 className={style.newsCard__title}>{title}</h3>
            <p className={style.newsCard__text}>{news}</p>
            
        </div>
    )
}

export default NewsCard
