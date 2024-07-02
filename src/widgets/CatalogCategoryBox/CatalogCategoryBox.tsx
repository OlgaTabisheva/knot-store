import React from "react";
import style from "./CatalogCategoryBox.module.scss";

 export interface intcatalogCategoryBox{
    categoryName: String;
    image:  string;
}
 const CatalogCategoryBox: React.FC <intcatalogCategoryBox>= ({categoryName,image}) => {

   
  return (
    <div className={style.catalogCategoryBox}>
  
  <img className={style.catalogCategoryBox__image} alt='image' src={image}/>
  <h2 className={style.catalogCategoryBox__title}>{categoryName}</h2>
    </div>
  );
};

export default CatalogCategoryBox;
