import React from "react";
import style from "./CatalogByCategory.module.scss";
import { BannerBox } from "../BannerBox/BannerBox";
import ProductCard from "../ProductCard/ProductCard";

interface intCatalogByCategory {
  image: string;
  name: string;
  date: string | null;
  text: string | null;
  about: string | null;
  buttonOne: boolean;
  buttonTwo: boolean;
  buttonOTwoName: string | null;
  buttonOneName: string | null;
  nameCategory: string;
  mapTest: object[];
}

const CatalogByCategory: React.FC<intCatalogByCategory> = ({
  image,
  name,
  text,
  about,
  nameCategory,
  mapTest,
}) => {
  return (
    <div className={style.catalogByCategory}>
      <h2 className={style.catalogByCategory__title}>{nameCategory}</h2>
      <BannerBox
        image={image}
        name={name}
        date={null}
        text={text}
        about={about}
        buttonOne={false}
        buttonTwo={false}
        buttonOTwoName={null}
        buttonOneName={null}
      />
      <h2 className={style.catalogByCategory__title}>Наш каталог для этой категории:</h2>
      <div className={style.catalogByCategory__items}>
        {mapTest?.map(() => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
};

export default CatalogByCategory;
