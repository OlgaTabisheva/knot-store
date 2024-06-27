import React from "react";
import style from './NewsCard.module.scss'
import image from './../../assets/pexels-anete-lusina-4792079.jpg'



const NewsCard: React.FC = () => {
    return (
        <div className={style.newsCard}>
            <img className={style.newsCard__image} alt='image' src={image} height='210px'/>

            <p className={style.newsCard__date}>25.02.2023</p>
            <h3 className={style.newsCard__title}>Скоро главный праздник весны!</h3>
            <p className={style.newsCard__text}>Девушки любят, когда качественно, красиво и эксклюзивно. Смотрите больше подарков для девушек!</p>

        </div>
    )
}

export default NewsCard
