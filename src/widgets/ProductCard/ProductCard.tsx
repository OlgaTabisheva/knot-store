import React from "react";
import style from './ProductCard.module.scss'
import hat from './../../assets/pexels-hat-shvetsa-4588052.jpg'
import bag from './../../assets/bag_Cart.svg'




const ProductCard: React.FC = () => {
    return (
        <div className={style.productCard}>
<img className={style.productCard__image}src={hat} width='370px' height='300px' alt='photo'/>
<h3 className={style.productCard__title}>Шапка для собак</h3>
<p className={style.productCard__text}>Лучшая желтая шапка для вашей собаки. Она очень теплая и удобная и не натирает ушки!</p>
<div className={style.productCard__box}>
    <div className={style.productCard__price}>950 руб</div>
    <button className={style.productCard__buttonBox}>
        <img  className={style.productCard__buttonImage} height='19px' src={bag} />
        <div className={style.productCard__button}>В корзину</div>
    </button>

</div>
        </div>
    )
}

export default ProductCard
