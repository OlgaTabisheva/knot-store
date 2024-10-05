import React, { useEffect, useState } from "react";
import style from "./Cart.module.scss";
import cat from "../../assets/catEmpty.png";
import { CartBox } from "../../widgets/CartBox/CartBox";
import { BannerBox } from "../../widgets/BannerBox/BannerBox";
import { CartPayBox } from "../../widgets/CartPayBox/CartPayBox";
import { ToastContainer } from "react-toastify";


export const Cart: React.FC<{addLikeToServer:any,setFavoritesItems:any, favoritesItems:any}> = ({addLikeToServer,setFavoritesItems, favoritesItems}) => {
  const [items, setItems] = useState<any>([]);
 // const cartLikeItemsFromServer = useSelector((state: any) => state?.favorities?.favoritiesGoodsArray?.goodsArray
//);


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

/*   useEffect(() => {
    if (localStorage.getItem("favorities")) {
      let tmp: any = JSON.parse(localStorage.getItem("favorities") || "{}");
      setFavoritesItems(tmp);
    }
  }, []); */

  return (
    <div className={style.cart}>
      <h3 className={style.cart__title}>Корзина</h3>
    {/*   {Array.isArray(items) && items.length !== 0 && (
        <h3>В вашей корзине {items.length} товара</h3>
      )} */}
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
                  setFavoritesItems={setFavoritesItems}
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
