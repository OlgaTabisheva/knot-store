import React from "react";
import { BannerBox } from "../../widgets/BannerBox/BannerBox.tsx";
import { CardsBox } from "../../widgets/CardsBox/CardsBox.tsx";
import style from "./HomePage.module.scss";
import NewsBox from "../../widgets/NewsBox/NewsBox.tsx";
import NewProductsBox from "../../widgets/NewProductsBox/NewProductsBox.tsx";
import cat from "../../assets/catYarnL.jpeg";

export const HomePage: React.FC = () => {



  return (
     <div className={style.homePage}>
      <BannerBox
        image={cat}
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
      <CardsBox />
      <NewsBox />
      <NewProductsBox />
    </div>
  );
};
