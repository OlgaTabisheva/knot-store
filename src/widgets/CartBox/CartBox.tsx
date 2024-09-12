import React, { useEffect } from "react";

import style from "./CartBox.module.scss";
import { ButtonImage } from "../../entities/ButtonImage/ButtonImage";
import plus from "../../assets/sumpleIcons/plus_k851sseuxl9x.svg";
import minus from "../../assets/sumpleIcons/minus_uk9l2bpabquc.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  delItemFromCart,
  onAddCartItem,
  reduceCountCartItem,
} from "../../store/slice/cartSlice";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { toast, ToastContainer } from "react-toastify";

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
  setFavoritesItem:any;
  favoritesItems:any
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
  setFavoritesItem,
  favoritesItems
}) => {
  const dispatch = useDispatch();
  const buyItems = useSelector((state: any) => state.cart.cartArray);
  const userUid = useSelector((state: any) => state?.auth).user;

  async function handleAddItemToFavorities(id:string){
    if (favoritesItems.includes(id)){
      const tmp = favoritesItems.filter((a:string) => a !== id)
      console.log(tmp,'tp')
     setFavoritesItem(tmp)

    }
    else{
    const tmp = [...favoritesItems,id]
    setFavoritesItem(tmp)

    }
    const querySnapshot = await getDocs(collection(db, "Favorites"))
    const data: any = [];

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push({ id: doc.id, value: doc.data() });
    });
    let cityId: any = data.find(
      (city: any) => city?.value?.UserUId === userUid.id
    );
  
    dispatch(
      onAddCartItem({
        ...cityId,
      }))

     if (cityId?.value?.UserUId === userUid.id) {
      const washingtonRef = doc(db, "Favorites", `${cityId?.id}`);
      await updateDoc(washingtonRef, {
        itemId:{id: favoritesItems},
      })  
      
    
        .then(() => toast("Ваш первый лайк! Поздравляем!"))
        .catch(() => toast("Что-то пошло не так"));
    } else {
      await addDoc(collection(db, "Favorites"), {
        itemId: { id: favoritesItems },
        UserUId: userUid.id,
      })
        .then(() => toast("Ваши избранные позиции обновленны"))
        .catch(() => toast("Что-то пошло не так"));
    } 
  }



  async function handleDelItemFromCart(id: string) {
    //  e.preventDefault();
    let foundItem: any = items?.find((item: any) => item?.id === id);
    dispatch(
      delItemFromCart({
        ...foundItem,
      })
    );
  }
  function changeCount(e: any, a: string, operation: string) {
    e.preventDefault();
    let foundItem: any = items?.find((item: any) => item?.id === a);

    if (operation === "plus") {
      if (foundItem.count <= 0) {
      } else {
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
        dispatch(
          reduceCountCartItem({
            ...foundItem,
          })
        );
      }
    }
  }



  useEffect(() => {
    setItems(buyItems);
  }, [buyItems]);



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
                onClick={(e: any) => changeCount(e, id, "minus")}
              />{" "}
              <p>{count} шт.</p>
              <ButtonImage
                type={"button"}
                onClick={(e: any) => changeCount(e, id, "plus")}
                img={plus}
              />
            </div>
          </div>
        </div>
        <div className={style.cartBox__price}>USD {price * count}</div>
      </div>
      <div className={style.cartBox__boxButtons}>
        <button
          className={style.cartBox__button}
          onClick={() => handleAddItemToFavorities(id)}
        >
         { favoritesItems.includes(id) ? 'Удалить из избранного' : "Отложить в избранное"}
        </button>
        <button
          className={style.cartBox__button}
          onClick={() => handleDelItemFromCart(id)}
        >
          Удалить
        </button>
      </div>
      <ToastContainer />

    </div>
  );
};
