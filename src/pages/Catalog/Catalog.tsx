import React, { useEffect, useState } from "react";
import style from "./Catalog.module.scss";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import items from "./../../assets/f4c9aa9d-dc59-41e2-8c2a-c0e0cbe37098.png";
import CatalogCategoryBox from "../../widgets/CatalogCategoryBox/CatalogCategoryBox";
import { intcatalogCategoryBox } from "../../widgets/CatalogCategoryBox/CatalogCategoryBox";

import cloth from "./../../assets/Aclothe.png"
import toy from "./../../assets/Atoys.png";
import bag from "./../../assets/Abags.png";
import hat from "./../../assets/AcatInHat.png";
import gloves from "./../../assets/Agloves.png";
import other from "./../../assets/Aotherss.png";
import ProductCard from "../../widgets/ProductCard/ProductCard";
import { useSelector } from "react-redux";

const CatalogCategory: intcatalogCategoryBox[] = [
  { categoryName: "Одежда", image: cloth, linkCategory: "/catalog-cloth" },
  { categoryName: "Игрушки", image: toy, linkCategory: "/catalog-toys" },
  { categoryName: "Сумки", image: bag, linkCategory: "/catalog-bags" },
  { categoryName: "Шапки и шарфы", image: hat, linkCategory: "/catalog-hats" },
  {
    categoryName: "Варежки и перчатки",
    image: gloves,
    linkCategory: "/catalog-gloves",
  },
  {
    categoryName: "Прочие вязаные изделия",
    image: other,
    linkCategory: "/catalog-other",
  },
];





const Catalog: React.FC<{ mapTest: object[],data:any }> = ({ data }) => {
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
        {CatalogCategory.map((res) => (
          <CatalogCategoryBox
            categoryName={res?.categoryName}
            image={res?.image}
            linkCategory={res?.linkCategory}
          />
        ))}
      </div>
      <h2 className={style.catalog__title}>Продукция</h2>

      <div className={style.catalog__items}>
        {data?.map((itemData:any) => (
          <ProductCard item={itemData?.good} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
