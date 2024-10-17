import React from "react";
import { BannerBox } from "../../widgets/BannerBox/BannerBox.tsx";
import { CardsBox } from "../../widgets/CardsBox/CardsBox.tsx";
import style from "./HomePage.module.scss";
import NewsBox from "../../widgets/NewsBox/NewsBox.tsx";
import NewProductsBox from "../../widgets/NewProductsBox/NewProductsBox.tsx";
import cat from "../../assets/catYarnL.jpeg";
import { Skeleton } from "../../entities/Skeleton/Skeleton.tsx";


export const HomePage: React.FC<{
  addLikeToServer: any;
  favoritesItems: any;
  setFavoritesItems: any;
}> = ({ addLikeToServer, favoritesItems, setFavoritesItems}) => {

  return (
     <div className={style.homePage}>
      <BannerBox
        image={cat}
        name={"KNOT STORE"}
        date={"—  since 2024  —"}
        text={"Приветствуем вас"}
        about={
          "Добро пожаловать в наш уютный магазин. У нас вы можете найти вязаную одежду, игрушки, аксессуары и многое другое!"
        }
        buttonOTwoName={null}
        buttonOne={false}
        buttonOneName={null}
        buttonTwo={false}
      />
      <CardsBox  />
      <NewsBox />
      <NewProductsBox addLikeToServer={addLikeToServer}
                  setFavoritesItems={setFavoritesItems}
                  favoritesItems={favoritesItems}/>
    </div>
  );
};
