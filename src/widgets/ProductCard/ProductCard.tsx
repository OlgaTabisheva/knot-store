import React from "react";
import style from "./ProductCard.module.scss";
import bag from "./../../assets/bag_Cart.svg";
import { Link,  } from "react-router-dom";
import del from "./../../assets/delete_rpwkbdkkifyc.svg";
import { ButtonDell } from "../../shared/ButtonDell/ButtonDell";

const ProductCard: React.FC<{ item: any; delGood: any | null, delVisible: boolean }> = ({
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
     
      <ButtonDell delVisible={delVisible}  onClick={() => delGood(item?.id)}/>
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
