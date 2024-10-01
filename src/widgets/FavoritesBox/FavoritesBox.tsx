import React from "react";
import style from "./FavoritesBox.module.scss";
import { useSelector } from "react-redux";

import ProductCard from "../ProductCard/ProductCard";
import { BannerBox } from "../BannerBox/BannerBox";
import cat from "../../assets/catEmpty.png";

export const FavoritesBox: React.FC<{
  addLikeToServer: any;
  setFavoritesItems: any;
  favoritesItems: any;
  mapFavor:any
}> = ({ addLikeToServer, setFavoritesItems, favoritesItems,mapFavor }) => {
  const buyItems = useSelector((state: any) => state.cart.cartArray);

  return (
    <div className={style.favoritesBox}>
      <h3 className={style.favoritesBox__title}>Ваши избранные товары:</h3>
      <div className={style.favoritesBox__box}>
        {Array.isArray(mapFavor) &&
        mapFavor?.length !== 0 ? (
          mapFavor?.map((itemData: any) => (
            <ProductCard
              key={itemData.id}
              {...itemData}
              delVisible={false}
              delGood={null}
              buyItems={buyItems}
              addLikeToServer={addLikeToServer}
              favoritesItems={favoritesItems}
              setFavoritesItems={setFavoritesItems}
            />
          ))
        ) : (
          <BannerBox
            image={cat}
            name="К сожалению тут ничего нет  "
            date={null}
            text="Пусто"
            about={null}
            buttonOne={true}
            buttonTwo={false}
            buttonOTwoName={null}
            buttonOneName="Перейти на главную"
          />
        )}
      </div>
    </div>
  );
};
