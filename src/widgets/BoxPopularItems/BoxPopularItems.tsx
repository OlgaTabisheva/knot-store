import React from "react";
import style from "./BoxPopularItems.module.scss";

const BoxPopularItems: React.FC = () => {
  return (
    <div className={style.boxPopularItems}>
      <h2 className={style.boxPopularItems__title}>
        Наши самые продаваемые товары:
      </h2>
      <div className={style.boxPopularItems__cards}>
Привет  
      </div>
    </div>
  );
};

export default BoxPopularItems;
