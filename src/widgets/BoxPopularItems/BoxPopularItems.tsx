import React from "react";
import style from "./BoxPopularItems.module.scss";
import ProductCard from "../ProductCard/ProductCard";

const BoxPopularItems: React.FC = () => {
  return (
    <div className={style.boxPopularItems}>
      <h2 className={style.boxPopularItems__title}>
        Наши самые продаваемые товары:
      </h2>
      <div className={style.boxPopularItems__cards}>
        <ProductCard  />
  
      </div>
    </div>
  );
};

export default BoxPopularItems;
