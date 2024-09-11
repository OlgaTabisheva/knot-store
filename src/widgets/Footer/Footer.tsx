import React from "react";
import style from "./Footer.module.scss";
import image1 from "./../../assets/quality_assurance_9j1vkwtsnxs8.svg";
import image2 from "./../../assets/on_time_ylfrtuf1faa0.svg";
import image3 from "./../../assets/customer_review_qj97zkwaoypr.svg";
import image4 from "./../../assets/facebook_logo_dwu5xl2wz5oc.svg";
import image5 from "./../../assets/linkedin_logo_2fbx7b6g14x6.svg";
import image6 from "./../../assets/social_a4alsguhte2k.svg";
import { LinkCustom } from "../../shared/LinkCustom/LinkCustom";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__box}>
        <div className={style.footer__boxImages}>
          <div className={style.footer__boxImage}>
            <img src={image1} width="50px" alt="image" />
            <p className={style.footer__imageText}>Гарантия качества</p>
          </div>
          <div className={style.footer__boxImage}>
            <img src={image2} width="50px" alt="image" />
            <p className={style.footer__imageText}>
              Быстрая и своевременная доставка
            </p>
          </div>
          <div className={style.footer__boxImage}>
            <img src={image3} width="50px" alt="image" />
            <p className={style.footer__imageText}>Открытая книга отзывов</p>
          </div>
        </div>
        <p className={style.footer__text}>
          © 2024 "КНОТШОП" <br />
          Данный сайт создан в образовательных целях.
        </p>
      </div>
      <div className={style.footer__box}>
        <h3 className={style.footer__title}>Информация</h3>
        <LinkCustom linkTo={"/about"} text={"О нас"} />
        <LinkCustom linkTo={"/news"} text={"Новости"}></LinkCustom>
        <LinkCustom linkTo={"/delivery"} text={"Доставка"} />
        <LinkCustom linkTo={"/reviews"} text={"Отзывы"} />
        <LinkCustom linkTo={"/catalog"} text={"Каталог"}></LinkCustom>
        <LinkCustom linkTo={"/"} text={"Изделия под заказ"}></LinkCustom>
      </div>
      <div className={style.footer__box}>
        <h3 className={style.footer__title}>каталог</h3>
        <LinkCustom linkTo={"/catalog-cloth"} text={"Одежда"}></LinkCustom>
        <LinkCustom linkTo={"/catalog-hats"} text={"Шарфы и шапки"}></LinkCustom>
        <LinkCustom linkTo={"/catalog-gloves"} text={"Варежки и перчатки"}></LinkCustom>
        <LinkCustom linkTo={"/catalog-toys"} text={"Игрушки"}></LinkCustom>
        <LinkCustom linkTo={"/catalog-bags"} text={"Сумки"}></LinkCustom>
        <LinkCustom linkTo={"/catalog-other"} text={"Прочие вязаные изделия"}></LinkCustom>
      </div>
      <div className={style.footer__boxIcons}>
        <h3 className={style.footer__title}>oliatabisheva@gmail.com</h3>
        <div className={style.footer__icons}>
          <Link to={'https://www.facebook.com/'} className={style.footer__cover}>
            <img
              className={style.footer__image}
              src={image4}
              width="25px"
              alt="icon"
            />
          </Link>
          <Link to={'https://www.linkedin.com/in/olga-tabisheva-67541b258/'} className={style.footer__cover}>
            <img
              className={style.footer__image}
              src={image5}
              width="25px"
              alt="icon"
            />
          </Link>
          <Link to={'https://www.google.co.uk/'} className={style.footer__cover} >
            <img
              className={style.footer__image}
              src={image6}
              width="25px"
              alt="icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
