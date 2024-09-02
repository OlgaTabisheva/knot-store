import React, { useEffect, useState } from "react";
import style from "./Cart.module.scss";
import { CartBox } from "../CartBox/CartBox";
import { CartPayBox } from "../CartPayBox/CartPayBox";
import { useDispatch, useSelector } from "react-redux";
import { onfetchCart } from "../../store/slice/cartSlice";
import { BannerBox } from "../BannerBox/BannerBox";
import cat from "../../assets/catEmpty.png";

export const Cart: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartArray);
  const dispatch = useDispatch();
  const [items, setItems] = useState<any>([]);

  console.log(cartItems,'cartItems')

/*   function changeCount(a: string, operation: string) {
    let foundItem: any = items?.find((item: any) => item?.id === a);

    if (operation === "plus") {
      if (foundItem.count <= 0) {
      } else {
        let tmp = items.filter((item: { id: string }) => item.id !== a);
        let couterItem = {
          id: foundItem?.id,
          count: foundItem?.count,
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

        setItems(tmp);
      }
    }
    if (operation === "minus") {
      if (foundItem.count <= 1) {
      } else {
        let tmp = items.filter((item: { id: string }) => item.id !== a);
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

        setItems(tmp);
      }
    }
    localStorage.setItem("addToCartBox", JSON.stringify(items));
    dispatch(
      onfetchCart({
        cart: items,
      })
    );
  } */

  async function handleDelItemFromCart(event,id: string) {
    event.preventDefault()
    let tmp: any = items?.filter((item: any) => item?.id !== id)
    console.log(tmp, "tmp");
    setItems(tmp);
    console.log(items, "tmp");

    localStorage.setItem("addToCartBox", JSON.stringify(items));
    dispatch(
      onfetchCart({
        cart: items,
      })
    );
  }
  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  useEffect(()=>{
    localStorage.removeItem("addToCartBox")
  },[handleDelItemFromCart])

  return (
    <div className={style.cart}>
      <h3 className={style.cart__title}>Корзина</h3>
      {Array.isArray(items) && items.length !== 0 &&  <h3>В вашей корзине 4 товара</h3> }
      <div className={style.cart__cover}>
        <div className={style.cart__box}>
          {Array.isArray(items) && items.length !== 0 ? items?.map(
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
                handleDelItemFromCart={handleDelItemFromCart}
              />
            ) 
          ): (
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
