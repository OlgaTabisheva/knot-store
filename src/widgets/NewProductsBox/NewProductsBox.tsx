import React, { useEffect, useState } from "react";
import style from "./NewProductsBox.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";
import { useSelector } from "react-redux";
import { LinkCustom } from "../../shared/LinkCustom/LinkCustom";
import { LinkAsButton } from "../../shared/LinkAsButton/LinkAsButton";

const NewProductsBox: React.FC = () => {
  const [newLastItems, setNewsLastItems] = useState<any>([]);
  const dataItems = useSelector((state: any) => state.goods.goodsArray);

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
        {Array.isArray(newLastItems) && newLastItems.length !== 0 ? (
          newLastItems?.map((itemData: any) => (
            <ProductCard
              {...itemData}
              item={itemData}
              key={itemData?.id}
              delVisible={false}
              delGood={null}
              // addToCart={addToCart}
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
