import React from "react";
import style from './Footer.module.scss'
import image1 from './../../assets/quality_assurance_9j1vkwtsnxs8.svg'
import image2 from './../../assets/on_time_ylfrtuf1faa0.svg'
import image3 from './../../assets/customer_review_qj97zkwaoypr.svg'
import image4 from './../../assets/facebook_logo_dwu5xl2wz5oc.svg'
import image5 from './../../assets/linkedin_logo_2fbx7b6g14x6.svg'
import image6 from './../../assets/social_a4alsguhte2k.svg'

const Footer: React.FC = () => {
    return (
<div className={style.footer}>
    <div className={style.footer__box}> 
   <div className={style.footer__boxImages}>
    <div className={style.footer__boxImage}>
    <img src={image1} width='50px'alt="image"/>
    <p className={style.footer__imageText}>Гарантия качества</p>
    </div>
    <div className={style.footer__boxImage}>
    <img src={image2} width='50px'alt="image"/>
    <p className={style.footer__imageText}>Быстрая и своевременная доставка</p>
    </div>
    <div className={style.footer__boxImage}>
    <img src={image3} width='50px'alt="image"/>
    <p className={style.footer__imageText}>Открытая книга отзывов</p>
    </div>
   </div>
   <p className={style.footer__text}>© 2024 "КНОТШОП" <br />Данный сайт создан в образовательных целях.
   </p>
   </div>
   <div>
    
    <h3 className={style.footer__title}>Информация</h3>
    <p className={style.footer__textSt}>О компании</p>
    <p className={style.footer__textSt}>Новости</p>
    <p className={style.footer__textSt}>Доставка и оплата</p>
    <p className={style.footer__textSt}>Котакты</p>
    </div>
   <div> 
   <h3 className={style.footer__title}>каталог</h3>
   <p className={style.footer__textSt}>Каталог</p>
    <p className={style.footer__textSt}>Готовые изделия</p>
    <p className={style.footer__textSt}>Изделия под заказ</p>
    <p className={style.footer__textSt}>Книга отзывов</p>
    </div>
   <div className={style.footer__boxIcons}>
    <h3 className={style.footer__title}>oliatabisheva@gmail.com</h3>
    <div className={style.footer__icons}>
        <div className={style.footer__cover}>
<img className={style.footer__image} src={image4} width='25px'alt="icon"/>
</div><div className={style.footer__cover}>
<img className={style.footer__image} src={image5} width='25px'alt="icon"/>
</div><div className={style.footer__cover}>
<img className={style.footer__image} src={image6} width='25px'alt="icon"/>
</div>
    </div>
   </div>
</div>
    )
}

export default Footer
