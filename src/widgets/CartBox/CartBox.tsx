import React, { useEffect } from "react";

import style from "./CartBox.module.scss";
import { ButtonImage } from "../../entities/ButtonImage/ButtonImage";
import plus from "../../assets/sumpleIcons/plus_k851sseuxl9x.svg";
import minus from "../../assets/sumpleIcons/minus_uk9l2bpabquc.svg";
import { useDispatch, useSelector } from "react-redux";
import { delCartItem, onAddCartItem, onfetchCart, reduceCountCartItem } from "../../store/slice/cartSlice";

interface cartBoxInt {
  name: string;
  price: number;
  size: string;
  CategoryName: string;
  count: number;
  image: string;
  id: string;
  items: any;
  setItems: any;
}

export const CartBox: React.FC<cartBoxInt> = ({
  name,
  size,
  price,
  CategoryName,
  count,
  image,
  id,
  setItems,
  items,
}) => {
  const dispatch = useDispatch();
  const buyItems = useSelector((state: any) => state.cart.cartArray);

  async function handleDelItemFromCart(e, id: string) {
    e.preventDefault();
    console.log(id, "id");

    let tmp: any = items?.filter((item: any) => item?.id !== id);
    setItems(tmp);
    console.log(tmp, "tmp");
    console.log(items, "items");

    localStorage.setItem("addToCartBox", JSON.stringify(items));
    dispatch(
      onfetchCart({
        cart: items,
      })
    );
  }
  function changeCount(e, a: string, operation: string) {
    e.preventDefault();

    console.log(a,'dddd')
    let foundItem: any = items?.find((item: any) => item?.id === a);

    if (operation === "plus") {
      if (foundItem.count <= 0) {
      } else {
   /*      let tmp = items.filter((item: { id: string }) => item.id !== a);
        let couterItem = {
          id: foundItem?.id,
          count: foundItem?.count +1,
          price: foundItem?.price,
          name: foundItem?.name,
          size: foundItem?.size,
          image: foundItem?.image,
          CategoryName: foundItem?.CategoryName,
        };
        tmp = [...tmp, couterItem];
        tmp.sort(function (a: { id: string }, b: { id: string }) {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        }); */
        dispatch(
          onAddCartItem({
            ...foundItem,
          })
        );
       // setItems(tmp);
      }
    }
    if (operation === "minus") {
      if (foundItem.count <= 1) {
      } else {
  /*       let tmp = items.filter((item: { id: string }) => item.id !== a);
        let couterItem = {
          id: foundItem?.id,
          count: foundItem.count - 1,
          price: foundItem?.price,
          name: foundItem?.name,
          size: foundItem?.size,
          image: foundItem?.image,
          CategoryName: foundItem?.CategoryName,
        };
        tmp = [...tmp, couterItem];
        tmp.sort(function (a: { id: string }, b: { id: string }) {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        });
        localStorage.setItem("addToCartBox", JSON.stringify(items)); */
        dispatch(
          reduceCountCartItem({
            ...foundItem
          })
        );
     //   setItems(tmp);
      }
    }
   
  }

  useEffect(()=>{
   setItems (buyItems)
  },(buyItems))



  return (
    <div className={style.cartBox}>
      <h3 className={style.cartBox__title}>Позиция: {name}</h3>
      <div className={style.cartBox__box}>
        <div className={style.cartBox__imgBox}>
          <img src={image} className={style.cartBox__img} />
          <div className={style.cartBox__itemDescriptionBox}>
            <h4>{CategoryName}</h4>
            <p>{size} размер</p>
            <div className={style.cartBox__countBox}>
              <ButtonImage
                img={minus}
                type={"button"}
                onClick={(e) => changeCount(e, id, "minus")}
              />{" "}
              <p>{count} шт.</p>
              <ButtonImage
                type={"button"}
                onClick={(e) => changeCount(e, id, "plus")}
                img={plus}
              />
            </div>
          </div>
        </div>
        <div className={style.cartBox__price}>USD {price * count}</div>
      </div>
      <div className={style.cartBox__boxButtons}>
        <button className={style.cartBox__button}>Отложить в избранное</button>
        <button
          className={style.cartBox__button}
          onClick={(e) => handleDelItemFromCart(e, id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};
