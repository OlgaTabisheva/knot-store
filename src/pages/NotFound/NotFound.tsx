import React from "react";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import cat from "./../../assets/d3ab26f8-0685-4e81-991f-408e7a9d86b0.png";
import style from "./NotFound.module.scss";
import NewProductsBox from "../../widgets/NewProductsBox/NewProductsBox";

export const NotFound: React.FC<{
  setFavoritesItems: any;
  favoritesItems: any;
  addLikeToServer: any;
}> = ({ setFavoritesItems, favoritesItems, addLikeToServer }) => {
  return (
    <div className={style.notFound}>
      <BannerBox
        image={cat}
        name="К сожалению что-то пошло не так..."
        date={null}
        text="404 ошибка"
        about={null}
        buttonOne={true}
        buttonTwo={false}
        buttonOTwoName={null}
        buttonOneName="Перейти на главную"
      />
      <NewProductsBox
        addLikeToServer={addLikeToServer}
        favoritesItems={favoritesItems}
        setFavoritesItems={setFavoritesItems}
      />
    </div>
  );
};
