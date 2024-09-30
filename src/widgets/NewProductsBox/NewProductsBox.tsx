import React, { useEffect, useState } from "react";
import style from "./NewProductsBox.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { LinkAsButton } from "../../shared/LinkAsButton/LinkAsButton";

const NewProductsBox: React.FC<{
  addLikeToServer: any;
  favoritesItems: any;
  setFavoritesItems: any;
}> = ({ addLikeToServer, favoritesItems, setFavoritesItems}) => {
  const [newLastItems, setNewsLastItems] = useState<any>([]);
  const dataItems = useSelector((state: any) => state.goods.goodsArray);
  const buyItems = useSelector((state: any) => state.cart.cartArray);
  const cartLikeItemsFromServer = useSelector((state: any) => state?.favorities?.favoritiesArray)

  useEffect(() => {
    const LastElems = dataItems.slice(-3);
    setNewsLastItems(LastElems);
  }, [dataItems]);

  return (
    <div className={style.newProductsBox}>
      <h2 className={style.newProductsBox__title}>
        Новые поступления товаров:
      </h2>
      <div className={style.newProductsBox__cover}>
        {Array.isArray(cartLikeItemsFromServer) && cartLikeItemsFromServer.length !== 0 ? (
          cartLikeItemsFromServer?.map((itemData: any) => (
            <ProductCard
              {...itemData}
              item={itemData}
              key={itemData?.id}
              delVisible={false}
              delGood={null}
              buyItems={buyItems}
              addLikeToServer={addLikeToServer}
                  setFavoritesItems={setFavoritesItems}
                  favoritesItems={favoritesItems}
            />
          ))
        ) : (
          <p className={style.newProductsBox__text}>Товаров нет</p>
        )}
      </div>
      <div className={style.newProductsBox__button}>
        <LinkAsButton linkTo="/catalog" text={"Перейти в каталог"} />
      </div>
    </div>
  );
};

export default NewProductsBox;
