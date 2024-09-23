import React, { useEffect, useState } from "react";
import style from "./Cart.module.scss";
import cat from "../../assets/catEmpty.png";
import { CartBox } from "../../widgets/CartBox/CartBox";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import { CartPayBox } from "../../widgets/CartPayBox/CartPayBox";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import db from "../../firebase-config/firebase";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorities } from "../../store/slice/favoritiesSlice";


export const Cart: React.FC = () => {
  const [items, setItems] = useState<any>([]);
  const [favoritesItems, setFavoritesItem] = useState<any>([]);
  const userUid = useSelector((state: any) => state?.auth).user;
  const dispatch = useDispatch();


async function addLikeToServer(){
  const querySnapshot = await getDocs(collection(db, "Favorites"))
    const data: any = [];

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push({ id: doc.id, value: doc.data() });
    });
    let cityId: any = data.find(
      (city: any) => city?.value?.UserUId === userUid?.id
    );
  console.log(data,'data')
/*     
 */
     if (cityId?.value?.UserUId === userUid?.id) {
      console.log(favoritesItems,'favoritesItems')

      const washingtonRef = doc(db, "Favorites", `${cityId?.id}`);
      await updateDoc(washingtonRef, {
        itemId:{id: favoritesItems},
      })  
       .then(()=>{
        dispatch(
          addToFavorities({
            itemId: { id: favoritesItems },
            UserUId: userUid.id,
          }))
      }) 
        .then(() => toast("Ваши избранные позиции обновленны"))
        .catch((e) => console.log(e) )
    } else {
      console.log('else')
      await addDoc(collection(db, "Favorites"), {
        itemId: { id: favoritesItems },
        UserUId: userUid.id,
      })
        .then(() => toast("Ваш первый лайк! Поздравляем!"))
        .catch((e) => console.log(e, 'привет'))
    } 
}


  useEffect(() => {
    if (localStorage.getItem("addToCartBox")) {
      let tmp = JSON.parse(localStorage.getItem("addToCartBox") || "{}");
      tmp?.sort(function (a: { id: string }, b: { id: string }) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
      setItems(tmp);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("favorities")) {
      let tmp:any = JSON.parse(localStorage.getItem("favorities") || "{}");
      setFavoritesItem(tmp)
      console.log(tmp, 'fi')
    }
  }, []);


  return (
    <div className={style.cart}>
      <h3 className={style.cart__title}>Корзина</h3>
      {Array.isArray(items) && items.length !== 0 && (
        <h3>В вашей корзине 4 товара</h3>
      )}
      <div className={style.cart__cover}>
        <div className={style.cart__box}>
          {Array.isArray(items) && items.length !== 0 ? (
            items?.map(
              (
                cartItem: {
                  id: string;
                  count: number;
                  name: string;
                  size: string;
                  price: number;
                  CategoryName: string;
                  image: string;
                },
                index
              ) => (
                <CartBox
                  favoritesItems={favoritesItems}
                  setFavoritesItem={setFavoritesItem}
                  addLikeToServer={addLikeToServer}
                  key={index}
                  id={cartItem.id}
                  count={cartItem?.count}
                  image={cartItem?.image}
                  name={cartItem?.name}
                  size={cartItem?.size}
                  price={cartItem?.price}
                  CategoryName={cartItem?.CategoryName}
                  setItems={setItems}
                  items={items}
                />
              )
            )
          ) : (
            <BannerBox
              image={cat}
              name=" В вашей корзине нет товаров "
              date={null}
              text="Пусто"
              about={null}
              buttonOne={true}
              buttonTwo={false}
              buttonOTwoName={null}
              buttonOneName="Перейти на главную"
            />
          )}
        </div>

        {Array.isArray(items) && items.length !== 0 && <CartPayBox />}
      </div>
      <ToastContainer />

    </div>
  );
};

