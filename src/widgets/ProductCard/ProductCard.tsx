import React from "react";
import style from "./ProductCard.module.scss";
import bag from "./../../assets/bag_Cart.svg";
import { Link } from "react-router-dom";
import { ButtonDell } from "../../shared/ButtonDell/ButtonDell";
import { useDispatch, useSelector } from "react-redux";
import { onAddCartItem } from "../../store/slice/cartSlice";
import { addToFavorities } from "../../store/slice/favoritiesSlice";

const ProductCard: React.FC<{
  item: any;
  delGood: any | null;
  delVisible: boolean;
  buyItems: any;
  id: string;
  image: string;
  description: string;
  price: string;
  name: string;
  size: string;
  addLikeToServer: any;
  setFavoritesItems: any;
  favoritesItems: any;
  mapFavor:any
}> = ({
  image,
  description,
  price,
  name,
  delGood,
  delVisible,
  buyItems,
  size,
  id,
  addLikeToServer,
  setFavoritesItems,
  favoritesItems,
  
}) => {
  const dispatch = useDispatch();
/*   const cartLikeItemsFromServer = useSelector((state: any) => state?.favorities)
  const cartLikeItemsId = useSelector((state: any) => state?.favorities?.favoritiesArray) */
  const userUid = useSelector((state: any) => state?.auth).user;

  async function handleClickBuy() {
    let newItem = {
      id: id,
      count: 1,
      price: price,
      name: name,
      description: description,
      image: image,
      size: size,
    };
    dispatch(
      onAddCartItem({
        ...newItem,
      })
    );
  }
  //instantLikes?.some(t => t.recipesId === id) ? style.recipe__heart_active : style.recipe__heart

  function handleAddItemToFavorities(id: string) {
    dispatch(
      addToFavorities({
        itemId: { id: favoritesItems },
        UserUId: userUid.id,
      })
    );
    addLikeToServer();

    if (favoritesItems.includes(id)) {
      const tmp = favoritesItems.filter((a: string) => a !== id);
      setFavoritesItems(tmp);
    } else {
      const tmp = [...favoritesItems, id];
      setFavoritesItems(tmp);
    }

  }


  return (
    <div className={style.productCard}>
      <Link
        to={`/catalog/${id}`}
        relative="path"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          className={style.productCard__image}
          src={image}
          width="370px"
          height="300px"
          alt="photo"
        />
      </Link>

      <div className={style.productCard__boxHeart}>
        <button
          className={
            !favoritesItems?.includes(id)
              ? style.productCard__heart
              : style.productCard__heart_active
          }
          onClick={() => handleAddItemToFavorities(id)}
        ></button>
      </div>
      <ButtonDell delVisible={delVisible} onClick={() => delGood(id)} />
      <h3 className={style.productCard__title}>{name}</h3>
      <p className={style.productCard__text}>{description}</p>
      <div className={style.productCard__box}>
        <div className={style.productCard__price}>{price}usd</div>
        <button
          className={style.productCard__buttonBox}
          onClick={() => handleClickBuy()}
        >
          <img
            className={style.productCard__buttonImage}
            height="19px"
            src={bag}
          />
          <div className={style.productCard__button}>
            {buyItems?.find((s: { id: string }) => s.id === id)?.count > 0
              ? `В корзине ${
                  buyItems?.find((s: { id: string }) => s.id === id)?.count
                } шт.`
              : "Добавить в корзину"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
