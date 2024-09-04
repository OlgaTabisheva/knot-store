import React, { useEffect, useState } from "react";
import style from "./Cart.module.scss";
import { CartBox } from "../CartBox/CartBox";
import { CartPayBox } from "../CartPayBox/CartPayBox";
import { useDispatch, useSelector } from "react-redux";
import { onfetchCart } from "../../store/slice/cartSlice";
import { BannerBox } from "../BannerBox/BannerBox";
import cat from "../../assets/catEmpty.png";
import { iteratee } from "lodash";

export const Cart: React.FC = () => {
  const dataItemsFromServer = useSelector((state: any) => state.cart.cartArray);

  const [items, setItems] = useState<any>([]);


  useEffect(()=>{
   console.log( dataItemsFromServer, 'dataItemsFromServer')
  },[dataItemsFromServer])
  /*   useEffect(()=>{
    localStorage.removeItem("addToCartBox")
  },[handleDelItemFromCart])
 */
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
        // a должно быть равным b
        return 0;
      });
      setItems(tmp);
    }
    console.log(items, "items");
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
              (cartItem: {
                id: string;
                count: number;
                name: string;
                size: string;
                price: number;
                CategoryName: string;
                image: string;
              }) => (
                <CartBox
                  key={cartItem.id}
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
    </div>
  );
};
