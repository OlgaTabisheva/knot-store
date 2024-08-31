import React from "react";
import style from "./CatalogCategoryBox.module.scss";
import { Link } from "react-router-dom";

 export interface intcatalogCategoryBox{
    categoryName: String;
    image:  string;
    linkCategory: string
}
 const CatalogCategoryBox: React.FC <intcatalogCategoryBox>= ({categoryName,image,linkCategory}) => {


   
  return (
    <Link to={linkCategory}className={style.catalogCategoryBox}>
  
  <img className={style.catalogCategoryBox__image} alt='image' src={image}/>
  <h2 className={style.catalogCategoryBox__title}>{categoryName}</h2>
    </Link>
  );
};

export default CatalogCategoryBox;
