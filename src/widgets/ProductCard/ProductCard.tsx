import React, { useEffect } from "react";
import style from './ProductCard.module.scss'
import bag from './../../assets/bag_Cart.svg'
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";





const ProductCard: React.FC<{item:any}> = ({item}) => {




    return (
        <div className={style.productCard}>
            <Link to={`/catalog/${item?.id}`} >
<img className={style.productCard__image}src={item?.image} width='370px' height='300px' alt='photo'/>
</Link>
<h3 className={style.productCard__title}>{item?.name}</h3>
<p className={style.productCard__text}>{item?.description}</p>
<div className={style.productCard__box}>
    <div className={style.productCard__price}>{item?.price}руб</div>
    <button className={style.productCard__buttonBox}>
        <img  className={style.productCard__buttonImage} height='19px' src={bag} />
        <div className={style.productCard__button}>В корзину</div>
    </button>

</div>
        </div>
    )
}

export default ProductCard
