import React from "react";
import style from "./AboutUs.module.scss";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import about from "../../assets/about.png";

const aboutUsText = [
  "Широкий ассортимент вязаной одежды разных стилей и размеров.",
  "Удобная навигация по сайту и фильтры для быстрого поиска.",
  "Наличие отзывов и рейтингов товаров от других покупателей.",
  "Быстрая и надёжная доставка по всей стране.",
  "Возврат и обмен товара в случае необходимости.",
  "Регулярное обновление ассортимента и добавление новых коллекций.",
  "Информативные описания товаров с указанием состава, размера и особенностей.",
  "Возможность заказать индивидуальный пошив вязаных изделий.",
  "Возможность отслеживания статуса заказа и уведомления о его статусе.",
];

const aboutUsText2 = [
  "Натуральные материалы — большинство вязаных изделий изготовлены из высококачественных натуральных материалов, таких как шерсть, хлопок, лён и вискоза. Это делает их мягкими, приятными на ощупь и гипоаллергенными.",

  "Универсальность — вязаная одежда подходит для людей всех возрастов и стилей. Она сочетается с различными элементами гардероба и позволяет создавать множество разнообразных образов.",
  "Теплоизоляция — вязаные изделия отлично сохраняют тепло, что особенно важно в холодное время года.",
  "Эластичность — вязаная одежда хорошо тянется и сохраняет свою форму, что обеспечивает максимальный комфорт при движении.",
];

export const AboutUs: React.FC = () => {
  return (
    <div className={style.aboutUs}>
      <h3 className={style.aboutUs__title}>О нас</h3>

      <BannerBox
        image={about}
        name={"KNOT STORE"}
        date={"—  since 2024  —"}
        text={"С заботой о Вас!"}
        about={
          "Наша продукция связана с любовью из пряжи высокого качества. Мы стараемся учесть все пожелания наших покупателей, даже самых требовательных."
        }
        buttonOTwoName={null}
        buttonOne={false}
        buttonOneName={null}
        buttonTwo={false}
      />
      <div className={style.aboutUs__box}>
        <h4 className={style.aboutUs__smallTitle}>
          Наш интернет-магазин выбирают, потому что:
        </h4>
        <ul className={style.aboutUs__list}>
          {aboutUsText.map((item) => (
            <li className={style.aboutUs__li}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={style.aboutUs__box}>
        <h4 className={style.aboutUs__smallTitle}>
          Вязаная одежда имеет ряд преимуществ:
        </h4>
        {aboutUsText2.map((item) => (
          <>
            <li className={style.aboutUs__text}>{item}</li>
          </>
        ))}
        <p className={style.aboutUs__text}>
          В нашем интернет-магазине вы найдёте вязаную одежду на любой вкус и
          бюджет. Мы предлагаем широкий ассортимент товаров, быструю доставку и
          удобную оплату при получении.
        </p>
      </div>
    </div>
  );
};
