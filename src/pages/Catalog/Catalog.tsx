import React, { useEffect, useState } from "react";
import style from "./Catalog.module.scss";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import items from "./../../assets/f4c9aa9d-dc59-41e2-8c2a-c0e0cbe37098.png";
import CatalogCategoryBox from "../../widgets/CatalogCategoryBox/CatalogCategoryBox";
import ProductCard from "../../widgets/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import cat from "../../assets/catEmpty.png";

const Catalog: React.FC = () => {
  const dataItems = useSelector((state: any) => state.goods.goodsArray);
  const buyItems = useSelector((state: any) => state.cart.cartArray);

  const dataCategory = useSelector(
    (state: any) => state.category.categoryArray
  );

  useEffect(() => {
    if (localStorage.getItem("addToCartBox")) {
    }
  }, []);

  return (
    <div className={style.catalog}>
      <h2 className={style.catalog__title}>Каталог</h2>
      <BannerBox
        image={items}
        name={"Отличный выбор качественной продукции"}
        date={null}
        text={null}
        about="Наши веши приятно носить. Наши товары не стыдно дарить."
        buttonOTwoName={"Готовые изделия"}
        buttonOne={true}
        buttonOneName={"Изделия на заказ"}
        buttonTwo={true}
      />
      <h2 className={style.catalog__title}>Категории</h2>

      <div className={style.catalog__box}>
        {dataCategory?.map((res: any) => (
          <CatalogCategoryBox
            categoryName={res?.value?.CategoryName}
            image={res?.value?.image}
            linkCategory={res?.value?.linkCategory}
            key={res?.id}
          />
        ))}
      </div>
      <h2 className={style.catalog__title}>Продукция</h2>

      <div className={style.catalog__items}>
        {Array.isArray(dataItems) && dataItems.length !== 0 ? (
          dataItems?.map((itemData: any) => (
            <ProductCard
              key={itemData.id}
              {...itemData}
              delVisible={false}
              delGood={null}
              buyItems={buyItems}
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

export default Catalog;
