import React, { useEffect, useState } from "react";
import style from "./ProductCard.module.scss";
import bag from "./../../assets/bag_Cart.svg";
import { Link } from "react-router-dom";
import { ButtonDell } from "../../shared/ButtonDell/ButtonDell";
import { loadCartFromLocalStorage } from "../../App";
import { useDispatch } from "react-redux";
import { onfetchCart } from "../../store/slice/cartSlice";

const ProductCard: React.FC<{
  item: any;
  delGood: any | null;
  delVisible: boolean;
  setBuyItems: any;
  buyItems: any;
  id: string;
  image: string;
  description: string;
  price: string;
  name: string;
  size: string;
}> = ({
  image,
  description,
  price,
  name,
  delGood,
  delVisible,
  buyItems,
  size,
  setBuyItems,
  id,
}) => {
  const dispatch = useDispatch();

  async function handleClickBuy() {
    let localFirebaseDataCart = loadCartFromLocalStorage();
    setBuyItems(localFirebaseDataCart);
    let foundItem = buyItems?.find((s:{id:string}) => s?.id === id);
    console.log(foundItem, "foundItem");
    if (foundItem === undefined) {
      let tmp2 = []

      let newItem = {id: id, count: 1, price: price, name:name, description:description, image:image}
      tmp2 = [  ...buyItems, newItem]
      setBuyItems(tmp2)
      console.log(tmp2, "tmp2");
      localStorage.setItem("addToCartBox", JSON.stringify(tmp2));
    dispatch(
      onfetchCart({
        cart: tmp2,
      })
    );
    } else {
      let tmp = buyItems.filter((s:{id:string}) => s?.id !== id);
      // foundItem.count++;

      let couterItem = {
        id: id,
        count: foundItem?.count + 1,
        price: price,
        name: name,
        image: image,
        description: description,
        size: size,
      };
      tmp = [...tmp, couterItem];

      localStorage.setItem("addToCartBox", JSON.stringify(tmp));
      setBuyItems(tmp)
      dispatch(
        onfetchCart({
          cart: tmp,
        })
      );
    }

  }

  return (
    <div className={style.productCard}>
      <Link to={`/catalog/${id}`}>
        <img
          className={style.productCard__image}
          src={image}
          width="370px"
          height="300px"
          alt="photo"
        />
      </Link>

      <ButtonDell delVisible={delVisible} onClick={() => delGood(id)} />
      <h3 className={style.productCard__title}>{name}</h3>
      <p className={style.productCard__text}>{description}</p>
      <div className={style.productCard__box}>
        <div className={style.productCard__price}>{price}руб</div>
        <button
          className={style.productCard__buttonBox}
          onClick={()=>handleClickBuy()}
        >
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
