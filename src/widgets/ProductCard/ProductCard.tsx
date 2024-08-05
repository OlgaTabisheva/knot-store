import React from "react";
import style from "./ProductCard.module.scss";
import bag from "./../../assets/bag_Cart.svg";
import { Link,  } from "react-router-dom";
import del from "./../../assets/delete_rpwkbdkkifyc.svg";

const ProductCard: React.FC<{ item: any; delGood: (a: string) => void | null, delVisible: boolean }> = ({
  item,
  delGood,
  delVisible
}) => {
  return (
    <div className={style.productCard}>
      <Link to={`/catalog/${item?.value.id}`}>
        <img
          className={style.productCard__image}
          src={item?.value?.image}
          width="370px"
          height="300px"
          alt="photo"
        />
      </Link>
      <button
        className={delVisible ? style.productCard__buttonDel : style.productCard__buttonDelHidden}
        onClick={() => delGood(item?.id)}
      >
        <img className={style.productCard__img} src={del} alt="button" />
      </button>
      <h3 className={style.productCard__title}>{item?.value?.name}</h3>
      <p className={style.productCard__text}>{item?.value?.description}</p>
      <div className={style.productCard__box}>
        <div className={style.productCard__price}>{item?.value?.price}руб</div>
        <button className={style.productCard__buttonBox}>
          <img
            className={style.productCard__buttonImage}
            height="19px"
            src={bag}
          />
          <div className={style.productCard__button}>В корзину</div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
