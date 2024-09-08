import React from "react";
import style from "./AboutUs.module.scss";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import about from "../../assets/about.png";

const aboutUsText = ["Мы любим вас", "Мы любим вас"];

const aboutUsText2 = [
  "Натуральные материалы — большинство вязаных изделий изготовлены из высококачественных натуральных материалов, таких как шерсть, хлопок, лён и вискоза. Это делает их мягкими, приятными на ощупь и гипоаллергенными.",

  "Универсальность — вязаная одежда подходит для людей всех возрастов и стилей. Она сочетается с различными элементами гардероба и позволяет создавать множество разнообразных образов.",
  "Теплоизоляция — вязаные изделия отлично сохраняют тепло, что особенно важно в холодное время года.",
  'Эластичность — вязаная одежда хорошо тянется и сохраняет свою форму, что обеспечивает максимальный комфорт при движении.'
];

export const AboutUs: React.FC = () => {
  return (
    <div className={style.aboutUs}>
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
          Вязаная одежда имеет ряд преимуществ:
        </h4>
        {aboutUsText2.map((item) => (
          <>
            <li className={style.aboutUs__text}>{item}</li>
          </>
        ))}
        <p>В нашем интернет-магазине вы найдёте вязаную одежду на любой вкус и бюджет. Мы предлагаем широкий ассортимент товаров от известных производителей, быструю доставку и удобные способы оплаты.</p>
      </div>
      <ul className={style.aboutUs__list}>
        {aboutUsText.map((item) => (
          <li className={style.aboutUs__li}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
