import React from "react";
import style from './NewProductsBox.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import { ButtonClassic } from "../../entities/ButtonClassic/ButtonClassic";




const NewProductsBox: React.FC = () => {
    return (
        <div className={style.newProductsBox}>
            <h2 className={style.newProductsBox__title}>Новые поступления товаров:</h2>
            <div className={style.newProductsBox__cover}>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
</div>
<div className={style.newProductsBox__button}>
<ButtonClassic name="Посмотреть все товары"/>
</div>
        </div>
    )
}

export default NewProductsBox
